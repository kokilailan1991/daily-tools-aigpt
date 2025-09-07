import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function SWPCalculator() {
  const [lumpSum, setLumpSum] = useState('')
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState('')
  const [expectedReturn, setExpectedReturn] = useState('')
  const [result, setResult] = useState<{
    totalWithdrawals: number
    remainingAmount: number
    totalReturns: number
    duration: number
    monthlyReturns: number
  } | null>(null)

  const calculateSWP = () => {
    const initialAmount = parseFloat(lumpSum)
    const monthly = parseFloat(monthlyWithdrawal)
    const annualReturn = parseFloat(expectedReturn)
    
    if (initialAmount > 0 && monthly > 0 && annualReturn >= 0) {
      const monthlyRate = annualReturn / 12 / 100
      let remainingAmount = initialAmount
      let totalWithdrawals = 0
      let month = 0
      let totalReturns = 0
      
      // Calculate month by month until funds are exhausted
      while (remainingAmount > monthly && month < 600) { // Max 50 years
        // Add monthly returns
        const monthlyGain = remainingAmount * monthlyRate
        remainingAmount += monthlyGain
        totalReturns += monthlyGain
        
        // Subtract monthly withdrawal
        remainingAmount -= monthly
        totalWithdrawals += monthly
        month++
      }
      
      // Calculate final month if there's remaining amount
      if (remainingAmount > 0) {
        const finalGain = remainingAmount * monthlyRate
        totalReturns += finalGain
        totalWithdrawals += remainingAmount
        remainingAmount = 0
        month++
      }
      
      const monthlyReturns = totalReturns / month
      
      setResult({
        totalWithdrawals: Math.round(totalWithdrawals),
        remainingAmount: Math.round(remainingAmount),
        totalReturns: Math.round(totalReturns),
        duration: month,
        monthlyReturns: Math.round(monthlyReturns)
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Lump Sum Investment (₹)</label>
          <Input
            type="number"
            placeholder="1000000"
            value={lumpSum}
            onChange={(e) => setLumpSum(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Monthly Withdrawal (₹)</label>
          <Input
            type="number"
            placeholder="10000"
            value={monthlyWithdrawal}
            onChange={(e) => setMonthlyWithdrawal(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Expected Annual Return (%)</label>
          <Input
            type="number"
            placeholder="8"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(e.target.value)}
          />
        </div>
      </div>
      
      <Button onClick={calculateSWP} className="w-full">
        Calculate SWP
      </Button>
      
      {result && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SWP Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">₹{result.totalWithdrawals.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Withdrawals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">₹{result.totalReturns.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Returns</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{result.duration}</div>
                  <div className="text-sm text-gray-600">Months</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">{Math.floor(result.duration / 12)}</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">₹{result.monthlyReturns.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Avg Monthly Returns</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>SWP Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div>✅ <strong>Regular Income:</strong> Steady monthly cash flow</div>
                <div>✅ <strong>Tax Efficiency:</strong> Only gains are taxed, not principal</div>
                <div>✅ <strong>Flexibility:</strong> Adjust withdrawal amounts as needed</div>
                <div>✅ <strong>Capital Preservation:</strong> Principal remains invested</div>
                <div className="text-gray-600 mt-3">
                  <strong>Note:</strong> SWP returns depend on market performance. Consider your income needs and risk tolerance.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
