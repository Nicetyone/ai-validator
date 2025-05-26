# AI-Validator

A web application that allows users to upload PDF documents and analyze them for AI-generated content. The application provides a detailed report and certificate of authenticity that classifies documents based on the level of AI involvement.

## Features

- Upload PDF documents for AI content analysis
- Receive detailed reports on AI detection findings
- Get certificates of authenticity for your documents
- View document history and analysis results
- Dashboard for managing multiple documents

## AI Detection Levels

The AI-Validator classifies documents into three levels:

1. **Level 1: Clean** - No AI detected. The document appears to be entirely human-created.
2. **Level 2: AI-Supported** - Document shows signs of AI assistance, but with significant human input.
3. **Level 3: AI-Generated** - Document appears to be primarily AI-generated with minimal human editing.

## Project Structure

The project is organized as follows:

- `/pages` - Nuxt pages including dashboard, reports, and certificates
- `/components` - Reusable Vue components
- `/layouts` - Page layouts (default and dashboard)
- `/stores` - Pinia stores for state management
- `/composables` - Reusable composition functions
- `/server/api` - API endpoints for document processing and retrieval
- `/public` - Static assets and uploaded files

## Technologies Used

- [Nuxt 3](https://nuxt.com/) - Vue framework
- [Pinia](https://pinia.vuejs.org/) - State management
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-validator.git
   cd ai-validator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Tasks and Division

This project can be divided among team members as follows:

### Frontend Tasks

- **UI Implementation**
  - Landing page and about page
  - Dashboard layout and navigation
  - File upload component
  - Document lists and filtering
  - Reports and certificates

- **State Management**
  - Document store
  - User authentication (future enhancement)
  - UI state and notifications

### Backend Tasks

- **API Implementation**
  - File upload and validation
  - Document analysis
  - Document retrieval and listing
  - Certificate generation

- **AI Analysis System**
  - PDF text extraction
  - AI detection algorithms
  - Result generation and scoring
  - Report compilation

### Infrastructure Tasks

- **Deployment**
  - Server setup
  - CI/CD pipeline
  - Storage configuration
  - Performance optimization

## Future Enhancements

- User authentication and accounts
- Advanced AI detection algorithms
- Support for additional file formats
- Batch processing of multiple documents
- API for third-party integrations

## License

[MIT License](LICENSE)
