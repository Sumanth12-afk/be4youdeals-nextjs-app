// lib/metrics.ts - Prometheus metrics collection
import { register, Counter, Histogram, Gauge, collectDefaultMetrics } from 'prom-client';

// Prevent multiple registrations in development
// Check if metrics are already collected by checking if any metric exists
try {
  const existingMetric = register.getSingleMetric('process_cpu_user_seconds_total');
  if (!existingMetric) {
    collectDefaultMetrics();
  }
} catch (error) {
  // If error checking, just try to collect (will skip if already exists)
  try {
    collectDefaultMetrics();
  } catch (e) {
    // Metrics already collected, ignore
  }
}

// Custom application metrics - use getOrCreate pattern to prevent duplicates
const getOrCreateMetric = <T extends Counter | Histogram | Gauge>(
  type: 'counter' | 'histogram' | 'gauge',
  name: string,
  config: any
): T => {
  const existing = register.getSingleMetric(name);
  if (existing) {
    return existing as T;
  }

  switch (type) {
    case 'counter':
      return new Counter({ name, ...config }) as T;
    case 'histogram':
      return new Histogram({ name, ...config }) as T;
    case 'gauge':
      return new Gauge({ name, ...config }) as T;
    default:
      throw new Error(`Unknown metric type: ${type}`);
  }
};

export const httpRequestDuration = getOrCreateMetric<Histogram>('histogram', 'http_request_duration_seconds', {
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
});

export const httpRequestTotal = getOrCreateMetric<Counter>('counter', 'http_requests_total', {
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

export const activeConnections = getOrCreateMetric<Gauge>('gauge', 'active_connections', {
  help: 'Number of active connections'
});

export const userSessions = getOrCreateMetric<Gauge>('gauge', 'user_sessions_active', {
  help: 'Number of active user sessions'
});

export const pageViews = getOrCreateMetric<Counter>('counter', 'page_views_total', {
  help: 'Total number of page views',
  labelNames: ['page', 'region']
});

export const errorsTotal = getOrCreateMetric<Counter>('counter', 'application_errors_total', {
  help: 'Total number of application errors',
  labelNames: ['error_type', 'component']
});

export const dealsViewed = getOrCreateMetric<Counter>('counter', 'deals_viewed_total', {
  help: 'Total number of deals viewed',
  labelNames: ['region', 'category']
});

export const affiliateClicks = getOrCreateMetric<Counter>('counter', 'affiliate_clicks_total', {
  help: 'Total number of affiliate link clicks',
  labelNames: ['region', 'product_category']
});

export const authEvents = getOrCreateMetric<Counter>('counter', 'auth_events_total', {
  help: 'Total number of authentication events',
  labelNames: ['event_type', 'method'] // login, logout, signup, google, email
});

// Performance metrics
export const pageLoadTime = getOrCreateMetric<Histogram>('histogram', 'page_load_time_seconds', {
  help: 'Page load time in seconds',
  labelNames: ['page', 'region'],
  buckets: [0.1, 0.5, 1, 2, 5, 10]
});

export const apiResponseTime = getOrCreateMetric<Histogram>('histogram', 'api_response_time_seconds', {
  help: 'API response time in seconds',
  labelNames: ['endpoint', 'method'],
  buckets: [0.01, 0.05, 0.1, 0.5, 1, 2, 5]
});

// Business metrics
export const revenue = getOrCreateMetric<Counter>('counter', 'revenue_total', {
  help: 'Total revenue from affiliate commissions',
  labelNames: ['region', 'category']
});

export const conversionRate = getOrCreateMetric<Gauge>('gauge', 'conversion_rate', {
  help: 'Conversion rate percentage',
  labelNames: ['region', 'category']
});

// Utility functions
export const recordPageView = (page: string, region: string = 'unknown') => {
  pageViews.inc({ page, region });
};

export const recordError = (errorType: string, component: string) => {
  errorsTotal.inc({ error_type: errorType, component });
};

export const recordDealView = (region: string, category: string) => {
  dealsViewed.inc({ region, category });
};

export const recordAffiliateClick = (region: string, category: string) => {
  affiliateClicks.inc({ region, category });
};

export const recordAuthEvent = (eventType: string, method: string) => {
  authEvents.inc({ event_type: eventType, method });
};

export const recordPageLoadTime = (page: string, duration: number, region: string = 'unknown') => {
  pageLoadTime.observe({ page, region }, duration);
};

export const recordApiResponseTime = (endpoint: string, method: string, duration: number) => {
  apiResponseTime.observe({ endpoint, method }, duration);
};

export const setActiveConnections = (count: number) => {
  activeConnections.set(count);
};

export const setUserSessions = (count: number) => {
  userSessions.set(count);
};

export const setConversionRate = (rate: number, region: string, category: string) => {
  conversionRate.set({ region, category }, rate);
};

export const recordRevenue = (amount: number, region: string, category: string) => {
  revenue.inc({ region, category }, amount);
};

// Get all metrics for Prometheus scraping
export const getMetrics = async () => {
  return register.metrics();
};

// Get metrics in JSON format for debugging
export const getMetricsJSON = async () => {
  return register.getMetricsAsJSON();
};

export default {
  recordPageView,
  recordError,
  recordDealView,
  recordAffiliateClick,
  recordAuthEvent,
  recordPageLoadTime,
  recordApiResponseTime,
  setActiveConnections,
  setUserSessions,
  setConversionRate,
  recordRevenue,
  getMetrics,
  getMetricsJSON
};
