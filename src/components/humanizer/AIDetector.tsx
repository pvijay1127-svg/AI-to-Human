'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AIDetector() {
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState<{score: number, confidence: string} | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleDetect = async () => {
    setIsAnalyzing(true)
    // Implementation would go here
    setTimeout(() => {
      const score = Math.random() * 100
      setResult({
        score,
        confidence: score > 70 ? 'High' : score > 40 ? 'Medium' : 'Low'
      })
      setIsAnalyzing(false)
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-2">AI Content Detection</h2>
        <p className="text-purple-600">Analyze text to detect AI-generated content patterns</p>
      </div>

      <Card className="p-6 space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🔍</span>
          <h3 className="text-xl font-semibold text-purple-800">Text Analysis</h3>
        </div>

        <Textarea
          placeholder="Paste text to analyze for AI generation patterns..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="min-h-[150px]"
        />

        <Button
          onClick={handleDetect}
          className="w-full"
          variant="primary"
          size="lg"
          disabled={isAnalyzing || !inputText.trim()}
        >
          {isAnalyzing ? '🔄 Analyzing...' : '🔍 Analyze Content'}
        </Button>

        {result && (
          <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-purple-800">Analysis Result</h4>
              <Badge variant={result.confidence === 'High' ? 'error' : result.confidence === 'Medium' ? 'warning' : 'success'}>
                {result.confidence} Confidence
              </Badge>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm text-purple-600 mb-1">
                  <span>AI Detection Score</span>
                  <span>{Math.round(result.score)}%</span>
                </div>
                <div className="w-full bg-purple-200/60 rounded-full h-3 shadow-inner">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500 shadow-sm"
                    style={{ width: `${result.score}%` }}
                  ></div>
                </div>
              </div>

              <p className="text-sm text-purple-600">
                {result.score > 70
                  ? '⚠️ This text shows strong AI generation patterns.'
                  : result.score > 40
                  ? '🤔 This text may contain some AI-generated content.'
                  : '✅ This text appears to be human-written.'}
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}