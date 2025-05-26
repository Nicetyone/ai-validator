<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header/Navbar -->
    <header class="bg-white dark:bg-gray-900 dark:text-gray-200 shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            AI-Validator
          </NuxtLink>
          
          <nav class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Home</NuxtLink>
            <NuxtLink to="/validate" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Validate</NuxtLink>
            <NuxtLink to="/docs" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">Documentation</NuxtLink>
            <NuxtLink to="/about" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium">About</NuxtLink>
            <NuxtLink 
              to="/uploads" 
              class="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
            >
              My Documents
            </NuxtLink>
            <!-- GitHub link (desktop only) --> 
            <a 
              href="https://github.com/Nicetyone/ai-validator" 
              target="_blank" 
              rel="noopener" 
              class="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition"
              aria-label="GitHub repository" 
            > 
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"> 
                <path 
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.31.77-1.6-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.55 11.55 0 0 1 3-.4 11.55 11.55 0 0 1 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" 
                /> 
              </svg> 
            </a>
            <DarkToggle />
          </nav>
          
          <!-- Mobile menu button -->
          <button class="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-600 focus:outline-none" @click="mobileMenuOpen = !mobileMenuOpen">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-3">
          <nav class="flex flex-col space-y-3">
            <NuxtLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium py-2" @click="mobileMenuOpen = false">Home</NuxtLink>
            <NuxtLink to="/validate" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium py-2" @click="mobileMenuOpen = false">Validate</NuxtLink>
            <NuxtLink to="/docs" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium py-2" @click="mobileMenuOpen = false">Documentation</NuxtLink>
            <NuxtLink to="/about" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium py-2" @click="mobileMenuOpen = false">About</NuxtLink>
            <NuxtLink 
              to="/uploads" 
              class="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300 inline-block w-full text-center"
              @click="mobileMenuOpen = false"
            >
              My Documents
            </NuxtLink>
            <DarkToggle class="mt-2" />
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 py-8 mt-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">AI-Validator</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
              Detect AI-generated content with confidence. Our platform helps you validate PDF documents for AI involvement.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">Home</NuxtLink></li>
              <li><NuxtLink to="/validate" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">Validate Document</NuxtLink></li>
              <li><NuxtLink to="/docs" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">Documentation</NuxtLink></li>
              <li><NuxtLink to="/about" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">About Us</NuxtLink></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/docs/ai-usage" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">AI Usage Guide</NuxtLink></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Connect</h3>
            <div class="flex space-x-4">
              <a 
                href="https://github.com/Nicetyone/ai-validator" 
                target="_blank" 
                rel="noopener" 
                class="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                aria-label="GitHub repository" 
              > 
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"> 
                  <path 
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.31.77-1.6-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.55 11.55 0 0 1 3-.4 11.55 11.55 0 0 1 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" 
                  /> 
                </svg> 
              </a>
            </div>
          </div>
        </div>
        
        <div class="mt-8 pt-6 border-t border-gray-200 text-center">
          <p class="text-sm text-gray-600 dark:text-gray-400">© {{ new Date().getFullYear() }} AI-Validator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import DarkToggle from '~/components/DarkToggle.vue'
const mobileMenuOpen = ref(false);
</script> 