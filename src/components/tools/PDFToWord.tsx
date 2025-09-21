import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

export default function PDFToWord() {
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<string | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile)
    } else {
      setResult('Please select a valid PDF file.')
    }
  }

  const convertToWord = () => {
    if (!file) {
      setResult('Please select a PDF file first.')
      return
    }
    
    setResult('PDF to Word conversion requires specialized libraries like pdf2pic, mammoth, or backend services. This is a demo interface.')
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          📄 Convert PDF files to Word documents
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload PDF File</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            
            {file && (
              <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-sm">Selected: {file.name}</span>
              </div>
            )}

            <Button 
              onClick={convertToWord}
              disabled={!file}
              className="w-full"
            >
              Convert to Word
            </Button>

            {result && (
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">{result}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
