import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { Region } from '../lib/locationUtils';

interface RegionChangePopupProps {
  isOpen: boolean;
  onClose: () => void;
  currentRegion: Region;
  onRegionChange: (region: Region) => void;
}

export default function RegionChangePopup({ 
  isOpen, 
  onClose, 
  currentRegion, 
  onRegionChange 
}: RegionChangePopupProps) {
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = useState<Region>(currentRegion);

  useEffect(() => {
    setSelectedRegion(currentRegion);
  }, [currentRegion]);

  const regions = [
    {
      id: 'US' as Region,
      name: 'United States',
      flag: '🇺🇸',
      currency: '$',
      description: 'US products and pricing',
      benefits: ['Fast shipping', 'US warranty', 'Local support']
    },
    {
      id: 'IN' as Region,
      name: 'India',
      flag: '🇮🇳',
      currency: '₹',
      description: 'India products and pricing',
      benefits: ['Local shipping', 'India warranty', 'Regional support']
    }
  ];

  const handleRegionChange = () => {
    if (selectedRegion !== currentRegion) {
      onRegionChange(selectedRegion);
      onClose();
      
      // Show success message
      toast.success(
        `Region changed to ${selectedRegion === 'IN' ? 'India' : 'US'}!`,
        {
          duration: 3000,
          icon: selectedRegion === 'IN' ? '🇮🇳' : '🇺🇸',
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #334155'
          }
        }
      );
    } else {
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-md bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  🌍 Change Region
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                Select your preferred region for products and pricing
              </p>
            </div>

            {/* Region Options */}
            <div className="p-6 space-y-4">
              {regions.map((region) => (
                <motion.div
                  key={region.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    selectedRegion === region.id
                      ? 'border-cyan-400 bg-cyan-400/10'
                      : 'border-white/20 bg-white/5 hover:border-white/30 hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedRegion(region.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{region.flag}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-white">{region.name}</h3>
                        {selectedRegion === region.id && (
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{region.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {region.benefits.map((benefit, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-cyan-400">{region.currency}</div>
                      {selectedRegion === region.id && (
                        <svg className="w-5 h-5 text-cyan-400 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10 bg-slate-900/50">
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRegionChange}
                  className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium shadow-lg"
                >
                  Change Region
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
