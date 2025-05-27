<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0">
          <!-- Colorful gradient overlays -->
          <div class="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[100px] animate-slow-float"></div>
          <div class="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-tr from-teal-400/20 to-emerald-400/20 rounded-full blur-[80px] animate-slow-float animation-delay-2000"></div>
          <div class="absolute top-[30%] left-[10%] w-[40%] h-[40%] bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-[60px] animate-slow-float animation-delay-3000"></div>
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            About AI-SV
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            Empowering academic integrity through advanced AI detection technology
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300">
            <h2 class="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Our Mission</h2>
            <p class="text-gray-600 mb-4">
              At AI-SV, we're committed to maintaining the integrity of academic and professional work in an era where AI-generated content is becoming increasingly prevalent and sophisticated.
            </p>
            <p class="text-gray-600">
              Our platform provides a reliable way to verify the authenticity of documents, helping institutions, businesses, and individuals distinguish between human-created content and that produced by artificial intelligence.
            </p>
          </div>

          <!-- How It Works Section -->
          <div class="bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300">
            <h2 class="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">How It Works</h2>
            <p class="text-gray-600 mb-6">
              Our advanced algorithms analyze PDF documents to detect patterns and characteristics commonly found in AI-generated text. The system examines multiple factors including:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-600">Language patterns and variability</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-600">Structural consistency</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 4.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V4.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-600">Contextual relevance</span>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-600">Semantic coherence</span>
              </div>
            </div>
          </div>

          <!-- Classification Levels Section -->
          <div class="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 class="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Classification Levels</h2>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4 p-4 rounded-xl bg-green-50 border border-green-100">
                <div class="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-green-700 mb-2">Level 1: Clean</h3>
                  <p class="text-green-600">
                    Documents classified as "Clean" show no detectable signs of AI involvement. These documents are likely to be entirely human-created and demonstrate natural language patterns, inconsistencies, and stylistic elements typical of human writing.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4 p-4 rounded-xl bg-yellow-50 border border-yellow-100">
                <div class="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-yellow-700 mb-2">Level 2: AI-Supported</h3>
                  <p class="text-yellow-600">
                    "AI-Supported" documents show evidence of AI assistance but also substantial human input. This might include documents where AI was used for research, outlining, or editing, but significant human creativity and effort are still evident.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4 p-4 rounded-xl bg-red-50 border border-red-100">
                <div class="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-red-700 mb-2">Level 3: AI-Generated</h3>
                  <p class="text-red-600">
                    Documents classified as "AI-Generated" show strong indicators of being primarily created by AI with minimal human editing. These typically exhibit patterns, structures, and language characteristics common to large language models.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Privacy Section -->
          <div class="bg-white rounded-2xl shadow-xl p-8">
            <h2 class="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Privacy & Security</h2>
            <p class="text-gray-600 mb-4">
              We take your privacy seriously. All uploaded documents are processed securely, and we do not store the content of your documents beyond the analysis period. Your certificates and results are available to you but are never shared with third parties without your explicit permission.
            </p>
            <div class="flex items-center space-x-2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
              <span>For more information about how we handle your data, please review our Privacy Policy.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ title: 'About' })
useHead({
  meta: [
    {
      name: 'description',
      content: 'Learn more about the mission and operation of AI-SV.'
    }
  ]
})
</script>

<style scoped>
.animate-slow-float {
  animation: slow-float 10s ease-in-out infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-3000 {
  animation-delay: 3s;
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
</style> 