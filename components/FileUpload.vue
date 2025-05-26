<template>
  <div>
    <!-- Dropzone -->
    <div
      class="border-2 border-dashed rounded-lg p-8 text-center transition-colors"
      :class="[
        isDragging
          ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/40'
          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500',
        hasFile ? 'bg-gray-50 dark:bg-gray-700' : ''
      ]"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
    >
      <div v-if="!hasFile && !isUploading">
        <div class="mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-2">Drag and drop your PDF file here</p>
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">or</p>
        <label class="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition duration-300">
          Browse Files
          <input type="file" class="hidden" accept=".pdf" @change="handleFileSelect" />
        </label>
        <p class="text-gray-500 dark:text-gray-400 text-xs mt-4">Maximum file size: 10MB. PDF files only.</p>
      </div>

      <!-- File details -->
      <div v-if="hasFile && !isUploading" class="flex items-center justify-between">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <div>
            <p class="font-medium text-left">{{ selectedFile?.name }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 text-left">{{ selectedFile ? formatFileSize(selectedFile.size) : '' }}</p>
            <p v-if="duplicateFound" class="text-sm text-blue-600 font-medium mt-1">
              This document has already been analyzed
            </p>
          </div>
        </div>
        <button @click="removeFile" class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Upload progress -->
      <div v-if="isUploading" class="text-center">
        <div class="mb-4">
          <svg class="animate-spin h-10 w-10 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <p class="text-blue-600 font-medium mb-2">
          {{ duplicateFound ? "Retrieving previous analysis..." : "Uploading your file..." }}
        </p>
        <div class="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: uploadProgress + '%' }"></div>
        </div>
        <p class="text-gray-500 dark:text-gray-400 text-sm">{{ uploadProgress }}% complete</p>
      </div>
    </div>

    <!-- Error message -->
    <div v-if="uploadError" class="mt-2 text-red-600 text-sm">
      {{ uploadError }}
    </div>
    
    <!-- Upload button -->
    <div class="mt-4" v-if="hasFile && !isUploading">
      <button 
        @click="startUpload" 
        class="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {{ duplicateFound ? "Use Previous Analysis" : "Validate Document" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFileUpload } from '~/composables/useFileUpload';

const emit = defineEmits<{
  (e: 'upload-complete', document: any): void
}>();

const {
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
} = useFileUpload();

const startUpload = async () => {
  const result = await uploadFile();
  
  if (result) {
    // Emit upload complete event with the document
    emit('upload-complete', result); 
  }
};
</script> 