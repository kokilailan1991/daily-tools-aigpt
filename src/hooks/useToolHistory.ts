import { useState, useEffect } from 'react'

interface ToolUsage {
  toolId: string
  toolName: string
  timestamp: number
  usageCount: number
}

interface FavoriteTool {
  toolId: string
  toolName: string
  addedAt: number
}

export function useToolHistory() {
  const [toolHistory, setToolHistory] = useState<ToolUsage[]>([])
  const [favorites, setFavorites] = useState<FavoriteTool[]>([])

  useEffect(() => {
    // Load from localStorage
    const savedHistory = localStorage.getItem('tool_history')
    const savedFavorites = localStorage.getItem('favorite_tools')
    
    if (savedHistory) {
      setToolHistory(JSON.parse(savedHistory))
    }
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  // Track tool usage
  const trackToolUsage = (toolId: string, toolName: string) => {
    const existingTool = toolHistory.find(tool => tool.toolId === toolId)
    
    if (existingTool) {
      // Update existing tool usage
      const updatedHistory = toolHistory.map(tool =>
        tool.toolId === toolId
          ? { ...tool, usageCount: tool.usageCount + 1, timestamp: Date.now() }
          : tool
      )
      setToolHistory(updatedHistory)
      localStorage.setItem('tool_history', JSON.stringify(updatedHistory))
    } else {
      // Add new tool to history
      const newHistory = [
        { toolId, toolName, timestamp: Date.now(), usageCount: 1 },
        ...toolHistory.slice(0, 19) // Keep only last 20 tools
      ]
      setToolHistory(newHistory)
      localStorage.setItem('tool_history', JSON.stringify(newHistory))
    }
  }

  // Add/remove favorite
  const toggleFavorite = (toolId: string, toolName: string) => {
    const isFavorite = favorites.some(fav => fav.toolId === toolId)
    
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(fav => fav.toolId !== toolId)
      setFavorites(updatedFavorites)
      localStorage.setItem('favorite_tools', JSON.stringify(updatedFavorites))
    } else {
      // Add to favorites
      const newFavorite = { toolId, toolName, addedAt: Date.now() }
      const updatedFavorites = [newFavorite, ...favorites.slice(0, 9)] // Keep only 10 favorites
      setFavorites(updatedFavorites)
      localStorage.setItem('favorite_tools', JSON.stringify(updatedFavorites))
    }
  }

  // Check if tool is favorite
  const isFavorite = (toolId: string) => {
    return favorites.some(fav => fav.toolId === toolId)
  }

  // Get recent tools (last 5)
  const getRecentTools = () => {
    return toolHistory
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 5)
  }

  // Get most used tools
  const getMostUsedTools = () => {
    return toolHistory
      .sort((a, b) => b.usageCount - a.usageCount)
      .slice(0, 5)
  }

  // Clear history
  const clearHistory = () => {
    setToolHistory([])
    localStorage.removeItem('tool_history')
  }

  // Clear favorites
  const clearFavorites = () => {
    setFavorites([])
    localStorage.removeItem('favorite_tools')
  }

  return {
    toolHistory,
    favorites,
    trackToolUsage,
    toggleFavorite,
    isFavorite,
    getRecentTools,
    getMostUsedTools,
    clearHistory,
    clearFavorites
  }
}
