import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function HeadphonesPage4() {
  const headphones = [
    {
      title: `BERIBES Upgraded Hybrid Active Noise Cancelling Headphones with Transparent Modes,70H Playtime Bluetooth Headphones Wireless Bluetooth with Mic, Deep Bass,3.5MM Cable,Soft-Earpads,Fast Charging-Black`,
      image: `https://m.media-amazon.com/images/I/714SLdK9+LL._AC_UY218_.jpg`,
      price: `$26.99 $32.93`,
      rating: `4.4`,
      count: `(4.6K)`,
      link: `https://www.amazon.com/BERIBES-Cancelling-Transparent-Soft-Earpads-Charging-Black/dp/B0CDC4X65Q/`
    },
    {
      title: `Maeline Bulk Earbuds with 3.5 mm Headphone Plug - 20 Pack Wholesale Bundle - Multi Color`,
      image: `https://m.media-amazon.com/images/I/61WyLiXcOnL._AC_UY218_.jpg`,
      price: `$13.95`,
      rating: `3.7`,
      count: `(2.4K)`,
      link: `https://www.amazon.com/Maeline-Bulk-Earbuds-Headphone-Plug/dp/B08BT29MQF/`
    },
    {
      title: `Razer Kraken V3 X Wired USB Gaming Headset: Lightweight Build - Triforce 40mm Drivers - HyperClear Cardioid Mic - 7.1 Surround Sound - Chroma RGB Lighting - Black`,
      image: `https://m.media-amazon.com/images/I/71NxwEjlU1L._AC_UY218_.jpg`,
      price: `$44.99 $69.99`,
      rating: `4.3`,
      count: `(2.3K)`,
      link: `https://www.amazon.com/Razer-Kraken-Wired-Gaming-Headset/dp/B0BSJYM8FF/`
    },
    {
      title: `TOZO T10 True Wireless Bluetooth 5.3 Earbuds, 45H Playtime, Wireless Charging Case, IPX8 Waterproof Stereo Headphones in Ear Built in Mic Headset Premium Sound with Deep Bass, 32 Preset EQs via APP`,
      image: `https://m.media-amazon.com/images/I/81mk-PdqggL._AC_UY218_.jpg`,
      price: `$19.99 $24.99`,
      rating: `4.3`,
      count: `(256.7K)`,
      link: `https://www.amazon.com/TOZO-Bluetooth-Wireless-Headphones-Waterproof/dp/B07J2Z5DBM/`
    },
    {
      title: `Silensys E7 Active Noise Cancelling Headphones Bluetooth Headphones with Microphone Deep Bass Wireless Headphones Over Ear, Comfortable Protein Earpads, 30 Hours Playtime for Travel/Work, Black`,
      image: `https://m.media-amazon.com/images/I/61v8I23yUQL._AC_UY218_.jpg`,
      price: `$49.99 $97.00`,
      rating: `4.3`,
      count: `(8.7K)`,
      link: `https://www.amazon.com/Silensys-Active-Noise-Cancelling-Headphones/dp/B098XGQS6G/`
    },
    {
      title: `Headphones Wired with Microphone, Over Ear Foldable 3.5mm Plug in Headphones Corded with 4.9ft Tangle-Free Nylon Cord for Tablet, Laptop, MP3/4, School, Airplane Travel (Beige)`,
      image: `https://m.media-amazon.com/images/I/61LkSC2WBdL._AC_UY218_.jpg`,
      price: `$11.99 $13.99`,
      rating: `4.4`,
      count: `(527)`,
      link: `https://www.amazon.com/Botesty-Sound-Headphones-Microphone-Tangle-Free/dp/B0DMP36MVC/`
    },
    {
      title: `TAGRY Bluetooth Headphones True Wireless Earbuds 60H Playback LED Power Display Earphones with Wireless Charging Case IPX5 Waterproof in-Ear Ear buds with Mic for TV Smart Phone Laptop Computer Sports`,
      image: `https://m.media-amazon.com/images/I/61uEvVoizoL._AC_UY218_.jpg`,
      price: `$25.98 $49.99`,
      rating: `4.4`,
      count: `(74.2K)`,
      link: `https://www.amazon.com/TAGRY-Bluetooth-Headphones-Earphones-Waterproof/dp/B09DT48V16/`
    },
    {
      title: `Logitech G335 Wired Gaming Headset, with Flip to Mute Microphone, 3.5mm Audio Jack, Memory Foam Earpads, Lightweight, Compatible with PC, PlayStation, Xbox, Nintendo Switch - Black`,
      image: `https://m.media-amazon.com/images/I/71QEWj+ioXS._AC_UY218_.jpg`,
      price: `$69.99 $89.99`,
      rating: `4.2`,
      count: `(9.8K)`,
      link: `https://www.amazon.com/Logitech-G335-Wired-Gaming-Headset/dp/B08KKBSDTY/`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleAddToWishlist = (productName) => {
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

  const handleBuyClick = (link, productName) => {
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
      window.open(link, '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl floating-3d"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full opacity-15 blur-3xl floating-3d" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-500 rounded-full opacity-8 blur-3xl floating-3d" style={{animationDelay: '4s'}}></div>
      </div>

      <main className="relative z-10 px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            🎧 Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Headphones</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the best deals on premium headphones with exceptional sound quality
          </p>
          <div className="mt-6 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <span className="text-cyan-400 font-semibold mr-2">Page 4</span>
            <span className="text-gray-400">•</span>
            <span className="text-white ml-2">{headphones.length} Products</span>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {headphones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl group overflow-hidden relative"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Wishlist Button */}
                <button
                  onClick={() => handleAddToWishlist(item.title.substring(0, 30) + "...")}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-pink-500 rounded-full backdrop-blur-sm border border-white/20 text-gray-400 hover:text-white transition-all duration-300 z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Product Image */}
                <div className="relative mb-6 h-48 bg-white/5 rounded-2xl overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>

                {/* Product Info */}
                <h2 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {item.title.length > 60 ? item.title.substring(0, 60) + "..." : item.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <span className="text-yellow-400 text-lg mr-2">⭐</span>
                  <span className="text-white font-semibold">{item.rating}</span>
                  <span className="text-gray-400 text-sm ml-2">{item.count}</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-green-400">
                      ${item.price.split(' ')[0].replace('$', '')}
                    </span>
                    {item.price.includes(' ') && (
                      <span className="text-gray-400 line-through text-lg">
                        {item.price.split(' ')[1]}
                      </span>
                    )}
                  </div>
                  {item.price.includes(' ') && (
                    <span className="text-green-400 text-sm font-semibold">
                      You save: ${(parseFloat(item.price.split(' ')[1].replace('$', '')) - parseFloat(item.price.split(' ')[0].replace('$', ''))).toFixed(2)}
                    </span>
                  )}
          </div>

                {/* Buy Button */}
                <button
                  onClick={() => handleBuyClick(item.link, item.title.substring(0, 30) + "...")}
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

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center gap-3 flex-wrap"
        >
        {pages.map((p) => (
          <Link href={`/headphones/page/${p}`} key={p}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-full font-bold transition-all duration-300 ${
                  p === 4 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg' 
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
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