import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function LoanEMICalculator() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [result, setResult] = useState<{
    emi: number
    totalAmount: number
    totalInterest: number
  } | null>(null)

  const calculateEMI = () => {
    const p = parseFloat(principal)
    const r = parseFloat(rate) / 12 / 100 // Monthly rate
    const n = parseFloat(time) * 12 // Total months
    
    if (p > 0 && r >= 0 && n > 0) {
      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      const totalAmount = emi * n
      const totalInterest = totalAmount - p
      
      setResult({
        emi: Math.round(emi),
        totalAmount: Math.round(totalAmount),
        totalInterest: Math.round(totalInterest)
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Loan Amount (₹)</label>
          <Input
            type="number"
            placeholder="1000000"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Interest Rate (% p.a.)</label>
          <Input
            type="number"
            placeholder="8.5"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Loan Tenure (Years)</label>
          <Input
            type="number"
            placeholder="20"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      
      <Button onClick={calculateEMI} className="w-full">
        Calculate EMI
      </Button>
      
      {result && (
        <Card>
          <CardHeader>
            <CardTitle>EMI Calculation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">₹{result.emi.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Monthly EMI</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">₹{result.totalAmount.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Amount</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">₹{result.totalInterest.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Interest</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
