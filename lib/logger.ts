// lib/logger.ts - Send logs from Next.js app to ELK stack
import axios from 'axios';

interface LogEntry {
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'debug';
  message: string;
  service: string;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
  region?: string;
  metadata?: Record<string, any>;
}

class Logger {
  private logstashUrl: string;
  private serviceName: string;

  constructor() {
    // Support both server-side and client-side environment variables
    const host = typeof window !== 'undefined' 
      ? process.env.NEXT_PUBLIC_LOGSTASH_HOST || 'localhost'
      : process.env.LOGSTASH_HOST || 'localhost';
    
    const port = typeof window !== 'undefined'
      ? process.env.NEXT_PUBLIC_LOGSTASH_PORT || '5000'
      : process.env.LOGSTASH_PORT || '5000';
    
    this.logstashUrl = `http://${host}:${port}`;
    this.serviceName = 'be4youdeals-nextjs';
  }

  private async sendToLogstash(logEntry: LogEntry) {
    try {
      await axios.post(this.logstashUrl, logEntry, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 5000,
      });
    } catch (error) {
      // Fallback to console if Logstash is unavailable
      console.error('Failed to send log to Logstash:', error);
      console.log('Log entry:', logEntry);
    }
  }

  private createLogEntry(
    level: LogEntry['level'],
    message: string,
    metadata?: Record<string, any>
  ): LogEntry {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      service: this.serviceName,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
      region: this.getRegion(),
      metadata,
    };
  }

  private getRegion(): string {
    if (typeof window === 'undefined') return 'unknown';
    return window.location.pathname.startsWith('/in/') ? 'IN' : 'US';
  }

  // Public logging methods
  info(message: string, metadata?: Record<string, any>) {
    const logEntry = this.createLogEntry('info', message, metadata);
    this.sendToLogstash(logEntry);
    console.log(`[INFO] ${message}`, metadata);
  }

  warn(message: string, metadata?: Record<string, any>) {
    const logEntry = this.createLogEntry('warn', message, metadata);
    this.sendToLogstash(logEntry);
    console.warn(`[WARN] ${message}`, metadata);
  }

  error(message: string, error?: Error, metadata?: Record<string, any>) {
    const logEntry = this.createLogEntry('error', message, {
      ...metadata,
      error: error ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
      } : undefined,
    });
    this.sendToLogstash(logEntry);
    console.error(`[ERROR] ${message}`, error, metadata);
  }

  debug(message: string, metadata?: Record<string, any>) {
    if (process.env.NODE_ENV === 'development') {
      const logEntry = this.createLogEntry('debug', message, metadata);
      this.sendToLogstash(logEntry);
      console.debug(`[DEBUG] ${message}`, metadata);
    }
  }

  // Business-specific logging methods
  logPageView(page: string, userId?: string) {
    this.info('Page viewed', {
      event: 'page_view',
      page,
      userId,
    });
  }

  logDealView(dealId: string, category: string, region: string, userId?: string) {
    this.info('Deal viewed', {
      event: 'deal_view',
      dealId,
      category,
      region,
      userId,
    });
  }

  logAffiliateClick(productId: string, category: string, region: string, userId?: string) {
    this.info('Affiliate link clicked', {
      event: 'affiliate_click',
      productId,
      category,
      region,
      userId,
    });
  }

  logUserAction(action: string, userId?: string, metadata?: Record<string, any>) {
    this.info('User action', {
      event: 'user_action',
      action,
      userId,
      ...metadata,
    });
  }

  logAuthEvent(event: string, method: string, userId?: string, success: boolean = true) {
    this.info('Authentication event', {
      event: 'auth',
      authEvent: event,
      method,
      userId,
      success,
    });
  }

  logApiCall(endpoint: string, method: string, statusCode: number, duration: number) {
    this.info('API call', {
      event: 'api_call',
      endpoint,
      method,
      statusCode,
      duration,
    });
  }

  logPerformance(metric: string, value: number, metadata?: Record<string, any>) {
    this.info('Performance metric', {
      event: 'performance',
      metric,
      value,
      ...metadata,
    });
  }
}

// Create singleton instance
export const logger = new Logger();

// Export for use in components
export default logger;
