import Head from "next/head";
import { motion } from "framer-motion";
import { allLaptops } from "../../../all-laptops-data";
import InfiniteScrollProducts from "../../../components/InfiniteScrollProducts";
import AdvancedFilters from "../../../components/AdvancedFilters";
import ProductComparison from "../../../components/ProductComparison";
import ProgressIndicator from "../../../components/ProgressIndicator";
import { useState, useEffect } from "react";

export default function LaptopPage4() {
  const [filteredProducts, setFilteredProducts] = useState(allLaptops);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleFiltersChange = (filtered: any[]) => {
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Head>
        <title>Laptops - Vibrics Deals</title>
        <meta name="description" content="Discover the best laptop deals with massive savings. Premium laptops at unbeatable prices." />
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
            💻 Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Laptops</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Discover powerful laptops for work, gaming, and creativity at unbeatable prices
          </p>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-cyan-400 font-semibold mr-2">🚀 Enhanced Experience</span>
            <span className="text-gray-400">•</span>
            <span className="text-white ml-2">{allLaptops.length} Products Available</span>
          </div>
        </motion.div>

        {/* Advanced Filters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AdvancedFilters
            products={allLaptops}
            onFiltersChange={handleFiltersChange}
            category="laptops"
          />
        </motion.div>

        {/* Product Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <ProductComparison
            products={filteredProducts}
            category="laptops"
          />
        </motion.div>

        {/* Infinite Scroll Products */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <InfiniteScrollProducts
            products={filteredProducts}
            category="laptops"
            itemsPerPage={8}
          />
        </motion.div>
      </main>

      {/* Progress Indicator */}
      <ProgressIndicator
        isLoading={isLoading}
        message="Loading enhanced laptop experience..."
        type="spinner"
        fullScreen={true}
      />
      </div>
    </>
  );
}