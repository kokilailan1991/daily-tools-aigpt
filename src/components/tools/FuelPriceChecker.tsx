import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function FuelPriceChecker() {
  const [city, setCity] = useState('')
  const [result, setResult] = useState<{
    city: string
    petrol: number
    diesel: number
    lastUpdated: string
    change: string
  } | null>(null)
  const [loading, setLoading] = useState(false)

  const mockFuelData: { [key: string]: any } = {
    mumbai: { petrol: 106.31, diesel: 94.27, change: '+0.50' },
    delhi: { petrol: 96.72, diesel: 89.62, change: '+0.45' },
    bangalore: { petrol: 101.94, diesel: 87.89, change: '+0.38' },
    chennai: { petrol: 102.63, diesel: 94.24, change: '+0.42' },
    kolkata: { petrol: 106.03, diesel: 92.76, change: '+0.47' },
    hyderabad: { petrol: 109.66, diesel: 97.82, change: '+0.52' },
    pune: { petrol: 105.84, diesel: 93.45, change: '+0.41' },
    ahmedabad: { petrol: 95.12, diesel: 89.34, change: '+0.39' }
  }

  const checkFuelPrices = async () => {
    if (!city.trim()) return

    setLoading(true)
    
    setTimeout(() => {
      const cityKey = city.toLowerCase().trim()
      const fuelData = mockFuelData[cityKey]
      
      if (fuelData) {
        setResult({
          city: city.charAt(0).toUpperCase() + city.slice(1),
          petrol: fuelData.petrol,
          diesel: fuelData.diesel,
          lastUpdated: new Date().toLocaleDateString(),
          change: fuelData.change
        })
      } else {
        const basePetrol = 95 + Math.random() * 15
        const baseDiesel = 85 + Math.random() * 15
        setResult({
          city: city.charAt(0).toUpperCase() + city.slice(1),
          petrol: Math.round(basePetrol * 100) / 100,
          diesel: Math.round(baseDiesel * 100) / 100,
          lastUpdated: new Date().toLocaleDateString(),
          change: '+0.40'
        })
      }
      
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ⛽ Check current fuel prices by city
        </p>
      </div>

      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && checkFuelPrices()}
          className="flex-1"
        />
        <Button onClick={checkFuelPrices} disabled={loading || !city.trim()}>
          {loading ? "Checking..." : "Check Prices"}
        </Button>
      </div>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ⛽ Fuel Prices - {result.city}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 dark:bg-red-900 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">Petrol</div>
                <div className="text-2xl font-bold text-red-600">₹{result.petrol}</div>
                <div className="text-xs text-green-600">per liter</div>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">Diesel</div>
                <div className="text-2xl font-bold text-blue-600">₹{result.diesel}</div>
                <div className="text-xs text-green-600">per liter</div>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-600">
              Last updated: {result.lastUpdated} | Change: {result.change}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
