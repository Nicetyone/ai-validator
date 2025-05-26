import { useDocumentStore } from '~/stores/document';

export default defineNuxtPlugin(async () => {
  // Only initialize document store on client-side
  if (process.client) {
    const documentStore = useDocumentStore();
    await documentStore.initialize();
    
    console.log('Document store initialized on client');
  }
}); 