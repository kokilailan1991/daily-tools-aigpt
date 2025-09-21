import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [frequency, setFrequency] = useState('12')
  const [result, setResult] = useState<{
    totalAmount: number
    interest: number
    breakdown: Array<{
      year: number
      principal: number
      interest: number
      total: number
    }>
  } | null>(null)

  const calculateCompoundInterest = () => {
    const principalValue = parseFloat(principal)
    const rateValue = parseFloat(rate)
    const timeValue = parseFloat(time)
    const frequencyValue = parseFloat(frequency)

    if (principalValue > 0 && rateValue > 0 && timeValue > 0) {
      const annualRate = rateValue / 100
      const totalAmount = principalValue * Math.pow(1 + (annualRate / frequencyValue), frequencyValue * timeValue)
      const interest = totalAmount - principalValue

      // Generate yearly breakdown
      const breakdown = []
      let currentPrincipal = principalValue

      for (let year = 1; year <= timeValue; year++) {
        const yearInterest = currentPrincipal * annualRate
        const newTotal = currentPrincipal + yearInterest
        breakdown.push({
          year,
          principal: currentPrincipal,
          interest: yearInterest,
          total: newTotal
        })
        currentPrincipal = newTotal
      }

      setResult({
        totalAmount,
        interest,
        breakdown
      })
    }
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 2
    }).format(num)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Principal Amount (₹)</label>
          <Input
            type="number"
            placeholder="100000"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Annual Interest Rate (%)</label>
          <Input
            type="number"
            step="0.01"
            placeholder="8.5"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Time Period (Years)</label>
          <Input
            type="number"
            placeholder="5"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Compounding Frequency</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="1">Annually (1x)</option>
            <option value="2">Semi-Annually (2x)</option>
            <option value="4">Quarterly (4x)</option>
            <option value="12">Monthly (12x)</option>
            <option value="365">Daily (365x)</option>
          </select>
        </div>
      </div>

      <Button onClick={calculateCompoundInterest} className="w-full">
        Calculate Compound Interest
      </Button>

      {result && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compound Interest Result</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">₹{formatNumber(result.totalAmount)}</div>
                  <div className="text-sm text-gray-600">Total Amount</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">₹{formatNumber(result.interest)}</div>
                  <div className="text-sm text-gray-600">Interest Earned</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">
                    {((result.interest / parseFloat(principal)) * 100).toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-600">Return on Investment</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Yearly Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Year</th>
                      <th className="text-right py-2">Principal</th>
                      <th className="text-right py-2">Interest</th>
                      <th className="text-right py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.breakdown.map((year, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">{year.year}</td>
                        <td className="text-right py-2">₹{formatNumber(year.principal)}</td>
                        <td className="text-right py-2 text-green-600">₹{formatNumber(year.interest)}</td>
                        <td className="text-right py-2 font-semibold">₹{formatNumber(year.total)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
