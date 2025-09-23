// Google AdSense integration
declare global {
  interface Window {
    adsbygoogle: any[];
    googletag: any;
  }
}

export class AdSenseManager {
  private isInitialized = false
  private adUnits: Map<string, any> = new Map()

  constructor(private publisherId: string) {}

  // Initialize Google AdSense
  async initialize() {
    if (this.isInitialized) return

    try {
      // Load Google AdSense script
      const script = document.createElement('script')
      script.async = true
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.publisherId}`
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)

      // Initialize adsbygoogle array
      window.adsbygoogle = window.adsbygoogle || []
      
      this.isInitialized = true
      console.log('AdSense initialized successfully')
    } catch (error) {
      console.error('Failed to initialize AdSense:', error)
    }
  }

  // Create ad unit
  createAdUnit(adSlot: string, adFormat: string, adStyle: any = {}) {
    if (!this.isInitialized) {
      console.warn('AdSense not initialized')
      return null
    }

    const adElement = document.createElement('ins')
    adElement.className = 'adsbygoogle'
    adElement.style.display = 'block'
    adElement.setAttribute('data-ad-client', this.publisherId)
    adElement.setAttribute('data-ad-slot', adSlot)
    adElement.setAttribute('data-ad-format', adFormat)
    
    // Apply custom styles
    Object.assign(adElement.style, adStyle)

    // Push to adsbygoogle array
    window.adsbygoogle.push({})

    this.adUnits.set(adSlot, adElement)
    return adElement
  }

  // Create responsive ad
  createResponsiveAd(adSlot: string, adStyle: any = {}) {
    return this.createAdUnit(adSlot, 'auto', {
      width: '100%',
      height: 'auto',
      ...adStyle
    })
  }

  // Create banner ad
  createBannerAd(adSlot: string, width: number = 728, height: number = 90) {
    return this.createAdUnit(adSlot, 'banner', {
      width: width,
      height: height
    })
  }

  // Create rectangle ad
  createRectangleAd(adSlot: string, width: number = 300, height: number = 250) {
    return this.createAdUnit(adSlot, 'rectangle', {
      width: width,
      height: height
    })
  }

  // Create square ad
  createSquareAd(adSlot: string, size: number = 250) {
    return this.createAdUnit(adSlot, 'square', {
      width: size,
      height: size
    })
  }

  // Refresh ad
  refreshAd(adSlot: string) {
    const adElement = this.adUnits.get(adSlot)
    if (adElement && window.adsbygoogle) {
      try {
        (window.adsbygoogle as any).push({})
      } catch (error) {
        console.error('Failed to refresh ad:', error)
      }
    }
  }

  // Remove ad
  removeAd(adSlot: string) {
    const adElement = this.adUnits.get(adSlot)
    if (adElement && adElement.parentNode) {
      adElement.parentNode.removeChild(adElement)
      this.adUnits.delete(adSlot)
    }
  }
}

// Ad unit configurations
export const AD_UNITS = {
  // Banner ads
  TOP_BANNER: '1234567890',
  BOTTOM_BANNER: '1234567891',
  
  // Rectangle ads
  SIDEBAR_RECTANGLE: '1234567892',
  CONTENT_RECTANGLE: '1234567893',
  
  // Square ads
  SIDEBAR_SQUARE: '1234567894',
  MOBILE_SQUARE: '1234567895',
  
  // Responsive ads
  RESPONSIVE_1: '1234567896',
  RESPONSIVE_2: '1234567897'
}

// Initialize AdSense (replace with your actual publisher ID)
export const adSenseManager = new AdSenseManager('ca-pub-1234567890123456')
