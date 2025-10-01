import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Input } from './ui/input'

interface APIPlan {
  id: string
  name: string
  price: number
  requests: number
  features: string[]
  popular?: boolean
}

const apiPlans: APIPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 99,
    requests: 1000,
    features: [
      '1,000 API calls/month',
      'Basic calculators',
      'Email support',
      'JSON responses'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 499,
    requests: 10000,
    features: [
      '10,000 API calls/month',
      'All calculators',
      'Priority support',
      'JSON/XML responses',
      'Rate limiting'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 1999,
    requests: 100000,
    features: [
      '100,000 API calls/month',
      'All calculators + custom',
      '24/7 phone support',
      'Multiple formats',
      'Custom rate limits',
      'SLA guarantee'
    ]
  }
]

export default function APIMonetization() {
  const [selectedPlan, setSelectedPlan] = useState('professional')
  const [apiKey, setApiKey] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const generateAPIKey = () => {
    setIsGenerating(true)
    // Simulate API key generation
    setTimeout(() => {
      const key = 'dt_' + Math.random().toString(36).substr(2, 32)
      setApiKey(key)
      setIsGenerating(false)
    }, 2000)
  }

  const copyAPIKey = () => {
    navigator.clipboard.writeText(apiKey)
    alert('API key copied to clipboard!')
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">🔌 API Access</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Integrate our calculators into your applications with our powerful API
        </p>
      </div>

      {/* API Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {apiPlans.map((plan) => (
          <Card 
            key={plan.id} 
            className={`relative ${plan.popular ? 'border-2 border-blue-500' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold">₹{plan.price}</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {plan.requests.toLocaleString()} API calls
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full"
                variant={plan.popular ? 'default' : 'outline'}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* API Key Generation */}
      <Card>
        <CardHeader>
          <CardTitle>🔑 Generate API Key</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!apiKey ? (
            <div className="text-center space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                Generate your API key to start using our calculators
              </p>
              <Button 
                onClick={generateAPIKey}
                disabled={isGenerating}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isGenerating ? 'Generating...' : 'Generate API Key'}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your API Key:</label>
                <div className="flex space-x-2">
                  <Input 
                    value={apiKey} 
                    readOnly 
                    className="font-mono"
                  />
                  <Button onClick={copyAPIKey} variant="outline">
                    Copy
                  </Button>
                </div>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>Important:</strong> Keep your API key secure and don't share it publicly. 
                  You can regenerate it anytime if needed.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* API Documentation */}
      <Card>
        <CardHeader>
          <CardTitle>📚 API Documentation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Base URL</h4>
              <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
                https://api.tools.aigpt.co.in/v1
              </code>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Authentication</h4>
              <code className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Example Request</h4>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto">
{`curl -X POST https://api.tools.aigpt.co.in/v1/bmi \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"height": 175, "weight": 70}'`}
            </pre>
          </div>
          
          <Button className="w-full" variant="outline">
            📖 View Full Documentation
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
