'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function FileUpload() {
  const [files, setFiles] = useState<File[]>([])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(e.target.files || [])
    setFiles(uploadedFiles)
  }

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
      <input
        type="file"
        multiple
        onChange={handleFileUpload}
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <p>Click to upload or drag and drop files here</p>
      </label>

      {files.length > 0 && (
        <div className="mt-4">
          <p>Uploaded {files.length} file(s)</p>
        </div>
      )}
    </div>
  )
}