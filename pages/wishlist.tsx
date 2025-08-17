import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";

interface WishlistItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  discount?: string;
  addedDate: string;
  link?: string;
}

// Helper function to extract numeric value from price string
const extractPrice = (priceString: string): number => {
  // Remove currency symbols and commas, keep only numbers and decimal points
  const numericString = priceString.replace(/[₹,$]/g, '').replace(/,/g, '').trim();
  return parseFloat(numericString) || 0;
};

// Helper function to group items by currency
const groupByCurrency = (items: WishlistItem[]) => {
  const groups = { INR: [], USD: [] };
  
  items.forEach(item => {
    if (item.price.includes('₹')) {
      groups.INR.push(item);
    } else if (item.price.includes('$')) {
      groups.USD.push(item);
    }
  });
  
  return groups;
};

// Helper function to calculate totals by currency
const calculateByCurrency = (items: WishlistItem[]) => {
  let total = 0;
  let originalTotal = 0;
  
  items.forEach(item => {
    const currentPrice = extractPrice(item.price);
    total += currentPrice;
    
    if (item.originalPrice) {
      originalTotal += extractPrice(item.originalPrice);
    } else {
      originalTotal += currentPrice * 1.15;
    }
  });
  
  return { total: Math.round(total), originalTotal: Math.round(originalTotal) };
};

