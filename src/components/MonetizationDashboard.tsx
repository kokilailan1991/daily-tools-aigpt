import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface RevenueData {
  totalRevenue: number
  monthlyRevenue: number
  subscriptions: number
  adRevenue: number
  conversionRate: number
  averageRevenuePerUser: number
}

export default function MonetizationDashboard() {
  const [revenueData, setRevenueData] = useState<RevenueData>({
    totalRevenue: 0,
    monthlyRevenue: 0,
    subscriptions: 0,
    adRevenue: 0,
    conversionRate: 0,
    averageRevenuePerUser: 0
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Mock revenue data - in production, fetch from your backend
    setRevenueData({
      totalRevenue: 125000,
      monthlyRevenue: 15000,
      subscriptions: 45,
      adRevenue: 2500,
      conversionRate: 3.2,
      averageRevenuePerUser: 333
    })
  }, [])

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <Button
          onClick={() => setIsVisible(true)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg"
        >
          💰 Revenue
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 w-80 max-h-96 overflow-y-auto">
      <Card className="shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">💰 Revenue Dashboard</CardTitle>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsVisible(false)}
            >
              ✕
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Revenue Overview */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">
                ₹{revenueData.totalRevenue.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total Revenue
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">
                ₹{revenueData.monthlyRevenue.toLocaleString()}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                This Month
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Active Subscriptions:</span>
              <Badge className="bg-purple-500">{revenueData.subscriptions}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Ad Revenue:</span>
              <span className="font-semibold">₹{revenueData.adRevenue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Conversion Rate:</span>
              <span className="font-semibold">{revenueData.conversionRate}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">ARPU:</span>
              <span className="font-semibold">₹{revenueData.averageRevenuePerUser}</span>
            </div>
          </div>

          {/* Revenue Sources */}
          <div>
            <h4 className="font-semibold mb-2">Revenue Sources</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subscriptions:</span>
                <span className="font-semibold">₹{(revenueData.monthlyRevenue * 0.8).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Ad Revenue:</span>
                <span className="font-semibold">₹{revenueData.adRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>One-time:</span>
                <span className="font-semibold">₹{(revenueData.monthlyRevenue * 0.2).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-2">
            <Button size="sm" className="w-full">
              📊 View Detailed Reports
            </Button>
            <Button size="sm" variant="outline" className="w-full">
              💳 Payment Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
