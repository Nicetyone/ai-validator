<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-blue-600">AI-Validator</NuxtLink>
        <div class="flex items-center space-x-4">
          <button class="text-gray-700 hover:text-blue-600">
            <span class="sr-only">Notifications</span>
            <!-- Bell icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div class="relative">
            <button class="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <span>User Name</span>
              <img src="https://via.placeholder.com/32" alt="User avatar" class="w-8 h-8 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="flex-grow flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 text-white">
        <div class="p-4">
          <h2 class="text-xl font-semibold">Dashboard</h2>
        </div>
        <nav class="mt-4">
          <ul>
            <li>
              <NuxtLink to="/dashboard" class="block px-4 py-2 hover:bg-gray-700">
                Overview
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/dashboard/uploads" class="block px-4 py-2 hover:bg-gray-700">
                My Uploads
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/dashboard/certificates" class="block px-4 py-2 hover:bg-gray-700">
                Certificates
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/dashboard/settings" class="block px-4 py-2 hover:bg-gray-700">
                Settings
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-grow p-6 bg-gray-100">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
// Dashboard layout functionality
</script> 