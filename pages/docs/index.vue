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
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Documentation</span>
          </h1>
          <p class="text-lg text-gray-300 mb-8">
            Learn how to use AI-Validator effectively and understand our AI detection technology
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-xl mx-auto">
            <div class="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                class="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-sm"
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
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Quick Links -->
        <div class="grid md:grid-cols-2 gap-6 mb-16">
          <NuxtLink to="/docs/ai-usage" class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-blue-500/5 hover:to-blue-500/10 transition-all duration-500 border border-white/5 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/10">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-400 mr-4 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-medium text-white group-hover:text-blue-300 transition-colors duration-300">AI Usage Guide</h3>
                <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Learn about ethical AI usage and best practices</p>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/docs/validation" class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-indigo-500/5 hover:to-indigo-500/10 transition-all duration-500 border border-white/5 hover:border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/10">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-400 mr-4 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-medium text-white group-hover:text-indigo-300 transition-colors duration-300">Validation Process</h3>
                <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Understand how our AI detection works</p>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/docs/certificates" class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-purple-500/5 hover:to-purple-500/10 transition-all duration-500 border border-white/5 hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-500/10 text-purple-400 mr-4 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-medium text-white group-hover:text-purple-300 transition-colors duration-300">Certificates</h3>
                <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Learn about our verification certificates</p>
              </div>
            </div>
          </NuxtLink>

          <NuxtLink to="/docs/api" class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-pink-500/5 hover:to-pink-500/10 transition-all duration-500 border border-white/5 hover:border-pink-500/20 hover:shadow-lg hover:shadow-pink-500/10">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-pink-500/10 text-pink-400 mr-4 group-hover:bg-pink-500/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-medium text-white group-hover:text-pink-300 transition-colors duration-300">API Reference</h3>
                <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Integrate AI-Validator into your applications</p>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Getting Started -->
        <div class="bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/5">
          <h2 class="text-2xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Getting Started</h2>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-medium">1</div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-white mb-2">Create an Account</h3>
                <p class="text-gray-400">While AI-Validator can be used without an account, creating one allows you to save your validation history and access additional features.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-medium">2</div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-white mb-2">Upload a Document</h3>
                <p class="text-gray-400">Go to the <NuxtLink to="/validate" class="text-blue-400 hover:text-blue-300 transition-colors">Validate</NuxtLink> page and upload your PDF document for analysis.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-medium">3</div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-white mb-2">Review Results</h3>
                <p class="text-gray-400">Once processing is complete, review the detailed report to understand the AI detection findings and get your certificate.</p>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <NuxtLink
              to="/validate"
              class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 group"
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
          <h2 class="text-2xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Popular Topics</h2>
          
          <div class="grid md:grid-cols-2 gap-4">
            <NuxtLink to="/docs/ai-usage/guidelines" class="group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
              <h3 class="text-lg font-medium text-white group-hover:text-blue-300 transition-colors duration-300">AI Usage Guidelines</h3>
              <p class="text-gray-400 text-sm">Best practices for using AI tools ethically</p>
            </NuxtLink>

            <NuxtLink to="/docs/validation/process" class="group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
              <h3 class="text-lg font-medium text-white group-hover:text-indigo-300 transition-colors duration-300">Validation Process</h3>
              <p class="text-gray-400 text-sm">How our AI detection technology works</p>
            </NuxtLink>

            <NuxtLink to="/docs/certificates/verification" class="group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
              <h3 class="text-lg font-medium text-white group-hover:text-purple-300 transition-colors duration-300">Certificate Verification</h3>
              <p class="text-gray-400 text-sm">Understanding and verifying certificates</p>
            </NuxtLink>

            <NuxtLink to="/docs/api/quickstart" class="group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
              <h3 class="text-lg font-medium text-white group-hover:text-pink-300 transition-colors duration-300">API Quickstart</h3>
              <p class="text-gray-400 text-sm">Get started with our API integration</p>
            </NuxtLink>
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