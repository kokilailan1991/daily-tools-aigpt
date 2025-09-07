import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function Base64Converter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('encode')

  const convert = () => {
    try {
      if (mode === 'encode') {
        setOutput(btoa(input))
      } else {
        setOutput(atob(input))
      }
    } catch (error) {
      setOutput('Error: Invalid input')
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Mode</label>
        <select
          className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="encode">Encode to Base64</option>
          <option value="decode">Decode from Base64</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          {mode === 'encode' ? 'Text to Encode' : 'Base64 to Decode'}
        </label>
        <Input
          placeholder={mode === 'encode' ? 'Enter text to encode' : 'Enter base64 string'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      
      <Button onClick={convert} className="w-full">
        {mode === 'encode' ? 'Encode' : 'Decode'}
      </Button>
      
      {output && (
        <Card>
          <CardHeader>
            <CardTitle>Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
              <pre className="whitespace-pre-wrap text-sm">{output}</pre>
            </div>
            <Button
              variant="outline"
              className="w-full mt-3"
              onClick={() => navigator.clipboard.writeText(output)}
            >
              Copy Result
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
