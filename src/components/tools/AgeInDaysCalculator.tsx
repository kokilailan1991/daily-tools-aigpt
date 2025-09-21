import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function AgeInDaysCalculator() {
  const [birthDate, setBirthDate] = useState('')
  const [result, setResult] = useState<{
    days: number
    hours: number
    minutes: number
    weeks: number
    months: number
    years: number
  } | null>(null)

  const calculateAge = () => {
    if (!birthDate) return

    const birth = new Date(birthDate)
    const today = new Date()
    
    if (birth > today) {
      alert('Birth date cannot be in the future!')
      return
    }

    const diffInMs = today.getTime() - birth.getTime()
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60))
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60))
    
    const years = today.getFullYear() - birth.getFullYear()
    const months = years * 12 + (today.getMonth() - birth.getMonth())
    const weeks = Math.floor(diffInDays / 7)

    setResult({
      days: diffInDays,
      hours: diffInHours,
      minutes: diffInMinutes,
      weeks,
      months,
      years
    })
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          🎂 Calculate your age in days, hours, minutes and more
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <label className="block text-sm font-medium mb-2">Birth Date</label>
        <Input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full"
        />
      </div>

      <Button 
        onClick={calculateAge}
        className="w-full max-w-md mx-auto block"
        disabled={!birthDate}
      >
        Calculate Age
      </Button>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Your Age Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{result.years}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{result.months}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Months</div>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-900 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{result.weeks}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Weeks</div>
              </div>
              <div className="text-center p-4 bg-orange-50 dark:bg-orange-900 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{result.days.toLocaleString()}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Days</div>
              </div>
              <div className="text-center p-4 bg-red-50 dark:bg-red-900 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{result.hours.toLocaleString()}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Hours</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">{result.minutes.toLocaleString()}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Minutes</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
