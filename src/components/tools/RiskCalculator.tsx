import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function RiskCalculator() {
  const [investment, setInvestment] = useState('')
  const [expectedReturn, setExpectedReturn] = useState('')
  const [riskLevel, setRiskLevel] = useState('')
  const [timeHorizon, setTimeHorizon] = useState('')
  const [result, setResult] = useState<{
    expectedValue: number
    riskRange: { min: number; max: number }
    riskCategory: string
    recommendation: string
  } | null>(null)

  const calculateRisk = () => {
    const inv = parseFloat(investment)
    const ret = parseFloat(expectedReturn)
    const time = parseFloat(timeHorizon)
    
    if (inv > 0 && ret >= 0 && time > 0) {
      const expectedValue = inv * Math.pow(1 + ret/100, time)
      
      // Risk calculation based on risk level
      let volatility = 0
      let riskCategory = ''
      let recommendation = ''
      
      switch (riskLevel) {
        case 'low':
          volatility = 0.05
          riskCategory = 'Conservative'
          recommendation = 'Suitable for risk-averse investors. Consider bonds, fixed deposits.'
          break
        case 'medium':
          volatility = 0.15
          riskCategory = 'Moderate'
          recommendation = 'Balanced approach. Consider balanced mutual funds, hybrid funds.'
          break
        case 'high':
          volatility = 0.25
          riskCategory = 'Aggressive'
          recommendation = 'High risk, high reward. Consider equity funds, stocks.'
          break
        default:
          volatility = 0.15
          riskCategory = 'Moderate'
          recommendation = 'Balanced approach recommended.'
      }
      
      const riskRange = {
        min: expectedValue * (1 - volatility),
        max: expectedValue * (1 + volatility)
      }
      
      setResult({
        expectedValue: Math.round(expectedValue),
        riskRange: {
          min: Math.round(riskRange.min),
          max: Math.round(riskRange.max)
        },
        riskCategory,
        recommendation
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Investment Amount (₹)</label>
          <Input
            type="number"
            placeholder="100000"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
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
          <label className="block text-sm font-medium mb-2">Risk Level</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={riskLevel}
            onChange={(e) => setRiskLevel(e.target.value)}
          >
            <option value="">Select Risk Level</option>
            <option value="low">Low Risk (5% volatility)</option>
            <option value="medium">Medium Risk (15% volatility)</option>
            <option value="high">High Risk (25% volatility)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Time Horizon (Years)</label>
          <Input
            type="number"
            placeholder="5"
            value={timeHorizon}
            onChange={(e) => setTimeHorizon(e.target.value)}
          />
        </div>
      </div>
      
      <Button onClick={calculateRisk} className="w-full">
        Calculate Risk & Returns
      </Button>
      
      {result && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Investment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">₹{result.expectedValue.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Expected Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">₹{result.riskRange.min.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Min Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">₹{result.riskRange.max.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Max Value</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <strong>Risk Category:</strong> <span className="text-blue-600">{result.riskCategory}</span>
                </div>
                <div>
                  <strong>Recommendation:</strong> <span className="text-gray-700">{result.recommendation}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Note:</strong> Past performance doesn't guarantee future returns. Consider your risk tolerance before investing.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
