'use client'

import { useState } from 'react'
import TextHumanizer from '@/components/humanizer/TextHumanizer'
import AIDetector from '@/components/humanizer/AIDetector'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'humanize' | 'detect'>('humanize')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg mb-6">
            <span className="text-2xl">✨</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            AI Humanizer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform AI-generated text into natural, human-like writing with our advanced humanization technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="flex border-b border-gray-200/50">
              <button
                onClick={() => setActiveTab('humanize')}
                className={`flex-1 py-5 px-8 text-lg font-semibold transition-all duration-300 ${
                  activeTab === 'humanize'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-[1.02]'
                    : 'bg-gray-50/80 text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700'
                }`}
              >
                <span className="mr-2">🔄</span>
                Humanize Text
              </button>
              <button
                onClick={() => setActiveTab('detect')}
                className={`flex-1 py-5 px-8 text-lg font-semibold transition-all duration-300 ${
                  activeTab === 'detect'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-[1.02]'
                    : 'bg-gray-50/80 text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700'
                }`}
              >
                <span className="mr-2">🔍</span>
                Detect AI Content
              </button>
            </div>

            <div className="p-8">
              {activeTab === 'humanize' ? (
                <TextHumanizer />
              ) : (
                <AIDetector />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}