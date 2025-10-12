'use client'

import { useState } from 'react'

export default function Home() {
 return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
     <div className="container mx-auto px-4 py-8">
       <div className="text-center mb-8">
         <h1 className="text-4xl font-bold text-gray-900 mb-2">
           Welcome to React Todo App
         </h1>
         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
           A modern react-nextjs application built with the latest technologies
         </p>
       </div>

       <div className="max-w-4xl mx-auto">
         <div className="bg-white rounded-xl shadow-lg p-8">
           <div className="text-center">
             <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
               <span className="text-3xl">🚀</span>
             </div>
             <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
             <p className="text-gray-600 mb-6">
               Your application is ready! Start building amazing features.
             </p>

             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
               
               <div className="bg-gray-50 rounded-lg p-4">
                 <h3 className="font-semibold text-gray-900 capitalize">authentication</h3>
                 <p className="text-sm text-gray-600">Feature included</p>
               </div>
               <div className="bg-gray-50 rounded-lg p-4">
                 <h3 className="font-semibold text-gray-900 capitalize">database</h3>
                 <p className="text-sm text-gray-600">Feature included</p>
               </div>
               <div className="bg-gray-50 rounded-lg p-4">
                 <h3 className="font-semibold text-gray-900 capitalize">file upload</h3>
                 <p className="text-sm text-gray-600">Feature included</p>
               </div>
               <div className="bg-gray-50 rounded-lg p-4">
                 <h3 className="font-semibold text-gray-900 capitalize">search</h3>
                 <p className="text-sm text-gray-600">Feature included</p>
               </div>
             </div>

             <div className="space-y-3">
               <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                 Get Started
               </button>
               
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 )
}