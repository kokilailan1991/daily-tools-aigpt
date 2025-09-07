import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function SIPCalculator() {
  const [monthlyAmount, setMonthlyAmount] = useState('')
  const [expectedReturn, setExpectedReturn] = useState('')
  const [timePeriod, setTimePeriod] = useState('')
  const [result, setResult] = useState<{
    totalInvestment: number
    totalReturns: number
    maturityValue: number
    wealthGained: number
  } | null>(null)

  const calculateSIP = () => {
    const monthly = parseFloat(monthlyAmount)
    const annualReturn = parseFloat(expectedReturn)
    const years = parseFloat(timePeriod)
    
    if (monthly > 0 && annualReturn >= 0 && years > 0) {
      const monthlyRate = annualReturn / 12 / 100
      const totalMonths = years * 12
      
      // SIP Future Value Formula: FV = P * [((1 + r)^n - 1) / r] * (1 + r)
      const futureValue = monthly * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate))
      
      const totalInvestment = monthly * totalMonths
      const totalReturns = futureValue - totalInvestment
      const wealthGained = (totalReturns / totalInvestment) * 100
      
      setResult({
        totalInvestment: Math.round(totalInvestment),
        totalReturns: Math.round(totalReturns),
        maturityValue: Math.round(futureValue),
        wealthGained: Math.round(wealthGained * 100) / 100
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Monthly SIP Amount (₹)</label>
          <Input
            type="number"
            placeholder="5000"
            value={monthlyAmount}
            onChange={(e) => setMonthlyAmount(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Expected Annual Return (%)</label>
          <Input
            type="number"
            placeholder="12"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Investment Period (Years)</label>
          <Input
            type="number"
            placeholder="10"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
          />
        </div>
      </div>
      
      <Button onClick={calculateSIP} className="w-full">
        Calculate SIP Returns
      </Button>
      
      {result && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SIP Investment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">₹{result.totalInvestment.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Investment</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">₹{result.totalReturns.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Wealth Gained</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">₹{result.maturityValue.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Maturity Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">{result.wealthGained}%</div>
                  <div className="text-sm text-gray-600">Returns %</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>SIP Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div>✅ <strong>Rupee Cost Averaging:</strong> Buy more units when prices are low</div>
                <div>✅ <strong>Power of Compounding:</strong> Your returns earn returns</div>
                <div>✅ <strong>Disciplined Investing:</strong> Regular investment habit</div>
                <div>✅ <strong>Flexibility:</strong> Start with as low as ₹500/month</div>
                <div className="text-gray-600 mt-3">
                  <strong>Note:</strong> SIP returns are subject to market risks. Past performance doesn't guarantee future results.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
