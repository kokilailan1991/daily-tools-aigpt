import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const blogPosts = [
  {
    id: 'best-free-sip-calculator-india-2025',
    title: 'Best Free SIP Calculator in India 2025 – Plan Your Investments Smartly',
    description: 'Discover the best free SIP calculator tools in India for 2025. Learn how to plan your systematic investment plans and maximize returns with our comprehensive guide.',
    keywords: 'SIP Calculator India, mutual fund calculator, investment planning',
    date: '2025-01-07',
    readTime: '5 min read',
    category: 'Finance'
  },
  {
    id: 'online-emi-calculator-save-money-loans',
    title: 'How to Use an Online EMI Calculator to Save Money on Loans',
    description: 'Learn how to use EMI calculators effectively to save money on loans. Compare different loan options and find the best deals for your financial needs.',
    keywords: 'EMI calculator India, loan EMI calculator, personal loan interest',
    date: '2025-01-06',
    readTime: '4 min read',
    category: 'Finance'
  },
  {
    id: 'swp-calculator-explained-2025',
    title: 'SWP Calculator Explained – How to Plan Smart Withdrawals in 2025',
    description: 'Complete guide to SWP (Systematic Withdrawal Plan) calculators. Learn how to plan smart withdrawals for retirement and regular income generation.',
    keywords: 'SWP calculator India, retirement withdrawals, systematic withdrawal plan',
    date: '2025-01-05',
    readTime: '6 min read',
    category: 'Finance'
  },
  {
    id: 'top-10-free-finance-calculators',
    title: 'Top 10 Free Online Finance Calculators Everyone Should Use',
    description: 'Discover the top 10 free online finance calculators that every Indian should use. From SIP to EMI, these tools will help you make better financial decisions.',
    keywords: 'free finance calculators, SIP, EMI, SWP, investment calculator',
    date: '2025-01-04',
    readTime: '7 min read',
    category: 'Finance'
  },
  {
    id: 'risk-calculator-investments-returns',
    title: 'Risk Calculator for Investments – Estimate Returns Before You Invest',
    description: 'Learn how to use risk calculators to estimate investment returns and assess risk levels. Make informed investment decisions with proper risk analysis.',
    keywords: 'risk return calculator, investment risk analysis, financial risk tool',
    date: '2025-01-03',
    readTime: '5 min read',
    category: 'Finance'
  },
  {
    id: 'currency-converter-india-exchange-rates',
    title: 'Currency Converter India – How to Get Quick & Accurate Exchange Rates',
    description: 'Complete guide to using currency converters in India. Get accurate exchange rates for USD, EUR, GBP and other major currencies instantly.',
    keywords: 'currency converter INR, USD to INR, forex converter',
    date: '2025-01-02',
    readTime: '4 min read',
    category: 'Finance'
  },
  {
    id: 'percentage-calculator-online-easiest-way',
    title: 'Percentage Calculator Online – The Easiest Way to Calculate in Seconds',
    description: 'Learn how to use online percentage calculators effectively. Calculate percentages, discounts, and markups with our free tools and tips.',
    keywords: 'percentage calculator, online math tools, calculate percentages free',
    date: '2025-01-01',
    readTime: '3 min read',
    category: 'Utilities'
  },
  {
    id: 'bmi-calculator-online-track-health-2025',
    title: 'BMI Calculator Online – Track Your Health in 2025',
    description: 'Use our free BMI calculator to track your health in 2025. Learn about body mass index, healthy weight ranges, and fitness goals.',
    keywords: 'BMI calculator India, body mass index, health calculator free',
    date: '2024-12-31',
    readTime: '4 min read',
    category: 'Health'
  },
  {
    id: 'daily-tools-aigpt-20-free-utilities',
    title: 'Daily Tools by AIGPT – 20+ Free Utilities for Students & Professionals',
    description: 'Explore Daily Tools by AIGPT - a comprehensive collection of 20+ free utilities for students and professionals. Boost your productivity today.',
    keywords: 'free daily tools, online calculators India, productivity tools',
    date: '2024-12-30',
    readTime: '6 min read',
    category: 'Productivity'
  },
  {
    id: 'sip-vs-swp-calculator-which-right-2025',
    title: 'Best SIP vs SWP Calculator – Which is Right for You in 2025?',
    description: 'Compare SIP vs SWP calculators to find the right investment strategy for 2025. Learn the differences and choose the best option for your financial goals.',
    keywords: 'SIP vs SWP, investment calculator India, retirement planning tools',
    date: '2024-12-29',
    readTime: '8 min read',
    category: 'Finance'
  }
]

export default function BlogPage() {
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
                <h1 className="text-2xl font-bold">Blog & Guides</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Expert insights on financial tools and calculators</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Financial Tools & Calculator Guides</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Learn how to use our free calculators effectively and make better financial decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/blog/${post.id}`)}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
