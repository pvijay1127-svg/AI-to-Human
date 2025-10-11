import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
 try {
   const { text } = await request.json()

   if (!text || !text.trim()) {
     return NextResponse.json(
       { success: false, error: 'No text provided' },
       { status: 400 }
     )
   }

   // Mock AI detection - replace with actual detection algorithm
   const detectionResult = await mockDetectAI(text)

   return NextResponse.json(detectionResult)

 } catch (error) {
   console.error('Detection error:', error)
   return NextResponse.json(
     { success: false, error: 'Internal server error' },
     { status: 500 }
   )
 }
}

// Mock AI detection function - replace with actual detection service
async function mockDetectAI(text: string) {
 // Simulate processing delay
 await new Promise(resolve => setTimeout(resolve, 800))

 const patterns: string[] = []
 let score = 0

 // Simple pattern detection
 if (/\butilize\b|\bfacilitate\b|\bleverage\b/gi.test(text)) {
   patterns.push('Corporate/formal language patterns')
   score += 0.3
 }

 if (/\bin order to\b|\bdue to the fact\b/gi.test(text)) {
   patterns.push('Generic transitional phrases')
   score += 0.2
 }

 const wordCount = text.split(/\s+/).length
 const sentences = text.split(/[.!?]+/).length
 const avgSentenceLength = wordCount / sentences

 if (avgSentenceLength > 20) {
   patterns.push('Long, complex sentences')
   score += 0.25
 }

 const humanScore = Math.max(0, 100 - (score * 100))

 return {
   success: true,
   isLikelyAI: score > 0.4,
   confidence: Math.min(score, 1.0),
   patterns,
   humanScore: Math.round(humanScore),
   suggestions: [
     'Use more contractions (don\'t, can\'t, it\'s)',
     'Vary sentence length and structure',
     'Replace formal words with conversational alternatives'
   ]
 }
}