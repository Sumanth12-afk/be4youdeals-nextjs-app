import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Region } from '../lib/locationUtils';

interface RegionContextType {
  region: Region;
  setRegion: (region: Region) => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

interface RegionProviderProps {
  children: ReactNode;
}

export function RegionProvider({ children }: RegionProviderProps) {
  const [region, setRegionState] = useState<Region>('US'); // Default to US

  useEffect(() => {
    // Try to get region from localStorage first
    const savedRegion = localStorage.getItem('userRegion') as Region;
    if (savedRegion && (savedRegion === 'US' || savedRegion === 'IN')) {
      setRegionState(savedRegion);
      return;
    }

    // Fallback to IP-based detection (example, replace with actual API call)
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country_code === 'IN') {
          setRegionState('IN');
          localStorage.setItem('userRegion', 'IN');
        } else {
          setRegionState('US');
          localStorage.setItem('userRegion', 'US');
        }
      })
      .catch(() => {
        console.error('Failed to detect location, defaulting to US');
        setRegionState('US');
        localStorage.setItem('userRegion', 'US');
      });
  }, []);

  const setRegion = (newRegion: Region) => {
    setRegionState(newRegion);
    localStorage.setItem('userRegion', newRegion);
  };

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
}
