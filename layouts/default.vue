<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 relative overflow-hidden">
    <!-- Enhanced background effects with subtle colors -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div class="fixed inset-0">
        <!-- Lighter, more colorful blobs for light and dark modes -->
        <div class="absolute top-[-20%] right-[-5%] w-[60%] h-[60%] bg-gradient-to-br from-accent-tertiary/5 to-accent-primary/5 dark:from-accent-tertiary/10 dark:to-accent-primary/10 rounded-full blur-[120px] animate-slow-pulse"></div>
        <div class="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-tr from-accent-quaternary/5 to-accent-secondary/5 dark:from-accent-quaternary/10 dark:to-accent-secondary/10 rounded-full blur-[100px] animate-slow-pulse animation-delay-2000"></div>
        <div class="absolute top-[30%] right-[40%] w-[40%] h-[40%] bg-gradient-to-r from-brand-light/5 to-accent-secondary/5 dark:from-brand-light/10 dark:to-accent-secondary/10 rounded-full blur-[80px] animate-slow-pulse animation-delay-4000"></div>
        <div class="absolute bottom-[40%] right-[10%] w-[30%] h-[30%] bg-gradient-to-l from-accent-primary/5 to-accent-tertiary/5 dark:from-accent-primary/10 dark:to-accent-tertiary/10 rounded-full blur-[70px] animate-slow-pulse animation-delay-3000"></div>
        
        <!-- Colorful floating particles for dark mode only -->
        <div class="absolute inset-0 opacity-0 dark:opacity-30">
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

    <!-- Header/Navbar - with glass morphism and premium accents -->
    <header class="sticky top-0 z-50 glass-dark dark:glass-dark bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/60 dark:border-gray-800/60 shadow-sm">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-medium text-white bg-clip-text bg-gradient-to-r from-brand-DEFAULT via-accent-primary to-accent-secondary flex items-center gap-3 hover:scale-105 transition-transform rainbow-shadow">
            <div class="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-DEFAULT to-accent-primary flex items-center justify-center text-white shadow-md shadow-brand-DEFAULT/20 dark:shadow-brand-DEFAULT/30">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            AI-SV
          </NuxtLink>
          
          <nav class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-brand-DEFAULT dark:hover:text-white hover:scale-105 font-medium transition-all duration-300">Home</NuxtLink>
            <NuxtLink to="/validate" class="text-gray-700 dark:text-gray-300 hover:text-brand-DEFAULT dark:hover:text-white hover:scale-105 font-medium transition-all duration-300">Validate</NuxtLink>
            <NuxtLink to="/docs" class="text-gray-700 dark:text-gray-300 hover:text-brand-DEFAULT dark:hover:text-white hover:scale-105 font-medium transition-all duration-300">Documentation</NuxtLink>
            <NuxtLink to="/about" class="text-gray-700 dark:text-gray-300 hover:text-brand-DEFAULT dark:hover:text-white hover:scale-105 font-medium transition-all duration-300">About</NuxtLink>
            <NuxtLink 
              to="/uploads" 
              class="bg-gradient-to-r from-brand-DEFAULT via-accent-primary to-accent-secondary text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md shadow-brand-DEFAULT/20 dark:shadow-brand-DEFAULT/40 hover:shadow-lg hover:shadow-brand-DEFAULT/30 dark:hover:shadow-brand-DEFAULT/50 hover:scale-105 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 border border-white/10 dark:border-white/10"
            >
              My Documents
            </NuxtLink>
            
            <!-- GitHub link with premium icon styling --> 
            <a 
              href="https://github.com/Nicetyone/ai-validator" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center justify-center h-10 w-10 rounded-full text-gray-700 dark:text-gray-300 hover:text-brand-DEFAULT dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-300"
              aria-label="GitHub Repository"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <!-- Dark mode toggle with premium styling -->
          </nav>
          
          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            type="button" 
            class="md:hidden flex items-center justify-center h-10 w-10 rounded-full text-gray-700 dark:text-gray-300 hover:text-brand-DEFAULT dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-300"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Main menu"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Heroicon name: outline/menu if menu is closed -->
            <svg 
              v-if="!mobileMenuOpen" 
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Heroicon name: outline/x if menu is open -->
            <svg 
              v-else 
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div 
        v-if="mobileMenuOpen" 
        id="mobile-menu" 
        class="md:hidden"
      >
        <div class="px-4 py-3 space-y-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
          <NuxtLink 
            to="/" 
            class="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-DEFAULT dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-300"
            @click="mobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/validate" 
            class="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-DEFAULT dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-300"
            @click="mobileMenuOpen = false"
          >
            Validate
          </NuxtLink>
          <NuxtLink 
            to="/docs" 
            class="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-DEFAULT dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-300"
            @click="mobileMenuOpen = false"
          >
            Documentation
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-brand-DEFAULT dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-300"
            @click="mobileMenuOpen = false"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/uploads" 
            class="block px-3 py-2 rounded-lg text-base font-medium bg-gradient-to-r from-brand-DEFAULT to-accent-primary text-white shadow-md shadow-brand-DEFAULT/20 dark:shadow-brand-DEFAULT/40"
            @click="mobileMenuOpen = false"
          >
            My Documents
          </NuxtLink>
          <div class="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-800">
            <a 
              href="https://github.com/Nicetyone/ai-validator" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content area -->
    <main class="flex-grow relative z-10">
      <slot />
    </main>

    <!-- Footer with gradient accent -->
    <footer class="relative z-10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-t border-gray-200/60 dark:border-gray-800/60">
      <div class="container mx-auto px-6 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-DEFAULT via-accent-primary to-accent-secondary mb-4">AI-Validator</div>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Detect AI-generated content with our advanced validation tools and secure your credibility.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-500 hover:text-brand-DEFAULT dark:text-gray-400 dark:hover:text-brand-light transition-colors">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com/Nicetyone/ai-validator" class="text-gray-500 hover:text-brand-DEFAULT dark:text-gray-400 dark:hover:text-brand-light transition-colors">
                <span class="sr-only">GitHub</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.117-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/docs" class="text-gray-600 hover:text-brand-DEFAULT dark:text-gray-400 dark:hover:text-brand-light transition-colors">
                  Documentation
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="text-gray-600 hover:text-brand-DEFAULT dark:text-gray-400 dark:hover:text-brand-light transition-colors">
                  About
                </NuxtLink>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-brand-DEFAULT dark:text-gray-400 dark:hover:text-brand-light transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="text-gray-600 hover:text-brand-DEFAULT dark:text-gray-400 dark:hover:text-brand-light transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-600 hover:text-brand-DEFAULT dark:text-gray-400 dark:hover:text-brand-light transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            &copy; {{ new Date().getFullYear() }} AI-Validator. All rights reserved.
          </p>
          <div class="mt-4 md:mt-0 flex items-center">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-brand-DEFAULT/10 to-accent-primary/10 text-brand-DEFAULT dark:text-brand-light">
              <span class="h-2 w-2 rounded-full bg-green-400 mr-1.5 animate-pulse"></span>
              Service Status: Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.animate-slow-pulse {
  animation: slow-pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-slow-float {
  animation: slow-float 12s ease-in-out infinite;
}

.rainbow-shadow {
  animation: rainbow-shadow 3s linear infinite;
  text-shadow: 
    2px 2px 4px rgba(255, 0, 0, 0.3),
    -2px -2px 4px rgba(0, 255, 0, 0.3),
    2px -2px 4px rgba(0, 0, 255, 0.3),
    -2px 2px 4px rgba(255, 255, 0, 0.3);
}

@keyframes rainbow-shadow {
  0% {
    text-shadow: 
      2px 2px 4px rgba(255, 0, 0, 0.3),
      -2px -2px 4px rgba(0, 255, 0, 0.3),
      2px -2px 4px rgba(0, 0, 255, 0.3),
      -2px 2px 4px rgba(255, 255, 0, 0.3);
  }
  25% {
    text-shadow: 
      -2px 2px 4px rgba(255, 0, 0, 0.3),
      2px 2px 4px rgba(0, 255, 0, 0.3),
      -2px -2px 4px rgba(0, 0, 255, 0.3),
      2px -2px 4px rgba(255, 255, 0, 0.3);
  }
  50% {
    text-shadow: 
      -2px -2px 4px rgba(255, 0, 0, 0.3),
      -2px 2px 4px rgba(0, 255, 0, 0.3),
      2px 2px 4px rgba(0, 0, 255, 0.3),
      2px -2px 4px rgba(255, 255, 0, 0.3);
  }
  75% {
    text-shadow: 
      2px -2px 4px rgba(255, 0, 0, 0.3),
      -2px -2px 4px rgba(0, 255, 0, 0.3),
      -2px 2px 4px rgba(0, 0, 255, 0.3),
      2px 2px 4px rgba(255, 255, 0, 0.3);
  }
  100% {
    text-shadow: 
      2px 2px 4px rgba(255, 0, 0, 0.3),
      -2px -2px 4px rgba(0, 255, 0, 0.3),
      2px -2px 4px rgba(0, 0, 255, 0.3),
      -2px 2px 4px rgba(255, 255, 0, 0.3);
  }
}

@keyframes slow-pulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(0.95);
  }
}

@keyframes slow-float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}
</style> 