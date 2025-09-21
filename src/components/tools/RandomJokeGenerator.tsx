import { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'

export default function RandomJokeGenerator() {
  const [joke, setJoke] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything! 😄",
    "Why did the scarecrow win an award? He was outstanding in his field! 🌾",
    "Why don't eggs tell jokes? They'd crack each other up! 🥚",
    "What do you call a fake noodle? An impasta! 🍝",
    "Why did the math book look so sad? Because it had too many problems! 📚",
    "What do you call a bear with no teeth? A gummy bear! 🐻",
    "Why don't skeletons fight each other? They don't have the guts! 💀",
    "What do you call a fish wearing a bowtie? So-fish-ticated! 🐟",
    "Why did the coffee file a police report? It got mugged! ☕",
    "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks! 🦕",
    "Why don't oysters donate to charity? Because they are shellfish! 🦪",
    "What do you call a can opener that doesn't work? A can't opener! 🥫",
    "Why did the bicycle fall over? Because it was two tired! 🚲",
    "What do you call a belt made of watches? A waist of time! ⌚",
    "Why don't scientists trust stairs? Because they're always up to something! 🪜"
  ]

  const generateJoke = () => {
    setLoading(true)
    setTimeout(() => {
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
      setJoke(randomJoke)
      setLoading(false)
    }, 500)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">😄 Random Joke Generator</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Get ready to laugh! Click the button for a random joke.
        </p>
      </div>

      <Button 
        onClick={generateJoke} 
        className="w-full"
        disabled={loading}
      >
        {loading ? "🤔 Thinking of a joke..." : "😂 Get Random Joke"}
      </Button>

      {joke && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="text-4xl mb-4">😂</div>
              <div className="text-lg font-medium leading-relaxed">
                {joke}
              </div>
              <Button 
                onClick={generateJoke}
                className="mt-4"
                variant="outline"
              >
                🎲 Another Joke Please!
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="text-center text-sm text-gray-500">
        💡 Tip: Share your favorite jokes with friends to spread the laughter!
      </div>
    </div>
  )
}
