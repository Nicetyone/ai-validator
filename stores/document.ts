import { defineStore } from 'pinia';

export interface Document {
  id: string;
  hash: string;  // Content-based hash ID
  name: string;
  size: string;
  date: Date;
  status: 'Processing' | 'Complete' | 'Failed';
  result: string;
  aiScore?: number;
  summary?: string;
  certificateId?: string;  // Unique certificate ID for verification
  keyFindings?: string[];
  analysisCategories?: {
    name: string;
    score: number;
    description: string;
  }[];
  excerpts?: {
    text: string;
    type: 'ai' | 'human' | 'unknown';
    explanation: string;
  }[];
}

// Simulated server-side storage - persists across page refreshes
const simulatedDatabase = {
  documents: new Map<string, Document>(),
  
  // Add document to DB
  addDocument(doc: Document) {
    this.documents.set(doc.id, doc);
    return doc;
  },
  
  // Get document by ID
  getDocument(id: string) {
    return this.documents.get(id) || null;
  },
  
  // Get all documents
  getAllDocuments() {
    return Array.from(this.documents.values());
  },
  
  // Get document by hash
  getDocumentByHash(hash: string) {
    return Array.from(this.documents.values()).find(doc => doc.hash === hash) || null;
  },
  
  // Get document by certificate ID
  getDocumentByCertificateId(certificateId: string) {
    return Array.from(this.documents.values()).find(doc => doc.certificateId === certificateId) || null;
  },
  
  // Delete document
  deleteDocument(id: string) {
    return this.documents.delete(id);
  },
  
  // Clear all documents
  clearAllDocuments() {
    this.documents.clear();
  }
};

// Key for localStorage
const STORAGE_KEY = 'ai-validator-documents-v2';

// Safe access to localStorage (only in browser environment)
const storage = {
  getItem(key: string): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  },
  
  setItem(key: string, value: string): boolean {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
      return true;
    }
    return false;
  },
  
  removeItem(key: string): boolean {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
      return true;
    }
    return false;
  }
};

// Hash generation utility - ensures consistent hash across uploads of the same file
const hashUtils = {
  // Generate a deterministic ID from hash
  generateIdFromHash(hash: string): string {
    // Use the first 10 characters of the hash to create a unique ID
    return hash.substring(0, 10);
  },
  
  // Generate a deterministic certificate ID from hash
  generateCertificateIdFromHash(hash: string): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const sections = [];
    
    // Use different parts of the hash to generate a deterministic but readable ID
    for (let i = 0; i < 4; i++) {
      const sectionHash = hash.substring(i * 8, (i + 1) * 8);
      let section = '';
      
      for (let j = 0; j < 4; j++) {
        // Convert a pair of hex chars to a number and use it to index into the chars array
        const hexPair = sectionHash.substring(j * 2, (j + 1) * 2);
        const index = parseInt(hexPair, 16) % chars.length;
        section += chars.charAt(index);
      }
      
      sections.push(section);
    }
    
    return sections.join('-');
  }
};

