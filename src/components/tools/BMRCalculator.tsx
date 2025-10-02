import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export default function BMRCalculator() {
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmr, setBmr] = useState<number | null>(null)

  const calculateBMR = () => {
    if (age && gender && weight && height) {
      const ageNum = parseFloat(age)
      const weightNum = parseFloat(weight)
      const heightNum = parseFloat(height)
      
      // Mifflin-St Jeor Equation
      let bmrValue
      if (gender === 'male') {
        bmrValue = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) + 5
      } else {
        bmrValue = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) - 161
      }
      
      setBmr(Math.round(bmrValue))
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Age (years)</label>
          <Input
            type="number"
            placeholder="30"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Gender</label>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Weight (kg)</label>
          <Input
            type="number"
            placeholder="70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Height (cm)</label>
          <Input
            type="number"
            placeholder="170"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
      
      <Button onClick={calculateBMR} className="w-full">
        Calculate BMR
      </Button>
      
      {bmr && (
        <Card>
          <CardHeader>
            <CardTitle>Your BMR Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{bmr}</div>
              <div className="text-lg font-semibold mb-2">Calories per day</div>
              <div className="text-sm text-gray-600">
                This is how many calories your body burns at complete rest
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
