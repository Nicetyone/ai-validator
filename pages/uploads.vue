<template>
  <div>
    <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold">My Documents</h1>
        <p class="mt-2 text-lg">View and manage your uploaded documents</p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-8">
      <!-- Actions -->
      <div class="flex justify-between items-center mb-6">
        <div class="flex space-x-4">
          <NuxtLink 
            to="/validate" 
            class="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Upload New Document
          </NuxtLink>
          
          <button 
            @click="clearCache" 
            class="bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition duration-300 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Clear All Documents
          </button>
        </div>
        
        <!-- Filters -->
        <div class="flex space-x-4">
          <select
            v-model="filters.status"
            class="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">All Statuses</option>
            <option value="Complete">Complete</option>
            <option value="Processing">Processing</option>
            <option value="Failed">Failed</option>
          </select>
          
          <select
            v-model="filters.result"
            class="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">All Results</option>
            <option value="Clean">Level 1: Clean</option>
            <option value="AI-Supported">Level 2: AI-Supported</option>
            <option value="AI-Generated">Level 3: AI-Generated</option>
          </select>
        </div>
      </div>
      
      <!-- Loading -->
      <div v-if="isLoading" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p class="text-gray-600">Loading your documents...</p>
      </div>
      
      <!-- Verification tool -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl dark:text-gray-300 font-bold mb-4">Verify a Document</h2>
        <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div class="flex-1">
            <input 
              v-model="verificationId"
              placeholder="Enter certificate ID (e.g., ABCD-1234-EFGH-5678)"
              class="w-full dark:text-gray-300 p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <button 
              @click="verifyDocument"
              class="w-full dark:text-gray-300 md:w-auto bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition duration-300"
              :disabled="!verificationId"
            >
              Verify
            </button>
          </div>
        </div>
        
        <!-- Verification result -->
        <div v-if="verificationResult" class="mt-4 p-4 rounded-md" :class="verificationSuccess ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg v-if="verificationSuccess" class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <svg v-else class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p :class="verificationSuccess ? 'text-green-700' : 'text-red-700'">
                {{ verificationResult }}
              </p>
              <div v-if="verificationSuccess && verifiedDocument" class="mt-2">
                <NuxtLink 
                  :to="`/certificate/${verifiedDocument.id}`"
                  class="text-blue-600 hover:underline"
                >
                  View Certificate
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Documents section -->
      <div v-if="!isLoading">
        <!-- Empty state -->
        <div v-if="filteredDocuments.length === 0" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          <h3 class="text-xl dark:text-gray-300 font-medium text-gray-900 mb-2">No documents found</h3>
          <p class="text-gray-500 mb-6">
            {{ 
              filters.status || filters.result 
                ? 'No documents match your current filters. Try changing or clearing your filters.' 
                : 'You haven\'t uploaded any documents yet.'
            }}
          </p>
          <NuxtLink 
            to="/validate" 
            class="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 inline-block"
          >
            Upload Your First Document
          </NuxtLink>
        </div>
        
        <!-- Documents grid -->
        <TransitionGroup name="fade-in" appear tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="doc in filteredDocuments" :key="doc.id" class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div class="p-6">
              <div class="flex items-start space-x-4">
                <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-lg dark:text-gray-300 font-semibold text-gray-900 truncate">{{ doc.name }}</h3>
                  <p class="text-sm dark:text-gray-300 text-gray-500">{{ formatDate(doc.date) }}</p>
                </div>
              </div>
              
              <div class="mt-4 flex justify-between items-center">
                <div>
                  <span :class="getStatusClass(doc.status)" class="text-xs px-2 py-1 rounded-full">
                    {{ doc.status }}
                  </span>
                </div>
                <div>
                  <span :class="getResultClass(doc.result)" class="text-xs px-2 py-1 rounded-full">
                    {{ doc.result }}
                  </span>
                </div>
              </div>
              
              <div v-if="doc.certificateId" class="mt-2">
                <p class="text-xs dark:text-gray-300 text-gray-500">Certificate ID: <span class="font-mono">{{ doc.certificateId }}</span></p>
              </div>
              
              <div class="mt-6 flex space-x-2">
                <NuxtLink 
                  :to="`/report/${doc.id}`" 
                  class="flex-1 bg-blue-100 text-blue-600 hover:bg-blue-200 text-center py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  View Report
                </NuxtLink>
                
                <NuxtLink 
                  :to="`/certificate/${doc.id}`" 
                  class="flex-1 bg-green-100 text-green-600 hover:bg-green-200 text-center py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Certificate
                </NuxtLink>
                
                <button 
                  @click="deleteDocument(doc.id)"
                  class="flex-none bg-gray-100 dark:bg-gray-700 text-gray-600 hover:bg-gray-200 py-2 px-3 rounded-md text-sm transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </TransitionGroup>
        
        <!-- Pagination -->
        <div v-if="filteredDocuments.length > 0" class="mt-8 flex justify-center">
          <nav class="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              @click="prevPage"
              :disabled="pagination.currentPage === 1"
              class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700"
              :class="{ 'cursor-not-allowed opacity-50': pagination.currentPage === 1 }"
            >
              <span class="sr-only">Previous</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
            
            <button
              v-for="page in pagination.totalPages"
              :key="page"
              @click="goToPage(page)"
              :class="[
                page === pagination.currentPage 
                  ? 'z-10 bg-blue-50 border-blue-500 text-blue-600' 
                  : 'bg-white dark:bg-gray-800 border-gray-300 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700',
                'relative inline-flex items-center px-4 py-2 border text-sm font-medium'
              ]"
            >
              {{ page }}
            </button>
            
            <button
              @click="nextPage"
              :disabled="pagination.currentPage === pagination.totalPages"
              class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700"
              :class="{ 'cursor-not-allowed opacity-50': pagination.currentPage === pagination.totalPages }"
            >
              <span class="sr-only">Next</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDocumentStore } from '~/stores/document';

