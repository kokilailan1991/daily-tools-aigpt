import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export default function IdealWeightCalculator() {
  const [height, setHeight] = useState('')
  const [gender, setGender] = useState('')
  const [idealWeight, setIdealWeight] = useState<number | null>(null)

  const calculateIdealWeight = () => {
    if (height && gender) {
      const heightNum = parseFloat(height)
      
      // Robinson Formula (1983) - most accurate
      let robinson
      if (gender === 'male') {
        robinson = 52 + (1.9 * ((heightNum - 152.4) / 2.54))
      } else {
        robinson = 49 + (1.7 * ((heightNum - 152.4) / 2.54))
      }
      
      setIdealWeight(Math.round(robinson * 10) / 10)
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
      </div>
      
      <Button onClick={calculateIdealWeight} className="w-full">
        Calculate Ideal Weight
      </Button>
      
      {idealWeight && (
        <Card>
          <CardHeader>
            <CardTitle>Your Ideal Weight</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{idealWeight} kg</div>
              <div className="text-lg font-semibold mb-2">Ideal Weight</div>
              <div className="text-sm text-gray-600">
                Based on Robinson formula (1983) - most accurate for adults
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
