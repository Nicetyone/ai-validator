<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Validate Your PDF Documents</h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Detect AI-generated content with our advanced AI-Validator. Get certification for your authentic work.
        </p>
        <NuxtLink 
          to="/dashboard" 
          class="bg-white dark:bg-gray-800 text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
        >
          Try It Now
        </NuxtLink>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl dark:text-gray-300 font-bold text-center mb-12">How It Works</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <Transition name="fade-in" appear>
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
              <div class="text-blue-600 text-4xl font-bold mb-4">1</div>
              <h3 class="text-xl font-semibold mb-3">Upload Your Document</h3>
              <p class="text-gray-600">Upload your PDF document to our secure platform for analysis.</p>
            </div>
          </Transition>

          <Transition name="fade-in" appear>
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
              <div class="text-blue-600 text-4xl font-bold mb-4">2</div>
              <h3 class="text-xl font-semibold mb-3">AI Analysis</h3>
              <p class="text-gray-600">Our advanced algorithm analyzes your document for AI-generated content.</p>
            </div>
          </Transition>

          <Transition name="fade-in" appear>
            <div class="bg-gray-50 p-6 rounded-lg shadow-md">
              <div class="text-blue-600 text-4xl font-bold mb-4">3</div>
              <h3 class="text-xl font-semibold mb-3">Get Your Certificate</h3>
              <p class="text-gray-600">Receive a detailed report and certificate of creation for your document.</p>
            </div>
          </Transition>
        </div>
      </div>
    </section>

    <!-- Classification Levels -->
    <section class="py-16 bg-gray-100 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">AI Detection Levels</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-green-500">
            <h3 class="text-xl font-semibold mb-3 text-green-600">Level 1: Clean</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">No AI detected. The document appears to be entirely human-created.</p>
            <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-block">Fully Authentic</div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-yellow-500">
            <h3 class="text-xl font-semibold mb-3 text-yellow-600">Level 2: AI-Supported</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">Document shows signs of AI assistance, but with significant human input.</p>
            <div class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm inline-block">Partially AI-Generated</div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-t-4 border-red-500">
            <h3 class="text-xl font-semibold mb-3 text-red-600">Level 3: AI-Generated</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">Document appears to be primarily AI-generated with minimal human editing.</p>
            <div class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm inline-block">AI Ripoff</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-blue-600 text-white text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-6">Ready to Validate Your Work?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Get started today and prove the authenticity of your documents.
        </p>
        <NuxtLink 
          to="/dashboard" 
          class="bg-white dark:bg-gray-800 text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
        >
          Go to Dashboard
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home page functionality
</script> 