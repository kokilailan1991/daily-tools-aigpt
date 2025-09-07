import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function StopwatchTimer() {
  const [mode, setMode] = useState('stopwatch')
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [timerMinutes, setTimerMinutes] = useState('')
  const [timerSeconds, setTimerSeconds] = useState('')
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prev => {
          if (mode === 'timer' && prev <= 0) {
            setIsRunning(false)
            alert('Timer finished!')
            return 0
          }
          return mode === 'stopwatch' ? prev + 1 : prev - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, mode])

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const start = () => {
    if (mode === 'timer') {
      const minutes = parseInt(timerMinutes) || 0
      const seconds = parseInt(timerSeconds) || 0
      setTime(minutes * 60 + seconds)
    }
    setIsRunning(true)
  }

  const stop = () => {
    setIsRunning(false)
  }

  const reset = () => {
    setIsRunning(false)
    setTime(0)
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Mode</label>
        <select
          className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
          value={mode}
          onChange={(e) => {
            setMode(e.target.value)
            reset()
          }}
        >
          <option value="stopwatch">Stopwatch</option>
          <option value="timer">Timer</option>
        </select>
      </div>

      {mode === 'timer' && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Minutes</label>
            <Input
              type="number"
              placeholder="5"
              value={timerMinutes}
              onChange={(e) => setTimerMinutes(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Seconds</label>
            <Input
              type="number"
              placeholder="0"
              value={timerSeconds}
              onChange={(e) => setTimerSeconds(e.target.value)}
            />
          </div>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            {mode === 'stopwatch' ? 'Stopwatch' : 'Timer'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-6xl font-mono font-bold text-blue-600 mb-6">
              {formatTime(time)}
            </div>
            <div className="flex gap-2 justify-center">
              {!isRunning ? (
                <Button onClick={start} size="lg">
                  Start
                </Button>
              ) : (
                <Button onClick={stop} variant="destructive" size="lg">
                  Stop
                </Button>
              )}
              <Button onClick={reset} variant="outline" size="lg">
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
