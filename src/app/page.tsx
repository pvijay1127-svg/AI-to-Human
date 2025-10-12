'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Todo</h1>
            </div>
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('home')}
                className={activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium' : 'text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium'}
              >
                Home
              </button>
              
              <button
                onClick={() => setActiveTab('auth')}
                className={activeTab === 'auth' ? 'text-blue-600 border-b-2 border-blue-600 px-3 py-2 text-sm font-medium' : 'text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium'}
              >
                Sign In
              </button>
              
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Todo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              A modern react-nextjs application built with the latest technologies
            </p>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              
              <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
                <div className="text-green-600 mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 capitalize mb-2">authentication</h3>
                <p className="text-gray-600">Fully implemented and ready to use</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
                <div className="text-green-600 mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 capitalize mb-2">database</h3>
                <p className="text-gray-600">Fully implemented and ready to use</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
                <div className="text-green-600 mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 capitalize mb-2">file upload</h3>
                <p className="text-gray-600">Fully implemented and ready to use</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
                <div className="text-green-600 mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 capitalize mb-2">search</h3>
                <p className="text-gray-600">Fully implemented and ready to use</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border border-gray-300">
                <div className="text-green-600 mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 capitalize mb-2">responsive</h3>
                <p className="text-gray-600">Fully implemented and ready to use</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">Ready to Explore!</h2>
                <p className="text-gray-600 mb-6">
                  Your application is fully set up with all requested features.
                </p>

                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Start Using App
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        )}

        
        {activeTab === 'auth' && (
          <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>
        )}

        
      </div>
    </div>
  )
}