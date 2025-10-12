'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function TextProcessor() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleProcess = async () => {
    if (!inputText.trim()) return

    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      const processed = inputText
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
      setOutputText(processed)
      setIsProcessing(false)
    }, 1000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">Input Text</h3>
        <Textarea
          placeholder="Enter your text to process..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="min-h-[200px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        <Button
          onClick={handleProcess}
          disabled={!inputText.trim() || isProcessing}
          className="w-full"
        >
          {isProcessing ? 'Processing...' : 'Process Text'}
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">Processed Text</h3>
        <Textarea
          value={outputText}
          className="min-h-[200px] border-gray-300 bg-gray-50"
          readOnly
          placeholder="Processed text will appear here..."
        />
      </div>
    </div>
  )
}