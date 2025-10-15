# hello app

Goal
Create a high-quality hello app with modern React architecture, comprehensive testing, and production-ready features. The devAgent must execute tasks in queue order (1 → 6). After all tasks complete and pass validations, open a Pull Request with a clear title and description.

Tech stack & requirements
- React 18+ with TypeScript and modern patterns
- Component-based architecture with reusability
- Responsive design with mobile-first approach
- State management with modern hooks/context
- Form handling with validation
- API integration with error handling
- Loading states and user feedback
- Accessibility compliance (WCAG 2.1)

Core Features:
1. Project Initialization
  - Set up React + TypeScript project structure
  - Configure development tools and scripts
  - Set up styling framework (Tailwind CSS preferred)
  - Add linting and formatting configuration

2. Core Application Features
  - Implement main application functionality based on "hello app"
  - Create reusable components and utilities
  - Add state management for application data
  - Implement responsive layouts and navigation

3. User Interface Enhancement
  - Add interactive components and forms
  - Implement loading states and error boundaries
  - Add mobile-optimized touch interactions
  - Create smooth animations and transitions

4. API Integration & Data Management
  - Set up API client for data fetching
  - Implement error handling and retry logic
  - Add data caching and state management
  - Create data transformation utilities

5. Testing Strategy
  - Write unit tests for components and utilities
  - Add integration tests for API interactions
  - Implement E2E tests for critical user flows
  - Add accessibility and performance testing

6. Performance & Quality Assurance
  - Optimize bundle size and loading performance
  - Add code splitting and lazy loading
  - Set up monitoring and error tracking
  - Create comprehensive documentation

Quality Gates:
- All tests passing with 80%+ coverage
- No ESLint errors or warnings
- TypeScript compilation without errors
- Accessibility audit passing
- Performance budget compliance
- Responsive design validation

Developer ergonomics:
- Create feature branch with descriptive name
- Atomic commits with clear messages
- Comprehensive PR description
- Add appropriate labels and reviewers
- Include setup and deployment instructions

Please implement this hello app following modern React best practices and ensure all features are thoroughly tested and documented.

## 🚀 Features

- Database
- Crud
- Animations
- Forms
- Testing
- Deployment

## 🛠️ Tech Stack

- **Framework:** react
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Database:** Supabase


## 🏗️ Architecture

- **Project Type:** spa
- **Component Pattern:** atomic
- **State Management:** react-query
- **UI Library:** shadcn/ui components

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
hello-app/
├── src/
│   ├── components/     # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Utility functions
│   ├── App.tsx    # Main app component
│   └── main.tsx   # Entry point
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 🔧 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔐 Authentication

Authentication features are not enabled for this project.

## 📊 Database

This project uses Supabase as the backend database. The database integration includes:
- User authentication and session management
- Real-time subscriptions (if enabled)
- Row Level Security (RLS) policies
- Automatic API generation

## 🎨 Styling

This project uses Tailwind CSS for styling with:
- Responsive design utilities
- Dark mode support
- Custom animations and transitions
- shadcn/ui component library

## 🚢 Deployment

### Vercel (Recommended for Next.js)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The application can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if necessary
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team

---

Built with ❤️ using Next.js, TypeScript, and Supabase