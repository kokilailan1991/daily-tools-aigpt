import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function NumberToWords() {
  const [number, setNumber] = useState('')
  const [result, setResult] = useState('')

  const convertToWords = (num: number): string => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const thousands = ['', 'thousand', 'million', 'billion', 'trillion']

    if (num === 0) return 'zero'

    const convertHundreds = (n: number): string => {
      let result = ''
      if (n >= 100) {
        result += ones[Math.floor(n / 100)] + ' hundred'
        n %= 100
        if (n > 0) result += ' '
      }
      if (n >= 20) {
        result += tens[Math.floor(n / 10)]
        n %= 10
        if (n > 0) result += '-' + ones[n]
      } else if (n >= 10) {
        result += teens[n - 10]
      } else if (n > 0) {
        result += ones[n]
      }
      return result
    }

    let result = ''
    let thousandIndex = 0

    while (num > 0) {
      const chunk = num % 1000
      if (chunk !== 0) {
        const chunkWords = convertHundreds(chunk)
        result = chunkWords + (thousandIndex > 0 ? ' ' + thousands[thousandIndex] : '') + (result ? ' ' + result : '')
      }
      num = Math.floor(num / 1000)
      thousandIndex++
    }

    return result
  }

  const handleConvert = () => {
    const num = parseInt(number)
    if (isNaN(num) || num < 0) {
      setResult('Please enter a valid positive number')
      return
    }
    if (num > 999999999999) {
      setResult('Number too large')
      return
    }
    setResult(convertToWords(num))
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Number</label>
        <Input
          type="number"
          placeholder="123"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      
      <Button onClick={handleConvert} className="w-full">
        Convert to Words
      </Button>
      
      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md">
              <div className="text-lg font-medium capitalize">{result}</div>
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
