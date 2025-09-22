// Simple custom analytics for tracking tool usage
interface AnalyticsEvent {
  timestamp: number;
  toolId: string;
  toolName: string;
  action: string;
  userId?: string;
  sessionId: string;
  userAgent: string;
  referrer: string;
}

class SimpleAnalytics {
  private sessionId: string;
  private events: AnalyticsEvent[] = [];
  constructor() {
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private getUserId(): string {
    let userId = localStorage.getItem('user_id');
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('user_id', userId);
    }
    return userId;
  }

  // Track tool usage
  trackToolUsage(toolId: string, toolName: string, action: string = 'view') {
    const event: AnalyticsEvent = {
      timestamp: Date.now(),
      toolId,
      toolName,
      action,
      userId: this.getUserId(),
      sessionId: this.sessionId,
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };

    this.events.push(event);
    this.sendEvent(event);
  }

  // Track tool calculations
  trackCalculation(toolId: string, toolName: string, calculationType: string) {
    const event: AnalyticsEvent = {
      timestamp: Date.now(),
      toolId,
      toolName,
      action: `calculation_${calculationType}`,
      userId: this.getUserId(),
      sessionId: this.sessionId,
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };

    this.events.push(event);
    this.sendEvent(event);
  }

  // Track page views
  trackPageView(pageName: string) {
    const event: AnalyticsEvent = {
      timestamp: Date.now(),
      toolId: 'page',
      toolName: pageName,
      action: 'page_view',
      userId: this.getUserId(),
      sessionId: this.sessionId,
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };

    this.events.push(event);
    this.sendEvent(event);
  }

  // Send event to server
  private async sendEvent(event: AnalyticsEvent) {
    try {
      // In a real implementation, you'd send this to your backend
      console.log('Analytics Event:', event);
      
      // For now, just store in localStorage for demo
      const storedEvents = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      storedEvents.push(event);
      localStorage.setItem('analytics_events', JSON.stringify(storedEvents.slice(-100))); // Keep last 100 events
      
      // In production, you'd send to your API:
      // await fetch(this.apiEndpoint, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(event)
      // });
    } catch (error) {
      console.error('Failed to send analytics event:', error);
    }
  }

  // Get analytics data
  getAnalyticsData() {
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    return {
      totalEvents: events.length,
      uniqueUsers: new Set(events.map((e: AnalyticsEvent) => e.userId)).size,
      toolUsage: this.aggregateToolUsage(events),
      recentEvents: events.slice(-10)
    };
  }

  private aggregateToolUsage(events: AnalyticsEvent[]) {
    const usage: { [key: string]: number } = {};
    events.forEach(event => {
      if (event.toolId !== 'page') {
        usage[event.toolName] = (usage[event.toolName] || 0) + 1;
      }
    });
    return usage;
  }
}

export const analytics = new SimpleAnalytics();
