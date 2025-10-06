const fs = require('fs');
const path = require('path');

// Sample fashion data based on the GitHub commit structure
const fashionData = [
  {
    "title": "Keoouure",
    "price": "$35.",
    "rating": "5.0",
    "productLink": "https://www.amazon.com/s?k=fashion&crid=377MW7EAZ8CBH&sprefix=fashion%2Caps%2C605&ref=nb_sb_noss_1#",
    "imageLink": "https://m.media-amazon.com/images/I/611gA-i-vrL._AC_UL320_.jpg",
    "asin": "",
    "availability": ""
  },
  {
    "title": "DEARMAY",
    "price": "$15.",
    "rating": "4.4",
    "productLink": "https://www.amazon.com/DEARMAY-Bracelets-Jewelry-Stackable-Paperclip/dp/B0C6PX9HK7/ref=sr_1_2?crid=377MW7EAZ8CBH&dib=eyJ2IjoiMSJ9.NuUDuC5UUxltVnS0eL-JtmcE-UAsPttwImj2Lpu6IuzcCnyFXI1BCUHjMyQN2zXHNFVm7j2MEVIj7xyMonulcsgtn2Ql5HOCMfjbpS-aoCGV99ELpKvhFwkkzPsPbaIMrEFMLVDWeyC5EeXxiOfqkQj3Rk5iMASlM8evl7n4likzV5DkIqTBgtb6ljiKyNMS4W7gnvgCt9Gfy-2_ROgm5bUHw9rW1NwtwMu7DT2Cl2rnDd_BpUJ0gN9JWFOdrmP2QBEWFzZy7da3V5izXFBPeiiImGOKzVY-uRn6E506jnE.-AkEvC1gf0bFHOJUFswhE6FSHHxNNMj5OIZXQtv4sqc&dib_tag=se&keywords=fashion&qid=1758651284&sprefix=fashion%2Caps%2C605&sr=8-2",
    "imageLink": "https://m.media-amazon.com/images/I/61olk363CTL._AC_UL320_.jpg",
    "asin": "",
    "availability": ""
  },
  {
    "title": "SOJOS",
    "price": "$14.",
    "rating": "4.5",
    "productLink": "https://www.amazon.com/SOJOS-Sunglasses-Rectangular-SJ2202-Tortoise/dp/B09RZS3B83/ref=sr_1_3?crid=377MW7EAZ8CBH&dib=eyJ2IjoiMSJ9.NuUDuC5UUxltVnS0eL-JtmcE-UAsPttwImj2Lpu6IuzcCnyFXI1BCUHjMyQN2zXHNFVm7j2MEVIj7xyMonulcsgtn2Ql5HOCMfjbpS-aoCGV99ELpKvhFwkkzPsPbaIMrEFMLVDWeyC5EeXxiOfqkQj3Rk5iMASlM8evl7n4likzV5DkIqTBgtb6ljiKyNMS4W7gnvgCt9Gfy-2_ROgm5bUHw9rW1NwtwMu7DT2Cl2rnDd_BpUJ0gN9JWFOdrmP2QBEWFzZy7da3V5izXFBPeiiImGOKzVY-uRn6E506jnE.-AkEvC1gf0bFHOJUFswhE6FSHHxNNMj5OIZXQtv4sqc&dib_tag=se&keywords=fashion&qid=1758651284&sprefix=fashion%2Caps%2C605&sr=8-3",
    "imageLink": "https://m.media-amazon.com/images/I/51TvnTUISOL._AC_UL320_.jpg",
    "asin": "",
    "availability": ""
  },
  {
    "title": "Trendy Queen",
    "price": "$39.",
    "rating": "4.3",
    "productLink": "https://www.amazon.com/Trendy-Queen-Matching-Sweatsuit-Essential/dp/B0F9SW7V12/ref=sr_1_4?crid=377MW7EAZ8CBH&dib=eyJ2IjoiMSJ9.NuUDuC5UUxltVnS0eL-JtmcE-UAsPttwImj2Lpu6IuzcCnyFXI1BCUHjMyQN2zXHNFVm7j2MEVIj7xyMonulcsgtn2Ql5HOCMfjbpS-aoCGV99ELpKvhFwkkzPsPbaIMrEFMLVDWeyC5EeXxiOfqkQj3Rk5iMASlM8evl7n4likzV5DkIqTBgtb6ljiKyNMS4W7gnvgCt9Gfy-2_ROgm5bUHw9rW1NwtwMu7DT2Cl2rnDd_BpUJ0gN9JWFOdrmP2QBEWFzZy7da3V5izXFBPeiiImGOKzVY-uRn6E506jnE.-AkEvC1gf0bFHOJUFswhE6FSHHxNNMj5OIZXQtv4sqc&dib_tag=se&keywords=fashion&qid=1758651284&sprefix=fashion%2Caps%2C605&sr=8-4",
    "imageLink": "https://m.media-amazon.com/images/I/61icMXLgUGL._AC_UL320_.jpg",
    "asin": "",
    "availability": ""
  },
  {
    "title": "Trendy Queen",
    "price": "$36.",
    "rating": "4.4",
    "productLink": "https://www.amazon.com/Trendy-Queen-Oversized-Sweaters-Crewneck/dp/B0D9RR2Y9K/ref=sr_1_5?crid=377MW7EAZ8CBH&dib=eyJ2IjoiMSJ9.NuUDuC5UUxltVnS0eL-JtmcE-UAsPttwImj2Lpu6IuzcCnyFXI1BCUHjMyQN2zXHNFVm7j2MEVIj7xyMonulcsgtn2Ql5HOCMfjbpS-aoCGV99ELpKvhFwkkzPsPbaIMrEFMLVDWeyC5EeXxiOfqkQj3Rk5iMASlM8evl7n4likzV5DkIqTBgtb6ljiKyNMS4W7gnvgCt9Gfy-2_ROgm5bUHw9rW1NwtwMu7DT2Cl2rnDd_BpUJ0gN9JWFOdrmP2QBEWFzZy7da3V5izXFBPeiiImGOKzVY-uRn6E506jnE.-AkEvC1gf0bFHOJUFswhE6FSHHxNNMj5OIZXQtv4sqc&dib_tag=se&keywords=fashion&qid=1758651284&sprefix=fashion%2Caps%2C605&sr=8-5",
    "imageLink": "https://m.media-amazon.com/images/I/61icMXLgUGL._AC_UL320_.jpg",
    "asin": "",
    "availability": ""
  }
];

