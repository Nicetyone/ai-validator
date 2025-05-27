<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20">
      <div class="absolute inset-0 bg-gray-950 z-0">
        <div class="absolute inset-0">
          <!-- Colorful background blobs -->
          <div class="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[120px] animate-slow-float"></div>
          <div class="absolute top-[20%] right-[-20%] w-[70%] h-[70%] bg-gradient-to-tr from-green-500/10 to-teal-500/10 rounded-full blur-[120px] animate-slow-float animation-delay-2000"></div>
          <div class="absolute bottom-[-30%] left-[20%] w-[60%] h-[60%] bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-[100px] animate-slow-float animation-delay-4000"></div>
          
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
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl font-medium mb-6 text-white leading-tight">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">AI Usage Guide</span>
          </h1>
          <p class="text-lg text-gray-300 mb-8">
            Learn how to use AI tools ethically and effectively in your work
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Guidelines Section -->
        <div class="bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/5">
          <h2 class="text-2xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Ethical Guidelines</h2>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-white mb-2">Transparency</h3>
                <p class="text-gray-400">Always disclose when AI tools have been used in your work. This includes both direct AI generation and AI-assisted editing.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-white mb-2">Fact Checking</h3>
                <p class="text-gray-400">Verify all AI-generated content for accuracy. AI tools can sometimes produce incorrect or misleading information.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-white mb-2">Originality</h3>
                <p class="text-gray-400">Use AI as a tool to enhance your work, not to replace your own thinking and creativity. Maintain your unique voice and perspective.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Best Practices -->
        <div class="bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/5">
          <h2 class="text-2xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Best Practices</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
              <h3 class="text-lg font-medium text-white mb-3">Writing Process</h3>
              <ul class="space-y-2 text-gray-400">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-blue-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Use AI for brainstorming and initial drafts</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-blue-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Edit and refine AI-generated content</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-blue-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Add your personal insights and analysis</span>
                </li>
              </ul>
            </div>

            <div class="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
              <h3 class="text-lg font-medium text-white mb-3">Quality Control</h3>
              <ul class="space-y-2 text-gray-400">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-indigo-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Check for factual accuracy</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-indigo-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Verify citations and references</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-indigo-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Review for bias and tone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Disclosure Templates -->
        <div class="bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/5">
          <h2 class="text-2xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Disclosure Templates</h2>
          
          <div class="space-y-6">
            <div class="p-6 bg-white/5 rounded-xl">
              <h3 class="text-lg font-medium text-white mb-3">Academic Work</h3>
              <div class="bg-gray-900/50 p-4 rounded-lg">
                <p class="text-gray-300 font-mono text-sm">
                  "This work was created with the assistance of AI tools. The content was generated using [AI tool name] and has been reviewed, edited, and fact-checked by the author. All claims and arguments represent the author's own analysis and conclusions."
                </p>
              </div>
            </div>

            <div class="p-6 bg-white/5 rounded-xl">
              <h3 class="text-lg font-medium text-white mb-3">Professional Writing</h3>
              <div class="bg-gray-900/50 p-4 rounded-lg">
                <p class="text-gray-300 font-mono text-sm">
                  "This document was prepared using AI-assisted writing tools. The content has been carefully reviewed and modified to ensure accuracy and alignment with our standards. The final version represents our organization's official position."
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Next Steps -->
        <div class="text-center">
          <NuxtLink
            to="/validate"
            class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 group"
          >
            <span class="mr-2">Start Validating Your Work</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
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