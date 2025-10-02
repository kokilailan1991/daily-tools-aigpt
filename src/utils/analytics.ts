// Google Analytics 4 implementation
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initAnalytics = (measurementId: string) => {
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId);
};

// Track tool usage
export const trackToolUsage = (toolId: string, toolName: string, action: string = 'view') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'tool_interaction', {
      tool_id: toolId,
      tool_name: toolName,
      action: action,
      event_category: 'Tools',
      event_label: `${toolName} - ${action}`,
      value: 1
    });
  }
};

// Track tool calculations
export const trackToolCalculation = (toolId: string, toolName: string, resultType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'tool_calculation', {
      tool_id: toolId,
      tool_name: toolName,
      result_type: resultType,
      event_category: 'Calculations',
      event_label: `${toolName} - ${resultType}`,
      value: 1
    });
  }
};

// Track page views
export const trackPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
      event_category: 'Navigation'
    });
  }
};

// Track user engagement
export const trackEngagement = (action: string, details?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'user_engagement', {
      action: action,
      details: JSON.stringify(details),
      event_category: 'Engagement',
      value: 1
    });
  }
};

// GA4 Event Names for Calculators
export const GA4_EVENTS = {
  BMI_CALCULATED: 'bmi_calculated',
  CALORIE_CALCULATED: 'calorie_calculated',
  BMR_CALCULATED: 'bmr_calculated',
  IDEAL_WEIGHT_CALCULATED: 'ideal_weight_calculated',
  BODY_FAT_CALCULATED: 'body_fat_calculated',
  WATER_INTAKE_CALCULATED: 'water_intake_calculated',
  PROTEIN_INTAKE_CALCULATED: 'protein_intake_calculated',
  HEART_RATE_ZONE_CALCULATED: 'heart_rate_zone_calculated',
  PREGNANCY_DUE_DATE_CALCULATED: 'pregnancy_due_date_calculated',
  OVULATION_CALCULATED: 'ovulation_calculated',
  LIFE_EXPECTANCY_CALCULATED: 'life_expectancy_calculated',
  EMI_CALCULATED: 'emi_calculated',
  SIP_CALCULATED: 'sip_calculated',
  AGE_CALCULATED: 'age_calculated',
  COMPOUND_INTEREST_CALCULATED: 'compound_interest_calculated',
  PERCENTAGE_CALCULATED: 'percentage_calculated',
  CURRENCY_CONVERTED: 'currency_converted',
  TIP_CALCULATED: 'tip_calculated',
  UNIT_CONVERTED: 'unit_converted',
  QR_GENERATED: 'qr_generated',
  PASSWORD_GENERATED: 'password_generated',
  BASE64_CONVERTED: 'base64_converted',
  TEXT_CASE_CONVERTED: 'text_case_converted',
  WORD_COUNTED: 'word_counted',
  JSON_FORMATTED: 'json_formatted',
  NUMBER_TO_WORDS_CONVERTED: 'number_to_words_converted',
  ROMAN_NUMERAL_CONVERTED: 'roman_numeral_converted',
  DATE_DIFFERENCE_CALCULATED: 'date_difference_calculated',
  TIMEZONE_CONVERTED: 'timezone_converted',
  STOPWATCH_USED: 'stopwatch_used',
  DAILY_PLANNER_USED: 'daily_planner_used',
  RISK_CALCULATED: 'risk_calculated',
  SWP_CALCULATED: 'swp_calculated',
  GST_CALCULATED: 'gst_calculated',
  INCOME_TAX_CALCULATED: 'income_tax_calculated',
  CRYPTO_CONVERTED: 'crypto_converted',
  PDF_MERGED: 'pdf_merged',
  PDF_TO_WORD_CONVERTED: 'pdf_to_word_converted',
  IMAGE_CONVERTED: 'image_converted',
  IMAGE_RESIZED: 'image_resized',
  CGPA_CONVERTED: 'cgpa_converted',
  EQUATION_SOLVED: 'equation_solved',
  WEATHER_LOOKED_UP: 'weather_looked_up',
  PINCODE_LOOKED_UP: 'pincode_looked_up',
  IFSC_LOOKED_UP: 'ifsc_looked_up',
  FUEL_PRICE_CHECKED: 'fuel_price_checked',
  SIMPLE_INTEREST_CALCULATED: 'simple_interest_calculated',
  AGE_IN_DAYS_CALCULATED: 'age_in_days_calculated',
  LOVE_CALCULATED: 'love_calculated',
  JOKE_GENERATED: 'joke_generated',
  QUOTE_GENERATED: 'quote_generated',
  MEME_TEXT_GENERATED: 'meme_text_generated',
} as const;

