import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingBag, ExternalLink } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export default function DealsPage() {
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
                <h1 className="text-2xl font-bold">🔥 Deals of the Day</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Best offers and discounts for you</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Featured Deal - Planet Herbs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardTitle className="flex items-center gap-2">
                  🌿 Planet Herbs Lifesciences
                  <span className="bg-white/20 px-2 py-1 rounded-full text-sm">FEATURED</span>
                </CardTitle>
                <CardDescription className="text-green-100">
                  Premium Ayurvedic & Herbal Products
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Why Choose Planet Herbs?</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Joint Care & Pain Relief (Synotiz Oil - 50% Off)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Liver Health Products (Hepsadex Syrup & Tablets)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Hair Care Solutions (Planet Kesh Ratna)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        Wellness & Personal Care Products
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        4.59★ Rating with 621 Verified Reviews
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                      <div className="text-3xl font-bold text-green-600 mb-2">Up to 50% Off</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">On Selected Products</div>
                    </div>
                    <Button 
                      asChild
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <a 
                        href="https://linksredirect.com/?cid=248050&source=linkkit&url=https%3A%2F%2Fplanet-herbs.com%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="h-5 w-5" />
                        Shop Now
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <div>✓ Free Shipping on ₹200+</div>
                      <div>✓ Cash on Delivery Available</div>
                      <div>✓ FSSAI Approved Products</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CueLinks Auto-Deals Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🛍️ More Amazing Deals
                </CardTitle>
                <CardDescription>
                  Automatically updated deals from top brands
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div id="cl_deals_widget" className="min-h-[300px]"></div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center py-8"
          >
            <h3 className="text-lg font-semibold mb-4">Why Trust Our Deals?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="text-2xl mb-2">🔒</div>
                <h4 className="font-semibold mb-1">Secure Shopping</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">All links are verified and secure</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="text-2xl mb-2">💰</div>
                <h4 className="font-semibold mb-1">Best Prices</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Hand-picked deals for maximum savings</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-semibold mb-1">Updated Daily</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fresh deals updated every day</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
