'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function AIDetector() {
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const handleDetect = async () => {
    // Implementation would go here
    setResult('Analysis: ' + inputText.substring(0, 50) + '...')
  }

  return (
    <div>
      <Textarea
        placeholder="Paste text to analyze for AI generation patterns..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="min-h-[150px]"
      />
      <Button onClick={handleDetect} className="w-full mt-4">
        Analyze Text
      </Button>

      {result && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}