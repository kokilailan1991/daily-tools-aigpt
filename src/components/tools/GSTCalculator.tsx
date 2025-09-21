import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function GSTCalculator() {
  const [amount, setAmount] = useState('')
  const [gstRate, setGstRate] = useState('18')
  const [result, setResult] = useState<{
    gstAmount: number
    totalAmount: number
    baseAmount: number
  } | null>(null)

  const calculateGST = () => {
    const baseAmount = parseFloat(amount)
    if (baseAmount > 0) {
      const rate = parseFloat(gstRate) / 100
      const gstAmount = baseAmount * rate
      const totalAmount = baseAmount + gstAmount

      setResult({
        baseAmount,
        gstAmount,
        totalAmount
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Amount (₹)</label>
          <Input
            type="number"
            placeholder="1000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">GST Rate (%)</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={gstRate}
            onChange={(e) => setGstRate(e.target.value)}
          >
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
        </div>
      </div>

      <Button onClick={calculateGST} className="w-full">
        Calculate GST
      </Button>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>GST Calculation Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">₹{result.baseAmount.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Base Amount</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">₹{result.gstAmount.toLocaleString()}</div>
                <div className="text-sm text-gray-600">GST Amount</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">₹{result.totalAmount.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Amount</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
