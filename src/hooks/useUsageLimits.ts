import { useState, useEffect } from 'react'

interface UsageLimits {
  calculationsPerDay: number
  exportsPerDay: number
  toolsPerDay: number
  isPremium: boolean
}

interface UsageStats {
  calculationsUsed: number
  exportsUsed: number
  toolsUsed: number
  lastReset: string
}

const DEFAULT_LIMITS: UsageLimits = {
  calculationsPerDay: 10,
  exportsPerDay: 2,
  toolsPerDay: 5,
  isPremium: false
}

const PREMIUM_LIMITS: UsageLimits = {
  calculationsPerDay: -1, // Unlimited
  exportsPerDay: -1, // Unlimited
  toolsPerDay: -1, // Unlimited
  isPremium: true
}

export function useUsageLimits() {
  const [limits, setLimits] = useState<UsageLimits>(DEFAULT_LIMITS)
  const [usage, setUsage] = useState<UsageStats>({
    calculationsUsed: 0,
    exportsUsed: 0,
    toolsUsed: 0,
    lastReset: new Date().toDateString()
  })

  // Load usage data from localStorage
  useEffect(() => {
    const savedUsage = localStorage.getItem('usage_stats')
    const savedLimits = localStorage.getItem('user_limits')
    
    if (savedUsage) {
      const parsedUsage = JSON.parse(savedUsage)
      // Check if we need to reset daily limits
      if (parsedUsage.lastReset !== new Date().toDateString()) {
        setUsage({
          calculationsUsed: 0,
          exportsUsed: 0,
          toolsUsed: 0,
          lastReset: new Date().toDateString()
        })
      } else {
        setUsage(parsedUsage)
      }
    }

    if (savedLimits) {
      setLimits(JSON.parse(savedLimits))
    }
  }, [])

  // Save usage data to localStorage
  useEffect(() => {
    localStorage.setItem('usage_stats', JSON.stringify(usage))
  }, [usage])

  const checkLimit = (type: keyof Omit<UsageStats, 'lastReset'>): boolean => {
    const limit = limits[type === 'calculationsUsed' ? 'calculationsPerDay' : 
                        type === 'exportsUsed' ? 'exportsPerDay' : 'toolsPerDay']
    
    if (limit === -1) return true // Unlimited for premium
    return usage[type] < limit
  }

  const incrementUsage = (type: keyof Omit<UsageStats, 'lastReset'>) => {
    if (checkLimit(type)) {
      setUsage(prev => ({
        ...prev,
        [type]: prev[type] + 1
      }))
      return true
    }
    return false
  }

  const upgradeToPremium = () => {
    setLimits(PREMIUM_LIMITS)
    localStorage.setItem('user_limits', JSON.stringify(PREMIUM_LIMITS))
  }

  const getRemainingUsage = (type: keyof Omit<UsageStats, 'lastReset'>): number => {
    const limit = limits[type === 'calculationsUsed' ? 'calculationsPerDay' : 
                        type === 'exportsUsed' ? 'exportsPerDay' : 'toolsPerDay']
    
    if (limit === -1) return -1 // Unlimited
    return Math.max(0, limit - usage[type])
  }

  const getUsagePercentage = (type: keyof Omit<UsageStats, 'lastReset'>): number => {
    const limit = limits[type === 'calculationsUsed' ? 'calculationsPerDay' : 
                        type === 'exportsUsed' ? 'exportsPerDay' : 'toolsPerDay']
    
    if (limit === -1) return 0 // Unlimited
    return Math.min(100, (usage[type] / limit) * 100)
  }

  return {
    limits,
    usage,
    checkLimit,
    incrementUsage,
    upgradeToPremium,
    getRemainingUsage,
    getUsagePercentage,
    isPremium: limits.isPremium
  }
}
