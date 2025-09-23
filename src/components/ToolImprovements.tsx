import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export default function ToolImprovements() {
  const [selectedCategory, setSelectedCategory] = useState('ux')

  const improvements = {
    ux: [
      {
        title: "Dark/Light Theme Toggle",
        description: "Add theme switcher for better user experience",
        priority: "High",
        effort: "Low",
        impact: "High"
      },
      {
        title: "Keyboard Shortcuts",
        description: "Add keyboard shortcuts for power users",
        priority: "Medium",
        effort: "Medium",
        impact: "Medium"
      },
      {
        title: "Tool History",
        description: "Remember last used tools and calculations",
        priority: "High",
        effort: "Medium",
        impact: "High"
      },
      {
        title: "Favorites System",
        description: "Let users bookmark their favorite tools",
        priority: "Medium",
        effort: "Low",
        impact: "Medium"
      },
      {
        title: "Recent Tools",
        description: "Show recently used tools for quick access",
        priority: "High",
        effort: "Low",
        impact: "High"
      }
    ],
    features: [
      {
        title: "Export to PDF",
        description: "Allow users to export calculation results as PDF",
        priority: "High",
        effort: "Medium",
        impact: "High"
      },
      {
        title: "Email Results",
        description: "Send calculation results via email",
        priority: "Medium",
        effort: "High",
        impact: "Medium"
      },
      {
        title: "Save Calculations",
        description: "Save and load previous calculations",
        priority: "High",
        effort: "Medium",
        impact: "High"
      },
      {
        title: "Comparison Mode",
        description: "Compare multiple scenarios side by side",
        priority: "Medium",
        effort: "High",
        impact: "Medium"
      },
      {
        title: "Custom Formulas",
        description: "Let users create and save custom formulas",
        priority: "Low",
        effort: "High",
        impact: "Low"
      }
    ],
    performance: [
      {
        title: "Offline Support",
        description: "Make tools work without internet connection",
        priority: "High",
        effort: "High",
        impact: "High"
      },
      {
        title: "Progressive Web App",
        description: "Convert to PWA for mobile app-like experience",
        priority: "High",
        effort: "Medium",
        impact: "High"
      },
      {
        title: "Caching System",
        description: "Cache calculations for faster repeated use",
        priority: "Medium",
        effort: "Medium",
        impact: "Medium"
      },
      {
        title: "Lazy Loading",
        description: "Load tools only when needed",
        priority: "Medium",
        effort: "Medium",
        impact: "Medium"
      }
    ],
    monetization: [
      {
        title: "API Access",
        description: "Provide API for developers to integrate tools",
        priority: "High",
        effort: "High",
        impact: "High"
      },
      {
        title: "White Label Solution",
        description: "License tools to other companies",
        priority: "Medium",
        effort: "High",
        impact: "High"
      },
      {
        title: "Affiliate Marketing",
        description: "Partner with financial services for referrals",
        priority: "Medium",
        effort: "Low",
        impact: "Medium"
      },
      {
        title: "Premium Tools",
        description: "Create advanced versions of existing tools",
        priority: "High",
        effort: "Medium",
        impact: "High"
      }
    ]
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500'
      case 'Medium': return 'bg-yellow-500'
      case 'Low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case 'Low': return 'bg-green-500'
      case 'Medium': return 'bg-yellow-500'
      case 'High': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">🚀 Tool Improvement Ideas</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Strategic improvements to enhance user experience, add features, and increase revenue potential
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-2">
        {Object.keys(improvements).map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className="capitalize"
          >
            {category === 'ux' ? 'UX/UI' : category}
          </Button>
        ))}
      </div>

      {/* Improvements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {improvements[selectedCategory as keyof typeof improvements].map((improvement, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{improvement.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {improvement.description}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Badge className={`${getPriorityColor(improvement.priority)} text-white`}>
                    {improvement.priority} Priority
                  </Badge>
                  <Badge className={`${getEffortColor(improvement.effort)} text-white`}>
                    {improvement.effort} Effort
                  </Badge>
                </div>
                <Badge variant="outline">
                  {improvement.impact} Impact
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Implementation Priority */}
      <Card>
        <CardHeader>
          <CardTitle>📋 Recommended Implementation Order</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-500 text-white">1</Badge>
              <div>
                <h4 className="font-semibold">Quick Wins (High Impact, Low Effort)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Dark theme, favorites, recent tools, keyboard shortcuts
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-yellow-500 text-white">2</Badge>
              <div>
                <h4 className="font-semibold">Core Features (High Impact, Medium Effort)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  PDF export, save calculations, PWA conversion
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-500 text-white">3</Badge>
              <div>
                <h4 className="font-semibold">Advanced Features (High Impact, High Effort)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  API access, offline support, white label solution
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
