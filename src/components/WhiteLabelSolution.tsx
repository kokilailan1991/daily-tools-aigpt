import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Input } from './ui/input'

interface WhiteLabelPackage {
  id: string
  name: string
  price: number
  setupFee: number
  features: string[]
  target: string
  popular?: boolean
}

const whiteLabelPackages: WhiteLabelPackage[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: 9999,
    setupFee: 5000,
    features: [
      '5 core calculators',
      'Basic customization',
      'Your domain & branding',
      'Email support',
      '3 months hosting included'
    ],
    target: 'Small businesses, consultants'
  },
  {
    id: 'professional',
    name: 'Professional Package',
    price: 24999,
    setupFee: 10000,
    features: [
      '15+ calculators',
      'Full customization',
      'Your domain & branding',
      'Priority support',
      '6 months hosting included',
      'Custom integrations',
      'Analytics dashboard'
    ],
    target: 'Medium businesses, agencies',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Package',
    price: 49999,
    setupFee: 15000,
    features: [
      'All calculators + custom',
      'Complete white-label solution',
      'Your domain & branding',
      '24/7 dedicated support',
      '12 months hosting included',
      'Custom integrations',
      'Advanced analytics',
      'API access',
      'SLA guarantee'
    ],
    target: 'Large enterprises, banks'
  }
]

export default function WhiteLabelSolution() {
  const [selectedPackage, setSelectedPackage] = useState('professional')
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    company: '',
    requirements: ''
  })

  const handleContactSubmit = () => {
    // In production, send to your backend
    console.log('White label inquiry:', contactInfo)
    alert('Thank you! We\'ll contact you within 24 hours.')
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">🏢 White Label Solution</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          License our calculator suite under your brand. Perfect for businesses, 
          financial institutions, and agencies.
        </p>
      </div>

      {/* Packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {whiteLabelPackages.map((pkg) => (
          <Card 
            key={pkg.id} 
            className={`relative ${pkg.popular ? 'border-2 border-blue-500' : ''}`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Most Popular</Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">{pkg.name}</CardTitle>
              <div className="mt-4">
                <span className="text-3xl font-bold">₹{pkg.price.toLocaleString()}</span>
                <span className="text-gray-600 dark:text-gray-400">/year</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                + ₹{pkg.setupFee.toLocaleString()} setup fee
              </p>
              <Badge variant="secondary" className="mt-2">
                {pkg.target}
              </Badge>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full"
                variant={pkg.popular ? 'default' : 'outline'}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle>📞 Get Started</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <Input
                value={contactInfo.name}
                onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Company</label>
            <Input
              value={contactInfo.company}
              onChange={(e) => setContactInfo({...contactInfo, company: e.target.value})}
              placeholder="Your company name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Requirements</label>
            <textarea
              className="w-full p-3 border rounded-lg resize-none"
              rows={4}
              value={contactInfo.requirements}
              onChange={(e) => setContactInfo({...contactInfo, requirements: e.target.value})}
              placeholder="Tell us about your specific requirements..."
            />
          </div>
          
          <Button 
            onClick={handleContactSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Send Inquiry
          </Button>
        </CardContent>
      </Card>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Why Choose White Label?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Instant Credibility</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Professional calculators enhance your brand
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Lead Generation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Capture leads through calculator interactions
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <h4 className="font-semibold">Cost Effective</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  No development costs, ready to deploy
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🚀 Success Stories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Financial Advisor</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Increased client engagement by 300% with our custom calculators"
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Insurance Company</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Generated 500+ leads in first month using our tools"
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Banking Partner</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Enhanced customer experience with branded calculators"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
