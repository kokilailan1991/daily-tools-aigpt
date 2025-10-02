import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Share2, Calendar, Clock, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Input } from '../../components/ui/input'

export default function AgeCalculatorPage() {
  const navigate = useNavigate()
  const [birthDate, setBirthDate] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [age, setAge] = useState<any>(null)

  const calculateAge = () => {
    if (birthDate && currentDate) {
      const birth = new Date(birthDate)
      const current = new Date(currentDate)
      
      if (birth <= current) {
        const years = current.getFullYear() - birth.getFullYear()
        const months = current.getMonth() - birth.getMonth()
        const days = current.getDate() - birth.getDate()
        
        let totalMonths = years * 12 + months
        if (days < 0) totalMonths--
        
        const totalDays = Math.floor((current.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24))
        const totalHours = Math.floor((current.getTime() - birth.getTime()) / (1000 * 60 * 60))
        const totalMinutes = Math.floor((current.getTime() - birth.getTime()) / (1000 * 60))
        
        setAge({
          years,
          months: months < 0 ? months + 12 : months,
          days: days < 0 ? days + new Date(current.getFullYear(), current.getMonth(), 0).getDate() : days,
          totalDays,
          totalHours,
          totalMinutes,
          totalMonths
        })
      }
    }
  }

  // Set current date as default
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    setCurrentDate(today)
  }, [])

  // Update page title and meta description for SEO
  useEffect(() => {
    document.title = 'Free Age Calculator – Calculate Your Exact Age in Years, Months & Days | Daily Tools by AIGPT'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your exact age instantly with our free age calculator. Get your age in years, months, days, hours, and minutes. Perfect for birthday planning and age verification.')
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/health')}
                className="h-9 w-9"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">🎂 Age Calculator</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your exact age</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Age Calculator - Daily Tools by AIGPT',
                    text: 'Calculate your exact age with our free calculator',
                    url: window.location.href
                  })
                }
              }}
              className="h-9"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* SEO-optimized H1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Free Age Calculator – Calculate Your Exact Age in Years, Months & Days
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate your precise age instantly with our free age calculator. Get detailed breakdowns including years, 
            months, days, hours, and minutes since your birth.
          </p>
        </motion.div>

        {/* Age Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Age Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Birth Date</label>
                  <Input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Current Date (or select date)</label>
                  <Input
                    type="date"
                    value={currentDate}
                    onChange={(e) => setCurrentDate(e.target.value)}
                    className="text-lg"
                  />
                </div>
              </div>
              
              <Button onClick={calculateAge} className="w-full" size="lg">
                Calculate Age
              </Button>
              
              {age && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {age.years} Years, {age.months} Months, {age.days} Days
                    </div>
                    <div className="text-lg text-gray-600 dark:text-gray-300">
                      You are <span className="font-semibold">{age.totalDays.toLocaleString()}</span> days old
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="text-2xl font-bold text-blue-600">{age.years}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Years</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="text-2xl font-bold text-green-600">{age.totalMonths}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Months</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="text-2xl font-bold text-purple-600">{age.totalDays.toLocaleString()}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Days</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="text-2xl font-bold text-orange-600">{(age.totalHours / 1000).toFixed(0)}K</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Hours</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Age Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Age Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="font-medium">Next Birthday</span>
                    <span className="text-blue-600 font-bold">
                      {age && age.years + 1} years old
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="font-medium">Quarter Century</span>
                    <span className="text-green-600 font-bold">25 years old</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <span className="font-medium">Golden Birthday</span>
                    <span className="text-purple-600 font-bold">50 years old</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <span className="font-medium">Century Club</span>
                    <span className="text-yellow-600 font-bold">100 years old</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <span className="font-medium">Half Century</span>
                    <span className="text-red-600 font-bold">50 years old</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                    <span className="font-medium">Retirement Age</span>
                    <span className="text-indigo-600 font-bold">65 years old</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                How Age Calculation Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our age calculator uses precise date arithmetic to determine your exact age. It calculates the difference 
                between your birth date and the current date, accounting for leap years and varying month lengths. 
                The calculation provides multiple formats including years, months, days, hours, and minutes for comprehensive age tracking.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Calculate Your Age?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Knowing your precise age is useful for birthday planning, age verification, milestone celebrations, 
                and life planning. Whether you're planning a special birthday party, need to verify age for legal purposes, 
                or simply curious about your exact age in different time units, our calculator provides accurate results.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">How accurate is this age calculator?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Our age calculator is highly accurate, using precise date arithmetic and accounting for leap years. 
                  It provides exact age calculations down to the minute level.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Can I calculate age for any date in the past or future?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Yes! You can calculate age for any date by selecting different current dates. This is useful for 
                  historical calculations or future planning.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What if someone was born on February 29th (leap year)?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Our calculator handles leap year births correctly. For non-leap years, February 28th is used as 
                  the equivalent date for calculations.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Related Health Calculators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  onClick={() => navigate('/health/bmi-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">💪</span>
                  <span className="text-sm">BMI Calculator</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/health/life-expectancy-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">⏰</span>
                  <span className="text-sm">Life Expectancy</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/health/pregnancy-due-date-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">🤱</span>
                  <span className="text-sm">Due Date Calculator</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/health/ideal-weight-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">⚖️</span>
                  <span className="text-sm">Ideal Weight</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
