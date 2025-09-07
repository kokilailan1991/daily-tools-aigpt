import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('')
  const [age, setAge] = useState<{
    years: number
    months: number
    days: number
    totalDays: number
  } | null>(null)

  const calculateAge = () => {
    const birth = new Date(birthDate)
    const today = new Date()
    
    if (birth > today) {
      alert('Birth date cannot be in the future')
      return
    }
    
    let years = today.getFullYear() - birth.getFullYear()
    let months = today.getMonth() - birth.getMonth()
    let days = today.getDate() - birth.getDate()
    
    if (days < 0) {
      months--
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }
    
    if (months < 0) {
      years--
      months += 12
    }
    
    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24))
    
    setAge({ years, months, days, totalDays })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Birth Date</label>
        <Input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      
      <Button onClick={calculateAge} className="w-full">
        Calculate Age
      </Button>
      
      {age && (
        <Card>
          <CardHeader>
            <CardTitle>Your Age</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{age.years}</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{age.months}</div>
                <div className="text-sm text-gray-600">Months</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{age.days}</div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{age.totalDays.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Days</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
