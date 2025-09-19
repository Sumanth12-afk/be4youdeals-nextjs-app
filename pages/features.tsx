import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturesPage() {
  const features = [
    {
      id: "infinite-scroll",
      title: "Infinite Scroll",
      description: "Seamless browsing experience with automatic content loading as you scroll",
      icon: "♾️",
      demo: "/laptops/page/1",
      status: "completed"
    },
    {
      id: "advanced-filters",
      title: "Advanced Filters",
      description: "Smart filtering by price, brand, rating, and availability with real-time results",
      icon: "🔍",
      demo: "/laptops/page/1",
      status: "completed"
    },
    {
      id: "image-gallery",
      title: "Image Gallery",
      description: "Interactive product gallery with zoom, fullscreen, and smooth navigation",
      icon: "🖼️",
      demo: "/laptops/page/1",
      status: "completed"
    },
    {
      id: "image-optimization",
      title: "Image Optimization",
      description: "Lazy loading, blur placeholders, and performance-optimized image delivery",
      icon: "⚡",
      demo: "/laptops/page/1",
      status: "completed"
    },
    {
      id: "progress-indicators",
      title: "Progress Indicators",
      description: "Beautiful loading states, progress bars, and step indicators for better UX",
      icon: "📊",
      demo: "/laptops/page/1",
      status: "completed"
    },
    {
      id: "product-comparison",
      title: "Product Comparison",
      description: "Side-by-side comparison tool for up to 3 products with detailed analysis",
      icon: "⚖️",
      demo: "/laptops/page/1",
      status: "completed"
    }
  ];

  return (
    <>
      <Head>
        <title>New Features - Vibrics Deals</title>
        <meta name="description" content="Explore our new features including infinite scroll, advanced filters, image galleries, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Vibrics Deals Logo.png" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl floating-3d"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full opacity-15 blur-3xl floating-3d" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-500 rounded-full opacity-8 blur-3xl floating-3d" style={{animationDelay: '4s'}}></div>
        </div>

        <main className="relative z-10 px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              🚀 New <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Features</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              Discover the latest enhancements to your shopping experience
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-green-400 font-semibold mr-2">✅</span>
              <span className="text-white">All 6 features completed and ready to use</span>
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 100, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl group overflow-hidden relative"
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {feature.status}
                    </span>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <Link href={feature.demo}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-2xl shadow-2xl transition-all duration-300"
                      >
                        View Demo
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Implementation Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20"
            >
              <h2 className="text-3xl font-bold text-cyan-400 mb-6">📋 Implementation Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Components Created</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>InfiniteScrollProducts.tsx</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>AdvancedFilters.tsx</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>ProductImageGallery.tsx</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>OptimizedImage.tsx</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>ProgressIndicator.tsx</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span>ProductComparison.tsx</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Demo Pages</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>/laptops/infinite</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>/laptops/filtered</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>/laptops/gallery-demo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>/laptops/optimized-demo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>/laptops/progress-demo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>/laptops/compare-demo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-12 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Explore?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/laptops/infinite">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-2xl shadow-2xl transition-all duration-300"
                  >
                    Start with Infinite Scroll
                  </motion.button>
                </Link>
                <Link href="/laptops/compare-demo">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-8 rounded-2xl hover:bg-white/20 transition-all duration-300"
                  >
                    Try Product Comparison
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}
