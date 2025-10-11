'use client'

import { useState } from 'react'
import TextHumanizer from '@/components/humanizer/TextHumanizer'
import AIDetector from '@/components/humanizer/AIDetector'

export default function Home() {
 const [activeTab, setActiveTab] = useState<'humanize' | 'detect'>('humanize')

 return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
     <div className="container mx-auto px-4 py-8">
       <div className="text-center mb-8">
         <h1 className="text-4xl font-bold text-gray-900 mb-2">
           {config.name || 'AI Humanizer'}
         </h1>
         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
           Transform AI-generated text into natural, human-like writing and detect AI content with advanced algorithms
         </p>
       </div>

       <div className="max-w-6xl mx-auto">
         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
           <div className="flex border-b">
             <button
               onClick={() => setActiveTab('humanize')}
               className={`flex-1 py-4 px-6 text-lg font-semibold transition-colors ${
                 activeTab === 'humanize'
                   ? 'bg-blue-600 text-white'
                   : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
               }`}
             >
               🔄 Humanize Text
             </button>
             <button
               onClick={() => setActiveTab('detect')}
               className={`flex-1 py-4 px-6 text-lg font-semibold transition-colors ${
                 activeTab === 'detect'
                   ? 'bg-blue-600 text-white'
                   : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
               }`}
             >
               🔍 Detect AI Content
             </button>
           </div>

           <div className="p-6">
             {activeTab === 'humanize' ? (
               <TextHumanizer />
             ) : (
               <AIDetector />
             )}
           </div>
         </div>

         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-lg shadow-md">
             <div className="text-2xl mb-3">🚀</div>
             <h3 className="text-lg font-semibold mb-2">Instant Processing</h3>
             <p className="text-gray-600">Get humanized text in seconds with our advanced AI algorithms</p>
           </div>

           <div className="bg-white p-6 rounded-lg shadow-md">
             <div className="text-2xl mb-3">🔒</div>
             <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
             <p className="text-gray-600">Your text is processed securely and deleted after conversion</p>
           </div>

           <div className="bg-white p-6 rounded-lg shadow-md">
             <div className="text-2xl mb-3">🌍</div>
             <h3 className="text-lg font-semibold mb-2">Multi-Language</h3>
             <p className="text-gray-600">Support for 50+ languages with accurate humanization</p>
           </div>
         </div>
       </div>
     </div>
   </div>
 )
}