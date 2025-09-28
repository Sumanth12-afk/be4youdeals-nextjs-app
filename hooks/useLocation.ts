import { useState, useEffect } from 'react';
import { Region, LocationData, detectUserLocation, getStoredRegion, storeRegion } from '../lib/locationUtils';

export interface UseLocationReturn {
  region: Region;
  locationData: LocationData | null;
  isLoading: boolean;
  error: string | null;
  setRegion: (region: Region) => void;
  refreshLocation: () => Promise<void>;
}

export function useLocation(): UseLocationReturn {
  const [region, setRegionState] = useState<Region>('UNKNOWN');
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Set region and store preference
  const setRegion = (newRegion: Region) => {
    setRegionState(newRegion);
    storeRegion(newRegion);
  };

  // Refresh location detection
  const refreshLocation = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const location = await detectUserLocation();
      setLocationData(location);
      setRegionState(location.region);
      
      // Store the detected region if it's valid
      if (location.region !== 'UNKNOWN') {
        storeRegion(location.region);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Location detection failed');
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize location on mount
  useEffect(() => {
    const initializeLocation = async () => {
      setIsLoading(true);
      
      try {
        // Check stored preference first
        const storedRegion = getStoredRegion();
        if (storedRegion) {
          setRegionState(storedRegion);
          setIsLoading(false);
          return;
        }
        
        // Detect location if no stored preference
        const location = await detectUserLocation();
        setLocationData(location);
        setRegionState(location.region);
        
        // Store the detected region if it's valid
        if (location.region !== 'UNKNOWN') {
          storeRegion(location.region);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Location detection failed');
        setRegionState('UNKNOWN');
      } finally {
        setIsLoading(false);
      }
    };

    initializeLocation();
  }, []);

  return {
    region,
    locationData,
    isLoading,
    error,
    setRegion,
    refreshLocation
  };
}
