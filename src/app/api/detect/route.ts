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

    // Mock detection - replace with actual AI detection
    return NextResponse.json({
      success: true,
      isLikelyAI: false,
      confidence: 0.2,
      patterns: [],
      humanScore: 80
    })

  } catch (error) {
    console.error('Detection error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}