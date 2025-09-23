import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { addToWishlist } from '../lib/wishlistUtils';
import { addToComparison } from '../lib/comparisonUtils';
// import OptimizedImage from './OptimizedImage';
import ProductImageGallery from './ProductImageGallery';

interface Product {
  title: string;
  price: string;
  rating: string;
  count?: string;
  image?: string;
  link?: string;
  productLink?: string;
  imageLink?: string;
  asin?: string;
  availability?: string;
}

interface InfiniteScrollProductsProps {
  products: Product[];
  category: 'laptops' | 'headphones' | 'mobiles' | 'home-essentials' | 'self-care' | 'fashion' | 'stationery';
  itemsPerPage?: number;
}

export default function InfiniteScrollProducts({ 
  products, 
  category, 
  itemsPerPage = 8 
}: InfiniteScrollProductsProps) {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);

  const formatPrice = (priceString: string) => {
    if (!priceString || priceString === "nan") return "$0.00";
    const firstPrice = priceString.split(" ")[0];
    let cleanPrice = firstPrice.replace(/[^\d.]/g, "");
    if (!cleanPrice.startsWith("$")) {
      cleanPrice = "$" + cleanPrice;
    }
    return cleanPrice;
  };

  const loadMoreProducts = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newProducts = products.slice(startIndex, endIndex);

      if (newProducts.length === 0) {
        setHasMore(false);
        setIsLoading(false);
        return;
      }

      setDisplayedProducts(prev => [...prev, ...newProducts]);
      setCurrentPage(prev => prev + 1);
      setIsLoading(false);

      // Check if we've loaded all products
      if (endIndex >= products.length) {
        setHasMore(false);
      }
    }, 500);
  }, [currentPage, itemsPerPage, products, isLoading, hasMore]);

  useEffect(() => {
    // Load initial products
    const initialProducts = products.slice(0, itemsPerPage);
    setDisplayedProducts(initialProducts);
    setCurrentPage(2);
    setHasMore(products.length > itemsPerPage);
  }, [products, itemsPerPage]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreProducts();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observerRef.current.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMoreProducts, hasMore, isLoading]);

  const handleAddToWishlist = (product: Product) => {
    const result = addToWishlist({
      name: product.title === "nan" ? `Premium ${category}` : product.title.split(' ').slice(0, 8).join(' '),
      price: formatPrice(product.price),
      image: product.image || product.imageLink || '',
      category: category.charAt(0).toUpperCase() + category.slice(1),
      link: product.link || product.productLink || ''
    });

    if (result.success) {
      toast(result.message, {
        icon: '🎉',
        duration: 3000,
        style: {
          background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
          color: 'white',
          borderRadius: '16px',
          padding: '12px 20px',
          fontSize: '14px',
          fontWeight: '600'
        }
      });
    } else {
      toast(result.message, {
        icon: result.message.includes('limit') ? '⚠️' : '💔',
        duration: 3000,
        style: {
          background: result.message.includes('limit') 
            ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
            : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: 'white',
          borderRadius: '16px',
          padding: '12px 20px',
          fontSize: '14px',
          fontWeight: '600'
        }
      });
    }
  };

  const handleBuyClick = (link: string, title: string) => {
    window.open(link, '_blank');
    toast(`Opening ${title} on Amazon... 🚀`, {
      duration: 2000,
      style: {
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: 'white',
        borderRadius: '16px',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: '600'
      }
    });
  };

  const handleAddToComparison = (product: Product) => {
    const result = addToComparison(product, category);
    
    if (result.success) {
      toast(result.message, {
        duration: 3000,
        style: {
          background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
          color: 'white',
          borderRadius: '16px',
          padding: '12px 20px',
          fontSize: '14px',
          fontWeight: '600'
        }
      });
    } else {
      toast(result.message, {
        duration: 3000,
        style: {
          background: result.message.includes('limit') 
            ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
            : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: 'white',
          borderRadius: '16px',
          padding: '12px 20px',
          fontSize: '14px',
          fontWeight: '600'
        }
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {displayedProducts.map((product, index) => (
          <motion.div
            key={`${product.title}-${index}`}
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl group overflow-hidden relative flex flex-col h-full"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2 z-20">
              {/* Comparison Button */}
              <button
                onClick={() => handleAddToComparison(product)}
                className="p-2 bg-cyan-500/20 hover:bg-cyan-500 rounded-full backdrop-blur-sm border border-cyan-400/30 text-cyan-300 hover:text-white transition-all duration-300 shadow-lg"
                title="Add to Comparison"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </button>
              
              {/* Wishlist Button */}
              <button
                onClick={() => handleAddToWishlist(product)}
                className="p-2 bg-pink-500/20 hover:bg-pink-500 rounded-full backdrop-blur-sm border border-pink-400/30 text-pink-300 hover:text-white transition-all duration-300 shadow-lg"
                title="Add to Wishlist"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Product Image with Gallery */}
            <div className="relative mb-6 h-48 bg-white/5 rounded-2xl overflow-hidden">
              <ProductImageGallery
                images={[product.image || product.imageLink || '']}
                title={product.title === "nan" ? `${category} Product` : product.title}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Product Info */}
            <h2 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
              {product.title === "nan" ? `Premium ${category}` : (product.title.length > 60 ? product.title.substring(0, 60) + "..." : product.title)}
            </h2>

            {/* Rating */}
            <div className="flex items-center mb-3">
              <span className="text-yellow-400 text-lg mr-2">⭐</span>
              <span className="text-white font-semibold">
                {product.rating === "nan" ? "N/A" : product.rating.split(" ").slice(0, 4).join(" ")}
              </span>
              <span className="text-gray-400 text-sm ml-2">
                {product.count && product.count.includes("(") 
                  ? `(${product.count.match(/\(([^)]+)\)/)?.[1] || "N/A"})`
                  : product.count
                }
              </span>
            </div>

            {/* Price */}
            <div className="mb-6 flex-1">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-green-400">
                  {formatPrice(product.price)}
                </span>
              </div>
            </div>

            {/* Buy Button */}
            <div className="mt-auto">
              <button
                onClick={() => handleBuyClick(product.link || product.productLink || '', product.title === "nan" ? `${category} Product` : product.title.substring(0, 30) + "...")}
                className="w-full bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-bold py-3 px-6 rounded-2xl text-sm shadow-2xl hover:scale-105 hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 relative overflow-hidden"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>🛒</span>
                  <span>Buy on Amazon</span>
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center items-center py-12"
        >
          <div className="flex items-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
            <span className="text-white text-lg">Loading more products...</span>
          </div>
        </motion.div>
      )}

      {/* End of Results */}
      {!hasMore && displayedProducts.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-cyan-400 font-semibold">🎉</span>
            <span className="text-white ml-2">You've seen all {products.length} products!</span>
          </div>
        </motion.div>
      )}

      {/* Intersection Observer Target */}
      <div ref={loadingRef} className="h-4" />
    </div>
  );
}
