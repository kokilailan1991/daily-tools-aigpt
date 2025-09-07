export interface Tool {
  id: string
  name: string
  description: string
  icon: string
  category: 'Health' | 'Finance' | 'Utilities' | 'Text' | 'Time' | 'Conversion'
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
  }
]
