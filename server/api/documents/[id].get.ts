import { defineEventHandler } from 'h3';

/**
 * API endpoint to get a document's analysis results by ID
 * 
 * In a real application, this would fetch from a database
 * For this demo, we'll use mock data
 */
export default defineEventHandler((event) => {
  const id = event.context.params?.id;
  
  if (!id) {
    return {
      success: false,
      error: 'Document ID is required'
    };
  }
  
  // In a real app, we would fetch this from a database
  // Mock data for demonstration
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
  
  const document = mockDocuments.find(doc => doc.id === id);
  
  if (!document) {
    return {
      success: false,
      error: 'Document not found'
    };
  }
  
  return {
    success: true,
    document
  };
}); 