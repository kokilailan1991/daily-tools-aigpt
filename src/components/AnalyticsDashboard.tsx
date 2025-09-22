import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { analytics } from '../utils/simpleAnalytics'

export default function AnalyticsDashboard() {
  const [analyticsData, setAnalyticsData] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setAnalyticsData(analytics.getAnalyticsData())
  }, [])

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsVisible(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg"
        >
          📊 Analytics
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 max-h-96 overflow-y-auto">
      <Card className="shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">📊 Usage Analytics</CardTitle>
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
          {analyticsData ? (
            <>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {analyticsData.totalEvents}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Total Events
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {analyticsData.uniqueUsers}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Unique Users
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Most Used Tools:</h4>
                <div className="space-y-2">
                  {Object.entries(analyticsData.toolUsage)
                    .sort(([,a], [,b]) => (b as number) - (a as number))
                    .slice(0, 5)
                    .map(([tool, count]) => (
                      <div key={tool} className="flex justify-between text-sm">
                        <span className="truncate">{tool}</span>
                        <span className="font-semibold">{count as number}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Recent Activity:</h4>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {analyticsData.recentEvents.slice(-5).map((event: any, index: number) => (
                    <div key={index} className="text-xs text-gray-600 dark:text-gray-400">
                      {new Date(event.timestamp).toLocaleTimeString()} - {event.toolName}
                    </div>
                  ))}
                </div>
              </div>

              <Button
                size="sm"
                className="w-full"
                onClick={() => {
                  const data = analytics.getAnalyticsData()
                  console.log('Full Analytics Data:', data)
                  alert('Analytics data logged to console')
                }}
              >
                Export Data
              </Button>
            </>
          ) : (
            <div className="text-center text-gray-500">
              No analytics data available
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
