import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

export default function ImageConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [targetFormat, setTargetFormat] = useState('png')
  const [result, setResult] = useState<string | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile)
    } else {
      setResult('Please select a valid image file.')
    }
  }

  const convertImage = () => {
    if (!file) {
      setResult('Please select an image file first.')
      return
    }
    
    setResult(`Image conversion to ${targetFormat.toUpperCase()} requires canvas manipulation or libraries like browser-image-compression. This is a demo interface.`)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          🖼️ Convert images between JPG, PNG, and WebP formats
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload Image File</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            
            {file && (
              <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="text-sm">Selected: {file.name}</span>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Convert to:</label>
              <select 
                value={targetFormat}
                onChange={(e) => setTargetFormat(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
                <option value="webp">WebP</option>
              </select>
            </div>

            <Button 
              onClick={convertImage}
              disabled={!file}
              className="w-full"
            >
              Convert Image
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
