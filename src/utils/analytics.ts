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
