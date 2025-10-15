import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Star, Zap } from 'lucide-react'

const plans = [
{
 name: 'Starter',
 price: 0,
 description: 'Perfect for individuals getting started',
 features: [
   'Up to 100 API requests/month',
   'Basic authentication',
   'Email support',
   'Standard features',
 ],
 limitations: [
   'Limited API access',
   'Basic support',
 ],
 popular: false,
},
{
 name: 'Pro',
 price: 29,
 description: 'Ideal for growing teams and businesses',
 features: [
   'Up to 10,000 API requests/month',
   'Advanced authentication',
   'Priority support',
   'All premium features',
   'Advanced analytics',
   'Custom integrations',
 ],
 limitations: [],
 popular: true,
},
{
 name: 'Enterprise',
 price: 99,
 description: 'For large organizations with custom needs',
 features: [
   'Unlimited API requests',
   'SSO authentication',
   '24/7 phone support',
   'All premium features',
   'Advanced analytics',
   'Custom integrations',
   'Dedicated account manager',
   'SLA guarantee',
 ],
 limitations: [],
 popular: false,
},
]

export default function PricingPage() {
return (
 <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
   {/* Header */}
   <section className="px-4 sm:px-6 lg:px-8 py-20 text-center">
     <div className="max-w-4xl mx-auto">
       <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">
         Simple, Transparent Pricing
       </Badge>

       <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
         Choose Your Plan
       </h1>

       <p className="text-xl text-gray-600 max-w-2xl mx-auto">
         Start free and scale as you grow. All plans include our core features with different usage limits.
       </p>
     </div>
   </section>

   {/* Pricing Cards */}
   <section className="px-4 sm:px-6 lg:px-8 pb-20">
     <div className="max-w-7xl mx-auto">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {plans.map((plan) => (
           <Card key={plan.name} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-2xl scale-105' : 'border border-gray-200'}`}>
             {plan.popular && (
               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                 <Badge className="bg-blue-500 text-white px-4 py-1">
                   <Star className="w-3 h-3 mr-1" />
                   Most Popular
                 </Badge>
               </div>
             )}

             <CardHeader className="text-center pb-8">
               <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
               <div className="mb-4">
                 <span className="text-4xl font-bold">
                   ${plan.price}
                 </span>
                 <span className="text-gray-600">/month</span>
               </div>
               <CardDescription className="text-base">
                 {plan.description}
               </CardDescription>
             </CardHeader>

             <CardContent className="space-y-6">
               <div className="space-y-3">
                 {plan.features.map((feature) => (
                   <div key={feature} className="flex items-center gap-3">
                     <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                     <span className="text-sm">{feature}</span>
                   </div>
                 ))}
               </div>

               {plan.limitations.length > 0 && (
                 <div className="space-y-2 pt-4 border-t">
                   <p className="text-sm font-medium text-gray-500">Limitations:</p>
                   {plan.limitations.map((limitation) => (
                     <div key={limitation} className="flex items-center gap-3">
                       <div className="w-5 h-5 rounded-full bg-gray-300 flex-shrink-0" />
                       <span className="text-sm text-gray-500">{limitation}</span>
                     </div>
                   ))}
                 </div>
               )}

               <Button
                 className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                 variant={plan.popular ? 'default' : 'outline'}
               >
                 {plan.price === 0 ? 'Get Started Free' : `Start ${plan.name} Trial`}
               </Button>
             </CardContent>
           </Card>
         ))}
       </div>
     </div>
   </section>

   {/* FAQ Section */}
   <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
     <div className="max-w-4xl mx-auto">
       <div className="text-center mb-16">
         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
           Frequently Asked Questions
         </h2>
       </div>

       <div className="space-y-8">
         <div className="border-b border-gray-200 pb-6">
           <h3 className="text-lg font-semibold text-gray-900 mb-2">
             Can I change my plan at any time?
           </h3>
           <p className="text-gray-600">
             Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.
           </p>
         </div>

         <div className="border-b border-gray-200 pb-6">
           <h3 className="text-lg font-semibold text-gray-900 mb-2">
             What payment methods do you accept?
           </h3>
           <p className="text-gray-600">
             We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.
           </p>
         </div>

         <div className="border-b border-gray-200 pb-6">
           <h3 className="text-lg font-semibold text-gray-900 mb-2">
             Is there a free trial?
           </h3>
           <p className="text-gray-600">
             Yes! All paid plans come with a 14-day free trial. No credit card required to start.
           </p>
         </div>

         <div className="border-b border-gray-200 pb-6">
           <h3 className="text-lg font-semibold text-gray-900 mb-2">
             What happens if I exceed my API limits?
           </h3>
           <p className="text-gray-600">
             You'll receive a notification when approaching limits. Overages are charged at $0.01 per request for Pro plans and included in Enterprise.
           </p>
         </div>
       </div>
     </div>
   </section>

   {/* CTA Section */}
   <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-600 to-purple-600">
     <div className="max-w-4xl mx-auto text-center">
       <Zap className="w-16 h-16 text-white mx-auto mb-6" />
       <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
         Ready to Get Started?
       </h2>
       <p className="text-xl text-blue-100 mb-8">
         Join thousands of developers who trust {requirements.name}
       </p>
       <div className="flex flex-col sm:flex-row gap-4 justify-center">
         <Link href="/signup">
           <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
             Start Free Trial
           </Button>
         </Link>
         <Link href="/contact">
           <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
             Contact Sales
           </Button>
         </Link>
       </div>
     </div>
   </section>
 </div>
)
}