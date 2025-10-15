'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <div className="min-h-screen">
        <section className="relative px-4 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8">
              {requirements.name}
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              {requirements.description}
            </p>
            <Button size="lg">Get Started</Button>
          </div>
        </section>
      


      <section className="px-4 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(requirements.features)
              .filter(([_, enabled]) => enabled)
              .map(([feature, _], i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{feature}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Advanced {feature} functionality built for {requirements.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    


      <section className="px-4 py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands using {requirements.name} today.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}