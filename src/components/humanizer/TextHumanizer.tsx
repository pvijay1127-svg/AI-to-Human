'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

export default function TextHumanizer() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleHumanize = async () => {
    setIsProcessing(true)
    // Implementation would go here
    setTimeout(() => {
      setOutputText('✨ Humanized: ' + inputText)
      setIsProcessing(false)
    }, 1000)
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-2">Transform Your Text</h2>
        <p className="text-purple-600">Convert AI-generated content into natural, engaging writing</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📝</span>
            <h3 className="text-xl font-semibold text-purple-800">Original Text</h3>
          </div>
          <Textarea
            placeholder="Paste your AI-generated text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[200px]"
          />
          <Button
            onClick={handleHumanize}
            className="w-full"
            variant="primary"
            size="lg"
            disabled={isProcessing || !inputText.trim()}
          >
            {isProcessing ? '🔄 Processing...' : '✨ Humanize Text'}
          </Button>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">✨</span>
            <h3 className="text-xl font-semibold text-purple-800">Humanized Result</h3>
          </div>
          <Textarea
            value={outputText}
            className="min-h-[200px]"
            readOnly
            placeholder="Your humanized text will appear here..."
          />
          {outputText && (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigator.clipboard.writeText(outputText)}
            >
              📋 Copy Result
            </Button>
          )}
        </Card>
      </div>
    </div>
  )
}