<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-800">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-24">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0">
          <!-- Colorful gradient overlays -->
          <div class="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[100px] animate-slow-float"></div>
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
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <div class="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span class="text-sm font-medium text-white">Knowledge Base</span>
    </div>
          <h1 class="text-5xl font-bold mb-6 text-white leading-tight">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Documentation</span>
          </h1>
          <p class="text-xl text-gray-200 mb-8">
            Learn how to use AI-Validator effectively and understand our AI detection technology
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-xl mx-auto">
            <div class="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                class="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-xl shadow-lg"
              />
              <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Quick Links -->
        <div class="grid md:grid-cols-2 gap-8 mb-20">
          <NuxtLink to="/docs/ai-usage" class="group relative overflow-hidden p-8 bg-white/10 backdrop-blur-xl rounded-3xl hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-blue-600/20 transition-all duration-500 border border-white/20 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20">
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mr-6 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">AI Usage Guide</h3>
                  <p class="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Learn about ethical AI usage and best practices</p>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-white/10 group-hover:border-blue-500/20 transition-colors duration-300">
                <span class="inline-flex items-center text-blue-400 group-hover:text-blue-300">
                  <span>Read guide</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          </NuxtLink>

          <div class="group relative overflow-hidden p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 cursor-not-allowed">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gray-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center mr-6 shadow-lg shadow-gray-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-400">Validation Process</h3>
                  <p class="text-gray-500">Understand how our AI detection works</p>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-white/10">
                <span class="inline-flex items-center text-gray-500">
                  <span>Work in Progress</span>
                </span>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 cursor-not-allowed">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gray-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center mr-6 shadow-lg shadow-gray-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-400">Certificates</h3>
                  <p class="text-gray-500">Learn about our verification certificates</p>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-white/10">
                <span class="inline-flex items-center text-gray-500">
                  <span>Work in Progress</span>
                </span>
              </div>
            </div>
          </div>

          <div class="group relative overflow-hidden p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 cursor-not-allowed">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gray-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center mr-6 shadow-lg shadow-gray-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-400">API Reference</h3>
                  <p class="text-gray-500">Integrate AI-Validator into your applications</p>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-white/10">
                <span class="inline-flex items-center text-gray-500">
                  <span>Work in Progress</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Getting Started -->
        <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-10 mb-20 border border-white/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
          <h2 class="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Getting Started</h2>
          
          <div class="space-y-8">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">1</div>
              </div>
              <div class="ml-6">
                <h3 class="text-xl font-bold text-white mb-3">Upload a Document</h3>
                <p class="text-gray-300">Go to the <NuxtLink to="/validate" class="text-blue-400 hover:text-blue-300 transition-colors">Validate</NuxtLink> page and upload your PDF document for analysis. Our system supports documents up to 25MB in size.</p>
                <div class="mt-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-blue-300">Supported formats: PDF, DOCX, TXT</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">2</div>
              </div>
              <div class="ml-6">
                <h3 class="text-xl font-bold text-white mb-3">Review Results</h3>
                <p class="text-gray-300">Once processing is complete, review the detailed report to understand the AI detection findings and get your certificate.</p>
                <div class="mt-4 p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-sm text-indigo-300">Results are typically ready within seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <NuxtLink
              to="/validate"
              class="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 group"
            >
              <span class="mr-2">Start Validating Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Popular Topics -->
        <div>
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Popular Topics</h2>
            <div class="text-gray-500 flex items-center">
              <span>Coming Soon</span>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="group relative overflow-hidden p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 cursor-not-allowed">
              <div class="mr-4 w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-400">AI Usage Guidelines</h3>
                <p class="text-gray-500 text-sm">Best practices for using AI tools ethically</p>
              </div>
              <div class="ml-auto">
                <span class="text-gray-500 text-sm">Work in Progress</span>
              </div>
            </div>

            <div class="group relative overflow-hidden p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 cursor-not-allowed">
              <div class="mr-4 w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-400">Validation Process</h3>
                <p class="text-gray-500 text-sm">How our AI detection technology works</p>
              </div>
              <div class="ml-auto">
                <span class="text-gray-500 text-sm">Work in Progress</span>
              </div>
            </div>

            <div class="group relative overflow-hidden p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 cursor-not-allowed">
              <div class="mr-4 w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-400">Certificate Verification</h3>
                <p class="text-gray-500 text-sm">Understanding and verifying certificates</p>
              </div>
              <div class="ml-auto">
                <span class="text-gray-500 text-sm">Work in Progress</span>
              </div>
            </div>

            <div class="group relative overflow-hidden p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 cursor-not-allowed">
              <div class="mr-4 w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-400">API Quickstart</h3>
                <p class="text-gray-500 text-sm">Get started with our API integration</p>
              </div>
              <div class="ml-auto">
                <span class="text-gray-500 text-sm">Work in Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ title: 'Documentation' })
useHead({
  meta: [
    {
      name: 'description',
      content: 'Browse documentation to learn how to use AI-Validator effectively.'
    }
  ]
})
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