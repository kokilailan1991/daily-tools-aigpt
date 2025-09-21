import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function MemeTextGenerator() {
  const [text, setText] = useState('')
  const [style, setStyle] = useState('impact')
  const [result, setResult] = useState<string | null>(null)

  const generateMemeText = () => {
    if (!text.trim()) return

    let memeText = ''
    
    switch (style) {
      case 'impact':
        memeText = text.toUpperCase()
        break
      case 'spongebob':
        memeText = text.split('').map((char, i) => 
          i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join('')
        break
      case 'stretched':
        memeText = text.split('').join(' ')
        break
      case 'reversed':
        memeText = text.split('').reverse().join('')
        break
      case 'upside-down':
        const upsideDownMap: { [key: string]: string } = {
          'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ',
          'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u',
          'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n',
          'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z'
        }
        memeText = text.toLowerCase().split('').map(char => 
          upsideDownMap[char] || char
        ).reverse().join('')
        break
      case 'vaporwave':
        const vaporwaveMap: { [key: string]: string } = {
          'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ',
          'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ',
          'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ', 'u': 'ｕ',
          'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ'
        }
        memeText = text.toLowerCase().split('').map(char => 
          vaporwaveMap[char] || char
        ).join('')
        break
      default:
        memeText = text
    }

    setResult(memeText)
  }

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result)
      alert('Copied to clipboard!')
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          🔥 Generate viral meme text in different styles
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Enter Text</label>
          <Input
            type="text"
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Meme Style</label>
          <select
            className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            <option value="impact">IMPACT (All Caps)</option>
            <option value="spongebob">SpOnGeBoB (Alternating)</option>
            <option value="stretched">S T R E T C H E D</option>
            <option value="reversed">reversed</option>
            <option value="upside-down">ɥsᴉpǝ poʍu</option>
            <option value="vaporwave">ｖａｐｏｒｗａｖｅ</option>
          </select>
        </div>
      </div>

      <Button 
        onClick={generateMemeText}
        className="w-full"
        disabled={!text.trim()}
      >
        Generate Meme Text
      </Button>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Generated Meme Text
              <Button size="sm" onClick={copyToClipboard}>
                Copy
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-lg break-all">
              {result}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
