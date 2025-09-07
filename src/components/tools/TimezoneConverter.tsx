import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const timezones = [
  'UTC', 'America/New_York', 'America/Los_Angeles', 'Europe/London',
  'Europe/Paris', 'Asia/Tokyo', 'Asia/Shanghai', 'Asia/Kolkata',
  'Australia/Sydney', 'Pacific/Auckland'
]

export default function TimezoneConverter() {
  const [dateTime, setDateTime] = useState('')
  const [fromTimezone, setFromTimezone] = useState('UTC')
  const [toTimezone, setToTimezone] = useState('Asia/Kolkata')
  const [result, setResult] = useState('')

  const convertTimezone = () => {
    if (!dateTime) {
      alert('Please enter a date and time')
      return
    }
    
    try {
      const date = new Date(dateTime)
      if (isNaN(date.getTime())) {
        alert('Please enter a valid date and time')
        return
      }
      
      // Simple timezone conversion (this is a simplified version)
      const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000)
      
      // Get timezone offsets (simplified)
      const timezoneOffsets: { [key: string]: number } = {
        'UTC': 0,
        'America/New_York': -5,
        'America/Los_Angeles': -8,
        'Europe/London': 0,
        'Europe/Paris': 1,
        'Asia/Tokyo': 9,
        'Asia/Shanghai': 8,
        'Asia/Kolkata': 5.5,
        'Australia/Sydney': 10,
        'Pacific/Auckland': 12
      }
      
      const fromOffset = timezoneOffsets[fromTimezone] || 0
      const toOffset = timezoneOffsets[toTimezone] || 0
      
      const convertedTime = new Date(utcTime + ((toOffset - fromOffset) * 3600000))
      
      setResult(convertedTime.toLocaleString())
    } catch (error) {
      alert('Error converting timezone')
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Date & Time</label>
        <Input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">From Timezone</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={fromTimezone}
            onChange={(e) => setFromTimezone(e.target.value)}
          >
            {timezones.map(tz => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">To Timezone</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={toTimezone}
            onChange={(e) => setToTimezone(e.target.value)}
          >
            {timezones.map(tz => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
        </div>
      </div>
      
      <Button onClick={convertTimezone} className="w-full">
        Convert Timezone
      </Button>
      
      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Converted Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-xl font-semibold">{result}</div>
              <div className="text-sm text-gray-600 mt-2">{toTimezone}</div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
