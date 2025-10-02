import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Share2, Zap, Activity, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'

export default function BMRCalculatorPage() {
  const navigate = useNavigate()
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmr, setBmr] = useState<number | null>(null)

  const calculateBMR = () => {
    if (age && gender && weight && height) {
      const ageNum = parseFloat(age)
      const weightNum = parseFloat(weight)
      const heightNum = parseFloat(height)
      
      // Mifflin-St Jeor Equation
      let bmrValue
      if (gender === 'male') {
        bmrValue = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) + 5
      } else {
        bmrValue = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) - 161
      }
      
      setBmr(Math.round(bmrValue))
    }
  }

  // Update page title and meta description for SEO
  useEffect(() => {
    document.title = 'Free BMR Calculator – Calculate Your Basal Metabolic Rate Online | Daily Tools by AIGPT'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your BMR (Basal Metabolic Rate) instantly with our free calculator. Know how many calories you burn at rest. Essential for weight management and fitness planning.')
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
                <h1 className="text-2xl font-bold">⚡ BMR Calculator</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your Basal Metabolic Rate</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'BMR Calculator - Daily Tools by AIGPT',
                    text: 'Calculate your BMR with our free calculator',
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
            Free BMR Calculator – Calculate Your Basal Metabolic Rate Online
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate your BMR (Basal Metabolic Rate) instantly with our scientifically-accurate calculator. 
            Know exactly how many calories your body burns at rest for better weight management and fitness planning.
          </p>
        </motion.div>

        {/* BMR Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                BMR Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Age (years)</label>
                  <Input
                    type="number"
                    placeholder="30"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Gender</label>
                  <Select value={gender} onValueChange={setGender}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                  <Input
                    type="number"
                    placeholder="70"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Height (cm)</label>
                  <Input
                    type="number"
                    placeholder="170"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="text-lg"
                  />
                </div>
              </div>
              
              <Button onClick={calculateBMR} className="w-full" size="lg">
                Calculate BMR
              </Button>
              
              {bmr && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-2">{bmr}</div>
                  <div className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Calories per day</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    This is how many calories your body burns at complete rest
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="text-2xl font-bold text-green-600">{bmr}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">BMR (Rest)</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="text-2xl font-bold text-blue-600">{Math.round(bmr * 1.2)}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Sedentary</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="text-2xl font-bold text-purple-600">{Math.round(bmr * 1.55)}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Active</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Activity Level Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                How Activity Affects Your Calorie Needs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="font-medium">Sedentary (BMR × 1.2)</span>
                  <span className="text-gray-600 text-sm">Little to no exercise</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="font-medium">Lightly Active (BMR × 1.375)</span>
                  <span className="text-gray-600 text-sm">Light exercise 1-3 days/week</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="font-medium">Moderately Active (BMR × 1.55)</span>
                  <span className="text-gray-600 text-sm">Moderate exercise 3-5 days/week</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <span className="font-medium">Very Active (BMR × 1.725)</span>
                  <span className="text-gray-600 text-sm">Hard exercise 6-7 days/week</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="font-medium">Extremely Active (BMR × 1.9)</span>
                  <span className="text-gray-600 text-sm">Very hard exercise & physical job</span>
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
                What is BMR?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                BMR (Basal Metabolic Rate) represents the number of calories your body needs to perform basic 
                life-sustaining functions like breathing, circulation, cell production, and brain function. 
                It accounts for 60-70% of your total daily calorie expenditure and is the foundation for 
                calculating your total calorie needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why is BMR Important?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Understanding your BMR is crucial for weight management. It helps you determine your baseline 
                calorie needs, plan appropriate calorie deficits for weight loss, or surpluses for weight gain. 
                BMR also changes with age, weight, muscle mass, and other factors, making regular assessment important.
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
                <h4 className="font-semibold mb-2">How accurate is the BMR calculation?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Our calculator uses the scientifically-validated Mifflin-St Jeor equation, which is considered 
                  the most accurate formula for estimating BMR. However, individual metabolism can vary based on genetics, 
                  muscle mass, and other factors.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">How can I increase my BMR?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Building muscle through resistance training is the most effective way to increase BMR. 
                  Other factors include adequate protein intake, regular exercise, quality sleep, and staying hydrated. 
                  Age and genetics also play significant roles.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What's the difference between BMR and TDEE?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  BMR is calories burned at complete rest. TDEE (Total Daily Energy Expenditure) includes BMR plus 
                  calories burned through daily activities and exercise. TDEE is typically 1.2-1.9 times your BMR 
                  depending on activity level.
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
                  onClick={() => navigate('/health/calorie-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">🔥</span>
                  <span className="text-sm">Calorie Calculator</span>
                </Button>
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
                  onClick={() => navigate('/health/ideal-weight-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">⚖️</span>
                  <span className="text-sm">Ideal Weight</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/health/body-fat-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">📊</span>
                  <span className="text-sm">Body Fat %</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
