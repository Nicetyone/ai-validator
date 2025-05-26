import { ref, computed } from 'vue';
import { useDocumentStore } from '~/stores/document';

export function useFileUpload() {
  const documentStore = useDocumentStore();
  
  const selectedFile = ref<File | null>(null);
  const isDragging = ref(false);
  const isUploading = ref(false);
  const uploadProgress = ref(0);
  const uploadError = ref<string | null>(null);
  
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
  
  // Handle file selection from input
  const handleFileSelect = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const validation = validateFile(file);
      
      if (validation.valid) {
        selectedFile.value = file;
        uploadError.value = null;
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
  
  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    isDragging.value = false;
    
    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      const validation = validateFile(file);
      
      if (validation.valid) {
        selectedFile.value = file;
        uploadError.value = null;
      } else {
        uploadError.value = validation.error || 'Invalid file';
      }
    }
  };
  
  // Remove selected file
  const removeFile = () => {
    selectedFile.value = null;
    uploadError.value = null;
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
  const uploadFile = async (): Promise<boolean> => {
    if (!selectedFile.value) {
      uploadError.value = 'No file selected.';
      return false;
    }
    
    isUploading.value = true;
    uploadProgress.value = 0;
    uploadError.value = null;
    
    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        if (uploadProgress.value < 90) {
          uploadProgress.value += 10;
        }
      }, 300);
      
      // Upload file using the document store
      const result = await documentStore.uploadDocument(selectedFile.value);
      
      clearInterval(progressInterval);
      uploadProgress.value = 100;
      
      if (result) {
        // Upload successful
        setTimeout(() => {
          selectedFile.value = null;
          isUploading.value = false;
          uploadProgress.value = 0;
        }, 500);
        
        return true;
      } else {
        // Upload failed
        uploadError.value = documentStore.error || 'Upload failed.';
        isUploading.value = false;
        return false;
      }
    } catch (error: any) {
      clearInterval(progressInterval);
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
    handleFileSelect,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    removeFile,
    formatFileSize,
    uploadFile
  };
} 