import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function PasswordGenerator() {
  const [length, setLength] = useState('12')
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    let charset = ''
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) charset += '0123456789'
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'

    if (charset === '') {
      alert('Please select at least one character type')
      return
    }

    let result = ''
    for (let i = 0; i < parseInt(length); i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(result)
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    alert('Password copied to clipboard!')
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Password Length</label>
        <Input
          type="number"
          min="4"
          max="128"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium">Character Types</label>
        <div className="grid grid-cols-2 gap-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            <span>Uppercase (A-Z)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
            <span>Lowercase (a-z)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <span>Numbers (0-9)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            <span>Symbols (!@#$)</span>
          </label>
        </div>
      </div>
      
      <Button onClick={generatePassword} className="w-full">
        Generate Password
      </Button>
      
      {password && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Password</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md font-mono text-sm break-all">
                {password}
              </div>
              <Button onClick={copyPassword} className="w-full">
                Copy to Clipboard
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
