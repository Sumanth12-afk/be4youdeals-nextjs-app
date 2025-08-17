import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function LaptopPage8() {
  const laptops = [
    {
      title: `HP Victus,13th Gen IntelCore i5-13420H, 6GB RTX 4050 Gaming Laptop (16GB DDR4,512GB SSD) (fa1279tx) IPS, 15.6"/39.6cm, Flicker-Free,Win 11,Office 21, Mica Silver, 2.29kg, EnhancedCooling,fa1319TX`,
      image: `https://m.media-amazon.com/images/I/71NZgR0v39L._AC_UY218_.jpg`,
      price: `₹76,490`,
      rating: `3.9`,
      count: `(217)`,
      link: `https://www.amazon.in/HP-i5-13420H-15-6-inch-Backlit-fa1319TX/dp/B0D1YJR2ZY/ref=sr_1_32_sspa?crid=102YFPKZ8SCP8&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-32-spons&psc=1`
    },
    {
      title: `Lenovo Smartchoice LOQ, Intel Core i5-12450HX, 12th Gen, RTX 3050-6GB, 16GB RAM, 512GB SSD, FHD 144Hz 300Nits, 15.6"/39.6cm, Windows 11, MS Office 21, Grey, 2.4Kg, 83GS003UIN, Gaming Laptop`,
      image: `https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UY218_.jpg`,
      price: `₹70,990`,
      rating: `4.0`,
      count: `(605)`,
      link: `https://www.amazon.in/Lenovo-Smartchoice-i5-12450HX-Graphics-83GS003UIN/dp/B0CX8XPKWJ/ref=sr_1_33_sspa?crid=102YFPKZ8SCP8&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-33-spons&psc=1`
    },
    {
      title: `HP 15, 13th Gen Intel Core i5-1335U (16GB DDR4, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6''/39.6cm, Win11, M365 Basic(1yr)* Office24, Silver,1.59kg, fd0577TU, Iris Xe, FHD Camera w/Shutter Laptop`,
      image: `https://m.media-amazon.com/images/I/71bagLp2sXL._AC_UY218_.jpg`,
      price: `₹55,990`,
      rating: `3.6`,
      count: `(20)`,
      link: `https://www.amazon.in/HP-i5-1335U-Anti-Glare-Micro-Edge-fd0577TU/dp/B0F4R6H3NB/ref=sr_1_33_sspa?crid=102YFPKZ8SCP8&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-33-spons&psc=1`
    },
    {
      title: `Lenovo LOQ 2024 12Th Gen Intel Core I5-12450HX | NVIDIA RTX 2050 4GB (12GB RAM/512GB SSD/15.6" (39.6Cm)/Windows 11/Office Home 2024/100% Srgb/3 Mon. Game Pass/Grey/2.4Kg), 83GS00LJIN Gaming Laptop`,
      image: `https://m.media-amazon.com/images/I/81b4LYOyFVL._AC_UY218_.jpg`,
      price: `₹63,990`,
      rating: `N/A`,
      count: ``,
      link: `https://www.amazon.in/Lenovo-I5-12450HX-NVIDIA-Windows-83GS00LJIN/dp/B0DPQJBMVK/ref=sr_1_34_sspa?crid=102YFPKZ8SCP8&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-34-spons&psc=1`
    },
    {
      title: `Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey`,
      image: `https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg`,
      price: `₹58,990`,
      rating: `4.6`,
      count: `(6.9K)`,
      link: `https://www.amazon.in/Apple-MacBook-Chip-13-inch-256GB/dp/B08N5W4NNB/ref=sr_1_35?crid=102YFPKZ8SCP8&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-35`
    },
    {
      title: `Sounce 3 in 1 Cleaning Set for Screen PC, Laptops, Monitors, Mobiles, LCD, LED, TV/Professional Quality/Prevents Static Electricity, 100ml with Micro Fiber Cloth and Soft Brush`,
      image: `https://m.media-amazon.com/images/I/71CFc-fYMBL._AC_UY218_.jpg`,
      price: `₹149`,
      rating: `4.2`,
      count: `(1.9K)`,
      link: `https://www.amazon.in/Sounce-Cleaning-Monitors-Professional-Electricity/dp/B0BSLRB8NJ/ref=sr_1_36?crid=102YFPKZ8SCP8&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-36`
    },
    {
      title: `V-CUBE DESIGNS Premium Vegan Leather Desk Mat 90X45cm 2.4mm Thick & Padded | Laptop Mat/Extended Mouse Pad/Stitched, Reversible, Sturdy Deskspread with High Tear/Peel Strength | Anti-Slip, Splash-Proof | Blue`,
      image: `https://m.media-amazon.com/images/I/61G987QVS8L._AC_UL640_QL65_.jpg`,
      price: `₹797`,
      rating: `4.4`,
      count: `(587)`,
      link: `https://www.amazon.in/V-CUBE-DESIGNS-Premium-Leather-Deskspread/dp/B09XJKFLLP/ref=sr_1_37?crid=102YFPKZ8SCP8&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-37`
    },
    {
      title: `V-CUBE DESIGNS Premium Vegan Leather Desk Mat 90X45cm 2.4mm Thick & Padded | Laptop Mat/Extended Mouse Pad/Stitched, Reversible, Sturdy Deskspread with High Tear/Peel Strength | Anti-Slip, Splash-Proof | Blue`,
      image: `https://m.media-amazon.com/images/I/61G987QVS8L._AC_UL640_QL65_.jpg`,
      price: `₹797`,
      rating: `4.4`,
      count: `(587)`,
      link: `https://www.amazon.in/V-CUBE-DESIGNS-Premium-Leather-Deskspread/dp/B09XJKFLLP/ref=sr_1_37?crid=102YFPKZ8SCP8&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-37`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleAddToWishlist = (productName: string) => {
    toast(`❤️ ${productName} added to wishlist!`, {
      icon: '🎉',
      style: {
        background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
        color: 'white',
        borderRadius: '16px',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3)'
      },
      duration: 3000,
      position: 'bottom-center'
    });
  };

  const handleBuyClick = (link: string, productName: string) => {
    toast(`🛒 Redirecting to Amazon for ${productName}...`, {
      icon: '🚀',
      style: {
        background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
        color: 'white',
        borderRadius: '16px',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)'
      },
      duration: 2000,
      position: 'bottom-center'
    });

    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl floating-3d"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full opacity-15 blur-3xl floating-3d" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500 rounded-full opacity-8 blur-3xl floating-3d" style={{animationDelay: "4s"}}></div>
      </div>

      <main className="relative z-10 px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            💻 Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Laptops</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover powerful laptops for work, gaming, and creativity at unbeatable prices
          </p>
          <div className="mt-6 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-blue-400 font-semibold mr-2">Page 8</span>
            <span className="text-gray-400">•</span>
            <span className="text-white ml-2">{laptops.length} Products</span>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {laptops.map((laptop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <button
                  onClick={() => handleAddToWishlist(laptop.title === "nan" ? "Laptop Product" : laptop.title.substring(0, 30) + "...")}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-pink-500 rounded-full backdrop-blur-sm border border-white/20 text-gray-400 hover:text-white transition-all duration-300 z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                <div className="relative mb-6 h-48 bg-white/5 rounded-2xl overflow-hidden">
                  <img
                    src={laptop.image.split(" ")[0]}
                    alt={laptop.title === "nan" ? "Laptop Product" : laptop.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>

                <h2 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {laptop.title === "nan" ? "Premium Laptop" : (laptop.title.length > 60 ? laptop.title.substring(0, 60) + "..." : laptop.title)}
                </h2>

                <div className="flex items-center mb-3">
                  <span className="text-yellow-400 text-lg mr-2">⭐</span>
                  <span className="text-white font-semibold">{laptop.rating}</span>
                  <span className="text-gray-400 text-sm ml-2">({laptop.count.replace(/[^\d.K]/g, '')})</span>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-green-400">
                      {laptop.price}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleBuyClick(laptop.link, laptop.title === "nan" ? "Laptop Product" : laptop.title.substring(0, 30) + "...")}
                  className="w-full bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-bold py-3 px-6 rounded-2xl text-sm shadow-2xl hover:scale-105 hover:from-orange-500 hover:to-yellow-400 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>🛒</span>
                    <span>Buy on Amazon</span>
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center gap-3 flex-wrap"
        >
          {pages.map((p) => (
            <Link href={`/laptops/page/${p}`} key={p}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-full font-bold transition-all duration-300 ${
                  p === 8
                    ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg"
                    : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                {p}
              </motion.button>
            </Link>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
