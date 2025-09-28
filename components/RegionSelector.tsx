import { useState } from 'react';
import { Region } from '../lib/locationUtils';

interface RegionSelectorProps {
  currentRegion: Region;
  onRegionChange: (region: Region) => void;
  className?: string;
}

export default function RegionSelector({ currentRegion, onRegionChange, className = '' }: RegionSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const regions = [
    { code: 'US', name: 'United States', flag: '🇺🇸', currency: 'USD' },
    { code: 'IN', name: 'India', flag: '🇮🇳', currency: 'INR' }
  ];

  const currentRegionData = regions.find(r => r.code === currentRegion) || regions[0];

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      >
        <span className="text-lg">{currentRegionData.flag}</span>
        <span className="text-sm font-medium">{currentRegionData.code}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-20">
            <div className="py-2">
              {regions.map((region) => (
                <button
                  key={region.code}
                  onClick={() => {
                    onRegionChange(region.code as Region);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-white/20 transition-colors duration-200 ${
                    currentRegion === region.code ? 'bg-white/10' : ''
                  }`}
                >
                  <span className="text-lg">{region.flag}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {region.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {region.currency}
                    </div>
                  </div>
                  {currentRegion === region.code && (
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
