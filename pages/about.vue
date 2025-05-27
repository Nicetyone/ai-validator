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
              <span class="text-sm font-medium text-white">About Us</span>
            </div>
          </Transition>
          <Transition name="slide-up" appear>
            <h1 class="text-5xl font-bold mb-6 text-white leading-tight">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">About</span> AI-Validator
            </h1>
          </Transition>
          <Transition name="fade-in" appear>
            <p class="text-xl max-w-2xl mx-auto text-gray-200 mb-8">
              Empowering academic and professional integrity through advanced AI detection technology
            </p>
          </Transition>
        </div>
      </section>

      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <!-- Mission Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02]">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <div class="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                At AI-Validator, we're committed to maintaining the integrity of academic and professional work in an era where AI-generated content is becoming increasingly prevalent and sophisticated.
              </p>
              <p>
                Our platform provides a reliable way to verify the authenticity of documents, helping institutions, businesses, and individuals distinguish between human-created content and that produced by artificial intelligence.
              </p>
              <div class="pt-4">
                <a 
                  href="https://github.com/Nicetyone/ai-validator" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-DEFAULT to-accent-primary text-white font-medium hover:shadow-lg transition-all duration-300"
                >
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02]">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              How It Works
            </h2>
            <div class="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Our advanced algorithms analyze PDF documents to detect patterns and characteristics commonly found in AI-generated text. The system examines multiple factors including:
              </p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-brand-DEFAULT mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Language patterns and variability
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-brand-DEFAULT mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Structural consistency
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-brand-DEFAULT mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Contextual relevance
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-brand-DEFAULT mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Semantic coherence
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-brand-DEFAULT mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Stylistic markers
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Classification Levels -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Classification Levels
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02] border-t-4 border-green-500">
              <h3 class="text-xl font-semibold text-green-600 mb-4">Level 1: Clean</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Documents classified as "Clean" show no detectable signs of AI involvement. These documents are likely to be entirely human-created and demonstrate natural language patterns, inconsistencies, and stylistic elements typical of human writing.
              </p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02] border-t-4 border-yellow-500">
              <h3 class="text-xl font-semibold text-yellow-600 mb-4">Level 2: AI-Supported</h3>
              <p class="text-gray-600 dark:text-gray-300">
                "AI-Supported" documents show evidence of AI assistance but also substantial human input. This might include documents where AI was used for research, outlining, or editing, but significant human creativity and effort are still evident.
              </p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02] border-t-4 border-red-500">
              <h3 class="text-xl font-semibold text-red-600 mb-4">Level 3: AI-Generated</h3>
              <p class="text-gray-600 dark:text-gray-300">
                Documents classified as "AI-Generated" show strong indicators of being primarily created by AI with minimal human editing. These typically exhibit patterns, structures, and language characteristics common to large language models.
              </p>
            </div>
          </div>
        </div>

        <!-- Privacy Section -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-[1.02]">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy & Security
          </h2>
          <div class="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              We take your privacy seriously. All uploaded documents are processed securely, and we do not store the content of your documents beyond the analysis period. Your certificates and results are available to you but are never shared with third parties without your explicit permission.
            </p>
            <p>
              For more information about how we handle your data, please review our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </PageTransition>
</template>

<script setup>
definePageMeta({ title: 'About' })
useHead({
  meta: [
    {
      name: 'description',
      content: 'Learn more about the mission and operation of the AI-Validator project.'
    }
  ]
})
</script> 