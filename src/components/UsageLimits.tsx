import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface UsageLimitsProps {
  toolName: string
  currentUsage: number
  limit: number
  onUpgrade: () => void
}

export default function UsageLimits({ toolName, currentUsage, limit, onUpgrade }: UsageLimitsProps) {
  const usagePercentage = (currentUsage / limit) * 100
  const isLimitReached = currentUsage >= limit

  return (
    <Card className={`border-2 ${isLimitReached ? 'border-red-500' : 'border-yellow-500'}`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Usage Limit</span>
          <Badge variant={isLimitReached ? 'destructive' : 'secondary'}>
            {currentUsage}/{limit}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>{toolName} calculations today</span>
            <span>{currentUsage}/{limit}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${isLimitReached ? 'bg-red-500' : 'bg-blue-500'}`}
              style={{ width: `${Math.min(usagePercentage, 100)}%` }}
            ></div>
          </div>
        </div>

        {isLimitReached ? (
          <div className="text-center space-y-3">
            <div className="text-red-600 font-semibold">
              ⚠️ Daily limit reached!
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Upgrade to Premium for unlimited calculations
            </p>
            <Button onClick={onUpgrade} className="w-full bg-blue-600 hover:bg-blue-700">
              🚀 Upgrade to Premium
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {limit - currentUsage} calculations remaining today
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
