import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const currencies = [
  { code: 'USD', name: 'US Dollar', rate: 1 },
  { code: 'EUR', name: 'Euro', rate: 0.85 },
  { code: 'GBP', name: 'British Pound', rate: 0.73 },
  { code: 'INR', name: 'Indian Rupee', rate: 83.12 },
  { code: 'JPY', name: 'Japanese Yen', rate: 110.25 },
  { code: 'CAD', name: 'Canadian Dollar', rate: 1.25 },
  { code: 'AUD', name: 'Australian Dollar', rate: 1.35 },
]

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('')
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('INR')
  const [result, setResult] = useState<number | null>(null)

  const convertCurrency = () => {
    const amt = parseFloat(amount)
    if (isNaN(amt)) return
    
    const fromRate = currencies.find(c => c.code === fromCurrency)?.rate || 1
    const toRate = currencies.find(c => c.code === toCurrency)?.rate || 1
    
    const convertedAmount = (amt / fromRate) * toRate
    setResult(convertedAmount)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Amount</label>
          <Input
            type="number"
            placeholder="100"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">From</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map(currency => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">To</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map(currency => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <Button onClick={convertCurrency} className="w-full">
        Convert
      </Button>
      
      {result !== null && (
        <Card>
          <CardHeader>
            <CardTitle>Conversion Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {result.toFixed(2)} {toCurrency}
              </div>
              <div className="text-sm text-gray-600">
                {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
              </div>
              <div className="text-xs text-gray-500 mt-2">
                * Rates are approximate and for demonstration purposes
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
