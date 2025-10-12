'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function TextHumanizer() {
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')

  const handleHumanize = async () => {
    // Implementation would go here
    setOutputText('Humanized: ' + inputText)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Original Text</h3>
        <Textarea
          placeholder="Paste your AI-generated text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="min-h-[200px]"
        />
        <Button onClick={handleHumanize} className="w-full mt-4">
          Humanize Text
        </Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Humanized Text</h3>
        <Textarea
          value={outputText}
          className="min-h-[200px]"
          readOnly
        />
      </div>
    </div>
  )
}