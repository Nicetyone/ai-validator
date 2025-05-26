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
        <div>
          <NuxtLink 
            to="/validate" 
            class="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Upload New Document
          </NuxtLink>
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
      
      <!-- Empty state -->
      <div v-else-if="filteredDocuments.length === 0" class="bg-white rounded-lg shadow-md p-12 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        <h3 class="text-xl font-medium text-gray-900 mb-2">No documents found</h3>
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
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="doc in filteredDocuments" :key="doc.id" class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="p-6">
            <div class="flex items-start space-x-4">
              <div class="bg-gray-100 rounded-lg p-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-semibold text-gray-900 truncate">{{ doc.name }}</h3>
                <p class="text-sm text-gray-500">{{ formatDate(doc.date) }}</p>
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
                class="flex-none bg-gray-100 text-gray-600 hover:bg-gray-200 py-2 px-3 rounded-md text-sm transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Pagination -->
      <div v-if="filteredDocuments.length > 0" class="mt-8 flex justify-center">
        <nav class="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <button
            @click="prevPage"
            :disabled="pagination.currentPage === 1"
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
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
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
              'relative inline-flex items-center px-4 py-2 border text-sm font-medium'
            ]"
          >
            {{ page }}
          </button>
          
          <button
            @click="nextPage"
            :disabled="pagination.currentPage === pagination.totalPages"
            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
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
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// Mock data - would be fetched from API
const documents = ref([
  {
    id: '1',
    name: 'research-paper.pdf',
    size: '1.2 MB',
    date: new Date(2023, 4, 15),
    status: 'Complete',
    result: 'Level 1: Clean'
  },
  {
    id: '2',
    name: 'thesis-draft.pdf',
    size: '3.5 MB',
    date: new Date(2023, 4, 10),
    status: 'Complete',
    result: 'Level 2: AI-Supported'
  },
  {
    id: '3',
    name: 'project-proposal.pdf',
    size: '0.8 MB',
    date: new Date(2023, 4, 5),
    status: 'Complete',
    result: 'Level 3: AI-Generated'
  },
  {
    id: '4',
    name: 'essay-final.pdf',
    size: '0.6 MB',
    date: new Date(2023, 4, 1),
    status: 'Complete',
    result: 'Level 1: Clean'
  },
  {
    id: '5',
    name: 'literature-review.pdf',
    size: '2.1 MB',
    date: new Date(2023, 3, 25),
    status: 'Complete',
    result: 'Level 2: AI-Supported'
  },
  {
    id: '6',
    name: 'dissertation-chapter1.pdf',
    size: '1.8 MB',
    date: new Date(2023, 3, 20),
    status: 'Processing',
    result: 'Pending'
  },
  {
    id: '7',
    name: 'term-paper.pdf',
    size: '1.3 MB',
    date: new Date(2023, 3, 15),
    status: 'Failed',
    result: 'Error'
  }
]);

const isLoading = ref(true);

// Filters
const filters = ref({
  status: '',
  result: ''
});

// Pagination
const pagination = ref({
  currentPage: 1,
  itemsPerPage: 6,
  total: documents.value.length,
  totalPages: Math.ceil(documents.value.length / 6)
});

onMounted(() => {
  // Simulate API request
  setTimeout(() => {
    isLoading.value = false;
  }, 800);
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

// Apply filters and pagination
const filteredDocuments = computed(() => {
  let filtered = documents.value;
  
  // Apply status filter
  if (filters.value.status) {
    filtered = filtered.filter(doc => doc.status === filters.value.status);
  }
  
  // Apply result filter
  if (filters.value.result) {
    filtered = filtered.filter(doc => doc.result.includes(filters.value.result));
  }
  
  // Update pagination totals
  pagination.value.total = filtered.length;
  pagination.value.totalPages = Math.ceil(filtered.length / pagination.value.itemsPerPage);
  
  // Apply pagination
  const start = (pagination.value.currentPage - 1) * pagination.value.itemsPerPage;
  const end = start + pagination.value.itemsPerPage;
  
  return filtered.slice(start, end);
});

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
    // In a real app, this would call an API
    documents.value = documents.value.filter(doc => doc.id !== id);
    
    // Update pagination
    if (filteredDocuments.value.length === 0 && pagination.value.currentPage > 1) {
      pagination.value.currentPage--;
    }
  }
};
</script> 