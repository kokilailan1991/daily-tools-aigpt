import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Share2, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { tools } from '../data/tools'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { useToast } from '../hooks/use-toast'
import SocialShare from '../components/SocialShare'
import { analytics } from '../utils/simpleAnalytics'
import { useEffect } from 'react'

// Import all tool components
import BMICalculator from '../components/tools/BMICalculator'
import AgeCalculator from '../components/tools/AgeCalculator'
import CalorieCalculator from '../components/tools/CalorieCalculator'
import BMRCalculator from '../components/tools/BMRCalculator'
import IdealWeightCalculator from '../components/tools/IdealWeightCalculator'
import PercentageCalculator from '../components/tools/PercentageCalculator'
import LoanEMICalculator from '../components/tools/LoanEMICalculator'
import CurrencyConverter from '../components/tools/CurrencyConverter'
import TipCalculator from '../components/tools/TipCalculator'
import UnitConverter from '../components/tools/UnitConverter'
import QRCodeGenerator from '../components/tools/QRCodeGenerator'
import PasswordGenerator from '../components/tools/PasswordGenerator'
import Base64Converter from '../components/tools/Base64Converter'
import IPLookup from '../components/tools/IPLookup'
import TextCaseConverter from '../components/tools/TextCaseConverter'
import WordCounter from '../components/tools/WordCounter'
import JSONFormatter from '../components/tools/JSONFormatter'
import NumberToWords from '../components/tools/NumberToWords'
import RomanNumeralConverter from '../components/tools/RomanNumeralConverter'
import DateDifferenceCalculator from '../components/tools/DateDifferenceCalculator'
import TimezoneConverter from '../components/tools/TimezoneConverter'
import StopwatchTimer from '../components/tools/StopwatchTimer'
import DailyPlanner from '../components/tools/DailyPlanner'
import RiskCalculator from '../components/tools/RiskCalculator'
import SIPCalculator from '../components/tools/SIPCalculator'
import SWPCalculator from '../components/tools/SWPCalculator'

// Import new tool components
import GSTCalculator from '../components/tools/GSTCalculator'
import IncomeTaxEstimator from '../components/tools/IncomeTaxEstimator'
import CompoundInterestCalculator from '../components/tools/CompoundInterestCalculator'
import CryptoConverter from '../components/tools/CryptoConverter'
import PDFMerger from '../components/tools/PDFMerger'
import PDFToWord from '../components/tools/PDFToWord'
import ImageConverter from '../components/tools/ImageConverter'
import ImageResizer from '../components/tools/ImageResizer'
import CGPAConverter from '../components/tools/CGPAConverter'
import EquationSolver from '../components/tools/EquationSolver'
import WeatherLookup from '../components/tools/WeatherLookup'
import PincodeLookup from '../components/tools/PincodeLookup'
import IFSCFinder from '../components/tools/IFSCFinder'
import FuelPriceChecker from '../components/tools/FuelPriceChecker'
import SimpleInterestCalculator from '../components/tools/SimpleInterestCalculator'
import AgeInDaysCalculator from '../components/tools/AgeInDaysCalculator'
import LoveCalculator from '../components/tools/LoveCalculator'
import RandomJokeGenerator from '../components/tools/RandomJokeGenerator'
import QuoteGenerator from '../components/tools/QuoteGenerator'
import MemeTextGenerator from '../components/tools/MemeTextGenerator'

const toolComponents: { [key: string]: React.ComponentType } = {
  BMICalculator,
  AgeCalculator,
  CalorieCalculator,
  BMRCalculator,
  IdealWeightCalculator,
  PercentageCalculator,
  LoanEMICalculator,
  CurrencyConverter,
  TipCalculator,
  UnitConverter,
  QRCodeGenerator,
  PasswordGenerator,
  Base64Converter,
  IPLookup,
  TextCaseConverter,
  WordCounter,
  JSONFormatter,
  NumberToWords,
  RomanNumeralConverter,
  DateDifferenceCalculator,
  TimezoneConverter,
  StopwatchTimer,
  DailyPlanner,
  RiskCalculator,
  SIPCalculator,
  SWPCalculator,
  // New tool components
  GSTCalculator,
  IncomeTaxEstimator,
  CompoundInterestCalculator,
  CryptoConverter,
  PDFMerger,
  PDFToWord,
  ImageConverter,
  ImageResizer,
  CGPAConverter,
  EquationSolver,
  WeatherLookup,
  PincodeLookup,
  IFSCFinder,
  FuelPriceChecker,
  SimpleInterestCalculator,
  AgeInDaysCalculator,
  LoveCalculator,
  RandomJokeGenerator,
  QuoteGenerator,
  MemeTextGenerator,
}

export default function ToolPage() {
  const { toolId } = useParams<{ toolId: string }>()
  const navigate = useNavigate()
  const { toast } = useToast()

  const tool = tools.find(t => t.id === toolId)
  const ToolComponent = tool ? toolComponents[tool.component] : null

  // Track tool usage
  useEffect(() => {
    if (tool) {
      analytics.trackToolUsage(tool.id, tool.name, 'view')
    }
  }, [tool])

  const handleShare = async () => {
    const url = window.location.href.replace('#', '')
    try {
      if (navigator.share) {
        await navigator.share({
          title: tool?.name,
          text: tool?.description,
          url: url,
        })
      } else {
        await navigator.clipboard.writeText(url)
        toast({
          title: "Link copied!",
          description: "Tool link has been copied to clipboard.",
        })
      }
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  const handleExportPDF = () => {
    // Simple PDF export functionality
    const element = document.getElementById('tool-content')
    if (element) {
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${tool?.name} - Daily Tools by AIGPT</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .tool-content { margin: 20px 0; }
              </style>
            </head>
            <body>
              <div class="header">
                <h1>${tool?.name}</h1>
                <p>${tool?.description}</p>
                <p>Generated by Daily Tools by AIGPT</p>
              </div>
              <div class="tool-content">
                ${element.innerHTML}
              </div>
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.print()
      }
    }
  }

  if (!tool || !ToolComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
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
                onClick={() => navigate('/')}
                className="h-9 w-9"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{tool.name}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tool.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={handleExportPDF}>
                <Download className="mr-2 h-4 w-4" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Tool Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <span className="text-3xl">{tool.icon}</span>
                <span>{tool.name}</span>
              </CardTitle>
            </CardHeader>
            <CardContent id="tool-content">
              <ToolComponent />
              
              {/* Social Sharing */}
              <SocialShare 
                title={`${tool.name} Calculator Free Online India 2025`}
                description={tool.description}
                url={window.location.href}
              />
              
              {/* Finance Tools Disclaimer */}
              {tool.category === 'Finance' && (
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                    Disclaimer: This calculator is provided for educational and informational purposes only. 
                    It does not constitute financial advice, investment recommendations, or guarantees of returns. 
                    Please consult a SEBI-registered advisor before making investment or financial decisions.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}
