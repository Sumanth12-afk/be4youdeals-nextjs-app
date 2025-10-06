const fs = require('fs');
const path = require('path');

// Template for India category pages
const createIndiaPage = (categoryName, exportName, emoji, description) => {
  const categoryPath = categoryName.toLowerCase().replace(/\s+/g, '-');
  
  // Create index.tsx
  const indexContent = `import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function India${categoryName.replace(/\s+/g, '')}Index() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to page 1
    router.replace('/in/${categoryPath}/page/1');
  }, [router]);

  return null;
}
`;

  // Create page/1.tsx
  const pageContent = `import Head from "next/head";
import { motion } from "framer-motion";
import { ${exportName} } from "../../../../all-${categoryPath}-india-data";
import InfiniteScrollProducts from "../../../../components/InfiniteScrollProducts";
import AdvancedFilters from "../../../../components/AdvancedFilters";
import ProductComparison from "../../../../components/ProductComparison";
import ProgressIndicator from "../../../../components/ProgressIndicator";
import { useState, useEffect } from "react";

export default function India${categoryName.replace(/\s+/g, '')}Page1() {
  const [filteredProducts, setFilteredProducts] = useState(${exportName});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleFiltersChange = (filtered: typeof ${exportName}) => {
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Head>
        <title>${categoryName} - Vibrics Deals India</title>
        <meta name="description" content="${description} at unbeatable prices in India. Premium ${categoryName.toLowerCase()} with INR pricing." />
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
            ${emoji} Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">${categoryName}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            ${description} at unbeatable prices in India
          </p>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-cyan-400 font-semibold mr-2">🇮🇳 India Region</span>
            <span className="text-gray-400">•</span>
            <span className="text-white ml-2">{${exportName}.length} Products Available</span>
          </div>
        </motion.div>

        {/* Advanced Filters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AdvancedFilters
            products={${exportName}}
            onFiltersChange={handleFiltersChange}
            category="${categoryPath}"
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
            category="${categoryPath}"
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
            category="${categoryPath}"
            itemsPerPage={8}
          />
        </motion.div>
      </main>
      </div>
    </>
  );
}
`;

  return { indexContent, pageContent, categoryPath };
};

// Categories to create
const categories = [
  { name: 'Laptops', export: 'allLaptopsIndia', emoji: '💻', description: 'Discover powerful laptops for work, gaming, and creativity' },
  { name: 'Mobiles', export: 'allMobilesIndia', emoji: '📱', description: 'Latest smartphones and mobile devices' },
  { name: 'Headphones', export: 'allHeadphonesIndia', emoji: '🎧', description: 'Premium audio devices and headphones' },
  { name: 'Gadgets', export: 'allGadgetsIndia', emoji: '🔧', description: 'Amazing gadgets and tech accessories' },
  { name: 'Home Essentials', export: 'allHomeessentialsIndia', emoji: '🏠', description: 'Essential home and household products' },
  { name: 'Self Care', export: 'allSelfcareIndia', emoji: '🧴', description: 'Wellness and self-care products' },
  { name: 'Fashion', export: 'allFashionIndia', emoji: '👗', description: 'Style and fashion essentials' },
  { name: 'Stationery', export: 'allStationeryIndia', emoji: '📝', description: 'Office supplies and stationery items' }
];

console.log('🚀 Creating India category pages...\n');

categories.forEach(category => {
  const { indexContent, pageContent, categoryPath } = createIndiaPage(
    category.name, 
    category.export, 
    category.emoji, 
    category.description
  );

  // Create directory structure
  const categoryDir = path.join(__dirname, '..', 'pages', 'in', categoryPath);
  const pageDir = path.join(categoryDir, 'page');
  
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  // Write index.tsx
  const indexPath = path.join(categoryDir, 'index.tsx');
  fs.writeFileSync(indexPath, indexContent);

  // Write page/1.tsx
  const pagePath = path.join(pageDir, '1.tsx');
  fs.writeFileSync(pagePath, pageContent);

  console.log(`✅ Created ${category.name} pages: /in/${categoryPath}/`);
});

console.log(`\n🎉 Successfully created ${categories.length} India category pages!`);
console.log('\nCreated pages:');
categories.forEach(category => {
  const categoryPath = category.name.toLowerCase().replace(/\s+/g, '-');
  console.log(`- /in/${categoryPath}/ (index.tsx + page/1.tsx)`);
});
