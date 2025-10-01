import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface AffiliateOffer {
  id: string
  title: string
  description: string
  discount: string
  originalPrice: string
  offerPrice: string
  affiliateLink: string
  category: string
  icon: string
  validUntil: string
}

const affiliateOffers: AffiliateOffer[] = [
  {
    id: 'zerodha',
    title: 'Zerodha Trading Account',
    description: 'Open your trading account with India\'s largest broker',
    discount: 'Free',
    originalPrice: '₹200',
    offerPrice: '₹0',
    affiliateLink: 'https://zerodha.com?ref=DAILYTOOLS',
    category: 'Trading',
    icon: '📈',
    validUntil: 'Limited Time'
  },
  {
    id: 'groww',
    title: 'Groww Mutual Funds',
    description: 'Start your SIP journey with zero commission',
    discount: '0% Commission',
    originalPrice: '₹100',
    offerPrice: '₹0',
    affiliateLink: 'https://groww.in?ref=DAILYTOOLS',
    category: 'Investing',
    icon: '💰',
    validUntil: 'Limited Time'
  },
  {
    id: 'policybazaar',
    title: 'PolicyBazaar Insurance',
    description: 'Compare and buy insurance at best rates',
    discount: 'Up to 50% Off',
    originalPrice: '₹5000',
    offerPrice: '₹2500',
    affiliateLink: 'https://policybazaar.com?ref=DAILYTOOLS',
    category: 'Insurance',
    icon: '🛡️',
    validUntil: 'Limited Time'
  },
  {
    id: 'cred',
    title: 'CRED Credit Card',
    description: 'Pay credit card bills and earn rewards',
    discount: '₹100 Cashback',
    originalPrice: '₹0',
    offerPrice: '₹100',
    affiliateLink: 'https://cred.club?ref=DAILYTOOLS',
    category: 'Credit',
    icon: '💳',
    validUntil: 'Limited Time'
  }
]

export default function AffiliatePromotions() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Trading', 'Investing', 'Insurance', 'Credit']
  const filteredOffers = selectedCategory === 'all' 
    ? affiliateOffers 
    : affiliateOffers.filter(offer => offer.category === selectedCategory)

  const handleAffiliateClick = (offer: AffiliateOffer) => {
    // Track affiliate click
    console.log('Affiliate click tracked:', offer.id)
    
    // Open affiliate link
    window.open(offer.affiliateLink, '_blank')
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">🎯 Exclusive Offers</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Special deals from our trusted partners
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center space-x-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            size="sm"
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOffers.map((offer) => (
          <Card key={offer.id} className="hover:shadow-lg transition-shadow border-2 border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{offer.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{offer.title}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      {offer.category}
                    </Badge>
                  </div>
                </div>
                <Badge className="bg-green-500 text-white">
                  {offer.discount}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {offer.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-green-600">
                    {offer.offerPrice}
                  </span>
                  {offer.originalPrice !== '₹0' && (
                    <span className="text-sm text-gray-500 line-through">
                      {offer.originalPrice}
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-500">
                  {offer.validUntil}
                </span>
              </div>

              <Button
                onClick={() => handleAffiliateClick(offer)}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Get This Offer
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="text-center text-xs text-gray-500">
        <p>
          * We may earn a commission when you use our affiliate links. 
          This helps us keep our tools free for everyone.
        </p>
      </div>
    </div>
  )
}
