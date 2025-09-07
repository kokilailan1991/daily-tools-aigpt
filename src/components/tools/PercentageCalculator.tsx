import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function PercentageCalculator() {
  const [value, setValue] = useState('')
  const [percentage, setPercentage] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculatePercentage = () => {
    const v = parseFloat(value)
    const p = parseFloat(percentage)
    
    if (!isNaN(v) && !isNaN(p)) {
      setResult((v * p) / 100)
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Value</label>
          <Input
            type="number"
            placeholder="100"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Percentage (%)</label>
          <Input
            type="number"
            placeholder="20"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
          />
        </div>
      </div>
      
      <Button onClick={calculatePercentage} className="w-full">
        Calculate
      </Button>
      
      {result !== null && (
        <Card>
          <CardHeader>
            <CardTitle>Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {result.toFixed(2)}
              </div>
              <div className="text-sm text-gray-600">
                {percentage}% of {value} = {result.toFixed(2)}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
