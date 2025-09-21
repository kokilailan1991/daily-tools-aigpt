import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

// Risk allocation based on age
const riskAllocations = {
  high: { equity: 70, debt: 20, gold: 10, expectedReturn: 12 },
  medium: { equity: 50, debt: 30, gold: 20, expectedReturn: 10 },
  low: { equity: 30, debt: 50, gold: 20, expectedReturn: 8 }
}

export default function RiskCalculator() {
  const [age, setAge] = useState('')
  const [lumpSum, setLumpSum] = useState('')
  const [monthlySavings, setMonthlySavings] = useState('')
  const [goalAmount, setGoalAmount] = useState('')
  const [investmentYears, setInvestmentYears] = useState('10')
  const [result, setResult] = useState<{
    riskProfile: string
    allocation: { equity: number; debt: number; gold: number; expectedReturn: number }
    lowRisk: { lumpSumReturn: number; sipReturn: number; totalReturn: number }
    mediumRisk: { lumpSumReturn: number; sipReturn: number; totalReturn: number }
    highRisk: { lumpSumReturn: number; sipReturn: number; totalReturn: number }
    goalMessage?: string
  } | null>(null)

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(num)
  }

  const calculateReturns = () => {
    const userAge = parseInt(age)
    const lumpSumAmount = parseFloat(lumpSum)
    const monthlyAmount = parseFloat(monthlySavings)
    const goal = parseFloat(goalAmount) || null
    const years = parseInt(investmentYears)

    if (userAge > 0 && lumpSumAmount > 0 && monthlyAmount > 0 && years > 0) {
      // Determine risk profile based on age
      let riskProfile: string
      if (userAge < 30) {
        riskProfile = 'high'
      } else if (userAge >= 30 && userAge <= 45) {
        riskProfile = 'medium'
      } else {
        riskProfile = 'low'
      }

      const allocation = riskAllocations[riskProfile as keyof typeof riskAllocations]

      // Calculate returns for all risk profiles
      const results: any = {}
      
      Object.keys(riskAllocations).forEach(risk => {
        const alloc = riskAllocations[risk as keyof typeof riskAllocations]
        const annualReturn = alloc.expectedReturn / 100
        
        // Lump sum calculation (Compound Interest: A = P(1 + r)^t)
        const lumpSumReturn = lumpSumAmount * Math.pow(1 + annualReturn, years)
        
        // SIP calculation (Future Value of Annuity)
        const monthlyReturn = annualReturn / 12
        const sipReturn = monthlyAmount * (((Math.pow(1 + monthlyReturn, years * 12) - 1) / monthlyReturn) * (1 + monthlyReturn))
        
        // Total return
        const totalReturn = lumpSumReturn + sipReturn
        
        results[risk] = {
          lumpSumReturn: lumpSumReturn,
          sipReturn: sipReturn,
          totalReturn: totalReturn
        }
      })

      // Goal analysis
      let goalMessage = ''
      if (goal) {
        const userTotalReturn = results[riskProfile].totalReturn
        const shortfall = goal - userTotalReturn
        
        if (shortfall <= 0) {
          const surplus = Math.abs(shortfall)
          goalMessage = `🎉 Congratulations! You'll exceed your goal by ₹${formatNumber(surplus)}`
        } else {
          const requiredMonthlySavings = monthlyAmount * (1 + (shortfall / userTotalReturn))
          goalMessage = `To reach your goal of ₹${formatNumber(goal)}, you need to save ₹${formatNumber(requiredMonthlySavings)} per month (currently saving ₹${formatNumber(monthlyAmount)})`
        }
      }

      setResult({
        riskProfile,
        allocation,
        lowRisk: results.low,
        mediumRisk: results.medium,
        highRisk: results.high,
        goalMessage
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Enhanced Input Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Age</label>
          <Input
            type="number"
            placeholder="25"
            min="18"
            max="80"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">Your age determines risk allocation</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Lump Sum Investment (₹)</label>
          <Input
            type="number"
            placeholder="100000"
            min="0"
            value={lumpSum}
            onChange={(e) => setLumpSum(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">One-time investment amount</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Monthly Savings (₹)</label>
          <Input
            type="number"
            placeholder="5000"
            min="0"
            value={monthlySavings}
            onChange={(e) => setMonthlySavings(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">Amount you can save monthly</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Goal Amount (₹) - Optional</label>
          <Input
            type="number"
            placeholder="1000000"
            min="0"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">Your financial goal</p>
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Investment Period (Years)</label>
          <Input
            type="number"
            placeholder="10"
            min="1"
            max="50"
            value={investmentYears}
            onChange={(e) => setInvestmentYears(e.target.value)}
          />
        </div>
      </div>
      
      <Button onClick={calculateReturns} className="w-full">
        Calculate Returns
      </Button>
      
      {result && (
        <div className="space-y-6">
          {/* Risk Allocation Display */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎯 Your Risk Profile: <Badge>{result.riskProfile.charAt(0).toUpperCase() + result.riskProfile.slice(1)} Risk</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{result.allocation.equity}%</div>
                  <div className="text-sm text-gray-600">Equity</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{result.allocation.debt}%</div>
                  <div className="text-sm text-gray-600">Debt</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">{result.allocation.gold}%</div>
                  <div className="text-sm text-gray-600">Gold</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm text-gray-600">Expected Annual Return: </span>
                <span className="font-bold text-purple-600">{result.allocation.expectedReturn}%</span>
              </div>
            </CardContent>
          </Card>

          {/* Returns Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  Low Risk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-xl font-bold text-green-600">₹{formatNumber(result.lowRisk.totalReturn)}</div>
                  <div className="text-xs text-gray-600">Total Value</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="font-semibold">Lump Sum</div>
                      <div>₹{formatNumber(result.lowRisk.lumpSumReturn)}</div>
                    </div>
                    <div>
                      <div className="font-semibold">SIP</div>
                      <div>₹{formatNumber(result.lowRisk.sipReturn)}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  Medium Risk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-xl font-bold text-yellow-600">₹{formatNumber(result.mediumRisk.totalReturn)}</div>
                  <div className="text-xs text-gray-600">Total Value</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="font-semibold">Lump Sum</div>
                      <div>₹{formatNumber(result.mediumRisk.lumpSumReturn)}</div>
                    </div>
                    <div>
                      <div className="font-semibold">SIP</div>
                      <div>₹{formatNumber(result.mediumRisk.sipReturn)}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  High Risk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-xl font-bold text-red-600">₹{formatNumber(result.highRisk.totalReturn)}</div>
                  <div className="text-xs text-gray-600">Total Value</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="font-semibold">Lump Sum</div>
                      <div>₹{formatNumber(result.highRisk.lumpSumReturn)}</div>
                    </div>
                    <div>
                      <div className="font-semibold">SIP</div>
                      <div>₹{formatNumber(result.highRisk.sipReturn)}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Goal Message */}
          {result.goalMessage && (
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">🎯 Goal Analysis</h4>
                  <p>{result.goalMessage}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Premium Features CTA */}
          <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            <CardContent className="pt-6">
              <div className="text-center space-y-3">
                <h4 className="font-bold text-lg">🚀 Unlock Premium Planner</h4>
                <p className="text-sm">Get multiple scenario planning, PDF reports, and advanced goal tracking</p>
                <Button 
                  className="bg-white text-orange-600 hover:bg-gray-100"
                  onClick={() => alert('Premium features coming soon! Integration with Razorpay payment gateway.')}
                >
                  Upgrade for ₹299
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Sharing */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-3">
                <h4 className="font-semibold">Share Your Results</h4>
                <div className="flex justify-center gap-2">
                  <Button 
                    className="border border-gray-300"
                    onClick={() => alert('Share to WhatsApp functionality')}
                  >
                    📱 WhatsApp
                  </Button>
                  <Button 
                    className="border border-gray-300"
                    onClick={() => alert('Share to LinkedIn functionality')}
                  >
                    💼 LinkedIn
                  </Button>
                  <Button 
                    className="border border-gray-300"
                    onClick={() => alert('Share to Twitter functionality')}
                  >
                    🐦 Twitter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
