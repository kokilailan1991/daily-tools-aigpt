import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Share2, Flame, Activity, Target } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'

export default function CalorieCalculatorPage() {
  const navigate = useNavigate()
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activityLevel, setActivityLevel] = useState('')
  const [goal, setGoal] = useState('')
  const [calories, setCalories] = useState<any>(null)

  const activityMultipliers = {
    'sedentary': 1.2,
    'light': 1.375,
    'moderate': 1.55,
    'active': 1.725,
    'very-active': 1.9
  }

  const goalAdjustments = {
    'maintain': 0,
    'lose-0.5': -500,
    'lose-1': -1000,
    'gain-0.5': 500,
    'gain-1': 1000
  }

  const calculateCalories = () => {
    if (age && gender && weight && height && activityLevel) {
      const ageNum = parseFloat(age)
      const weightNum = parseFloat(weight)
      const heightNum = parseFloat(height)
      
      // Mifflin-St Jeor Equation
      let bmr
      if (gender === 'male') {
        bmr = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) + 5
      } else {
        bmr = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) - 161
      }
      
      const tdee = bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers]
      const goalCalories = tdee + (goal ? goalAdjustments[goal as keyof typeof goalAdjustments] : 0)
      
      setCalories({
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        goalCalories: Math.round(goalCalories),
        goal
      })
    }
  }

  // Update page title and meta description for SEO
  useEffect(() => {
    document.title = 'Free Calorie Calculator – Calculate Daily Calorie Needs for Weight Loss, Maintenance & Gain | Daily Tools by AIGPT'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your daily calorie needs instantly with our free calorie calculator. Perfect for weight loss, maintenance, or weight gain goals. Get personalized calorie recommendations.')
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
                <h1 className="text-2xl font-bold">🔥 Calorie Calculator</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate daily calorie needs</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Calorie Calculator - Daily Tools by AIGPT',
                    text: 'Calculate your daily calorie needs with our free calculator',
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
            Free Calorie Calculator – Calculate Daily Calorie Needs for Weight Loss, Maintenance & Gain
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate your daily calorie needs instantly with our scientifically-based calorie calculator. 
            Perfect for weight loss, maintenance, or weight gain goals with personalized recommendations.
          </p>
        </motion.div>

        {/* Calorie Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flame className="h-5 w-5" />
                Calorie Calculator
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Activity Level</label>
                  <Select value={activityLevel} onValueChange={setActivityLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (little/no exercise)</SelectItem>
                      <SelectItem value="light">Lightly active (light exercise 1-3 days/week)</SelectItem>
                      <SelectItem value="moderate">Moderately active (moderate exercise 3-5 days/week)</SelectItem>
                      <SelectItem value="active">Very active (hard exercise 6-7 days/week)</SelectItem>
                      <SelectItem value="very-active">Extremely active (very hard exercise & physical job)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Goal</label>
                  <Select value={goal} onValueChange={setGoal}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maintain">Maintain current weight</SelectItem>
                      <SelectItem value="lose-0.5">Lose 0.5 kg/week</SelectItem>
                      <SelectItem value="lose-1">Lose 1 kg/week</SelectItem>
                      <SelectItem value="gain-0.5">Gain 0.5 kg/week</SelectItem>
                      <SelectItem value="gain-1">Gain 1 kg/week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button onClick={calculateCalories} className="w-full" size="lg">
                Calculate Calories
              </Button>
              
              {calories && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {calories.goalCalories} Calories
                    </div>
                    <div className="text-lg text-gray-600 dark:text-gray-300">
                      Daily calorie target for your goal
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="text-2xl font-bold text-green-600">{calories.bmr}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">BMR (Basal Metabolic Rate)</div>
                      <div className="text-xs text-gray-500">Calories at rest</div>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                      <div className="text-2xl font-bold text-blue-600">{calories.tdee}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">TDEE (Total Daily Energy Expenditure)</div>
                      <div className="text-xs text-gray-500">Calories with activity</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Activity Level Guide */}
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
                Activity Level Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="font-medium">Sedentary</span>
                  <span className="text-gray-600 text-sm">Little to no exercise, desk job</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="font-medium">Lightly Active</span>
                  <span className="text-gray-600 text-sm">Light exercise 1-3 days per week</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="font-medium">Moderately Active</span>
                  <span className="text-gray-600 text-sm">Moderate exercise 3-5 days per week</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <span className="font-medium">Very Active</span>
                  <span className="text-gray-600 text-sm">Hard exercise 6-7 days per week</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="font-medium">Extremely Active</span>
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
                <Target className="h-5 w-5 text-orange-500" />
                Understanding Your Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Your BMR (Basal Metabolic Rate) represents the calories your body needs at complete rest. 
                TDEE (Total Daily Energy Expenditure) includes calories burned through daily activities and exercise. 
                The goal calories are adjusted based on your weight management objectives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weight Management Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                For sustainable weight loss, aim for a 500-calorie daily deficit (0.5 kg/week). 
                For weight gain, aim for a 500-calorie surplus. Remember that individual results may vary, 
                and it's important to consult healthcare professionals for personalized advice.
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
                <h4 className="font-semibold mb-2">How accurate is the calorie calculator?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Our calculator uses the scientifically-validated Mifflin-St Jeor equation, which is considered 
                  one of the most accurate methods for estimating calorie needs. However, individual metabolism can vary.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Should I eat exactly the calculated calories?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  The calculated calories are a starting point. Monitor your progress and adjust based on results. 
                  Factors like stress, sleep, and hormonal changes can affect actual calorie needs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What's the difference between BMR and TDEE?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  BMR is calories needed at complete rest (basic bodily functions). TDEE includes all daily activities 
                  and exercise. TDEE is more useful for setting calorie targets for weight management.
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
                  onClick={() => navigate('/health/bmr-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">⚡</span>
                  <span className="text-sm">BMR Calculator</span>
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
                  onClick={() => navigate('/health/protein-intake-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">🥩</span>
                  <span className="text-sm">Protein Calculator</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/health/water-intake-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">💧</span>
                  <span className="text-sm">Water Intake</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
