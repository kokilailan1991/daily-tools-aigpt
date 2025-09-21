import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function LoveCalculator() {
  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')
  const [result, setResult] = useState<{
    percentage: number
    message: string
  } | null>(null)

  const calculateLove = () => {
    if (name1.trim() && name2.trim()) {
      // Simple fun algorithm based on string similarity
      const combined = (name1.toLowerCase() + name2.toLowerCase()).replace(/\s/g, '')
      let score = 0
      
      // Add some randomness based on name lengths and characters
      score += combined.length * 3
      score += name1.length * name2.length
      
      // Add some "magic" numbers for fun
      const magicNumbers = [7, 13, 21, 42, 69, 88, 99]
      score += magicNumbers[Math.floor(Math.random() * magicNumbers.length)]
      
      const percentage = Math.min(99, Math.max(10, score % 100))
      
      let message = ''
      if (percentage >= 90) message = "💕 Perfect Match! You're made for each other!"
      else if (percentage >= 80) message = "💖 Excellent compatibility! Great potential!"
      else if (percentage >= 70) message = "💗 Good match! Worth exploring!"
      else if (percentage >= 60) message = "💝 Decent compatibility! Give it a try!"
      else if (percentage >= 50) message = "💘 Moderate match! Friendship first?"
      else if (percentage >= 40) message = "💔 Challenging but not impossible!"
      else message = "🤔 Interesting combination! Time will tell!"

      setResult({ percentage, message })
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          💕 This is just for fun! Don't take it too seriously 😄
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">First Name</label>
          <Input
            type="text"
            placeholder="Enter first name"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Second Name</label>
          <Input
            type="text"
            placeholder="Enter second name"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
        </div>
      </div>

      <Button onClick={calculateLove} className="w-full">
        💕 Calculate Love Compatibility
      </Button>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle>Love Compatibility Result</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-pink-600">
                {result.percentage}%
              </div>
              <div className="text-lg font-semibold text-pink-600">
                {result.message}
              </div>
              <div className="text-sm text-gray-600">
                Remember: This is just for fun! 💕
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
