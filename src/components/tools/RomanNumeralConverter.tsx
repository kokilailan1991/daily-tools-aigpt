import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function RomanNumeralConverter() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [mode, setMode] = useState('toRoman')

  const toRoman = (num: number): string => {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    
    let result = ''
    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        result += symbols[i]
        num -= values[i]
      }
    }
    return result
  }

  const toNumber = (roman: string): number => {
    const values: { [key: string]: number } = {
      'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }
    
    let result = 0
    for (let i = 0; i < roman.length; i++) {
      const current = values[roman[i]]
      const next = values[roman[i + 1]]
      
      if (next && current < next) {
        result -= current
      } else {
        result += current
      }
    }
    return result
  }

  const convert = () => {
    if (mode === 'toRoman') {
      const num = parseInt(input)
      if (isNaN(num) || num < 1 || num > 3999) {
        setResult('Please enter a number between 1 and 3999')
        return
      }
      setResult(toRoman(num))
    } else {
      const roman = input.toUpperCase()
      if (!/^[IVXLCDM]+$/.test(roman)) {
        setResult('Please enter a valid Roman numeral')
        return
      }
      setResult(toNumber(roman).toString())
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Conversion Mode</label>
        <select
          className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="toRoman">Number to Roman</option>
          <option value="toNumber">Roman to Number</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          {mode === 'toRoman' ? 'Number (1-3999)' : 'Roman Numeral'}
        </label>
        <Input
          placeholder={mode === 'toRoman' ? '123' : 'CXXIII'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      
      <Button onClick={convert} className="w-full">
        Convert
      </Button>
      
      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-center">
              <div className="text-2xl font-bold">{result}</div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-3"
              onClick={() => navigator.clipboard.writeText(result)}
            >
              Copy Result
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
