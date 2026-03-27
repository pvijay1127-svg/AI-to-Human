import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Humaniser</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A modern web application built with Next.js
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">🔐 Authentication</h3>
          <p className="text-muted-foreground mb-4">Secure user authentication system</p>
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            View Login →
          </Link>
        </div>
        

        

        <div className="p-6 border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">🚀 Getting Started</h3>
          <p className="text-muted-foreground mb-4">Learn how to use this application</p>
          <Link href="/docs" className="text-blue-600 hover:underline">
            Read Docs →
          </Link>
        </div>
      </section>
    </div>
  )
}