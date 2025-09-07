import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function IPLookup() {
  const [ip, setIp] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const lookupIP = async () => {
    setLoading(true)
    try {
      // Simulate API call with dummy data
      setTimeout(() => {
        setResult({
          ip: ip || '192.168.1.1',
          country: 'United States',
          city: 'New York',
          region: 'NY',
          timezone: 'America/New_York',
          isp: 'Example ISP',
          org: 'Example Organization'
        })
        setLoading(false)
      }, 1000)
    } catch (error) {
      setResult({ error: 'Failed to lookup IP address' })
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">IP Address (optional)</label>
        <Input
          placeholder="Leave empty for your current IP"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
        />
      </div>
      
      <Button onClick={lookupIP} className="w-full" disabled={loading}>
        {loading ? 'Looking up...' : 'Lookup IP'}
      </Button>
      
      {result && (
        <Card>
          <CardHeader>
            <CardTitle>IP Information</CardTitle>
          </CardHeader>
          <CardContent>
            {result.error ? (
              <div className="text-red-600">{result.error}</div>
            ) : (
              <div className="space-y-2">
                <div><strong>IP:</strong> {result.ip}</div>
                <div><strong>Country:</strong> {result.country}</div>
                <div><strong>City:</strong> {result.city}</div>
                <div><strong>Region:</strong> {result.region}</div>
                <div><strong>Timezone:</strong> {result.timezone}</div>
                <div><strong>ISP:</strong> {result.isp}</div>
                <div><strong>Organization:</strong> {result.org}</div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
