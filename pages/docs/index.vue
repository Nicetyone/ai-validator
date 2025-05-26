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
          <p class="text-gray-700 mb-4">
            Welcome to the AI-Validator documentation. Here you'll find comprehensive guides and documentation to help you understand and use AI detection tools effectively. Browse through our documentation sections below to learn more.
          </p>
        </div>
        
        <!-- Documentation cards -->
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <NuxtLink to="/docs/ai-usage" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-semibold mb-3 text-blue-600">AI Usage Guide</h3>
            <p class="text-gray-700 mb-4">
              Learn how to use AI tools ethically and effectively in your work, research, and creative projects.
            </p>
            <div class="text-blue-600 font-medium flex items-center">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/docs/validation-process" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-semibold mb-3 text-blue-600">Validation Process</h3>
            <p class="text-gray-700 mb-4">
              Understand how our AI detection works, the technology behind it, and the validation process.
            </p>
            <div class="text-blue-600 font-medium flex items-center">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/docs/certificates" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-semibold mb-3 text-blue-600">Certificates</h3>
            <p class="text-gray-700 mb-4">
              Learn about our certificates, how they work, and how to use them to prove document authenticity.
            </p>
            <div class="text-blue-600 font-medium flex items-center">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/docs/faq" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-semibold mb-3 text-blue-600">FAQ</h3>
            <p class="text-gray-700 mb-4">
              Find answers to frequently asked questions about AI detection, our tool, and AI usage in general.
            </p>
            <div class="text-blue-600 font-medium flex items-center">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/docs/api" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-semibold mb-3 text-blue-600">API Documentation</h3>
            <p class="text-gray-700 mb-4">
              Technical documentation for integrating AI-Validator into your own applications and workflows.
            </p>
            <div class="text-blue-600 font-medium flex items-center">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/docs/resources" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-semibold mb-3 text-blue-600">Additional Resources</h3>
            <p class="text-gray-700 mb-4">
              Find links to external resources, articles, and tools related to AI detection and ethical AI usage.
            </p>
            <div class="text-blue-600 font-medium flex items-center">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </NuxtLink>
        </div>
        
        <!-- Getting started -->
        <div class="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 class="text-2xl font-bold mb-4">Getting Started</h2>
          <p class="text-gray-700 mb-6">
            New to AI-Validator? Follow these quick steps to get started:
          </p>
          
          <ol class="space-y-4">
            <li class="flex">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">1</span>
              <div>
                <h3 class="font-semibold text-lg">Create an account (optional)</h3>
                <p class="text-gray-700">While AI-Validator can be used without an account, creating one allows you to save your validation history.</p>
              </div>
            </li>
            
            <li class="flex">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">2</span>
              <div>
                <h3 class="font-semibold text-lg">Upload a document</h3>
                <p class="text-gray-700">Go to the <NuxtLink to="/validate" class="text-blue-600 hover:underline">Validate</NuxtLink> page and upload your PDF document.</p>
              </div>
            </li>
            
            <li class="flex">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">3</span>
              <div>
                <h3 class="font-semibold text-lg">Review the results</h3>
                <p class="text-gray-700">Once processing is complete, review the detailed report to understand the AI detection findings.</p>
              </div>
            </li>
            
            <li class="flex">
              <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">4</span>
              <div>
                <h3 class="font-semibold text-lg">Get your certificate</h3>
                <p class="text-gray-700">Download or share your certificate of authenticity to prove your document's AI detection status.</p>
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
        
        <!-- Support -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold mb-4">Need Help?</h2>
          <p class="text-gray-700 mb-6">
            Can't find what you're looking for in our documentation? Our support team is here to help.
          </p>
          
          <div class="grid md:grid-cols-2 gap-6">
            <a href="#" class="border border-gray-200 rounded-lg p-4 flex items-center hover:bg-gray-50 transition duration-300">
              <div class="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold">Contact Support</h3>
                <p class="text-gray-600 text-sm">Email our support team</p>
              </div>
            </a>
            
            <a href="#" class="border border-gray-200 rounded-lg p-4 flex items-center hover:bg-gray-50 transition duration-300">
              <div class="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold">Live Chat</h3>
                <p class="text-gray-600 text-sm">Chat with our support team</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 