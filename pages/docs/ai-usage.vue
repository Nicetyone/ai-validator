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
            <span class="text-sm font-medium text-white">Guidelines & Best Practices</span>
          </div>
          <h1 class="text-5xl font-bold mb-6 text-white leading-tight">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">AI Usage Guide</span>
          </h1>
          <p class="text-xl text-gray-200 mb-8">
            Learn how to use AI tools ethically and effectively in your work
          </p>
          
          <div class="flex justify-center space-x-4">
            <NuxtLink to="/docs" class="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-full border border-white/20 transition-all duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
              Back to Documentation
            </NuxtLink>
            <NuxtLink to="/validate" class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 flex items-center">
              <span>Start Validation</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Table of Contents -->
        <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 mb-16 border border-white/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
          <h2 class="text-2xl font-bold mb-6 text-white">Contents</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <a href="#ethical-guidelines" class="flex items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 group">
              <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mr-3 group-hover:bg-blue-500/20 transition-colors duration-300">
                <span class="text-blue-400 font-medium">01</span>
              </div>
              <span class="text-white group-hover:text-blue-300 transition-colors duration-300">Ethical Guidelines</span>
            </a>
            <a href="#best-practices" class="flex items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 group">
              <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mr-3 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <span class="text-indigo-400 font-medium">02</span>
              </div>
              <span class="text-white group-hover:text-indigo-300 transition-colors duration-300">Best Practices</span>
            </a>
            <a href="#disclosure-templates" class="flex items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 group">
              <div class="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mr-3 group-hover:bg-purple-500/20 transition-colors duration-300">
                <span class="text-purple-400 font-medium">03</span>
              </div>
              <span class="text-white group-hover:text-purple-300 transition-colors duration-300">Disclosure Templates</span>
            </a>
            <a href="#next-steps" class="flex items-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 group">
              <div class="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center mr-3 group-hover:bg-pink-500/20 transition-colors duration-300">
                <span class="text-pink-400 font-medium">04</span>
              </div>
              <span class="text-white group-hover:text-pink-300 transition-colors duration-300">Next Steps</span>
            </a>
          </div>
        </div>
        
        <!-- Guidelines Section -->
        <div id="ethical-guidelines" class="bg-gradient-to-br from-white/10 to-blue-500/5 backdrop-blur-xl rounded-3xl p-10 mb-16 border border-white/20 hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500">
          <div class="flex items-center mb-8">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mr-6 shadow-lg shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">Ethical Guidelines</h2>
          </div>
          
          <div class="space-y-8">
            <div class="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-all duration-300 border border-white/10 hover:border-blue-500/20">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div class="ml-6">
                  <h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">Transparency</h3>
                  <p class="text-gray-300 group-hover:text-white transition-colors duration-300">Always disclose when AI tools have been used in your work. This includes both direct AI generation and AI-assisted editing.</p>
                  <div class="mt-4 p-4 bg-blue-500/10 rounded-xl">
                    <div class="flex items-start">
                      <svg class="h-5 w-5 text-blue-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm text-blue-300">In academic contexts, transparency about AI tool usage may be required by institutional policies.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-all duration-300 border border-white/10 hover:border-indigo-500/20">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div class="ml-6">
                  <h3 class="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">Fact Checking</h3>
                  <p class="text-gray-300 group-hover:text-white transition-colors duration-300">Verify all AI-generated content for accuracy. AI tools can sometimes produce incorrect or misleading information.</p>
                  <div class="mt-4 p-4 bg-indigo-500/10 rounded-xl">
                    <div class="flex items-start">
                      <svg class="h-5 w-5 text-indigo-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm text-indigo-300">AI hallucinations can occur even with the most advanced models. Always cross-reference with reliable sources.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-all duration-300 border border-white/10 hover:border-purple-500/20">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div class="ml-6">
                  <h3 class="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">Originality</h3>
                  <p class="text-gray-300 group-hover:text-white transition-colors duration-300">Use AI as a tool to enhance your work, not to replace your own thinking and creativity. Maintain your unique voice and perspective.</p>
                  <div class="mt-4 p-4 bg-purple-500/10 rounded-xl">
                    <div class="flex items-start">
                      <svg class="h-5 w-5 text-purple-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm text-purple-300">AI tools work best when they enhance human creativity rather than replacing it entirely.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Best Practices -->
        <div id="best-practices" class="bg-gradient-to-br from-white/10 to-indigo-500/5 backdrop-blur-xl rounded-3xl p-10 mb-16 border border-white/20 hover:border-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500">
          <div class="flex items-center mb-8">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mr-6 shadow-lg shadow-indigo-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600">Best Practices</h2>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="group bg-white/5 hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-blue-600/10 p-8 rounded-2xl transition-all duration-500 border border-white/10 hover:border-blue-500/20">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Writing Process</h3>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-blue-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="group-hover:text-white transition-colors duration-300">Use AI for brainstorming and initial drafts</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-blue-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="group-hover:text-white transition-colors duration-300">Edit and refine AI-generated content</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-blue-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="group-hover:text-white transition-colors duration-300">Add your personal insights and analysis</span>
                </li>
              </ul>
              <div class="mt-6 p-4 bg-blue-500/10 rounded-xl">
                <p class="text-sm text-blue-300">"Let AI handle the first draft, but ensure your voice shines through in the final version."</p>
              </div>
            </div>

            <div class="group bg-white/5 hover:bg-gradient-to-br hover:from-indigo-500/5 hover:to-indigo-600/10 p-8 rounded-2xl transition-all duration-500 border border-white/10 hover:border-indigo-500/20">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 group-hover:scale-110 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">Quality Control</h3>
              <ul class="space-y-3 text-gray-300">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-indigo-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="group-hover:text-white transition-colors duration-300">Check for factual accuracy</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-indigo-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="group-hover:text-white transition-colors duration-300">Verify citations and references</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-indigo-400 mr-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="group-hover:text-white transition-colors duration-300">Review for bias and tone</span>
                </li>
              </ul>
              <div class="mt-6 p-4 bg-indigo-500/10 rounded-xl">
                <p class="text-sm text-indigo-300">"Remember that AI models can confidently present incorrect information. Always verify facts from reliable sources."</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Disclosure Templates -->
        <div id="disclosure-templates" class="bg-gradient-to-br from-white/10 to-purple-500/5 backdrop-blur-xl rounded-3xl p-10 mb-16 border border-white/20 hover:border-purple-500/20 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
          <div class="flex items-center mb-8">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mr-6 shadow-lg shadow-purple-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">Disclosure Templates</h2>
          </div>
          
          <p class="text-gray-300 mb-8">Use these templates as starting points when disclosing AI usage in your work. Customize them to fit your specific context and the extent of AI assistance used.</p>
          
          <div class="space-y-8">
            <div class="group p-6 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-purple-600/10 rounded-2xl transition-all duration-500 border border-white/10 hover:border-purple-500/20">
              <h3 class="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Academic Work</h3>
              <div class="bg-gray-900/50 p-6 rounded-xl border border-white/5 group-hover:border-purple-500/10 transition-colors duration-300">
                <p class="text-gray-300 font-mono text-sm leading-relaxed">
                  "This work was created with the assistance of AI tools. The content was generated using [AI tool name] and has been reviewed, edited, and fact-checked by the author. All claims and arguments represent the author's own analysis and conclusions."
                </p>
              </div>
              <div class="mt-4 flex justify-end">
                <button class="flex items-center px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg text-purple-400 text-sm transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                  </svg>
                  Copy to clipboard
                </button>
              </div>
            </div>

            <div class="group p-6 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-purple-600/10 rounded-2xl transition-all duration-500 border border-white/10 hover:border-purple-500/20">
              <h3 class="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Professional Writing</h3>
              <div class="bg-gray-900/50 p-6 rounded-xl border border-white/5 group-hover:border-purple-500/10 transition-colors duration-300">
                <p class="text-gray-300 font-mono text-sm leading-relaxed">
                  "This document was prepared using AI-assisted writing tools. The content has been carefully reviewed and modified to ensure accuracy and alignment with our standards. The final version represents our organization's official position."
                </p>
              </div>
              <div class="mt-4 flex justify-end">
                <button class="flex items-center px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg text-purple-400 text-sm transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                  </svg>
                  Copy to clipboard
                </button>
              </div>
            </div>
            
            <div class="group p-6 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-purple-600/10 rounded-2xl transition-all duration-500 border border-white/10 hover:border-purple-500/20">
              <h3 class="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">Creative Writing</h3>
              <div class="bg-gray-900/50 p-6 rounded-xl border border-white/5 group-hover:border-purple-500/10 transition-colors duration-300">
                <p class="text-gray-300 font-mono text-sm leading-relaxed">
                  "This creative work was developed with the assistance of AI tools, which were used for [specific purpose: e.g., 'idea generation', 'dialogue assistance', etc.]. The narrative, characters, and artistic vision are my own original creation, with AI serving as a collaborative tool in the creative process."
                </p>
              </div>
              <div class="mt-4 flex justify-end">
                <button class="flex items-center px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg text-purple-400 text-sm transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                  </svg>
                  Copy to clipboard
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Next Steps -->
        <div id="next-steps" class="bg-gradient-to-br from-white/10 to-pink-500/5 backdrop-blur-xl rounded-3xl p-10 mb-16 border border-white/20 hover:border-pink-500/20 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500">
          <div class="flex items-center mb-8">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mr-6 shadow-lg shadow-pink-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600">Next Steps</h2>
          </div>
          
          <div class="bg-white/5 p-8 rounded-2xl mb-8 border border-white/10">
            <div class="flex items-start mb-6">
              <div class="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">Why Validate Your AI-Assisted Work?</h3>
                <p class="text-gray-300">While using AI tools is increasingly common, being transparent about their use is essential. Our validation service helps you demonstrate the authenticity of your work and build trust with your audience.</p>
              </div>
            </div>
            
            <div class="flex flex-col md:flex-row md:items-center md:justify-between bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-6 rounded-xl">
              <div class="mb-4 md:mb-0">
                <h4 class="text-lg font-medium text-white mb-1">Ready to validate your document?</h4>
                <p class="text-gray-300">Get started with our easy upload process.</p>
              </div>
              <NuxtLink to="/validate" class="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 flex items-center justify-center">
                <span>Start Validation</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </NuxtLink>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <NuxtLink to="/docs/validation" class="group relative overflow-hidden p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-gradient-to-br hover:from-indigo-500/5 hover:to-indigo-600/10 transition-all duration-500 border border-white/10 hover:border-indigo-500/20 flex items-center">
              <div class="mr-4 w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">Learn about our validation process</h3>
                <p class="text-gray-300 text-sm">Understanding how our AI detection technology works</p>
              </div>
              <div class="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 group-hover:text-indigo-400 transform group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </NuxtLink>
            
            <NuxtLink to="/docs/certificates" class="group relative overflow-hidden p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-purple-600/10 transition-all duration-500 border border-white/10 hover:border-purple-500/20 flex items-center">
              <div class="mr-4 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">Learn about our certificates</h3>
                <p class="text-gray-300 text-sm">How to use and verify our authenticity certificates</p>
              </div>
              <div class="ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 group-hover:text-purple-400 transform group-hover:translate-x-1 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ title: 'AI Usage Guide' })
useHead({
  meta: [
    {
      name: 'description',
      content: 'Learn about ethical AI usage and best practices for using AI tools in your work.'
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