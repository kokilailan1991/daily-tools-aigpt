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
  }
}

// Add more tool configurations as needed
export const getSEOConfig = (toolId: string): SEOConfig | null => {
  return seoConfigs[toolId] || null
}
