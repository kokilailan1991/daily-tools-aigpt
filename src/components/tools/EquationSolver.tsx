import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function EquationSolver() {
  const [equationType, setEquationType] = useState('linear')
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [c, setC] = useState('')
  const [result, setResult] = useState<{
    solutions: number[]
    equation: string
    steps: string[]
  } | null>(null)

  const solveEquation = () => {
    const aValue = parseFloat(a)
    const bValue = parseFloat(b)
    const cValue = parseFloat(c)

    if (equationType === 'linear') {
      if (aValue === 0) {
        setResult({
          solutions: [],
          equation: `${aValue}x + ${bValue} = 0`,
          steps: ['Error: Coefficient of x cannot be zero in linear equation']
        })
        return
      }

      const solution = -bValue / aValue
      setResult({
        solutions: [solution],
        equation: `${aValue}x + ${bValue} = 0`,
        steps: [
          `${aValue}x + ${bValue} = 0`,
          `${aValue}x = -${bValue}`,
          `x = ${solution}`
        ]
      })
    } else if (equationType === 'quadratic') {
      if (aValue === 0) {
        setResult({
          solutions: [],
          equation: `${aValue}x² + ${bValue}x + ${cValue} = 0`,
          steps: ['Error: Coefficient of x² cannot be zero in quadratic equation']
        })
        return
      }

      const discriminant = bValue * bValue - 4 * aValue * cValue
      let solutions: number[] = []
      let steps: string[] = []

      steps.push(`${aValue}x² + ${bValue}x + ${cValue} = 0`)
      steps.push(`Discriminant = b² - 4ac = ${bValue}² - 4(${aValue})(${cValue}) = ${discriminant}`)

      if (discriminant > 0) {
        const x1 = (-bValue + Math.sqrt(discriminant)) / (2 * aValue)
        const x2 = (-bValue - Math.sqrt(discriminant)) / (2 * aValue)
        solutions = [x1, x2]
        steps.push(`x = (-${bValue} ± √${discriminant}) / (2 × ${aValue})`)
        steps.push(`x₁ = ${x1.toFixed(4)}`)
        steps.push(`x₂ = ${x2.toFixed(4)}`)
      } else if (discriminant === 0) {
        const x = -bValue / (2 * aValue)
        solutions = [x]
        steps.push(`x = -${bValue} / (2 × ${aValue}) = ${x}`)
        steps.push(`One real solution: x = ${x}`)
      } else {
        steps.push('No real solutions (discriminant < 0)')
        steps.push('Complex solutions exist but not shown here')
      }

      setResult({
        solutions,
        equation: `${aValue}x² + ${bValue}x + ${cValue} = 0`,
        steps
      })
    }
  }

  const formatNumber = (num: number) => {
    return Math.round(num * 10000) / 10000
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Solve linear and quadratic equations step by step
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Equation Type</label>
        <select
          className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
          value={equationType}
          onChange={(e) => setEquationType(e.target.value)}
        >
          <option value="linear">Linear: ax + b = 0</option>
          <option value="quadratic">Quadratic: ax² + bx + c = 0</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            {equationType === 'linear' ? 'Coefficient a (of x)' : 'Coefficient a (of x²)'}
          </label>
          <Input
            type="number"
            step="0.01"
            placeholder="1"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            {equationType === 'linear' ? 'Constant b' : 'Coefficient b (of x)'}
          </label>
          <Input
            type="number"
            step="0.01"
            placeholder="0"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </div>
        {equationType === 'quadratic' && (
          <div>
            <label className="block text-sm font-medium mb-2">Constant c</label>
            <Input
              type="number"
              step="0.01"
              placeholder="0"
              value={c}
              onChange={(e) => setC(e.target.value)}
            />
          </div>
        )}
      </div>

      <Button onClick={solveEquation} className="w-full">
        Solve Equation
      </Button>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-lg font-semibold mb-2">Equation: {result.equation}</div>
                {result.solutions.length > 0 ? (
                  <div className="text-xl font-bold text-green-600">
                    Solutions: {result.solutions.map(formatNumber).join(', ')}
                  </div>
                ) : (
                  <div className="text-lg text-red-600">No real solutions</div>
                )}
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="font-semibold mb-2">Steps:</div>
                <div className="space-y-1 text-sm">
                  {result.steps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full flex items-center justify-center text-xs mr-2">
                        {index + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