// Generate more fashion products to reach 150
const generateFashionProducts = () => {
  const brands = ['Nike', 'Adidas', 'Puma', 'Levi\'s', 'H&M', 'Zara', 'Uniqlo', 'Gap', 'Forever 21', 'American Eagle'];
  const categories = ['T-Shirt', 'Jeans', 'Dress', 'Sweater', 'Jacket', 'Sneakers', 'Boots', 'Handbag', 'Watch', 'Jewelry'];
  const colors = ['Black', 'White', 'Blue', 'Red', 'Green', 'Gray', 'Navy', 'Pink', 'Brown', 'Purple'];
  
  const products = [...fashionData];
  
  for (let i = 0; i < 145; i++) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const price = Math.floor(Math.random() * 200) + 10;
    const rating = (Math.random() * 2 + 3).toFixed(1);
    
    products.push({
      "title": `${brand} ${color} ${category}`,
      "price": `$${price}`,
      "rating": rating,
      "productLink": `https://www.amazon.com/s?k=${brand}+${category}&ref=sr_pg_${i + 1}`,
      "imageLink": `https://m.media-amazon.com/images/I/61${Math.random().toString(36).substr(2, 9)}._AC_UL320_.jpg`,
      "asin": `B${Math.random().toString().substr(2, 9)}`,
      "availability": Math.random() > 0.1 ? "In Stock" : "Limited Stock"
    });
  }
  
  return products;
};

const allFashionProducts = generateFashionProducts();

// Generate the data file content
const dataContent = `// fashion products data
export const allFashionExtended = ${JSON.stringify(allFashionProducts, null, 2)};
`;

// Write to file
const outputPath = path.join(__dirname, '..', 'all-fashion-data.js');
fs.writeFileSync(outputPath, dataContent, 'utf8');

console.log(`✅ Generated fashion data: ${allFashionProducts.length} products`);


