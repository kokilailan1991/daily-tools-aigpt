import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export default function CalorieCalculator() {
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activityLevel, setActivityLevel] = useState('')
  const [calories, setCalories] = useState<number | null>(null)

  const activityMultipliers = {
    'sedentary': 1.2,
    'light': 1.375,
    'moderate': 1.55,
    'active': 1.725,
    'very-active': 1.9
  }

  const calculateCalories = () => {
    if (age && gender && weight && height && activityLevel) {
      const ageNum = parseFloat(age)
      const weightNum = parseFloat(weight)
      const heightNum = parseFloat(height)
      
      // Mifflin-St Jeor Equation
      let bmr
      if (gender === 'male') {
        bmr = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) + 5
      } else {
        bmr = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) - 161
      }
      
      const tdee = bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers]
      setCalories(Math.round(tdee))
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

      <div>
        <label className="block text-sm font-medium mb-2">Activity Level</label>
        <Select value={activityLevel} onValueChange={setActivityLevel}>
          <SelectTrigger>
            <SelectValue placeholder="Select activity level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
            <SelectItem value="light">Lightly active (light exercise 1-3 days/week)</SelectItem>
            <SelectItem value="moderate">Moderately active (moderate exercise 3-5 days/week)</SelectItem>
            <SelectItem value="active">Very active (hard exercise 6-7 days/week)</SelectItem>
            <SelectItem value="very-active">Extremely active (very hard exercise & physical job)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button onClick={calculateCalories} className="w-full">
        Calculate Daily Calories
      </Button>
      
      {calories && (
        <Card>
          <CardHeader>
            <CardTitle>Your Daily Calorie Needs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{calories}</div>
              <div className="text-lg font-semibold mb-2">Calories per day</div>
              <div className="text-sm text-gray-600">
                Based on your activity level and body composition
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
