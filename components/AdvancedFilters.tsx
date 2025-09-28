import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRegion } from '../contexts/RegionContext';

interface FilterCriteria {
  priceRange: [number, number];
  brands: string[];
  minRating: number;
  availability: 'all' | 'in-stock' | 'limited';
  sortBy: 'price-asc' | 'price-desc' | 'rating' | 'newest';
}

interface AdvancedFiltersProps {
  readonly products: any[];
  readonly onFiltersChange: (filteredProducts: any[]) => void;
  readonly category: 'laptops' | 'headphones' | 'mobiles' | 'home-essentials' | 'self-care' | 'fashion' | 'stationery' | 'gadgets';
}

export default function AdvancedFilters({ products, onFiltersChange, category }: AdvancedFiltersProps) {
  const { region } = useRegion();
  
  // Set appropriate price range based on region
  const defaultPriceRange: [number, number] = region === 'IN' ? [0, 200000] : [0, 2000];
  
  const [filters, setFilters] = useState<FilterCriteria>({
    priceRange: defaultPriceRange,
    brands: [],
    minRating: 0,
    availability: 'all',
    sortBy: 'newest'
  });

  const [isExpanded, setIsExpanded] = useState(false);

  // Helper function to extract brand from product title
  const extractBrand = (title: string, category: string): string | null => {
    const lowerTitle = title.toLowerCase();
    
    const laptopBrands = [
      { keywords: ['hp'], brand: 'HP' },
      { keywords: ['dell'], brand: 'Dell' },
      { keywords: ['lenovo'], brand: 'Lenovo' },
      { keywords: ['asus'], brand: 'ASUS' },
      { keywords: ['acer'], brand: 'Acer' },
      { keywords: ['apple', 'macbook'], brand: 'Apple' },
      { keywords: ['msi'], brand: 'MSI' },
      { keywords: ['blackview'], brand: 'Blackview' },
      { keywords: ['eyy'], brand: 'EYY' },
      { keywords: ['coolby'], brand: 'Coolby' },
      { keywords: ['acemagic'], brand: 'ACEMAGIC' },
      { keywords: ['trygood'], brand: 'Trygood' },
      { keywords: ['uowamou'], brand: 'UOWAMOU' },
      { keywords: ['wendbo'], brand: 'Wendbo' },
      { keywords: ['rack'], brand: 'RackSolutions' }
    ];
    
    const headphoneBrands = [
      { keywords: ['beats'], brand: 'Beats' },
      { keywords: ['sony'], brand: 'Sony' },
      { keywords: ['jbl'], brand: 'JBL' },
      { keywords: ['beribes'], brand: 'BERIBES' },
      { keywords: ['soundcore', 'anker'], brand: 'Soundcore' },
      { keywords: ['zzu'], brand: 'ZZU' }
    ];
    
    const mobileBrands = [
      { keywords: ['apple', 'iphone'], brand: 'Apple' },
      { keywords: ['samsung', 'galaxy'], brand: 'Samsung' },
      { keywords: ['google', 'pixel'], brand: 'Google' },
      { keywords: ['oneplus'], brand: 'OnePlus' },
      { keywords: ['motorola', 'moto'], brand: 'Motorola' },
      { keywords: ['nokia'], brand: 'Nokia' },
      { keywords: ['xiaomi', 'redmi'], brand: 'Xiaomi' },
      { keywords: ['huawei'], brand: 'Huawei' },
      { keywords: ['oppo'], brand: 'Oppo' },
      { keywords: ['vivo'], brand: 'Vivo' }
    ];
    
    const homeEssentialsBrands = [
      { keywords: ['clorox'], brand: 'Clorox' },
      { keywords: ['homedics'], brand: 'Homedics' },
      { keywords: ['oxo'], brand: 'OXO' },
      { keywords: ['bissell'], brand: 'Bissell' },
      { keywords: ['cisily'], brand: 'Cisily' },
      { keywords: ['chushiji'], brand: 'CHUSHIJI' },
      { keywords: ['vewior'], brand: 'VEWIOR' }
    ];
    
    const selfCareBrands = [
      { keywords: ['grace', 'stella'], brand: 'Grace & Stella' },
      { keywords: ['biodance'], brand: 'BIODANCE' },
      { keywords: ['clean skin club'], brand: 'Clean Skin Club' },
      { keywords: ['swcandy'], brand: 'SWCANDY' },
      { keywords: ['the ordinary'], brand: 'The Ordinary' },
      { keywords: ['cerave'], brand: 'CeraVe' },
      { keywords: ['neutrogena'], brand: 'Neutrogena' }
    ];
    
    const fashionBrands = [
      { keywords: ['nike'], brand: 'Nike' },
      { keywords: ['adidas'], brand: 'Adidas' },
      { keywords: ['levi', 'levis'], brand: 'Levi\'s' },
      { keywords: ['trendy queen'], brand: 'Trendy Queen' },
      { keywords: ['dearmay'], brand: 'DEARMAY' },
      { keywords: ['sojos'], brand: 'SOJOS' },
      { keywords: ['keoouure'], brand: 'Keoouure' }
    ];
    
          const stationeryBrands = [
            { keywords: ['pilot'], brand: 'Pilot' },
            { keywords: ['moleskine'], brand: 'Moleskine' },
            { keywords: ['amazon basics'], brand: 'Amazon Basics' },
            { keywords: ['mr. pen'], brand: 'Mr. Pen' },
            { keywords: ['eacyart'], brand: 'EACYART' },
            { keywords: ['xxinmoh'], brand: 'XXINMOH' }
          ];
          const gadgetsBrands = [
            { keywords: ['meatstick'], brand: 'MeatStick' },
            { keywords: ['trendplain'], brand: 'TrendPlain' },
            { keywords: ['compressed air'], brand: 'Compressed Air' },
            { keywords: ['magsafe'], brand: 'MagSafe' },
            { keywords: ['professional'], brand: 'Professional' },
            { keywords: ['wireless'], brand: 'Wireless' },
            { keywords: ['bluetooth'], brand: 'Bluetooth' },
            { keywords: ['digital'], brand: 'Digital' }
          ];
    
    let brandMappings: Array<{ keywords: string[]; brand: string }> = [];
    switch (category) {
      case 'laptops':
        brandMappings = laptopBrands;
        break;
      case 'headphones':
        brandMappings = headphoneBrands;
        break;
      case 'mobiles':
        brandMappings = mobileBrands;
        break;
      case 'home-essentials':
        brandMappings = homeEssentialsBrands;
        break;
      case 'self-care':
        brandMappings = selfCareBrands;
        break;
      case 'fashion':
        brandMappings = fashionBrands;
        break;
      case 'stationery':
        brandMappings = stationeryBrands;
        break;
      case 'gadgets':
        brandMappings = gadgetsBrands;
        break;
      default:
        brandMappings = [];
    }
    
    for (const mapping of brandMappings) {
      if (mapping.keywords.some(keyword => lowerTitle.includes(keyword))) {
        return mapping.brand;
      }
    }
    
    return null;
  };

  // Extract unique brands from products using useMemo
  const availableBrands = useMemo(() => {
    const brands = products
      .map(product => extractBrand(product.title, category))
      .filter(Boolean) as string[];
    
    return Array.from(new Set(brands)).sort((a, b) => a.localeCompare(b));
  }, [products, category]);

  // Get price range from products using useMemo to prevent infinite loops
  const priceRange = useMemo(() => {
    return products.reduce(
      (acc, product) => {
        const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
        if (!isNaN(price)) {
          acc.min = Math.min(acc.min, price);
          acc.max = Math.max(acc.max, price);
        }
        return acc;
      },
      { min: Infinity, max: 0 }
    );
  }, [products]);

  useEffect(() => {
    // Set initial price range only once when component mounts
    if (priceRange.min !== Infinity && priceRange.max !== 0 && filters.priceRange[0] === 0 && filters.priceRange[1] === defaultPriceRange[1]) {
      setFilters(prev => ({
        ...prev,
        priceRange: [Math.floor(priceRange.min), Math.ceil(priceRange.max)]
      }));
    }
  }, [priceRange.min, priceRange.max, defaultPriceRange]); // Only depend on the actual values, not the object

  const applyFilters = () => {
    let filtered = [...products];

    // Price filter
    filtered = filtered.filter(product => {
      const price = parseFloat(product.price.replace(/[^\d.]/g, ''));
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // Brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => {
        const title = product.title.toLowerCase();
        return filters.brands.some(brand => title.includes(brand.toLowerCase()));
      });
    }

    // Rating filter
    if (filters.minRating > 0) {
      filtered = filtered.filter(product => {
        const rating = parseFloat(product.rating.split(' ')[0]);
        return !isNaN(rating) && rating >= filters.minRating;
      });
    }

    // Availability filter (simplified - just check if product exists)
    if (filters.availability === 'in-stock') {
      filtered = filtered.filter(product => product.title !== 'nan');
    } else if (filters.availability === 'limited') {
      filtered = filtered.slice(0, Math.floor(filtered.length * 0.3));
    }

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, ''));
        case 'price-desc':
          return parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, ''));
        case 'rating':
          const ratingA = parseFloat(a.rating.split(' ')[0]);
          const ratingB = parseFloat(b.rating.split(' ')[0]);
          return (isNaN(ratingB) ? 0 : ratingB) - (isNaN(ratingA) ? 0 : ratingA);
        case 'newest':
        default:
          return 0; // Keep original order
      }
    });

    onFiltersChange(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const handleBrandToggle = (brand: string) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand]
    }));
  };

  const clearFilters = () => {
    setFilters({
      priceRange: defaultPriceRange,
      brands: [],
      minRating: 0,
      availability: 'all',
      sortBy: 'newest'
    });
  };

  const activeFiltersCount = filters.brands.length + 
    (filters.minRating > 0 ? 1 : 0) + 
    (filters.availability !== 'all' ? 1 : 0) +
    (filters.sortBy !== 'newest' ? 1 : 0);

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          🔍 Advanced Filters
          {activeFiltersCount > 0 && (
            <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm"
          >
            Clear All
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm"
          >
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-6"
          >
            {/* Price Range */}
            <div>
              <label htmlFor="price-range-min" className="block text-white font-semibold mb-3">
                Price Range: {region === 'IN' ? '₹' : '$'}{filters.priceRange[0]} - {region === 'IN' ? '₹' : '$'}{filters.priceRange[1]}
              </label>
              <div className="relative">
                <input
                  id="price-range-min"
                  type="range"
                  min={Math.floor(priceRange.min)}
                  max={Math.ceil(priceRange.max)}
                  value={filters.priceRange[0]}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    priceRange: [parseInt(e.target.value), prev.priceRange[1]]
                  }))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
                <input
                  id="price-range-max"
                  type="range"
                  min={Math.floor(priceRange.min)}
                  max={Math.ceil(priceRange.max)}
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters(prev => ({
                    ...prev,
                    priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                  }))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider absolute top-0"
                />
              </div>
            </div>

            {/* Brands */}
            <div>
              <label htmlFor="brand-filters" className="block text-white font-semibold mb-3">Brands</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {availableBrands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => handleBrandToggle(brand as string)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filters.brands.includes(brand as string)
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <label htmlFor="rating-filters" className="block text-white font-semibold mb-3">
                Minimum Rating: {filters.minRating > 0 ? `${filters.minRating}+ ⭐` : 'Any'}
              </label>
              <div className="flex gap-2">
                {[0, 3, 4, 4.5, 5].map(rating => (
                  <button
                    key={rating}
                    onClick={() => setFilters(prev => ({ ...prev, minRating: rating }))}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filters.minRating === rating
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {rating === 0 ? 'Any' : `${rating}+ ⭐`}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <label htmlFor="availability-filters" className="block text-white font-semibold mb-3">Availability</label>
              <div className="flex gap-2">
                {[
                  { value: 'all', label: 'All Products' },
                  { value: 'in-stock', label: 'In Stock' },
                  { value: 'limited', label: 'Limited Stock' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFilters(prev => ({ ...prev, availability: option.value as any }))}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filters.availability === option.value
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label htmlFor="sort-filters" className="block text-white font-semibold mb-3">Sort By</label>
              <div className="flex gap-2 flex-wrap">
                {[
                  { value: 'newest', label: 'Newest First' },
                  { value: 'price-asc', label: 'Price: Low to High' },
                  { value: 'price-desc', label: 'Price: High to Low' },
                  { value: 'rating', label: 'Highest Rated' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => setFilters(prev => ({ ...prev, sortBy: option.value as any }))}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filters.sortBy === option.value
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}