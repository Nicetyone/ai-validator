<template>
  <div>
    <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Validate Your PDF Documents</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Upload your PDF documents to check for AI-generated content and receive a detailed analysis report.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Upload component -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
          <h2 class="text-2xl dark:text-gray-300 font-bold mb-6">Upload Document for Validation</h2>
          <FileUpload @upload-complete="handleUploadComplete" />
        </div>
        
        <!-- Success message -->
        <div v-if="uploadSuccess" class="bg-green-50 border-l-4 border-green-500 p-4 mb-12">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm dark:text-gray-300 text-green-700">
                Your document has been uploaded successfully! It is now being processed.
                <NuxtLink to="/uploads" class="font-medium underline hover:text-green-600">View your documents</NuxtLink>
              </p>
            </div>
          </div>
        </div>
        
        <!-- Steps guide -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold mb-6">How It Works</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div class="text-blue-600 text-4xl font-bold mb-4">1</div>
              <h3 class="text-xl dark:text-gray-300 font-semibold mb-3">Upload Your Document</h3>
              <p class="text-gray-600 dark:text-gray-300">Upload your PDF document to our secure platform for analysis.</p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div class="text-blue-600 text-4xl font-bold mb-4">2</div>
              <h3 class="text-xl dark:text-gray-300 font-semibold mb-3">AI Analysis</h3>
              <p class="text-gray-600 dark:text-gray-300">Our advanced algorithm analyzes your document for AI-generated content.</p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <div class="text-blue-600 text-4xl font-bold mb-4">3</div>
              <h3 class="text-xl dark:text-gray-300 font-semibold mb-3">Get Your Results</h3>
              <p class="text-gray-600 dark:text-gray-300">Receive a detailed report and certificate of verification for your document.</p>
            </div>
          </div>
        </div>
        
        <!-- AI Detection Levels -->
        <div>
          <h2 class="text-2xl font-bold mb-6">Understanding AI Detection Levels</h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <h3 class="text-xl font-semibold mb-3 text-green-600">Level 1: Clean</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">No AI detected. The document appears to be entirely human-created.</p>
              <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-block">Fully Authentic</div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
              <h3 class="text-xl font-semibold mb-3 text-yellow-600">Level 2: AI-Supported</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Document shows signs of AI assistance, but with significant human input.</p>
              <div class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm inline-block">Partially AI-Generated</div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-red-500">
              <h3 class="text-xl font-semibold mb-3 text-red-600">Level 3: AI-Generated</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">Document appears to be primarily AI-generated with minimal human editing.</p>
              <div class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm inline-block">AI Ripoff</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FileUpload from '~/components/FileUpload.vue';

const router = useRouter();
const uploadSuccess = ref(false);
const uploadedDocument = ref(null);

const handleUploadComplete = (document) => {
  uploadSuccess.value = true;
  uploadedDocument.value = document;
  
  // Redirect to the report page after a brief delay
  setTimeout(() => {
    router.push(`/report/${document.id}`);
  }, 2000);
};
</script> 