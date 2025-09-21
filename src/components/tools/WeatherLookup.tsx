import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function WeatherLookup() {
  const [city, setCity] = useState('')
  const [result, setResult] = useState<{
    city: string
    temperature: number
    condition: string
    humidity: number
    windSpeed: number
    description: string
  } | null>(null)
  const [loading, setLoading] = useState(false)

  // Mock weather data for demonstration
  const mockWeatherData = {
    mumbai: { temp: 28, condition: 'Partly Cloudy', humidity: 78, wind: 12, desc: 'Mild weather with occasional clouds' },
    delhi: { temp: 32, condition: 'Sunny', humidity: 45, wind: 8, desc: 'Hot and dry weather' },
    bangalore: { temp: 24, condition: 'Rainy', humidity: 85, wind: 15, desc: 'Light showers expected' },
    chennai: { temp: 30, condition: 'Humid', humidity: 82, wind: 10, desc: 'High humidity with warm temperatures' },
    kolkata: { temp: 29, condition: 'Overcast', humidity: 88, wind: 6, desc: 'Cloudy skies with high humidity' },
    hyderabad: { temp: 26, condition: 'Clear', humidity: 65, wind: 9, desc: 'Clear skies with pleasant weather' },
    pune: { temp: 25, condition: 'Mild', humidity: 70, wind: 11, desc: 'Comfortable weather conditions' },
    ahmedabad: { temp: 34, condition: 'Hot', humidity: 40, wind: 7, desc: 'Very hot and dry conditions' }
  }

  const getWeather = async () => {
    if (!city.trim()) return

    setLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      const cityKey = city.toLowerCase().trim()
      const weatherData = mockWeatherData[cityKey as keyof typeof mockWeatherData]
      
      if (weatherData) {
        setResult({
          city: city.charAt(0).toUpperCase() + city.slice(1),
          temperature: weatherData.temp,
          condition: weatherData.condition,
          humidity: weatherData.humidity,
          windSpeed: weatherData.wind,
          description: weatherData.desc
        })
      } else {
        // Generate random weather for unknown cities
        const conditions = ['Sunny', 'Cloudy', 'Partly Cloudy', 'Rainy', 'Clear']
        const randomCondition = conditions[Math.floor(Math.random() * conditions.length)]
        
        setResult({
          city: city.charAt(0).toUpperCase() + city.slice(1),
          temperature: Math.floor(Math.random() * 15) + 20, // 20-35°C
          condition: randomCondition,
          humidity: Math.floor(Math.random() * 40) + 50, // 50-90%
          windSpeed: Math.floor(Math.random() * 15) + 5, // 5-20 km/h
          description: `Weather information for ${city.charAt(0).toUpperCase() + city.slice(1)}`
        })
      }
      
      setLoading(false)
    }, 1500)
  }

  const getWeatherEmoji = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny': return '☀️'
      case 'cloudy': return '☁️'
      case 'partly cloudy': return '⛅'
      case 'rainy': return '🌧️'
      case 'clear': return '🌤️'
      case 'humid': return '💧'
      case 'overcast': return '☁️'
      case 'mild': return '🌤️'
      case 'hot': return '🔥'
      default: return '🌤️'
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          🌤️ Get current weather information for any city
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Note: This is a demo with mock data. For real weather, integrate with a weather API.
        </p>
      </div>

      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter city name (e.g., Mumbai, Delhi, Bangalore)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && getWeather()}
          className="flex-1"
        />
        <Button 
          onClick={getWeather}
          disabled={loading || !city.trim()}
        >
          {loading ? "Loading..." : "Get Weather"}
        </Button>
      </div>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {getWeatherEmoji(result.condition)} Weather in {result.city}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {result.temperature}°C
                </div>
                <div className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {result.condition}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {result.description}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Humidity</div>
                  <div className="text-lg font-semibold">{result.humidity}%</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Wind Speed</div>
                  <div className="text-lg font-semibold">{result.windSpeed} km/h</div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg">
                <div className="text-sm text-blue-800 dark:text-blue-200">
                  💡 This is demo data. For real-time weather, integrate with OpenWeatherMap or similar API.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
