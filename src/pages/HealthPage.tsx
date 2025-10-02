import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Calculator, TrendingUp, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const healthTools = [
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index and check if you have a healthy weight',
    icon: '💪',
    url: '/health/bmi-calculator',
    keywords: 'BMI calculator, body mass index, healthy weight'
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate your exact age in years, months, and days',
    icon: '🎂',
    url: '/health/age-calculator',
    keywords: 'age calculator, how old am I, age in days'
  },
  {
    id: 'calorie-calculator',
    name: 'Calorie Calculator',
    description: 'Calculate daily calorie needs for weight loss, maintenance, or gain',
    icon: '🔥',
    url: '/health/calorie-calculator',
    keywords: 'calorie calculator, daily calories, weight loss calories'
  },
  {
    id: 'bmr-calculator',
    name: 'BMR Calculator',
    description: 'Calculate your Basal Metabolic Rate - calories burned at rest',
    icon: '⚡',
    url: '/health/bmr-calculator',
    keywords: 'BMR calculator, basal metabolic rate, metabolism'
  },
  {
    id: 'ideal-weight-calculator',
    name: 'Ideal Weight Calculator',
    description: 'Find your ideal weight range based on height and body type',
    icon: '⚖️',
    url: '/health/ideal-weight-calculator',
    keywords: 'ideal weight calculator, healthy weight range'
  },
  {
    id: 'body-fat-calculator',
    name: 'Body Fat Calculator',
    description: 'Estimate your body fat percentage using various methods',
    icon: '📊',
    url: '/health/body-fat-calculator',
    keywords: 'body fat calculator, body fat percentage'
  },
  {
    id: 'protein-intake-calculator',
    name: 'Protein Intake Calculator',
    description: 'Calculate optimal daily protein intake for your goals',
    icon: '🥩',
    url: '/health/protein-intake-calculator',
    keywords: 'protein calculator, daily protein intake, protein needs'
  },
  {
    id: 'water-intake-calculator',
    name: 'Water Intake Calculator',
    description: 'Calculate how much water you should drink daily',
    icon: '💧',
    url: '/health/water-intake-calculator',
    keywords: 'water intake calculator, daily water intake, hydration'
  },
  {
    id: 'heart-rate-zone-calculator',
    name: 'Heart Rate Zone Calculator',
    description: 'Calculate your optimal heart rate zones for exercise',
    icon: '❤️',
    url: '/health/heart-rate-zone-calculator',
    keywords: 'heart rate zones, exercise heart rate, target heart rate'
  },
  {
    id: 'pregnancy-due-date-calculator',
    name: 'Pregnancy Due Date Calculator',
    description: 'Calculate your baby\'s due date and pregnancy timeline',
    icon: '🤱',
    url: '/health/pregnancy-due-date-calculator',
    keywords: 'due date calculator, pregnancy calculator, baby due date'
  },
  {
    id: 'ovulation-calculator',
    name: 'Ovulation Calculator',
    description: 'Track your ovulation cycle and fertile days',
    icon: '🌸',
    url: '/health/ovulation-calculator',
    keywords: 'ovulation calculator, fertile days, menstrual cycle'
  },
  {
    id: 'life-expectancy-calculator',
    name: 'Life Expectancy Calculator',
    description: 'Estimate your life expectancy based on lifestyle factors',
    icon: '⏰',
    url: '/health/life-expectancy-calculator',
    keywords: 'life expectancy calculator, longevity calculator'
  }
]

export default function HealthPage() {
  const navigate = useNavigate()

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
                onClick={() => navigate('/')}
                className="h-9 w-9"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">🏥 Health Tools</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Free health calculators for better wellness</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Free Health Calculators
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Take control of your health with our comprehensive collection of free health calculators. 
            From BMI and calorie tracking to pregnancy and fitness tools - everything you need for better wellness.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="text-sm font-medium">Health Tracking</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
              <Calculator className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Free Tools</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Progress Tracking</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow">
              <Users className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium">Trusted by Millions</span>
            </div>
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {healthTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => navigate(tool.url)}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {tool.name}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {tool.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      Free Health Calculator
                    </span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Use Tool →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Use Our Health Tools?</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our health calculators are designed by medical professionals and updated regularly
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-2">Scientifically Accurate</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                All calculations are based on established medical formulas and research
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Privacy Protected</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Your health data stays on your device - we don't store personal information
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Use our tools anywhere, anytime with our responsive design
              </p>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
              ⚠️ Important Medical Disclaimer
            </h3>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm leading-relaxed">
              These health calculators are for informational purposes only and should not replace professional medical advice, 
              diagnosis, or treatment. Always consult with a qualified healthcare provider for medical concerns, 
              especially before making significant changes to your diet, exercise routine, or health management plan.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
