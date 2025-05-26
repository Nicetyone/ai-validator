import { defineEventHandler } from 'h3';

/**
 * API endpoint to get all documents
 * 
 * In a real application, this would fetch from a database with pagination
 * For this demo, we'll use mock data
 */
export default defineEventHandler((event) => {
  // In a real app, we would fetch this from a database with pagination
  // Mock data for demonstration
  const mockDocuments = [
    {
      id: '1',
      name: 'research-paper.pdf',
      size: '1.2 MB',
      date: new Date(2023, 4, 15),
      status: 'Complete',
      result: 'Level 1: Clean'
    },
    {
      id: '2',
      name: 'thesis-draft.pdf',
      size: '3.5 MB',
      date: new Date(2023, 4, 10),
      status: 'Complete',
      result: 'Level 2: AI-Supported'
    },
    {
      id: '3',
      name: 'project-proposal.pdf',
      size: '0.8 MB',
      date: new Date(2023, 4, 5),
      status: 'Complete',
      result: 'Level 3: AI-Generated'
    },
    {
      id: '4',
      name: 'essay-final.pdf',
      size: '0.6 MB',
      date: new Date(2023, 4, 1),
      status: 'Complete',
      result: 'Level 1: Clean'
    },
    {
      id: '5',
      name: 'literature-review.pdf',
      size: '2.1 MB',
      date: new Date(2023, 3, 25),
      status: 'Complete',
      result: 'Level 2: AI-Supported'
    },
    {
      id: '6',
      name: 'dissertation-chapter1.pdf',
      size: '1.8 MB',
      date: new Date(2023, 3, 20),
      status: 'Processing',
      result: 'Pending'
    },
    {
      id: '7',
      name: 'term-paper.pdf',
      size: '1.3 MB',
      date: new Date(2023, 3, 15),
      status: 'Failed',
      result: 'Error'
    }
  ];
  
  return {
    success: true,
    documents: mockDocuments
  };
}); 