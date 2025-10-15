'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
      } else {
        router.push('/login')
      }
      setIsLoading(false)
    }

    getUser()
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.email}</p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              Sign out
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to hello app</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                
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

              </CardDescription>
            </CardContent>
          </Card>

          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="capitalize">
                authentication
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access your authentication features and manage your data.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="capitalize">
                database
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access your database features and manage your data.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="capitalize">
                crud
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access your crud features and manage your data.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="capitalize">
                file Upload
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access your fileUpload features and manage your data.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="capitalize">
                animations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Access your animations features and manage your data.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}