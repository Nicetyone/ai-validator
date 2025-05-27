<template>
  <div>
    <!-- Hero Section with enhanced visual effects -->
    <section class="relative overflow-hidden py-28 min-h-[80vh] flex items-center">
      <!-- Vibrant animated background -->
      <div class="absolute inset-0 bg-gray-950 z-0">
        <div class="absolute inset-0">
          <!-- Colorful background blobs -->
          <div class="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[120px] animate-slow-float"></div>
          <div class="absolute top-[20%] right-[-20%] w-[70%] h-[70%] bg-gradient-to-tr from-green-500/10 to-teal-500/10 rounded-full blur-[120px] animate-slow-float animation-delay-2000"></div>
          <div class="absolute bottom-[-30%] left-[20%] w-[60%] h-[60%] bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-[100px] animate-slow-float animation-delay-4000"></div>
          <div class="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-l from-amber-500/10 to-orange-500/10 rounded-full blur-[90px] animate-slow-float animation-delay-3000"></div>
          
          <!-- Floating particles -->
          <div class="absolute inset-0 opacity-30">
            <div class="firefly"></div>
            <div class="firefly animation-delay-1000"></div>
            <div class="firefly animation-delay-2000"></div>
            <div class="firefly animation-delay-3000"></div>
            <div class="firefly animation-delay-4000"></div>
            <div class="firefly animation-delay-5000"></div>
            <div class="firefly animation-delay-6000"></div>
            <div class="firefly animation-delay-7000"></div>
          </div>
        </div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <Transition name="slide-up" appear>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-medium mb-6 text-white leading-tight tracking-tight">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Validate</span> Your PDF Documents
            </h1>
          </Transition>
          <Transition name="fade-in" appear>
            <p class="text-lg mb-10 text-gray-300 leading-relaxed">
              Detect AI-generated content with our advanced AI-Validator and secure your credibility.
            </p>
          </Transition>
          <Transition name="fade-in" appear>
            <div class="flex flex-wrap justify-center gap-3 mb-12">
              <div class="flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <div class="h-5 w-5 mr-2 text-blue-400 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>Secure Analysis</span>
              </div>
              <div class="flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <div class="h-5 w-5 mr-2 text-indigo-400 animate-pulse animation-delay-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>Instant Certification</span>
              </div>
              <div class="flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <div class="h-5 w-5 mr-2 text-purple-400 animate-pulse animation-delay-1000">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span>Fast Results</span>
              </div>
            </div>
          </Transition>
          <Transition name="zoom-in" appear>
            <NuxtLink
              to="/validate"
              class="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 group"
            >
              <span class="mr-2">Try It Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </Transition>
        </div>
      </div>
    </section>

    <!-- Features Section with colorful cards -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gray-950/50 backdrop-blur-sm z-0">
        <div class="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-[80px]"></div>
        <div class="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-green-500/5 to-teal-500/5 rounded-full blur-[80px]"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <div class="inline-block mb-3 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm text-sm text-gray-300 border border-white/10">
            Simple Process
          </div>
          <h2 class="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">How It Works</h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <Transition name="fade-up" appear>
            <div class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-blue-500/5 hover:to-blue-500/10 transition-all duration-500 border border-white/5 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/10">
              <div class="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xl font-medium mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">Upload Your Document</h3>
              <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Upload your PDF document to our secure platform for analysis. Our system ensures your data remains private and protected.</p>
            </div>
          </Transition>

          <Transition name="fade-up" appear>
            <div class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-indigo-500/5 hover:to-indigo-500/10 transition-all duration-500 border border-white/5 hover:border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/10 animation-delay-200">
              <div class="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xl font-medium mb-3 text-white group-hover:text-indigo-300 transition-colors duration-300">AI Analysis</h3>
              <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Our advanced algorithm analyzes your document for AI-generated content with precision and accuracy to detect patterns.</p>
            </div>
          </Transition>

          <Transition name="fade-up" appear>
            <div class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-purple-500/5 hover:to-purple-500/10 transition-all duration-500 border border-white/5 hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10 animation-delay-400">
              <div class="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xl font-medium mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">Get Your Certificate</h3>
              <p class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Receive a detailed report and certificate of creation for your document that you can share with confidence.</p>
            </div>
          </Transition>
        </div>
      </div>
    </section>

    <!-- Classification Levels with colorful cards -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gray-950 z-0">
        <div class="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>
        <div class="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <div class="inline-block mb-3 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm text-sm text-gray-300 border border-white/10">
            Classification System
          </div>
          <h2 class="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">AI Detection Levels</h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-green-500/5 hover:to-green-500/10 transition-all duration-500 border border-white/5 hover:border-green-500/20 border-l-green-500/30 border-l-4 hover:scale-105">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-green-500/10 mr-3 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xl font-medium text-white group-hover:text-green-300 transition-colors duration-300">Level 1: Clean</h3>
            </div>
            <p class="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">No AI detected. The document appears to be entirely human-created, ensuring maximum authenticity and originality.</p>
            <div class="text-green-400 text-sm font-medium">Fully Authentic</div>
          </div>
          
          <div class="group p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.05] backdrop-blur-sm rounded-2xl hover:from-yellow-500/5 hover:to-yellow-500/10 transition-all duration-500 border border-white/5 hover:border-yellow-500/20 border-l-yellow-500/30 border-l-4 hover:scale-105">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-yellow-500/10 mr-3 group-hover:bg-yellow-500/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xl font-medium text-white group-hover:text-yellow-300 transition-colors duration-300">Level 2: AI-Supported</h3>
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
              <h3 class="text-xl font-medium text-white group-hover:text-red-300 transition-colors duration-300">Level 3: AI-Generated</h3>
            </div>
            <p class="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">Document appears to be primarily AI-generated with minimal human editing, showing clear patterns of artificial creation.</p>
            <div class="text-red-400 text-sm font-medium">AI-Generated</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action with colorful gradient button -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gray-950 z-0">
        <div class="absolute inset-0">
          <div class="absolute top-[-30%] right-[-20%] w-[60%] h-[60%] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-[100px] animate-slow-float"></div>
          <div class="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-full blur-[80px] animate-slow-float animation-delay-3000"></div>
        </div>
      </div>
      
      <div class="container mx-auto px-6 text-center relative z-10">
        <div class="max-w-2xl mx-auto">
          <Transition name="slide-up" appear>
            <h2 class="text-3xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Ready to Validate Your Work?</h2>
          </Transition>
          <Transition name="fade-in" appear>
            <p class="text-lg mb-10 text-gray-300">
              Get started today and prove the authenticity of your documents with our AI detection technology.
            </p>
          </Transition>
          <Transition name="zoom-in" appear>
            <NuxtLink
              to="/uploads"
              class="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 group"
            >
              <span class="mr-2">Go to Dashboard</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </Transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ title: 'Home' })
useHead({
  meta: [
    {
      name: 'description',
      content: 'Detect AI-generated content in your PDF documents and get certification.'
    }
  ]
})
</script>

<style>
.animate-slow-float {
  animation: slow-float 10s ease-in-out infinite;
}
.animation-delay-200 {
  animation-delay: 0.2s;
}
.animation-delay-400 {
  animation-delay: 0.4s;
}
.animation-delay-500 {
  animation-delay: 0.5s;
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
.animation-delay-7000 {
  animation-delay: 7s;
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

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-up-enter-active {
  animation: fade-up 0.8s ease-out;
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