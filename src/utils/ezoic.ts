// Ezoic integration
declare global {
  interface Window {
    ezoic: any;
    ezoicAds: any;
  }
}

export class EzoicManager {
  private isInitialized = false
  private siteId: string
  private userId: string

  constructor(siteId: string, userId: string) {
    this.siteId = siteId
    this.userId = userId
  }

  // Initialize Ezoic
  async initialize() {
    if (this.isInitialized) return

    try {
      // Load Ezoic script
      const script = document.createElement('script')
      script.async = true
      script.src = `https://go.ezodn.com/ads.js`
      document.head.appendChild(script)

      // Initialize Ezoic
      window.ezoic = window.ezoic || {}
      window.ezoic.siteId = this.siteId
      window.ezoic.userId = this.userId

      this.isInitialized = true
      console.log('Ezoic initialized successfully')
    } catch (error) {
      console.error('Failed to initialize Ezoic:', error)
    }
  }

  // Create Ezoic ad placeholder
  createAdPlaceholder(adId: string, adType: string = 'banner') {
    if (!this.isInitialized) {
      console.warn('Ezoic not initialized')
      return null
    }

    const adElement = document.createElement('div')
    adElement.id = `ezoic-${adId}`
    adElement.className = `ezoic-ad ezoic-ad-${adType}`
    adElement.setAttribute('data-ezoic-ad-id', adId)
    adElement.setAttribute('data-ezoic-ad-type', adType)

    return adElement
  }

  // Create responsive ad
  createResponsiveAd(adId: string, containerId: string) {
    const adElement = this.createAdPlaceholder(adId, 'responsive')
    if (adElement) {
      const container = document.getElementById(containerId)
      if (container) {
        container.appendChild(adElement)
      }
    }
    return adElement
  }

  // Create banner ad
  createBannerAd(adId: string, containerId: string) {
    const adElement = this.createAdPlaceholder(adId, 'banner')
    if (adElement) {
      adElement.style.width = '100%'
      adElement.style.height = '90px'
      adElement.style.minHeight = '90px'
      
      const container = document.getElementById(containerId)
      if (container) {
        container.appendChild(adElement)
      }
    }
    return adElement
  }

  // Create rectangle ad
  createRectangleAd(adId: string, containerId: string) {
    const adElement = this.createAdPlaceholder(adId, 'rectangle')
    if (adElement) {
      adElement.style.width = '300px'
      adElement.style.height = '250px'
      adElement.style.minHeight = '250px'
      
      const container = document.getElementById(containerId)
      if (container) {
        container.appendChild(adElement)
      }
    }
    return adElement
  }

  // Create square ad
  createSquareAd(adId: string, containerId: string) {
    const adElement = this.createAdPlaceholder(adId, 'square')
    if (adElement) {
      adElement.style.width = '250px'
      adElement.style.height = '250px'
      adElement.style.minHeight = '250px'
      
      const container = document.getElementById(containerId)
      if (container) {
        container.appendChild(adElement)
      }
    }
    return adElement
  }

  // Refresh ads
  refreshAds() {
    if (window.ezoic && window.ezoic.refreshAds) {
      window.ezoic.refreshAds()
    }
  }

  // Get ad performance data
  getAdPerformance() {
    if (window.ezoic && window.ezoic.getPerformance) {
      return window.ezoic.getPerformance()
    }
    return null
  }
}

// Ezoic ad configurations
export const EZOIC_AD_UNITS = {
  // Banner ads
  TOP_BANNER: '12345',
  BOTTOM_BANNER: '12346',
  
  // Rectangle ads
  SIDEBAR_RECTANGLE: '12347',
  CONTENT_RECTANGLE: '12348',
  
  // Square ads
  SIDEBAR_SQUARE: '12349',
  MOBILE_SQUARE: '12350',
  
  // Responsive ads
  RESPONSIVE_1: '12351',
  RESPONSIVE_2: '12352'
}

// Initialize Ezoic (replace with your actual site ID and user ID)
export const ezoicManager = new EzoicManager('123456', '789012')
