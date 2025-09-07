import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'

export default function WordCounter() {
  const [text, setText] = useState('')

  const getStats = () => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).length : 0
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0

    return { words, characters, charactersNoSpaces, paragraphs, sentences }
  }

  const stats = getStats()

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Text to Analyze</label>
        <textarea
          className="w-full h-40 px-3 py-2 border border-input bg-background rounded-md text-sm resize-none"
          placeholder="Enter or paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.words}</div>
            <div className="text-sm text-gray-600">Words</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{stats.characters}</div>
            <div className="text-sm text-gray-600">Characters</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{stats.charactersNoSpaces}</div>
            <div className="text-sm text-gray-600">No Spaces</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{stats.paragraphs}</div>
            <div className="text-sm text-gray-600">Paragraphs</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">{stats.sentences}</div>
            <div className="text-sm text-gray-600">Sentences</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
