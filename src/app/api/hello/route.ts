import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Hello from Free AI Humanizer  API!',
    timestamp: new Date().toISOString()
  })
}