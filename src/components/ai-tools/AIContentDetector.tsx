'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'

export default function AIContentDetector() {
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState<{score: number, confidence: number} | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleDetect = async () => {
    if (!inputText.trim()) return

    setIsAnalyzing(true)

    // Simulate AI detection analysis
    setTimeout(() => {
      const words = inputText.split(' ').length
      const avgWordLength = inputText.replace(/\s/g, '').length / words
      const repetitivePatterns = (inputText.match(/the the|and and|or or/gi) || []).length

      // Simple heuristic scoring
      let aiScore = 0
      if (avgWordLength > 6) aiScore += 30
      if (repetitivePatterns > 0) aiScore += 20
      if (words > 100 && inputText.includes('leverage')) aiScore += 25
      if (inputText.includes('synergy') || inputText.includes('paradigm')) aiScore += 25

      aiScore = Math.min(aiScore, 100)

      setResult({
        score: aiScore,
        confidence: Math.floor(Math.random() * 20) + 80
      })
      setIsAnalyzing(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <Textarea
        placeholder="Paste text to analyze for AI generation patterns..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="min-h-[150px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
      />
      <Button
        onClick={handleDetect}
        disabled={!inputText.trim() || isAnalyzing}
        className="w-full"
      >
        {isAnalyzing ? 'Analyzing...' : 'Analyze Content'}
      </Button>

      {isAnalyzing && (
        <div className="text-center">
          <Progress value={66} className="w-full mb-2" />
          <p className="text-sm text-gray-600">Analyzing text patterns...</p>
        </div>
      )}

      {result && !isAnalyzing && (
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Analysis Result</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">AI Probability Score</span>
                <span className="text-sm text-gray-600">{result.score}%</span>
              </div>
              <Progress value={result.score} className="w-full" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Confidence</span>
              <span className="text-sm text-gray-600">{result.confidence}%</span>
            </div>
            <div className={`mt-4 p-3 rounded-lg ${result.score > 70 ? 'bg-red-50 border border-red-200' : result.score > 40 ? 'bg-yellow-50 border border-yellow-200' : 'bg-green-50 border border-green-200'}`}>
              <p className="text-sm">
                {result.score > 70 ? '⚠️ High likelihood of AI-generated content' :
                 result.score > 40 ? '🤔 Moderate likelihood of AI-generated content' :
                 '✅ Low likelihood of AI-generated content'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}