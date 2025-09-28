import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { indiaTodaysDeals } from "../../india-todays-deals-data.js";
import { useRegion } from "../../contexts/RegionContext";
import toast from "react-hot-toast";

export default function IndiaDealsWall() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Location detection
  const { region } = useRegion();
  
  // Get deals data - show 50 India deals
  const dealsData = indiaTodaysDeals.slice(0, 50);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Scroll progress and back to top button
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Hot Deals - Vibrics Deals India</title>
        <meta name="description" content="Discover the hottest deals on tech, fashion, and more in India. Limited time offers with massive savings!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Vibrics Deals Logo.png" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden pt-24">
      {/* Enhanced Background with Gradient and Patterns */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-cyan-900/20 animate-gradient"></div>
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`
        }}></div>
      </motion.div>

      {/* Floating Particles - Optimized */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Dynamic Particle Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Orbs */}
        <motion.div 
          className="absolute w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-80 h-80 bg-cyan-500 rounded-full opacity-15 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{ top: '60%', right: '15%' }}
        />
        <motion.div 
          className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-10 blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          style={{ top: '40%', left: '60%' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div ref={heroRef} className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Left: Main Heading */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-8 lg:mb-0"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-wide text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 drop-shadow-2xl">
                    🔥 Exclusive
                  </span>
                  <br />
                  <span className="neon-glow">Deals Wall</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 font-semibold">
                  Handpicked premium products, unbeatable prices
                </p>
              </motion.div>

              {/* Right: Amazon Branding */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col items-center lg:items-end w-full lg:w-auto"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 w-full max-w-xs">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl mb-2">🛒</div>
                    <p className="text-white font-bold text-base md:text-lg mb-1">Powered by</p>
                    <div className="text-orange-400 font-black text-xl md:text-2xl tracking-wider">Amazon India</div>
                    <p className="text-gray-300 text-xs md:text-sm">Authentic products, fast delivery</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Featured Products Showcase */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
            {isLoading ? (
              // Skeleton Loading for Featured Deals
              <>
                <SkeletonFeaturedCard />
                <SkeletonFeaturedCard />
              </>
            ) : (
              dealsData.slice(0, 2).map((deal, index) => (
                <FeaturedDealCard
                  key={(deal as any).id || (deal as any).asin || (deal as any).title || index}
                  deal={deal}
                  index={index}
                />
              ))
            )}
          </div>
        </div>

        {/* Hot Deals Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                🔥 Hot Deals
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Today's best deals from India
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoading ? (
              // Skeleton Loading
              <>
                {[...Array(8)].map((_, i) => (
                  <SkeletonFeaturedCard key={i} />
                ))}
              </>
            ) : (
              dealsData.slice(2).map((deal, index) => (
                <FeaturedDealCard
                  key={(deal as any).id || (deal as any).asin || (deal as any).title || index + 2}
                  deal={deal}
                  index={index + 2}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50"
        initial={{ scaleX: 0 }}
        style={{ scaleX: scrollYProgress }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-400 to-cyan-400 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
      </div>
    </>
  );
}

// Skeleton Loading Components
function SkeletonFeaturedCard() {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 animate-pulse">
      <div className="h-4 bg-gray-700 rounded w-1/4 mb-4"></div>
      <div className="h-48 bg-gray-700 rounded-xl mb-4"></div>
      <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>
      <div className="flex justify-between items-center">
        <div className="h-8 bg-gray-700 rounded w-20"></div>
        <div className="h-6 bg-gray-700 rounded w-16"></div>
      </div>
    </div>
  );
}

// Featured Deal Card Component
function FeaturedDealCard({ deal, index }: { deal: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleAmazonRedirect = () => {
    if (deal.link) {
      // Add your India affiliate tag to the product link
      const affiliateLink = deal.link.includes('?') 
        ? `${deal.link}&tag=vibricsdeals-21&linkId=960f1a081732c6ae334bba78a8ec3949`
        : `${deal.link}?tag=vibricsdeals-21&linkId=960f1a081732c6ae334bba78a8ec3949`;
      
      // Show toast notification
      toast('🛒 Redirecting to Amazon India...', {
        icon: '🚀',
        style: {
          background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
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
        window.open(affiliateLink, '_blank', 'noopener,noreferrer');
      }, 1000);
    } else {
      toast.error('Product link not available');
    }
  };

  const handleWishlistToggle = () => {
    setIsInWishlist(!isInWishlist);
    if (!isInWishlist) {
      toast('💖 Added to Wishlist. Your favorite deal is saved for later.', {
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
    } else {
      toast('Removed from Wishlist', {
        duration: 2000,
        style: {
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 relative h-full flex flex-col group overflow-hidden"
    >
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="text-orange-400 text-lg mr-2">🛍️</span>
          <span className="text-orange-400 text-sm font-medium">{deal.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleWishlistToggle}
            className={`p-2 rounded-full transition-all duration-300 ${
              isInWishlist 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-700/50 text-gray-400 hover:bg-red-500/20 hover:text-red-400'
            }`}
          >
            <svg className="w-4 h-4" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Product Image */}
      <div className="mb-4 flex justify-center flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-xl"
        >
          <Image
            src={deal.image || '/placeholder-product.svg'}
            alt={deal.productName}
            width={250}
            height={200}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            priority
            unoptimized
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
      </div>
      
      <div className="flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-orange-300 transition-colors duration-300">
          {deal.productName}
        </h3>
        <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300">
          {deal.tagline}
        </p>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 text-sm">⭐</span>
          <span className="text-white text-sm ml-1">{deal.rating} {deal.reviewCount}</span>
        </div>

        {/* Price Section with Savings */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {deal.originalPrice && (
              <span className="text-gray-400 line-through text-sm md:text-lg">
                {deal.originalPrice.endsWith('.') ? deal.originalPrice + '00' : deal.originalPrice}
              </span>
            )}
            {deal.discount && (
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {deal.discount}% OFF
              </span>
            )}
          </div>
          <span className="text-xl md:text-3xl font-black text-green-400 block">
            {deal.currentPrice.endsWith('.') ? deal.currentPrice + '00' : deal.currentPrice}
          </span>
          {deal.originalPrice && deal.discount && (
            <span className="text-green-400 text-xs md:text-sm font-semibold">
              You save: ₹{Math.round((parseFloat(deal.originalPrice.replace(/[^\d.]/g, '')) - parseFloat(deal.currentPrice.replace(/[^\d.]/g, ''))))}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAmazonRedirect}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/25 mb-3"
          >
            Buy on Amazon India
          </motion.button>
          
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full text-gray-400 hover:text-white text-sm font-medium py-2 transition-colors duration-300"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
        </div>
      </div>

      {/* Wishlist Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWishlistToggle}
        className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 z-20 ${
          isInWishlist 
            ? 'bg-red-500 text-white' 
            : 'bg-black/40 backdrop-blur-sm text-white hover:bg-red-500/20'
        }`}
      >
        <svg className="w-5 h-5" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </motion.button>

      {/* Sales and Views Metrics */}
      <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-sm rounded-lg p-2 text-xs text-white z-20">
        <div className="flex items-center gap-2 mb-1">
          <span>👥 {deal.salesCount || Math.floor(Math.random() * 500) + 50} sold</span>
        </div>
        <div className="flex items-center gap-2">
          <span>👁️ {deal.viewCount || Math.floor(Math.random() * 2000) + 100} views</span>
        </div>
      </div>

      {/* Specifications Overlay */}
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={showDetails ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm rounded-2xl p-6 z-30"
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-white font-bold text-lg">Product Details</h4>
            <button
              onClick={() => setShowDetails(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto">
            <div className="space-y-3">
              {deal.specs && deal.specs.map((spec: string, i: number) => (
                <div key={i} className="flex items-center text-gray-300 text-sm">
                  <span className="text-green-400 mr-2">✓</span>
                  {spec}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"
        animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
