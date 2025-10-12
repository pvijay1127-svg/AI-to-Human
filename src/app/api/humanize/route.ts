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

    // Mock humanization - replace with actual AI service
    const humanizedText = 'Humanized: ' + text

    return NextResponse.json({
      success: true,
      humanizedText,
      originalText: text,
      processingTime: 500
    })

  } catch (error) {
    console.error('Humanization error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}