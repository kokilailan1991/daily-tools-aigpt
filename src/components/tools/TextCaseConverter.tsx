import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function TextCaseConverter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const convertCase = (type: string) => {
    switch (type) {
      case 'uppercase':
        setOutput(input.toUpperCase())
        break
      case 'lowercase':
        setOutput(input.toLowerCase())
        break
      case 'capitalize':
        setOutput(input.replace(/\b\w/g, l => l.toUpperCase()))
        break
      case 'camelcase':
        setOutput(input.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
          return index === 0 ? word.toLowerCase() : word.toUpperCase()
        }).replace(/\s+/g, ''))
        break
      case 'snakecase':
        setOutput(input.replace(/\W+/g, ' ').split(/ |\B(?=[A-Z])/).map(word => word.toLowerCase()).join('_'))
        break
      case 'kebabcase':
        setOutput(input.replace(/\W+/g, ' ').split(/ |\B(?=[A-Z])/).map(word => word.toLowerCase()).join('-'))
        break
      default:
        setOutput(input)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Text to Convert</label>
        <Input
          placeholder="Enter text to convert"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <Button variant="outline" onClick={() => convertCase('uppercase')}>
          UPPERCASE
        </Button>
        <Button variant="outline" onClick={() => convertCase('lowercase')}>
          lowercase
        </Button>
        <Button variant="outline" onClick={() => convertCase('capitalize')}>
          Capitalize
        </Button>
        <Button variant="outline" onClick={() => convertCase('camelcase')}>
          camelCase
        </Button>
        <Button variant="outline" onClick={() => convertCase('snakecase')}>
          snake_case
        </Button>
        <Button variant="outline" onClick={() => convertCase('kebabcase')}>
          kebab-case
        </Button>
      </div>
      
      {output && (
        <Card>
          <CardHeader>
            <CardTitle>Converted Text</CardTitle>
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
