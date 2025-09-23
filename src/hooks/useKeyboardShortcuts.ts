import { useEffect } from 'react'

interface Shortcut {
  key: string
  ctrlKey?: boolean
  altKey?: boolean
  shiftKey?: boolean
  action: () => void
  description: string
}

export function useKeyboardShortcuts(shortcuts: Shortcut[]) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      shortcuts.forEach(shortcut => {
        const {
          key,
          ctrlKey = false,
          altKey = false,
          shiftKey = false,
          action
        } = shortcut

        if (
          event.key.toLowerCase() === key.toLowerCase() &&
          event.ctrlKey === ctrlKey &&
          event.altKey === altKey &&
          event.shiftKey === shiftKey
        ) {
          event.preventDefault()
          action()
        }
      })
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [shortcuts])
}

// Common keyboard shortcuts for the app
export const getAppShortcuts = (
  onSearch: () => void,
  onThemeToggle: () => void,
  onGoHome: () => void,
  onGoBack: () => void
): Shortcut[] => [
  {
    key: 'k',
    ctrlKey: true,
    action: onSearch,
    description: 'Open search'
  },
  {
    key: 't',
    ctrlKey: true,
    action: onThemeToggle,
    description: 'Toggle theme'
  },
  {
    key: 'h',
    ctrlKey: true,
    action: onGoHome,
    description: 'Go to home'
  },
  {
    key: 'Escape',
    action: onGoBack,
    description: 'Go back'
  }
]

// Tool-specific shortcuts
export const getToolShortcuts = (
  onCalculate: () => void,
  onReset: () => void,
  onExport: () => void
): Shortcut[] => [
  {
    key: 'Enter',
    action: onCalculate,
    description: 'Calculate'
  },
  {
    key: 'r',
    ctrlKey: true,
    action: onReset,
    description: 'Reset form'
  },
  {
    key: 'e',
    ctrlKey: true,
    action: onExport,
    description: 'Export results'
  }
]
