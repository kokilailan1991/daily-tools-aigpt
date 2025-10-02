export interface Tool {
  id: string
  name: string
  description: string
  icon: string
  category: 'Health' | 'Finance' | 'Utilities' | 'Text' | 'Time' | 'Conversion' | 'Fun'
  component: string
}

export const tools: Tool[] = [
  // Health Tools
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index',
    icon: '💪',
    category: 'Health',
    component: 'BMICalculator'
  },
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate your exact age',
    icon: '🎂',
    category: 'Health',
    component: 'AgeCalculator'
  },
  {
    id: 'calorie-calculator',
    name: 'Calorie Calculator',
    description: 'Calculate daily calorie needs for weight management',
    icon: '🔥',
    category: 'Health',
    component: 'CalorieCalculator'
  },
  {
    id: 'bmr-calculator',
    name: 'BMR Calculator',
    description: 'Calculate your Basal Metabolic Rate',
    icon: '⚡',
    category: 'Health',
    component: 'BMRCalculator'
  },
  {
    id: 'ideal-weight-calculator',
    name: 'Ideal Weight Calculator',
    description: 'Find your ideal weight range based on height',
    icon: '⚖️',
    category: 'Health',
    component: 'IdealWeightCalculator'
  },

  // Finance Tools
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate percentages easily',
    icon: '📊',
    category: 'Finance',
    component: 'PercentageCalculator'
  },
  {
    id: 'loan-emi-calculator',
    name: 'Loan EMI Calculator',
    description: 'Calculate loan EMI and interest',
    icon: '💰',
    category: 'Finance',
    component: 'LoanEMICalculator'
  },
  {
    id: 'currency-converter',
    name: 'Currency Converter',
    description: 'Convert between currencies',
    icon: '💱',
    category: 'Finance',
    component: 'CurrencyConverter'
  },
  {
    id: 'tip-calculator',
    name: 'Tip Calculator',
    description: 'Calculate tips and split bills',
    icon: '🍽️',
    category: 'Finance',
    component: 'TipCalculator'
  },
  {
    id: 'risk-calculator',
    name: 'Risk Calculator',
    description: 'Calculate investment risk and returns',
    icon: '📈',
    category: 'Finance',
    component: 'RiskCalculator'
  },
  {
    id: 'sip-calculator',
    name: 'SIP Calculator',
    description: 'Calculate Systematic Investment Plan returns',
    icon: '💰',
    category: 'Finance',
    component: 'SIPCalculator'
  },
  {
    id: 'swp-calculator',
    name: 'SWP Calculator',
    description: 'Calculate Systematic Withdrawal Plan',
    icon: '💸',
    category: 'Finance',
    component: 'SWPCalculator'
  },

  // Utilities
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert length, weight, temperature',
    icon: '📏',
    category: 'Utilities',
    component: 'UnitConverter'
  },
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator',
    description: 'Generate QR codes for text/URLs',
    icon: '📱',
    category: 'Utilities',
    component: 'QRCodeGenerator'
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure passwords',
    icon: '🔐',
    category: 'Utilities',
    component: 'PasswordGenerator'
  },
  {
    id: 'base64-converter',
    name: 'Base64 Converter',
    description: 'Encode/decode Base64 strings',
    icon: '🔤',
    category: 'Utilities',
    component: 'Base64Converter'
  },
  {
    id: 'ip-lookup',
    name: 'IP Address Lookup',
    description: 'Get IP address information',
    icon: '🌐',
    category: 'Utilities',
    component: 'IPLookup'
  },

  // Text Tools
  {
    id: 'text-case-converter',
    name: 'Text Case Converter',
    description: 'Convert text to different cases',
    icon: '📝',
    category: 'Text',
    component: 'TextCaseConverter'
  },
  {
    id: 'word-counter',
    name: 'Word & Character Counter',
    description: 'Count words and characters',
    icon: '📄',
    category: 'Text',
    component: 'WordCounter'
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format and validate JSON',
    icon: '🔧',
    category: 'Text',
    component: 'JSONFormatter'
  },
  {
    id: 'number-to-words',
    name: 'Number to Words',
    description: 'Convert numbers to words',
    icon: '🔢',
    category: 'Text',
    component: 'NumberToWords'
  },
  {
    id: 'roman-numeral',
    name: 'Roman Numeral Converter',
    description: 'Convert to/from Roman numerals',
    icon: '🏛️',
    category: 'Text',
    component: 'RomanNumeralConverter'
  },

  // Time Tools
  {
    id: 'date-difference',
    name: 'Date Difference Calculator',
    description: 'Calculate difference between dates',
    icon: '📅',
    category: 'Time',
    component: 'DateDifferenceCalculator'
  },
  {
    id: 'timezone-converter',
    name: 'Time Zone Converter',
    description: 'Convert between time zones',
    icon: '🌍',
    category: 'Time',
    component: 'TimezoneConverter'
  },
  {
    id: 'stopwatch-timer',
    name: 'Stopwatch & Timer',
    description: 'Stopwatch and countdown timer',
    icon: '⏱️',
    category: 'Time',
    component: 'StopwatchTimer'
  },
  {
    id: 'daily-planner',
    name: 'Daily Planner',
    description: 'Simple notes and todos',
    icon: '📋',
    category: 'Time',
    component: 'DailyPlanner'
  },

  // New Finance Tools
  {
    id: 'gst-calculator',
    name: 'GST Calculator',
    description: 'Calculate GST amount and total',
    icon: '🧾',
    category: 'Finance',
    component: 'GSTCalculator'
  },
  {
    id: 'income-tax-estimator',
    name: 'Income Tax Estimator',
    description: 'Estimate your income tax liability',
    icon: '📈',
    category: 'Finance',
    component: 'IncomeTaxEstimator'
  },
  {
    id: 'compound-interest-calculator',
    name: 'Compound Interest Calculator',
    description: 'Calculate compound interest returns',
    icon: '💎',
    category: 'Finance',
    component: 'CompoundInterestCalculator'
  },
  {
    id: 'crypto-converter',
    name: 'Crypto Converter',
    description: 'Convert BTC/ETH to INR/USD',
    icon: '₿',
    category: 'Finance',
    component: 'CryptoConverter'
  },

  // Productivity/Office Tools
  {
    id: 'pdf-merger',
    name: 'PDF Merger',
    description: 'Merge multiple PDF files',
    icon: '📄',
    category: 'Utilities',
    component: 'PDFMerger'
  },
  {
    id: 'pdf-to-word',
    name: 'PDF to Word',
    description: 'Convert PDF to Word document',
    icon: '📝',
    category: 'Utilities',
    component: 'PDFToWord'
  },
  {
    id: 'image-converter',
    name: 'Image Converter',
    description: 'Convert JPG ⇄ PNG ⇄ WebP',
    icon: '🖼️',
    category: 'Utilities',
    component: 'ImageConverter'
  },
  {
    id: 'image-resizer',
    name: 'Image Resizer',
    description: 'Resize images to any dimensions',
    icon: '📐',
    category: 'Utilities',
    component: 'ImageResizer'
  },

  // Students Tools
  {
    id: 'cgpa-converter',
    name: 'CGPA Converter',
    description: 'Convert CGPA to percentage',
    icon: '🎓',
    category: 'Utilities',
    component: 'CGPAConverter'
  },
  {
    id: 'simple-interest-calculator',
    name: 'Simple Interest Calculator',
    description: 'Calculate simple interest (school level)',
    icon: '📚',
    category: 'Finance',
    component: 'SimpleInterestCalculator'
  },
  {
    id: 'equation-solver',
    name: 'Equation Solver',
    description: 'Solve linear and quadratic equations',
    icon: '🧮',
    category: 'Utilities',
    component: 'EquationSolver'
  },

  // Daily Use Tools
  {
    id: 'weather-lookup',
    name: 'Weather Lookup',
    description: 'Check weather by city',
    icon: '🌤️',
    category: 'Utilities',
    component: 'WeatherLookup'
  },
  {
    id: 'pincode-lookup',
    name: 'Pincode Lookup',
    description: 'Find location by pincode',
    icon: '📍',
    category: 'Utilities',
    component: 'PincodeLookup'
  },
  {
    id: 'ifsc-finder',
    name: 'IFSC Finder',
    description: 'Find bank IFSC code',
    icon: '🏦',
    category: 'Utilities',
    component: 'IFSCFinder'
  },
  {
    id: 'fuel-price-checker',
    name: 'Fuel Price Checker',
    description: 'Check fuel prices by city in India',
    icon: '⛽',
    category: 'Utilities',
    component: 'FuelPriceChecker'
  },

  // Fun/Viral Tools
  {
    id: 'love-calculator',
    name: 'Love Calculator',
    description: 'Calculate name compatibility (just for fun)',
    icon: '💕',
    category: 'Fun',
    component: 'LoveCalculator'
  },
  {
    id: 'random-joke-generator',
    name: 'Random Joke Generator',
    description: 'Generate random jokes to brighten your day',
    icon: '😄',
    category: 'Fun',
    component: 'RandomJokeGenerator'
  },
  {
    id: 'quote-generator',
    name: 'Quote Generator',
    description: 'Get inspirational quotes',
    icon: '💭',
    category: 'Fun',
    component: 'QuoteGenerator'
  },
  {
    id: 'age-in-days-calculator',
    name: 'Age in Days Calculator',
    description: 'Calculate age in days, hours, minutes',
    icon: '⏰',
    category: 'Fun',
    component: 'AgeInDaysCalculator'
  },
  {
    id: 'meme-text-generator',
    name: 'Meme Text Generator',
    description: 'Generate viral meme text',
    icon: '😂',
    category: 'Fun',
    component: 'MemeTextGenerator'
  }
]
