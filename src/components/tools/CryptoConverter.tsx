import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function CryptoConverter() {
  const [amount, setAmount] = useState('')
  const [fromCrypto, setFromCrypto] = useState('BTC')
  const [toCurrency, setToCurrency] = useState('INR')
  const [result, setResult] = useState<{
    convertedAmount: number
    rate: number
  } | null>(null)
  const [loading, setLoading] = useState(false)

  // Mock exchange rates (in real app, you'd fetch from an API)
  const exchangeRates: { [key: string]: { [key: string]: number } } = {
    BTC: { INR: 6500000, USD: 78000 },
    ETH: { INR: 320000, USD: 3800 },
    INR: { BTC: 1/6500000, ETH: 1/320000 },
    USD: { BTC: 1/78000, ETH: 1/3800 }
  }

  const convertCrypto = async () => {
    const amountValue = parseFloat(amount)
    if (amountValue > 0) {
      setLoading(true)
      
      // Simulate API delay
      setTimeout(() => {
        const rate = exchangeRates[fromCrypto]?.[toCurrency] || 1
        const convertedAmount = amountValue * rate
        
        setResult({
          convertedAmount,
          rate
        })
        setLoading(false)
      }, 1000)
    }
  }

  const formatNumber = (num: number) => {
    if (num < 1) {
      return num.toFixed(8)
    } else if (num < 1000) {
      return num.toFixed(2)
    } else {
      return new Intl.NumberFormat('en-IN').format(Math.round(num))
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ⚠️ Note: Rates are for demonstration purposes only
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Amount</label>
          <Input
            type="number"
            placeholder="1.0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">From</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={fromCrypto}
            onChange={(e) => setFromCrypto(e.target.value)}
          >
            <option value="BTC">₿ Bitcoin (BTC)</option>
            <option value="ETH">Ξ Ethereum (ETH)</option>
            <option value="INR">₹ Indian Rupee (INR)</option>
            <option value="USD">$ US Dollar (USD)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">To</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="INR">₹ Indian Rupee (INR)</option>
            <option value="USD">$ US Dollar (USD)</option>
            <option value="BTC">₿ Bitcoin (BTC)</option>
            <option value="ETH">Ξ Ethereum (ETH)</option>
          </select>
        </div>
      </div>

      <Button 
        onClick={convertCrypto} 
        className="w-full"
        disabled={loading}
      >
        {loading ? "Converting..." : "🔄 Convert"}
      </Button>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Conversion Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatNumber(result.convertedAmount)} {toCurrency}
                </div>
                <div className="text-sm text-gray-600">
                  1 {fromCrypto} = {formatNumber(result.rate)} {toCurrency}
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Disclaimer:</strong> This is a demo converter with mock rates. 
                  For real-time rates, use a professional exchange platform.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
