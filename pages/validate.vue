<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-800">
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
        <div class="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <span class="text-sm font-medium text-white">AI Document Validation</span>
        </div>
        <h1 class="text-5xl font-bold mb-6 text-white leading-tight">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Validate</span> Your PDF Documents
        </h1>
        <p class="text-xl max-w-2xl mx-auto text-gray-200 mb-8">
          Upload your PDF documents to check for AI-generated content and receive a detailed analysis report.
        </p>
        <div class="flex justify-center space-x-4">
          <button class="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
            Start Validation
          </button>
          <button class="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
    
    <div class="container mx-auto px-6 py-12 relative z-20">
      <div class="max-w-4xl mx-auto">
        <!-- Upload component with enhanced styling -->
        <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-10 mb-12 border border-white/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-white">Upload Document for Validation</h2>
          </div>
          <p class="text-gray-300 mb-8">Drag and drop your PDF document here or click to browse your files. We support documents up to 25MB.</p>
          <FileUpload @upload-complete="handleUploadComplete" />
        </div>
        
        <!-- Success message with vibrant gradient -->
        <div v-if="uploadSuccess" class="bg-gradient-to-br from-green-500/10 to-green-500/20 backdrop-blur-xl border-l-4 border-green-400 p-8 rounded-2xl mb-12 shadow-xl shadow-green-500/15 animate-fade-in">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              </div>
            </div>
            <div class="ml-6">
              <p class="text-xl font-bold text-white">
                Your document has been uploaded successfully!
              </p>
              <p class="mt-2 text-gray-300">
                It is now being processed. You'll be redirected to the results page shortly.
              </p>
              <div class="mt-6">
                <NuxtLink to="/uploads" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105 group">
                  <span class="mr-2">View your documents</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Steps guide with colorful cards -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <div class="inline-block mb-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white border border-white/20">
              Simple Process
            </div>
            <h2 class="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">How It Works</h2>
            <p class="text-lg text-gray-300 max-w-2xl mx-auto">Our validation process is designed to be quick and reliable, giving you confidence in your document's authenticity.</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="group relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-500 border border-white/20 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="absolute -right-1 top-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">Step 1</div>
                <h3 class="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Upload Your Document</h3>
                <p class="text-gray-300 group-hover:text-white transition-colors duration-300">Upload your PDF document to our secure platform for analysis. We prioritize your data privacy and security throughout the process.</p>
              </div>
            </div>
            
            <div class="group relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl hover:bg-gradient-to-br hover:from-indigo-500/20 hover:to-indigo-600/20 transition-all duration-500 border border-white/20 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/20 overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 group-hover:scale-110 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="absolute -right-1 top-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">Step 2</div>
                <h3 class="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">AI Analysis</h3>
                <p class="text-gray-300 group-hover:text-white transition-colors duration-300">Our advanced algorithms analyze your document for AI-generated content with high accuracy and precision, examining multiple linguistic factors.</p>
              </div>
            </div>
            
            <div class="group relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-purple-600/20 transition-all duration-500 border border-white/20 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 group-hover:scale-110 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="absolute -right-1 top-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">Step 3</div>
                <h3 class="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Get Your Results</h3>
                <p class="text-gray-300 group-hover:text-white transition-colors duration-300">Receive a detailed report and certificate of verification that you can share to prove your document's authenticity.</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- AI Detection Levels with colorful cards -->
        <div>
          <div class="text-center mb-12">
            <div class="inline-block mb-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white border border-white/20">
              Classification System
            </div>
            <h2 class="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Understanding AI Detection Levels</h2>
            <p class="text-lg text-gray-300 max-w-2xl mx-auto">Our advanced AI detection system analyzes your document and classifies it into one of three levels based on the presence of AI-generated content.</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="group relative overflow-hidden p-8 bg-gradient-to-br from-white/10 to-green-500/5 backdrop-blur-xl rounded-3xl hover:from-green-400/10 hover:to-green-600/20 transition-all duration-500 border border-white/20 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/20">
              <div class="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-green-400 to-green-600"></div>
              <div class="absolute -bottom-16 -right-16 w-32 h-32 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/30 transition-colors duration-500"></div>
              
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 group-hover:scale-110 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="mb-6">
                  <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">Level 1: Clean</h3>
                  <div class="inline-flex items-center bg-green-500/20 px-3 py-1 rounded-full">
                    <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    <span class="text-green-400 text-sm font-medium">Fully Authentic</span>
                  </div>
                </div>
                <p class="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">No AI detected. The document appears to be entirely human-created, ensuring maximum authenticity and credibility.</p>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <svg class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Natural language patterns
                  </li>
                  <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <svg class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Authentic human voice
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="group relative overflow-hidden p-8 bg-gradient-to-br from-white/10 to-yellow-500/5 backdrop-blur-xl rounded-3xl hover:from-yellow-400/10 hover:to-yellow-600/20 transition-all duration-500 border border-white/20 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div class="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>
              <div class="absolute -bottom-16 -right-16 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl group-hover:bg-yellow-500/30 transition-colors duration-500"></div>
              
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40 group-hover:scale-110 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="mb-6">
                  <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">Level 2: AI-Supported</h3>
                  <div class="inline-flex items-center bg-yellow-500/20 px-3 py-1 rounded-full">
                    <span class="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                    <span class="text-yellow-400 text-sm font-medium">Partially AI-Generated</span>
                  </div>
                </div>
                <p class="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">Document shows signs of AI assistance, but with significant human input and editing throughout the content.</p>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <svg class="h-5 w-5 text-yellow-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Mixed writing patterns
                  </li>
                  <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <svg class="h-5 w-5 text-yellow-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Human editing evident
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="group relative overflow-hidden p-8 bg-gradient-to-br from-white/10 to-red-500/5 backdrop-blur-xl rounded-3xl hover:from-red-400/10 hover:to-red-600/20 transition-all duration-500 border border-white/20 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/20">
              <div class="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-red-400 to-red-600"></div>
              <div class="absolute -bottom-16 -right-16 w-32 h-32 bg-red-500/20 rounded-full blur-3xl group-hover:bg-red-500/30 transition-colors duration-500"></div>
              
              <div class="relative z-10">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mb-6 shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 group-hover:scale-110 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="mb-6">
                  <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">Level 3: AI-Generated</h3>
                  <div class="inline-flex items-center bg-red-500/20 px-3 py-1 rounded-full">
                    <span class="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                    <span class="text-red-400 text-sm font-medium">AI-Generated</span>
                  </div>
                </div>
                <p class="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">Document appears to be primarily AI-generated with minimal human editing, showing clear patterns of artificial creation.</p>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <svg class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    AI language patterns
                  </li>
                  <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <svg class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Minimal human editing
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Additional Information -->
          <div class="mt-16 p-8 bg-gradient-to-br from-white/10 to-blue-500/5 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
            <div class="flex flex-col md:flex-row items-start">
              <div class="flex-shrink-0 mb-6 md:mb-0">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="md:ml-8">
                <h3 class="text-2xl font-bold text-white mb-4">Understanding the Results</h3>
                <p class="text-lg text-gray-300 mb-6">Our AI detection system uses advanced machine learning algorithms to analyze various aspects of your document, including:</p>
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <h4 class="text-lg font-medium text-white mb-4">Content Analysis</h4>
                    <ul class="space-y-3">
                      <li class="flex items-center text-gray-300">
                        <div class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <span>Writing patterns and style</span>
                      </li>
                      <li class="flex items-center text-gray-300">
                        <div class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <span>Language complexity</span>
                      </li>
                    </ul>
                  </div>
                  <div class="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <h4 class="text-lg font-medium text-white mb-4">Statistical Analysis</h4>
                    <ul class="space-y-3">
                      <li class="flex items-center text-gray-300">
                        <div class="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <span>Content consistency</span>
                      </li>
                      <li class="flex items-center text-gray-300">
                        <div class="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <span>Statistical patterns</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <!-- Call to action -->
                <div class="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-2xl">
                  <div class="mb-4 sm:mb-0">
                    <h4 class="text-lg font-medium text-white mb-1">Ready to validate your document?</h4>
                    <p class="text-gray-300">Get started with our easy upload process.</p>
                  </div>
                  <button class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
                    Start Now
                  </button>
                </div>
              </div>
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
.animation-delay-5000 {
  animation-delay: 5s;
}
.animation-delay-6000 {
  animation-delay: 6s;
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
  background-color: rgba(255, 255, 255, 0.7);
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