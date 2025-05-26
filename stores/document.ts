import { defineStore } from 'pinia';

export interface Document {
  id: string;
  name: string;
  size: string;
  date: Date;
  status: 'Processing' | 'Complete' | 'Failed';
  result: string;
  aiScore?: number;
  summary?: string;
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
    async fetchDocuments() {
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await fetch('/api/documents');
        const data = await response.json();
        
        if (data.success) {
          this.documents = data.documents.map((doc: any) => ({
            ...doc,
            date: new Date(doc.date)
          }));
        } else {
          this.error = data.error || 'Failed to fetch documents';
        }
      } catch (error: any) {
        this.error = error.message || 'An error occurred';
      } finally {
        this.isLoading = false;
      }
    },
    
    async fetchDocumentById(id: string) {
      this.isLoading = true;
      this.error = null;
      
      try {
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
        } else {
          this.error = data.error || 'Failed to fetch document';
        }
      } catch (error: any) {
        this.error = error.message || 'An error occurred';
      } finally {
        this.isLoading = false;
      }
    },
    
    async uploadDocument(file: File) {
      this.isLoading = true;
      this.error = null;
      
      try {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
          const newDocument = {
            ...data.document,
            date: new Date(data.document.date)
          };
          
          this.documents.unshift(newDocument);
          return newDocument;
        } else {
          this.error = data.error || 'Failed to upload document';
          return null;
        }
      } catch (error: any) {
        this.error = error.message || 'An error occurred';
        return null;
      } finally {
        this.isLoading = false;
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
          
          return updatedDocument;
        }
      } catch (error) {
        console.error('Error checking document status:', error);
      }
      
      return null;
    },
    
    resetError() {
      this.error = null;
    }
  }
}); 