// Helper function to calculate estimated value with currency separation
const calculateEstimatedValue = (items: WishlistItem[]) => {
  const currencyGroups = groupByCurrency(items);
  const inrData = calculateByCurrency(currencyGroups.INR);
  const usdData = calculateByCurrency(currencyGroups.USD);
  
  return {
    INR: {
      total: inrData.total,
      originalTotal: inrData.originalTotal,
      savings: Math.max(0, inrData.originalTotal - inrData.total),
      count: currencyGroups.INR.length
    },
    USD: {
      total: usdData.total,
      originalTotal: usdData.originalTotal,
      savings: Math.max(0, usdData.originalTotal - usdData.total),
      count: currencyGroups.USD.length
    }
  };
};

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [estimatedValue, setEstimatedValue] = useState({
    INR: { total: 0, savings: 0, originalTotal: 0, count: 0 },
    USD: { total: 0, savings: 0, originalTotal: 0, count: 0 }
  });

  useEffect(() => {
    // Load wishlist from localStorage
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      const items = JSON.parse(savedWishlist);
      setWishlistItems(items);
      setEstimatedValue(calculateEstimatedValue(items));
    }
    setIsLoading(false);
  }, []);

  // Update estimated value when wishlist changes
  useEffect(() => {
    setEstimatedValue(calculateEstimatedValue(wishlistItems));
  }, [wishlistItems]);

  const removeFromWishlist = (itemId: string) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== itemId);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    
    toast.success('Removed from wishlist!', {
      icon: '💔',
      style: {
        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
        color: 'white',
        borderRadius: '16px',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)'
      },
      duration: 2000,
      position: 'bottom-center'
    });
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    localStorage.setItem('wishlist', JSON.stringify([]));
    
    toast.success('Wishlist cleared!', {
      icon: '🗑️',
      style: {
        background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
        color: 'white',
        borderRadius: '16px',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: '600'
      },
      duration: 2000,
      position: 'bottom-center'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading your wishlist...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900/50 to-blue-900/50 py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              ❤️ Your Wishlist
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Keep track of your favorite deals and never miss out on the products you love
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-6 flex-wrap">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                {wishlistItems.length} Items
              </span>
              {estimatedValue.INR.count > 0 && (
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  ₹{estimatedValue.INR.total.toLocaleString()} INR
                </span>
              )}
              {estimatedValue.USD.count > 0 && (
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  ${estimatedValue.USD.total.toLocaleString()} USD
                </span>
              )}
              {(estimatedValue.INR.savings > 0 || estimatedValue.USD.savings > 0) && (
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Total Savings
                </span>
              )}
            </div>
            
            {/* Value Summary Cards */}
            {wishlistItems.length > 0 && (
              <div className="flex justify-center gap-4 mb-8 flex-wrap">
                {estimatedValue.INR.count > 0 && (
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">₹{estimatedValue.INR.total.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">INR Total ({estimatedValue.INR.count} items)</div>
                    </div>
                  </div>
                )}
                
                {estimatedValue.USD.count > 0 && (
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">${estimatedValue.USD.total.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">USD Total ({estimatedValue.USD.count} items)</div>
                    </div>
                  </div>
                )}
                
                {estimatedValue.INR.savings > 0 && (
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">₹{estimatedValue.INR.savings.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">INR Savings</div>
                    </div>
                  </div>
                )}
                
                {estimatedValue.USD.savings > 0 && (
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">${estimatedValue.USD.savings.toLocaleString()}</div>
                      <div className="text-sm text-gray-400">USD Savings</div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Wishlist Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {wishlistItems.length === 0 ? (
          // Empty State
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="mb-8">
              <svg className="w-32 h-32 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-400 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Start adding products you love to keep track of amazing deals and never miss out!
            </p>
            <div className="space-y-4">
              <Link 
                href="/deals"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
              >
                Browse Deals
              </Link>
              <div className="flex justify-center gap-4 mt-6">
                <Link href="/laptops" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Laptops
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/headphones" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Headphones
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/deals" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  All Deals
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          // Wishlist Items
          <>
            {/* Wishlist Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {wishlistItems.length} Item{wishlistItems.length !== 1 ? 's' : ''} in Wishlist
                </h2>
                <div className="space-y-1">
                  {estimatedValue.INR.count > 0 && (
                    <p className="text-gray-400">
                      INR Total: <span className="text-green-400 font-semibold">₹{estimatedValue.INR.total.toLocaleString()}</span>
                      {estimatedValue.INR.savings > 0 && (
                        <span className="text-yellow-400 ml-2">(saving ₹{estimatedValue.INR.savings.toLocaleString()})</span>
                      )}
                    </p>
                  )}
                  {estimatedValue.USD.count > 0 && (
                    <p className="text-gray-400">
                      USD Total: <span className="text-blue-400 font-semibold">${estimatedValue.USD.total.toLocaleString()}</span>
                      {estimatedValue.USD.savings > 0 && (
                        <span className="text-orange-400 ml-2">(saving ${estimatedValue.USD.savings.toLocaleString()})</span>
                      )}
                    </p>
                  )}
                </div>
              </div>
              {wishlistItems.length > 0 && (
                <button
                  onClick={clearWishlist}
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Wishlist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence>
                {wishlistItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/10 overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
                  >
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.discount && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          {item.discount}
                        </div>
                      )}
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="absolute top-3 right-3 bg-black/50 hover:bg-red-500 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-medium mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                          {item.name}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-cyan-400">
                            {item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {item.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          Added: {new Date(item.addedDate).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => {
                            if (item.link) {
                              toast(`🛒 Redirecting to Amazon...`, {
                                icon: '🚀',
                                style: {
                                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                  color: 'white',
                                  borderRadius: '16px',
                                  padding: '12px 20px',
                                  fontSize: '14px',
                                  fontWeight: '600'
                                },
                                duration: 2000,
                                position: 'bottom-center'
                              });
                              setTimeout(() => {
                                window.open(item.link, '_blank');
                              }, 500);
                            } else {
                              toast('🚧 Product link not available', {
                                icon: '⚠️',
                                style: {
                                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                  color: 'white',
                                  borderRadius: '16px',
                                  padding: '12px 20px',
                                  fontSize: '14px',
                                  fontWeight: '600'
                                },
                                duration: 3000,
                                position: 'bottom-center'
                              });
                            }
                          }}
                          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Continue Shopping */}
            <div className="text-center mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">
                Want to add more items?
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/deals"
                  className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Browse All Deals
                </Link>
                <Link 
                  href="/laptops"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Shop Laptops
                </Link>
                <Link 
                  href="/headphones"
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                >
                  Shop Headphones
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
