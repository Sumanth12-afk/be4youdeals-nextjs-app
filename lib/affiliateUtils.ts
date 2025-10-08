/**
 * Amazon Affiliate Link Utilities
 * 
 * Centralized utilities for managing Amazon affiliate links
 * Ensures consistent affiliate tag application across the entire website
 * Compliant with Amazon Associates Program requirements
 */

export type Region = 'IN' | 'US';

interface AffiliateConfig {
  tag: string;
  linkId: string;
  domain: string;
}

// Amazon Associates Affiliate Tags Configuration
const AFFILIATE_CONFIG: Record<Region, AffiliateConfig> = {
  IN: {
    tag: 'vibricsdeals-21',           // India affiliate tag
    linkId: '960f1a081732c6ae334bba78a8ec3949',
    domain: 'amazon.in'
  },
  US: {
    tag: 'vibricsdeals-20',           // USA affiliate tag (CORRECTED)
    linkId: '83530867bde80cbdd2939bda07686b35',
    domain: 'amazon.com'
  }
};

/**
 * Adds Amazon affiliate parameters to a product link
 * 
 * @param link - The original Amazon product link
 * @param region - The user's region ('IN' for India, 'US' for USA)
 * @returns The link with affiliate parameters appended
 * 
 * @example
 * const link = 'https://www.amazon.in/dp/B0CWTYGPH8';
 * const affiliateLink = addAffiliateParams(link, 'IN');
 * // Returns: 'https://www.amazon.in/dp/B0CWTYGPH8?tag=vibricsdeals-21&linkId=960f1a081732c6ae334bba78a8ec3949'
 */
export function addAffiliateParams(link: string, region: Region = 'US'): string {
  // Validate input
  if (!link || typeof link !== 'string') {
    console.warn('Invalid link provided to addAffiliateParams:', link);
    return link || '';
  }

  // Check if link is an Amazon link
  if (!link.includes('amazon.com') && !link.includes('amazon.in')) {
    console.warn('Non-Amazon link provided:', link);
    return link;
  }

  // Auto-detect region from link if not specified
  const isIndiaLink = link.includes('amazon.in');
  const detectedRegion: Region = isIndiaLink ? 'IN' : 'US';
  const finalRegion = region || detectedRegion;

  // Get affiliate configuration for the region
  const config = AFFILIATE_CONFIG[finalRegion];

  // Check if link already has affiliate parameters
  if (link.includes(`tag=${config.tag}`)) {
    console.log('Link already has affiliate tag:', link);
    return link;
  }

  // Add affiliate parameters
  const separator = link.includes('?') ? '&' : '?';
  const affiliateParams = `tag=${config.tag}&linkId=${config.linkId}`;
  
  return `${link}${separator}${affiliateParams}`;
}

/**
 * Validates if a link contains proper affiliate tags
 * 
 * @param link - The link to validate
 * @param region - Expected region
 * @returns True if link has correct affiliate tag, false otherwise
 */
export function hasAffiliateTag(link: string, region: Region = 'US'): boolean {
  if (!link) return false;
  
  const config = AFFILIATE_CONFIG[region];
  return link.includes(`tag=${config.tag}`);
}

/**
 * Extracts the Amazon ASIN from a product link
 * 
 * @param link - Amazon product link
 * @returns ASIN string or null if not found
 */
export function extractASIN(link: string): string | null {
  if (!link) return null;
  
  // Match patterns: /dp/ASIN or /gp/product/ASIN
  const patterns = [
    /\/dp\/([A-Z0-9]{10})/,
    /\/gp\/product\/([A-Z0-9]{10})/,
    /\/product\/([A-Z0-9]{10})/
  ];
  
  for (const pattern of patterns) {
    const match = link.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
}

/**
 * Builds a clean Amazon product link with affiliate parameters
 * 
 * @param asin - Product ASIN
 * @param region - Target region
 * @returns Clean Amazon link with affiliate parameters
 */
export function buildAffiliateLink(asin: string, region: Region = 'US'): string {
  if (!asin) {
    throw new Error('ASIN is required to build affiliate link');
  }
  
  const config = AFFILIATE_CONFIG[region];
  return `https://www.${config.domain}/dp/${asin}?tag=${config.tag}&linkId=${config.linkId}`;
}

/**
 * Gets the affiliate disclosure text required by Amazon Associates Program
 * 
 * @param format - Format of disclosure ('short' or 'long')
 * @returns Disclosure text
 */
export function getAffiliateDisclosure(format: 'short' | 'long' = 'short'): string {
  if (format === 'short') {
    return 'As an Amazon Associate we earn from qualifying purchases';
  }
  
  return 'As an Amazon Associate we earn from qualifying purchases. When you click on our Amazon links and make a purchase, we may receive a small commission at no extra cost to you.';
}

/**
 * Gets price disclaimer text for Amazon Associates compliance
 * 
 * @returns Price disclaimer text
 */
export function getPriceDisclaimer(): string {
  return 'Price and availability subject to change. Check Amazon for current pricing.';
}

/**
 * Logs an affiliate click (for analytics)
 * 
 * @param asin - Product ASIN
 * @param region - Region
 * @param category - Product category
 */
export function logAffiliateClick(asin: string, region: Region, category?: string): void {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('🔗 Affiliate Click:', {
      asin,
      region,
      category,
      timestamp: new Date().toISOString()
    });
  }
  
  // In production, you can send this to your analytics service
  // Example: analytics.track('affiliate_click', { asin, region, category });
}

/**
 * Validates Amazon Associates compliance for a link
 * 
 * @param link - Link to validate
 * @param region - Expected region
 * @returns Validation result with any issues
 */
export function validateCompliance(link: string, region: Region): {
  isValid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  
  if (!link) {
    issues.push('Link is empty');
    return { isValid: false, issues };
  }
  
  if (!link.includes('amazon.com') && !link.includes('amazon.in')) {
    issues.push('Not an Amazon link');
    return { isValid: false, issues };
  }
  
  const config = AFFILIATE_CONFIG[region];
  
  if (!link.includes(`tag=${config.tag}`)) {
    issues.push(`Missing affiliate tag: ${config.tag}`);
  }
  
  if (!link.includes('linkId=')) {
    issues.push('Missing linkId parameter');
  }
  
  const asin = extractASIN(link);
  if (!asin) {
    issues.push('Could not extract valid ASIN');
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
}

export default {
  addAffiliateParams,
  hasAffiliateTag,
  extractASIN,
  buildAffiliateLink,
  getAffiliateDisclosure,
  getPriceDisclaimer,
  logAffiliateClick,
  validateCompliance
};

