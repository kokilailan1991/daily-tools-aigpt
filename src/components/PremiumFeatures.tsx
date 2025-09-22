import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface PremiumFeature {
  id: string
  name: string
  description: string
  freeLimit: string
  premiumBenefit: string
  icon: string
}

const premiumFeatures: PremiumFeature[] = [
  {
    id: 'advanced-calculations',
    name: 'Advanced Calculations',
    description: 'Unlimited complex calculations with detailed breakdowns',
    freeLimit: '5 calculations/day',
    premiumBenefit: 'Unlimited calculations',
    icon: '🧮'
  },
  {
    id: 'export-reports',
    name: 'Export & Reports',
    description: 'Download PDF reports and export data to Excel/CSV',
    freeLimit: 'No exports',
    premiumBenefit: 'Unlimited exports',
    icon: '📊'
  },
  {
    id: 'priority-support',
    name: 'Priority Support',
    description: '24/7 priority customer support',
    freeLimit: 'Community support',
    premiumBenefit: 'Priority support',
    icon: '🎧'
  },
  {
    id: 'advanced-tools',
    name: 'Advanced Tools',
    description: 'Access to premium-only tools and features',
    freeLimit: 'Basic tools only',
    premiumBenefit: 'All premium tools',
    icon: '⭐'
  },
  {
    id: 'ad-free',
    name: 'Ad-Free Experience',
    description: 'Remove all advertisements for distraction-free usage',
    freeLimit: 'Ads shown',
    premiumBenefit: 'No ads',
    icon: '🚫'
  },
  {
    id: 'api-access',
    name: 'API Access',
    description: 'Access to our tools via API for integration',
    freeLimit: 'No API access',
    premiumBenefit: 'Full API access',
    icon: '🔌'
  }
]

export default function PremiumFeatures() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly')

  const plans = {
    monthly: {
      price: 299,
      currency: '₹',
      period: 'month',
      savings: 0
    },
    yearly: {
      price: 2999,
      currency: '₹',
      period: 'year',
      savings: 20
    }
  }

  const currentPlan = plans[selectedPlan]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">🚀 Unlock Premium Features</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Get unlimited access to all tools, advanced features, and priority support. 
          Perfect for professionals, students, and power users.
        </p>
      </div>

      {/* Pricing Toggle */}
      <div className="flex justify-center">
        <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <Button
            variant={selectedPlan === 'monthly' ? 'default' : 'ghost'}
            onClick={() => setSelectedPlan('monthly')}
            className="px-6"
          >
            Monthly
          </Button>
          <Button
            variant={selectedPlan === 'yearly' ? 'default' : 'ghost'}
            onClick={() => setSelectedPlan('yearly')}
            className="px-6"
          >
            Yearly
            {selectedPlan === 'yearly' && (
              <Badge className="ml-2 bg-green-500">Save 20%</Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Pricing Card */}
      <div className="max-w-md mx-auto">
        <Card className="border-2 border-blue-500 relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
          </div>
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Premium Plan</CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold">{currentPlan.currency}{currentPlan.price}</span>
              <span className="text-gray-600 dark:text-gray-400">/{currentPlan.period}</span>
            </div>
            {currentPlan.savings > 0 && (
              <p className="text-green-600 font-semibold">
                Save {currentPlan.savings}% with yearly billing
              </p>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
              Start Free Trial
            </Button>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              7-day free trial • Cancel anytime
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {premiumFeatures.map((feature) => (
          <Card key={feature.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-red-600">Free:</span>
                  <span>{feature.freeLimit}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-green-600">Premium:</span>
                  <span>{feature.premiumBenefit}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Payment Methods */}
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold">Accepted Payment Methods</h3>
        <div className="flex justify-center space-x-4 text-2xl">
          <span>💳</span>
          <span>🏦</span>
          <span>📱</span>
          <span>💰</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Credit/Debit Cards • UPI • Net Banking • Wallets
        </p>
      </div>
    </div>
  )
}
