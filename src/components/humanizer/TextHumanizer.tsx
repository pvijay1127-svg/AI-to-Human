'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Copy, Download, RotateCcw } from 'lucide-react'

interface HumanizationResult {
 success: boolean
 humanizedText?: string
 originalText?: string
 processingTime?: number
 improvements?: string[]
}

export default function TextHumanizer() {
 const [inputText, setInputText] = useState('')
 const [outputText, setOutputText] = useState('')
 const [isProcessing, setIsProcessing] = useState(false)
 const [creativityLevel, setCreativityLevel] = useState('medium')
 const [language, setLanguage] = useState('english')
 const [result, setResult] = useState<HumanizationResult | null>(null)

 const handleHumanize = async () => {
   if (!inputText.trim()) return

   setIsProcessing(true)
   try {
     const response = await fetch('/api/humanize', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         text: inputText,
         creativityLevel,
         language,
       }),
     })

     const data = await response.json()
     setResult(data)
     setOutputText(data.humanizedText || '')
   } catch (error) {
     console.error('Humanization failed:', error)
   } finally {
     setIsProcessing(false)
   }
 }

 const copyToClipboard = async () => {
   try {
     await navigator.clipboard.writeText(outputText)
   } catch (error) {
     console.error('Failed to copy:', error)
   }
 }

 const downloadText = () => {
   const blob = new Blob([outputText], { type: 'text/plain' })
   const url = URL.createObjectURL(blob)
   const a = document.createElement('a')
   a.href = url
   a.download = 'humanized-text.txt'
   document.body.appendChild(a)
   a.click()
   document.body.removeChild(a)
   URL.revokeObjectURL(url)
 }

 return (
   <div className="space-y-6">
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       <Card>
         <CardHeader>
           <CardTitle className="flex items-center gap-2">
             📝 Original Text
           </CardTitle>
         </CardHeader>
         <CardContent className="space-y-4">
           <Textarea
             placeholder="Paste your AI-generated text here..."
             value={inputText}
             onChange={(e) => setInputText(e.target.value)}
             className="min-h-[200px] resize-none"
           />

           <div className="flex gap-4">
             <Select value={creativityLevel} onValueChange={setCreativityLevel}>
               <SelectTrigger className="w-[180px]">
                 <SelectValue placeholder="Creativity Level" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="low">Conservative</SelectItem>
                 <SelectItem value="medium">Balanced</SelectItem>
                 <SelectItem value="high">Creative</SelectItem>
               </SelectContent>
             </Select>

             <Select value={language} onValueChange={setLanguage}>
               <SelectTrigger className="w-[180px]">
                 <SelectValue placeholder="Language" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="english">English</SelectItem>
                 <SelectItem value="spanish">Spanish</SelectItem>
                 <SelectItem value="french">French</SelectItem>
                 <SelectItem value="german">German</SelectItem>
                 <SelectItem value="chinese">Chinese</SelectItem>
               </SelectContent>
             </Select>
           </div>

           <Button
             onClick={handleHumanize}
             disabled={!inputText.trim() || isProcessing}
             className="w-full"
             size="lg"
           >
             {isProcessing ? 'Humanizing...' : '🔄 Humanize Text'}
           </Button>
         </CardContent>
       </Card>

       <Card>
         <CardHeader>
           <CardTitle className="flex items-center justify-between">
             ✨ Humanized Text
             {outputText && (
               <div className="flex gap-2">
                 <Button variant="outline" size="sm" onClick={copyToClipboard}>
                   <Copy className="w-4 h-4" />
                 </Button>
                 <Button variant="outline" size="sm" onClick={downloadText}>
                   <Download className="w-4 h-4" />
                 </Button>
               </div>
             )}
           </CardTitle>
         </CardHeader>
         <CardContent>
           <Textarea
             placeholder="Humanized text will appear here..."
             value={outputText}
             onChange={(e) => setOutputText(e.target.value)}
             className="min-h-[200px] resize-none"
             readOnly
           />

           {result?.improvements && (
             <div className="mt-4">
               <h4 className="font-semibold mb-2">Improvements Made:</h4>
               <div className="flex flex-wrap gap-2">
                 {result.improvements.map((improvement, index) => (
                   <Badge key={index} variant="secondary">
                     {improvement}
                   </Badge>
                 ))}
               </div>
             </div>
           )}
         </CardContent>
       </Card>
     </div>

     {result?.processingTime && (
       <Card>
         <CardContent className="pt-6">
           <p className="text-sm text-gray-600 text-center">
             Processed in {result.processingTime}ms
           </p>
         </CardContent>
       </Card>
     )}
   </div>
 )
}