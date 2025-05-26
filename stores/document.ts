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
        
        reader.readAsArrayBuffer(file);
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
    
    // Simulate AI analysis of document
    async analyzeDocument(file: File) {
      // In a real app, this would send the file to a server for processing
      // Here we're simulating based on filename and other factors
      
      // Extract text content from the first few KB of the file for demo purposes
      const fileContent = await this.extractTextFromFile(file);
      
      // Get file hash to ensure consistent analysis for the same file
      const hash = await this.generateFileHash(file);
      
      // Use the hash to generate deterministic analysis values
      // This ensures the same file always gets the same analysis result
      const hashSum = hash.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
      
      // Calculate deterministic metrics based on the hash
      const hashBasedFactor = (hashSum % 100) / 100; // Value between 0-1
      
      // Calculate actual metrics based on the content
      const wordCount = fileContent.split(/\s+/).length;
      const avgWordLength = fileContent.length / (wordCount || 1);
      const sentenceCount = fileContent.split(/[.!?]+/).length;
      const avgSentenceLength = wordCount / (sentenceCount || 1);
      
      // Calculate entropy of text (measure of randomness)
      const entropy = this.calculateTextEntropy(fileContent);
      
      // Higher entropy is often associated with human writing (more variation)
      // Lower entropy can be associated with AI (more predictable patterns)
      
      // Calculate AI score - this is simplified for demo
      // Real AI detection would use much more sophisticated techniques
      let aiScore;
      
      // AI tends to have more consistent sentence lengths and word choices
      const consistencyFactor = (avgSentenceLength < 10 || avgSentenceLength > 30) ? 0.7 : 1.3;
      
      // Scale entropy to get an AI score (inverse relationship)
      // Use hash-based factor to ensure consistency for the same file
      aiScore = Math.round((100 - (entropy * consistencyFactor * 10)) * (0.8 + (hashBasedFactor * 0.4)));
      
      // Clamp between 5-95% to avoid extremes in our simple model
      aiScore = Math.max(5, Math.min(95, aiScore));
      
      // Adjust based on filename for demo purposes, but keep it deterministic
      if (file.name.toLowerCase().includes('essay') || file.name.toLowerCase().includes('research')) {
        aiScore = Math.min(aiScore, 25);
      } else if (file.name.toLowerCase().includes('draft') || file.name.toLowerCase().includes('review')) {
        aiScore = Math.max(35, Math.min(aiScore, 70));
      } else if (file.name.toLowerCase().includes('ai') || file.name.toLowerCase().includes('generated')) {
        aiScore = Math.max(75, aiScore);
      }
      
      // Determine result level
      let result, summary;
      if (aiScore < 30) {
        result = 'Level 1: Clean';
        summary = 'This document appears to be human-created with no significant indicators of AI generation.';
      } else if (aiScore < 70) {
        result = 'Level 2: AI-Supported';
        summary = 'This document shows signs of AI assistance but with significant human input and editing.';
      } else {
        result = 'Level 3: AI-Generated';
        summary = 'This document appears to be primarily AI-generated with minimal human editing.';
      }
      
      return {
        result,
        aiScore,
        summary,
        keyFindings: this.generateKeyFindings(result),
        analysisCategories: this.generateAnalysisCategories(aiScore),
        excerpts: this.generateExcerpts(result, fileContent)
      };
    },
    
    // Extract some text from the file for analysis
    async extractTextFromFile(file: File): Promise<string> {
      return new Promise((resolve) => {
        // In a real app, this would use a PDF parser
        // For this demo, we'll just extract text from the file name
        const fileName = file.name.replace(/\.[^/.]+$/, ""); // Remove extension
        const words = fileName.split(/[-_.\s]/);
        
        // Generate some dummy text based on filename
        let text = `This is a document about ${words.join(' ')}. `;
        text += `The document discusses various aspects of ${words[0] || 'the topic'}. `;
        text += `It includes information about ${words[words.length - 1] || 'relevant subjects'}. `;
        
        // Add some random sentences for variety
        const sentences = [
          "The analysis reveals interesting patterns in the data.",
          "Various methodologies were employed to ensure accurate results.",
          "The conclusions drawn are supported by substantial evidence.",
          "Further research may be necessary to validate these findings.",
          "Several limitations were identified and addressed accordingly.",
          "The implications of these results extend beyond the initial scope.",
          "Comparative analysis with prior research indicates significant progress.",
          "Theoretical frameworks provided the foundation for this investigation."
        ];
        
        // Use the file name to deterministically select sentences
        // This ensures the same file always gets the same analysis
        const fileNameSum = fileName.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
        
        // Add 5-10 sentences based on filename
        const sentenceCount = 5 + (fileNameSum % 6);
        for (let i = 0; i < sentenceCount; i++) {
          const index = (fileNameSum + i) % sentences.length;
          text += sentences[index] + " ";
        }
        
        resolve(text);
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
    generateKeyFindings(result: string): string[] {
      if (result.includes('Clean')) {
        return [
          'Natural language patterns consistent with human writing',
          'Varied sentence structures and vocabulary',
          'Logical flow and contextual coherence',
          'Appropriate use of domain-specific terminology'
        ];
      } else if (result.includes('AI-Supported')) {
        return [
          'Mixed writing styles throughout the document',
          'Some sections show repetitive patterns typical of AI',
          'Other sections demonstrate nuanced human reasoning',
          'Overall structure suggests human organization with AI-assisted content'
        ];
      } else {
        return [
          'Highly formulaic sentence structures throughout',
          'Generic and repetitive phrasing',
          'Surface-level treatment of complex topics',
          'Occasional non-sequiturs and contextual inconsistencies'
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
    }
  }
}); 