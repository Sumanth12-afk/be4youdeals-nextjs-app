import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

export default function HeadphonesPage2() {
  const headphones = [
    {
      title: `Sony WH-CH720N Noise Canceling Wireless Headphones Bluetooth Over The Ear Headset with Microphone and Alexa Built-in, Black New`,
      image: `https://m.media-amazon.com/images/I/51rpbVmi9XL._AC_UY218_.jpg`,
      price: `$79.99 $149.99`,
      rating: `4.4`,
      count: `(10.4K)`,
      link: `https://www.amazon.com/Sony-WH-CH720N-Canceling-Headphones-Microphone/dp/B0BS1QCFHX/`
    },
    {
      title: `KVIDIO Bluetooth Headphones Over Ear, 65 Hours Playtime Wireless Headphones with Microphone, Foldable Lightweight Headset with Deep Bass, HiFi Stereo Sound Low Latency for Travel Work Cellphone`,
      image: `https://m.media-amazon.com/images/I/71Hx8b6HGbL._AC_UY218_.jpg`,
      price: `$18.84 $28.99`,
      rating: `4.5`,
      count: `(28.1K)`,
      link: `https://www.amazon.com/Bluetooth-Headphones-KVIDIO-Microphone-Lightweight/dp/B09BF64J55/`
    },
    {
      title: `Soundcore by Anker Q20i Hybrid Active Noise Cancelling Headphones, Wireless Over-Ear Bluetooth, 40H Long ANC Playtime, Hi-Res Audio, Big Bass, Customize via an App, Transparency Mode (White)`,
      image: `https://m.media-amazon.com/images/I/51QSktkLy1L._AC_UY218_.jpg`,
      price: `$49.99 $69.99`,
      rating: `4.6`,
      count: `(31.7K)`,
      link: `https://www.amazon.com/Soundcore-Cancelling-Headphones-Bluetooth-Transparency/dp/B0CQXMXJC5/`
    },
    {
      title: `EarFun Kids Headphones Wired with Microphone, 85/94dB Volume Limit Headphones for Kids, Portable Wired Headphone with Shareport, Stereo Sound Foldable Headset for School/Tablet/iPad/Kindle, Black Red`,
      image: `https://m.media-amazon.com/images/I/61PsVBKlrKL._AC_UY218_.jpg`,
      price: `$9.99 $16.99`,
      rating: `4.6`,
      count: `(6.4K)`,
      link: `https://www.amazon.com/EarFun-Headphones-Microphone-Portable-Shareport/dp/B0BR9SSP86/`
    },
    {
      title: `Bose QuietComfort Bluetooth Headphones, Wireless Headphones with Active Over Ear Noise Cancelling and Mic, Deep Bass, Up to 24 Hours of Playtime, Black`,
      image: `https://m.media-amazon.com/images/I/51f7KKP25PL._AC_UY218_.jpg`,
      price: `$349.99`,
      rating: `4.6`,
      count: `(11.4K)`,
      link: `https://www.amazon.com/Bose-QuietComfort-Cancelling-Headphones-Bluetooth/dp/B0CCZ26B5V/`
    },
    {
      title: `Beats Studio Pro - Wireless Bluetooth Noise Cancelling Headphones - Deep Brown (Renewed)`,
      image: `https://m.media-amazon.com/images/I/61SNDXZcmTL._AC_UY218_.jpg`,
      price: `$158.00 $179.95`,
      rating: `4.4`,
      count: `(1.5K)`,
      link: `https://www.amazon.com/Beats-Studio-Pro-Cancelling-Headphones/dp/B0CGKS9199/`
    },
    {
      title: `JBL Tune 720BT - Wireless Over-Ear Headphones with JBL Pure Bass Sound, Bluetooth 5.3, Up to 76H Battery Life and Speed Charge, Lightweight, Comfortable and Foldable Design (Black)`,
      image: `https://m.media-amazon.com/images/I/61EL2AKKcBL._AC_UY218_.jpg`,
      price: `$89.95`,
      rating: `4.5`,
      count: `(5.9K)`,
      link: `https://www.amazon.com/JBL-TUNE-720BT-Lightweight-comfortable/dp/B0CTBCDD6D/`
    },
    {
      title: `Y01 Wireless Over Ear Headphones, Noise Canceling Bluetooth 5.3 Headphones with Microphones,Hi-Res Audio,48H Playtime,Foldable,Breathable Soft Earpads for iOS/Android/Samsung/PC-Pink`,
      image: `https://m.media-amazon.com/images/I/61fz+m7GeaL._AC_UY218_.jpg`,
      price: `$39.90`,
      rating: `4.2`,
      count: `(402)`,
      link: `https://www.amazon.com/Wentronic-Y01-Headphones-Microphones-Breathable/dp/B0DQP96B2B/`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleAddToWishlist = (headphone: any) => {
    const wishlistItem = {
      id: `headphone-${Date.now()}`,
      name: headphone.title === "nan" ? "Premium Headphones" : headphone.title,
      price: headphone.price,
      image: headphone.image,
      category: "Headphones",
      addedDate: new Date().toISOString(),
      link: headphone.link
    };

    const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const isAlreadyInWishlist = existingWishlist.some((item: any) => 
      item.name === wishlistItem.name && item.category === wishlistItem.category
    );

    if (isAlreadyInWishlist) {
      toast('Already in wishlist!', {
        icon: '💔',
        style: {
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: 'white',
          borderRadius: '16px',
          padding: '12px 20px',
          fontSize: '14px',
          fontWeight: '600'
        },
        duration: 2000,
        position: 'bottom-center'
      });
      return;
    }

    const updatedWishlist = [...existingWishlist, wishlistItem];
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

    toast(`❤️ Added to wishlist!`, {
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
            <span className="text-cyan-400 font-semibold mr-2">Page 2</span>
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
                  onClick={() => handleAddToWishlist(item)}
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
                  <span className="text-gray-400 text-sm ml-2">({item.count})</span>
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
                  p === 2 
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
