import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Moon, Sun, BookOpen } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { tools } from '../data/tools'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'

const categories = ['All', 'Health', 'Finance', 'Utilities', 'Text', 'Time']

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { theme, setTheme } = useTheme()

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Sticky CTA Banner */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium sticky top-0 z-50">
        ⭐ Bookmark Daily Tools – 20+ Free Calculators at One Place!
      </div>
      
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-12 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Daily Tools by AIGPT
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.href = '#/blog'}
                className="h-9"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Blog
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105"
                onClick={() => window.location.href = `#/tool/${tool.id}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{tool.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {tool.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {tool.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No tools found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Finance Tools Disclaimer */}
        {selectedCategory === 'Finance' && filteredTools.length > 0 && (
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
              Disclaimer: These calculators are provided for educational and informational purposes only. 
              They do not constitute financial advice, investment recommendations, or guarantees of returns. 
              Please consult a SEBI-registered advisor before making investment or financial decisions.
            </p>
          </div>
        )}

        {/* Most Popular Tools Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Most Popular Tools</h2>
            <p className="text-gray-600 dark:text-gray-400">
              These are our most frequently used calculators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { id: 'loan-emi-calculator', name: 'EMI Calculator', icon: '💰', description: 'Calculate loan EMI and interest' },
              { id: 'sip-calculator', name: 'SIP Calculator', icon: '📈', description: 'Calculate SIP returns' },
              { id: 'risk-calculator', name: 'Risk Calculator', icon: '⚠️', description: 'Calculate investment risk' },
              { id: 'currency-converter', name: 'Currency Converter', icon: '💱', description: 'Convert between currencies' },
              { id: 'bmi-calculator', name: 'BMI Calculator', icon: '💪', description: 'Calculate your BMI' }
            ].map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105"
                  onClick={() => window.location.href = `#/tool/${tool.id}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{tool.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          Popular
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {tool.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© 2025 Daily Tools by AIGPT. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Simple, useful tools for your daily needs
            </p>
            
            {/* Footer Disclaimer */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed max-w-4xl mx-auto">
                Disclaimer: The financial calculators on this website (including SIP, SWP, EMI, Risk, Currency, and related tools) 
                are intended for educational use only. Results are based on user inputs and assumed rates of return, and may not 
                reflect actual outcomes. The information provided here does not constitute financial or investment advice. 
                All investments are subject to market risks. Please consult a SEBI-registered financial advisor before making 
                investment or financial decisions.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
