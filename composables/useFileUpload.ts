import { ref, computed } from 'vue';
import { useDocumentStore } from '~/stores/document';

export function useFileUpload() {
  const documentStore = useDocumentStore();
  
  const selectedFile = ref<File | null>(null);
  const isDragging = ref(false);
  const isUploading = ref(false);
  const uploadProgress = ref(0);
  const uploadError = ref<string | null>(null);
  const fileHash = ref<string | null>(null);
  const duplicateFound = ref(false);
  
  const hasFile = computed(() => selectedFile.value !== null);
  
  // File validation
  const validateFile = (file: File): { valid: boolean; error?: string } => {
    // Check if file is a PDF
    if (!file.type.includes('pdf')) {
      return { valid: false, error: 'Only PDF files are accepted.' };
    }
    
    // Check file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    if (file.size > maxSize) {
      return { valid: false, error: 'File size exceeds the maximum limit of 10MB.' };
    }
    
    return { valid: true };
  };
  
  // Generate file hash when a file is selected
  const generateFileHash = async (file: File): Promise<string> => {
    try {
      // Use the hash function from the document store
      return await documentStore.generateFileHash(file);
    } catch (error) {
      console.error('Error generating file hash:', error);
      throw error;
    }
  };
  
  // Check if file is already analyzed
  const checkForDuplicate = async (hash: string): Promise<boolean> => {
    const existingDoc = documentStore.getDocumentByHash(hash);
    if (existingDoc && existingDoc.status === 'Complete') {
      duplicateFound.value = true;
      return true;
    }
    duplicateFound.value = false;
    return false;
  };
  
  // Handle file selection from input
  const handleFileSelect = async (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const validation = validateFile(file);
      
      if (validation.valid) {
        selectedFile.value = file;
        uploadError.value = null;
        
        try {
          // Generate hash for selected file
          fileHash.value = await generateFileHash(file);
          // Check if this file has already been analyzed
          await checkForDuplicate(fileHash.value);
        } catch (error) {
          console.error('Error processing file:', error);
        }
      } else {
        uploadError.value = validation.error || 'Invalid file';
        // Reset input
        input.value = '';
      }
    }
  };
  
  // Handle drag events
  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    isDragging.value = true;
  };
  
  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    isDragging.value = false;
  };
  
  const handleDrop = async (event: DragEvent) => {
    event.preventDefault();
    isDragging.value = false;
    
    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      const validation = validateFile(file);
      
      if (validation.valid) {
        selectedFile.value = file;
        uploadError.value = null;
        
        try {
          // Generate hash for dropped file
          fileHash.value = await generateFileHash(file);
          // Check if this file has already been analyzed
          await checkForDuplicate(fileHash.value);
        } catch (error) {
          console.error('Error processing file:', error);
        }
      } else {
        uploadError.value = validation.error || 'Invalid file';
      }
    }
  };
  
  // Remove selected file
  const removeFile = () => {
    selectedFile.value = null;
    uploadError.value = null;
    fileHash.value = null;
    duplicateFound.value = false;
  };
  
  // Format file size for display
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  // Upload file to server
  const uploadFile = async (): Promise<any> => {
    if (!selectedFile.value) {
      uploadError.value = 'No file selected.';
      return false;
    }
    
    // If we already have this document analyzed, return it directly
    if (duplicateFound.value && fileHash.value) {
      const existingDoc = documentStore.getDocumentByHash(fileHash.value);
      if (existingDoc) {
        return existingDoc;
      }
    }
    
    isUploading.value = true;
    uploadProgress.value = 0;
    uploadError.value = null;
    
    // Initialize progress interval variable
    let progressInterval: ReturnType<typeof setInterval> | null = null;
    
    try {
      // Simulate upload progress
      progressInterval = setInterval(() => {
        if (uploadProgress.value < 90) {
          uploadProgress.value += 10;
        }
      }, 300);
      
      // Upload file using the document store
      const result = await documentStore.uploadDocument(selectedFile.value);
      
      if (progressInterval) clearInterval(progressInterval);
      uploadProgress.value = 100;
      
      if (result) {
        // Upload successful
        setTimeout(() => {
          selectedFile.value = null;
          isUploading.value = false;
          uploadProgress.value = 0;
          fileHash.value = null;
          duplicateFound.value = false;
        }, 500);
        
        return result;
      } else {
        // Upload failed
        uploadError.value = documentStore.error || 'Upload failed.';
        isUploading.value = false;
        return false;
      }
    } catch (error: any) {
      if (progressInterval) clearInterval(progressInterval);
      uploadError.value = error.message || 'An error occurred during upload.';
      isUploading.value = false;
      return false;
    }
  };
  
  return {
    selectedFile,
    isDragging,
    isUploading,
    uploadProgress,
    uploadError,
    hasFile,
    duplicateFound,
    fileHash,
    handleFileSelect,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    removeFile,
    formatFileSize,
    uploadFile
  };
} 