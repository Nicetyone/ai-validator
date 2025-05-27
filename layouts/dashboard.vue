<template>
  <div class="min-h-screen flex flex-col bg-gray-950 relative overflow-hidden">
    <!-- Enhanced background effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div class="fixed inset-0">
        <!-- Colorful gradient blobs -->
        <div class="absolute top-[-20%] right-[-5%] w-[60%] h-[60%] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[100px] animate-slow-pulse"></div>
        <div class="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-gradient-to-tr from-green-500/10 to-teal-500/10 rounded-full blur-[80px] animate-slow-pulse animation-delay-2000"></div>
        <div class="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-[70px] animate-slow-pulse animation-delay-4000"></div>
        <div class="absolute bottom-[20%] right-[20%] w-[25%] h-[25%] bg-gradient-to-l from-amber-500/10 to-orange-500/10 rounded-full blur-[60px] animate-slow-pulse animation-delay-3000"></div>
        
        <!-- Floating particles -->
        <div class="absolute inset-0 opacity-20">
          <div class="firefly"></div>
          <div class="firefly animation-delay-1000"></div>
          <div class="firefly animation-delay-2000"></div>
          <div class="firefly animation-delay-3000"></div>
          <div class="firefly animation-delay-4000"></div>
        </div>
      </div>
    </div>

    <!-- Header with gradient effects -->
    <header class="sticky top-0 z-50 backdrop-blur-xl bg-gray-950/70 border-b border-gray-900/60">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center gap-3 hover:scale-105 transition-transform">
          <div class="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          AI-Validator
        </NuxtLink>
        <div class="flex items-center space-x-6">
          <button class="relative text-gray-400 hover:text-white transition-colors hover:scale-110 transition-transform">
            <span class="sr-only">Notifications</span>
            <!-- Bell icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span class="absolute -top-1 -right-1 h-4 w-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-xs text-white shadow-md shadow-red-500/20">2</span>
          </button>
          <div class="relative">
            <button class="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group">
              <span class="font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">User Name</span>
              <div class="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                <img src="https://via.placeholder.com/32" alt="User avatar" class="w-full h-full rounded-full object-cover" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="flex-grow flex relative z-10">
      <!-- Sidebar with improved styling -->
      <aside class="w-64 bg-gray-900/50 backdrop-blur-lg border-r border-gray-800/50">
        <nav class="p-4">
          <div class="mb-8">
            <h2 class="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 px-4">Dashboard</h2>
            <ul class="space-y-1">
              <li>
                <NuxtLink to="/dashboard" class="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all group">
                  <div class="mr-3 text-gray-400 group-hover:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <span class="group-hover:translate-x-1 transition-transform duration-300">Overview</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/dashboard/uploads" class="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all group">
                  <div class="mr-3 text-gray-400 group-hover:text-indigo-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </div>
                  <span class="group-hover:translate-x-1 transition-transform duration-300">My Uploads</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/dashboard/certificates" class="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all group">
                  <div class="mr-3 text-gray-400 group-hover:text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <span class="group-hover:translate-x-1 transition-transform duration-300">Certificates</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/dashboard/settings" class="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:bg-white/5 hover:text-white transition-all group">
                  <div class="mr-3 text-gray-400 group-hover:text-pink-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span class="group-hover:translate-x-1 transition-transform duration-300">Settings</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <div class="mb-4">
            <h3 class="text-xs font-medium text-gray-500 uppercase tracking-wider px-4 mb-2">Recent Uploads</h3>
            <ul class="space-y-1">
              <li>
                <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors truncate group">
                  <span class="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2"></span>
                  <span class="group-hover:translate-x-1 transition-transform duration-300">Research_Paper.pdf</span>
                </a>
              </li>
              <li>
                <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors truncate group">
                  <span class="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mr-2"></span>
                  <span class="group-hover:translate-x-1 transition-transform duration-300">Assignment_2023.pdf</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <!-- Main Content with elegant glass effect -->
      <main class="flex-grow p-6 bg-gray-950/80 backdrop-blur-sm">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
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