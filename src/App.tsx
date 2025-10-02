import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import HomePage from './pages/HomePage'
import ToolPage from './pages/ToolPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import DealsPage from './pages/DealsPage'
import HealthPage from './pages/HealthPage'
import BMICalculatorPage from './pages/health/BMICalculatorPage'
import AgeCalculatorPage from './pages/health/AgeCalculatorPage'
import CalorieCalculatorPage from './pages/health/CalorieCalculatorPage'
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
            <Route path="/health" element={<HealthPage />} />
            <Route path="/health/bmi-calculator" element={<BMICalculatorPage />} />
            <Route path="/health/age-calculator" element={<AgeCalculatorPage />} />
            <Route path="/health/calorie-calculator" element={<CalorieCalculatorPage />} />
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
