<template>
  <div>
    <!-- Hero Section with enhanced visual effects -->
    <section class="relative overflow-hidden py-16 mb-5">
      <!-- Vibrant animated background -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0">

          <!-- Floating particles -->
          <div class="absolute inset-0 opacity-30">
            <div class="firefly"></div>
            <div class="firefly animation-delay-1000"></div>
            <div class="firefly animation-delay-2000"></div>
            <div class="firefly animation-delay-3000"></div>
            <div class="firefly animation-delay-4000"></div>
          </div>
        </div>
      </div>
      
      <div class="container mx-auto px-6 text-center relative z-10">
        <h1 class="text-4xl font-medium mb-4 text-white leading-tight">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Validate</span> Your PDF Documents
        </h1>
        <p class="text-lg max-w-2xl mx-auto text-gray-300">
          Upload your PDF documents to check for AI-generated content and receive a detailed analysis report.
        </p>
      </div>
    </section>
    
    <div class="container mx-auto px-6 py-12 relative -mt-12 z-20">
      <div class="max-w-3xl mx-auto">
        <!-- Upload component with enhanced styling -->
        <div class="bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/10 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500">
          <h2 class="text-xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Upload Document for Validation</h2>
          <FileUpload @upload-complete="handleUploadComplete" />
        </div>
        
        <!-- Success message with vibrant gradient -->
        <div v-if="uploadSuccess" class="bg-gradient-to-br from-green-500/5 to-green-500/10 backdrop-blur-md border-l-4 border-green-400 p-6 rounded-xl mb-12 shadow-lg shadow-green-500/10 animate-fade-in">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center animate-pulse">
                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-base font-medium text-white">
                Your document has been uploaded successfully!
              </p>
              <p class="mt-1 text-sm text-gray-300">
                It is now being processed. You'll be redirected to the results page shortly.
              </p>
              <div class="mt-4">
                <NuxtLink to="/uploads" class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-sm font-medium rounded-full text-white transition-all duration-300 shadow-md shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105">
                  View your documents
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Steps guide with colorful cards -->
        <div class="mb-16">
          <div class="text-center mb-12">
            <div class="inline-block mb-3 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm text-sm text-gray-300 border border-white/10">
              Simple Process
            </div>
            <h2 class="text-2xl font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">How It Works</h2>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-blue-500/5 hover:to-blue-500/10 transition-all duration-500 border border-white/5 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/10">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-400 mr-3 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                  <span class="text-lg">1</span>
                </div>
                <h3 class="text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300">Upload Your Document</h3>
              </div>
              <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Upload your PDF document to our secure platform for analysis. We prioritize your data privacy and security.</p>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-indigo-500/5 hover:to-indigo-500/10 transition-all duration-500 border border-white/5 hover:border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/10">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-400 mr-3 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                  <span class="text-lg">2</span>
                </div>
                <h3 class="text-lg font-medium text-white group-hover:text-indigo-300 transition-colors duration-300">AI Analysis</h3>
              </div>
              <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Our advanced algorithms analyze your document for AI-generated content with high accuracy and precision.</p>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-purple-500/5 hover:to-purple-500/10 transition-all duration-500 border border-white/5 hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-400 mr-3 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                  <span class="text-lg">3</span>
                </div>
                <h3 class="text-lg font-medium text-white group-hover:text-purple-300 transition-colors duration-300">Get Your Results</h3>
              </div>
              <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Receive a detailed report and certificate of verification that you can share to prove your document's authenticity.</p>
            </div>
          </div>
        </div>
        
        <!-- AI Detection Levels with colorful cards -->
        <div>
          <div class="text-center mb-12">
            <div class="inline-block mb-3 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm text-sm text-gray-300 border border-white/10">
              Classification System
            </div>
            <h2 class="text-2xl font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Understanding AI Detection Levels</h2>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-green-500/5 hover:to-green-500/10 transition-all duration-500 border border-white/5 hover:border-green-500/20 border-l-green-500/30 border-l-4 hover:scale-105">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-green-500/10 mr-3 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-white group-hover:text-green-300 transition-colors duration-300">Level 1: Clean</h3>
              </div>
              <p class="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">No AI detected. The document appears to be entirely human-created, ensuring maximum authenticity and credibility.</p>
              <div class="text-green-400 text-sm font-medium">Fully Authentic</div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-yellow-500/5 hover:to-yellow-500/10 transition-all duration-500 border border-white/5 hover:border-yellow-500/20 border-l-yellow-500/30 border-l-4 hover:scale-105">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-yellow-500/10 mr-3 group-hover:bg-yellow-500/20 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-white group-hover:text-yellow-300 transition-colors duration-300">Level 2: AI-Supported</h3>
              </div>
              <p class="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">Document shows signs of AI assistance, but with significant human input and editing throughout the content.</p>
              <div class="text-yellow-400 text-sm font-medium">Partially AI-Generated</div>
            </div>
            
            <div class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-red-500/5 hover:to-red-500/10 transition-all duration-500 border border-white/5 hover:border-red-500/20 border-l-red-500/30 border-l-4 hover:scale-105">
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-red-500/10 mr-3 group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-white group-hover:text-red-300 transition-colors duration-300">Level 3: AI-Generated</h3>
              </div>
              <p class="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">Document appears to be primarily AI-generated with minimal human editing, showing clear patterns of artificial creation.</p>
              <div class="text-red-400 text-sm font-medium">AI-Generated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ title: 'Validate Document' })
useHead({
  meta: [
    {
      name: 'description',
      content: 'Upload PDFs and receive a detailed AI analysis report with AI-Validator.'
    }
  ]
})
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

<style scoped>
.animate-slow-float {
  animation: slow-float 10s ease-in-out infinite;
}
.animation-delay-1000 {
  animation-delay: 1s;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-3000 {
  animation-delay: 3s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes slow-float {
  0%, 100% {
    opacity: 0.5;
    transform: translate(0, 0);
  }
  50% {
    opacity: 0.8;
    transform: translate(0, -10px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Firefly effect */
.firefly {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px 5px rgba(140, 140, 255, 0.3),
              0 0 20px 10px rgba(100, 100, 255, 0.2),
              0 0 30px 15px rgba(60, 60, 255, 0.1);
  animation: firefly 15s linear infinite;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

@keyframes firefly {
  0% {
    top: 100%;
    left: 10%;
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.6;
  }
  70% {
    opacity: 0.9;
  }
  100% {
    top: 0%;
    left: 90%;
    opacity: 0;
  }
}
</style> 