// Event Categories
export const GA4_CATEGORIES = {
  HEALTH_TOOLS: 'Health Tools',
  FINANCE_TOOLS: 'Finance Tools',
  UTILITY_TOOLS: 'Utility Tools',
  TEXT_TOOLS: 'Text Tools',
  TIME_TOOLS: 'Time Tools',
  CONVERSION_TOOLS: 'Conversion Tools',
  FUN_TOOLS: 'Fun Tools',
} as const;

// Tool to Event Mapping
export const TOOL_EVENT_MAPPING: Record<string, { event: string; category: string }> = {
  'bmi-calculator': { event: GA4_EVENTS.BMI_CALCULATED, category: GA4_CATEGORIES.HEALTH_TOOLS },
  'calorie-calculator': { event: GA4_EVENTS.CALORIE_CALCULATED, category: GA4_CATEGORIES.HEALTH_TOOLS },
  'bmr-calculator': { event: GA4_EVENTS.BMR_CALCULATED, category: GA4_CATEGORIES.HEALTH_TOOLS },
  'ideal-weight-calculator': { event: GA4_EVENTS.IDEAL_WEIGHT_CALCULATED, category: GA4_CATEGORIES.HEALTH_TOOLS },
  'age-calculator': { event: GA4_EVENTS.AGE_CALCULATED, category: GA4_CATEGORIES.HEALTH_TOOLS },
  'emi-calculator': { event: GA4_EVENTS.EMI_CALCULATED, category: GA4_CATEGORIES.FINANCE_TOOLS },
  'sip-calculator': { event: GA4_EVENTS.SIP_CALCULATED, category: GA4_CATEGORIES.FINANCE_TOOLS },
  'compound-interest-calculator': { event: GA4_EVENTS.COMPOUND_INTEREST_CALCULATED, category: GA4_CATEGORIES.FINANCE_TOOLS },
  'percentage-calculator': { event: GA4_EVENTS.PERCENTAGE_CALCULATED, category: GA4_CATEGORIES.UTILITY_TOOLS },
  'currency-converter': { event: GA4_EVENTS.CURRENCY_CONVERTED, category: GA4_CATEGORIES.CONVERSION_TOOLS },
  'tip-calculator': { event: GA4_EVENTS.TIP_CALCULATED, category: GA4_CATEGORIES.UTILITY_TOOLS },
  'unit-converter': { event: GA4_EVENTS.UNIT_CONVERTED, category: GA4_CATEGORIES.CONVERSION_TOOLS },
  'qr-code-generator': { event: GA4_EVENTS.QR_GENERATED, category: GA4_CATEGORIES.UTILITY_TOOLS },
  'password-generator': { event: GA4_EVENTS.PASSWORD_GENERATED, category: GA4_CATEGORIES.UTILITY_TOOLS },
  'base64-converter': { event: GA4_EVENTS.BASE64_CONVERTED, category: GA4_CATEGORIES.CONVERSION_TOOLS },
  'text-case-converter': { event: GA4_EVENTS.TEXT_CASE_CONVERTED, category: GA4_CATEGORIES.TEXT_TOOLS },
  'word-counter': { event: GA4_EVENTS.WORD_COUNTED, category: GA4_CATEGORIES.TEXT_TOOLS },
  'json-formatter': { event: GA4_EVENTS.JSON_FORMATTED, category: GA4_CATEGORIES.TEXT_TOOLS },
  'number-to-words': { event: GA4_EVENTS.NUMBER_TO_WORDS_CONVERTED, category: GA4_CATEGORIES.TEXT_TOOLS },
  'roman-numeral-converter': { event: GA4_EVENTS.ROMAN_NUMERAL_CONVERTED, category: GA4_CATEGORIES.CONVERSION_TOOLS },
  'date-difference-calculator': { event: GA4_EVENTS.DATE_DIFFERENCE_CALCULATED, category: GA4_CATEGORIES.TIME_TOOLS },
  'timezone-converter': { event: GA4_EVENTS.TIMEZONE_CONVERTED, category: GA4_CATEGORIES.TIME_TOOLS },
  'stopwatch-timer': { event: GA4_EVENTS.STOPWATCH_USED, category: GA4_CATEGORIES.TIME_TOOLS },
  'daily-planner': { event: GA4_EVENTS.DAILY_PLANNER_USED, category: GA4_CATEGORIES.TIME_TOOLS },
  'risk-calculator': { event: GA4_EVENTS.RISK_CALCULATED, category: GA4_CATEGORIES.FINANCE_TOOLS },
  'swp-calculator': { event: GA4_EVENTS.SWP_CALCULATED, category: GA4_CATEGORIES.FINANCE_TOOLS },
  'gst-calculator': { event: GA4_EVENTS.GST_CALCULATED, category: GA4_CATEGORIES.FINANCE_TOOLS },
  'income-tax-estimator': { event: GA4_EVENTS.INCOME_TAX_CALCULATED, category: GA4_CATEGORIES.FINANCE_TOOLS },
  'crypto-converter': { event: GA4_EVENTS.CRYPTO_CONVERTED, category: GA4_CATEGORIES.CONVERSION_TOOLS },
  'pdf-merger': { event: GA4_EVENTS.PDF_MERGED, category: GA4_CATEGORIES.UTILITY_TOOLS },
  'pdf-to-word': { event: GA4_EVENTS.PDF_TO_WORD_CONVERTED, category: GA4_CATEGORIES.UTILITY_TOOLS },
  'image-converter': { event: GA4_EVENTS.IMAGE_CONVERTED, category: GA4_CATEGORIES.CONVERSION_TOOLS },
  'image-resizer': { event: GA4_EVENTS.IMAGE_RESIZED, category: GA4_CATEGORIES.CONVERSION_TOOLS },
  'cgpa-converter': { event: GA4_EVENTS.CGPA_CONVERTED, category: GA4_CATEGORIES.UTILITY_TOOLS },
  'equation-solver': { event: GA4_EVENTS.EQUATION_SOLVED, category: GA4_CATEGORIES.UTILITY_TOOLS },
  'weather-lookup': { event: GA4_EVENTS.WEATHER_LOOKED_UP, category: GA4_CATEGORIES.UTILITY_TOOLS },
  'pincode-lookup': { event: GA4_EVENTS.PINCODE_LOOKED_UP, category: GA4_CATEGORIES.UTILITY_TOOLS },
  'ifsc-finder': { event: GA4_EVENTS.IFSC_LOOKED_UP, category: GA4_CATEGORIES.UTILITY_TOOLS },
  'fuel-price-checker': { event: GA4_EVENTS.FUEL_PRICE_CHECKED, category: GA4_CATEGORIES.UTILITY_TOOLS },
  'simple-interest-calculator': { event: GA4_EVENTS.SIMPLE_INTEREST_CALCULATED, category: GA4_CATEGORIES.FINANCE_TOOLS },
  'age-in-days-calculator': { event: GA4_EVENTS.AGE_IN_DAYS_CALCULATED, category: GA4_CATEGORIES.TIME_TOOLS },
  'love-calculator': { event: GA4_EVENTS.LOVE_CALCULATED, category: GA4_CATEGORIES.FUN_TOOLS },
  'random-joke-generator': { event: GA4_EVENTS.JOKE_GENERATED, category: GA4_CATEGORIES.FUN_TOOLS },
  'quote-generator': { event: GA4_EVENTS.QUOTE_GENERATED, category: GA4_CATEGORIES.FUN_TOOLS },
  'meme-text-generator': { event: GA4_EVENTS.MEME_TEXT_GENERATED, category: GA4_CATEGORIES.FUN_TOOLS },
};

