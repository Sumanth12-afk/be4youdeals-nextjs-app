// Location detection utilities

export type Region = 'US' | 'IN' | 'UNKNOWN';

export interface LocationData {
  region: Region;
  country: string;
  countryCode: string;
  city?: string;
  isDetected: boolean;
}

// IP-based location detection using a free API
export async function detectLocationByIP(): Promise<LocationData> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    const countryCode = data.country_code?.toUpperCase();
    let region: Region = 'UNKNOWN';
    
    if (countryCode === 'US') {
      region = 'US';
    } else if (countryCode === 'IN') {
      region = 'IN';
    }
    
    return {
      region,
      country: data.country || 'Unknown',
      countryCode: countryCode || 'UNKNOWN',
      city: data.city,
      isDetected: true
    };
  } catch (error) {
    console.error('IP location detection failed:', error);
    return {
      region: 'UNKNOWN',
      country: 'Unknown',
      countryCode: 'UNKNOWN',
      isDetected: false
    };
  }
}

// Browser geolocation API (requires user permission)
export async function detectLocationByGeolocation(): Promise<LocationData> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({
        region: 'UNKNOWN',
        country: 'Unknown',
        countryCode: 'UNKNOWN',
        isDetected: false
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          // Use reverse geocoding to get country from coordinates
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
          );
          const data = await response.json();
          
          const countryCode = data.countryCode?.toUpperCase();
          let region: Region = 'UNKNOWN';
          
          if (countryCode === 'US') {
            region = 'US';
          } else if (countryCode === 'IN') {
            region = 'IN';
          }
          
          resolve({
            region,
            country: data.countryName || 'Unknown',
            countryCode: countryCode || 'UNKNOWN',
            city: data.city,
            isDetected: true
          });
        } catch (error) {
          console.error('Geolocation reverse lookup failed:', error);
          resolve({
            region: 'UNKNOWN',
            country: 'Unknown',
            countryCode: 'UNKNOWN',
            isDetected: false
          });
        }
      },
      (error) => {
        console.error('Geolocation failed:', error);
        resolve({
          region: 'UNKNOWN',
          country: 'Unknown',
          countryCode: 'UNKNOWN',
          isDetected: false
        });
      },
      {
        timeout: 10000,
        enableHighAccuracy: false,
        maximumAge: 300000 // 5 minutes
      }
    );
  });
}

// Combined location detection (IP first, then geolocation as fallback)
export async function detectUserLocation(): Promise<LocationData> {
  // Try IP-based detection first (faster, no permission required)
  const ipLocation = await detectLocationByIP();
  
  if (ipLocation.isDetected && ipLocation.region !== 'UNKNOWN') {
    return ipLocation;
  }
  
  // Fallback to geolocation if IP detection failed or returned unknown
  const geoLocation = await detectLocationByGeolocation();
  
  if (geoLocation.isDetected && geoLocation.region !== 'UNKNOWN') {
    return geoLocation;
  }
  
  // If both failed, return unknown
  return {
    region: 'UNKNOWN',
    country: 'Unknown',
    countryCode: 'UNKNOWN',
    isDetected: false
  };
}

// Get user's preferred region from localStorage/cookies
export function getStoredRegion(): Region | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem('userRegion');
    if (stored === 'US' || stored === 'IN') {
      return stored as Region;
    }
  } catch (error) {
    console.error('Failed to read stored region:', error);
  }
  
  return null;
}

// Store user's preferred region
export function storeRegion(region: Region): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('userRegion', region);
  } catch (error) {
    console.error('Failed to store region:', error);
  }
}

// Get the best region (stored preference or detected)
export async function getBestRegion(): Promise<Region> {
  // Check stored preference first
  const storedRegion = getStoredRegion();
  if (storedRegion) {
    return storedRegion;
  }
  
  // Detect location if no stored preference
  const location = await detectUserLocation();
  return location.region;
}

// Get region-specific URL path
export function getRegionPath(region: Region, path: string = ''): string {
  if (region === 'IN') {
    return `/in${path}`;
  } else if (region === 'US') {
    return `/us${path}`;
  } else {
    // Default to US for unknown regions
    return `/us${path}`;
  }
}

// Check if current path is region-specific
export function isRegionPath(path: string): boolean {
  return path.startsWith('/in/') || path.startsWith('/us/');
}

// Extract region from path
export function getRegionFromPath(path: string): Region | null {
  if (path.startsWith('/in/')) return 'IN';
  if (path.startsWith('/us/')) return 'US';
  return null;
}
