import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function DateDifferenceCalculator() {
  const [date1, setDate1] = useState('')
  const [date2, setDate2] = useState('')
  const [result, setResult] = useState<{
    days: number
    weeks: number
    months: number
    years: number
  } | null>(null)

  const calculateDifference = () => {
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
      alert('Please enter valid dates')
      return
    }
    
    const diffTime = Math.abs(d2.getTime() - d1.getTime())
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    // Approximate calculations
    const weeks = Math.floor(days / 7)
    const months = Math.floor(days / 30.44) // Average days per month
    const years = Math.floor(days / 365.25) // Account for leap years
    
    setResult({ days, weeks, months, years })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">First Date</label>
          <Input
            type="date"
            value={date1}
            onChange={(e) => setDate1(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Second Date</label>
          <Input
            type="date"
            value={date2}
            onChange={(e) => setDate2(e.target.value)}
          />
        </div>
      </div>
      
      <Button onClick={calculateDifference} className="w-full">
        Calculate Difference
      </Button>
      
      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Date Difference</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{result.days}</div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{result.weeks}</div>
                <div className="text-sm text-gray-600">Weeks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{result.months}</div>
                <div className="text-sm text-gray-600">Months</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">{result.years}</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
