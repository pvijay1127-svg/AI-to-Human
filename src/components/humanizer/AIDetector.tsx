'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { AlertCircle, CheckCircle, Upload } from 'lucide-react'

interface DetectionResult {
 success: boolean
 isLikelyAI?: boolean
 confidence?: number
 patterns?: string[]
 humanScore?: number
 suggestions?: string[]
}

export default function AIDetector() {
 const [inputText, setInputText] = useState('')
 const [result, setResult] = useState<DetectionResult | null>(null)
 const [isProcessing, setIsProcessing] = useState(false)

 const handleDetect = async () => {
   if (!inputText.trim()) return

   setIsProcessing(true)
   try {
     const response = await fetch('/api/detect', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         text: inputText,
       }),
     })

     const data = await response.json()
     setResult(data)
   } catch (error) {
     console.error('Detection failed:', error)
   } finally {
     setIsProcessing(false)
   }
 }

 const getConfidenceColor = (confidence: number) => {
   if (confidence > 0.7) return 'text-red-600'
   if (confidence > 0.4) return 'text-yellow-600'
   return 'text-green-600'
 }

 const getConfidenceBgColor = (confidence: number) => {
   if (confidence > 0.7) return 'bg-red-100'
   if (confidence > 0.4) return 'bg-yellow-100'
   return 'bg-green-100'
 }

 return (
   <div className="space-y-6">
     <Card>
       <CardHeader>
         <CardTitle className="flex items-center gap-2">
           🔍 AI Content Detection
         </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
         <Textarea
           placeholder="Paste text to analyze for AI generation patterns..."
           value={inputText}
           onChange={(e) => setInputText(e.target.value)}
           className="min-h-[150px] resize-none"
         />

         <Button
           onClick={handleDetect}
           disabled={!inputText.trim() || isProcessing}
           className="w-full"
           size="lg"
         >
           {isProcessing ? 'Analyzing...' : '🔍 Analyze Text'}
         </Button>
       </CardContent>
     </Card>

     {result && (
       <Card>
         <CardHeader>
           <CardTitle className="flex items-center gap-2">
             📊 Analysis Results
           </CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
           <div className="text-center">
             <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getConfidenceBgColor(result.confidence || 0)}`}>
               {result.isLikelyAI ? (
                 <AlertCircle className="w-5 h-5 text-red-600" />
               ) : (
                 <CheckCircle className="w-5 h-5 text-green-600" />
               )}
               <span className={`font-semibold ${getConfidenceColor(result.confidence || 0)}`}>
                 {result.isLikelyAI ? 'Likely AI-Generated' : 'Likely Human-Written'}
               </span>
             </div>

             <div className="mt-4">
               <div className="flex justify-between text-sm mb-2">
                 <span>AI Confidence</span>
                 <span>{Math.round((result.confidence || 0) * 100)}%</span>
               </div>
               <Progress value={(result.confidence || 0) * 100} className="w-full" />
             </div>

             {result.humanScore && (
               <div className="mt-4">
                 <div className="flex justify-between text-sm mb-2">
                   <span>Human-like Score</span>
                   <span>{result.humanScore}%</span>
                 </div>
                 <Progress value={result.humanScore} className="w-full" />
               </div>
             )}
           </div>

           {result.patterns && result.patterns.length > 0 && (
             <div>
               <h4 className="font-semibold mb-3">Detected Patterns:</h4>
               <div className="flex flex-wrap gap-2">
                 {result.patterns.map((pattern, index) => (
                   <Badge key={index} variant="outline">
                     {pattern}
                   </Badge>
                 ))}
               </div>
             </div>
           )}

           {result.suggestions && result.suggestions.length > 0 && (
             <div>
               <h4 className="font-semibold mb-3">Suggestions to Improve:</h4>
               <ul className="space-y-2">
                 {result.suggestions.map((suggestion, index) => (
                   <li key={index} className="flex items-start gap-2">
                     <span className="text-blue-600 mt-1">•</span>
                     <span className="text-sm">{suggestion}</span>
                   </li>
                 ))}
               </ul>
             </div>
           )}
         </CardContent>
       </Card>
     )}
   </div>
 )
}