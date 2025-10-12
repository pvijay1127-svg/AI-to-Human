'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('process')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  F
                </span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Free AI Humanizer
              </h1>
            </div>

            
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('process')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'process'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Process Text
              </button>
              <button
                onClick={() => setActiveTab('detect')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'detect'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Detect AI
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Free AI Humanizer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI-powered text processing and analysis
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            
            {activeTab === 'process' ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Text Processing</h3>
                <p className="text-gray-600 mb-6">Transform AI-generated text into natural, human-like writing</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700">
                  Start Processing
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Detection</h3>
                <p className="text-gray-600 mb-6">Analyze text to detect AI-generated content</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700">
                  Start Detection
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}