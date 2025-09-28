const fs = require('fs');

// Read the JSON data
const data = JSON.parse(fs.readFileSync('usa-todays-deals.json', 'utf8'));

const processedData = data.map((product, index) => {
  // Create direct product link using ASIN
  const directLink = product.asin ? 
    `https://www.amazon.com/dp/${product.asin}` : 
    product.productLink;
  
  // Add affiliate parameters
  const affiliateLink = directLink.includes('?') ? 
    `${directLink}&tag=beforeyou-20&linkId=b3b134c0f45e2e73d36e027f9b9495a4` :
    `${directLink}?tag=beforeyou-20&linkId=b3b134c0f45e2e73d36e027f9b9495a4`;
  
  return {
    id: index + 1,
    title: product.title,
    price: product.price,
    rating: product.rating,
    count: '(100)',
    image: product.imageLink,
    link: affiliateLink,
    productLink: affiliateLink,
    imageLink: product.imageLink,
    asin: product.asin,
    availability: product.availability || 'In Stock',
    discount: product.discount || 'Limited Time Deal',
    mrp: product.mrp || '',
    originalPrice: product.mrp || '',
    currentPrice: product.price,
    discountPercent: 20
  };
});

// Create the export file
const exportContent = `// USA Today's Deals - Processed with affiliate links
export const usaTodaysDeals = ${JSON.stringify(processedData, null, 2)};
`;

fs.writeFileSync('usa-todays-deals-data.js', exportContent);
console.log(`Processed ${processedData.length} products with affiliate links`);
