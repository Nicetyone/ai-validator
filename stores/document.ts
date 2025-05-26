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

export const useDocumentStore = defineStore('document', {
  state: () => ({
    documents: [] as Document[],
    selectedDocument: null as Document | null,
    isLoading: false,
    error: null as string | null,
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
    // Load documents from localStorage
    loadDocumentsFromCache() {
      try {
        const cachedDocuments = localStorage.getItem('ai-validator-documents');
        if (cachedDocuments) {
          const parsedDocs = JSON.parse(cachedDocuments);
          this.documents = parsedDocs.map((doc: any) => ({
            ...doc,
            date: new Date(doc.date)
          }));
        }
      } catch (error) {
        console.error('Error loading documents from cache:', error);
      }
    },
    
    // Save documents to localStorage
    saveDocumentsToCache() {
      try {
        localStorage.setItem('ai-validator-documents', JSON.stringify(this.documents));
      } catch (error) {
        console.error('Error saving documents to cache:', error);
      }
    },
    
    // Clear localStorage cache (for testing)
    clearCache() {
      try {
        localStorage.removeItem('ai-validator-documents');
        this.documents = [];
      } catch (error) {
        console.error('Error clearing cache:', error);
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
    
    async fetchDocuments() {
      this.isLoading = true;
      this.error = null;
      
      try {
        // First check localStorage
        this.loadDocumentsFromCache();
        
        // Then try to fetch from API
        const response = await fetch('/api/documents');
        const data = await response.json();
        
        if (data.success) {
          this.documents = data.documents.map((doc: any) => ({
            ...doc,
            date: new Date(doc.date)
          }));
          
          // Update cache
          this.saveDocumentsToCache();
        } else {
          this.error = data.error || 'Failed to fetch documents';
        }
      } catch (error: any) {
        // If API fails but we have cached data, don't set error
        if (this.documents.length === 0) {
          this.error = error.message || 'An error occurred';
        }
      } finally {
        this.isLoading = false;
      }
    },
    
    async fetchDocumentById(id: string) {
      this.isLoading = true;
      this.error = null;
      
      try {
        // First check local cache
        const cachedDoc = this.getDocumentById(id);
        if (cachedDoc) {
          this.selectedDocument = cachedDoc;
          this.isLoading = false;
          return cachedDoc;
        }
        
        // If not in cache, try API
        const response = await fetch(`/api/documents/${id}`);
        const data = await response.json();
        
        if (data.success) {
          const document = {
            ...data.document,
            date: new Date(data.document.date)
          };
          
          // Update the document in the documents array if it exists
          const index = this.documents.findIndex(doc => doc.id === id);
          if (index !== -1) {
            this.documents[index] = document;
          } else {
            this.documents.push(document);
          }
          
          this.selectedDocument = document;
          
          // Update cache
          this.saveDocumentsToCache();
          
          return document;
        } else {
          this.error = data.error || 'Failed to fetch document';
        }
      } catch (error: any) {
        this.error = error.message || 'An error occurred';
      } finally {
        this.isLoading = false;
      }
      
      return null;
    },
    
    async uploadDocument(file: File) {
      this.isLoading = true;
      this.error = null;
      
      try {
        // Generate file hash
        const hash = await this.generateFileHash(file);
        
        // Check if document with this hash already exists
        const existingDoc = this.getDocumentByHash(hash);
        if (existingDoc && existingDoc.status === 'Complete') {
          // Document already analyzed, return it
          this.isLoading = false;
          return existingDoc;
        }
        
        // In a real app, we would upload the file to a server
        // For now, we'll simulate the API response
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Create a unique ID
        const id = Math.random().toString(36).substring(2, 15);
        
        // Determine AI score based on file name for demo purposes
        // In a real app, this would be determined by analysis on the server
        let aiScore, result, summary;
        
        if (file.name.toLowerCase().includes('essay') || file.name.toLowerCase().includes('research')) {
          aiScore = Math.floor(Math.random() * 25); // 0-25%
          result = 'Level 1: Clean';
          summary = 'This document appears to be human-created with no significant indicators of AI generation.';
        } else if (file.name.toLowerCase().includes('draft') || file.name.toLowerCase().includes('review')) {
          aiScore = 35 + Math.floor(Math.random() * 35); // 35-70%
          result = 'Level 2: AI-Supported';
          summary = 'This document shows signs of AI assistance but with significant human input and editing.';
        } else {
          aiScore = 75 + Math.floor(Math.random() * 25); // 75-100%
          result = 'Level 3: AI-Generated';
          summary = 'This document appears to be primarily AI-generated with minimal human editing.';
        }
        
        // Generate a unique certificate ID
        const certificateId = this.generateCertificateId();
        
        // Create new document object
        const newDocument: Document = {
          id,
          hash,
          name: file.name,
          size: this.formatFileSize(file.size),
          date: new Date(),
          status: 'Complete',
          result,
          aiScore,
          summary,
          certificateId,
          keyFindings: this.generateKeyFindings(result),
          analysisCategories: this.generateAnalysisCategories(aiScore),
          excerpts: this.generateExcerpts(result)
        };
        
        // Add to collection
        this.documents.unshift(newDocument);
        
        // Update cache
        this.saveDocumentsToCache();
        
        return newDocument;
      } catch (error: any) {
        this.error = error.message || 'An error occurred';
        return null;
      } finally {
        this.isLoading = false;
      }
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
    
    // Generate excerpts based on result level
    generateExcerpts(result: string): { text: string; type: 'ai' | 'human' | 'unknown'; explanation: string; }[] {
      if (result.includes('Clean')) {
        return [];
      } else if (result.includes('AI-Supported')) {
        return [
          {
            text: 'The implementation of machine learning algorithms in healthcare settings has shown promising results across various diagnostic procedures and treatment protocols.',
            type: 'ai',
            explanation: 'Generic phrasing common in AI-generated content about machine learning applications.'
          },
          {
            text: "My own experience with patient data revealed unexpected correlations between treatment adherence and socioeconomic factors that weren't evident in the published literature.",
            type: 'human',
            explanation: 'Personal insight and nuanced observation typical of human experience.'
          }
        ];
      } else {
        return [
          {
            text: 'The proposed project will leverage cutting-edge technology to implement innovative solutions that address key challenges in the target sector while maximizing stakeholder value and promoting sustainable outcomes.',
            type: 'ai',
            explanation: 'Generic business jargon with minimal specific content; typical of AI-generated proposals.'
          },
          {
            text: 'Our approach will utilize state-of-the-art methodologies to analyze complex data sets, enabling data-driven decision making that optimizes resource allocation and enhances operational efficiency.',
            type: 'ai',
            explanation: 'Vague technical description without specific methodologies or techniques mentioned.'
          },
          {
            text: 'The implementation timeline will be structured to ensure timely delivery of project milestones while maintaining flexibility to accommodate stakeholder feedback and changing requirements.',
            type: 'ai',
            explanation: 'Generic project management language that could apply to virtually any project.'
          }
        ];
      }
    },
    
    async checkDocumentStatus(id: string) {
      try {
        const response = await fetch(`/api/documents/${id}`);
        const data = await response.json();
        
        if (data.success) {
          const updatedDocument = {
            ...data.document,
            date: new Date(data.document.date)
          };
          
          // Update the document in the documents array
          const index = this.documents.findIndex(doc => doc.id === id);
          if (index !== -1) {
            this.documents[index] = updatedDocument;
          }
          
          if (this.selectedDocument?.id === id) {
            this.selectedDocument = updatedDocument;
          }
          
          // Update cache
          this.saveDocumentsToCache();
          
          return updatedDocument;
        }
      } catch (error) {
        console.error('Error checking document status:', error);
      }
      
      return null;
    },
    
    // Delete document (from local cache only)
    deleteDocument(id: string) {
      const index = this.documents.findIndex(doc => doc.id === id);
      if (index !== -1) {
        this.documents.splice(index, 1);
        
        // Update cache
        this.saveDocumentsToCache();
        return true;
      }
      return false;
    },
    
    // Verify a document by certificate ID
    verifyDocument(certificateId: string) {
      return this.getDocumentByCertificateId(certificateId);
    },
    
    resetError() {
      this.error = null;
    }
  }
}); 