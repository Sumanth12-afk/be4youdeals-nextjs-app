const fs = require('fs');
const path = require('path');

// Function to format product data for India
function formatProduct(product, index) {
  return {
    id: index + 1,
    title: product.title,
    price: product.price.replace('$', '₹').replace(/(\d+)/, (match, num) => {
      // Convert USD to INR (approximate rate: 1 USD = 83 INR)
      const usdPrice = parseFloat(num);
      const inrPrice = Math.round(usdPrice * 83);
      return inrPrice.toString();
    }),
    rating: product.rating,
    reviewCount: product.reviewCount || "0",
    image: product.image || product.imageLink,
    link: product.link || product.productLink,
    specs: product.specs || {},
    // Add India-specific fields
    productLink: product.productLink || product.link,
    imageLink: product.imageLink || product.image,
    asin: product.asin || "",
    availability: product.availability || "In Stock"
  };
}

// Categories to process
const categories = [
  { name: 'laptops', file: 'all-laptops-data.js', exportName: 'allLaptops' },
  { name: 'headphones', file: 'all-headphones-data.js', exportName: 'allHeadphonesExtended' },
  { name: 'fashion', file: 'all-fashion-data.js', exportName: 'allFashionExtended' },
  { name: 'mobiles', file: 'all-mobiles-data.js', exportName: 'allMobilesExtended' },
  { name: 'gadgets', file: 'all-gadgets-data.js', exportName: 'allGadgetsExtended' },
  { name: 'home-essentials', file: 'all-home-essentials-data.js', exportName: 'allHomeessentialsExtended' },
  { name: 'self-care', file: 'all-self-care-data.js', exportName: 'allSelfcareExtended' },
  { name: 'stationery', file: 'all-stationery-data.js', exportName: 'allStationeryExtended' }
];

categories.forEach(category => {
  try {
    // Read the US data file
    const usDataPath = path.join(__dirname, '..', category.file);
    const usDataContent = fs.readFileSync(usDataPath, 'utf8');
    
    // Extract the data using eval (since it's a JS file with exports)
    const moduleExports = {};
    eval(usDataContent.replace(/export /g, 'moduleExports.'));
    
    const usProducts = moduleExports[category.exportName] || [];
    
    // Format products for India (limit to 150 for consistency)
    const indiaProducts = usProducts.slice(0, 150).map((product, index) => formatProduct(product, index));
    
    // Create India data content
    const dataContent = `// India-specific ${category.name} data - ${indiaProducts.length} products
export const ${category.exportName.replace('Extended', 'India')} = ${JSON.stringify(indiaProducts, null, 2)};

// Export with original name for compatibility
export const ${category.exportName} = ${category.exportName.replace('Extended', 'India')};
`;

    // Write India data file
    const outputPath = path.join(__dirname, '..', `all-${category.name}-india-data.js`);
    fs.writeFileSync(outputPath, dataContent);
    
    console.log(`✅ Generated ${category.name} India data: ${indiaProducts.length} products`);
  } catch (error) {
    console.error(`❌ Error processing ${category.name}:`, error.message);
  }
});

console.log('🎉 India data generation complete!');