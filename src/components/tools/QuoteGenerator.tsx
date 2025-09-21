import { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'

export default function QuoteGenerator() {
  const [quote, setQuote] = useState<{
    text: string
    author: string
    category: string
  } | null>(null)
  const [loading, setLoading] = useState(false)

  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "Success" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", category: "Innovation" },
    { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon", category: "Life" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "Dreams" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle", category: "Hope" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "Perseverance" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "Action" },
    { text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett", category: "Courage" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Belief" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins", category: "Beginning" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", category: "Opportunity" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb", category: "Time" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis", category: "Goals" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "Action" },
    { text: "Your limitation—it's only your imagination.", author: "Unknown", category: "Limitations" }
  ]

  const generateQuote = () => {
    setLoading(true)
    setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      setQuote(randomQuote)
      setLoading(false)
    }, 500)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">💭 Inspirational Quote Generator</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Get inspired with random quotes from famous people.
        </p>
      </div>

      <Button 
        onClick={generateQuote} 
        className="w-full"
        disabled={loading}
      >
        {loading ? "💭 Finding inspiration..." : "✨ Get Inspirational Quote"}
      </Button>

      {quote && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="text-4xl mb-4">💭</div>
              <blockquote className="text-lg italic leading-relaxed text-gray-700 dark:text-gray-300">
                "{quote.text}"
              </blockquote>
              <div className="text-right">
                <cite className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  — {quote.author}
                </cite>
                <div className="text-xs text-gray-500 mt-1">
                  Category: {quote.category}
                </div>
              </div>
              <Button 
                onClick={generateQuote}
                className="mt-4"
                variant="outline"
              >
                🎲 Another Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="text-center text-sm text-gray-500">
        💡 Tip: Save your favorite quotes and share them to inspire others!
      </div>
    </div>
  )
}
