import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function CGPAConverter() {
  const [cgpa, setCgpa] = useState('')
  const [scale, setScale] = useState('10')
  const [result, setResult] = useState<{
    percentage: number
    grade: string
    description: string
  } | null>(null)

  const convertCGPA = () => {
    const cgpaValue = parseFloat(cgpa)
    const scaleValue = parseFloat(scale)
    
    if (cgpaValue > 0 && cgpaValue <= scaleValue) {
      // Different conversion formulas based on scale
      let percentage: number
      
      if (scaleValue === 10) {
        // Common formula: CGPA * 9.5
        percentage = cgpaValue * 9.5
      } else if (scaleValue === 4) {
        // US scale: CGPA * 25
        percentage = cgpaValue * 25
      } else {
        // Generic formula: (CGPA / Scale) * 100
        percentage = (cgpaValue / scaleValue) * 100
      }
      
      // Determine grade and description
      let grade = ''
      let description = ''
      
      if (percentage >= 90) {
        grade = 'A+'
        description = 'Outstanding'
      } else if (percentage >= 80) {
        grade = 'A'
        description = 'Excellent'
      } else if (percentage >= 70) {
        grade = 'B+'
        description = 'Very Good'
      } else if (percentage >= 60) {
        grade = 'B'
        description = 'Good'
      } else if (percentage >= 50) {
        grade = 'C'
        description = 'Average'
      } else {
        grade = 'F'
        description = 'Below Average'
      }

      setResult({
        percentage: Math.round(percentage * 100) / 100,
        grade,
        description
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">CGPA</label>
          <Input
            type="number"
            step="0.01"
            placeholder="8.5"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">CGPA Scale</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
          >
            <option value="10">10.0 Scale (Common in India)</option>
            <option value="4">4.0 Scale (US System)</option>
            <option value="5">5.0 Scale</option>
            <option value="8">8.0 Scale</option>
          </select>
        </div>
      </div>

      <Button onClick={convertCGPA} className="w-full">
        Convert CGPA to Percentage
      </Button>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Conversion Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{result.percentage}%</div>
                <div className="text-sm text-gray-600">Percentage</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{result.grade}</div>
                <div className="text-sm text-gray-600">Grade</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{result.description}</div>
                <div className="text-sm text-gray-600">Description</div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Note:</strong> This conversion uses standard formulas. Different institutions may use different conversion methods. 
                Please verify with your institution's specific guidelines.
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
