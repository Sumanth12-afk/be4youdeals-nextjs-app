import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function LaptopPage1() {
  const laptops = [
    {
      title: `Lenovo {SmartChoice)Chromebook Intel Celeron N4500 (4GB RAM/64GB eMMC 5.1/11.6 Inch (29.46cm)/HD Display/2Wx2 Stereo Speakers/HD Camera/Chrome OS/Blue/1.21Kg), 82UY0014HA`,
      image: `https://m.media-amazon.com/images/I/71eHrg3+O7L._AC_UY218_.jpg`,
      price: `₹15,990`,
      rating: `3.6`,
      count: `(7)`,
      link: `https://www.amazon.in/Lenovo-SmartChoice-Chromebook-Speakers-82UY0014HA/dp/B0F2TMZJ24/ref=sr_1_10?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-10`
    },
    {
      title: `Lenovo LOQ 2024 12Th Gen Intel Core I5-12450HX | NVIDIA RTX 2050 4GB (12GB RAM/512GB SSD/15.6\" (39.6Cm)/Windows 11/Office Home 2024/100% Srgb/3 Mon. Game Pass/Grey/2.4Kg), 83GS00LJIN Gaming Laptop`,
      image: `https://m.media-amazon.com/images/I/81b4LYOyFVL._AC_UY218_.jpg`,
      price: `₹63,990`,
      rating: `N/A`,
      count: ``,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0ODExNTcwMzIzNzQ3NjY2OjE3NTE4ODI4Mzc6c3BfbXRmOjMwMDU3ODMxMTkzMzczMjo6MDo6&url=%2FLenovo-I5-12450HX-NVIDIA-Windows-83GS00LJIN%2Fdp%2FB0DPQJBMVK%2Fref%3Dsr_1_11_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751882837%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&cr=DUB`
    },
    {
      title: `Lenovo Smartchoice Ideapad Slim 3 13Th Gen Intel Core I7-13620H 15.3 Inch(38.8Cm) WUXGA IPS Laptop(16GB RAM/512GB SSD/Windows 11/Office Home 2024/Backlit Keyboard/1Yr ADP Free/Grey/1.6Kg),83K100CJIN`,
      image: `https://m.media-amazon.com/images/I/71HMPbAf-iL._AC_UY218_.jpg`,
      price: `₹65,990`,
      rating: `4.0`,
      count: `(38)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0ODExNTcwMzIzNzQ3NjY2OjE3NTE4ODI4Mzc6c3BfbXRmOjMwMDUzNDkzNTA3MzQzMjo6MDo6&url=%2FLenovo-Smartchoice-I7-13620H-Keyboard-83K100CJIN%2Fdp%2FB0F2162VGQ%2Fref%3Dsr_1_12_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751882837%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-12-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&cr=DUB`
    },
    {
      title: `HP 15s, 12th Gen Intel Core i3-1215U Laptop (8GB DDR4, 512GB SSD) Anti-Glare, 15.6\"/39.6cm,FHD, Win 11, MS Office 21, Silver, 1.69kg, Intel UHD Graphics, HD Camera, Dual Speakers, fy5006tu`,
      image: `https://m.media-amazon.com/images/I/71+gQ9gOTuL._AC_UY218_.jpg`,
      price: `₹33,990`,
      rating: `4.0`,
      count: `(1.4K)`,
      link: `https://www.amazon.in/HP-i3-1215U-Anti-Glare-15-6inch-Graphics/dp/B0CJBL2QWY/ref=sr_1_13?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-13`
    },
    {
      title: `Chuwi HeroBook Pro 14.1'' Intel Celeron N4020 Laptop with 8GB RAM, 256GB SSD, Windows 11, 1TB Expand, FHD IPS, Ultra Slim, USB3.0, Mini-HDMI, Webcam`,
      image: `https://m.media-amazon.com/images/I/61JEULUT8QL._AC_UY218_.jpg`,
      price: `₹17,990`,
      rating: `3.5`,
      count: `(3.2K)`,
      link: `https://www.amazon.in/Chuwi-HeroBook-Pro-Celeron-Mini-HDMI/dp/B0D9RXH8X5/ref=sr_1_14?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-14`
    },
    {
      title: `HP 255 G10, AMD Ryzen 3 7320U Quad Core -(8 GB/512 GB SSD/AMD Radeon Graphics) Thin and Light Business Laptop/15.6\" HD Display/Turbo Silver/1.5 kg`,
      image: `https://m.media-amazon.com/images/I/71YZQa3BTEL._AC_UY218_.jpg`,
      price: `₹25,993`,
      rating: `2.5`,
      count: `(13)`,
      link: `https://www.amazon.in/HP-Radeon-Graphics-Business-Display/dp/B0F6TJ164J/ref=sr_1_15?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-15`
    },
    {
      title: `Acer [SmartChoice Aspire Lite AMD Ryzen 5-5625U Processor, 16 GB/512 GB, Full HD, 15.6\"/39.62 cm, Windows 11 Home, Steel Gray, 1.59 kg, AL15-41, Metal Body, Thin and Light Laptop`,
      image: `https://m.media-amazon.com/images/I/61k0gpxQwCL._AC_UY218_.jpg`,
      price: `₹34,990`,
      rating: `3.9`,
      count: `(1.2K)`,
      link: `https://www.amazon.in/5-5625U-Premium-Windows-AL15-41-Display/dp/B0DG2GCTD7/ref=sr_1_16?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-16`
    },
    {
      title: `Lenovo V15 G4 AMD Athlon Silver 7120U Laptop 8GB LPDDR5 Ram, 512 GB SSD PCIe, Windows 11 Lifetime Validity,15.6\" FHD Screen, AMD Radeon 610M, Silver, 1 Year Brand Warranty`,
      image: `https://m.media-amazon.com/images/I/51+SoS8bWbL._AC_UY218_.jpg`,
      price: `₹25,980`,
      rating: `4.0`,
      count: `(191)`,
      link: `https://www.amazon.in/Lenovo-V15-Lifetime-Validity-Warranty/dp/B0CL7CMTXS/ref=sr_1_17?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-17`
    }
  ];

  const pages = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleAddToWishlist = (laptop) => {
    const wishlistItem = {
      id: `laptop-${Date.now()}`,
      name: laptop.title === "nan" ? "Premium Laptop" : laptop.title,
      price: laptop.price,
      image: laptop.image,
      category: "Laptops",
      addedDate: new Date().toISOString(),
      link: laptop.link
    };

    const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const isAlreadyInWishlist = existingWishlist.some(item => 
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
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl floating-3d"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full opacity-15 blur-3xl floating-3d" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500 rounded-full opacity-8 blur-3xl floating-3d" style={{animationDelay: '4s'}}></div>
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
            <span className="text-blue-400 font-semibold mr-2">Page 1</span>
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
                  onClick={() => handleAddToWishlist(laptop)}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-pink-500 rounded-full backdrop-blur-sm border border-white/20 text-gray-400 hover:text-white transition-all duration-300 z-10"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                <div className="relative mb-6 h-48 bg-white/5 rounded-2xl overflow-hidden">
                  <img 
                    src={laptop.image} 
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
                  p === 1 
                    ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg' 
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