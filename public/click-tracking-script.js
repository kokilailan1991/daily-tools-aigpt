// Lightweight Click Tracking Script for Google Sheets
// Add this before closing </body> tag

(function() {
  'use strict';
  
  // REPLACE WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const TRACKING_URL = 'YOUR_WEB_APP_URL';
  
  // Function to send tracking data
  function trackClick(url, text, tool) {
    const params = new URLSearchParams({
      url: url,
      text: text,
      tool: tool,
      page: window.location.href,
      timestamp: new Date().toISOString()
    });
    
    // Use sendBeacon for better reliability
    if (navigator.sendBeacon) {
      const blob = new Blob([params.toString()], { type: 'application/x-www-form-urlencoded' });
      navigator.sendBeacon(TRACKING_URL, blob);
    } else {
      // Fallback to fetch
      fetch(TRACKING_URL + '?' + params.toString(), {
        method: 'GET',
        mode: 'no-cors'
      }).catch(function(err) {
        console.error('Tracking failed:', err);
      });
    }
  }
  
  // Track all clicks
  document.addEventListener('click', function(e) {
    const target = e.target;
    const link = target.closest('a');
    
    // Track affiliate links (Amazon + HeyGen)
    if (link && link.href) {
      if (link.href.indexOf('amzn.to') !== -1 || link.href.indexOf('heygen.com') !== -1) {
        trackClick(link.href, link.textContent.trim(), 'affiliate');
      }
    }
    
    // Track tool usage
    const button = target.closest('button, a');
    if (button) {
      if (button.classList.contains('tool-btn') || button.hasAttribute('data-tool')) {
        const toolName = button.getAttribute('data-tool') || button.textContent.trim() || 'Unknown Tool';
        trackClick(window.location.href, toolName, toolName);
      }
    }
  });
  
  console.log('Click tracking initialized');
})();
