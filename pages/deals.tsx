import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function DealsWall() {

  // Real product data
  const featuredDeals = [
    {
      id: 1,
      category: "💻 Laptops",
      productName: "HP 15, Intel Core i5-1335U",
      tagline: "Performance meets portability",
      originalPrice: null,
      currentPrice: "₹55,990",
      currency: "INR",
      rating: 3.6,
      reviewCount: 20,
      image: "/laptop.png",
      amazonLink: "https://www.amazon.in/HP-i5-1335U-Anti-Glare-Micro-Edge-fd0577TU/dp/B0F4R6H3NB/",
      specs: ["Intel Core i5-1335U", "8GB RAM", "512GB SSD", "15.6″ Display"],
      available: true,
      badge: "🔥 Hot Deal",
      badgeColor: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      category: "🎧 Headphones", 
      productName: "JBL Tune 510BT",
      tagline: "40H battery, ultra-comfy",
      originalPrice: "$49.95",
      currentPrice: "$16.65",
      currency: "USD",
      rating: 4.5,
      reviewCount: 78900,
      image: "/headphones.png",
      amazonLink: "https://www.amazon.com/JBL-Tune-510BT-Ear-Headphones/dp/B092CP8ZH4/",
      specs: ["40H Battery Life", "Bluetooth 5.0", "JBL Pure Bass", "Foldable Design"],
      available: true,
      badge: "💥 67% Off",
      badgeColor: "from-green-500 to-emerald-500"
    }
  ];

  const comingSoonDeals = [
    {
      id: 3,
      category: "📱 Mobiles",
      productName: "iPhone 15 Pro",
      tagline: "Titanium. So strong. So light.",
      price: "$999",
      image: "/mobiles.png",
      available: false
    },
    {
      id: 4,
      category: "🛋️ Home Essentials", 
      productName: "Smart Aroma Diffuser",
      tagline: "Transform your space",
      price: "$29.99",
      image: "/household.png",
      available: false
    },
    {
      id: 5,
      category: "👗 Fashion",
      productName: "Premium Collection",
      tagline: "Style redefined",
      price: "$49.99",
      image: "/about-banner.png",
      available: false
    },
    {
      id: 6,
      category: "🧴 Self-Care",
      productName: "Wellness Essentials",
      tagline: "Self-care reimagined",
      price: "$24.99",
      image: "/about-banner.png", 
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
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            {/* Left: Glowing Title */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8 lg:mb-0"
            >
              <h1 className="text-6xl lg:text-8xl font-black tracking-wide text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 drop-shadow-2xl">
                  🔥 Exclusive
                </span>
                <br />
                <span className="neon-glow">Deals Wall</span>
              </h1>
              <p className="text-xl text-gray-300 font-semibold">
                Handpicked premium products, unbeatable prices
              </p>
            </motion.div>

            {/* Right: Amazon Branding */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-end"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className="text-3xl mb-2">🛒</div>
                  <p className="text-white font-bold text-lg mb-1">Powered by</p>
                  <div className="text-orange-400 font-black text-2xl tracking-wider">Amazon</div>
                  <p className="text-gray-300 text-sm">Authentic products, fast delivery</p>
                </div>
                  </div>
            </motion.div>
                </div>
      </div>

        {/* Featured Products Showcase */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {featuredDeals.map((deal, index) => (
              <FeaturedDealCard key={deal.id} deal={deal} index={index} />
          ))}
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
          <h2 className="text-4xl font-black text-white text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Coming Soon
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {comingSoonDeals.map((deal, index) => (
              <ComingSoonCard key={deal.id} deal={deal} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Featured Deal Card Component
function FeaturedDealCard({ deal, index }: { deal: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleAmazonRedirect = () => {
    window.open(deal.amazonLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateY: index % 2 === 0 ? -15 : 15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative perspective-1000"
    >
      <motion.div
        whileHover={{ 
          scale: 1.05,
          rotateY: index % 2 === 0 ? 5 : -5,
          rotateX: 3,
          transition: { duration: 0.4 }
        }}
        onHoverStart={() => {
          setIsHovered(true);
          setTimeout(() => setShowDetails(true), 200);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
          setShowDetails(false);
        }}
        className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden cursor-pointer"
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

        {/* Floating Badge */}
        <motion.div
          className={`absolute top-6 right-6 bg-gradient-to-r ${deal.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold`}
          animate={isHovered ? {
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          } : {}}
          transition={{ duration: 0.5 }}
        >
          {deal.badge}
        </motion.div>

        {/* Category */}
        <div className="text-2xl mb-4">{deal.category}</div>

        {/* Product Image */}
        <div className="relative mb-6 h-48 bg-white/5 rounded-2xl overflow-hidden">
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
        <h3 className="text-2xl font-bold text-white mb-2">{deal.productName}</h3>
        <p className="text-gray-300 text-lg mb-4">{deal.tagline}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 text-xl mr-2">⭐</span>
          <span className="text-white font-semibold">{deal.rating}</span>
          <span className="text-gray-400 ml-2">({deal.reviewCount.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="mb-6">
          {deal.originalPrice && (
            <span className="text-gray-400 line-through text-lg mr-3">{deal.originalPrice}</span>
          )}
          <motion.span
            className="text-3xl font-black text-green-400"
            animate={isHovered ? {
              scale: [1, 1.1, 1],
              textShadow: [
                "0 0 10px rgba(34, 197, 94, 0.5)",
                "0 0 20px rgba(34, 197, 94, 0.8)",
                "0 0 10px rgba(34, 197, 94, 0.5)"
              ]
            } : {}}
            transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
          >
            {deal.currentPrice}
          </motion.span>
        </div>

        {/* Amazon Buy Button */}
        <motion.button
          onClick={handleAmazonRedirect}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-bold py-4 px-6 rounded-2xl text-lg shadow-2xl relative overflow-hidden"
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

        {/* Specs Reveal Card */}
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
      className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 opacity-75 overflow-hidden h-full flex flex-col"
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
      <div className="text-xl mb-4 flex-shrink-0">{deal.category}</div>

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
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">{deal.tagline}</p>
          <p className="text-purple-400 font-bold text-lg mb-4">{deal.price}</p>
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