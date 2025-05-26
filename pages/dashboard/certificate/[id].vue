<template>
  <div>
    <div class="flex items-center mb-6">
      <NuxtLink to="/dashboard/uploads" class="text-blue-600 hover:text-blue-800 mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Uploads
      </NuxtLink>
      <h1 class="text-2xl font-bold">Certificate of Validation</h1>
    </div>

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
      <div class="bg-white rounded-lg shadow-md overflow-hidden print:shadow-none print:border print:border-gray-300">
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
            <div 
              class="text-3xl font-bold inline-block px-6 py-3 rounded-lg"
              :class="getResultClass(document.result)"
            >
              {{ document.result }}
            </div>
          </div>
          
          <!-- Score -->
          <div class="mb-8 flex justify-center">
            <div class="text-center px-6 py-4 rounded-lg bg-gray-50 print:bg-gray-100">
              <div class="text-lg font-semibold mb-1">AI Detection Score</div>
              <div class="text-4xl font-bold" :class="getResultTextClass(document.result)">
                {{ document.aiScore }}%
              </div>
            </div>
          </div>
          
          <!-- Explanation -->
          <div class="mb-8 text-center max-w-2xl mx-auto">
            <div class="text-lg font-semibold mb-2">Analysis Summary:</div>
            <p class="text-gray-700">
              {{ document.summary }}
            </p>
          </div>
          
          <!-- Certification Statement -->
          <div class="mb-8 text-center">
            <p class="text-gray-700">
              This certificate verifies that the document has been analyzed by AI-Validator's proprietary 
              algorithm designed to detect AI-generated content. The analysis was performed on 
              {{ formatDate(document.date) }} and the results are valid as of this date.
            </p>
          </div>
          
          <!-- Verification Info -->
          <div class="mb-8 text-center">
            <div class="text-lg font-semibold mb-2">Certificate Verification</div>
            <div class="bg-gray-50 inline-block px-6 py-3 rounded-lg text-lg font-mono print:bg-gray-100">
              {{ certificateId }}
            </div>
            <p class="mt-2 text-sm text-gray-500">
              To verify this certificate, visit <span class="font-semibold">ai-validator.com/verify</span> and enter the verification code.
            </p>
          </div>
          
          <!-- Signature -->
          <div class="flex justify-between items-end">
            <div>
              <div class="h-16 border-b border-gray-400 mb-1 w-48">
                <img src="/signature.png" alt="Digital Signature" class="h-14 w-auto object-contain opacity-75" />
              </div>
              <div class="text-sm font-semibold">AI-Validator Authentication</div>
            </div>
            
            <div class="w-24 h-24 relative">
              <img src="/certificate-seal.png" alt="Certificate Seal" class="w-full h-full object-contain opacity-75" />
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
          :to="`/dashboard/report/${document.id}`"
          class="bg-gray-600 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-700 transition duration-300 text-center"
        >
          View Full Report
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
});

const route = useRoute();
const isLoading = ref(true);
const document = ref(null);
const certificateId = ref('');

// Mock document data - in a real app, this would be fetched from an API
const mockDocuments = [
  {
    id: '1',
    name: 'research-paper.pdf',
    size: '1.2 MB',
    date: new Date(2023, 4, 15),
    status: 'Complete',
    result: 'Level 1: Clean',
    aiScore: 12,
    summary: 'This document appears to be human-created with no significant indicators of AI generation. The writing style is consistent with academic research, showing natural variations in sentence structure and vocabulary usage typical of human authors.'
  },
  {
    id: '2',
    name: 'thesis-draft.pdf',
    size: '3.5 MB',
    date: new Date(2023, 4, 10),
    status: 'Complete',
    result: 'Level 2: AI-Supported',
    aiScore: 58,
    summary: 'This document shows signs of AI assistance but with significant human input and editing. While some sections exhibit patterns typical of AI-generated text, others show clear evidence of human authorship and original thought.'
  },
  {
    id: '3',
    name: 'project-proposal.pdf',
    size: '0.8 MB',
    date: new Date(2023, 4, 5),
    status: 'Complete',
    result: 'Level 3: AI-Generated',
    aiScore: 92,
    summary: 'This document appears to be primarily AI-generated with minimal human editing. It exhibits numerous characteristics typical of large language model outputs, including formulaic structure, generic phrasing, and consistency issues.'
  }
];

// Generate a random certificate ID
const generateCertificateId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < 16; i++) {
    if (i > 0 && i % 4 === 0) {
      id += '-';
    }
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};

// Fetch document data based on ID
onMounted(async () => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const id = route.params.id;
  document.value = mockDocuments.find(doc => doc.id === id) || null;
  
  if (document.value) {
    certificateId.value = generateCertificateId();
  }
  
  isLoading.value = false;
});

// Format date helper
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Get result class
const getResultClass = (result) => {
  if (result.includes('Clean')) {
    return 'bg-green-100 text-green-800 border border-green-300';
  } else if (result.includes('AI-Supported')) {
    return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
  } else if (result.includes('AI-Generated')) {
    return 'bg-red-100 text-red-800 border border-red-300';
  } else {
    return 'bg-gray-100 text-gray-800 border border-gray-300';
  }
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