// lib/monitoring.ts - Enhanced monitoring with Prometheus + Grafana
import metrics from './metrics';

interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  userId?: string;
  userAgent?: string;
  url?: string;
  timestamp?: string;
  line?: number;
  column?: number;
  type?: string;
}

class MonitoringService {
  private isInitialized = false;
  private startTime = Date.now();

  init() {
    if (typeof window === 'undefined' || this.isInitialized) return;

    try {
      // Initialize client-side monitoring
      this.setupPerformanceObserver();
      this.setupErrorHandling();
      this.trackPageLoad();
      
      this.isInitialized = true;
      console.log('🔍 Monitoring service initialized with Prometheus metrics');
    } catch (error) {
      console.error('Failed to initialize monitoring:', error);
    }
  }

  private setupPerformanceObserver() {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return;

    // Observe navigation timing
    const navObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          const loadTime = (navEntry.loadEventEnd - navEntry.loadEventStart) / 1000;
          const page = window.location.pathname;
          const region = this.getRegionFromURL();
          
          metrics.recordPageLoadTime(page, loadTime, region);
        }
      });
    });

    navObserver.observe({ entryTypes: ['navigation'] });

    // Observe resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.duration > 1000) { // Log slow resources (>1s)
            console.warn('Slow resource detected:', {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              size: resourceEntry.transferSize
            });
          }
        }
      });
    });

    resourceObserver.observe({ entryTypes: ['resource'] });
  }

  private setupErrorHandling() {
    if (typeof window === 'undefined') return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.captureError(event.error || new Error(event.message), {
        url: event.filename,
        line: event.lineno,
        column: event.colno,
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.captureError(new Error(event.reason), {
        type: 'unhandledrejection',
      });
    });
  }

  private trackPageLoad() {
    if (typeof window === 'undefined') return;

    const page = window.location.pathname;
    const region = this.getRegionFromURL();
    
    metrics.recordPageView(page, region);
    
    // Track page load performance
    window.addEventListener('load', () => {
      const loadTime = (Date.now() - this.startTime) / 1000;
      metrics.recordPageLoadTime(page, loadTime, region);
    });
  }

  private getRegionFromURL(): string {
    if (typeof window === 'undefined') return 'unknown';
    return window.location.pathname.startsWith('/in/') ? 'IN' : 'US';
  }

  captureError(error: Error, errorInfo?: Partial<ErrorInfo>) {
    const errorType = error.name || 'UnknownError';
    const component = errorInfo?.errorBoundary || 'Global';
    
    // Record error in Prometheus
    metrics.recordError(errorType, component);
    
    // Enhanced console logging with context
    console.error('🚨 Error captured:', {
      message: error.message,
      stack: error.stack,
      type: errorType,
      component,
      url: errorInfo?.url || (typeof window !== 'undefined' ? window.location.href : 'unknown'),
      userAgent: errorInfo?.userAgent || (typeof window !== 'undefined' ? navigator.userAgent : 'unknown'),
      timestamp: new Date().toISOString(),
      ...errorInfo
    });

    // Send to external service if needed (e.g., for critical errors)
    if (this.isCriticalError(error)) {
      this.sendToExternalService(error, errorInfo);
    }
  }

  private isCriticalError(error: Error): boolean {
    const criticalPatterns = [
      /network/i,
      /authentication/i,
      /payment/i,
      /database/i,
      /memory/i
    ];
    
    return criticalPatterns.some(pattern => 
      pattern.test(error.message) || pattern.test(error.stack || '')
    );
  }

  private sendToExternalService(error: Error, errorInfo?: Partial<ErrorInfo>) {
    // You can integrate with external services here
    // For example: Slack webhook, email, or third-party error tracking
    console.log('📧 Critical error would be sent to external service:', {
      error: error.message,
      stack: error.stack,
      ...errorInfo
    });
  }

  trackEvent(eventName: string, properties?: Record<string, any>) {
    console.log(`📊 Event: ${eventName}`, {
      ...properties,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    });

    // Track specific business events
    switch (eventName) {
      case 'deal_viewed':
        metrics.recordDealView(properties?.region || 'unknown', properties?.category || 'unknown');
        break;
      case 'affiliate_click':
        metrics.recordAffiliateClick(properties?.region || 'unknown', properties?.category || 'unknown');
        break;
      case 'user_login':
        metrics.recordAuthEvent('login', properties?.method || 'unknown');
        break;
      case 'user_signup':
        metrics.recordAuthEvent('signup', properties?.method || 'unknown');
        break;
      case 'user_logout':
        metrics.recordAuthEvent('logout', 'unknown');
        break;
    }
  }

  // Performance monitoring
  startTiming(label: string) {
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark(`${label}-start`);
    }
  }

  endTiming(label: string) {
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark(`${label}-end`);
      performance.measure(label, `${label}-start`, `${label}-end`);
      
      const measure = performance.getEntriesByName(label)[0];
      if (measure) {
        this.trackEvent('performance_timing', {
          label,
          duration: measure.duration,
        });
      }
    }
  }

  // Business metrics
  recordConversion(region: string, category: string, value: number) {
    metrics.setConversionRate(value, region, category);
  }

  recordRevenue(amount: number, region: string, category: string) {
    metrics.recordRevenue(amount, region, category);
  }

  // Health check
  getHealthStatus() {
    return {
      status: 'healthy',
      uptime: Date.now() - this.startTime,
      timestamp: new Date().toISOString(),
      metrics: {
        initialized: this.isInitialized,
        pageViews: 'tracked',
        errors: 'tracked',
        performance: 'monitored'
      }
    };
  }
}

// Create singleton instance
export const monitoring = new MonitoringService();

// Initialize on client side
if (typeof window !== 'undefined') {
  monitoring.init();
}

export default monitoring;