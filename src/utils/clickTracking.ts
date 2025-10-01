// Google Sheets Click Tracking System
// This tracks affiliate links and tool usage

const TRACKING_URL = 'YOUR_WEB_APP_URL'; // Replace with your Google Apps Script Web App URL

interface TrackingData {
  url: string;
  text: string;
  tool: string;
  page: string;
  timestamp: string;
}

export function initClickTracking() {
  // Track affiliate links (Amazon + HeyGen)
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href) {
      // Check if it's an affiliate link
      if (link.href.includes('amzn.to') || link.href.includes('heygen.com')) {
        trackClick({
          url: link.href,
          text: link.textContent?.trim() || '',
          tool: 'affiliate',
          page: window.location.href,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    // Track tool usage
    const button = target.closest('button, a');
    if (button) {
      // Check if it has tool tracking attributes
      if (button.classList.contains('tool-btn') || button.hasAttribute('data-tool')) {
        const toolName = button.getAttribute('data-tool') || button.textContent?.trim() || 'Unknown Tool';
        trackClick({
          url: window.location.href,
          text: toolName,
          tool: toolName,
          page: window.location.href,
          timestamp: new Date().toISOString()
        });
      }
    }
  });
}

function trackClick(data: TrackingData) {
  // Prepare data for Google Sheets
  const params = new URLSearchParams({
    url: data.url,
    text: data.text,
    tool: data.tool,
    page: data.page,
    timestamp: data.timestamp
  });

  // Use sendBeacon for better reliability (doesn't block page navigation)
  if (navigator.sendBeacon) {
    const blob = new Blob([params.toString()], { type: 'application/x-www-form-urlencoded' });
    navigator.sendBeacon(TRACKING_URL, blob);
  } else {
    // Fallback to fetch with no-cors
    fetch(TRACKING_URL + '?' + params.toString(), {
      method: 'GET',
      mode: 'no-cors'
    }).catch(err => console.error('Tracking failed:', err));
  }
}
