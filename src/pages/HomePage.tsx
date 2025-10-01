import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Moon, Sun, BookOpen } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { tools } from '../data/tools'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { QRCodeSVG } from 'qrcode.react'

const categories = ['All', 'Health', 'Finance', 'Utilities', 'Text', 'Time', 'Fun', 'AI Tools']

// AI Tools data structure
const aiToolsSections = [
  {
    title: '👩‍🍳 For Homemakers',
    tools: [
      { name: 'ChatGPT', description: 'Recipes, daily Q&A', url: 'https://chat.openai.com' },
      { name: 'Canva AI', description: 'Easy design & posters', url: 'https://canva.com' },
      { name: 'Bring!', description: 'Smart shopping list', url: 'https://www.getbring.com' }
    ]
  },
  {
    title: '🛒 For Shopping / Lifestyle',
    tools: [
      { name: 'Perplexity AI', description: 'Compare products & research', url: 'https://perplexity.ai' },
      { name: 'Honey AI', description: 'Coupons & discounts', url: 'https://joinhoney.com' },
      { name: 'Faver AI', description: 'Personalized shopping', url: 'https://faver.ai' }
    ]
  },
  {
    title: '📊 For Project Management / Work',
    tools: [
      { name: 'Notion AI', description: 'Notes & task automation', url: 'https://notion.so' },
      { name: 'Otter.ai', description: 'AI meeting transcription', url: 'https://otter.ai' },
      { name: 'SlidesAI', description: 'Text → slides', url: 'https://slidesai.io' },
      { name: 'ClickUp AI', description: 'AI project management', url: 'https://clickup.com/ai' }
    ]
  },
  {
    title: '👨‍💻 For Developers / Students',
    tools: [
      { name: 'GitHub Copilot', description: 'AI coding assistant', url: 'https://github.com/features/copilot' },
      { name: 'Tabnine', description: 'AI code suggestions', url: 'https://tabnine.com' },
      { name: 'Codeium', description: 'Free coding AI', url: 'https://codeium.com' },
      { name: 'ChatPDF', description: 'Ask questions to your PDF', url: 'https://chatpdf.com' }
    ]
  },
  {
    title: '🎓 For Students & Learning',
    tools: [
      { name: 'Khanmigo', description: 'AI tutor (Khan Academy)', url: 'https://khanacademy.org/khan-labs' },
      { name: 'Elicit', description: 'Research paper summarizer', url: 'https://elicit.org' },
      { name: 'Quizlet AI', description: 'Flashcards & study helper', url: 'https://quizlet.com' },
      { name: 'Socratic (Google)', description: 'Homework helper', url: 'https://socratic.org' }
    ]
  },
  {
    title: '💼 For Job Seekers',
    tools: [
      { name: 'Rezi AI', description: 'Resume builder', url: 'https://rezi.ai' },
      { name: 'Kickresume', description: 'Resume + cover letter', url: 'https://kickresume.com' },
      { name: 'Interview Warmup (Google)', description: 'AI interview practice', url: 'https://grow.google/interview-warmup/' }
    ]
  },
  {
    title: '🎤 For Creators / YouTubers',
    tools: [
      { name: 'InVideo', description: 'AI video creator', url: 'https://invideo.io' },
      { name: 'Pictory', description: 'Convert text → video', url: 'https://pictory.ai' },
      { name: 'Runway ML', description: 'AI video editing & effects', url: 'https://runwayml.com' },
      { name: 'Synthesia', description: 'AI avatars & video', url: 'https://synthesia.io' },
      { name: 'ElevenLabs', description: 'AI voice generator', url: 'https://elevenlabs.io' },
      { name: 'Descript', description: 'Podcast/video editing', url: 'https://descript.com' }
    ]
  },
  {
    title: '🧘 For Health & Personal Growth',
    tools: [
      { name: 'Woebot', description: 'AI mental health coach', url: 'https://woebothealth.com' },
      { name: 'Youper', description: 'AI mood tracker', url: 'https://youper.ai' },
      { name: 'FitnessAI', description: 'Personalized workout plans', url: 'https://fitnessai.com' },
      { name: 'MyFitnessPal AI', description: 'Nutrition & calorie tracking', url: 'https://www.myfitnesspal.com' }
    ]
  }
]

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
        {selectedCategory === 'AI Tools' ? (
          // AI Tools Section
          <div className="space-y-8">
            {aiToolsSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-semibold mt-6 mb-4">{section.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {section.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (sectionIndex * 0.1) + (toolIndex * 0.05) }}
                    >
                      <div className="bg-white p-4 rounded-lg shadow text-center">
                        <h4 className="font-bold text-lg mb-2">{tool.name}</h4>
                        <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                        <Button
                          className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                          onClick={() => window.open(tool.url, '_blank')}
                        >
                          Try
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Regular Tools Grid
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
        )}

        {selectedCategory !== 'AI Tools' && filteredTools.length === 0 && (
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

        {/* HeyGen Affiliate Promotion Section */}
        {selectedCategory !== 'AI Tools' && (
          <section className="mt-12 mb-16">
            <div 
              className="rounded-2xl p-8 text-center"
              style={{ backgroundColor: '#f9f9f9' }}
            >
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  🚀 Turn Text into Stunning AI Videos
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Create professional avatars and explainer videos in minutes with HeyGen.
                </p>
                <Button
                  className="text-white font-bold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: '#ff5722',
                    borderColor: '#ff5722'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#e64a19'
                    e.currentTarget.style.borderColor = '#e64a19'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff5722'
                    e.currentTarget.style.borderColor = '#ff5722'
                  }}
                  onClick={() => {
                    window.open('https://www.heygen.com/?sid=rewardful&via=ilanthiraiyan', '_blank')
                  }}
                >
                  🎥 Try HeyGen Free
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Recommended Products Section */}
        {selectedCategory !== 'AI Tools' && (
          <section className="mt-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                🛒 Recommended Products
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Handpicked products we love and recommend
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Product 1: Haier AC */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="text-center">
                  <div className="w-full h-48 bg-gray-50 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&auto=format"
                      alt="Haier 1.5 Ton 5 Star Inverter Split AC"
                      className="w-full h-full object-contain rounded-lg bg-white"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="flex flex-col items-center justify-center h-full text-gray-400">
                            <svg class="w-16 h-16 mb-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-sm">Haier AC</span>
                          </div>
                        `
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Haier 1.5 Ton 5 Star Inverter Split AC
                  </h3>
                  <Button
                    className="w-full text-white font-bold px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    style={{ 
                      backgroundColor: '#ff9900',
                      borderColor: '#ff9900'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e68900'
                      e.currentTarget.style.borderColor = '#e68900'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff9900'
                      e.currentTarget.style.borderColor = '#ff9900'
                    }}
                    onClick={() => {
                      window.open('https://amzn.to/4mHruYs', '_blank')
                    }}
                  >
                    Buy on Amazon
                  </Button>
                </div>
              </div>

              {/* Product 2: 4 Seater Sofa */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="text-center">
                  <div className="w-full h-48 bg-gray-50 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&auto=format"
                      alt="4 Seater Sofa"
                      className="w-full h-full object-contain rounded-lg bg-white"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="flex flex-col items-center justify-center h-full text-gray-400">
                            <svg class="w-16 h-16 mb-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-sm">4 Seater Sofa</span>
                          </div>
                        `
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    4 Seater Sofa
                  </h3>
                  <Button
                    className="w-full text-white font-bold px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    style={{ 
                      backgroundColor: '#ff9900',
                      borderColor: '#ff9900'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#e68900'
                      e.currentTarget.style.borderColor = '#e68900'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff9900'
                      e.currentTarget.style.borderColor = '#ff9900'
                    }}
                    onClick={() => {
                      window.open('https://amzn.to/4o2Eucy', '_blank')
                    }}
                  >
                    Buy on Amazon
                  </Button>
                </div>
              </div>

              {/* Placeholder for future products */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="text-center">
                  <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">More products coming soon...</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Coming Soon
                  </h3>
                  <Button
                    className="w-full text-gray-400 font-bold px-4 py-3 rounded-lg shadow-md cursor-not-allowed"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </div>
              </div>
            </div>
          </section>
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

        {/* New GPay Support Section */}
        <section className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">🙏 Support Our Project</h2>
            <p className="text-lg mb-6 opacity-90">
              Help us keep these tools free for everyone. Pay via GPay to support development.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* QR Code Only */}
              <div className="flex-shrink-0">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex justify-center">
                    <QRCodeSVG 
                      value="upi://pay?pa=9884295524@upi&pn=AIGPT&cu=INR"
                      size={200}
                      bgColor="white"
                      fgColor="black"
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-600 text-center">
                    Scan to pay via GPay/UPI
                  </div>
                </div>
              </div>
              
              {/* GPay Button */}
              <div className="flex flex-col items-center">
                <Button
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-lg shadow-lg"
                  onClick={() => {
                    window.open('upi://pay?pa=9884295524@upi&pn=AIGPT&cu=INR', '_blank')
                  }}
                >
                  💳 Pay with GPay
                </Button>
                <p className="mt-2 text-sm opacity-80">
                  Any amount helps! Even ₹10
                </p>
                <p className="mt-1 text-xs opacity-75">
                  Opens GPay app directly
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-sm opacity-75">
              <p>Your support helps us maintain and add new tools</p>
            </div>
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
