import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentDeal, setCurrentDeal] = useState(0);

  const scrollToCategories = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Rotating deals for ticker
  const deals = [
    "MacBook Air – $849",
    "Boat Headphones – $34.99", 
    "Diffuser Set – $17.99",
    "Notebook Pack – $4.99",
    "iPhone 15 Pro – $999",
    "Gaming Mouse – $24.99"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % deals.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [deals.length]);

  // Category data with proper links
  const categories = [
    {
      id: 1,
      name: "Laptops",
      emoji: "💻",
      tagline: "Smart picks under $999",
      badge: "Hot",
      badgeType: "badge-hot",
      link: "/laptops",
      available: true
    },
    {
      id: 2,
      name: "Mobiles", 
      emoji: "📱",
      tagline: "Latest tech, best prices",
      badge: "$199+",
      badgeType: "badge-price",
      link: "/mobiles",
      available: true
    },
    {
      id: 3,
      name: "Headphones",
      emoji: "🎧", 
      tagline: "Premium sound quality",
      badge: "Trending",
      badgeType: "badge-trending",
      link: "/headphones",
      available: true
    },
    {
      id: 4,
      name: "Home Essentials",
      emoji: "🛋️",
      tagline: "Comfort meets style",
      badge: "$29.99",
      badgeType: "badge-price",
      link: "#",
      available: false
    },
    {
      id: 5,
      name: "Gadgets",
      emoji: "🔌",
      tagline: "Tech that amazes",
      badge: "Hot",
      badgeType: "badge-hot", 
      link: "#",
      available: false
    },
    {
      id: 6,
      name: "Self-Care",
      emoji: "🧴",
      tagline: "Wellness essentials",
      badge: "$12.99",
      badgeType: "badge-price",
      link: "#",
      available: false
    },
    {
      id: 7,
      name: "Fashion",
      emoji: "👗",
      tagline: "Style that speaks",
      badge: "Trending", 
      badgeType: "badge-trending",
      link: "#",
      available: false
    },
    {
      id: 8,
      name: "Stationery",
      emoji: "📝",
      tagline: "Creativity unleashed", 
      badge: "$4.99",
      badgeType: "badge-price",
      link: "#",
      available: false
    }
  ];

  return (
    <div className="min-h-screen dark-storefront-gradient relative overflow-hidden pt-24">
      {/* Floating Deal Ticker */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed top-20 left-0 right-0 z-30 pointer-events-none"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-2 overflow-hidden">
          <div className="deal-ticker whitespace-nowrap text-sm font-semibold">
            🔥 Hot Deals: {deals.join(" • ")} • 🔥 Hot Deals: {deals.join(" • ")}
          </div>
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl floating-3d"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full opacity-15 blur-3xl floating-3d" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500 rounded-full opacity-8 blur-3xl floating-3d" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-16 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white mb-8">
              <span className="block">Curated Everyday Deals</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Across What You Love Most
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              From laptops and gadgets to fashion and self-care — all in one place.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link href="/deals">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                  Explore Deals
                </span>
              </motion.button>
            </Link>
            
            <motion.button 
              onClick={scrollToCategories}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-opacity-20 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Browse Categories
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced Scroll Indicator with Down Arrow */}
          <motion.div 
            className="cursor-pointer group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToCategories}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="mr-2 text-sm font-medium">Discover Categories</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              {/* Large Down Arrow Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 group-hover:border-cyan-400"
              >
                <svg className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D Categories Grid */}
      <motion.section 
        id="categories" 
        className="relative py-24 px-6 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Shop by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Category</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover handpicked deals across all your favorite categories. From cutting-edge tech to everyday essentials.
            </p>
          </motion.div>

          {/* 3D Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 5, 
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                {category.available ? (
                  <Link href={category.link}>
                    <CategoryCard category={category} />
                  </Link>
                ) : (
                  <div className="opacity-75">
                    <CategoryCard category={category} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-sm">
              More categories coming soon! • Follow us for updates on new deals
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

// Category Card Component
function CategoryCard({ category }: { category: any }) {
  return (
    <div className="category-card-3d rounded-3xl p-8 text-center h-full relative overflow-hidden">
      {/* Badge */}
      <div className={`absolute top-4 right-4 ${category.badgeType} text-white text-xs font-bold px-3 py-1 rounded-full`}>
        {category.badge}
      </div>
      
      {/* Category Icon */}
      <div className="mb-6">
        <div className="text-6xl category-icon-glow transform group-hover:scale-110 transition-transform duration-300">
          {category.emoji}
        </div>
      </div>
      
      {/* Category Info */}
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
        {category.name}
      </h3>
      
      <p className="text-gray-400 text-sm mb-6 group-hover:text-gray-300 transition-colors">
        {category.tagline}
      </p>
      
      {/* Action Indicator */}
      <div className="flex items-center justify-center text-gray-500 group-hover:text-indigo-400 transition-colors">
        {category.available ? (
          <>
            <span className="text-sm font-medium mr-2">Explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </>
        ) : (
          <span className="text-sm font-medium">Coming Soon</span>
        )}
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}