'use client'

import { useState } from 'react'


export default function LoginForm() {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [isLoading, setIsLoading] = useState(false)
 const [message, setMessage] = useState('')
 const [isSignUp, setIsSignUp] = useState(false)

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault()
   setIsLoading(true)
   setMessage('')

   try {
     
     // Demo authentication - replace with real implementation
     if (email === 'demo@example.com' && password === 'password') {
       localStorage.setItem('user', JSON.stringify({ email, name: 'Demo User' }))
       setMessage('Signed in successfully!')
       window.location.href = '/dashboard'
     } else {
       throw new Error('Invalid credentials')
     }
     
   } catch (error) {
     console.error('Auth error:', error)
     setMessage(error instanceof Error ? error.message : 'Authentication failed')
   } finally {
     setIsLoading(false)
   }
 }

 return (
   <div className="max-w-md mx-auto mt-8">
     <div className="bg-white p-8 rounded-lg shadow-md">
       <h2 className="text-2xl font-bold text-center mb-6">
         {isSignUp ? 'Sign Up' : 'Sign In'}
       </h2>

       {message && (
         <div className={`mb-4 p-3 rounded ${message.includes('success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
           {message}
         </div>
       )}

       <form onSubmit={handleSubmit} className="space-y-4">
         <div>
           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
             Email
           </label>
           <input
             type="email"
             id="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
             required
           />
         </div>

         <div>
           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
             Password
           </label>
           <input
             type="password"
             id="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
             required
             minLength={6}
           />
         </div>

         <button
           type="submit"
           disabled={isLoading}
           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
         >
           {isLoading ? (isSignUp ? 'Creating Account...' : 'Signing in...') : (isSignUp ? 'Sign Up' : 'Sign In')}
         </button>
       </form>

       <div className="mt-4 text-center">
         <button
           type="button"
           onClick={() => setIsSignUp(!isSignUp)}
           className="text-blue-600 hover:underline"
         >
           {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
         </button>
       </div>

       
       <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
         <p className="font-semibold">Demo Credentials:</p>
         <p>Email: demo@example.com</p>
         <p>Password: password</p>
       </div>
       
     </div>
   </div>
 )
}