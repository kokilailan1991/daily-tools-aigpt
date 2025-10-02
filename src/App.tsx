import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { initializeGA4Tracking } from './utils/analytics'
import HomePage from './pages/HomePage'
import ToolPage from './pages/ToolPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import DealsPage from './pages/DealsPage'
import NotFound from './components/NotFound'
import { Toaster } from './components/ui/toaster'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import ThemeToggle from './components/ThemeToggle'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Initialize GA4 tracking
    initializeGA4Tracking()
  }, [])

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tool/:toolId" element={<ToolPage />} />
            <Route path="/health/:toolId" element={<ToolPage />} />
            <Route path="/finance/:toolId" element={<ToolPage />} />
            <Route path="/utility/:toolId" element={<ToolPage />} />
            <Route path="/text/:toolId" element={<ToolPage />} />
            <Route path="/time/:toolId" element={<ToolPage />} />
            <Route path="/conversion/:toolId" element={<ToolPage />} />
            <Route path="/fun/:toolId" element={<ToolPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <AnalyticsDashboard />
          <ThemeToggle />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
