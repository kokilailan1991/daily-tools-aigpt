import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Share2, Heart, Calculator, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Input } from '../../components/ui/input'

export default function BMICalculatorPage() {
  const navigate = useNavigate()
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState('')
  const [recommendation, setRecommendation] = useState('')

  const calculateBMI = () => {
    const h = parseFloat(height) / 100 // Convert cm to meters
    const w = parseFloat(weight)
    
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h)
      setBmi(Math.round(bmiValue * 10) / 10)
      
      if (bmiValue < 18.5) {
        setCategory('Underweight')
        setRecommendation('Consider consulting a healthcare provider for healthy weight gain strategies')
      } else if (bmiValue < 25) {
        setCategory('Normal weight')
        setRecommendation('Great! You have a healthy weight. Maintain your current lifestyle')
      } else if (bmiValue < 30) {
        setCategory('Overweight')
        setRecommendation('Consider a balanced diet and regular exercise to reach a healthier weight')
      } else {
        setCategory('Obese')
        setRecommendation('Please consult a healthcare provider for personalized weight management advice')
      }
    }
  }

  // Update page title and meta description for SEO
  useEffect(() => {
    document.title = 'Free BMI Calculator – Check Your Body Mass Index Online | Daily Tools by AIGPT'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your BMI instantly with our free BMI calculator. Get accurate body mass index results, weight categories, and health recommendations. No registration required.')
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
                <h1 className="text-2xl font-bold">💪 BMI Calculator</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your Body Mass Index</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'BMI Calculator - Daily Tools by AIGPT',
                    text: 'Calculate your BMI with our free calculator',
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
            Free BMI Calculator – Check Your Body Mass Index Online
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate your BMI instantly with our accurate Body Mass Index calculator. Get personalized weight categories, 
            health insights, and recommendations based on WHO standards.
          </p>
        </motion.div>

        {/* BMI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                BMI Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>
              
              <Button onClick={calculateBMI} className="w-full" size="lg">
                Calculate BMI
              </Button>
              
              {bmi && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-2">{bmi}</div>
                  <div className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{category}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    {recommendation}
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* BMI Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                BMI Categories (WHO Standard)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="font-medium">Underweight</span>
                  <span className="text-red-600 font-bold">&lt; 18.5</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="font-medium">Normal weight</span>
                  <span className="text-green-600 font-bold">18.5 - 24.9</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <span className="font-medium">Overweight</span>
                  <span className="text-yellow-600 font-bold">25.0 - 29.9</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="font-medium">Obese</span>
                  <span className="text-red-600 font-bold">≥ 30.0</span>
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
                <Heart className="h-5 w-5 text-red-500" />
                What is BMI?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Body Mass Index (BMI) is a simple calculation using a person's height and weight. 
                The formula is BMI = kg/m² where kg is a person's weight in kilograms and m² is their height in metres squared. 
                BMI provides a simple numeric measure of a person's thickness or thinness, allowing health professionals to 
                discuss weight problems more objectively with their patients.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why is BMI Important?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                BMI is used as a screening tool to identify potential weight problems for adults. 
                While BMI doesn't measure body fat directly, research has shown that BMI correlates to direct measures of body fat. 
                It's a useful tool for healthcare providers to assess potential health risks associated with being underweight, 
                overweight, or obese.
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
                <h4 className="font-semibold mb-2">Is BMI accurate for everyone?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  BMI is a useful screening tool but has limitations. It may not accurately reflect body composition for athletes, 
                  elderly adults, or people with high muscle mass. Always consult a healthcare provider for personalized assessment.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What should I do if my BMI is high?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  If your BMI indicates overweight or obesity, consider consulting a healthcare provider for personalized advice. 
                  Focus on sustainable lifestyle changes including balanced nutrition and regular physical activity.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">How often should I check my BMI?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  For most adults, checking BMI monthly is sufficient for tracking progress. However, focus more on overall health 
                  indicators like energy levels, strength, and how you feel rather than just the number.
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
                  onClick={() => navigate('/health/ideal-weight-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">⚖️</span>
                  <span className="text-sm">Ideal Weight</span>
                </Button>
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
                  onClick={() => navigate('/health/bmr-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">⚡</span>
                  <span className="text-sm">BMR Calculator</span>
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
