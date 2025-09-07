import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import SocialShare from '../components/SocialShare'

const blogPosts: { [key: string]: any } = {
  'best-free-sip-calculator-india-2025': {
    title: 'Best Free SIP Calculator in India 2025 – Plan Your Investments Smartly',
    description: 'Discover the best free SIP calculator tools in India for 2025. Learn how to plan your systematic investment plans and maximize returns with our comprehensive guide.',
    keywords: 'SIP Calculator India, mutual fund calculator, investment planning',
    date: '2025-01-07',
    readTime: '5 min read',
    category: 'Finance',
    content: `
      <h2>What is a SIP Calculator?</h2>
      <p>A Systematic Investment Plan (SIP) calculator is a powerful financial tool that helps investors estimate the potential returns from their regular investments in mutual funds. It's an essential tool for anyone looking to build wealth through disciplined investing.</p>
      
      <h3>Why Use a SIP Calculator?</h3>
      <p>SIP calculators help you:</p>
      <ul>
        <li>Plan your investment goals</li>
        <li>Estimate future returns</li>
        <li>Compare different investment scenarios</li>
        <li>Make informed financial decisions</li>
      </ul>
      
      <h3>How to Use Our SIP Calculator</h3>
      <p>Our free SIP calculator is designed to be user-friendly and accurate. Simply enter your monthly investment amount, expected annual return, and investment period to get instant results.</p>
      
      <h3>Benefits of SIP Investing</h3>
      <p>SIP investing offers several advantages including rupee cost averaging, power of compounding, and disciplined investing habits. It's perfect for long-term wealth creation.</p>
      
      <h3>FAQ</h3>
      <h4>What is the minimum SIP amount?</h4>
      <p>Most mutual funds allow SIP investments starting from ₹500 per month, making it accessible to all income groups.</p>
      
      <h4>How accurate are SIP calculators?</h4>
      <p>SIP calculators provide estimates based on assumed returns. Actual returns may vary due to market conditions and fund performance.</p>
      
      <h4>Can I change my SIP amount?</h4>
      <p>Yes, most SIPs allow you to increase, decrease, or pause your investments as per your financial situation.</p>
    `,
    relatedTool: 'sip-calculator'
  },
  'online-emi-calculator-save-money-loans': {
    title: 'How to Use an Online EMI Calculator to Save Money on Loans',
    description: 'Learn how to use EMI calculators effectively to save money on loans. Compare different loan options and find the best deals for your financial needs.',
    keywords: 'EMI calculator India, loan EMI calculator, personal loan interest',
    date: '2025-01-06',
    readTime: '4 min read',
    category: 'Finance',
    content: `
      <h2>Understanding EMI Calculators</h2>
      <p>An Equated Monthly Installment (EMI) calculator is a crucial tool for anyone planning to take a loan. It helps you understand your monthly payment obligations and plan your finances accordingly.</p>
      
      <h3>Key Benefits of Using EMI Calculators</h3>
      <ul>
        <li>Accurate monthly payment calculations</li>
        <li>Compare different loan options</li>
        <li>Plan your budget effectively</li>
        <li>Understand total interest costs</li>
      </ul>
      
      <h3>How to Calculate EMI</h3>
      <p>EMI calculation involves three main factors: principal amount, interest rate, and loan tenure. Our calculator uses the standard EMI formula to provide accurate results.</p>
      
      <h3>Tips to Save Money on Loans</h3>
      <p>To reduce your EMI burden, consider making a larger down payment, choosing a shorter tenure, or negotiating for a lower interest rate.</p>
      
      <h3>FAQ</h3>
      <h4>What factors affect EMI calculation?</h4>
      <p>EMI is affected by loan amount, interest rate, and tenure. Higher loan amounts and interest rates increase EMI, while longer tenures reduce it.</p>
      
      <h4>Can I prepay my loan?</h4>
      <p>Yes, most loans allow prepayment, which can help you save on interest costs and reduce your loan tenure.</p>
    `,
    relatedTool: 'loan-emi-calculator'
  }
  // Add more blog posts as needed
}

export default function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>()
  const navigate = useNavigate()
  
  const post = postId ? blogPosts[postId] : null

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    )
  }

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
                onClick={() => navigate('/blog')}
                className="h-9 w-9"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Blog Post</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-3xl leading-tight">{post.title}</CardTitle>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
                  {post.description}
                </p>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Social Sharing */}
                <div className="mt-8 pt-6 border-t">
                  <SocialShare 
                    title={post.title}
                    description={post.description}
                    url={window.location.href}
                  />
                </div>
                
                {/* Related Tool */}
                {post.relatedTool && (
                  <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Try Our Calculator</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Use our free calculator to get instant results for your calculations.
                    </p>
                    <Button 
                      onClick={() => navigate(`/tool/${post.relatedTool}`)}
                      className="w-full"
                    >
                      Use Calculator Now
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
