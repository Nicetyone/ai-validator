<template>
  <div class="min-h-screen flex flex-col bg-gray-950 text-gray-100 relative overflow-hidden">
    <!-- Enhanced background effects with more colors and vibrancy -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div class="fixed inset-0">
        <!-- More colorful, brighter blobs -->
        <div class="absolute top-[-20%] right-[-5%] w-[60%] h-[60%] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[120px] animate-slow-pulse"></div>
        <div class="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-tr from-green-500/10 to-teal-500/10 rounded-full blur-[100px] animate-slow-pulse animation-delay-2000"></div>
        <div class="absolute top-[30%] right-[40%] w-[40%] h-[40%] bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-[80px] animate-slow-pulse animation-delay-4000"></div>
        <div class="absolute bottom-[40%] right-[10%] w-[30%] h-[30%] bg-gradient-to-l from-amber-500/10 to-orange-500/10 rounded-full blur-[70px] animate-slow-pulse animation-delay-3000"></div>
        
        <!-- Colorful floating particles -->
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

    <!-- Header/Navbar - with vibrant gradient accents -->
    <header class="sticky top-0 z-50 backdrop-blur-xl bg-gray-950/70 border-b border-gray-900/60">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center gap-3 hover:scale-105 transition-transform">
            <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            AI-Validator
          </NuxtLink>
          
          <nav class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/" class="text-gray-300 hover:text-white hover:scale-105 font-medium transition-all duration-300">Home</NuxtLink>
            <NuxtLink to="/validate" class="text-gray-300 hover:text-white hover:scale-105 font-medium transition-all duration-300">Validate</NuxtLink>
            <NuxtLink to="/docs" class="text-gray-300 hover:text-white hover:scale-105 font-medium transition-all duration-300">Documentation</NuxtLink>
            <NuxtLink to="/about" class="text-gray-300 hover:text-white hover:scale-105 font-medium transition-all duration-300">About</NuxtLink>
            <NuxtLink 
              to="/uploads" 
              class="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105"
            >
              My Documents
            </NuxtLink>
            <!-- GitHub link (desktop only) --> 
            <a 
              href="https://github.com/Nicetyone/ai-validator" 
              target="_blank" 
              rel="noopener" 
              class="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="GitHub repository" 
            > 
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"> 
                <path 
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.31.77-1.6-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.55 11.55 0 0 1 3-.4 11.55 11.55 0 0 1 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" 
                /> 
              </svg> 
            </a>
          </nav>
          
          <!-- Mobile menu button - with animation -->
          <button class="md:hidden text-gray-300 hover:text-white focus:outline-none hover:scale-110 transition-transform" @click="mobileMenuOpen = !mobileMenuOpen">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Mobile menu - with improved animations -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-3 space-y-1 animate-fade-in">
          <nav class="flex flex-col space-y-4">
            <NuxtLink to="/" class="text-gray-300 hover:text-white hover:translate-x-2 font-medium py-2 transition-all duration-300" @click="mobileMenuOpen = false">Home</NuxtLink>
            <NuxtLink to="/validate" class="text-gray-300 hover:text-white hover:translate-x-2 font-medium py-2 transition-all duration-300" @click="mobileMenuOpen = false">Validate</NuxtLink>
            <NuxtLink to="/docs" class="text-gray-300 hover:text-white hover:translate-x-2 font-medium py-2 transition-all duration-300" @click="mobileMenuOpen = false">Documentation</NuxtLink>
            <NuxtLink to="/about" class="text-gray-300 hover:text-white hover:translate-x-2 font-medium py-2 transition-all duration-300" @click="mobileMenuOpen = false">About</NuxtLink>
            <NuxtLink 
              to="/uploads" 
              class="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 inline-block"
              @click="mobileMenuOpen = false"
            >
              My Documents
            </NuxtLink>
            <div class="flex justify-start items-center pt-2">
              <a 
                href="https://github.com/Nicetyone/ai-validator" 
                target="_blank" 
                rel="noopener" 
                class="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="GitHub repository" 
              > 
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"> 
                  <path 
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.31.77-1.6-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.55 11.55 0 0 1 3-.4 11.55 11.55 0 0 1 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" 
                  /> 
                </svg> 
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow relative z-10">
      <slot />
    </main>

    <!-- Footer - with colorful gradient accents -->
    <footer class="relative z-10 bg-gray-950 text-gray-300 py-12 border-t border-gray-900/60">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 class="text-base font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">AI-Validator</h3>
            <p class="text-gray-400 text-sm">
              Detect AI-generated content with confidence. Our platform helps you validate PDF documents for AI involvement.
            </p>
          </div>
          
          <div>
            <h3 class="text-base font-medium mb-4 text-white">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="text-gray-400 hover:text-white hover:translate-x-1 text-sm transition-all duration-300 inline-block">Home</NuxtLink></li>
              <li><NuxtLink to="/validate" class="text-gray-400 hover:text-white hover:translate-x-1 text-sm transition-all duration-300 inline-block">Validate Document</NuxtLink></li>
              <li><NuxtLink to="/docs" class="text-gray-400 hover:text-white hover:translate-x-1 text-sm transition-all duration-300 inline-block">Documentation</NuxtLink></li>
              <li><NuxtLink to="/about" class="text-gray-400 hover:text-white hover:translate-x-1 text-sm transition-all duration-300 inline-block">About Us</NuxtLink></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-base font-medium mb-4 text-white">Resources</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/docs/ai-usage" class="text-gray-400 hover:text-white hover:translate-x-1 text-sm transition-all duration-300 inline-block">AI Usage Guide</NuxtLink></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-base font-medium mb-4 text-white">Connect</h3>
            <div class="flex space-x-4">
              <a 
                href="https://github.com/Nicetyone/ai-validator" 
                target="_blank" 
                rel="noopener" 
                class="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="GitHub repository" 
              > 
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"> 
                  <path 
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.31.77-1.6-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.55 11.55 0 0 1 3-.4 11.55 11.55 0 0 1 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" 
                  /> 
                </svg> 
              </a>
            </div>
          </div>
        </div>
        
        <div class="mt-10 pt-6 border-t border-gray-800/50 text-center">
          <p class="text-sm text-gray-400">© {{ new Date().getFullYear() }} AI-Validator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false);
</script>

<style>
.animate-slow-pulse {
  animation: slow-pulse 8s ease-in-out infinite;
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

@keyframes slow-pulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
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
  animation: fade-in 0.3s ease-out;
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