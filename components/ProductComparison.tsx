import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { addToWishlist } from '../lib/wishlistUtils';
import { getComparisonItems, removeFromComparison, clearComparison as clearComparisonUtil } from '../lib/comparisonUtils';
import OptimizedImage from './OptimizedImage';

interface Product {
  title: string;
  price: string;
  rating: string;
  count: string;
  image: string;
  link: string;
}

interface ProductComparisonProps {
  products: Product[];
  category: 'laptops' | 'headphones';
}

export default function ProductComparison({ products, category }: ProductComparisonProps) {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const maxComparisonItems = 4;

  // Load comparison items from centralized system
  useEffect(() => {
    const loadFromStorage = () => {
      const categoryItems = getComparisonItems(category);
      setSelectedProducts(categoryItems);
    };

    // Load initially
    loadFromStorage();

    // Listen for comparison update events
    const handleComparisonUpdate = (e: CustomEvent) => {
      if (e.detail && e.detail.category && e.detail.category.toLowerCase() === category.toLowerCase()) {
        loadFromStorage();
      }
    };

    window.addEventListener('comparisonUpdated', handleComparisonUpdate as EventListener);

    return () => {
      window.removeEventListener('comparisonUpdated', handleComparisonUpdate as EventListener);
    };
  }, [category]);


  const formatPrice = (priceString: string) => {
    if (!priceString || priceString === "nan") return "$0.00";
    const firstPrice = priceString.split(" ")[0];
    let cleanPrice = firstPrice.replace(/[^\d.]/g, "");
    if (!cleanPrice.startsWith("$")) {
      cleanPrice = "$" + cleanPrice;
    }
    return cleanPrice;
  };


  const handleRemoveFromComparison = (productTitle: string) => {
    removeFromComparison(productTitle, category);
  };

  const handleClearComparison = () => {
    clearComparisonUtil(category);
    setShowComparison(false);
  };


  const getComparisonData = () => {
    return selectedProducts.map(product => ({
      title: product.title === "nan" ? `Premium ${category}` : product.title,
      price: formatPrice(product.price),
      rating: product.rating === "nan" ? "N/A" : product.rating.split(" ").slice(0, 4).join(" "),
      reviewCount: product.count && product.count.includes("(") 
        ? product.count.match(/\(([^)]+)\)/)?.[1] || "N/A"
        : "N/A",
      image: product.image,
      link: product.link,
      // Extract specs based on category
      specs: category === 'laptops' ? extractLaptopSpecs(product.title) : extractHeadphoneSpecs(product.title)
    }));
  };

  const extractLaptopSpecs = (title: string) => {
    const specs: any = {};
    const lowerTitle = title.toLowerCase();
    
    // RAM
    const ramMatch = lowerTitle.match(/(\d+)gb\s*(?:ddr\d*)?\s*ram/);
    if (ramMatch) specs.ram = `${ramMatch[1]}GB`;
    
    // Storage
    const storageMatch = lowerTitle.match(/(\d+)(?:gb|tb)\s*(?:ssd|hdd|emmc)/);
    if (storageMatch) specs.storage = `${storageMatch[1]}${storageMatch[0].includes('tb') ? 'TB' : 'GB'}`;
    
    // Screen Size
    const screenMatch = lowerTitle.match(/(\d+(?:\.\d+)?)["\s]*inch/);
    if (screenMatch) specs.screenSize = `${screenMatch[1]}"`;
    
    // Processor
    if (lowerTitle.includes('intel')) specs.processor = 'Intel';
    else if (lowerTitle.includes('amd')) specs.processor = 'AMD';
    else if (lowerTitle.includes('apple')) specs.processor = 'Apple';
    
    return specs;
  };

  const extractHeadphoneSpecs = (title: string) => {
    const specs: any = {};
    const lowerTitle = title.toLowerCase();
    
    // Battery Life
    const batteryMatch = lowerTitle.match(/(\d+)h\s*(?:playtime|battery)/);
    if (batteryMatch) specs.batteryLife = `${batteryMatch[1]}H`;
    
    // Type
    if (lowerTitle.includes('wireless')) specs.type = 'Wireless';
    else if (lowerTitle.includes('wired')) specs.type = 'Wired';
    else if (lowerTitle.includes('bluetooth')) specs.type = 'Bluetooth';
    
    // Noise Cancellation
    if (lowerTitle.includes('noise cancelling') || lowerTitle.includes('noise canceling')) {
      specs.noiseCancellation = 'Yes';
    }
    
    return specs;
  };

  return (
    <div className="space-y-6">
      {/* Comparison Controls */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-bold text-white">⚖️ Product Comparison</h3>
            {selectedProducts.length > 0 && (
              <span className="bg-cyan-500 text-white text-sm px-3 py-1 rounded-full">
                {selectedProducts.length}/{maxComparisonItems} selected
              </span>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-1"
            />
            {selectedProducts.length > 0 && (
              <div className="flex gap-2">
                <button
                  onClick={() => setShowComparison(true)}
                  className="px-3 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm sm:text-base whitespace-nowrap"
                >
                  Compare ({selectedProducts.length})
                </button>
                <button
                  onClick={handleClearComparison}
                  className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm sm:text-base whitespace-nowrap"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Selected Products Display */}
      {selectedProducts.length > 0 && (
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-6">
          <h4 className="text-lg font-semibold text-white mb-4">Selected for Comparison ({selectedProducts.length}/{maxComparisonItems})</h4>
          <div className="flex flex-wrap gap-3">
            {selectedProducts.map((product, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg p-2">
                <OptimizedImage
                  src={product.image}
                  alt={product.title}
                  className="w-8 h-8 object-contain rounded"
                />
                <span className="text-white text-sm max-w-32 truncate">
                  {product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title}
                </span>
                    <button
                      onClick={() => handleRemoveFromComparison(product.title)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No duplicate product grid - products are managed by InfiniteScrollProducts */}

      {/* Comparison Modal */}
      <AnimatePresence>
        {showComparison && selectedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowComparison(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl p-4 sm:p-6 max-w-6xl w-full max-h-[90vh] overflow-auto mx-2 sm:mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Product Comparison</h2>
                <button
                  onClick={() => setShowComparison(false)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-white min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-2 sm:p-4 sticky left-0 bg-slate-900 z-10">Feature</th>
                      {getComparisonData().map((product, index) => (
                        <th key={index} className="text-center p-2 sm:p-4 min-w-[150px] sm:min-w-[200px]">
                          <div className="space-y-2">
                            <OptimizedImage
                              src={product.image}
                              alt={product.title}
                              className="w-12 h-12 sm:w-16 sm:h-16 object-contain mx-auto rounded-lg"
                            />
                            <div className="text-xs sm:text-sm font-semibold line-clamp-2">{product.title}</div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="p-2 sm:p-4 font-semibold sticky left-0 bg-slate-900 z-10">Price</td>
                      {getComparisonData().map((product, index) => (
                        <td key={index} className="p-2 sm:p-4 text-center text-green-400 font-bold">
                          {product.price}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-2 sm:p-4 font-semibold sticky left-0 bg-slate-900 z-10">Rating</td>
                      {getComparisonData().map((product, index) => (
                        <td key={index} className="p-2 sm:p-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <span className="text-yellow-400">⭐</span>
                            <span className="text-sm sm:text-base">{product.rating}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-2 sm:p-4 font-semibold sticky left-0 bg-slate-900 z-10">Reviews</td>
                      {getComparisonData().map((product, index) => (
                        <td key={index} className="p-2 sm:p-4 text-center text-gray-300 text-sm sm:text-base">
                          {product.reviewCount}
                        </td>
                      ))}
                    </tr>
                    {category === 'laptops' && (
                      <>
                        <tr className="border-b border-white/10">
                          <td className="p-2 sm:p-4 font-semibold sticky left-0 bg-slate-900 z-10">RAM</td>
                          {getComparisonData().map((product, index) => (
                            <td key={index} className="p-2 sm:p-4 text-center text-gray-300 text-sm sm:text-base">
                              {product.specs.ram || 'N/A'}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-2 sm:p-4 font-semibold sticky left-0 bg-slate-900 z-10">Storage</td>
                          {getComparisonData().map((product, index) => (
                            <td key={index} className="p-2 sm:p-4 text-center text-gray-300 text-sm sm:text-base">
                              {product.specs.storage || 'N/A'}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-2 sm:p-4 font-semibold sticky left-0 bg-slate-900 z-10">Screen Size</td>
                          {getComparisonData().map((product, index) => (
                            <td key={index} className="p-2 sm:p-4 text-center text-gray-300 text-sm sm:text-base">
                              {product.specs.screenSize || 'N/A'}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-2 sm:p-4 font-semibold sticky left-0 bg-slate-900 z-10">Processor</td>
                          {getComparisonData().map((product, index) => (
                            <td key={index} className="p-2 sm:p-4 text-center text-gray-300 text-sm sm:text-base">
                              {product.specs.processor || 'N/A'}
                            </td>
                          ))}
                        </tr>
                      </>
                    )}
                    {category === 'headphones' && (
                      <>
                        <tr className="border-b border-white/10">
                          <td className="p-2 sm:p-4 font-semibold sticky left-0 bg-slate-900 z-10">Battery Life</td>
                          {getComparisonData().map((product, index) => (
                            <td key={index} className="p-2 sm:p-4 text-center text-gray-300 text-sm sm:text-base">
                              {product.specs.batteryLife || 'N/A'}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-2 sm:p-4 font-semibold sticky left-0 bg-slate-900 z-10">Type</td>
                          {getComparisonData().map((product, index) => (
                            <td key={index} className="p-2 sm:p-4 text-center text-gray-300 text-sm sm:text-base">
                              {product.specs.type || 'N/A'}
                            </td>
                          ))}
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-2 sm:p-4 font-semibold sticky left-0 bg-slate-900 z-10">Noise Cancellation</td>
                          {getComparisonData().map((product, index) => (
                            <td key={index} className="p-2 sm:p-4 text-center text-gray-300 text-sm sm:text-base">
                              {product.specs.noiseCancellation || 'N/A'}
                            </td>
                          ))}
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}