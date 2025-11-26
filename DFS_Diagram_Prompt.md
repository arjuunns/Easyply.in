# DFS (Data Flow System) Diagram Generation Prompt for Easyply Project

## Project Overview

Create comprehensive Level 0 and Level 1 DFS diagrams for **Easyply**, a career empowerment platform that provides resume building, job search, and AI-driven interview preparation services.

## System Architecture Context

### Core Components

1. **Frontend Application** (React 19 + TypeScript + Vite)
2. **Backend API** (Node.js + Express + TypeScript)
3. **Database** (PostgreSQL with Prisma ORM)
4. **Authentication** (Clerk)
5. **External APIs** (Gemini AI, ElevenLabs, Workable Jobs API, Piston Code Execution)
6. **Real-time Communication** (Socket.IO)

### Main Data Flows

#### 1. User Authentication Flow

- **Source**: User (Browser)
- **Destination**: Clerk Authentication Service
- **Data**: Login credentials, user profile data
- **Process**: Sign-in/Sign-up → Clerk validation → JWT tokens → Protected route access

#### 2. Resume Building Flow

- **Source**: User input (forms)
- **Destination**: Local storage (Zustand) + Database (Prisma)
- **Data**: Personal info, experience, education, skills, templates, themes
- **Process**: Form input → State management → Persistence → PDF generation

#### 3. Job Search Flow

- **Source**: User search filters
- **Destination**: Workable Jobs API
- **Data**: Search parameters, job listings, company info
- **Process**: Filter input → Backend API → External API call → Job results → Frontend display

#### 4. AI Interview Flow

- **Source**: User interview responses
- **Destination**: Gemini AI + ElevenLabs
- **Data**: Questions, answers, audio streams, evaluation feedback
- **Process**: Socket connection → AI prompt generation → Gemini response → Audio synthesis → Real-time feedback

#### 5. Code Execution Flow

- **Source**: User code input
- **Destination**: Piston API
- **Data**: Code, language, stdin, output
- **Process**: Code editor → Piston API → Execution → Results display

## Database Schema (Key Entities)

- **User**: id, email, profilePicUrl, tokens, createdAt
- **Resume**: id, themeName, data (JSON), user relation
- **SavedJob**: id, userId, jobId, jobTitle, company
- **InterviewReport**: id, userId, feedback (JSON), rating
- **Setting**: id, darkMode, notificationsEnabled, language

## External System Integrations

1. **Clerk**: User authentication and management
2. **Gemini AI**: Interview question generation and evaluation
3. **ElevenLabs**: Text-to-speech for interview responses
4. **Workable API**: Job listings and search
5. **Piston API**: Code execution for technical interviews

## Request for DFS Diagrams

### Level 0 DFS Diagram Requirements

Create a **context-level diagram** showing:

- **External Entities**: User, Clerk, Gemini AI, ElevenLabs, Workable API, Piston API
- **Main System**: Easyply Platform
- **Data Flows**:
  - User authentication data
  - Resume data
  - Job search requests/responses
  - Interview data (questions, answers, audio)
  - Code execution data
  - User preferences and settings

### Level 1 DFS Diagram Requirements

Create a **system-level diagram** showing:

- **Processes**:

  1. **User Authentication** (Clerk integration)
  2. **Resume Management** (CRUD operations, templates, themes)
  3. **Job Search Engine** (filtering, API integration, results processing)
  4. **AI Interview System** (question generation, real-time evaluation, audio synthesis)
  5. **Code Execution Engine** (language support, execution, output handling)
  6. **User Settings Management** (preferences, themes, notifications)

- **Data Stores**:

  - User Database
  - Resume Database
  - Job Cache
  - Interview Reports
  - Settings Database

- **External Systems**:

  - Clerk Authentication
  - Gemini AI API
  - ElevenLabs API
  - Workable Jobs API
  - Piston Code API

- **Data Flows Between Processes**:
  - Authentication tokens
  - Resume data (JSON)
  - Job search parameters and results
  - Interview transcripts and feedback
  - Code execution requests and outputs
  - User preferences and settings

## Technical Specifications for Diagrams

### Data Flow Notation

- Use standard DFD symbols (circles for processes, rectangles for external entities, open rectangles for data stores)
- Label all data flows with descriptive names
- Include data flow directions (arrows)
- Number processes sequentially (1.0, 2.0, etc.)

### Key Data Elements to Include

- **Authentication Data**: User credentials, JWT tokens, user profiles
- **Resume Data**: Personal info, experience, education, skills, templates
- **Job Data**: Search filters, job listings, company information
- **Interview Data**: Questions, answers, audio streams, evaluation scores
- **Code Data**: Source code, language, input/output, execution results
- **Settings Data**: User preferences, themes, notification settings

### Real-time Communication Flows

- Socket.IO connections for interview sessions
- WebSocket data flows for real-time audio and feedback
- State synchronization between frontend and backend

### Error Handling Flows

- Authentication failures
- API timeout handling
- Audio generation errors
- Code execution failures

## Additional Context

- The system uses a monorepo structure with Turbo
- Frontend uses Zustand for state management
- Backend uses Express with TypeScript
- Database operations through Prisma ORM
- Real-time features via Socket.IO
- External API integrations for AI and job services

Please create both Level 0 and Level 1 DFS diagrams following standard DFD conventions, ensuring all major data flows, processes, and external systems are properly represented with clear labeling and appropriate data flow directions.
