<template>
  <div>
    <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex items-center mb-2">
          <NuxtLink to="/docs" class="text-white hover:text-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Documentation
          </NuxtLink>
        </div>
        <h1 class="text-3xl font-bold mb-4">AI Usage Guide</h1>
        <p class="text-xl max-w-3xl">
          Best practices for using AI tools properly in your work
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-12">
      <div class="max-w-4xl mx-auto">
        <!-- Introduction -->
        <div class="mb-12">
          <p class="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            Artificial Intelligence tools like ChatGPT, DALL-E, and other language and image generation models have become increasingly accessible and powerful. When used responsibly, these tools can enhance creativity, productivity, and learning. However, it's important to understand how to use them ethically and effectively.
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            This guide provides recommendations for using AI tools responsibly in academic, professional, and creative contexts.
          </p>
        </div>
        
        <!-- Table of Contents -->
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-12">
          <h2 class="text-xl font-bold mb-4">Contents</h2>
          <ul class="space-y-2">
            <li>
              <a href="#principles" class="text-blue-600 hover:underline">Guiding Principles</a>
            </li>
            <li>
              <a href="#academic" class="text-blue-600 hover:underline">Using AI in Academic Work</a>
            </li>
            <li>
              <a href="#professional" class="text-blue-600 hover:underline">Using AI in Professional Settings</a>
            </li>
            <li>
              <a href="#creative" class="text-blue-600 hover:underline">Using AI for Creative Projects</a>
            </li>
            <li>
              <a href="#citation" class="text-blue-600 hover:underline">How to Cite AI-Generated Content</a>
            </li>
            <li>
              <a href="#detection" class="text-blue-600 hover:underline">Understanding AI Detection</a>
            </li>
          </ul>
        </div>
        
        <!-- Guiding Principles -->
        <div id="principles" class="mb-12 scroll-mt-20">
          <h2 class="text-2xl font-bold mb-6 text-blue-600">Guiding Principles</h2>
          
          <div class="space-y-6">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">Transparency</h3>
              <p class="text-gray-700 dark:text-gray-300">
                Always be transparent about your use of AI tools. If you've used AI to generate content, ideas, or to assist in any part of your work, disclose this to your audience, whether they are professors, employers, clients, or the general public.
              </p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">Human Oversight</h3>
              <p class="text-gray-700 dark:text-gray-300">
                AI should be a tool that assists humans, not a replacement for human judgment. Always review, edit, and take responsibility for AI-generated content. Remember that AI can produce factual errors, biases, or inappropriate content.
              </p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">Purpose and Context</h3>
              <p class="text-gray-700 dark:text-gray-300">
                Use AI tools purposefully and in appropriate contexts. Understand the rules and expectations of your specific context (e.g., academic institution policies, workplace guidelines, or client expectations) regarding AI use.
              </p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">Attribution</h3>
              <p class="text-gray-700 dark:text-gray-300">
                Properly attribute and cite AI-generated content. Just as you would cite other sources, acknowledge when content has been created or influenced by AI tools.
              </p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">Continuous Learning</h3>
              <p class="text-gray-700 dark:text-gray-300">
                Use AI as a learning tool, not a shortcut. AI can help you understand concepts, generate ideas, or improve your writing, but it should enhance your skills, not replace the learning process.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Academic Use -->
        <div id="academic" class="mb-12 scroll-mt-20">
          <h2 class="text-2xl font-bold mb-6 text-blue-600">Using AI in Academic Work</h2>
          
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
            <div class="border-b border-gray-200 px-6 py-4">
              <h3 class="text-xl font-semibold">Recommended Uses</h3>
            </div>
            <div class="p-6">
              <ul class="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Brainstorming research topics or essay ideas</li>
                <li>Clarifying complex concepts or explaining difficult material</li>
                <li>Generating outlines or structures for papers</li>
                <li>Proofreading and suggesting improvements for your writing</li>
                <li>Translating content between languages</li>
                <li>Creating study materials or practice questions</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
            <div class="border-b border-gray-200 px-6 py-4">
              <h3 class="text-xl font-semibold">Cautions and Considerations</h3>
            </div>
            <div class="p-6">
              <ul class="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Check your institution's policies on AI use in academic work</li>
                <li>Do not submit AI-generated content as your own without substantial editing and contribution</li>
                <li>Verify any facts, references, or citations provided by AI</li>
                <li>Use AI to enhance your learning, not to bypass it</li>
                <li>Be especially careful in disciplines where original thought and analysis are central</li>
                <li>Consider the ethical implications of using AI for assignments meant to develop specific skills</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
            <h3 class="font-semibold text-lg mb-2">Example Disclosure Statement</h3>
            <p class="text-gray-700 dark:text-gray-300 italic">
              "I used ChatGPT to help brainstorm ideas and structure for this essay. All final content was written by me, with AI-suggested content thoroughly revised and integrated with my own analysis. No direct AI-generated text was included without significant editing and validation."
            </p>
          </div>
        </div>
        
        <!-- Professional Use -->
        <div id="professional" class="mb-12 scroll-mt-20">
          <h2 class="text-2xl font-bold mb-6 text-blue-600">Using AI in Professional Settings</h2>
          
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
            <div class="border-b border-gray-200 px-6 py-4">
              <h3 class="text-xl font-semibold">Recommended Uses</h3>
            </div>
            <div class="p-6">
              <ul class="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Drafting emails, reports, or other routine communications</li>
                <li>Summarizing long documents or meetings</li>
                <li>Creating templates or frameworks for projects</li>
                <li>Generating ideas during brainstorming sessions</li>
                <li>Improving writing clarity and professionalism</li>
                <li>Automating repetitive writing tasks</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
            <div class="border-b border-gray-200 px-6 py-4">
              <h3 class="text-xl font-semibold">Cautions and Considerations</h3>
            </div>
            <div class="p-6">
              <ul class="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Follow your organization's policies regarding AI use</li>
                <li>Be careful with confidential or sensitive information (don't input it into public AI tools)</li>
                <li>Always review AI-generated content for accuracy and appropriateness</li>
                <li>Consider the impression AI-generated content makes on clients or colleagues</li>
                <li>Be transparent with team members about AI assistance</li>
                <li>Take responsibility for all content that goes out under your name</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Creative Use -->
        <div id="creative" class="mb-12 scroll-mt-20">
          <h2 class="text-2xl font-bold mb-6 text-blue-600">Using AI for Creative Projects</h2>
          
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
            <div class="border-b border-gray-200 px-6 py-4">
              <h3 class="text-xl font-semibold">Recommended Uses</h3>
            </div>
            <div class="p-6">
              <ul class="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Generating ideas or inspiration for creative work</li>
                <li>Exploring alternative approaches or perspectives</li>
                <li>Overcoming creative blocks</li>
                <li>Creating rough drafts or outlines to refine</li>
                <li>Experimenting with different styles or techniques</li>
                <li>Collaborating with AI as a creative partner</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
            <div class="border-b border-gray-200 px-6 py-4">
              <h3 class="text-xl font-semibold">Cautions and Considerations</h3>
            </div>
            <div class="p-6">
              <ul class="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Disclose AI use when sharing or publishing creative work</li>
                <li>Consider copyright and ownership issues with AI-generated content</li>
                <li>Develop your own creative voice rather than relying solely on AI</li>
                <li>Be aware that AI often generates content based on existing works</li>
                <li>Make the AI output truly your own through significant editing and iteration</li>
                <li>Consider ethical implications, especially for visual arts and music</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Citation -->
        <div id="citation" class="mb-12 scroll-mt-20">
          <h2 class="text-2xl font-bold mb-6 text-blue-600">How to Cite AI-Generated Content</h2>
          
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Citation formats for AI tools are still evolving, but here are some general guidelines for different citation styles:
          </p>
          
          <div class="space-y-6">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">APA Style</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                <strong>In-text citation:</strong> (ChatGPT, 2023)
              </p>
              <p class="text-gray-700 dark:text-gray-300">
                <strong>Reference list:</strong><br>
                ChatGPT (2023). Personal communication with OpenAI's ChatGPT [Large language model]. Retrieved from https://chat.openai.com
              </p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">MLA Style</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                <strong>In-text citation:</strong> (ChatGPT)
              </p>
              <p class="text-gray-700 dark:text-gray-300">
                <strong>Works Cited:</strong><br>
                ChatGPT. Conversation with AI assistant, OpenAI, 25 May 2023, chat.openai.com.
              </p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">Chicago Style</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Footnote:</strong> ChatGPT, in discussion with the author, May 2023.
              </p>
              <p class="text-gray-700 dark:text-gray-300">
                <strong>Bibliography:</strong><br>
                ChatGPT. Personal communication. May 25, 2023. https://chat.openai.com.
              </p>
            </div>
          </div>
          
          <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
            <p class="text-yellow-700">
              <strong>Note:</strong> Always check with your instructor, publisher, or organization for their preferred citation format for AI tools, as standards are still developing.
            </p>
          </div>
        </div>
        
        <!-- AI Detection -->
        <div id="detection" class="mb-12 scroll-mt-20">
          <h2 class="text-2xl font-bold mb-6 text-blue-600">Understanding AI Detection</h2>
          
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            As AI content becomes more prevalent, tools to detect AI-generated text are also evolving. Here's what you should know about AI detection:
          </p>
          
          <div class="space-y-6">
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">How AI Detection Works</h3>
              <p class="text-gray-700 dark:text-gray-300">
                AI detection tools analyze patterns in text that are characteristic of AI-generated content. These include statistical patterns, repetitive phrasing, certain stylistic markers, and other features that differ from typical human writing. Our AI-Validator tool examines multiple factors to determine the likelihood that content was generated by AI.
              </p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">Accuracy and Limitations</h3>
              <p class="text-gray-700 dark:text-gray-300">
                No AI detection tool is 100% accurate. False positives (human content identified as AI) and false negatives (AI content identified as human) can occur. Detection accuracy also varies based on how much the AI-generated content has been edited by humans.
              </p>
            </div>
            
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-semibold mb-3">Best Practices</h3>
              <ul class="space-y-2 list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li>Be transparent about AI use rather than trying to evade detection</li>
                <li>Heavily edit and personalize AI-generated content</li>
                <li>Use AI as a starting point, not a final product</li>
                <li>Integrate your own expertise, examples, and insights</li>
                <li>When in doubt, create original content without AI assistance</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Conclusion -->
        <div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-8">
          <h2 class="text-2xl font-bold mb-4">Final Thoughts</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-4">
            AI tools are powerful assistants that, when used ethically and thoughtfully, can enhance your productivity and creativity. The key is to use them as tools that support your work, not replace your critical thinking, creativity, or learning.
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            By following the guidelines in this document, you can harness the benefits of AI while maintaining integrity, developing your skills, and producing work that genuinely reflects your abilities and insights.
          </p>
        </div>
      </div>
    </div>
  </div>
</template> 