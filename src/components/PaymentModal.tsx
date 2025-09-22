import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  plan: {
    name: string
    price: number
    currency: string
    period: string
  }
}

export default function PaymentModal({ isOpen, onClose, plan }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'wallet'>('card')
  const [isProcessing, setIsProcessing] = useState(false)

  if (!isOpen) return null

  const handlePayment = async () => {
    setIsProcessing(true)
    
    try {
      // Mock payment processing for demo
      // In production, integrate with Razorpay:
      // const options = { key: 'rzp_test_xxx', amount: plan.price * 100, ... }
      // const razorpay = new window.Razorpay(options)
      // razorpay.open()
      
      setTimeout(() => {
        console.log('Payment processed successfully!')
        setIsProcessing(false)
        onClose()
        alert('Payment successful! Welcome to Premium!')
      }, 2000)

    } catch (error) {
      console.error('Payment failed:', error)
      setIsProcessing(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Complete Payment</CardTitle>
            <Button variant="ghost" onClick={onClose}>✕</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Plan Summary */}
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{plan.name}</h3>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">
                {plan.currency}{plan.price}
              </span>
              <Badge variant="secondary">/{plan.period}</Badge>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-3">
            <h4 className="font-medium">Choose Payment Method</h4>
            
            <div className="space-y-2">
              <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value as any)}
                />
                <span>💳 Credit/Debit Card</span>
              </label>

              <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={(e) => setPaymentMethod(e.target.value as any)}
                />
                <span>📱 UPI (GPay, PhonePe, Paytm)</span>
              </label>

              <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                <input
                  type="radio"
                  name="payment"
                  value="wallet"
                  checked={paymentMethod === 'wallet'}
                  onChange={(e) => setPaymentMethod(e.target.value as any)}
                />
                <span>💰 Digital Wallets</span>
              </label>
            </div>
          </div>

          {/* Payment Button */}
          <Button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
          >
            {isProcessing ? 'Processing...' : `Pay ${plan.currency}${plan.price}`}
          </Button>

          {/* Security Notice */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>🔒 Secure payment powered by Razorpay</p>
            <p>7-day free trial • Cancel anytime</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
