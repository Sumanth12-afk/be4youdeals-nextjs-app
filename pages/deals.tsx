import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { allLaptops } from "../all-laptops-data.js";
import toast from "react-hot-toast";

export default function DealsWall() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Helpers to build a laptop-based featured deal in USD
  const formatUSD = (price: string): string => {
    if (!price || price === "nan") return "$0.00";
    const firstToken = String(price).split(" ")[0];
    const numeric = firstToken.replace(/[^\d.]/g, "");
    const amount = parseFloat(numeric);
    if (Number.isNaN(amount)) return "$0.00";
    return `$${amount.toFixed(2)}`;
  };

  const pickLaptop = allLaptops?.[0] as any; // deterministic pick
  const laptopCurrentUSD = formatUSD(pickLaptop?.price || "");
  const laptopAmount = parseFloat(laptopCurrentUSD.replace(/[^\d.]/g, "")) || 0;
  const laptopDiscount = 25; // keep page look/feel the same
  const laptopOriginalUSD = laptopAmount > 0 ? `$${(laptopAmount / (1 - laptopDiscount / 100)).toFixed(2)}` : undefined;
  const laptopImage = "/laptop.png"; // Use local image instead of external URL
  const laptopLink = (pickLaptop?.link ? String(pickLaptop.link).split(" ")[0] : "#");
  const laptopRating = (() => {
    const raw = pickLaptop?.rating;
    if (!raw || raw === "nan") return 4.5;
    const num = parseFloat(String(raw).replace(/[^\d.]/g, ""));
    return Number.isNaN(num) ? 4.5 : num;
  })();
  const laptopReviews = (() => {
    const raw = pickLaptop?.count ?? "";
    const inParens = String(raw).match(/\(([^)]+)\)/)?.[1] ?? String(raw);
    const digits = inParens.replace(/[^\d]/g, "");
    return digits ? parseInt(digits, 10) : 2000;
  })();

  // Real product data with time-limited deals (laptop pulled from dataset)
  const featuredDeals = [
    {
      id: 1,
      category: "💻 Laptops",
      productName: pickLaptop?.title === "nan" ? "Premium Laptop" : String(pickLaptop?.title || "Premium Laptop"),
      tagline: "Performance meets portability",
      originalPrice: laptopOriginalUSD,
      currentPrice: laptopCurrentUSD,
      currency: "USD",
      rating: laptopRating,
      reviewCount: laptopReviews,
      image: laptopImage,
      link: laptopLink,
      specs: ["Intel Core i5", "8GB RAM", "512GB SSD", "15.6″ Display"],
      available: true,
      badge: "🔥 Hot Deal",
      badgeColor: "from-red-500 to-orange-500",
      discount: laptopDiscount,
      dealEndTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      salesCount: 127,
      viewCount: 1543
    },
    {
      id: "headphones",
      category: "Headphones",
      productName: "JBL Tune 510BT",
      tagline: "40H battery, ultra-comfy",
      originalPrice: "$70.00",
      currentPrice: "$49.95",
      currency: "USD",
      rating: 4.5,
      reviewCount: 12500,
      discount: 30,
      image: "/headphones.png",
      link: "https://www.amazon.com/dp/B08WM3LMJF/ref=twister_B095J3HLGN?_encoding=UTF8&th=1",
      dealEndTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      specs: [
        "40-hour battery life",
        "Ultra-comfortable design",
        "Premium sound quality",
        "Bluetooth 5.0",
        "Built-in microphone"
      ]
    }
  ];

  const comingSoonDeals = [
    {
      id: 3,
      category: "📱 Mobiles",
      productName: "iPhone 15 Pro",
      tagline: "Titanium. So strong. So light.",
      image: "/mobiles.png",
      available: false
    },
    {
      id: 4,
      category: "🛋️ Home Essentials", 
      productName: "Smart Aroma Diffuser",
      tagline: "Transform your space",
      image: "/household.png",
      available: false
    },
    {
      id: 5,
      category: "👗 Fashion",
      productName: "Premium Activewear Collection",
      tagline: "Refined activewear for motion",
      image: "/fashion.png",
      available: false
    },
    {
      id: 6,
      category: "🧴 Self-Care",
      productName: "Natural Skincare Essentials",
      tagline: "Organic beauty with natural ingredients",
      image: "/skincare.jpg", 
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
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
          style={{ bottom: '10%', left: '50%' }}
        />

        {/* Floating Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Spotlight Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-400/10 to-transparent rounded-full"></div>
      </div>

      <div className="relative z-10 px-6 py-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Left: Glowing Title */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
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
                  <div className="text-orange-400 font-black text-xl md:text-2xl tracking-wider">Amazon</div>
                  <p className="text-gray-300 text-xs md:text-sm">Authentic products, fast delivery</p>
                </div>
              </div>
            </motion.div>
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
              featuredDeals.map((deal, index) => (
                <FeaturedDealCard key={deal.id} deal={deal} index={index} />
              ))
            )}
          </div>
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-8 md:mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Coming Soon
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {isLoading ? (
              // Skeleton Loading for Coming Soon Cards
              <>
                <SkeletonComingSoonCard />
                <SkeletonComingSoonCard />
                <SkeletonComingSoonCard />
                <SkeletonComingSoonCard />
              </>
            ) : (
              comingSoonDeals.map((deal, index) => (
                <ComingSoonCard key={deal.id} deal={deal} index={index} />
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Countdown Timer Component
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-2 md:p-3 border border-red-500/30">
      <div className="text-center mb-2">
        <span className="text-red-400 font-bold text-xs">⏰ DEAL ENDS IN</span>
      </div>
      <div className="flex justify-center gap-1 md:gap-2">
        {[
          { label: 'D', value: timeLeft.days },
          { label: 'H', value: timeLeft.hours },
          { label: 'M', value: timeLeft.minutes },
          { label: 'S', value: timeLeft.seconds }
        ].map((unit, i) => (
          <div key={i} className="text-center">
            <motion.div
              className="bg-red-500 text-white font-bold text-xs md:text-sm px-1 md:px-2 py-1 rounded min-w-[20px] md:min-w-[28px]"
              animate={{ scale: unit.label === 'S' ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5, repeat: unit.label === 'S' ? Infinity : 0 }}
            >
              {unit.value.toString().padStart(2, '0')}
            </motion.div>
            <div className="text-xs text-gray-400 mt-1">{unit.label}</div>
          </div>
        ))}
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
    // Show toast notification
    toast('🛒 Redirecting to Amazon...', {
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
      window.open(deal.link, '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
    
    // Enhanced toast with custom styling
    if (!isInWishlist) {
      toast('❤️ Added to Wishlist!', {
        icon: '🎉',
        style: {
          background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
          color: 'white',
          borderRadius: '16px',
          padding: '12px 20px',
          fontSize: '14px',
          fontWeight: '600',
          boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3)'
        },
        duration: 3000,
        position: 'bottom-center'
      });
    } else {
      toast('💔 Removed from Wishlist', {
        icon: '👋',
        style: {
          background: 'linear-gradient(135deg, #6b7280 0%, #374151 100%)',
          color: 'white',
          borderRadius: '16px',
          padding: '12px 20px',
          fontSize: '14px',
          fontWeight: '600'
        },
        duration: 2000,
        position: 'bottom-center'
      });
    }
    
    // Here you would typically save to localStorage or backend
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
        onHoverStart={() => {
          setIsHovered(true);
          setTimeout(() => setShowDetails(true), 200);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
          setShowDetails(false);
        }}
        className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-4 md:p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden cursor-pointer flex flex-col h-full"
      >
        {/* Glow Ring Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          animate={isHovered ? {
            boxShadow: [
              "0 0 20px rgba(6, 182, 212, 0.3)",
              "0 0 40px rgba(6, 182, 212, 0.5)",
              "0 0 20px rgba(6, 182, 212, 0.3)"
            ]
          } : {}}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Category */}
        <div className="text-2xl mb-4 text-cyan-400 font-bold">{deal.category}</div>

        {/* Product Image */}
        <div className="relative mb-6 h-32 md:h-48 bg-white/5 rounded-2xl overflow-hidden">
          <motion.img
            src={deal.image}
            alt={deal.productName}
            className="w-full h-full object-contain"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent rounded-2xl"
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Product Info */}
        <h3 className="text-lg md:text-2xl font-bold text-white mb-2 line-clamp-2">{deal.productName}</h3>
        <p className="text-gray-300 text-base md:text-lg mb-4">{deal.tagline}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 text-xl mr-2">⭐</span>
          <span className="text-white font-semibold">{deal.rating}</span>
          <span className="text-gray-400 ml-2">({deal.reviewCount.toLocaleString()})</span>
        </div>

        {/* Price Section with Savings */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            {deal.originalPrice && (
              <span className="text-gray-400 line-through text-sm md:text-lg">{deal.originalPrice}</span>
            )}
            {deal.discount && (
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {deal.discount}% OFF
              </span>
            )}
          </div>
          <span className="text-xl md:text-3xl font-black text-green-400 block">
            {deal.currentPrice}
          </span>
          {deal.originalPrice && deal.discount && (
            <span className="text-green-400 text-xs md:text-sm font-semibold">
              You save: {(deal.currency === 'INR' ? '₹' : '$')}{Math.round((parseFloat(deal.originalPrice.replace(/[^\d.]/g, '')) - parseFloat(deal.currentPrice.replace(/[^\d.]/g, ''))))}
            </span>
          )}
        </div>

        {/* Countdown Timer */}
        {deal.dealEndTime && (
          <div className="mb-6">
            <CountdownTimer targetDate={deal.dealEndTime} />
          </div>
        )}

        {/* Amazon Buy Button */}
        <motion.button
          onClick={handleAmazonRedirect}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="mt-auto w-full bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-bold py-3 md:py-4 px-4 md:px-6 rounded-2xl text-base md:text-lg shadow-2xl relative overflow-hidden"
        >
          <motion.div
            className="flex items-center justify-center gap-3"
            animate={isHovered ? {
              textShadow: "0 0 10px rgba(0,0,0,0.5)"
            } : {}}
          >
            <span>🛒</span>
            <span>Buy on Amazon</span>
          </motion.div>
          
          {/* Button Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 rounded-2xl"
            animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Sales and Views Metrics */}
        <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-sm rounded-lg p-2 text-xs text-white z-20">
          <div className="flex items-center gap-2 mb-1">
            <span>👥 {deal.salesCount || 0} sold</span>
          </div>
          <div className="flex items-center gap-2">
            <span>👁️ {deal.viewCount || 0} views</span>
          </div>
        </div>

        {/* Specifications Overlay */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={showDetails ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute top-8 left-8 right-8 bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-cyan-400/50"
        >
          <h4 className="text-cyan-400 font-bold mb-3">Specifications</h4>
          <ul className="space-y-1">
            {deal.specs.map((spec: string, i: number) => (
              <li key={i} className="text-white text-sm flex items-center">
                <span className="text-cyan-400 mr-2">▸</span>
                {spec}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Wishlist Button */}
        <motion.button
          onClick={toggleWishlist}
          className={`absolute top-4 right-4 p-3 rounded-full bg-white/90 border-2 border-gray-300 text-gray-700 hover:bg-white hover:border-pink-400 hover:text-pink-500 z-30 shadow-lg`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-5 h-5" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

// Coming Soon Card Component  
function ComingSoonCard({ deal, index }: { deal: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10 opacity-75 overflow-hidden h-full flex flex-col"
    >
      {/* Coming Soon Badge */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
        Coming Soon
      </div>

      {/* Unlock Soon Floating Badge */}
      <motion.div
        animate={isHovered ? {
          y: [0, -10, 0],
          opacity: [0.7, 1, 0.7]
        } : {}}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        className="absolute -top-2 -left-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10"
      >
        🔓 Unlock Soon
      </motion.div>

      {/* Category */}
      <div className="text-xl mb-4 flex-shrink-0 text-white font-semibold">{deal.category}</div>

      {/* Product Image */}
      <div className="relative mb-4 h-40 bg-white/5 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={deal.image}
          alt={deal.productName}
          className="w-full h-full object-contain filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
      </div>

      {/* Product Info - Flexible content area */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">{deal.productName}</h4>
          <p className="text-gray-200 text-sm mb-3 line-clamp-2">{deal.tagline}</p>
        </div>

        {/* Notify Me Button - Always at bottom */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-purple-500/50 to-pink-500/50 text-white font-semibold py-3 px-4 rounded-xl border border-purple-400/30 mt-auto"
        >
          <span className="flex items-center justify-center gap-2">
            <span>🔔</span>
            <span>Notify Me</span>
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}

// Skeleton Loading Components
function SkeletonFeaturedCard() {
  return (
    <div className="skeleton-card p-4 md:p-8 h-[500px] md:h-[600px]">
      {/* Top badges skeleton */}
      <div className="flex justify-between items-start mb-6">
        <div className="skeleton-circle w-10 h-10 md:w-12 md:h-12"></div>
        <div className="skeleton w-16 h-6 md:w-20 md:h-8"></div>
      </div>
      
      {/* Category */}
      <div className="skeleton-text w-20 md:w-24 mb-4"></div>
      
      {/* Product image skeleton */}
      <div className="skeleton h-32 md:h-48 rounded-2xl mb-6"></div>
      
      {/* Product info */}
      <div className="skeleton-text-lg w-3/4 mb-2"></div>
      <div className="skeleton-text w-1/2 mb-4"></div>
      
      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="skeleton-circle w-5 h-5 md:w-6 md:h-6 mr-2"></div>
        <div className="skeleton-text w-14 md:w-16"></div>
      </div>
      
      {/* Price section */}
      <div className="mb-6">
        <div className="skeleton-text w-28 md:w-32 mb-2"></div>
        <div className="skeleton-text-lg w-20 md:w-24"></div>
      </div>
      
      {/* Timer skeleton */}
      <div className="skeleton rounded-xl h-16 md:h-20 mb-6"></div>
      
      {/* Button */}
      <div className="skeleton-button w-full"></div>
    </div>
  );
}

function SkeletonComingSoonCard() {
  return (
    <div className="skeleton-card p-4 md:p-6 h-[350px] md:h-[400px] flex flex-col">
      {/* Badge */}
      <div className="skeleton w-16 md:w-20 h-5 md:h-6 mb-4 self-end"></div>
      
      {/* Category */}
      <div className="skeleton-text w-20 md:w-24 mb-4"></div>
      
      {/* Image */}
      <div className="skeleton h-32 md:h-40 rounded-xl mb-4 flex-shrink-0"></div>
      
      {/* Content */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <div className="skeleton-text w-3/4 mb-2"></div>
          <div className="skeleton-text-sm w-1/2 mb-3"></div>
          <div className="skeleton-text w-14 md:w-16 mb-4"></div>
        </div>
        
        {/* Button */}
        <div className="skeleton-button w-full mt-auto"></div>
      </div>
    </div>
  );
}
