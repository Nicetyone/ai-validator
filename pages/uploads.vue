<template>
  <PageTransition>
    <div class="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <!-- Hero Section with enhanced visual effects -->
      <section class="relative overflow-hidden py-20 mb-8">
        <!-- Vibrant animated background -->
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0">
            <!-- Colorful gradient overlays -->
            <div class="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[80px] animate-slow-float"></div>
            <div class="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-tr from-teal-400/20 to-emerald-400/20 rounded-full blur-[80px] animate-slow-float animation-delay-2000"></div>
            <div class="absolute top-[30%] left-[10%] w-[40%] h-[40%] bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-[60px] animate-slow-float animation-delay-3000"></div>

            <!-- Enhanced floating particles -->
            <div class="absolute inset-0 opacity-50">
              <div class="firefly"></div>
              <div class="firefly animation-delay-1000"></div>
              <div class="firefly animation-delay-2000"></div>
              <div class="firefly animation-delay-3000"></div>
              <div class="firefly animation-delay-4000"></div>
              <div class="firefly animation-delay-5000"></div>
              <div class="firefly animation-delay-6000"></div>
            </div>
          </div>
        </div>
        
        <div class="container mx-auto px-6 text-center relative z-10">
          <Transition name="slide-up" appear>
            <div class="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span class="text-sm font-medium text-white">Your Documents</span>
            </div>
          </Transition>
          <Transition name="slide-up" appear>
            <h1 class="text-5xl font-bold mb-6 text-white leading-tight">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Manage</span> Your Uploads
            </h1>
          </Transition>
          <Transition name="fade-in" appear>
            <p class="text-xl max-w-2xl mx-auto text-gray-200 mb-8">
              View and manage your uploaded documents, check their validation status, and download certificates.
            </p>
          </Transition>
        </div>
      </section>

      <div class="container mx-auto px-4 py-8">
        <!-- Actions and Filters -->
        <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-6 mb-8 border border-white/20">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink 
                to="/validate" 
                class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                Upload New Document
              </NuxtLink>
              
              <button 
                @click="promptClear" 
                class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear All Documents
              </button>
            </div>
            
            <!-- Filters -->
            <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <StyledSelect
                v-model="filters.status"
                :options="statusOptions"
                label="Filter by status"
                class="w-full md:w-48"
              />
              <StyledSelect
                v-model="filters.result"
                :options="resultOptions"
                label="Filter by result"
                class="w-full md:w-48"
              />
            </div>
          </div>
        </div>
        
        <!-- Loading -->
        <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          <div v-for="n in 6" :key="n" class="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
            <div class="animate-pulse space-y-4">
              <div class="h-4 bg-white/20 rounded w-3/4"></div>
              <div class="h-4 bg-white/20 rounded w-full"></div>
              <div class="h-4 bg-white/20 rounded w-5/6"></div>
            </div>
          </div>
        </div>

        <!-- Verification tool -->
        <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-white/20">
          <h2 class="text-2xl font-bold text-white mb-6">Verify a Document</h2>
          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex-1">
              <label
                for="certificate-id"
                class="block text-sm font-medium text-gray-200 mb-2"
              >
                Certificate ID
              </label>
              <input
                id="certificate-id"
                v-model="verificationId"
                placeholder="Enter certificate ID (e.g., ABCD-1234-EFGH-5678)"
                class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div class="flex items-end">
              <button 
                @click="verifyDocument"
                class="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="!verificationId"
              >
                Verify
              </button>
            </div>
          </div>
          
          <!-- Verification result -->
          <div
            v-if="verificationResult"
            class="mt-6 p-6 rounded-xl"
            :class="
              verificationSuccess
                ? 'bg-green-500/10 border border-green-500/20'
                : 'bg-red-500/10 border border-red-500/20'
            "
          >
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg v-if="verificationSuccess" class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <svg v-else class="h-6 w-6 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-white">
                  {{ verificationResult }}
                </p>
                <div v-if="verificationSuccess && verifiedDocument" class="mt-3">
                  <NuxtLink 
                    :to="`/certificate/${verifiedDocument.id}`"
                    class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Certificate
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Documents section -->
        <div v-if="!isLoading">
          <!-- Empty state -->
          <div v-if="filteredDocuments.length === 0" class="bg-white/10 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            <h3 class="text-2xl font-bold text-white mb-3">No documents found</h3>
            <p class="text-gray-300 mb-8">
              {{ 
                filters.status || filters.result 
                  ? 'No documents match your current filters. Try changing or clearing your filters.' 
                  : 'You haven\'t uploaded any documents yet.'
              }}
            </p>
            <NuxtLink 
              to="/validate" 
              class="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              Upload Your First Document
            </NuxtLink>
          </div>
          
          <!-- Documents grid -->
          <TransitionGroup name="fade-in" appear tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="doc in filteredDocuments" :key="doc.id" class="group bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-300">
              <div class="p-6">
                <div class="flex items-start space-x-4">
                  <div class="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="text-lg font-semibold text-white truncate">{{ doc.name }}</h3>
                    <p class="text-sm text-gray-300">{{ formatDate(doc.date) }}</p>
                  </div>
                </div>
                
                <div class="mt-4 flex flex-wrap gap-2">
                  <DocumentStatus :status="doc.status" />
                  <DocumentStatus :status="doc.result" type="result" />
                </div>
                
                <div v-if="doc.certificateId" class="mt-3">
                  <p class="text-sm text-gray-300">Certificate ID: <span class="font-mono text-blue-400">{{ doc.certificateId }}</span></p>
                </div>
                
                <div class="mt-6 flex flex-wrap gap-2">
                  <NuxtLink
                    :to="`/report/${doc.id}`"
                    class="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 text-sm font-medium transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Report
                  </NuxtLink>
                  
                  <NuxtLink
                    :to="`/certificate/${doc.id}`"
                    class="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500/30 text-sm font-medium transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Certificate
                  </NuxtLink>
                  
                  <button 
                    @click="promptDelete(doc.id)"
                    class="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 text-sm font-medium transition-all duration-300"
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
            <nav class="inline-flex rounded-xl shadow-sm -space-x-px" aria-label="Pagination">
              <button
                @click="prevPage"
                :disabled="pagination.currentPage === 1"
                class="relative inline-flex items-center px-4 py-2 rounded-l-xl border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors duration-300"
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
                class="relative inline-flex items-center px-4 py-2 rounded-r-xl border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors duration-300"
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
  </PageTransition>
  <ConfirmModal
    :show="showDeleteModal"
    title="Delete Document"
    message="Are you sure you want to delete this document?"
    @confirm="confirmDelete"
    @cancel="showDeleteModal = false"
  />
  <ConfirmModal
    :show="showClearModal"
    title="Clear All Documents"
    message="Are you sure you want to clear all documents? This will remove all your uploaded files and analysis results."
    @confirm="confirmClear"
    @cancel="showClearModal = false"
  />
