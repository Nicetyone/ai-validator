<template>
  <div class="max-w-4xl mx-auto text-gray-800 dark:text-gray-300">
    <h1 class="text-3xl dark:text-gray-300 font-bold mb-8">About AI-Validator</h1>
    
    <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
      <h2 class="text-2xl dark:text-gray-300 font-semibold mb-4">Our Mission</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">
        At AI-Validator, we're committed to maintaining the integrity of academic and professional work in an era where AI-generated content is becoming increasingly prevalent and sophisticated.
      </p>
      <p class="text-gray-700 dark:text-gray-300 mb-4">
        Our platform provides a reliable way to verify the authenticity of documents, helping institutions, businesses, and individuals distinguish between human-created content and that produced by artificial intelligence.
      </p>
      <p class="text-gray-700 dark:text-gray-300">
        🔗 Curious about the code? Check out the project on 
        <a 
          href="https://github.com/Nicetyone/ai-validator" 
          target="_blank" 
          rel="noopener" 
          class="text-blue-600 underline" 
        > 
          GitHub 
        </a>. 
      </p>
    </div>
    
    <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
      <h2 class="text-2xl dark:text-gray-300 font-semibold mb-4">How It Works</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">
        Our advanced algorithms analyze PDF documents to detect patterns and characteristics commonly found in AI-generated text. The system examines multiple factors including:
      </p>
      <ul class="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
        <li class="mb-2">Language patterns and variability</li>
        <li class="mb-2">Structural consistency</li>
        <li class="mb-2">Contextual relevance</li>
        <li class="mb-2">Semantic coherence</li>
        <li class="mb-2">Stylistic markers</li>
      </ul>
      <p class="text-gray-700 dark:text-gray-300">
        After analysis, each document receives a classification along with a detailed report explaining the findings.
      </p>
    </div>
    
    <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
      <h2 class="text-2xl dark:text-gray-300 font-semibold mb-4">Classification Levels</h2>
      
      <div class="mb-6 border-l-4 border-green-500 pl-4 py-2">
        <h3 class="text-xl font-semibold text-green-600 mb-2">Level 1: Clean</h3>
        <p class="text-gray-700 dark:text-gray-300">
          Documents classified as "Clean" show no detectable signs of AI involvement. These documents are likely to be entirely human-created and demonstrate natural language patterns, inconsistencies, and stylistic elements typical of human writing.
        </p>
      </div>
      
      <div class="mb-6 border-l-4 border-yellow-500 pl-4 py-2">
        <h3 class="text-xl font-semibold text-yellow-600 mb-2">Level 2: AI-Supported</h3>
        <p class="text-gray-700 dark:text-gray-300">
          "AI-Supported" documents show evidence of AI assistance but also substantial human input. This might include documents where AI was used for research, outlining, or editing, but significant human creativity and effort are still evident.
        </p>
      </div>
      
      <div class="border-l-4 border-red-500 pl-4 py-2">
        <h3 class="text-xl font-semibold text-red-600 mb-2">Level 3: AI-Generated</h3>
        <p class="text-gray-700 dark:text-gray-300">
          Documents classified as "AI-Generated" show strong indicators of being primarily created by AI with minimal human editing. These typically exhibit patterns, structures, and language characteristics common to large language models.
        </p>
      </div>
    </div>
    
    <div class="bg-white dark:text-gray-300 dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Privacy & Security</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">
        We take your privacy seriously. All uploaded documents are processed securely, and we do not store the content of your documents beyond the analysis period. Your certificates and results are available to you but are never shared with third parties without your explicit permission.
      </p>
      <p class="text-gray-700 dark:text-gray-300">
        For more information about how we handle your data, please review our Privacy Policy.
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ title: 'About' })
useHead({
  meta: [
    {
      name: 'description',
      content: 'Learn more about the mission and operation of the AI-Validator project.'
    }
  ]
})
</script> 