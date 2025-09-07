import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const conversions = {
  length: {
    'mm': 1,
    'cm': 10,
    'm': 1000,
    'km': 1000000,
    'in': 25.4,
    'ft': 304.8,
    'yd': 914.4,
    'mi': 1609344
  },
  weight: {
    'mg': 1,
    'g': 1000,
    'kg': 1000000,
    'oz': 28349.5,
    'lb': 453592,
    'ton': 1000000000
  },
  temperature: {
    'celsius': (c: number) => c,
    'fahrenheit': (c: number) => (c * 9/5) + 32,
    'kelvin': (c: number) => c + 273.15
  }
}

export default function UnitConverter() {
  const [category, setCategory] = useState('length')
  const [value, setValue] = useState('')
  const [fromUnit, setFromUnit] = useState('m')
  const [toUnit, setToUnit] = useState('ft')
  const [result, setResult] = useState<number | null>(null)

  const convert = () => {
    const val = parseFloat(value)
    if (isNaN(val)) return

    if (category === 'temperature') {
      const tempConversions: { [key: string]: (c: number) => number } = {
        'celsius': (c: number) => c,
        'fahrenheit': (c: number) => (c * 9/5) + 32,
        'kelvin': (c: number) => c + 273.15
      }
      
      // Convert to Celsius first
      let celsius = val
      if (fromUnit === 'fahrenheit') celsius = (val - 32) * 5/9
      if (fromUnit === 'kelvin') celsius = val - 273.15
      
      const converted = tempConversions[toUnit](celsius)
      setResult(Math.round(converted * 100) / 100)
    } else {
      const fromFactor = conversions[category as keyof typeof conversions][fromUnit as keyof typeof conversions[typeof category]]
      const toFactor = conversions[category as keyof typeof conversions][toUnit as keyof typeof conversions[typeof category]]
      
      if (fromFactor && toFactor) {
        const converted = (val * fromFactor) / toFactor
        setResult(Math.round(converted * 100) / 100)
      }
    }
  }

  const getUnits = () => {
    if (category === 'temperature') {
      return ['celsius', 'fahrenheit', 'kelvin']
    }
    return Object.keys(conversions[category as keyof typeof conversions])
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="temperature">Temperature</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Value</label>
          <Input
            type="number"
            placeholder="100"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">From</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {getUnits().map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">To</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            {getUnits().map(unit => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </div>
      </div>
      
      <Button onClick={convert} className="w-full">
        Convert
      </Button>
      
      {result !== null && (
        <Card>
          <CardHeader>
            <CardTitle>Conversion Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {result} {toUnit}
              </div>
              <div className="text-sm text-gray-600">
                {value} {fromUnit} = {result} {toUnit}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
