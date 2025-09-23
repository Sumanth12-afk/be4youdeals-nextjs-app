import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

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
    // Simulate loading for categories
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Scroll progress and back to top button
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ripple Button Component
  const RippleButton = ({ children, className, onClick, ...props }: any) => {
    const [ripples, setRipples] = useState<Array<{x: number, y: number, size: number, id: number}>>([]);

    const addRipple = (e: any) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      const newRipple = {
        x,
        y,
        size,
        id: Date.now()
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    };

    return (
      <motion.button
        className={`relative overflow-hidden ${className}`}
        onClick={(e) => {
          addRipple(e);
          onClick?.(e);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
        {ripples.map(ripple => (
          <motion.span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        ))}
      </motion.button>
    );
  };

  // Category data with proper links and popularity metrics
  const categories = [
    {
      id: 1,
      name: "Laptops",
      emoji: "💻",
      tagline: "Smart picks under $999",
      badge: "Hot",
      badgeType: "badge-hot",
      link: "/laptops",
      available: true,
      popularity: 89,
      stock: 12,
      totalViews: 2340,
      dealCount: 25,
      previewImage: "/laptop.png",
      hoverText: "MacBook Air, Dell XPS, HP Pavilion deals"
    },
    {
      id: 2,
      name: "Mobiles", 
      emoji: "📱",
      tagline: "Latest tech at your fingertips",
      badge: "New",
      badgeType: "badge-new",
      link: "/mobiles",
      available: true,
      popularity: 95,
      stock: 150,
      totalViews: 12500,
      dealCount: 45,
      previewImage: "/mobiles.png",
      hoverText: "iPhone 15, Samsung Galaxy, OnePlus deals"
    },
    {
      id: 3,
      name: "Headphones",
      emoji: "🎧", 
      tagline: "Premium sound quality",
      badge: "Trending",
      badgeType: "badge-trending",
      link: "/headphones",
      available: true,
      popularity: 94,
      stock: 3,
      totalViews: 3120,
      dealCount: 32,
      previewImage: "/headphones.png",
      hoverText: "Boat, Sony, JBL wireless headphones"
    },
    {
      id: 4,
      name: "Home Essentials",
      emoji: "🛋️",
      tagline: "Smart essentials for your home",
      badge: "Hot",
      badgeType: "badge-hot",
      link: "/home-essentials",
      available: true,
      popularity: 88,
      stock: 75,
      totalViews: 8900,
      dealCount: 38,
      previewImage: "/household.png",
      hoverText: "Diffusers, notebooks, home decor"
    },
    {
      id: 5,
      name: "Gadgets",
      emoji: "🔌",
      tagline: "Next-gen gadgets on the way",
      badge: "Hot",
      badgeType: "badge-hot", 
      link: "#",
      available: false,
      popularity: 0,
      stock: 0,
      totalViews: 0,
      dealCount: 0,
      previewImage: "/laptop.png",
      hoverText: "Gaming mice, keyboards, smart devices"
    },
    {
      id: 6,
      name: "Self-Care",
      emoji: "🧴",
      tagline: "Wellness made simple",
      badge: "Trending",
      badgeType: "badge-trending",
      link: "/self-care",
      available: true,
      popularity: 92,
      stock: 60,
      totalViews: 10200,
      dealCount: 42,
      previewImage: "/skincare.jpg",
      hoverText: "Skincare, wellness, beauty products"
    },
    {
      id: 7,
      name: "Fashion",
      emoji: "👗",
      tagline: "Style upgrade for everyone",
      badge: "Hot", 
      badgeType: "badge-hot",
      link: "/fashion",
      available: true,
      popularity: 90,
      stock: 120,
      totalViews: 15600,
      dealCount: 55,
      previewImage: "/fashion.png",
      hoverText: "Clothing, accessories, style essentials"
    },
    {
      id: 8,
      name: "Stationery",
      emoji: "📝",
      tagline: "Creativity gets a new look", 
      badge: "New",
      badgeType: "badge-new",
      link: "/stationery",
      available: true,
      popularity: 85,
      stock: 200,
      totalViews: 6800,
      dealCount: 28,
      previewImage: "/household.png",
      hoverText: "Notebooks, pens, office supplies"
    }
  ];

  return (
    <>
      <Head>
        <title>Vibrics Deals - Curated Everyday Deals</title>
        <meta name="description" content="Your trusted destination for the best deals on tech and home essentials. Discover quality products at unbeatable prices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Vibrics Deals Logo.png?v=2" />
      </Head>
      <div className="min-h-screen dark-storefront-gradient relative overflow-hidden pt-24">
      {/* Deal Ticker Below Navbar */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed top-16 left-0 right-0 z-30 pointer-events-none"
      >
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white py-3 overflow-hidden shadow-lg">
          <div className="deal-ticker whitespace-nowrap text-sm font-bold flex items-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="mr-3"
            >
              <Image 
                src="/Vibrics Deals Logo.png?v=2" 
                alt="Vibrics Deals" 
                width={28}
                height={28}
                className="object-contain drop-shadow-sm"
              />
            </motion.div>
            <span className="text-yellow-300 mr-2">⚡ FLASH SALE:</span>
            {deals.join(" • ")} • 
            <span className="text-yellow-300 ml-2">⚡ FLASH SALE:</span>
            {deals.join(" • ")}
          </div>
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl floating-3d"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full opacity-15 blur-3xl floating-3d" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500 rounded-full opacity-8 blur-3xl floating-3d" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Logo Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.1, 
            scale: 1,
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 3
          }}
          className="absolute top-20 right-20 z-0"
        >
          <Image 
            src="/Vibrics Deals Logo.png?v=2" 
            alt="Vibrics Deals" 
            width={140}
            height={140}
            className="object-contain opacity-20 drop-shadow-lg"
          />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-16 z-20">
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
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
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

        {/* Geometric Shapes - Optimized */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute border border-indigo-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${15 + Math.random() * 25}px`,
                height: `${15 + Math.random() * 25}px`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              }}
              animate={{
                rotate: [0, 180],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
            />
          ))}
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-30">
          {/* Logo with Enhanced Animations - Always Visible */}
          <motion.div
            initial={{ opacity: 0.8, y: 30, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.3
            }}
            whileHover={{ 
              scale: 1.05, 
              transition: { duration: 0.2 } 
            }}
            className="mb-8 cursor-pointer"
          >
            <motion.div
              whileHover={{ 
                filter: "drop-shadow(0 0 20px rgba(74, 222, 128, 0.5))",
                transition: { duration: 0.3 }
              }}
            >
              <Image 
                src="/Vibrics Deals Logo.png?v=2" 
                alt="Vibrics Deals" 
                width={280}
                height={280}
                className="object-contain mx-auto transition-all duration-300 drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Main Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mb-12 relative z-40"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white mb-8">
              <span className="block">Vibrics Deals</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Your Deal Hunting Partner
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We hunt down the best deals so you don't have to. Save big on tech, fashion, and lifestyle essentials with our expert-curated selections.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 relative z-40"
          >
            <Link href="/deals">
              <RippleButton className="cta-button-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl">
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                  Hunt Deals Now
                </span>
              </RippleButton>
            </Link>
            
            <RippleButton 
              onClick={scrollToCategories}
              className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-opacity-20 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Shop by Category
              </span>
            </RippleButton>
          </motion.div>

          {/* Enhanced Scroll Indicator with Down Arrow */}
          <motion.div 
            className="cursor-pointer group relative z-40"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToCategories}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="mr-2 text-sm font-medium">Find Your Deals</span>
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

      {/* Deal of the Day Section */}
      <motion.section 
        className="py-16 px-6 relative z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Deal of the Day
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't miss out on today's exclusive offers. Limited time deals that won't last long!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Deal 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 hover:border-indigo-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-43% OFF</span>
                <span className="text-yellow-400 text-sm font-medium">⚡ Limited Time</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Apple MacBook Air 2017</h3>
              <p className="text-gray-300 text-sm mb-4">13-inch, 8GB RAM, 128GB SSD Storage (Renewed)</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-green-400">$171.14</span>
                  <span className="text-gray-400 line-through ml-2">$299.99</span>
                </div>
                <a 
                  href="https://www.amazon.com/Apple-Macbook-13-inch-Storage-English/dp/B0751N2Y78/ref=sr_1_41?crid=PJACNCTYR2EC&dib=eyJ2IjoiMSJ9.zyWsNH1P7plERDzvCrOhNEXZZ3TEjJfetyk5xVlxdtyJncz-nfWl1OSWKf10KEvMlxKbYoFCppijjprcxV-S7MTqxUFjiVQNT98MDxD3MELcMMDgjSO2FF1FTF5UB1StJqEK3QLro7YQE68Gyh9zhuAwjMZhNURhZiAQ14kbJvQcLAzLcHAjMu6yx2aWN0U5_jnGDnXels9IiTElcTAAzzxotgHV6PeMJOzBcP_bqK0.SA0lB7xqh25FKoqsLzyHwK8U8ipaa6Vk4rdDNoonHCw&dib_tag=se&keywords=laptops&qid=1755441242&sprefix=%2Caps%2C277&sr=8-41&xpid=jzq0nXnpErVmH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform inline-block whitespace-nowrap"
                >
                  Shop Now
                </a>
              </div>
            </motion.div>

            {/* Featured Deal 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">-31% OFF</span>
                <span className="text-yellow-400 text-sm font-medium">🔥 Hot Deal</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2025 Gaming Laptop</h3>
              <p className="text-gray-300 text-sm mb-4">AMD Ryzen 7, 32GB DDR4, 1TB SSD, 16" FHD Display</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-green-400">$549.99</span>
                  <span className="text-gray-400 line-through ml-2">$799.99</span>
                </div>
                <a 
                  href="https://www.amazon.com/Computer-Processor-Display-Keyboard-Business/dp/B0F28NMPMP/ref=sr_1_26?crid=PJACNCTYR2EC&dib=eyJ2IjoiMSJ9.LVhSNHxwMBmxjHUO-vbRV7x6IGZkxwujg_oh6UxGBSBdz9XFRT8VhXiuJylvtHNLXWOPrBdnWf3K2hvHCi5qrjmqog1tQBc75FdiLaCpTjcM39FeBy0boQLtUZzZkWbwTDYQJUHldeuQojwFYFJXb-0LiBAEQziaO6K3HuXTfxJ2tpnBCh4z8P2JbqgGDu144pvlFqdaAyS99ZQ5XeE5120i_dMZvEjUX7aexoc6So0.DNiMG_zM_OCH7A6-VDZ4UHbtd2iqjyutdb7qOek-zJ4&dib_tag=se&keywords=laptops&qid=1755440646&sprefix=%2Caps%2C277&sr=8-26&xpid=jzq0nXnpErVmH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform inline-block whitespace-nowrap"
                >
                  Shop Now
                </a>
              </div>
            </motion.div>

            {/* Featured Deal 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">-20% OFF</span>
                <span className="text-yellow-400 text-sm font-medium">💎 Steal Deal</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ASUS ROG Strix G16</h3>
              <p className="text-gray-300 text-sm mb-4">Gaming Laptop, RTX 4060, Intel i9-14900HX, 16GB DDR5</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-green-400">$1,598.99</span>
                  <span className="text-gray-400 line-through ml-2">$1,999.99</span>
                </div>
                <a 
                  href="https://www.amazon.com/ASUS-Gaming-Laptop-Nebula-Display/dp/B0CRCYJ8YV/ref=sr_1_46?crid=PJACNCTYR2EC&dib=eyJ2IjoiMSJ9.zyWsNH1P7plERDzvCrOhNEXZZ3TEjJfetyk5xVlxdtyJncz-nfWl1OSWKf10KEvMlxKbYoFCppijjprcxV-S7MTqxUFjiVQNT98MDxD3MELcMMDgjSO2FF1FTF5UB1StJqEK3QLro7YQE68Gyh9zhuAwjMZhNURhZiAQ14kbJvQcLAzLcHAjMu6yx2aWN0U5_jnGDnXels9IiTElcTAAzzxotgHV6PeMJOzBcP_bqK0.SA0lB7xqh25FKoqsLzyHwK8U8ipaa6Vk4rdDNoonHCw&dib_tag=se&keywords=laptops&qid=1755441242&sprefix=%2Caps%2C277&sr=8-46&xpid=jzq0nXnpErVmH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform inline-block whitespace-nowrap"
                >
                  Shop Now
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/deals">
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
                View All Deals
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* 3D Categories Grid */}
      <motion.section 
        id="categories" 
        className="relative py-24 px-6 z-20"
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
            {/* Logo in Categories Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                y: 0 
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1,
                type: "spring",
                stiffness: 80,
                damping: 12
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="mb-8 cursor-pointer"
            >
              <motion.div
                whileHover={{ 
                  filter: "drop-shadow(0 0 15px rgba(99, 102, 241, 0.4))",
                  transition: { duration: 0.3 }
                }}
              >
                <Image 
                  src="/Vibrics Deals Logo.png?v=2" 
                  alt="Vibrics Deals" 
                  width={160}
                  height={160}
                  className="object-contain mx-auto transition-all duration-300 drop-shadow-xl"
                />
              </motion.div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Deal <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've organized the best deals into categories that matter to you. Find exactly what you're looking for with massive savings.
            </p>
          </motion.div>

          {/* 3D Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {isLoading ? (
              // Skeleton Loading for Categories
              Array.from({ length: 8 }).map((_, index) => (
                <SkeletonCategoryCard key={index} index={index} />
              ))
            ) : (
              categories.map((category, index) => (
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
                  className="group cursor-pointer h-full"
                >
                  {category.available ? (
                    <Link href={category.link} className="block h-full">
                      <CategoryCard category={category} />
                    </Link>
                  ) : (
                    <ComingSoonCard 
                      category={category}
                      onToast={() => {
                        toast('🚧 Coming Soon!', {
                          icon: '🔜',
                          style: {
                            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                            color: 'white',
                            borderRadius: '16px',
                            padding: '12px 20px',
                            fontSize: '14px',
                            fontWeight: '600',
                            boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)'
                          },
                          duration: 3000,
                          position: 'bottom-center'
                        });
                      }}
                    />
                  )}
                </motion.div>
              ))
            )}
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

      {/* Upcoming Features Section */}
      <motion.section 
        className="py-16 px-6 relative z-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Coming Soon
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exciting new features and categories are on the way. Stay tuned for the ultimate deal hunting experience!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Search Feature */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">🔍 Smart Search</span>
                <span className="text-yellow-400 text-sm font-medium">🚀 Coming Soon</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered Search</h3>
              <p className="text-gray-300 text-sm mb-4">Find exactly what you're looking for with our intelligent search that understands your needs and preferences.</p>
              <div className="flex items-center text-purple-400 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Advanced filtering & recommendations
              </div>
            </motion.div>

            {/* Price Alerts Feature */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">🔔 Price Alerts</span>
                <span className="text-yellow-400 text-sm font-medium">📱 Mobile Ready</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Never Miss a Deal</h3>
              <p className="text-gray-300 text-sm mb-4">Set price alerts for your favorite products and get notified instantly when prices drop to your target.</p>
              <div className="flex items-center text-green-400 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6z" />
                </svg>
                Real-time notifications & tracking
              </div>
            </motion.div>

            {/* Wishlist Feature */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">❤️ Wishlist</span>
                <span className="text-yellow-400 text-sm font-medium">✨ Enhanced</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Smart Wishlist</h3>
              <p className="text-gray-300 text-sm mb-4">Save your favorite deals and get personalized recommendations based on your interests and browsing history.</p>
              <div className="flex items-center text-blue-400 text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Personalized recommendations
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-sm mb-4">
              Want to be the first to know when these features launch?
            </p>
            <button 
              onClick={() => {
                toast('🚀 Coming Soon!', {
                  icon: '🔜',
                  style: {
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                    color: 'white',
                    borderRadius: '16px',
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)'
                  },
                  duration: 3000,
                  position: 'bottom-center'
                });
              }}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white px-8 py-3 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Get Early Access
            </button>
          </motion.div>
        </div>
      </motion.section>
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
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </>
  );
}

// Coming Soon Card Component
function ComingSoonCard({ category, onToast }: { category: any; onToast: () => void }) {
  return (
    <div 
      className="opacity-75 cursor-pointer h-full"
      onClick={onToast}
    >
      <CategoryCard category={category} />
    </div>
  );
}

// Enhanced Category Card Component with Hover Effects and Flip Animations
function CategoryCard({ category }: { category: any }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="category-card-3d rounded-3xl p-8 text-center h-full relative overflow-hidden flex flex-col justify-between cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        z: 50
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Badge - Only show for available categories, not for Coming Soon */}
      {/* Removed from top-right, will be shown below tagline */}
      
      {/* Popularity Meter - Show for all cards to fill empty space */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-2">
          {category.available && category.popularity > 0 ? (
            <>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-green-400 font-medium">🔥 {category.popularity}%</span>
              </div>
              <div className="w-16 h-1 bg-gray-600 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${category.popularity}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-blue-400 font-medium">⏳ Coming</span>
              </div>
              <div className="w-16 h-1 bg-gray-600 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Top Section */}
      <div className="flex-1 flex flex-col items-center justify-start min-h-[200px]">
        {/* Icon Section with Hover Preview */}
        <div className="mb-6 flex items-center justify-center relative">
          <motion.div 
            className="text-6xl category-icon-glow transform transition-transform duration-300"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          >
            {category.emoji}
          </motion.div>
          
          {/* Hover Preview Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              scale: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="relative">
              <Image
                src={category.previewImage}
                alt={category.name}
                width={80}
                height={80}
                className="object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {category.hoverText}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Title and Tagline */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {category.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
          {category.tagline}
        </p>
        
        {/* Badge below tagline for available categories */}
        {category.available && (
          <div className={`${category.badgeType} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
            {category.badge}
          </div>
        )}
      </div>
      
      {/* Bottom Section */}
      <div className="flex flex-col justify-end min-h-[120px]">
        {/* Analytics Stats - Only for available categories */}
        {category.available && (
          <div className="mb-6 space-y-2">
            <div className="flex justify-between text-xs text-gray-400">
              <span>{category.dealCount} deals</span>
              <span>{category.totalViews.toLocaleString()} views</span>
            </div>
            
            {/* Deal Activity Bar */}
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.min((category.totalViews / 3500) * 100, 100)}%` }}
                transition={{ duration: 2, delay: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        )}
        
        {/* Useful content for Coming Soon cards */}
        {/* Removed random text, keeping only Coming Soon */}
        
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
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
}

// Skeleton Category Card Component
function SkeletonCategoryCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      className="skeleton-card p-8 text-center h-full relative overflow-hidden"
    >
      {/* Badge skeleton */}
      <div className="absolute top-4 right-4 skeleton w-16 h-6 rounded-full"></div>
      
      {/* Popularity meter skeleton */}
      <div className="absolute top-4 left-4">
        <div className="skeleton rounded-lg w-20 h-12"></div>
      </div>
      
      {/* Category Icon skeleton */}
      <div className="mb-6 flex justify-center">
        <div className="skeleton-circle w-16 h-16"></div>
      </div>
      
      {/* Category Info skeleton */}
      <div className="skeleton-text-lg w-3/4 mx-auto mb-3"></div>
      <div className="skeleton-text w-1/2 mx-auto mb-6"></div>
      
      {/* Analytics Stats skeleton */}
      <div className="mb-6 space-y-2">
        <div className="flex justify-between">
          <div className="skeleton-text-sm w-12"></div>
          <div className="skeleton-text-sm w-16"></div>
        </div>
        <div className="skeleton h-1 w-full rounded-full"></div>
      </div>
      
      {/* Action Indicator skeleton */}
      <div className="flex items-center justify-center">
        <div className="skeleton-text w-16"></div>
      </div>
    </motion.div>
  );
}
