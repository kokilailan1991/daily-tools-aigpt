export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  category: 'health' | 'finance' | 'utility' | 'text' | 'time' | 'conversion' | 'fun'
  content: string
  faqs: Array<{
    question: string
    answer: string
  }>
  relatedTools: string[]
}

export const seoConfigs: Record<string, SEOConfig> = {
  'bmi-calculator': {
    title: 'Free BMI Calculator – Body Mass Index Online 2025',
    description: 'Check your Body Mass Index instantly with our free BMI calculator. Enter height & weight to know if you are underweight, normal, or overweight.',
    keywords: ['BMI calculator', 'body mass index', 'BMI formula', 'healthy weight', 'BMI chart', 'BMI categories'],
    category: 'health',
    content: `The Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m² where kg is a person's weight in kilograms and m² is their height in metres squared.

BMI provides a simple numeric measure of a person's thickness or thinness, allowing health professionals to discuss weight problems more objectively with their patients. BMI is used as a screening tool to identify potential weight problems for adults.

While BMI doesn't measure body fat directly, research has shown that BMI correlates to direct measures of body fat. It's a useful tool for healthcare providers to assess potential health risks associated with being underweight, overweight, or obese.

BMI Categories (WHO Standard):
- Underweight: BMI < 18.5
- Normal weight: BMI 18.5 - 24.9
- Overweight: BMI 25.0 - 29.9
- Obese: BMI ≥ 30.0

Example Calculation:
If you weigh 70 kg and are 170 cm tall:
BMI = 70 ÷ (1.70)² = 70 ÷ 2.89 = 24.2 (Normal weight)

BMI is most accurate for adults aged 18-65 and may not be suitable for athletes, pregnant women, or elderly individuals with high muscle mass or bone density.`,
    faqs: [
      {
        question: 'Is BMI accurate for everyone?',
        answer: 'BMI is a useful screening tool but has limitations. It may not accurately reflect body composition for athletes, elderly adults, or people with high muscle mass. Always consult a healthcare provider for personalized assessment.'
      },
      {
        question: 'What should I do if my BMI is high?',
        answer: 'If your BMI indicates overweight or obesity, consider consulting a healthcare provider for personalized advice. Focus on sustainable lifestyle changes including balanced nutrition and regular physical activity.'
      },
      {
        question: 'How often should I check my BMI?',
        answer: 'For most adults, checking BMI monthly is sufficient for tracking progress. However, focus more on overall health indicators like energy levels, strength, and how you feel rather than just the number.'
      }
    ],
    relatedTools: ['ideal-weight-calculator', 'calorie-calculator', 'bmr-calculator']
  },
  'calorie-calculator': {
    title: 'Free Calorie Calculator – Daily Calorie Needs for Weight Loss & Gain 2025',
    description: 'Calculate your daily calorie needs instantly with our free calorie calculator. Perfect for weight loss, maintenance, or weight gain goals with personalized recommendations.',
    keywords: ['calorie calculator', 'daily calories', 'weight loss calories', 'calorie deficit', 'TDEE calculator', 'BMR calculator'],
    category: 'health',
    content: `Our calorie calculator uses the scientifically-validated Mifflin-St Jeor equation to determine your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). BMR represents the calories your body needs at complete rest, while TDEE includes calories burned through daily activities and exercise.

The Mifflin-St Jeor Equation:
- Men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
- Women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161

TDEE is calculated by multiplying your BMR by an activity factor:
- Sedentary (little/no exercise): BMR × 1.2
- Lightly active (light exercise 1-3 days/week): BMR × 1.375
- Moderately active (moderate exercise 3-5 days/week): BMR × 1.55
- Very active (hard exercise 6-7 days/week): BMR × 1.725
- Extremely active (very hard exercise & physical job): BMR × 1.9

Example Calculation:
A 30-year-old woman, 70 kg, 170 cm, moderately active:
BMR = (10 × 70) + (6.25 × 170) - (5 × 30) - 161 = 700 + 1062.5 - 150 - 161 = 1451.5 calories
TDEE = 1451.5 × 1.55 = 2250 calories per day

For weight management:
- Weight loss: Reduce daily calories by 500-1000 calories
- Weight gain: Increase daily calories by 300-500 calories
- Weight maintenance: Eat at your TDEE level`,
    faqs: [
      {
        question: 'How accurate is the calorie calculator?',
        answer: 'Our calculator uses the scientifically-validated Mifflin-St Jeor equation, which is considered one of the most accurate methods for estimating calorie needs. However, individual metabolism can vary based on genetics, muscle mass, and other factors.'
      },
      {
        question: 'Should I eat exactly the calculated calories?',
        answer: 'The calculated calories are a starting point. Monitor your progress and adjust based on results. Factors like stress, sleep, and hormonal changes can affect actual calorie needs.'
      },
      {
        question: 'What\'s the difference between BMR and TDEE?',
        answer: 'BMR is calories needed at complete rest (basic bodily functions). TDEE includes all daily activities and exercise. TDEE is more useful for setting calorie targets for weight management.'
      }
    ],
    relatedTools: ['bmr-calculator', 'bmi-calculator', 'ideal-weight-calculator']
  },
  'bmr-calculator': {
    title: 'Free BMR Calculator – Basal Metabolic Rate Online 2025',
    description: 'Calculate your BMR (Basal Metabolic Rate) instantly with our free calculator. Know how many calories you burn at rest for better weight management.',
    keywords: ['BMR calculator', 'basal metabolic rate', 'metabolism calculator', 'resting calories', 'BMR formula'],
    category: 'health',
    content: `BMR (Basal Metabolic Rate) represents the number of calories your body needs to perform basic life-sustaining functions like breathing, circulation, cell production, and brain function. It accounts for 60-70% of your total daily calorie expenditure and is the foundation for calculating your total calorie needs.

Our BMR calculator uses the Mifflin-St Jeor Equation, which is considered the most accurate formula for estimating BMR:

For Men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
For Women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161

Example Calculation:
A 25-year-old man, 75 kg, 180 cm:
BMR = (10 × 75) + (6.25 × 180) - (5 × 25) + 5
BMR = 750 + 1125 - 125 + 5 = 1755 calories per day

Factors that affect BMR:
- Age: BMR decreases with age (about 2-3% per decade after 20)
- Gender: Men typically have higher BMR due to more muscle mass
- Weight: Heavier people have higher BMR
- Height: Taller people have higher BMR
- Muscle mass: More muscle increases BMR
- Genetics: Some people naturally have higher or lower BMR

Understanding your BMR helps you:
- Set appropriate calorie targets for weight management
- Calculate your Total Daily Energy Expenditure (TDEE)
- Make informed decisions about diet and exercise
- Track metabolic changes over time`,
    faqs: [
      {
        question: 'How accurate is the BMR calculation?',
        answer: 'Our calculator uses the scientifically-validated Mifflin-St Jeor equation, which is considered the most accurate formula for estimating BMR. However, individual metabolism can vary based on genetics, muscle mass, and other factors.'
      },
      {
        question: 'How can I increase my BMR?',
        answer: 'Building muscle through resistance training is the most effective way to increase BMR. Other factors include adequate protein intake, regular exercise, quality sleep, and staying hydrated. Age and genetics also play significant roles.'
      },
      {
        question: 'What\'s the difference between BMR and TDEE?',
        answer: 'BMR is calories burned at complete rest. TDEE (Total Daily Energy Expenditure) includes BMR plus calories burned through daily activities and exercise. TDEE is typically 1.2-1.9 times your BMR depending on activity level.'
      }
    ],
    relatedTools: ['calorie-calculator', 'bmi-calculator', 'ideal-weight-calculator']
  },
  'ideal-weight-calculator': {
    title: 'Free Ideal Weight Calculator – Healthy Weight Range 2025',
    description: 'Calculate your ideal weight range with our free calculator. Get personalized healthy weight recommendations using multiple scientific formulas.',
    keywords: ['ideal weight calculator', 'healthy weight', 'ideal weight range', 'weight calculator', 'healthy BMI'],
    category: 'health',
    content: `Our ideal weight calculator uses multiple scientifically-proven formulas to determine your healthy weight range. Each formula has its own strengths and limitations, so we provide several calculations to give you a comprehensive view.

The formulas we use include:

1. Robinson Formula (1983) - Most accurate for adults
2. Miller Formula (1983) - Good for general population
3. Devine Formula (1974) - Widely used in medical settings
4. Hamwi Formula (1964) - Simple and practical

Example Calculation for a 170cm female:
- Robinson: 49 + (1.7 × ((170-152.4)/2.54)) = 49 + (1.7 × 6.9) = 60.7 kg
- Miller: 53.1 + (1.36 × ((170-152.4)/2.54)) = 53.1 + (1.36 × 6.9) = 62.5 kg
- Devine: 45.5 + (2.3 × ((170-152.4)/2.54)) = 45.5 + (2.3 × 6.9) = 61.4 kg
- Hamwi: 45.5 + (2.2 × ((170-152.4)/2.54)) = 45.5 + (2.2 × 6.9) = 60.7 kg

BMI Range Method:
We also provide a BMI-based healthy weight range:
- Height: 170cm
- BMI 18.5-24.9 (healthy range)
- Weight range: 53.5-72.0 kg

Important Considerations:
- These calculations provide general guidelines
- Individual factors like muscle mass, bone density, and body composition matter
- Athletes may have higher weights due to muscle mass
- Age, genetics, and overall health status should be considered
- Always consult healthcare professionals for personalized advice`,
    faqs: [
      {
        question: 'Which formula is most accurate?',
        answer: 'The Robinson formula (1983) is often considered the most accurate for adults. However, using multiple formulas and averaging the results provides the most comprehensive estimate. All formulas have limitations and should be used as guidelines.'
      },
      {
        question: 'Should I aim for the exact ideal weight?',
        answer: 'Focus on the healthy weight range rather than an exact number. The BMI range of 18.5-24.9 is generally considered healthy. Individual factors like muscle mass, body composition, and overall health should also be considered.'
      },
      {
        question: 'What if I\'m an athlete with high muscle mass?',
        answer: 'Athletes with significant muscle mass may have higher weights that are still healthy. In such cases, body composition analysis and consultation with healthcare professionals are more important than weight alone.'
      }
    ],
    relatedTools: ['bmi-calculator', 'calorie-calculator', 'bmr-calculator']
  },
  'age-calculator': {
    title: 'Free Age Calculator – Calculate Exact Age in Years, Months & Days 2025',
    description: 'Calculate your exact age instantly with our free age calculator. Get your age in years, months, days, hours, and minutes for birthday planning.',
    keywords: ['age calculator', 'how old am I', 'age in days', 'age in months', 'exact age calculator'],
    category: 'health',
    content: `Our age calculator provides precise age calculations using advanced date arithmetic. It calculates the difference between your birth date and the current date, accounting for leap years and varying month lengths to give you accurate results in multiple formats.

The calculation provides:
- Years, months, and days
- Total days since birth
- Total hours since birth
- Total minutes since birth
- Age milestones and comparisons

Example Calculation:
Birth Date: January 15, 1990
Current Date: December 20, 2024
Result: 34 years, 11 months, 5 days

Key Features:
- Handles leap years correctly
- Accounts for varying month lengths
- Provides multiple time unit formats
- Shows age milestones
- Useful for birthday planning and age verification

Practical Applications:
- Birthday party planning
- Age verification for legal purposes
- Milestone celebrations
- Life planning and goal setting
- Educational purposes
- Medical and health tracking

The calculator uses precise date arithmetic and accounts for:
- Leap years (February 29th)
- Different month lengths (28, 29, 30, or 31 days)
- Daylight saving time considerations
- Time zone differences (when applicable)

This tool is particularly useful for:
- Parents tracking their children's development
- Individuals planning milestone celebrations
- Legal age verification
- Educational demonstrations of time calculations
- Personal curiosity and planning`,
    faqs: [
      {
        question: 'How accurate is this age calculator?',
        answer: 'Our age calculator is highly accurate, using precise date arithmetic and accounting for leap years. It provides exact age calculations down to the minute level.'
      },
      {
        question: 'Can I calculate age for any date in the past or future?',
        answer: 'Yes! You can calculate age for any date by selecting different current dates. This is useful for historical calculations or future planning.'
      },
      {
        question: 'What if someone was born on February 29th (leap year)?',
        answer: 'Our calculator handles leap year births correctly. For non-leap years, February 28th is used as the equivalent date for calculations.'
      }
    ],
    relatedTools: ['bmi-calculator', 'life-expectancy-calculator', 'pregnancy-due-date-calculator']
  },
  'emi-calculator': {
    title: 'Free EMI Calculator – Loan EMI Calculator Online 2025',
    description: 'Calculate your loan EMI instantly with our free EMI calculator. Get accurate monthly payments for home loans, personal loans, car loans with interest rates.',
    keywords: ['EMI calculator', 'loan EMI', 'monthly EMI', 'home loan EMI', 'personal loan EMI', 'car loan EMI'],
    category: 'finance',
    content: `An EMI (Equated Monthly Installment) calculator helps you determine the monthly payment amount for any loan. EMI is the fixed payment amount made by a borrower to a lender at a specified date each calendar month.

The EMI calculation formula combines both principal and interest components:
EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]

Where:
- P = Principal loan amount
- R = Monthly interest rate (annual rate ÷ 12)
- N = Loan tenure in months

Example Calculation:
Loan Amount: ₹10,00,000
Interest Rate: 12% per annum
Tenure: 5 years (60 months)

Monthly Interest Rate (R) = 12% ÷ 12 = 1% = 0.01
EMI = [10,00,000 × 0.01 × (1+0.01)^60] / [(1+0.01)^60 - 1]
EMI = [10,000 × 1.8167] / [1.8167 - 1]
EMI = 18,167 / 0.8167 = ₹22,244 per month

Key Benefits of Using EMI Calculator:
- Accurate monthly payment calculation
- Compare different loan options
- Plan your budget effectively
- Understand total interest payable
- Choose optimal loan tenure

Factors Affecting EMI:
- Principal amount
- Interest rate
- Loan tenure
- Processing fees
- Prepayment options

Types of Loans Covered:
- Home loans
- Personal loans
- Car loans
- Education loans
- Business loans`,
    faqs: [
      {
        question: 'How is EMI calculated?',
        answer: 'EMI is calculated using the formula: [P × R × (1+R)^N] / [(1+R)^N - 1], where P is principal, R is monthly interest rate, and N is tenure in months.'
      },
      {
        question: 'What factors affect my EMI amount?',
        answer: 'EMI depends on three main factors: loan amount (principal), interest rate, and loan tenure. Higher loan amount or interest rate increases EMI, while longer tenure reduces EMI.'
      },
      {
        question: 'Can I reduce my EMI amount?',
        answer: 'Yes, you can reduce EMI by choosing a longer tenure, negotiating a lower interest rate, or making a larger down payment to reduce the principal amount.'
      }
    ],
    relatedTools: ['sip-calculator', 'compound-interest-calculator', 'risk-calculator']
  },
  'sip-calculator': {
    title: 'Free SIP Calculator – SIP Investment Calculator Online 2025',
    description: 'Calculate SIP returns with our free SIP calculator. Plan your monthly SIP investments and see potential returns for mutual funds, stocks, and other investments.',
    keywords: ['SIP calculator', 'SIP returns', 'monthly SIP', 'mutual fund SIP', 'investment calculator', 'SIP planning'],
    category: 'finance',
    content: `A SIP (Systematic Investment Plan) calculator helps you estimate the future value of your regular monthly investments. SIP is an investment strategy where you invest a fixed amount regularly in mutual funds, stocks, or other investment vehicles.

The SIP calculation formula for future value:
FV = P × [((1 + r)^n - 1) / r] × (1 + r)

Where:
- FV = Future Value
- P = Monthly SIP amount
- r = Monthly return rate (annual rate ÷ 12)
- n = Number of months

Example Calculation:
Monthly SIP: ₹10,000
Expected Annual Return: 12%
Investment Period: 10 years (120 months)

Monthly Return Rate (r) = 12% ÷ 12 = 1% = 0.01
FV = 10,000 × [((1 + 0.01)^120 - 1) / 0.01] × (1 + 0.01)
FV = 10,000 × [(3.3004 - 1) / 0.01] × 1.01
FV = 10,000 × [230.04] × 1.01 = ₹23,23,404

Key Benefits of SIP:
- Rupee cost averaging
- Disciplined investing
- Compounding benefits
- Lower minimum investment
- Flexibility to start/stop

SIP vs Lump Sum Investment:
- SIP reduces market timing risk
- Provides better average entry price
- Suitable for regular income earners
- Builds investment discipline

Important Considerations:
- Past performance doesn't guarantee future returns
- Market volatility affects returns
- Consider inflation impact
- Review and rebalance periodically
- Choose appropriate risk level`,
    faqs: [
      {
        question: 'How does SIP help in long-term wealth creation?',
        answer: 'SIP leverages the power of compounding and rupee cost averaging. By investing regularly over time, you benefit from market volatility and compound returns, leading to significant wealth creation.'
      },
      {
        question: 'What is the minimum SIP amount?',
        answer: 'Most mutual funds allow SIP investments starting from ₹500 per month. However, the minimum amount varies by fund house and scheme. Check with your fund provider for specific requirements.'
      },
      {
        question: 'Can I change my SIP amount later?',
        answer: 'Yes, you can increase, decrease, or pause your SIP amount with most fund houses. Some even allow you to set up step-up SIPs that automatically increase your investment amount annually.'
      }
    ],
    relatedTools: ['emi-calculator', 'compound-interest-calculator', 'risk-calculator']
  },
  'unit-converter': {
    title: 'Free Unit Converter – Length, Weight, Temperature Online 2025',
    description: 'Convert between different units instantly with our free unit converter. Length, weight, temperature conversions for daily use.',
    keywords: ['unit converter', 'length converter', 'weight converter', 'temperature converter', 'measurement converter'],
    category: 'utility',
    content: `Our unit converter provides instant conversions between different measurement systems. Whether you need to convert length, weight, temperature, or other units, our tool makes it simple and accurate.

Supported Conversions:
- Length: mm, cm, m, km, inches, feet, yards, miles
- Weight: mg, g, kg, ounces, pounds, tons
- Temperature: Celsius, Fahrenheit, Kelvin

Example Conversions:
- 1 meter = 100 centimeters = 1000 millimeters
- 1 kilogram = 1000 grams = 2.20462 pounds
- 0°C = 32°F = 273.15K

Why Use Our Unit Converter:
- Instant conversions with high accuracy
- Support for metric and imperial systems
- Commonly used units for daily life
- No registration required
- Mobile-friendly interface

Practical Applications:
- Cooking and baking measurements
- Construction and engineering
- Scientific calculations
- Travel planning
- Educational purposes

Our converter uses precise conversion factors and is regularly updated to ensure accuracy. All conversions are performed client-side for fast results and privacy.`,
    faqs: [
      {
        question: 'How accurate are the unit conversions?',
        answer: 'Our unit converter uses precise conversion factors and is highly accurate. All calculations are performed using standard conversion rates recognized internationally.'
      },
      {
        question: 'Can I convert between metric and imperial units?',
        answer: 'Yes! Our converter supports both metric (SI) and imperial unit systems, allowing seamless conversion between different measurement standards.'
      },
      {
        question: 'Are there any limitations on the values I can convert?',
        answer: 'You can convert any reasonable numerical value. The converter handles both positive and negative numbers, and very large or small values within JavaScript number limits.'
      }
    ],
    relatedTools: ['percentage-calculator', 'tip-calculator', 'bmi-calculator']
  },
  'qr-code-generator': {
    title: 'Free QR Code Generator – Create QR Codes Online 2025',
    description: 'Generate QR codes instantly for text, URLs, and more. Free online QR code generator with customizable options.',
    keywords: ['QR code generator', 'QR code creator', 'free QR code', 'QR code maker', 'barcode generator'],
    category: 'utility',
    content: `Our QR code generator allows you to create QR codes instantly for any text or URL. QR codes are two-dimensional barcodes that can store various types of information and are easily scanned by smartphones.

What You Can Generate:
- URLs and website links
- Plain text messages
- Contact information
- WiFi credentials
- Email addresses
- Phone numbers

How It Works:
1. Enter your text or URL in the input field
2. Click "Generate QR Code"
3. Download or share the generated QR code

QR Code Benefits:
- Quick access to information
- No typing required
- Works with any smartphone camera
- Can store various data types
- Easy to print and share

Use Cases:
- Business cards and marketing materials
- Restaurant menus
- Event information
- WiFi sharing
- Social media profiles
- Product information

Our QR code generator uses industry-standard encoding to ensure compatibility with all QR code scanners. The generated codes are high-quality and can be downloaded in various formats.`,
    faqs: [
      {
        question: 'What types of data can I store in a QR code?',
        answer: 'QR codes can store URLs, plain text, contact information, WiFi credentials, email addresses, phone numbers, and more. Our generator supports text and URL encoding.'
      },
      {
        question: 'How do I scan a QR code?',
        answer: 'Most modern smartphones have built-in QR code scanners in their camera apps. Simply open your camera and point it at the QR code to scan.'
      },
      {
        question: 'Can I customize the appearance of the QR code?',
        answer: 'Our generator creates standard QR codes with a black and white pattern. For advanced customization, you would need specialized QR code design tools.'
      }
    ],
    relatedTools: ['password-generator', 'base64-converter', 'text-case-converter']
  },
  'password-generator': {
    title: 'Free Password Generator – Secure Password Creator Online 2025',
    description: 'Generate secure, random passwords with our free password generator. Customizable length and character options for maximum security.',
    keywords: ['password generator', 'secure password', 'random password', 'password creator', 'strong password'],
    category: 'utility',
    content: `Our password generator creates secure, random passwords to help protect your online accounts. Strong passwords are essential for maintaining cybersecurity in today's digital world.

Password Features:
- Customizable length (4-50 characters)
- Include/exclude uppercase letters
- Include/exclude lowercase letters
- Include/exclude numbers
- Include/exclude special symbols
- Cryptographically secure random generation

Security Best Practices:
- Use at least 12-16 characters
- Include a mix of character types
- Avoid common words or patterns
- Use unique passwords for each account
- Consider using a password manager

Password Strength Tips:
- Longer passwords are more secure
- Mix different character types
- Avoid personal information
- Don't reuse passwords
- Change passwords regularly

Why Strong Passwords Matter:
- Protect against brute force attacks
- Prevent unauthorized access
- Secure sensitive information
- Comply with security policies
- Reduce identity theft risk

Our generator uses secure random number generation to create unpredictable passwords. The generated passwords are not stored or transmitted anywhere, ensuring your privacy.`,
    faqs: [
      {
        question: 'How secure are the generated passwords?',
        answer: 'Our password generator uses cryptographically secure random number generation, making the passwords highly secure and unpredictable.'
      },
      {
        question: 'What is the recommended password length?',
        answer: 'For maximum security, we recommend using passwords of at least 12-16 characters with a mix of uppercase, lowercase, numbers, and symbols.'
      },
      {
        question: 'Should I save these passwords somewhere?',
        answer: 'Yes, but use a secure password manager rather than writing them down. Password managers encrypt your passwords and can generate strong ones automatically.'
      }
    ],
    relatedTools: ['qr-code-generator', 'base64-converter', 'text-case-converter']
  },
  'base64-converter': {
    title: 'Free Base64 Converter – Encode/Decode Base64 Online 2025',
    description: 'Convert text to Base64 encoding and decode Base64 strings instantly. Free online Base64 converter for developers and users.',
    keywords: ['base64 converter', 'base64 encoder', 'base64 decoder', 'base64 encode', 'base64 decode'],
    category: 'utility',
    content: `Our Base64 converter allows you to encode text to Base64 format and decode Base64 strings back to readable text. Base64 encoding is widely used in web development and data transmission.

What is Base64?
Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It's commonly used for:
- Email attachments
- Data URLs in web pages
- API authentication
- Storing binary data in text formats
- URL-safe data transmission

How It Works:
- Encoding: Converts text to Base64 format
- Decoding: Converts Base64 back to original text
- Supports all ASCII characters
- Handles Unicode text properly
- URL-safe encoding available

Use Cases:
- Web development and APIs
- Email systems
- Data storage
- Authentication tokens
- Image embedding in HTML/CSS
- Configuration files

Technical Details:
- Uses standard Base64 alphabet (A-Z, a-z, 0-9, +, /)
- Padding with '=' characters when needed
- Handles line breaks and whitespace
- Supports large text inputs

Our converter processes data entirely in your browser, ensuring privacy and security. No data is sent to external servers.`,
    faqs: [
      {
        question: 'What is Base64 encoding used for?',
        answer: 'Base64 is commonly used for encoding binary data in email systems, web APIs, data URLs, and anywhere you need to represent binary data as text.'
      },
      {
        question: 'Is Base64 encoding secure?',
        answer: 'Base64 is encoding, not encryption. It\'s not secure for sensitive data as it can be easily decoded. Use proper encryption for sensitive information.'
      },
      {
        question: 'Can I encode images or files with this tool?',
        answer: 'This tool is designed for text encoding/decoding. For images and files, you would need specialized Base64 encoding tools that handle binary data.'
      }
    ],
    relatedTools: ['text-case-converter', 'json-formatter', 'password-generator']
  },
  'text-case-converter': {
    title: 'Free Text Case Converter – Uppercase, Lowercase, Title Case Online 2025',
    description: 'Convert text to different cases instantly with our free text case converter. Uppercase, lowercase, title case, and more text transformations.',
    keywords: ['text case converter', 'uppercase converter', 'lowercase converter', 'title case converter', 'text transformer'],
    category: 'utility',
    content: `Our text case converter allows you to transform text into different cases instantly. Whether you need uppercase, lowercase, title case, or other text transformations, our tool makes it simple and fast.

Supported Case Types:
- UPPERCASE: Convert all text to capital letters
- lowercase: Convert all text to small letters
- Title Case: Capitalize First Letter Of Each Word
- camelCase: Convert to camelCase format
- PascalCase: Convert to PascalCase format
- snake_case: Convert to snake_case format
- kebab-case: Convert to kebab-case format

How It Works:
1. Paste or type your text in the input field
2. Select the desired case transformation
3. Click convert to see the result
4. Copy the converted text

Use Cases:
- Programming and coding
- Data formatting
- Document preparation
- Social media posts
- Academic writing
- Content creation

Benefits:
- Instant conversion
- Multiple case options
- No character limits
- Copy to clipboard
- Mobile-friendly interface

Our converter handles all Unicode characters and preserves special characters while transforming the case. Perfect for developers, writers, and anyone who needs quick text transformations.`,
    faqs: [
      {
        question: 'What types of text case conversions are supported?',
        answer: 'We support uppercase, lowercase, title case, camelCase, PascalCase, snake_case, and kebab-case conversions.'
      },
      {
        question: 'Can I convert long text documents?',
        answer: 'Yes, our converter can handle large amounts of text. There are no strict character limits for the conversion process.'
      },
      {
        question: 'Are special characters preserved during conversion?',
        answer: 'Yes, special characters, numbers, and symbols are preserved during case conversion. Only alphabetic characters are transformed.'
      }
    ],
    relatedTools: ['word-counter', 'json-formatter', 'base64-converter']
  },
  'word-counter': {
    title: 'Free Word Counter – Character Count & Word Count Online 2025',
    description: 'Count words, characters, sentences, and paragraphs instantly with our free word counter. Perfect for writers, students, and content creators.',
    keywords: ['word counter', 'character counter', 'word count', 'character count', 'text counter'],
    category: 'utility',
    content: `Our word counter provides instant analysis of your text, counting words, characters, sentences, and paragraphs. Essential for writers, students, bloggers, and anyone who needs accurate text statistics.

What We Count:
- Words: Total number of words in your text
- Characters: Total characters including spaces
- Characters (no spaces): Characters excluding spaces
- Sentences: Number of sentences
- Paragraphs: Number of paragraphs
- Reading time: Estimated time to read the text

Features:
- Real-time counting as you type
- Detailed text statistics
- Reading time estimation
- No character limits
- Mobile-friendly interface
- Copy results functionality

Use Cases:
- Academic writing and essays
- Blog posts and articles
- Social media content
- Email composition
- SEO content optimization
- Creative writing

Benefits:
- Instant results
- Comprehensive statistics
- Accurate counting
- Easy to use
- No registration required
- Works offline after loading

Our counter uses advanced text analysis to provide accurate counts and useful statistics. Perfect for meeting word count requirements, optimizing content length, and analyzing text composition.`,
    faqs: [
      {
        question: 'How accurate is the word counting?',
        answer: 'Our word counter is highly accurate and counts words, characters, and other text elements precisely according to standard counting methods.'
      },
      {
        question: 'Does it count words in different languages?',
        answer: 'Yes, our counter works with text in any language and accurately counts words regardless of the language used.'
      },
      {
        question: 'Can I count text with special formatting?',
        answer: 'Yes, the counter analyzes the plain text content and provides accurate counts regardless of formatting like bold, italic, or other styles.'
      }
    ],
    relatedTools: ['text-case-converter', 'json-formatter', 'number-to-words']
  },
  'json-formatter': {
    title: 'Free JSON Formatter – Format & Validate JSON Online 2025',
    description: 'Format, validate, and beautify JSON data instantly with our free JSON formatter. Perfect for developers and API testing.',
    keywords: ['JSON formatter', 'JSON validator', 'JSON beautifier', 'JSON prettifier', 'JSON minifier'],
    category: 'utility',
    content: `Our JSON formatter helps you format, validate, and beautify JSON data instantly. Whether you're a developer working with APIs or need to format JSON for better readability, our tool makes it simple and fast.

Key Features:
- Format and beautify JSON
- Validate JSON syntax
- Minify JSON (remove whitespace)
- Syntax highlighting
- Error detection and reporting
- Copy formatted JSON
- Download as file

How It Works:
1. Paste your JSON data in the input field
2. Click "Format JSON" to beautify
3. View formatted result with syntax highlighting
4. Copy or download the formatted JSON

Use Cases:
- API development and testing
- Data analysis and debugging
- Configuration file formatting
- Web development
- Data exchange
- Learning JSON structure

Benefits:
- Instant formatting
- Syntax validation
- Error highlighting
- Easy to use interface
- No data storage
- Free and secure

Our formatter handles large JSON files and provides clear error messages when JSON is invalid. Perfect for developers, data analysts, and anyone working with JSON data.`,
    faqs: [
      {
        question: 'Can I format invalid JSON?',
        answer: 'Our formatter will attempt to format valid JSON and will highlight syntax errors if the JSON is invalid, helping you identify and fix issues.'
      },
      {
        question: 'Is there a limit on JSON file size?',
        answer: 'While there are practical limits based on browser memory, our formatter can handle reasonably large JSON files for most use cases.'
      },
      {
        question: 'Can I minify JSON to reduce file size?',
        answer: 'Yes, our formatter can minify JSON by removing unnecessary whitespace and formatting to create compact JSON files.'
      }
    ],
    relatedTools: ['base64-converter', 'text-case-converter', 'word-counter']
  },
  'currency-converter': {
    title: 'Free Currency Converter – Real-time Exchange Rates 2025',
    description: 'Convert currencies instantly with live exchange rates. Support for USD, EUR, GBP, INR, and 100+ currencies worldwide.',
    keywords: ['currency converter', 'exchange rate', 'currency calculator', 'forex converter', 'money converter'],
    category: 'utility',
    content: `Our currency converter provides real-time exchange rates for over 100 currencies worldwide. Whether you're traveling, investing, or need to convert money for business, our tool offers accurate and up-to-date conversion rates.

Supported Currencies:
- Major currencies: USD, EUR, GBP, JPY, CAD, AUD
- Asian currencies: INR, CNY, KRW, THB, SGD
- European currencies: CHF, SEK, NOK, DKK
- And many more...

Features:
- Real-time exchange rates
- Historical rate tracking
- Easy currency selection
- Mobile-friendly interface
- No registration required
- Accurate calculations

How It Works:
1. Select your source currency
2. Choose the target currency
3. Enter the amount to convert
4. View the converted amount instantly

Use Cases:
- Travel planning
- International business
- Investment analysis
- E-commerce pricing
- Financial planning
- Educational purposes

Benefits:
- Live exchange rates
- Fast conversion
- Multiple currency support
- Reliable data sources
- Free to use
- Regular updates

Our converter uses trusted financial data sources to provide accurate exchange rates. Perfect for travelers, investors, and anyone dealing with international currencies.`,
    faqs: [
      {
        question: 'How often are exchange rates updated?',
        answer: 'Exchange rates are updated in real-time from reliable financial data sources to ensure accuracy.'
      },
      {
        question: 'Are the rates the same as banks?',
        answer: 'Our rates are market rates. Banks and exchange services may add fees or margins, so actual rates may vary.'
      },
      {
        question: 'Can I convert between any two currencies?',
        answer: 'Yes, our converter supports conversion between any of the 100+ supported currencies.'
      }
    ],
    relatedTools: ['crypto-converter', 'tip-calculator', 'percentage-calculator']
  }
}

// Add more tool configurations as needed
export const getSEOConfig = (toolId: string): SEOConfig | null => {
  return seoConfigs[toolId] || null
}
