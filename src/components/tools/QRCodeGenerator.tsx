import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function QRCodeGenerator() {
  const [text, setText] = useState('')
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  const generateQR = () => {
    if (text.trim()) {
      const encodedText = encodeURIComponent(text)
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedText}`
      setQrCodeUrl(qrUrl)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Text or URL</label>
        <Input
          placeholder="Enter text or URL to generate QR code"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      
      <Button onClick={generateQR} className="w-full">
        Generate QR Code
      </Button>
      
      {qrCodeUrl && (
        <Card>
          <CardHeader>
            <CardTitle>QR Code</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <img src={qrCodeUrl} alt="QR Code" className="mx-auto mb-4" />
              <Button
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = qrCodeUrl
                  link.download = 'qrcode.png'
                  link.click()
                }}
              >
                Download QR Code
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
