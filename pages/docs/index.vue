<template>
  <div>
    <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold mb-4">Documentation</h1>
        <p class="text-xl max-w-3xl">
          Learn how to use AI-Validator and get the most out of AI tools in your work
        </p>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Introduction -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Documentation Overview</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            Welcome to the AI-Validator documentation. Here you'll find comprehensive guides and documentation to help you understand and use AI detection tools effectively. Browse through our documentation sections below to learn more.
          </p>
        </div>

        <!-- Documentation accordion -->
        <div class="grid grid-cols-1 gap-6 mb-12">
          <!-- AI-Usage Guide Panel -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition duration-300 cursor-pointer hover:shadow-lg"
            :class="{ 'ring-2 ring-blue-500': openItem === 1 }"
            @click="toggle(1)"
          >
            <h3 class="text-xl font-semibold mb-3 text-blue-600 flex items-center justify-between">
              AI Usage Guide
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform transition-transform"
                :class="openItem === 1 ? 'rotate-90' : ''"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <transition name="fade">
              <ul
                v-if="openItem === 1"
                class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2"
              >
                <li>Ethical guidelines &amp; transparency</li>
                <li>Disclosure templates for assignments</li>
                <li>Editing AI drafts vs. full rewrite</li>
                <li>Checking factual accuracy &amp; bias</li>
              </ul>
            </transition>
          </div>
          <!-- Validation Process Panel -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition duration-300 cursor-pointer hover:shadow-lg"
            :class="{ 'ring-2 ring-blue-500': openItem === 2 }"
            @click="toggle(2)"
          >
            <h3 class="text-xl font-semibold mb-3 text-blue-600 flex items-center justify-between">
              Validation Process
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform transition-transform"
                :class="openItem === 2 ? 'rotate-90' : ''"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <transition name="fade">
              <ul
                v-if="openItem === 2"
                class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2"
              >
                <li>PDF parsing &amp; text extraction</li>
                <li>AI‑generated text probability scoring</li>
                <li>Similarity / plagiarism check</li>
                <li>Fact‑checking &amp; citation validation</li>
                <li>Report + radar chart generation</li>
              </ul>
            </transition>
          </div>

          <!-- Certificates Panel -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition duration-300 cursor-pointer hover:shadow-lg"
            :class="{ 'ring-2 ring-blue-500': openItem === 3 }"
            @click="toggle(3)"
          >
            <h3 class="text-xl font-semibold mb-3 text-blue-600 flex items-center justify-between">
              Certificates
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform transition-transform"
                :class="openItem === 3 ? 'rotate-90' : ''"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </h3>
            <transition name="fade">
              <ul
                v-if="openItem === 3"
                class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2"
              >
                <li>Levels &amp; score thresholds explained</li>
                <li>Unique verification code &amp; QR</li>
                <li>PDF export &amp; share options</li>
                <li>Embedding certificates in LMS</li>
              </ul>
            </transition>
          </div>
        </div>

        <!-- Getting started -->
        <div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-8 mb-12">
          <h2 class="text-2xl font-bold mb-4">Getting Started</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            New to AI-Validator? Follow these quick steps to get started:
          </p>

          <ol class="space-y-4">
            <li class="flex">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">1</span>
              <div>
                <h3 class="font-semibold text-lg">Create an account (optional)</h3>
                <p class="text-gray-700 dark:text-gray-300">While AI-Validator can be used without an account, creating one allows you to save your validation history.</p>
              </div>
            </li>

            <li class="flex">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">2</span>
              <div>
                <h3 class="font-semibold text-lg">Upload a document</h3>
                <p class="text-gray-700 dark:text-gray-300">Go to the <NuxtLink to="/validate" class="text-blue-600 hover:underline">Validate</NuxtLink> page and upload your PDF document.</p>
              </div>
            </li>

            <li class="flex">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">3</span>
              <div>
                <h3 class="font-semibold text-lg">Review the results</h3>
                <p class="text-gray-700 dark:text-gray-300">Once processing is complete, review the detailed report to understand the AI detection findings.</p>
              </div>
            </li>

            <li class="flex">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">4</span>
              <div>
                <h3 class="font-semibold text-lg">Get your certificate</h3>
                <p class="text-gray-700 dark:text-gray-300">Download or share your certificate of authenticity to prove your document's AI detection status.</p>
              </div>
            </li>
          </ol>

          <div class="mt-6">
            <NuxtLink
              to="/validate"
              class="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 inline-block"
            >
              Start Validating Now
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openItem = ref<number | null>(null)

function toggle(index: number) {
  openItem.value = openItem.value === index ? null : index
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>