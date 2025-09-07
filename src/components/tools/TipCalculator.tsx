import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState('')
  const [tipPercentage, setTipPercentage] = useState('15')
  const [people, setPeople] = useState('1')
  const [result, setResult] = useState<{
    tipAmount: number
    totalAmount: number
    perPerson: number
  } | null>(null)

  const calculateTip = () => {
    const bill = parseFloat(billAmount)
    const tip = parseFloat(tipPercentage)
    const numPeople = parseInt(people)
    
    if (bill > 0 && tip >= 0 && numPeople > 0) {
      const tipAmount = (bill * tip) / 100
      const totalAmount = bill + tipAmount
      const perPerson = totalAmount / numPeople
      
      setResult({
        tipAmount: Math.round(tipAmount * 100) / 100,
        totalAmount: Math.round(totalAmount * 100) / 100,
        perPerson: Math.round(perPerson * 100) / 100
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Bill Amount ($)</label>
          <Input
            type="number"
            placeholder="100.00"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Tip Percentage (%)</label>
          <Input
            type="number"
            placeholder="15"
            value={tipPercentage}
            onChange={(e) => setTipPercentage(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Number of People</label>
          <Input
            type="number"
            placeholder="1"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
      </div>
      
      <Button onClick={calculateTip} className="w-full">
        Calculate Tip
      </Button>
      
      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Tip Calculation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">${result.tipAmount}</div>
                <div className="text-sm text-gray-600">Tip Amount</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">${result.totalAmount}</div>
                <div className="text-sm text-gray-600">Total Amount</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">${result.perPerson}</div>
                <div className="text-sm text-gray-600">Per Person</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
