<template>
  <div>
    <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex items-center mb-2">
          <NuxtLink to="/uploads" class="text-white hover:text-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to My Documents
          </NuxtLink>
        </div>
        <h1 class="text-3xl font-bold">Certificate of Validation</h1>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <div v-if="isLoading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p class="text-gray-600">Loading certificate...</p>
        </div>

        <div v-else-if="!document" class="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-red-700">
                Certificate not found. The document may have been deleted or the ID is invalid.
              </p>
            </div>
          </div>
        </div>

        <div v-else>
          <!-- Certificate -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden print:shadow-none print:border print:border-gray-300">
            <!-- Certificate Header -->
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 print:bg-white print:text-black">
              <div class="text-center">
                <h2 class="text-3xl font-bold mb-4">Certificate of AI Validation</h2>
                <p class="text-xl">Document Authentication Analysis</p>
              </div>
            </div>
            
            <!-- Certificate Body -->
            <div class="p-8">
              <!-- Document Info -->
              <div class="mb-8 text-center">
                <div class="text-lg font-semibold mb-1">This is to certify that the document:</div>
                <div class="text-2xl font-bold mb-4">{{ document.name }}</div>
                <div class="text-lg">
                  Uploaded on {{ formatDate(document.date) }}
                </div>
              </div>
              
              <!-- Result -->
              <div class="mb-8 text-center">
                <div class="text-lg font-semibold mb-2">Has been analyzed and classified as:</div>
                <DocumentStatus :status="document.result" type="result" class="text-3xl px-6 py-3" />
              </div>
              
              <!-- Score -->
              <div class="mb-8 flex justify-center">
                <div class="text-center px-6 py-4 rounded-lg bg-gray-50 dark:bg-gray-700 print:bg-gray-100">
                  <div class="text-lg font-semibold mb-1">AI Detection Score</div>
                  <div class="text-4xl font-bold" :class="getResultTextClass(document.result)">
                    {{ document.aiScore }}%
                  </div>
                </div>
              </div>
              
              <!-- Explanation -->
              <div class="mb-8 text-center max-w-2xl mx-auto">
                <div class="text-lg font-semibold mb-2">Analysis Summary:</div>
                <p class="text-gray-700 dark:text-gray-300">
                  {{ document.summary }}
                </p>
              </div>
              
              <!-- Certification Statement -->
              <div class="mb-8 text-center">
                <p class="text-gray-700 dark:text-gray-300">
                  This certificate verifies that the document has been analyzed by AI-Validator's proprietary 
                  algorithm designed to detect AI-generated content. The analysis was performed on 
                  {{ formatDate(document.date) }} and the results are valid as of this date.
                </p>
              </div>
              
              <!-- Verification Info -->
              <div class="mb-8 text-center">
                <div class="text-lg font-semibold mb-2">Certificate Verification</div>
                <div class="bg-gray-50 dark:bg-gray-700 inline-block px-6 py-3 rounded-lg text-lg font-mono print:bg-gray-100">
                  {{ document.certificateId }}
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  To verify this certificate, visit <span class="font-semibold">ai-validator.com/verify</span> and enter the verification code.
                </p>
              </div>
              
              <!-- Signature -->
              <div class="flex justify-between items-end">
                <div>
                  <div class="h-16 border-b border-gray-400 mb-1 w-48">
                    <svg class="h-14 w-auto opacity-75" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10,35 C20,10 30,40 40,20 C50,10 60,30 70,20 C80,15 90,40 100,30 C110,20 120,35 130,25 C140,30 150,15 160,25 C170,35 180,15 190,25" stroke="currentColor" fill="none" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="text-sm font-semibold">AI-Validator Authentication</div>
                </div>
                
                <div class="w-24 h-24 relative">
                  <svg class="w-full h-full opacity-75" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" stroke-width="1" />
                    <path d="M50,15 L50,85 M15,50 L85,50 M25,25 L75,75 M25,75 L75,25" stroke="currentColor" stroke-width="1" />
                    <text x="50" y="55" font-size="10" text-anchor="middle" fill="currentColor">VERIFIED</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Actions -->
          <div class="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              @click="printCertificate"
              class="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
            >
              Print Certificate
            </button>
            <button
              class="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition duration-300"
            >
              Download as PDF
            </button>
            <NuxtLink
              :to="`/report/${document.id}`"
              class="bg-gray-600 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-700 transition duration-300 text-center"
            >
              View Full Report
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ title: 'Certificate' })
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useDocumentStore } from '~/stores/document';
import DocumentStatus from '~/components/DocumentStatus.vue';

const route = useRoute();
const documentStore = useDocumentStore();
const isLoading = ref(true);
const document = ref(null);

// Fetch document data based on ID
onMounted(async () => {
  const id = route.params.id;
  
  try {
    // Ensure document store is initialized first
    await documentStore.initialize();
    
    // Try to load from document store
    await documentStore.fetchDocumentById(id);
    document.value = documentStore.selectedDocument;
    
    // If document doesn't have a certificateId yet, generate one
    if (document.value && !document.value.certificateId) {
      document.value.certificateId = documentStore.generateCertificateId();
      documentStore.saveToLocalStorage();
    }
  } catch (error) {
    console.error('Error fetching document:', error);
  } finally {
    isLoading.value = false;
  }
});

// Format date helper
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Get result text class
const getResultTextClass = (result) => {
  if (result.includes('Clean')) {
    return 'text-green-600';
  } else if (result.includes('AI-Supported')) {
    return 'text-yellow-600';
  } else if (result.includes('AI-Generated')) {
    return 'text-red-600';
  } else {
    return 'text-gray-600';
  }
};

// Print certificate
const printCertificate = () => {
  window.print();
};
</script>

<style>
@media print {
  body {
    background-color: white;
    padding: 0;
    margin: 0;
  }
  
  .print\:shadow-none {
    box-shadow: none !important;
  }
  
  .print\:border {
    border-width: 1px !important;
  }
  
  .print\:border-gray-300 {
    border-color: #d1d5db !important;
  }
  
  .print\:bg-white {
    background: white !important;
    background-image: none !important;
  }
  
  .print\:text-black {
    color: black !important;
  }
  
  .print\:bg-gray-100 {
    background-color: #f3f4f6 !important;
  }
}
</style> 