import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              hello app
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            
🎯 FULL APPLICATION GENERATION REQUEST

📱 Application Name: hello app
📝 Description: Goal
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

🏗️ Generation Mode: REPLACE existing structure
🔧 Tech Stack: react-nextjs
💾 Database: supabase
🎨 Styling: tailwindcss
🔐 Authentication: Included



📋 REQUIREMENTS:
1. Complete, production-ready application
2. Modern, responsive design
3. Proper error handling and validation
4. Clean, maintainable code structure
5. Documentation and comments
6. TypeScript support (if selected)
7. Database integration (if selected)
8. Authentication system (if selected)


⚠️ REPLACE MODE: This will generate a completely new application structure.
The existing project files will be replaced with the new application.

          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
            
            <Link href="/login">
              <Button variant="outline" size="lg">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="capitalize group-hover:text-blue-600 transition-colors">
                  authentication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced authentication functionality to enhance your experience.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="capitalize group-hover:text-blue-600 transition-colors">
                  database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced database functionality to enhance your experience.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="capitalize group-hover:text-blue-600 transition-colors">
                  crud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced crud functionality to enhance your experience.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="capitalize group-hover:text-blue-600 transition-colors">
                  file Upload
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced fileUpload functionality to enhance your experience.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="capitalize group-hover:text-blue-600 transition-colors">
                  animations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced animations functionality to enhance your experience.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="capitalize group-hover:text-blue-600 transition-colors">
                  forms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced forms functionality to enhance your experience.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}