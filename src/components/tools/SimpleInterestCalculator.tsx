import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [result, setResult] = useState<{
    simpleInterest: number
    totalAmount: number
  } | null>(null)

  const calculateSimpleInterest = () => {
    const principalValue = parseFloat(principal)
    const rateValue = parseFloat(rate)
    const timeValue = parseFloat(time)

    if (principalValue > 0 && rateValue > 0 && timeValue > 0) {
      const simpleInterest = (principalValue * rateValue * timeValue) / 100
      const totalAmount = principalValue + simpleInterest

      setResult({
        simpleInterest,
        totalAmount
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          🧮 Calculate simple interest for school-level problems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Principal Amount (₹)</label>
          <Input
            type="number"
            placeholder="10000"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Interest Rate (% per annum)</label>
          <Input
            type="number"
            placeholder="8"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Time Period (years)</label>
          <Input
            type="number"
            placeholder="2"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      <Button 
        onClick={calculateSimpleInterest}
        className="w-full"
        disabled={!principal || !rate || !time}
      >
        Calculate Simple Interest
      </Button>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Calculation Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 dark:bg-green-900 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Simple Interest</div>
                  <div className="text-2xl font-bold text-green-600">₹{result.simpleInterest.toLocaleString()}</div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Amount</div>
                  <div className="text-2xl font-bold text-blue-600">₹{result.totalAmount.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Formula:</strong> Simple Interest = (P × R × T) / 100<br/>
                  Where P = Principal, R = Rate, T = Time
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
