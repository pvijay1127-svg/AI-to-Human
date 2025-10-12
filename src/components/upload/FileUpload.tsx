'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<{[key: string]: number}>({})

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(e.target.files || [])
    setFiles(prev => [...prev, ...uploadedFiles])

    // Simulate upload progress
    uploadedFiles.forEach(file => {
      simulateUpload(file.name)
    })
  }

  const simulateUpload = (fileName: string) => {
    setUploadProgress(prev => ({ ...prev, [fileName]: 0 }))

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const current = prev[fileName] || 0
        if (current >= 100) {
          clearInterval(interval)
          return { ...prev, [fileName]: 100 }
        }
        return { ...prev, [fileName]: current + 10 }
      })
    }, 100)
  }

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles(prev => [...prev, ...droppedFiles])

    droppedFiles.forEach(file => {
      simulateUpload(file.name)
    })
  }, [])

  return (
    <div className="space-y-6">
      <div
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-200 ${
          isDragOver ? 'border-blue-400 bg-blue-50 scale-105' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="space-y-4">
            <div className="text-6xl">📁</div>
            <p className="text-xl font-semibold text-gray-900">
              {isDragOver ? 'Drop files here' : 'Click to upload or drag and drop files here'}
            </p>
            <p className="text-gray-600">
              Supports: Images, Documents, PDFs (Max 10MB each)
            </p>
          </div>
        </label>
      </div>

      {files.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Uploaded Files ({files.length})</h3>
          {files.map((file, index) => (
            <div key={index} className="glass p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">
                    {file.type.startsWith('image/') ? '🖼️' : '📄'}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{file.name}</p>
                    <p className="text-sm text-gray-600">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  {uploadProgress[file.name] === 100 ? '✅ Complete' : '⏳ Uploading...'}
                </div>
              </div>
              {uploadProgress[file.name] < 100 && (
                <Progress value={uploadProgress[file.name]} className="w-full" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}