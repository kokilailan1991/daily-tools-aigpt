import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function BMICalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState('')

  const calculateBMI = () => {
    const h = parseFloat(height) / 100 // Convert cm to meters
    const w = parseFloat(weight)
    
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h)
      setBmi(Math.round(bmiValue * 10) / 10)
      
      if (bmiValue < 18.5) setCategory('Underweight')
      else if (bmiValue < 25) setCategory('Normal weight')
      else if (bmiValue < 30) setCategory('Overweight')
      else setCategory('Obese')
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Height (cm)</label>
          <Input
            type="number"
            placeholder="170"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
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
      </div>
      
      <Button onClick={calculateBMI} className="w-full">
        Calculate BMI
      </Button>
      
      {bmi && (
        <Card>
          <CardHeader>
            <CardTitle>Your BMI Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{bmi}</div>
              <div className="text-lg font-semibold mb-2">{category}</div>
              <div className="text-sm text-gray-600">
                {category === 'Underweight' && 'Consider consulting a healthcare provider'}
                {category === 'Normal weight' && 'Great! You have a healthy weight'}
                {category === 'Overweight' && 'Consider a balanced diet and exercise'}
                {category === 'Obese' && 'Please consult a healthcare provider'}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
