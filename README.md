# AI-Validator

## Project Overview

AI-Validator is a Nuxt 3 web application that validates uploaded PDF documents for AI-generated content. It provides detailed reports and verification certificates while storing results in the browser so they persist across sessions. A built-in dark mode offers comfortable viewing.

## Technologies Used

- [Nuxt 3](https://nuxt.com/) - Vue framework
- [Pinia](https://pinia.vuejs.org/) - State management
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Features

- **File Upload with Duplicate Detection** — upload PDFs via drag and drop or file selection. Duplicate files are detected by hash and previous results are reused.
- **Status & Result Levels** — each document displays its processing status and one of three result levels: **Clean**, **AI-Supported**, or **AI-Generated**.
- **Document List** — view uploaded documents with filtering, pagination and deletion options.
- **Certificate Generation & Verification** — completed analyses generate certificates that can later be verified via their unique ID.
- **Dark Mode Toggle** — switch between light and dark themes. Preference is saved to local storage.
- **Clear Cached Documents** — remove all locally stored documents and analysis data.

## AI Detection Levels

1. **Level 1: Clean** – no AI detected; the document appears human created.
2. **Level 2: AI-Supported** – some signs of AI assistance with notable human input.
3. **Level 3: AI-Generated** – document seems primarily AI-generated with minimal editing.

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

4. Open your browser and navigate to `http://localhost:3000`.

## Local Development

Run the following scripts during local development:

```bash
npm run dev        # start dev server
npm run build      # build for production
npm run preview    # preview built app
npm run clear-cache # clear cached documents
```

## Repository Structure

- **`pages/`** – Nuxt pages such as validation, uploads and certificate views
- **`components/`** – reusable Vue components including the uploader and dark mode toggle
- **`composables/`** – shared composables like `useFileUpload` and `useDark`
- **`stores/`** – Pinia store managing documents and local storage
- **`server/api/`** – mock API endpoints for document upload and retrieval

## Using the Application

1. **Validate a Document** – go to the **Validate** page and upload your PDF. After processing you receive a report and certificate.
2. **View Uploads** – the **My Documents** page lists previous uploads. Filter or paginate the list, open reports or certificates, or delete unwanted items.
3. **Verify Certificates** – on the uploads page enter a certificate ID to confirm its validity.

## Project Tasks and Division

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
