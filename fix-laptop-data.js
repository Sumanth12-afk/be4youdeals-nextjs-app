// Script to fix the laptop data
const fs = require('fs');

// Read the corrupted data
const data = fs.readFileSync('all-laptops-data.js', 'utf8');

// Extract the array content
const arrayMatch = data.match(/export const allLaptops = \[([\s\S]*)\];/);
if (!arrayMatch) {
  console.log('Could not find array');
  process.exit(1);
}

const arrayContent = arrayMatch[1];

// Split by entries (look for }, { pattern)
const entries = arrayContent.split('},\n    {').map((entry, index) => {
  if (index === 0) {
    return entry + '}';
  } else if (index === entries.length - 1) {
    return '{' + entry;
  } else {
    return '{' + entry + '}';
  }
});

console.log(`Found ${entries.length} entries`);

// Clean and filter entries
const cleanEntries = [];
let laptopCount = 0;

entries.forEach((entry, index) => {
  try {
    // Skip non-laptop items
    if (entry.includes('Ethernet') || entry.includes('Cable') || entry.includes('Adapter')) {
      console.log(`Skipping non-laptop item ${index + 1}`);
      return;
    }

    // Check if this is a concatenated entry (multiple laptops in one)
    if (entry.includes('Lenovo V15 G4') && entry.includes('Acer Swift Go')) {
      console.log(`Splitting concatenated entry ${index + 1}`);
      
      // Split into individual laptops
      const laptops = [
        {
          title: "Blackview Laptop 2025, Laptops Computer for Business Student, Quad-Core N150 (Up to 3.6GHz, Beat N5095/N95/N97/N100), 16GB DDR4 256GB SSD, 15.6\" FHD IPS TÜV Screen, 100W Type-C Fast Charge, 4K HDMI",
          price: "$339.99",
          rating: "4.5 out of 5 stars",
          count: "(73)",
          image: "https://m.media-amazon.com/images/I/61iRboRcXzL._AC_UY218_.jpg",
          link: "https://www.amazon.com/Blackview-Laptops-Computer-Business-Quad-Core/dp/B0FC25JLR9"
        },
        {
          title: "Lenovo V15 G4 15.6\" FHD Laptop Computer, 24GB RAM 1.5TB Storage (1TB SSD+512GB Docking Station Set), 8-Cores AMD Ryzen 7, Windows 11 Pro with Microsoft Office Included, PLUSERA Earphones, Black",
          price: "$689.99",
          rating: "4.1 out of 5 stars",
          count: "(45)",
          image: "https://m.media-amazon.com/images/I/71jO5pga+lL._AC_UY218_.jpg",
          link: "https://www.amazon.com/Lenovo-Computer-Microsoft-Included-Earphones/dp/B0FFHM5CQZ"
        },
        {
          title: "Acer Swift Go 14 Intel Evo Edition Laptop | 14\" OLED WQXGA+ 2880x1800 Display | Unlock AI Experiences | Intel Core Ultra 5 processor 125H | Intel ARC | 8GB LPDDR5 | 512GB SSD | WiFi 6E | SFG14-73-58EP",
          price: "$729.99",
          rating: "4.3 out of 5 stars",
          count: "(404)",
          image: "https://m.media-amazon.com/images/I/7128VEFLbLL._AC_UY218_.jpg",
          link: "https://www.amazon.com/2880x1800-Display-Experiences-processor-SFG14-73-58EP/dp/B0D78QPSSC"
        },
        {
          title: "HP 17.3\" Touchscreen Laptop, Intel Core i3-N305, 32GB RAM, 128GB eMMC + 1TB SSD, Numeric Keypad, Webcam, HDMI, Wi-Fi 6, Windows 11 Pro, Silver, Bundle with PCO Notebook Fold Radiator, Cooler",
          price: "$689.00",
          rating: "4.1 out of 5 stars",
          count: "(39)",
          image: "https://m.media-amazon.com/images/I/712Oh4hTlNL._AC_UY218_.jpg",
          link: "https://www.amazon.com/HP-Touchscreen-i3-N305-Notebook-Radiator/dp/B0FLKBF74Q"
        },
        {
          title: "Dell Inspiron 16 Touchscreen Business Laptop – Intel Core 7 150U – FHD+ Display - AI Copilot Key, Fingerprint Reader, Backlit KB, w/Accessory, Win 11 Pro (64GB DDR5 | 2TB SSD)",
          price: "$1,247.99",
          rating: "4.1 out of 5 stars",
          count: "(186)",
          image: "https://m.media-amazon.com/images/I/71iFUItN2mL._AC_UY218_.jpg",
          link: "https://www.amazon.com/Dell-Inspiron-Touchscreen-Business-Laptop/dp/B0FCM2N8VN"
        }
      ];
      
      cleanEntries.push(...laptops);
      laptopCount += laptops.length;
      return;
    }

    // Parse the entry
    const entryObj = eval('(' + entry + ')');
    
    // Clean up the data
    const cleanEntry = {
      title: entryObj.title?.replace(/`/g, '') || 'Laptop',
      price: entryObj.price?.replace(/`/g, '') || '$0.00',
      rating: entryObj.rating?.replace(/`/g, '') || 'N/A',
      count: entryObj.count?.replace(/`/g, '') || '(0)',
      image: entryObj.image?.replace(/`/g, '') || '',
      link: entryObj.link?.replace(/`/g, '') || ''
    };

    cleanEntries.push(cleanEntry);
    laptopCount++;
    
  } catch (error) {
    console.log(`Error parsing entry ${index + 1}:`, error.message);
  }
});

console.log(`Cleaned ${laptopCount} laptops`);

// Generate the new file
const newFile = `// Complete laptop data - ${laptopCount} laptops
export const allLaptops = [
${cleanEntries.map(entry => `    {
        title: \`${entry.title}\`,
        price: \`${entry.price}\`,
        rating: \`${entry.rating}\`,
        count: \`${entry.count}\`,
        image: \`${entry.image}\`,
        link: "${entry.link}"
    }`).join(',\n')}
];`;

fs.writeFileSync('all-laptops-data.js', newFile);
console.log('Fixed laptop data saved!');
