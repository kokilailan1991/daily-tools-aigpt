import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function ImageResizer() {
  const [file, setFile] = useState<File | null>(null)
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile)
    } else {
      setResult('Please select a valid image file.')
    }
  }

  const resizeImage = () => {
    if (!file) {
      setResult('Please select an image file first.')
      return
    }
    
    if (!width || !height) {
      setResult('Please enter both width and height.')
      return
    }
    
    setResult(`Image resizing to ${width}x${height} requires canvas manipulation. This is a demo interface.`)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          📏 Resize images to specific dimensions
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Width (px)</label>
                <Input
                  type="number"
                  placeholder="800"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Height (px)</label>
                <Input
                  type="number"
                  placeholder="600"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>

            <Button 
              onClick={resizeImage}
              disabled={!file || !width || !height}
              className="w-full"
            >
              Resize Image
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
