import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function LaptopPage10() {
  const laptops = [
    {
      title: `ASUS TUF Gaming A15, AMD Ryzen 7 7435HS Gaming Laptop (RTX 3050-4GB/16GB RAM/512GB SSD/144Hz/RGB KB/48WHr/Win 11/Graphite Black/2.30 Kg) FA506NCR-HN054W`,
      image: `https://m.media-amazon.com/images/I/61nTNphSBvL._AC_UY218_.jpg`,
      price: `₹64,590`,
      rating: `3.9`,
      count: `(331)`,
      link: `https://www.amazon.in/ASUS-15-6-inch-GeForce-Graphite-FA506NCR-HN054W/dp/B0D5DFR78J`
    },
    {
      title: `Dyazo 6 Angles Adjustable Aluminum Ergonomic Foldable Portable Laptop/Desktop Riser Stand Holder (Silver)`,
      image: `https://m.media-amazon.com/images/I/61kBmC8NfGL._AC_UY218_.jpg`,
      price: `₹379`,
      rating: `4.3`,
      count: `(14.8K)`,
      link: `https://www.amazon.in/Dyazo-Computer-Adjustable-Ergonomic-Compatible/dp/B08LHTJTBB`
    },
    {
      title: `Amazon Basics Laptop Sleeve Case Cover Pouch for 14-Inch, 14.1-Inch Laptop | Slim Profile Neoprene | 360° Protection (Grey)`,
      image: `https://m.media-amazon.com/images/I/91k86Cdp1uL._AC_UY218_.jpg`,
      price: `₹349`,
      rating: `4.4`,
      count: `(3.7K)`,
      link: `https://www.amazon.in/14-Inch-14-1-Inch-Profile-Neoprene-Protection/dp/B09SPNRNJX`
    },
    {
      title: `Lenovo LOQ Intel Core i5-12450HX, RTX 3050, 16GB RAM, 512GB SSD, 15.6" FHD Gaming Laptop (83GS00LNIN)`,
      image: `https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UL320_.jpg`,
      price: `₹71,490`,
      rating: `4.0`,
      count: `(605)`,
      link: `https://www.amazon.in/Lenovo-I5-12450HX-NVIDIA-Windows-83GS00LNIN/dp/B0DPQGVH85`
    },
    {
      title: `HP Pavilion 15, Intel Core i5-1340P, 16GB RAM, Intel Iris Xe Graphics, 15.6" FHD Laptop (15-eg3079TU)`,
      image: `https://m.media-amazon.com/images/I/71Xa4o1DXpL._AC_UL320_.jpg`,
      price: `₹67,490`,
      rating: `4.0`,
      count: `(262)`,
      link: `https://www.amazon.in/HP-Pavilion-i5-1340P-Graphics-15-eg3079TU/dp/B0C2D3NV1S`
    },
    {
      title: `HP Victus, Intel Core i5-13420H, 8GB RAM, RTX 3050 4GB, 512GB SSD, 15.6" FHD Gaming Laptop (fa1307TX)`,
      image: `https://m.media-amazon.com/images/I/71R6HbrvEwL._AC_UL320_.jpg`,
      price: `₹66,090`,
      rating: `4.0`,
      count: `(114)`,
      link: `https://www.amazon.in/HP-i5-13420H-15-6-inch-Speakers-fa1307TX/dp/B0D2LG3DRJ`
    },
    {
      title: `HP 15s, Intel Core i5-1235U, 8GB RAM, 512GB SSD, 15.6" FHD Anti-Glare Laptop (fy5009tu)`,
      image: `https://m.media-amazon.com/images/I/71lmpgWjq-L._AC_UL320_.jpg`,
      price: `₹50,490`,
      rating: `4.0`,
      count: `(512)`,
      link: `https://www.amazon.in/HP-i5-1235U-Anti-Glare-Micro-Edge-fy5009tu/dp/B0D4M66F6R`
    },
    {
      title: `HP Envy x360, 13th Gen Intel Core i7, 16GB RAM, 512GB SSD, 14" 2-in-1 Touchscreen Laptop (15-ew2009TU)`,
      image: `https://m.media-amazon.com/images/I/71rjN6zCHiL._AC_UY218_.jpg`,
      price: `₹91,990`,
      rating: `4.5`,
      count: `(1.1K)`,
      link: `https://www.amazon.in/HP-Envy-13th-i7-1355U-15-ew2009TU/dp/B0C6G2PYPK`
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
            <span className="text-blue-400 font-semibold mr-2">Page 10</span>
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
                  p === 10
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