</template>

<script setup>
import PageTransition from '~/components/PageTransition.vue'
definePageMeta({ title: 'My Documents' })
useHead({
  meta: [
    {
      name: 'description',
      content: 'View and manage all documents you have submitted for AI validation.'
    }
  ]
})
import { ref, computed, onMounted, watch } from 'vue';
import { useDocumentStore } from '~/stores/document';
import ConfirmModal from '~/components/ConfirmModal.vue';
import { useToast } from '~/composables/useToast'
import StyledSelect from '~/components/StyledSelect.vue';
import DocumentStatus from '~/components/DocumentStatus.vue';

const documentStore = useDocumentStore();
const isLoading = ref(true);
const verificationId = ref('');
const verificationResult = ref('');
const verificationSuccess = ref(false);
const verifiedDocument = ref(null);

const showDeleteModal = ref(false);
const docToDelete = ref(null);
const showClearModal = ref(false);
const { showToast } = useToast();

// Filters
const filters = ref({
  status: '',
  result: ''
});

const statusOptions = [
  { value: '', label: 'All Statuses' },
  { value: 'Complete', label: 'Complete' },
  { value: 'Processing', label: 'Processing' },
  { value: 'Failed', label: 'Failed' }
];

const resultOptions = [
  { value: '', label: 'All Results' },
  { value: 'Clean', label: 'Level 1: Clean' },
  { value: 'AI-Supported', label: 'Level 2: AI-Supported' },
  { value: 'AI-Generated', label: 'Level 3: AI-Generated' }
];

watch(filters, () => {
  pagination.value.currentPage = 1;
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
const promptDelete = (id) => {
  docToDelete.value = id
  showDeleteModal.value = true
}

const confirmDelete = () => {
  if (docToDelete.value) {
    documentStore.deleteDocument(docToDelete.value)
    if (filteredDocuments.value.length === 0 && pagination.value.currentPage > 1) {
      pagination.value.currentPage--
    }
    showToast('Document deleted', 'success')
  }
  showDeleteModal.value = false
  docToDelete.value = null
}

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
const promptClear = () => {
  showClearModal.value = true
}

const confirmClear = () => {
  documentStore.clearAllData()
  isLoading.value = false
  updatePagination()
  showClearModal.value = false
  showToast('All documents cleared', 'success')
}
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.5s ease;
}

.fade-in-enter-from {
  opacity: 0;
}

.zoom-in-enter-active,
.zoom-in-leave-active {
  transition: all 0.5s ease;
}

.zoom-in-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
</style> 