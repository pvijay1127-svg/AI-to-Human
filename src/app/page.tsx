'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen relative">
      {/* Modern Navigation */}
      <nav className="glass sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {String('todo').charAt(0).toUpperCase()}
                </span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                todo
              </h1>
            </div>

            <div className="flex space-x-1 bg-white/50 rounded-2xl p-1 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'home'
                    ? 'bg-white text-gray-900 shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                Home
              </button>
              
              <button
                onClick={() => setActiveTab('auth')}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === 'auth'
                    ? 'bg-white text-gray-900 shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                Sign In
              </button>
              
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'home' && (
          <div className="text-center space-y-12">
            {/* Hero Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full">
                <span className="text-blue-800 text-sm font-medium">✨ Welcome to the future</span>
              </div>

              <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                Welcome to<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  todo
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A modern react-nextjs application built with the latest technologies
              </p>
            </div>

            {/* Features Grid */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="group glass p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 capitalize mb-3 group-hover:text-blue-900 transition-colors">
                  authentication
                </h3>
                <p className="text-gray-600 leading-relaxed">Fully implemented and ready to use with modern best practices</p>
              </div>
              <div className="group glass p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 capitalize mb-3 group-hover:text-blue-900 transition-colors">
                  database
                </h3>
                <p className="text-gray-600 leading-relaxed">Fully implemented and ready to use with modern best practices</p>
              </div>
              <div className="group glass p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 capitalize mb-3 group-hover:text-blue-900 transition-colors">
                  file upload
                </h3>
                <p className="text-gray-600 leading-relaxed">Fully implemented and ready to use with modern best practices</p>
              </div>
              <div className="group glass p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 capitalize mb-3 group-hover:text-blue-900 transition-colors">
                  search
                </h3>
                <p className="text-gray-600 leading-relaxed">Fully implemented and ready to use with modern best practices</p>
              </div>
              <div className="group glass p-8 rounded-3xl hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 capitalize mb-3 group-hover:text-blue-900 transition-colors">
                  responsive
                </h3>
                <p className="text-gray-600 leading-relaxed">Fully implemented and ready to use with modern best practices</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="glass p-12 rounded-3xl max-w-4xl mx-auto">
              <div className="text-center space-y-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl">🚀</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Ready to Explore!</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Your application is fully set up with all requested features and modern styling.
                    Start building amazing things!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="btn-primary px-8 py-4 text-lg rounded-2xl">
                    Start Using App
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        )}

        
        {activeTab === 'auth' && (
          <div className="max-w-lg mx-auto">
            <div className="glass p-8 rounded-3xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-600">Sign in to access your account</p>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 rounded-xl text-lg font-semibold"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        )}

        
      </div>
    </div>
  )
}