export const useDocumentStore = defineStore('document', {
  state: () => ({
    documents: [] as Document[],
    selectedDocument: null as Document | null,
    isLoading: false,
    error: null as string | null,
    isInitialized: false
  }),
  
  getters: {
    getDocumentById: (state) => (id: string) => {
      return state.documents.find(doc => doc.id === id) || null;
    },
    
    getDocumentByHash: (state) => (hash: string) => {
      return state.documents.find(doc => doc.hash === hash) || null;
    },
    
    getDocumentByCertificateId: (state) => (certificateId: string) => {
      return state.documents.find(doc => doc.certificateId === certificateId) || null;
    },
    
    recentDocuments: (state) => {
      return [...state.documents]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);
    },
    
    completedDocuments: (state) => {
      return state.documents.filter(doc => doc.status === 'Complete');
    },
    
    processingDocuments: (state) => {
      return state.documents.filter(doc => doc.status === 'Processing');
    },
    
    failedDocuments: (state) => {
      return state.documents.filter(doc => doc.status === 'Failed');
    }
  },
  
  actions: {
    // Initialize the store - called once at app startup
    async initialize() {
      if (this.isInitialized) return;
      
      // Only initialize on client-side
      if (process.client) {
        await this.syncFromServer();
        this.isInitialized = true;
      }
    },
    
    // Load documents from localStorage to the simulated server
    loadFromLocalStorage() {
      try {
        const cachedDocuments = storage.getItem(STORAGE_KEY);
        if (cachedDocuments) {
          const parsedDocs = JSON.parse(cachedDocuments);
          
          // Clear existing data
          simulatedDatabase.clearAllDocuments();
          
          // Add parsed documents to simulated database
          parsedDocs.forEach((doc: any) => {
            simulatedDatabase.addDocument({
              ...doc,
              date: new Date(doc.date)
            });
          });
          
          return true;
        }
      } catch (error) {
        console.error('Error loading documents from cache:', error);
      }
      return false;
    },
    
    // Save documents from simulated server to localStorage
    saveToLocalStorage() {
      try {
        const documents = simulatedDatabase.getAllDocuments();
        return storage.setItem(STORAGE_KEY, JSON.stringify(documents));
      } catch (error) {
        console.error('Error saving documents to cache:', error);
        return false;
      }
    },
    
    // Clear localStorage and simulated server
    clearAllData() {
      try {
        // Clear localStorage
        storage.removeItem(STORAGE_KEY);
        
        // Clear simulated database
        simulatedDatabase.clearAllDocuments();
        
        // Clear store state
        this.documents = [];
        this.selectedDocument = null;
        
        return true;
      } catch (error) {
        console.error('Error clearing data:', error);
        return false;
      }
    },
    
    // Sync data from simulated server to store
    async syncFromServer() {
      this.isLoading = true;
      
      try {
        // Load from localStorage into simulated server first
        this.loadFromLocalStorage();
        
        // Get all documents from simulated server
        const documents = simulatedDatabase.getAllDocuments();
        
        // Update store state
        this.documents = documents;
        
        return true;
      } catch (error) {
        console.error('Error syncing from server:', error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },
    
    // Generate SHA-256 hash from file content
    async generateFileHash(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async (event) => {
          try {
            if (!event.target?.result) {
              reject(new Error('Failed to read file'));
              return;
            }
            
            const arrayBuffer = event.target.result as ArrayBuffer;
            const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            
            resolve(hashHex);
          } catch (error) {
            reject(error);
          }
        };
        
        reader.onerror = () => {
          reject(new Error('Error reading file'));
        };
        
        // Read file as text or array buffer depending on type
        if (file.type === 'text/plain') {
          reader.readAsText(file);
        } else {
          reader.readAsArrayBuffer(file);
        }
      });
    },
    
    // Generate a unique certificate ID
    generateCertificateId(): string {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let id = '';
      for (let i = 0; i < 16; i++) {
        if (i > 0 && i % 4 === 0) {
          id += '-';
        }
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
    },
    
    // Fetch all documents
    async fetchDocuments() {
      if (!process.client) return [];
      
      this.isLoading = true;
      this.error = null;
      
      try {
        // Sync from simulated server
        await this.syncFromServer();
        return this.documents;
      } catch (error: any) {
        this.error = error.message || 'An error occurred';
        return [];
      } finally {
        this.isLoading = false;
      }
    },
    
    // Fetch document by ID
    async fetchDocumentById(id: string) {
      if (!process.client) return null;
      
      this.isLoading = true;
      this.error = null;
      
      try {
        // First check in current state
        const stateDoc = this.getDocumentById(id);
        if (stateDoc) {
          this.selectedDocument = stateDoc;
          return stateDoc;
        }
        
        // Then check simulated server
        const serverDoc = simulatedDatabase.getDocument(id);
        if (serverDoc) {
          this.selectedDocument = serverDoc;
          return serverDoc;
        }
        
        this.error = 'Document not found';
        return null;
      } catch (error: any) {
        this.error = error.message || 'An error occurred';
        return null;
      } finally {
        this.isLoading = false;
      }
    },
    
    // Upload and analyze document
    async uploadDocument(file: File) {
      if (!process.client) return null;
      
      this.isLoading = true;
      this.error = null;
      
      try {
        // Ensure simulated server is initialized
        this.loadFromLocalStorage();
        
        // Generate file hash
        const hash = await this.generateFileHash(file);
        
        // Check if document with this hash already exists in simulated server
        const existingDoc = simulatedDatabase.getDocumentByHash(hash);
        if (existingDoc && existingDoc.status === 'Complete') {
          // Document already analyzed, return it
          
          // Make sure it's in our state
          const index = this.documents.findIndex(doc => doc.id === existingDoc.id);
          if (index === -1) {
            this.documents.push(existingDoc);
          }
          
          this.isLoading = false;
          return existingDoc;
        }
        
        // Simulate server-side processing
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Create a deterministic ID based on the hash
        const id = hashUtils.generateIdFromHash(hash);
        
        // Generate AI analysis based on content
        const analysisResult = await this.analyzeDocument(file);
        
        // Generate a deterministic certificate ID based on the hash
        const certificateId = hashUtils.generateCertificateIdFromHash(hash);
        
        // Create new document object
        const newDocument: Document = {
          id,
          hash,
          name: file.name,
          size: this.formatFileSize(file.size),
          date: new Date(),
          status: 'Complete',
          result: analysisResult.result,
          aiScore: analysisResult.aiScore,
          summary: analysisResult.summary,
          certificateId,
          keyFindings: analysisResult.keyFindings,
          analysisCategories: analysisResult.analysisCategories,
          excerpts: analysisResult.excerpts
        };
        
        // Add to simulated server
        simulatedDatabase.addDocument(newDocument);
        
        // Save to localStorage
        this.saveToLocalStorage();
        
        // Update state
        const existingIndex = this.documents.findIndex(doc => doc.id === id);
        if (existingIndex !== -1) {
          this.documents[existingIndex] = newDocument;
        } else {
          this.documents.unshift(newDocument);
        }
        
        return newDocument;
      } catch (error: any) {
        this.error = error.message || 'An error occurred';
        return null;
      } finally {
        this.isLoading = false;
      }
    },
    
    // Analyze document
    async analyzeDocument(file: File) {
      // Extract text content from file
      const fileContent = await this.extractTextFromFile(file);
      
      // Calculate various linguistic metrics
      const metrics = this.calculateLinguisticMetrics(fileContent);
      
      // Analyze patterns in the text
      const patternAnalysis = this.analyzeTextPatterns(fileContent);
      
      // Analyze language complexity
      const complexityAnalysis = this.analyzeLanguageComplexity(fileContent);
      
      // Analyze topic coherence
      const coherenceScore = this.analyzeTopicCoherence(fileContent);
      
      // Calculate creativity score
      const creativityScore = this.analyzeCreativity(fileContent);
      
      // Calculate repetition score
      const repetitionScore = this.analyzeRepetition(fileContent);
      
      // Calculate AI score - lower is more human-like
      const rawScore = (
        patternAnalysis.score * 0.3 +
        complexityAnalysis.score * 0.2 +
        (1 - coherenceScore) * 0.2 +
        (1 - creativityScore) * 0.15 +
        repetitionScore * 0.15
      ) * 100;
      
      // Clamp score between 5-95%
      const aiScore = Math.max(5, Math.min(95, Math.round(rawScore)));
      
      // Determine result level
      let result, summary;
      if (aiScore < 30) {
        result = 'Level 1: Clean';
        summary = 'No AI detected. The document appears to be entirely human-created with high quality writing.';
      } else if (aiScore < 65) {
        result = 'Level 2: AI-Supported';
        summary = 'This document shows signs of AI assistance, but with significant human input and editing. The quality is acceptable.';
      } else {
        result = 'Level 3: AI-Generated';
        summary = 'This document appears to be primarily AI-generated with minimal human editing. The quality is poor with obvious AI patterns.';
      }
      
      // Generate detailed analysis categories
      const analysisCategories = [
        {
          name: 'Linguistic Patterns',
          score: patternAnalysis.score * 100,
          description: patternAnalysis.description
        },
        {
          name: 'Language Complexity',
          score: complexityAnalysis.score * 100,
          description: complexityAnalysis.description
        },
        {
          name: 'Topic Coherence',
          score: (1 - coherenceScore) * 100,
          description: this.getCoherenceDescription(coherenceScore)
        },
        {
          name: 'Creativity & Originality',
          score: (1 - creativityScore) * 100,
          description: this.getCreativityDescription(creativityScore)
        },
        {
          name: 'Repetition & Redundancy',
          score: repetitionScore * 100,
          description: this.getRepetitionDescription(repetitionScore)
        }
      ];
      
      // Extract key findings
      const keyFindings = this.generateKeyFindings(result, metrics, patternAnalysis, complexityAnalysis);
      
      // Extract notable excerpts
      const excerpts = this.extractNotableExcerpts(fileContent, patternAnalysis, complexityAnalysis);
      
      return {
        result,
        aiScore,
        summary,
        keyFindings,
        analysisCategories,
        excerpts
      };
    },
    
    // Extract text from file
    async extractTextFromFile(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (event) => {
          try {
            if (!event.target?.result) {
              reject(new Error('Failed to read file'));
              return;
            }
            
            // Get file type
            const fileType = file.type;
            let text = '';
            
            if (fileType === 'text/plain') {
              // Plain text file
              text = event.target.result as string;
            } else if (fileType === 'application/pdf') {
              // For PDF, in a real app we would use a PDF parser library
              // Here we'll extract any text we can from the binary data
              const binary = new Uint8Array(event.target.result as ArrayBuffer);
              let str = '';
              for (let i = 0; i < binary.length; i++) {
                // Extract only ASCII text characters
                if (binary[i] >= 32 && binary[i] <= 126) {
                  str += String.fromCharCode(binary[i]);
                }
              }
              // Extract any text fragments that look meaningful
              const textFragments = str.match(/[a-zA-Z]{3,}[\s\.\,][a-zA-Z\s\.\,\;\:\?\!]{10,}/g) || [];
              text = textFragments.join(' ');
            } else if (fileType.includes('word') || fileType.includes('office') || 
                      fileType.includes('document') || file.name.endsWith('.docx') || file.name.endsWith('.doc')) {
              // For Word docs, extract text from binary
              const binary = new Uint8Array(event.target.result as ArrayBuffer);
              let str = '';
              for (let i = 0; i < binary.length; i++) {
                // Extract only ASCII text characters
                if (binary[i] >= 32 && binary[i] <= 126) {
                  str += String.fromCharCode(binary[i]);
                }
              }
              // Extract any text fragments that look meaningful
              const textFragments = str.match(/[a-zA-Z]{3,}[\s\.\,][a-zA-Z\s\.\,\;\:\?\!]{10,}/g) || [];
              text = textFragments.join(' ');
            } else {
              // For other file types, try to read as text
              text = event.target.result as string;
              
              // If it's not readable as text, extract from filename and placeholder
              if (!text || text.length < 50) {
                const fileName = file.name.replace(/\.[^/.]+$/, ""); // Remove extension
                const words = fileName.split(/[-_.\s]/);
                text = `This is a document about ${words.join(' ')}. `;
                text += `Document content could not be extracted properly.`;
              }
            }
            
            // Remove any non-printable characters
            text = text.replace(/[^\x20-\x7E\s]/g, '');
            
            // If we got very little text, return a message
            if (text.length < 50) {
              text += " The document contains limited text content that could be extracted.";
            }
            
            resolve(text);
          } catch (error) {
            console.error('Error extracting text:', error);
            // Fallback to a basic extraction
            const fileName = file.name.replace(/\.[^/.]+$/, "");
            resolve(`Document: ${fileName}. The content could not be properly extracted.`);
          }
        };
        
        reader.onerror = () => {
          reject(new Error('Error reading file'));
        };
        
        // Read file as text or array buffer depending on type
        if (file.type === 'text/plain') {
          reader.readAsText(file);
        } else {
          reader.readAsArrayBuffer(file);
        }
      });
    },
    
    // Calculate Shannon entropy of text
    calculateTextEntropy(text: string): number {
      const len = text.length;
      const frequencies: {[key: string]: number} = {};
      
      // Count character frequencies
      for (let i = 0; i < len; i++) {
        const char = text[i];
        frequencies[char] = (frequencies[char] || 0) + 1;
      }
      
      // Calculate entropy
      return Object.values(frequencies).reduce((entropy, freq) => {
        const p = freq / len;
        return entropy - p * Math.log2(p);
      }, 0);
    },
    
    // Helper method to format file size
    formatFileSize(bytes: number): string {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },
    
    // Generate key findings based on result level
    generateKeyFindings(result: string, metrics: any, patternAnalysis: any, complexityAnalysis: any): string[] {
      if (result.includes('Clean')) {
        return [
          'Natural language patterns with varied sentence structures',
          `Strong lexical diversity (${Math.round(metrics.lexicalDiversity * 100)}% unique words)`,
          'Appropriate complexity and balanced readability',
          'Logical flow and contextual coherence between paragraphs',
          'Limited use of generic phrases and boilerplate language'
        ];
      } else if (result.includes('AI-Supported')) {
        return [
          'Mixed writing patterns with some structural repetition',
          `Moderate lexical diversity (${Math.round(metrics.lexicalDiversity * 100)}% unique words)`,
          patternAnalysis.boilerplateScore > 0.5 
            ? 'Several instances of boilerplate phrases typical of AI text' 
            : 'Occasional use of generic phrasing that could be improved',
          complexityAnalysis.score > 0.5
            ? 'Uneven complexity with some sections overly simplified or unnecessarily complex'
            : 'Generally balanced complexity with some inconsistencies',
          'Some sections show stronger human input while others appear more AI-generated'
        ];
      } else {
        return [
          'Highly formulaic sentence structures throughout',
          `Low lexical diversity (${Math.round(metrics.lexicalDiversity * 100)}% unique words)`,
          'Frequent use of generic phrases and boilerplate language',
          patternAnalysis.genericScore > 0.7 
            ? 'Excessive use of vague, non-specific language typical of AI-generated content'
            : 'Repetitive phrasing that lacks originality',
          'Poor contextual coherence with limited logical flow between concepts'
        ];
      }
    },
    
    // Generate analysis categories based on AI score
    generateAnalysisCategories(aiScore: number): { name: string; score: number; description: string; }[] {
      const isAIGenerated = aiScore > 70;
      const isAISupported = aiScore > 30 && aiScore <= 70;
      
      return [
        {
          name: 'Linguistic Patterns',
          score: isAIGenerated ? 95 : (isAISupported ? 62 : 15),
          description: isAIGenerated 
            ? 'Highly consistent sentence structures and phrasing patterns typical of AI-generated text.'
            : (isAISupported 
              ? 'Some sections show repetitive patterns typical of AI generation, while others exhibit natural human variation.'
              : 'The document shows natural language patterns with appropriate variations in structure and complexity.')
        },
        {
          name: 'Content Originality',
          score: isAIGenerated ? 88 : (isAISupported ? 45 : 8),
          description: isAIGenerated 
            ? 'Content largely composed of generic statements and common knowledge rather than original insights.'
            : (isAISupported 
              ? 'Content shows a mix of potentially AI-generated passages and original human insights.'
              : 'Content appears original with properly cited sources and integration of diverse perspectives.')
        },
        {
          name: 'Contextual Coherence',
          score: isAIGenerated ? 82 : (isAISupported ? 55 : 10),
          description: isAIGenerated 
            ? 'Generally coherent but with occasional context shifts and surface-level treatment of topics.'
            : (isAISupported 
              ? 'Generally good contextual understanding with occasional inconsistencies.'
              : 'Strong contextual understanding with appropriate connections between concepts.')
        },
        {
          name: 'Stylistic Consistency',
          score: isAIGenerated ? 97 : (isAISupported ? 68 : 14),
          description: isAIGenerated 
            ? 'Extremely consistent style throughout, lacking the natural variations typical in human writing.'
            : (isAISupported 
              ? 'Noticeable style variations between sections, suggesting multiple sources or methods of creation.'
              : 'Consistent writing style throughout with natural variations that indicate human authorship.')
        }
      ];
    },
    
    // Generate excerpts based on result level and content
    generateExcerpts(result: string, content: string): { text: string; type: 'ai' | 'human' | 'unknown'; explanation: string; }[] {
      // Extract some sample sentences from content
      const sentences = content.split(/[.!?]/).filter(s => s.trim().length > 20);
      const sampleSentences = sentences.slice(0, 3);
      
      if (result.includes('Clean')) {
        return [];
      } else if (result.includes('AI-Supported')) {
        // Use a mix of predefined and content-based excerpts
        return [
          {
            text: sampleSentences[0] || 'The implementation of machine learning algorithms in healthcare settings has shown promising results across various diagnostic procedures and treatment protocols.',
            type: 'ai',
            explanation: 'Generic phrasing common in AI-generated content about the topic.'
          },
          {
            text: sampleSentences[1] || "My own experience with patient data revealed unexpected correlations between treatment adherence and socioeconomic factors that weren't evident in the published literature.",
            type: 'human',
            explanation: 'Personal insight and nuanced observation typical of human experience.'
          }
        ];
      } else {
        // Use primarily content-based excerpts for AI-generated
        return [
          {
            text: sampleSentences[0] || 'The proposed project will leverage cutting-edge technology to implement innovative solutions that address key challenges in the target sector while maximizing stakeholder value and promoting sustainable outcomes.',
            type: 'ai',
            explanation: 'Generic business jargon with minimal specific content; typical of AI-generated text.'
          },
          {
            text: sampleSentences[1] || 'Our approach will utilize state-of-the-art methodologies to analyze complex data sets, enabling data-driven decision making that optimizes resource allocation and enhances operational efficiency.',
            type: 'ai',
            explanation: 'Vague technical description without specific methodologies or techniques mentioned.'
          },
          {
            text: sampleSentences[2] || 'The implementation timeline will be structured to ensure timely delivery of project milestones while maintaining flexibility to accommodate stakeholder feedback and changing requirements.',
            type: 'ai',
            explanation: 'Generic project management language that could apply to virtually any project.'
          }
        ];
      }
    },
    
    // Check document status (simulated)
    async checkDocumentStatus(id: string) {
      if (!process.client) return null;
      
      try {
        const document = simulatedDatabase.getDocument(id);
        
        if (document && document.status === 'Processing') {
          // Simulate completion of processing
          document.status = 'Complete';
          
          // Update in simulated database
          simulatedDatabase.addDocument(document);
          
          // Save to localStorage
          this.saveToLocalStorage();
          
          // Update in state if needed
          const index = this.documents.findIndex(doc => doc.id === id);
          if (index !== -1) {
            this.documents[index] = document;
          }
          
          if (this.selectedDocument?.id === id) {
            this.selectedDocument = document;
          }
        }
        
        return document;
      } catch (error) {
        console.error('Error checking document status:', error);
        return null;
      }
    },
    
    // Delete document
    deleteDocument(id: string) {
      if (!process.client) return false;
      
      try {
        // Delete from simulated database
        const success = simulatedDatabase.deleteDocument(id);
        
        if (success) {
          // Delete from state
          this.documents = this.documents.filter(doc => doc.id !== id);
          
          // If selected document is deleted, clear it
          if (this.selectedDocument?.id === id) {
            this.selectedDocument = null;
          }
          
          // Save changes to localStorage
          this.saveToLocalStorage();
        }
        
        return success;
      } catch (error) {
        console.error('Error deleting document:', error);
        return false;
      }
    },
    
    // Verify a document by certificate ID
    verifyDocument(certificateId: string) {
      if (!process.client) return null;
      
      // First check in state
      const stateDoc = this.documents.find(doc => doc.certificateId === certificateId);
      if (stateDoc) return stateDoc;
      
      // Then check in simulated database
      return simulatedDatabase.getDocumentByCertificateId(certificateId);
    },
    
    resetError() {
      this.error = null;
    },
    
    // Calculate linguistic metrics
    calculateLinguisticMetrics(text: string) {
      // Normalize text
      const normalizedText = text.toLowerCase().replace(/\s+/g, ' ').trim();
      
      // Split into sentences, words, and paragraphs
      const sentences = normalizedText.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const words = normalizedText.split(/\s+/).filter(w => w.length > 0);
      const paragraphs = normalizedText.split(/\n\s*\n/).filter(p => p.trim().length > 0);
      
      // Word-level metrics
      const wordCount = words.length;
      const uniqueWords = new Set(words).size;
      const wordVariety = uniqueWords / (wordCount || 1);
      const avgWordLength = words.reduce((sum, word) => sum + word.length, 0) / (wordCount || 1);
      
      // Sentence-level metrics
      const sentenceCount = sentences.length;
      const avgSentenceLength = wordCount / (sentenceCount || 1);
      const sentenceLengthVariation = this.calculateVariation(sentences.map(s => s.split(/\s+/).length));
      
      // Paragraph-level metrics
      const paragraphCount = paragraphs.length;
      const avgParagraphLength = wordCount / (paragraphCount || 1);
      const paragraphLengthVariation = this.calculateVariation(paragraphs.map(p => p.split(/\s+/).length));
      
      // Calculate lexical diversity (ratio of unique words to total words)
      const lexicalDiversity = uniqueWords / (wordCount || 1);
      
      // Count transition words (indicators of complex thought)
      const transitionWords = [
        'however', 'therefore', 'furthermore', 'consequently', 'meanwhile',
        'nevertheless', 'alternatively', 'conversely', 'similarly', 'additionally',
        'subsequently', 'despite', 'although', 'whereas', 'moreover'
      ];
      const transitionWordCount = words.filter(word => transitionWords.includes(word)).length;
      const transitionWordRatio = transitionWordCount / (wordCount || 1);
      
      return {
        wordCount,
        uniqueWords,
        wordVariety,
        avgWordLength,
        sentenceCount,
        avgSentenceLength,
        sentenceLengthVariation,
        paragraphCount,
        avgParagraphLength,
        paragraphLengthVariation,
        lexicalDiversity,
        transitionWordCount,
        transitionWordRatio
      };
    },
    
    // Calculate statistical variation (normalized standard deviation)
    calculateVariation(values: number[]): number {
      if (values.length <= 1) return 0;
      
      const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
      const squaredDiffs = values.map(val => Math.pow(val - mean, 2));
      const variance = squaredDiffs.reduce((sum, val) => sum + val, 0) / values.length;
      const stdDev = Math.sqrt(variance);
      
      // Normalize to a 0-1 scale (higher is more variation)
      // We cap at 0.5 to avoid extreme values
      return Math.min(0.5, stdDev / (mean || 1)) / 0.5;
    },
    
    // Analyze text for AI patterns
    analyzeTextPatterns(text: string) {
      // Normalize text
      const normalizedText = text.toLowerCase().replace(/\s+/g, ' ').trim();
      
      // Split text into sentences
      const sentences = normalizedText.split(/[.!?]+/).filter(s => s.trim().length > 0);
      
      // Check for repetitive sentence structures
      const sentenceStructures = sentences.map(s => {
        // Simplified structure analysis - count words and identify question/statement
        const wordCount = s.split(/\s+/).length;
        const isQuestion = s.includes('?') || s.includes(' how ') || s.includes(' what ') || 
                          s.includes(' why ') || s.includes(' when ') || s.includes(' where ');
        return { wordCount, isQuestion };
      });
      
      // Calculate sentence structure repetition
      const structureCounts: Record<string, number> = {};
      sentenceStructures.forEach(struct => {
        // Group by length range and type
        const lengthRange = Math.floor(struct.wordCount / 3) * 3;
        const key = `${lengthRange}-${struct.isQuestion ? 'question' : 'statement'}`;
        structureCounts[key] = (structureCounts[key] || 0) + 1;
      });
      
      // Calculate pattern repetition score
      const patternGroups = Object.values(structureCounts);
      const patternRepetition = 1 - (patternGroups.length / (sentences.length || 1));
      
      // Check for boilerplate phrases common in AI text
      const boilerplatePhrases = [
        'it is important to note', 'it is worth mentioning', 'it is crucial to understand',
        'it is essential to recognize', 'it is interesting to consider', 'it should be noted',
        'as we can see', 'as mentioned earlier', 'in conclusion', 'to summarize',
        'in this context', 'moving forward', 'on the other hand', 'with that being said',
        'with this in mind', 'at the end of the day', 'when all is said and done'
      ];
      
      const boilerplateCount = boilerplatePhrases.reduce((count, phrase) => {
        return count + (normalizedText.match(new RegExp(phrase, 'g')) || []).length;
      }, 0);
      
      const boilerplateScore = Math.min(1, boilerplateCount / (sentences.length * 0.3 || 1));
      
      // Check for generic, non-specific language
      const genericPhrases = [
        'various factors', 'many people', 'in many cases', 'different aspects',
        'several studies', 'multiple sources', 'different perspectives', 'numerous examples',
        'a wide range', 'a variety of', 'many instances', 'significant implications',
        'important considerations', 'diverse perspectives', 'key insights'
      ];
      
      const genericCount = genericPhrases.reduce((count, phrase) => {
        return count + (normalizedText.match(new RegExp(phrase, 'g')) || []).length;
      }, 0);
      
      const genericScore = Math.min(1, genericCount / (sentences.length * 0.2 || 1));
      
      // Calculate combined pattern score (higher means more AI-like)
      const patternScore = 0.4 * patternRepetition + 0.3 * boilerplateScore + 0.3 * genericScore;
      
      // Generate description based on score
      let description;
      if (patternScore < 0.3) {
        description = 'Highly varied sentence structures with minimal repetitive patterns and few generic phrases.';
      } else if (patternScore < 0.65) {
        description = 'Some repetitive patterns and occasional generic phrases, but with sufficient variation.';
      } else {
        description = 'Highly formulaic sentence structures with many repetitive patterns and generic phrases typical of AI-generated text.';
      }
      
      return {
        score: patternScore,
        patternRepetition,
        boilerplateScore,
        genericScore,
        description
      };
    },
    
    // Analyze language complexity
    analyzeLanguageComplexity(text: string) {
      // Normalize text
      const normalizedText = text.toLowerCase().replace(/\s+/g, ' ').trim();
      
      // Split into sentences and words
      const sentences = normalizedText.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const words = normalizedText.split(/\s+/).filter(w => w.length > 0);
      
      // Calculate sentence complexity metrics
      const avgSentenceLength = words.length / (sentences.length || 1);
      
      // Calculate average word length (complexity indicator)
      const avgWordLength = words.reduce((sum, word) => sum + word.length, 0) / (words.length || 1);
      
      // Count complex words (words with 3+ syllables)
      const complexWordCount = words.filter(word => this.countSyllables(word) >= 3).length;
      const complexWordRatio = complexWordCount / (words.length || 1);
      
      // Count uncommon words (approximated by length)
      const uncommonWordCount = words.filter(word => word.length >= 8).length;
      const uncommonWordRatio = uncommonWordCount / (words.length || 1);
      
      // Calculate Flesch-Kincaid grade level (approximation)
      const fkGradeLevel = 0.39 * avgSentenceLength + 11.8 * avgWordLength - 15.59;
      
      // Normalize grade level to 0-1 score (higher is more complex)
      const gradeLevelScore = Math.min(1, Math.max(0, (fkGradeLevel - 5) / 10));
      
      // Calculate punctuation variety (indicator of complexity)
      const punctuationMarks = text.match(/[;:,\-–—()]|"[^"]*"/g) || [];
      const punctuationRatio = punctuationMarks.length / (sentences.length || 1);
      const punctuationScore = Math.min(1, punctuationRatio / 3);
      
      // Calculate passive voice indicators
      const passiveIndicators = [
        'is being', 'are being', 'was being', 'were being',
        'has been', 'have been', 'had been',
        'will be', 'would be'
      ];
      
      const passiveCount = passiveIndicators.reduce((count, phrase) => {
        return count + (normalizedText.match(new RegExp(phrase + ' ', 'g')) || []).length;
      }, 0);
      
      const passiveRatio = passiveCount / (sentences.length || 1);
      
      // Calculate complexity score
      // Lower score is more like human academic writing (moderate complexity)
      // Very high or very low scores are more AI-like
      const rawComplexity = (
        0.3 * gradeLevelScore + 
        0.3 * complexWordRatio + 
        0.2 * punctuationScore + 
        0.1 * uncommonWordRatio +
        0.1 * passiveRatio
      );
      
      // Convert to a 0-1 score where 0.5 is ideal human complexity and extremes are more AI-like
      const complexityScore = Math.abs(rawComplexity - 0.5) * 2;
      
      // Generate description
      let description;
      if (complexityScore < 0.3) {
        description = 'Well-balanced complexity with natural variation in sentence structures and vocabulary.';
      } else if (complexityScore < 0.65) {
        description = 'Somewhat unbalanced complexity, either overly simplified or unnecessarily complex in places.';
      } else {
        description = 'Extreme complexity pattern - either consistently too simplistic or artificially complex, typical of AI-generated content.';
      }
      
      return {
        score: complexityScore,
        avgSentenceLength,
        avgWordLength,
        complexWordRatio,
        uncommonWordRatio,
        gradeLevelScore,
        punctuationScore,
        passiveRatio,
        description
      };
    },
    
    // Count syllables in a word (approximation)
    countSyllables(word: string): number {
      word = word.toLowerCase().replace(/[^a-z]/g, '');
      if (word.length <= 3) return 1;
      
      // Count vowel groups
      const vowelGroups = word.match(/[aeiouy]+/g) || [];
      let count = vowelGroups.length;
      
      // Adjust for common patterns
      if (word.endsWith('e') && !word.endsWith('le')) count--;
      if (word.endsWith('es') || word.endsWith('ed') && !word.match(/[aeiouy]d$/)) count--;
      if (count === 0) count = 1;
      
      return count;
    },
    
    // Analyze topic coherence
    analyzeTopicCoherence(text: string): number {
      // Normalize text
      const normalizedText = text.toLowerCase().replace(/\s+/g, ' ').trim();
      
      // Split into paragraphs and sentences
      const paragraphs = normalizedText.split(/\n\s*\n/).filter(p => p.trim().length > 0);
      
      // If very little text, return low coherence
      if (paragraphs.length <= 1) return 0.7;
      
      // Extract topic words from each paragraph (excluding stop words)
      const stopWords = ['the', 'and', 'a', 'an', 'in', 'on', 'at', 'of', 'to', 'for', 'with', 
        'by', 'about', 'as', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 
        'had', 'do', 'does', 'did', 'but', 'or', 'if', 'then', 'else', 'when', 'up', 'down',
        'this', 'that', 'these', 'those', 'it', 'they', 'he', 'she', 'we', 'you', 'i', 'me'];
      
      const paragraphTopics = paragraphs.map(paragraph => {
        const words = paragraph.split(/\s+/).filter(w => w.length > 3 && !stopWords.includes(w));
        
        // Count word frequencies
        const wordCounts: Record<string, number> = {};
        words.forEach(word => {
          wordCounts[word] = (wordCounts[word] || 0) + 1;
        });
        
        // Get top words by frequency
        return Object.entries(wordCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(entry => entry[0]);
      });
      
      // Calculate coherence as topic overlap between paragraphs
      let totalOverlap = 0;
      let comparisonCount = 0;
      
      for (let i = 0; i < paragraphTopics.length - 1; i++) {
        for (let j = i + 1; j < paragraphTopics.length; j++) {
          const topicsA = paragraphTopics[i];
          const topicsB = paragraphTopics[j];
          
          // Count overlapping topics
          const overlap = topicsA.filter(topic => topicsB.includes(topic)).length;
          const overlapRatio = overlap / Math.max(1, Math.min(topicsA.length, topicsB.length));
          
          totalOverlap += overlapRatio;
          comparisonCount++;
        }
      }
      
      // Calculate average overlap
      const averageOverlap = comparisonCount > 0 ? totalOverlap / comparisonCount : 0;
      
      // Calculate coherence score (0-1, higher is more coherent)
      // We use a nonlinear scale to reward moderate coherence
      return Math.min(1, Math.pow(averageOverlap * 1.5, 0.8));
    },
    
    // Get coherence description based on score
    getCoherenceDescription(score: number): string {
      if (score > 0.7) {
        return 'Strong topic coherence with natural progression between ideas and paragraphs.';
      } else if (score > 0.4) {
        return 'Moderate topic coherence with some transitions between ideas that could be improved.';
      } else {
        return 'Poor topic coherence with abrupt shifts between ideas and limited logical flow between paragraphs.';
      }
    },
    
    // Analyze creativity
    analyzeCreativity(text: string): number {
      // Normalize text
      const normalizedText = text.toLowerCase().replace(/\s+/g, ' ').trim();
      
      // Split into words and sentences
      const words = normalizedText.split(/\s+/).filter(w => w.length > 0);
      const sentences = normalizedText.split(/[.!?]+/).filter(s => s.trim().length > 0);
      
      // If very little text, return low creativity
      if (words.length < 50) return 0.3;
      
      // Calculate lexical diversity (ratio of unique words to total words)
      const uniqueWords = new Set(words).size;
      const lexicalDiversity = uniqueWords / (words.length || 1);
      
      // Check for metaphors, similes, and figurative language
      const figurativePatterns = [
        'like a ', 'as a ', 'as if ', 'similar to ', 'resembles ', 'compared to ',
        'metaphor', 'simile', 'analogy'
      ];
      
      const figurativeCount = figurativePatterns.reduce((count, pattern) => {
        return count + (normalizedText.match(new RegExp(pattern, 'g')) || []).length;
      }, 0);
      
      const figurativeRatio = figurativeCount / (sentences.length || 1);
      
      // Check for emotional and evocative language
      const emotionalWords = [
        'love', 'hate', 'fear', 'joy', 'sadness', 'anger', 'surprise', 'disgust',
        'excited', 'terrified', 'delighted', 'frustrated', 'anxious', 'peaceful',
        'wonderful', 'terrible', 'beautiful', 'ugly', 'amazing', 'horrific'
      ];
      
      const emotionalCount = emotionalWords.reduce((count, word) => {
        const regex = new RegExp(`\\b${word}\\b`, 'g');
        return count + (normalizedText.match(regex) || []).length;
      }, 0);
      
      const emotionalRatio = emotionalCount / (sentences.length || 1);
      
      // Calculate sentence length variation as creativity indicator
      const sentenceLengths = sentences.map(s => s.split(/\s+/).length);
      const sentenceLengthVariation = this.calculateVariation(sentenceLengths);
      
      // Calculate creativity score (0-1, higher is more creative)
      return Math.min(1, (
        lexicalDiversity * 0.4 +
        figurativeRatio * 2.5 * 0.3 +
        emotionalRatio * 3 * 0.2 +
        sentenceLengthVariation * 0.1
      ));
    },
    
    // Get creativity description based on score
    getCreativityDescription(score: number): string {
      if (score > 0.7) {
        return 'High creativity with varied vocabulary, figurative language, and unique expressions.';
      } else if (score > 0.4) {
        return 'Moderate creativity with some interesting language choices but limited figurative expressions.';
      } else {
        return 'Low creativity with repetitive language, few metaphors, and limited emotional range.';
      }
    },
    
    // Analyze repetition
    analyzeRepetition(text: string): number {
      // Normalize text
      const normalizedText = text.toLowerCase().replace(/\s+/g, ' ').trim();
      
      // Split into sentences and words
      const sentences = normalizedText.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const words = normalizedText.split(/\s+/).filter(w => w.length > 0);
      
      // If very little text, return medium repetition
      if (words.length < 50) return 0.5;
      
      // Analyze n-gram repetition
      const bigramCounts: Record<string, number> = {};
      const trigramCounts: Record<string, number> = {};
      const phraseFrequency: Record<string, number> = {};
      
      // Count bigrams (pairs of consecutive words)
      for (let i = 0; i < words.length - 1; i++) {
        const bigram = words[i] + ' ' + words[i + 1];
        bigramCounts[bigram] = (bigramCounts[bigram] || 0) + 1;
      }
      
      // Count trigrams (triplets of consecutive words)
      for (let i = 0; i < words.length - 2; i++) {
        const trigram = words[i] + ' ' + words[i + 1] + ' ' + words[i + 2];
        trigramCounts[trigram] = (trigramCounts[trigram] || 0) + 1;
      }
      
      // Extract common phrases (4+ words)
      for (let i = 0; i < sentences.length; i++) {
        const sentenceWords = sentences[i].split(/\s+/).filter(w => w.length > 0);
        
        // Look for phrases of length 4-6 words
        for (let len = 4; len <= Math.min(6, sentenceWords.length); len++) {
          for (let j = 0; j <= sentenceWords.length - len; j++) {
            const phrase = sentenceWords.slice(j, j + len).join(' ');
            phraseFrequency[phrase] = (phraseFrequency[phrase] || 0) + 1;
          }
        }
      }
      
      // Count repeated bigrams, trigrams, and phrases
      const repeatedBigrams = Object.values(bigramCounts).filter(count => count > 1).reduce((sum, count) => sum + count, 0);
      const repeatedTrigrams = Object.values(trigramCounts).filter(count => count > 1).reduce((sum, count) => sum + count, 0);
      const repeatedPhrases = Object.values(phraseFrequency).filter(count => count > 1).reduce((sum, count) => sum + count, 0);
      
      // Calculate repetition scores
      const bigramRepetitionScore = repeatedBigrams / (Object.keys(bigramCounts).length || 1);
      const trigramRepetitionScore = repeatedTrigrams / (Object.keys(trigramCounts).length || 1);
      const phraseRepetitionScore = repeatedPhrases / (Object.keys(phraseFrequency).length || 1);
      
      // Check for repeated sentence structures
      const sentenceStarts = sentences.map(s => {
        const words = s.split(/\s+/).filter(w => w.length > 0);
        return words.slice(0, Math.min(3, words.length)).join(' ');
      });
      
      const uniqueSentenceStarts = new Set(sentenceStarts).size;
      const sentenceStartRepetition = 1 - (uniqueSentenceStarts / (sentences.length || 1));
      
      // Calculate overall repetition score (0-1, higher means more repetitive/AI-like)
      return Math.min(1, (
        bigramRepetitionScore * 0.3 +
        trigramRepetitionScore * 0.3 +
        phraseRepetitionScore * 0.2 +
        sentenceStartRepetition * 0.2
      ));
    },
    
    // Get repetition description based on score
    getRepetitionDescription(score: number): string {
      if (score < 0.3) {
        return 'Low repetition with natural variation in word choices and phrasing.';
      } else if (score < 0.65) {
        return 'Moderate repetition with some recurring phrases and patterns.';
      } else {
        return 'High repetition with frequent reuse of phrases and sentence structures typical of AI-generated text.';
      }
    },
    
    // Extract notable excerpts from text
    extractNotableExcerpts(
      text: string,
      patternAnalysis: any,
      complexityAnalysis: any
    ): { text: string; type: 'ai' | 'human' | 'unknown'; explanation: string; }[] {
      // Normalize and split text into sentences
      const normalizedText = text.replace(/\s+/g, ' ').trim();
      const sentences = normalizedText.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 10);
      
      // If not enough text, return empty array
      if (sentences.length < 3) return [];
      
      const excerpts = [];
      
      // Check for generic AI phrases
      const aiPhrasePatterns = [
        'it is important to note that',
        'it is worth mentioning that',
        'it should be noted that',
        'as we can see',
        'at the end of the day',
        'various factors',
        'numerous examples',
        'multiple sources',
        'a wide range of'
      ];
      
      // Find sentences containing AI phrases
      for (const pattern of aiPhrasePatterns) {
        const matchingSentences = sentences.filter(s => 
          s.toLowerCase().includes(pattern) && s.length < 200
        );
        
        if (matchingSentences.length > 0) {
          excerpts.push({
            text: matchingSentences[0],
            type: 'ai',
            explanation: `Contains generic phrasing ("${pattern}") typical of AI-generated text.`
          });
          
          // Don't add too many AI excerpts
          if (excerpts.length >= 2) break;
        }
      }
      
      // Look for likely human-written sentences
      // (complex, with emotional language or unique phrasing)
      const humanIndicators = [
        // Personal experience markers
        'i remember when', 'in my experience', 'i found that',
        'personally,', 'from my perspective', 'in my view',
        
        // Complex reasoning markers
        'could be argued that', 'contrary to popular belief',
        'paradoxically,', 'interestingly enough',
        
        // Emotional or vivid language
        'absolutely stunning', 'deeply troubling', 'profoundly moving',
        'utterly fascinating', 'genuinely surprised'
      ];
      
      // Find sentences containing human indicators
      for (const indicator of humanIndicators) {
        const matchingSentences = sentences.filter(s => 
          s.toLowerCase().includes(indicator) && s.length < 200
        );
        
        if (matchingSentences.length > 0) {
          excerpts.push({
            text: matchingSentences[0],
            type: 'human',
            explanation: `Contains personal perspective or nuanced expression ("${indicator}") typical of human writing.`
          });
          
          // Don't add too many human excerpts
          if (excerpts.filter(e => e.type === 'human').length >= 2) break;
        }
      }
      
      // If we couldn't find enough specific indicators, look for other patterns
      if (excerpts.length < 3) {
        // Find extremely long, complex sentences (often human)
        const longSentences = sentences.filter(s => s.length > 150 && s.split(/\s+/).length > 25);
        if (longSentences.length > 0 && excerpts.filter(e => e.type === 'human').length < 2) {
          excerpts.push({
            text: longSentences[0],
            type: 'human',
            explanation: 'Complex, lengthy sentence with multiple clauses typical of sophisticated human writing.'
          });
        }
        
        // Find extremely short, simple sentences that follow complex ones (often human)
        const shortSentences = sentences.filter(s => s.length < 50 && s.split(/\s+/).length < 8);
        if (shortSentences.length > 0 && excerpts.filter(e => e.type === 'human').length < 2) {
          excerpts.push({
            text: shortSentences[0],
            type: 'human',
            explanation: 'Brief, impactful sentence showing stylistic variation typical of human writing.'
          });
        }
        
        // Find sentences with highly repetitive structures (often AI)
        if (excerpts.filter(e => e.type === 'ai').length < 2) {
          // Look for sentences with repetitive patterns like "not only X but also Y"
          const repetitivePatterns = [
            'not only', 'but also',
            'on one hand', 'on the other hand',
            'firstly', 'secondly', 'thirdly',
            'in summary', 'to conclude', 'in conclusion'
          ];
          
          for (const pattern of repetitivePatterns) {
            const matchingSentences = sentences.filter(s => 
              s.toLowerCase().includes(pattern) && s.length < 200
            );
            
            if (matchingSentences.length > 0) {
              excerpts.push({
                text: matchingSentences[0],
                type: 'ai',
                explanation: `Contains formulaic transition ("${pattern}") commonly overused in AI-generated text.`
              });
              break;
            }
          }
        }
      }
      
      // If we still don't have enough excerpts, add some unknown ones
      if (excerpts.length < 3) {
        // Get some sentences from the middle of the text
        const midIndex = Math.floor(sentences.length / 2);
        if (midIndex < sentences.length) {
          excerpts.push({
            text: sentences[midIndex],
            type: 'unknown',
            explanation: 'This excerpt shows mixed characteristics that could be either human or AI-generated.'
          });
        }
      }
      
      return excerpts.slice(0, 3); // Return at most 3 excerpts
    }
  }
}); 