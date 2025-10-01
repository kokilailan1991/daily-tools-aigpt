import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface DataInsight {
  id: string
  title: string
  description: string
  value: string
  trend: 'up' | 'down' | 'stable'
  category: string
}

const dataInsights: DataInsight[] = [
  {
    id: 'bmi_trends',
    title: 'BMI Distribution Trends',
    description: 'Analysis of BMI calculations across different age groups',
    value: '45% Normal, 30% Overweight, 25% Underweight',
    trend: 'stable',
    category: 'Health'
  },
  {
    id: 'loan_preferences',
    title: 'Loan Amount Preferences',
    description: 'Most common loan amounts calculated by users',
    value: '₹5-10L (40%), ₹10-20L (35%), ₹20L+ (25%)',
    trend: 'up',
    category: 'Finance'
  },
  {
    id: 'investment_risk',
    title: 'Risk Appetite Analysis',
    description: 'Investment risk preferences based on age groups',
    value: 'High Risk: 60% (18-30), Medium: 70% (30-45), Low: 80% (45+)',
    trend: 'stable',
    category: 'Investment'
  },
  {
    id: 'geographic_usage',
    title: 'Geographic Usage Patterns',
    description: 'Tool usage patterns across different Indian cities',
    value: 'Mumbai (25%), Delhi (20%), Bangalore (15%), Others (40%)',
    trend: 'up',
    category: 'Demographics'
  }
]

export default function DataInsights() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Health', 'Finance', 'Investment', 'Demographics']
  const filteredInsights = selectedCategory === 'all' 
    ? dataInsights 
    : dataInsights.filter(insight => insight.category === selectedCategory)

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '📈'
      case 'down': return '📉'
      case 'stable': return '➡️'
      default: return '📊'
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600'
      case 'down': return 'text-red-600'
      case 'stable': return 'text-blue-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">📊 Data Insights & Analytics</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Valuable insights from user behavior and calculation patterns
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center space-x-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            size="sm"
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredInsights.map((insight) => (
          <Card key={insight.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{insight.title}</CardTitle>
                <div className="flex items-center space-x-2">
                  <span className={getTrendColor(insight.trend)}>
                    {getTrendIcon(insight.trend)}
                  </span>
                  <Badge variant="secondary" className="capitalize">
                    {insight.trend}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {insight.description}
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <p className="text-sm font-medium">{insight.value}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <Badge variant="outline">{insight.category}</Badge>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Data Monetization Options */}
      <Card>
        <CardHeader>
          <CardTitle>💰 Data Monetization Opportunities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Market Research Reports</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Financial behavior patterns</li>
                <li>• Health awareness trends</li>
                <li>• Investment preferences</li>
                <li>• Demographic insights</li>
              </ul>
              <Button size="sm" variant="outline">
                Create Report
              </Button>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Partner Insights</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Lead generation data</li>
                <li>• User intent analysis</li>
                <li>• Conversion opportunities</li>
                <li>• Market segmentation</li>
              </ul>
              <Button size="sm" variant="outline">
                Share with Partners
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Notice */}
      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Privacy First:</strong> All insights are anonymized and aggregated. 
          No personal data is shared. Users can opt-out of data collection anytime.
        </p>
      </div>
    </div>
  )
}
