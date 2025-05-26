<template>
  <div>
    <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="flex items-center mb-2">
          <NuxtLink to="/uploads" class="text-white hover:text-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to My Documents
          </NuxtLink>
        </div>
        <h1 class="text-3xl font-bold">Document Analysis Report</h1>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <div v-if="isLoading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p class="text-gray-600">Loading report data...</p>
        </div>

        <div v-else-if="!document" class="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-red-700">
                Document not found. It may have been deleted or the ID is invalid.
              </p>
            </div>
          </div>
        </div>

        <div v-else>
          <!-- Document Information -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <div class="flex items-start justify-between">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-red-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div>
                  <h2 class="text-xl font-semibold mb-1">{{ document.name }}</h2>
                  <div class="text-sm text-gray-500">
                    <span>{{ document.size }}</span>
                    <span class="mx-2">•</span>
                    <span>Uploaded on {{ formatDate(document.date) }}</span>
                  </div>
                </div>
              </div>
              <div>
                <span :class="getResultBadgeClass(document.result)" class="text-sm px-3 py-1 rounded-full">
                  {{ document.result }}
                </span>
              </div>
            </div>
          </div>

          <!-- Summary Section -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold mb-4">Analysis Summary</h2>
            
            <div class="flex flex-col md:flex-row md:divide-x divide-gray-200">
              <div class="md:w-1/3 pr-0 md:pr-6 mb-6 md:mb-0">
                <div class="text-center">
                  <div class="text-5xl font-bold mb-2" :class="getResultTextClass(document.result)">
                    {{ document.aiScore }}%
                  </div>
                  <div class="text-gray-500">AI Detection Score</div>
                </div>
              </div>
              
              <div class="md:w-2/3 pl-0 md:pl-6">
                <p class="text-gray-700 mb-4">
                  {{ document.summary }}
                </p>
                
                <div class="mt-4">
                  <h3 class="font-semibold mb-2">Key Findings:</h3>
                  <ul class="list-disc pl-5 text-gray-700">
                    <li v-for="(finding, index) in document.keyFindings" :key="index" class="mb-1">
                      {{ finding }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Detailed Analysis -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold mb-4">Detailed Analysis</h2>
            
            <div class="space-y-4">
              <div v-for="(category, index) in document.analysisCategories" :key="index" class="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="font-semibold">{{ category.name }}</h3>
                  <div class="w-32 bg-gray-200 rounded-full h-2.5">
                    <div class="h-2.5 rounded-full" :style="{ width: category.score + '%' }" :class="getCategoryScoreClass(category.score)"></div>
                  </div>
                </div>
                <p class="text-gray-700 text-sm">{{ category.description }}</p>
              </div>
            </div>
          </div>

          <!-- Content Excerpts -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold mb-4">Content Excerpts</h2>
            
            <div v-if="document.excerpts.length === 0" class="text-gray-500 italic text-center py-4">
              No specific excerpts to highlight.
            </div>
            
            <div v-else class="space-y-4">
              <div v-for="(excerpt, index) in document.excerpts" :key="index" class="border-l-4 pl-4 py-1" :class="getExcerptBorderClass(excerpt.type)">
                <p class="text-gray-700 mb-1 italic">"{{ excerpt.text }}"</p>
                <p class="text-sm text-gray-500">{{ excerpt.explanation }}</p>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <NuxtLink 
              :to="`/certificate/${document.id}`"
              class="w-full sm:w-auto bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition duration-300 text-center"
            >
              View Certificate
            </NuxtLink>
            <button
              class="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
            >
              Download Report (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isLoading = ref(true);
const document = ref(null);

// Mock document data - in a real app, this would be fetched from an API
const mockDocuments = [
  {
    id: '1',
    name: 'research-paper.pdf',
    size: '1.2 MB',
    date: new Date(2023, 4, 15),
    status: 'Complete',
    result: 'Level 1: Clean',
    aiScore: 12,
    summary: 'This document appears to be human-created with no significant indicators of AI generation. The writing style is consistent with academic research, showing natural variations in sentence structure and vocabulary usage typical of human authors.',
    keyFindings: [
      'Natural language patterns consistent with human writing',
      'Varied sentence structures and vocabulary',
      'Logical flow and contextual coherence',
      'Appropriate use of domain-specific terminology'
    ],
    analysisCategories: [
      {
        name: 'Linguistic Patterns',
        score: 15,
        description: 'The document shows natural language patterns with appropriate variations in structure and complexity.'
      },
      {
        name: 'Content Originality',
        score: 8,
        description: 'Content appears original with properly cited sources and integration of diverse perspectives.'
      },
      {
        name: 'Contextual Coherence',
        score: 10,
        description: 'Strong contextual understanding with appropriate connections between concepts.'
      },
      {
        name: 'Stylistic Consistency',
        score: 14,
        description: 'Consistent writing style throughout with natural variations that indicate human authorship.'
      }
    ],
    excerpts: []
  },
  {
    id: '2',
    name: 'thesis-draft.pdf',
    size: '3.5 MB',
    date: new Date(2023, 4, 10),
    status: 'Complete',
    result: 'Level 2: AI-Supported',
    aiScore: 58,
    summary: 'This document shows signs of AI assistance but with significant human input and editing. While some sections exhibit patterns typical of AI-generated text, others show clear evidence of human authorship and original thought.',
    keyFindings: [
      'Mixed writing styles throughout the document',
      'Some sections show repetitive patterns typical of AI',
      'Other sections demonstrate nuanced human reasoning',
      'Overall structure suggests human organization with AI-assisted content generation'
    ],
    analysisCategories: [
      {
        name: 'Linguistic Patterns',
        score: 62,
        description: 'Some sections show repetitive patterns typical of AI generation, while others exhibit natural human variation.'
      },
      {
        name: 'Content Originality',
        score: 45,
        description: 'Content shows a mix of potentially AI-generated passages and original human insights.'
      },
      {
        name: 'Contextual Coherence',
        score: 55,
        description: 'Generally good contextual understanding with occasional inconsistencies.'
      },
      {
        name: 'Stylistic Consistency',
        score: 68,
        description: 'Noticeable style variations between sections, suggesting multiple sources or methods of creation.'
      }
    ],
    excerpts: [
      {
        text: 'The implementation of machine learning algorithms in healthcare settings has shown promising results across various diagnostic procedures and treatment protocols.',
        type: 'ai',
        explanation: 'Generic phrasing common in AI-generated content about machine learning applications.'
      },
      {
        text: "My own experience with patient data revealed unexpected correlations between treatment adherence and socioeconomic factors that weren't evident in the published literature.",
        type: 'human',
        explanation: 'Personal insight and nuanced observation typical of human experience.'
      }
    ]
  },
  {
    id: '3',
    name: 'project-proposal.pdf',
    size: '0.8 MB',
    date: new Date(2023, 4, 5),
    status: 'Complete',
    result: 'Level 3: AI-Generated',
    aiScore: 92,
    summary: 'This document appears to be primarily AI-generated with minimal human editing. It exhibits numerous characteristics typical of large language model outputs, including formulaic structure, generic phrasing, and consistency issues.',
    keyFindings: [
      'Highly formulaic sentence structures throughout',
      'Generic and repetitive phrasing',
      'Surface-level treatment of complex topics',
      'Occasional non-sequiturs and contextual inconsistencies'
    ],
    analysisCategories: [
      {
        name: 'Linguistic Patterns',
        score: 95,
        description: 'Highly consistent sentence structures and phrasing patterns typical of AI-generated text.'
      },
      {
        name: 'Content Originality',
        score: 88,
        description: 'Content largely composed of generic statements and common knowledge rather than original insights.'
      },
      {
        name: 'Contextual Coherence',
        score: 82,
        description: 'Generally coherent but with occasional context shifts and surface-level treatment of topics.'
      },
      {
        name: 'Stylistic Consistency',
        score: 97,
        description: 'Extremely consistent style throughout, lacking the natural variations typical in human writing.'
      }
    ],
    excerpts: [
      {
        text: 'The proposed project will leverage cutting-edge technology to implement innovative solutions that address key challenges in the target sector while maximizing stakeholder value and promoting sustainable outcomes.',
        type: 'ai',
        explanation: 'Generic business jargon with minimal specific content; typical of AI-generated proposals.'
      },
      {
        text: 'Our approach will utilize state-of-the-art methodologies to analyze complex data sets, enabling data-driven decision making that optimizes resource allocation and enhances operational efficiency.',
        type: 'ai',
        explanation: 'Vague technical description without specific methodologies or techniques mentioned.'
      },
      {
        text: 'The implementation timeline will be structured to ensure timely delivery of project milestones while maintaining flexibility to accommodate stakeholder feedback and changing requirements.',
        type: 'ai',
        explanation: 'Generic project management language that could apply to virtually any project.'
      }
    ]
  }
];

// Fetch document data based on ID
onMounted(async () => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const id = route.params.id;
  document.value = mockDocuments.find(doc => doc.id === id) || null;
  isLoading.value = false;
});

// Format date helper
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Get result badge class
const getResultBadgeClass = (result) => {
  if (result.includes('Clean')) {
    return 'bg-green-100 text-green-800';
  } else if (result.includes('AI-Supported')) {
    return 'bg-yellow-100 text-yellow-800';
  } else if (result.includes('AI-Generated')) {
    return 'bg-red-100 text-red-800';
  } else {
    return 'bg-gray-100 text-gray-800';
  }
};

// Get result text class
const getResultTextClass = (result) => {
  if (result.includes('Clean')) {
    return 'text-green-600';
  } else if (result.includes('AI-Supported')) {
    return 'text-yellow-600';
  } else if (result.includes('AI-Generated')) {
    return 'text-red-600';
  } else {
    return 'text-gray-600';
  }
};

// Get category score class
const getCategoryScoreClass = (score) => {
  if (score < 30) {
    return 'bg-green-500';
  } else if (score < 70) {
    return 'bg-yellow-500';
  } else {
    return 'bg-red-500';
  }
};

// Get excerpt border class
const getExcerptBorderClass = (type) => {
  if (type === 'human') {
    return 'border-green-500';
  } else if (type === 'ai') {
    return 'border-red-500';
  } else {
    return 'border-gray-300';
  }
};
</script> 