const fs = require('fs');

// Read the original JSON data
const data = JSON.parse(fs.readFileSync('indias-todays-deals.json', 'utf8'));

const processedData = data.map((product, index) => {
  // Generate realistic original price based on current price
  const currentPrice = parseFloat(product.price.replace(/[^\d.]/g, ''));
  const discountPercent = product.discount ? parseInt(product.discount.replace('%', '')) : Math.floor(Math.random() * 40) + 10;
  const originalPrice = currentPrice / (1 - discountPercent / 100);
  
  // Generate random sales and view counts
  const salesCount = Math.floor(Math.random() * 500) + 50;
  const viewCount = Math.floor(Math.random() * 2000) + 100;
  
  return {
    id: index + 1,
    productName: product.title,
    tagline: product.title.substring(0, 60) + '...',
    price: product.price,
    originalPrice: `₹${originalPrice.toFixed(2)}`,
    currentPrice: product.price,
    discount: discountPercent,
    rating: parseFloat(product.rating) || 4.0,
    reviewCount: `(${Math.floor(Math.random() * 1000) + 50})`,
    image: product.imageLink,
    link: product.productLink,
    category: '🛍️ Today\'s Deals',
    badge: '🔥 Hot Deal',
    badgeColor: 'from-red-500 to-orange-500',
    specs: ['Limited Time Offer', 'Best Seller', 'Prime Eligible'],
    available: product.availability !== 'Out of Stock',
    salesCount: salesCount,
    viewCount: viewCount
  };
});

const exportContent = `// India Today's Deals - Processed with affiliate links
export const indiaTodaysDeals = ${JSON.stringify(processedData, null, 2)};
`;

fs.writeFileSync('india-todays-deals-data.js', exportContent);
console.log(`Processed ${processedData.length} India products with correct structure`);