const documentStore = useDocumentStore();
const isLoading = ref(true);
const verificationId = ref('');
const verificationResult = ref('');
const verificationSuccess = ref(false);
const verifiedDocument = ref(null);

// Filters
const filters = ref({
  status: '',
  result: ''
});

// Pagination
const pagination = ref({
  currentPage: 1,
  itemsPerPage: 6,
  total: 0,
  totalPages: 0
});

onMounted(async () => {
  // Initialize the document store
  await documentStore.initialize();
  isLoading.value = false;
  
  // Update pagination
  updatePagination();
});

// Format date helper
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Get status class for styling
const getStatusClass = (status) => {
  const classes = 'inline-flex text-xs leading-5 font-semibold ';
  switch (status) {
    case 'Complete':
      return classes + 'bg-green-100 text-green-800';
    case 'Processing':
      return classes + 'bg-blue-100 text-blue-800';
    case 'Failed':
      return classes + 'bg-red-100 text-red-800';
    default:
      return classes + 'bg-gray-100 text-gray-800';
  }
};

// Get result class for styling
const getResultClass = (result) => {
  const classes = 'inline-flex text-xs leading-5 font-semibold ';
  if (result.includes('Clean')) {
    return classes + 'bg-green-100 text-green-800';
  } else if (result.includes('AI-Supported')) {
    return classes + 'bg-yellow-100 text-yellow-800';
  } else if (result.includes('AI-Generated')) {
    return classes + 'bg-red-100 text-red-800';
  } else {
    return classes + 'bg-gray-100 text-gray-800';
  }
};

// Apply filters
const filteredDocuments = computed(() => {
  let filtered = documentStore.documents;
  
  // Apply status filter
  if (filters.value.status) {
    filtered = filtered.filter(doc => doc.status === filters.value.status);
  }
  
  // Apply result filter
  if (filters.value.result) {
    filtered = filtered.filter(doc => doc.result.includes(filters.value.result));
  }
  
  // Sort by date (newest first)
  filtered = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Update pagination
  pagination.value.total = filtered.length;
  pagination.value.totalPages = Math.ceil(filtered.length / pagination.value.itemsPerPage);
  
  // Apply pagination
  const start = (pagination.value.currentPage - 1) * pagination.value.itemsPerPage;
  const end = start + pagination.value.itemsPerPage;
  
  return filtered.slice(start, end);
});

// Update pagination
const updatePagination = () => {
  pagination.value.total = documentStore.documents.length;
  pagination.value.totalPages = Math.ceil(documentStore.documents.length / pagination.value.itemsPerPage);
};

// Pagination methods
const nextPage = () => {
  if (pagination.value.currentPage < pagination.value.totalPages) {
    pagination.value.currentPage++;
  }
};

const prevPage = () => {
  if (pagination.value.currentPage > 1) {
    pagination.value.currentPage--;
  }
};

const goToPage = (page) => {
  pagination.value.currentPage = page;
};

// Delete document
const deleteDocument = (id) => {
  if (confirm('Are you sure you want to delete this document?')) {
    // Delete from store (which updates localStorage)
    documentStore.deleteDocument(id);
    
    // Update pagination if needed
    if (filteredDocuments.value.length === 0 && pagination.value.currentPage > 1) {
      pagination.value.currentPage--;
    }
  }
};

// Verify document
const verifyDocument = () => {
  if (!verificationId.value) return;
  
  // Clear previous verification
  verificationResult.value = '';
  verificationSuccess.value = false;
  verifiedDocument.value = null;
  
  // Check for document with this certificate ID
  const document = documentStore.verifyDocument(verificationId.value);
  
  if (document) {
    verificationSuccess.value = true;
    verificationResult.value = `Document "${document.name}" verification successful! This certificate is valid.`;
    verifiedDocument.value = document;
  } else {
    verificationSuccess.value = false;
    verificationResult.value = 'Certificate ID not found. Please check the ID and try again.';
  }
};

// Clear cache
const clearCache = () => {
  if (confirm('Are you sure you want to clear all documents? This will remove all your uploaded files and analysis results.')) {
    documentStore.clearAllData();
    isLoading.value = false;
    updatePagination();
  }
};
</script> 