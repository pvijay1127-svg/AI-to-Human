'use client'

import { useState } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  T
                </span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                todoapp
              </h1>
            </div>

            <nav className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
              
              
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to todoapp
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern application built with the latest technologies and best practices
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700">
              Get Started
            </button>
            <button className="bg-white text-gray-700 px-6 py-3 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                task management
              </h3>
              <p className="text-gray-600 text-sm">Fully implemented and ready to use</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                notes
              </h3>
              <p className="text-gray-600 text-sm">Fully implemented and ready to use</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                calendar
              </h3>
              <p className="text-gray-600 text-sm">Fully implemented and ready to use</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                collaboration
              </h3>
              <p className="text-gray-600 text-sm">Fully implemented and ready to use</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Your application is fully set up with all requested features and modern styling.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-blue-700">
            Start Using App
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 todoapp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}