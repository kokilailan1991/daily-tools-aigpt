import { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

interface AdBannerProps {
  position: 'top' | 'bottom' | 'sidebar'
  size: 'banner' | 'rectangle' | 'square'
  isPremium?: boolean
}

export default function AdBanner({ position, size, isPremium = false }: AdBannerProps) {
  const [adLoaded, setAdLoaded] = useState(false)

  // Mock ad data - in production, you'd integrate with Google AdSense, etc.
  const mockAds = [
    {
      id: 1,
      title: "🚀 Boost Your Productivity",
      description: "Try our premium tools for unlimited calculations",
      cta: "Upgrade Now",
      image: "https://via.placeholder.com/300x100/4F46E5/FFFFFF?text=Premium+Tools",
      link: "#premium"
    },
    {
      id: 2,
      title: "💼 Professional Tools",
      description: "Advanced features for business users",
      cta: "Learn More",
      image: "https://via.placeholder.com/300x100/10B981/FFFFFF?text=Business+Tools",
      link: "#business"
    },
    {
      id: 3,
      title: "📊 Analytics Dashboard",
      description: "Track your usage and insights",
      cta: "View Dashboard",
      image: "https://via.placeholder.com/300x100/F59E0B/FFFFFF?text=Analytics",
      link: "#analytics"
    }
  ]

  const [currentAd] = useState(mockAds[Math.floor(Math.random() * mockAds.length)])

  useEffect(() => {
    // Simulate ad loading delay
    const timer = setTimeout(() => setAdLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isPremium) {
    return null // Don't show ads for premium users
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'banner':
        return 'h-24 w-full'
      case 'rectangle':
        return 'h-48 w-80'
      case 'square':
        return 'h-64 w-64'
      default:
        return 'h-24 w-full'
    }
  }

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'mb-4'
      case 'bottom':
        return 'mt-4'
      case 'sidebar':
        return 'mb-6'
      default:
        return 'mb-4'
    }
  }

  return (
    <div className={`${getPositionClasses()} ${position === 'sidebar' ? 'hidden lg:block' : ''}`}>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {adLoaded ? (
            <div className={`${getSizeClasses()} relative group cursor-pointer`}>
              <img
                src={currentAd.image}
                alt={currentAd.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg mb-2">{currentAd.title}</h3>
                  <p className="text-sm mb-3">{currentAd.description}</p>
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-gray-100"
                    onClick={() => window.open(currentAd.link, '_blank')}
                  >
                    {currentAd.cta}
                  </Button>
                </div>
              </div>
              <div className="absolute top-2 right-2">
                <span className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                  Ad
                </span>
              </div>
            </div>
          ) : (
            <div className={`${getSizeClasses()} bg-gray-200 dark:bg-gray-700 flex items-center justify-center`}>
              <div className="text-gray-500 dark:text-gray-400">Loading ad...</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