// GA4 Tracking Functions
export const trackCalculatorEvent = (
  toolId: string,
  result: number | string,
  additionalParams?: Record<string, any>
) => {
  const mapping = TOOL_EVENT_MAPPING[toolId];
  if (!mapping || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  const eventParams = {
    event_category: mapping.category,
    event_label: toolId,
    value: typeof result === 'number' ? result : 1,
    ...additionalParams,
  };

  window.gtag('event', mapping.event, eventParams);
  console.log(`GA4 Event Tracked: ${mapping.event}`, eventParams);
};

export const trackToolPageView = (toolId: string, toolName: string) => {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_title: `${toolName} - Daily Tools by AIGPT`,
    page_location: window.location.href,
    content_group1: 'Tools',
    custom_map: {
      dimension1: toolId,
    },
  });

  console.log(`GA4 Page View Tracked: ${toolName}`);
};

export const trackUserEngagement = (toolId: string, action: string) => {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', 'user_engagement', {
    event_category: 'User Interaction',
    event_label: `${toolId}_${action}`,
    engagement_time_msec: Date.now(),
  });

  console.log(`GA4 User Engagement Tracked: ${toolId} - ${action}`);
};

// Initialize GA4 tracking
export const initializeGA4Tracking = () => {
  if (typeof window === 'undefined') {
    return;
  }

  // Add event listeners for calculator buttons
  const addCalculatorEventListeners = () => {
    // BMI Calculator
    const bmiCalcBtn = document.getElementById('bmiCalcBtn');
    if (bmiCalcBtn) {
      bmiCalcBtn.addEventListener('click', () => {
        trackCalculatorEvent('bmi-calculator', 1);
      });
    }

    // EMI Calculator
    const emiCalcBtn = document.getElementById('emiCalcBtn');
    if (emiCalcBtn) {
      emiCalcBtn.addEventListener('click', () => {
        trackCalculatorEvent('emi-calculator', 1);
      });
    }

    // SIP Calculator
    const sipCalcBtn = document.getElementById('sipCalcBtn');
    if (sipCalcBtn) {
      sipCalcBtn.addEventListener('click', () => {
        trackCalculatorEvent('sip-calculator', 1);
      });
    }

    // Age Calculator
    const ageCalcBtn = document.getElementById('ageCalcBtn');
    if (ageCalcBtn) {
      ageCalcBtn.addEventListener('click', () => {
        trackCalculatorEvent('age-calculator', 1);
      });
    }

    // Calorie Calculator
    const calorieCalcBtn = document.getElementById('calorieCalcBtn');
    if (calorieCalcBtn) {
      calorieCalcBtn.addEventListener('click', () => {
        trackCalculatorEvent('calorie-calculator', 1);
      });
    }

    // BMR Calculator
    const bmrCalcBtn = document.getElementById('bmrCalcBtn');
    if (bmrCalcBtn) {
      bmrCalcBtn.addEventListener('click', () => {
        trackCalculatorEvent('bmr-calculator', 1);
      });
    }

    // Add more calculator button listeners as needed
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCalculatorEventListeners);
  } else {
    addCalculatorEventListeners();
  }
};

// Export all analytics functions
export const analytics = {
  initAnalytics,
  trackToolUsage,
  trackToolCalculation,
  trackPageView,
  trackEngagement,
  trackCalculatorEvent,
  trackToolPageView,
  trackUserEngagement,
  initializeGA4Tracking,
  GA4_EVENTS,
  GA4_CATEGORIES,
  TOOL_EVENT_MAPPING,
};