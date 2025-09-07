import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

export default function JSONFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      setError('')
    } catch (err) {
      setError('Invalid JSON: ' + (err as Error).message)
      setOutput('')
    }
  }

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
      setError('')
    } catch (err) {
      setError('Invalid JSON: ' + (err as Error).message)
      setOutput('')
    }
  }

  const validateJSON = () => {
    try {
      JSON.parse(input)
      setError('')
      alert('Valid JSON!')
    } catch (err) {
      setError('Invalid JSON: ' + (err as Error).message)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">JSON Input</label>
        <textarea
          className="w-full h-40 px-3 py-2 border border-input bg-background rounded-md text-sm font-mono resize-none"
          placeholder="Enter JSON to format..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="flex gap-2">
        <Button onClick={formatJSON}>Format</Button>
        <Button onClick={minifyJSON} variant="outline">Minify</Button>
        <Button onClick={validateJSON} variant="outline">Validate</Button>
      </div>

      {error && (
        <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-md">
          {error}
        </div>
      )}
      
      {output && (
        <Card>
          <CardHeader>
            <CardTitle>Formatted JSON</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
              <pre className="whitespace-pre-wrap text-sm font-mono overflow-x-auto">{output}</pre>
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
