# AI-Validator

A web application that allows users to upload documents and analyze them for AI-generated content. The application provides a detailed report and certificate of authenticity that classifies documents based on the level of AI involvement.

## Features

- Upload documents (PDF, TXT, DOCX) for AI content analysis
- Automatic language detection with support for multiple languages
- Receive detailed reports on AI detection findings
- Get certificates of authenticity for your documents
- View document history and analysis results
- Dashboard for managing multiple documents
- Persistent caching for consistent results across sessions

## AI Detection Levels

The AI-Validator classifies documents into three levels:

1. **Level 1: Clean** - No AI detected. The document appears to be entirely human-created with high quality writing.
2. **Level 2: AI-Supported** - Document shows signs of AI assistance, but with significant human input and editing. The quality is acceptable.
3. **Level 3: AI-Generated** - Document appears to be primarily AI-generated with minimal human editing. The quality is poor with obvious AI patterns.

## AI Detection Algorithm

Our sophisticated AI detection algorithm analyzes documents through multiple dimensions:

### Text Analysis Components

1. **Linguistic Metrics**
   - Lexical diversity and vocabulary richness
   - Sentence structure variation
   - Paragraph coherence and flow
   - Word frequency distribution

2. **Pattern Recognition**
   - Identification of repetitive sentence structures
   - Detection of boilerplate phrases common in AI text
   - Analysis of generic, non-specific language
   - Recognition of formulaic transitions

3. **Complexity Analysis**
   - Evaluation of text readability metrics
   - Assessment of passive voice usage
   - Analysis of punctuation patterns
   - Detection of balanced complexity (too simple or too complex can indicate AI)

4. **Topic Coherence**
   - Measurement of logical flow between paragraphs
   - Analysis of topic consistency and development
   - Detection of abrupt topic shifts typical in AI writing

5. **Creativity Assessment**
   - Detection of metaphors, similes, and figurative language
   - Analysis of emotional range and evocative language
   - Evaluation of stylistic variations

6. **Repetition Analysis**
   - N-gram repetition patterns
   - Sentence structure redundancy
   - Phrase reuse detection

### Multilingual Support

The algorithm is designed to work with multiple languages:

- **Language Detection**: Automatically identifies the document language
- **Language-Specific Analysis**: Adapts analysis techniques to each language's unique patterns
- **Supported Languages**: English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, and more
- **Localized Results**: Provides analysis results in the document's original language

### Key Findings Generation

Based on the analysis, the system generates:
- Language-specific key findings highlighting strengths or weaknesses
- Quantified metrics on lexical diversity, complexity, and coherence
- Content excerpts showcasing AI or human writing patterns
- Comprehensive categorized analysis with scores

## Caching System Architecture

The application employs a sophisticated client-server caching system:

### Client-Side Caching

- **localStorage Persistence**: Document data is cached in browser's localStorage
- **Consistent Results**: Same file upload will always yield the same analysis results
- **Hash-Based Identification**: Files are identified by content hash, not filename
- **Offline Capability**: Previously analyzed documents can be viewed without internet

### Server-Side Simulation

- **Simulated Database**: A Map-based data store provides server-side persistence
- **Document Storage**: Complete document records with analysis results
- **Hash-Based Retrieval**: Efficient document lookup by hash or certificate ID
- **Cache Synchronization**: Client data syncs with server on application startup

### Certificate Generation

- **Deterministic IDs**: Certificate IDs are generated based on document content hash
- **Verification System**: Certificates can be verified by their unique ID
- **Persistent Certificates**: Once generated, certificates remain accessible and consistent

## Project Structure

The project is organized as follows:

- `/pages` - Nuxt pages including dashboard, reports, certificates and verification
- `/components` - Reusable Vue components
- `/layouts` - Page layouts (default and dashboard)
- `/stores` - Pinia stores for state management, including document store
- `/plugins` - Nuxt plugins for initialization and global functionality
- `/public` - Static assets

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

## How to Use

1. **Upload a Document**:
   - Go to the dashboard and click the upload button
   - Select a document file (PDF, TXT, DOCX)
   - The system will automatically detect the language and analyze the content

2. **View Analysis Results**:
   - After processing, you'll see the AI detection score and classification
   - Review the detailed report with key findings and category scores
   - Examine content excerpts highlighting AI or human patterns

3. **Get a Certificate**:
   - From the report page, click "View Certificate"
   - The certificate includes a verification code that can be used to verify authenticity
   - Print or download the certificate as needed

4. **Verify a Certificate**:
   - Go to the verification page
   - Enter the certificate ID
   - The system will display the document's analysis results and authenticity

## License

[MIT License](LICENSE)
