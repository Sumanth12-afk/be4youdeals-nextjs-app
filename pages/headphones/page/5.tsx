import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function HeadphonesPage5() {
  const headphones = [
    {
      title: `Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Built-in, Black`,
      image: `https://m.media-amazon.com/images/I/71Nz5ueWZ+L._AC_UY218_.jpg`,
      price: `$89.99 $149.99`,
      rating: `4.3`,
      count: `(15.2K)`,
      link: `https://www.amazon.com/Sony-WH-CH720N-Canceling-Headphones-Hands-free/dp/B0BS1HZW53/`
    },
    {
      title: `Apple AirPods Max - Silver`,
      image: `https://m.media-amazon.com/images/I/81A+ojoJvaL._AC_UY218_.jpg`,
      price: `$429.99 $549.00`,
      rating: `4.4`,
      count: `(28.5K)`,
      link: `https://www.amazon.com/New-Apple-AirPods-Max-Silver/dp/B08PZJN7BD/`
    },
    {
      title: `JBL Tune 510BT Wireless On-Ear Headphones with Purebass Sound - Black`,
      image: `https://m.media-amazon.com/images/I/61dFGkq1UQL._AC_UY218_.jpg`,
      price: `$29.95 $49.95`,
      rating: `4.3`,
      count: `(89.4K)`,
      link: `https://www.amazon.com/JBL-Wireless-Headphones-Streaming-JBLT510BTBLKAM/dp/B08WM3VLQC/`
    },
    {
      title: `Audio-Technica ATH-M40x Professional Studio Monitor Headphones, Black, Professional Grade, Critically Acclaimed, With Detachable Cables`,
      image: `https://m.media-amazon.com/images/I/61fiJ-PbWgL._AC_UY218_.jpg`,
      price: `$99.00 $149.00`,
      rating: `4.5`,
      count: `(37.8K)`,
      link: `https://www.amazon.com/Audio-Technica-ATH-M40x-Professional-Monitor-Headphones/dp/B00HVLUR54/`
    },
    {
      title: `Sennheiser HD 599 SE Around Ear Open Back Headphone - Ivory`,
      image: `https://m.media-amazon.com/images/I/61sI-GuKxdL._AC_UY218_.jpg`,
      price: `$119.95 $199.95`,
      rating: `4.4`,
      count: `(9.7K)`,
      link: `https://www.amazon.com/Sennheiser-HD-599-SE-Headphone/dp/B07Q7S7247/`
    },
    {
      title: `Skullcandy Crusher Evo Wireless Over-Ear Headphone - True Black`,
      image: `https://m.media-amazon.com/images/I/71tZZhGk1jL._AC_UY218_.jpg`,
      price: `$99.99 $199.99`,
      rating: `4.2`,
      count: `(31.2K)`,
      link: `https://www.amazon.com/Skullcandy-Crusher-Wireless-Over-Ear-Headphone/dp/B08PC4YY5L/`
    },
    {
      title: `Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Matte Black`,
      image: `https://m.media-amazon.com/images/I/51QxeUlfQ3L._AC_UY218_.jpg`,
      price: `$179.99 $349.95`,
      rating: `4.4`,
      count: `(54.6K)`,
      link: `https://www.amazon.com/Beats-Studio3-Wireless-Cancelling-Headphones/dp/B07533MLFJ/`
    },
    {
      title: `HyperX Cloud II - Gaming Headset, 7.1 Surround Sound, Memory Foam Ear Pads, Durable Aluminum Frame, Detachable Microphone, Works with PC, PS4, PS5, Xbox One, Xbox Series X|S, Nintendo Switch and Mobile - Red`,
      image: `https://m.media-amazon.com/images/I/71qRlQSfYUL._AC_UY218_.jpg`,
      price: `$69.99 $99.99`,
      rating: `4.5`,
      count: `(146.8K)`,
      link: `https://www.amazon.com/HyperX-Cloud-Gaming-Headset-KHX-HSCP-RD/dp/B00SAYCXWG/`
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
            <span className="text-cyan-400 font-semibold mr-2">Page 5</span>
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
                  p === 5 
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
