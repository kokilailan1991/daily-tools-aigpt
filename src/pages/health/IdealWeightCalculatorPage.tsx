import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Share2, Scale, Target, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'

export default function IdealWeightCalculatorPage() {
  const navigate = useNavigate()
  const [height, setHeight] = useState('')
  const [gender, setGender] = useState('')
  const [idealWeight, setIdealWeight] = useState<any>(null)

  const calculateIdealWeight = () => {
    if (height && gender) {
      const heightNum = parseFloat(height)
      
      // Robinson Formula (1983)
      let robinson
      if (gender === 'male') {
        robinson = 52 + (1.9 * ((heightNum - 152.4) / 2.54))
      } else {
        robinson = 49 + (1.7 * ((heightNum - 152.4) / 2.54))
      }
      
      // Miller Formula (1983)
      let miller
      if (gender === 'male') {
        miller = 56.2 + (1.41 * ((heightNum - 152.4) / 2.54))
      } else {
        miller = 53.1 + (1.36 * ((heightNum - 152.4) / 2.54))
      }
      
      // Devine Formula (1974)
      let devine
      if (gender === 'male') {
        devine = 50 + (2.3 * ((heightNum - 152.4) / 2.54))
      } else {
        devine = 45.5 + (2.3 * ((heightNum - 152.4) / 2.54))
      }
      
      // Hamwi Formula (1964)
      let hamwi
      if (gender === 'male') {
        hamwi = 48 + (2.7 * ((heightNum - 152.4) / 2.54))
      } else {
        hamwi = 45.5 + (2.2 * ((heightNum - 152.4) / 2.54))
      }
      
      // BMI Range (18.5-24.9)
      const heightM = heightNum / 100
      const bmiMin = 18.5 * (heightM * heightM)
      const bmiMax = 24.9 * (heightM * heightM)
      
      setIdealWeight({
        robinson: Math.round(robinson * 10) / 10,
        miller: Math.round(miller * 10) / 10,
        devine: Math.round(devine * 10) / 10,
        hamwi: Math.round(hamwi * 10) / 10,
        bmiMin: Math.round(bmiMin * 10) / 10,
        bmiMax: Math.round(bmiMax * 10) / 10,
        average: Math.round(((robinson + miller + devine + hamwi) / 4) * 10) / 10
      })
    }
  }

  // Update page title and meta description for SEO
  useEffect(() => {
    document.title = 'Free Ideal Weight Calculator – Calculate Your Healthy Weight Range | Daily Tools by AIGPT'
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your ideal weight range with our free calculator. Get personalized healthy weight recommendations using multiple scientific formulas. Perfect for fitness and health planning.')
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
                <h1 className="text-2xl font-bold">⚖️ Ideal Weight Calculator</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your healthy weight range</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Ideal Weight Calculator - Daily Tools by AIGPT',
                    text: 'Calculate your ideal weight with our free calculator',
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
            Free Ideal Weight Calculator – Calculate Your Healthy Weight Range
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate your ideal weight range using multiple scientifically-proven formulas. 
            Get personalized healthy weight recommendations based on your height and gender for optimal health and fitness planning.
          </p>
        </motion.div>

        {/* Ideal Weight Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5" />
                Ideal Weight Calculator
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
              </div>
              
              <Button onClick={calculateIdealWeight} className="w-full" size="lg">
                Calculate Ideal Weight
              </Button>
              
              {idealWeight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{idealWeight.average} kg</div>
                    <div className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Average Ideal Weight</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                      Based on multiple scientific formulas
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-center mb-3">Scientific Formulas</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between p-2 bg-white dark:bg-gray-800 rounded">
                          <span className="text-sm">Robinson (1983)</span>
                          <span className="font-medium">{idealWeight.robinson} kg</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-gray-800 rounded">
                          <span className="text-sm">Miller (1983)</span>
                          <span className="font-medium">{idealWeight.miller} kg</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-gray-800 rounded">
                          <span className="text-sm">Devine (1974)</span>
                          <span className="font-medium">{idealWeight.devine} kg</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-gray-800 rounded">
                          <span className="text-sm">Hamwi (1964)</span>
                          <span className="font-medium">{idealWeight.hamwi} kg</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-center mb-3">BMI Range</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
                          <span className="text-sm">Healthy Range</span>
                          <span className="font-medium text-green-600">{idealWeight.bmiMin} - {idealWeight.bmiMax} kg</span>
                        </div>
                        <div className="flex justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                          <span className="text-sm">BMI 18.5-24.9</span>
                          <span className="font-medium text-blue-600">Normal</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                        <p className="text-xs text-yellow-700 dark:text-yellow-300">
                          <strong>Note:</strong> These are general guidelines. Individual factors like muscle mass, 
                          bone density, and body composition should be considered.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Weight Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Understanding Weight Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="font-medium">Underweight</span>
                  <span className="text-red-600 text-sm">BMI &lt; 18.5</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="font-medium">Normal Weight</span>
                  <span className="text-green-600 text-sm">BMI 18.5 - 24.9</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <span className="font-medium">Overweight</span>
                  <span className="text-yellow-600 text-sm">BMI 25.0 - 29.9</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="font-medium">Obese</span>
                  <span className="text-red-600 text-sm">BMI ≥ 30.0</span>
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
                Why Calculate Ideal Weight?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Knowing your ideal weight range helps you set realistic health and fitness goals. It provides 
                a target range that balances health benefits with achievable outcomes. However, remember that 
                ideal weight is just one factor in overall health - body composition, muscle mass, and lifestyle 
                factors are equally important.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Considerations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                These calculations provide general guidelines but don't account for individual differences in 
                muscle mass, bone density, or body composition. Athletes may have higher weights due to muscle mass, 
                while others may need to consider factors like age, genetics, and overall health status.
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
                <h4 className="font-semibold mb-2">Which formula is most accurate?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  The Robinson formula (1983) is often considered the most accurate for adults. However, 
                  using multiple formulas and averaging the results provides the most comprehensive estimate. 
                  All formulas have limitations and should be used as guidelines.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Should I aim for the exact ideal weight?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Focus on the healthy weight range rather than an exact number. The BMI range of 18.5-24.9 
                  is generally considered healthy. Individual factors like muscle mass, body composition, 
                  and overall health should also be considered.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What if I'm an athlete with high muscle mass?</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Athletes with significant muscle mass may have higher weights that are still healthy. 
                  In such cases, body composition analysis and consultation with healthcare professionals 
                  are more important than weight alone.
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
                  onClick={() => navigate('/health/body-fat-calculator')}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <span className="text-2xl">📊</span>
                  <span className="text-sm">Body Fat %</span>
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
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
