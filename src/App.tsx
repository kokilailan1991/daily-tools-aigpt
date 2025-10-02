import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import HomePage from './pages/HomePage'
import ToolPage from './pages/ToolPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import DealsPage from './pages/DealsPage'
import NotFound from './components/NotFound'
import { Toaster } from './components/ui/toaster'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tool/:toolId" element={<ToolPage />} />
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
