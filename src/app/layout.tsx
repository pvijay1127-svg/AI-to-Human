import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'sfss',
  description: 'sfss - A modern web application built with Next.js',
  keywords: ['sfss', 'web application', 'next.js', 'react'],
  authors: [{ name: 'sfss Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white min-h-screen">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}