'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Upload, FileText, X } from 'lucide-react'

interface UploadedFile {
 file: File
 content: string
 id: string
}

export default function FileUpload() {
 const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
 const [isProcessing, setIsProcessing] = useState(false)

 const onDrop = useCallback(async (acceptedFiles: File[]) => {
   setIsProcessing(true)

   for (const file of acceptedFiles) {
     try {
       const content = await readFileContent(file)
       const uploadedFile: UploadedFile = {
         file,
         content,
         id: Math.random().toString(36).substr(2, 9)
       }
       setUploadedFiles(prev => [...prev, uploadedFile])
     } catch (error) {
       console.error('Error reading file:', error)
     }
   }

   setIsProcessing(false)
 }, [])

 const { getRootProps, getInputProps, isDragActive } = useDropzone({
   onDrop,
   accept: {
     'text/*': ['.txt', '.md', '.doc', '.docx'],
     'application/*': ['.pdf']
   },
   multiple: true
 })

 const readFileContent = (file: File): Promise<string> => {
   return new Promise((resolve, reject) => {
     const reader = new FileReader()
     reader.onload = (e) => resolve(e.target?.result as string)
     reader.onerror = (e) => reject(e)
     reader.readAsText(file)
   })
 }

 const removeFile = (id: string) => {
   setUploadedFiles(prev => prev.filter(file => file.id !== id))
 }

 const processFiles = async () => {
   // Process all uploaded files
   for (const uploadedFile of uploadedFiles) {
     console.log('Processing file:', uploadedFile.file.name)
     // Here you would call the humanization or detection API
   }
 }

 return (
   <div className="space-y-6">
     <Card>
       <CardHeader>
         <CardTitle className="flex items-center gap-2">
           <Upload className="w-5 h-5" />
           Upload Files
         </CardTitle>
       </CardHeader>
       <CardContent>
         <div
           {...getRootProps()}
           className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
             isDragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
           }`}
         >
           <input {...getInputProps()} />
           <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
           <p className="text-lg mb-2">
             {isDragActive ? 'Drop files here...' : 'Drag & drop files here, or click to select'}
           </p>
           <p className="text-sm text-gray-500">
             Supports .txt, .md, .doc, .docx, and .pdf files
           </p>
         </div>
       </CardContent>
     </Card>

     {uploadedFiles.length > 0 && (
       <Card>
         <CardHeader>
           <CardTitle className="flex items-center justify-between">
             <span className="flex items-center gap-2">
               <FileText className="w-5 h-5" />
               Uploaded Files ({uploadedFiles.length})
             </span>
             <Button onClick={processFiles} disabled={isProcessing}>
               {isProcessing ? 'Processing...' : 'Process All Files'}
             </Button>
           </CardTitle>
         </CardHeader>
         <CardContent>
           <div className="space-y-3">
             {uploadedFiles.map((uploadedFile) => (
               <div key={uploadedFile.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                 <div className="flex items-center gap-3">
                   <FileText className="w-5 h-5 text-gray-600" />
                   <div>
                     <p className="font-medium">{uploadedFile.file.name}</p>
                     <p className="text-sm text-gray-500">
                       {(uploadedFile.file.size / 1024).toFixed(1)} KB
                     </p>
                   </div>
                 </div>
                 <Button
                   variant="outline"
                   size="sm"
                   onClick={() => removeFile(uploadedFile.id)}
                 >
                   <X className="w-4 h-4" />
                 </Button>
               </div>
             ))}
           </div>
         </CardContent>
       </Card>
     )}
   </div>
 )
}