'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import TextHumanizer from '@/components/humanizer/TextHumanizer'
import AIDetector from '@/components/humanizer/AIDetector'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'humanize' | 'detect'>('humanize')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              ✨ AI Humanizer
            </h1>
            <p className="text-xl md:text-2xl text-purple-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform AI-generated text into natural, human-like writing with advanced language processing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="xl"
                variant={activeTab === 'humanize' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('humanize')}
                className="text-lg px-8"
              >
                🔄 Humanize Text
              </Button>
              <Button
                size="xl"
                variant={activeTab === 'detect' ? 'primary' : 'outline'}
                onClick={() => setActiveTab('detect')}
                className="text-lg px-8"
              >
                🔍 Detect AI Content
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-purple-200/30 overflow-hidden">
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