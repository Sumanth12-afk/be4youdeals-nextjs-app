import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function LaptopPage5() {
  const laptops = [
    {
      title: `Lenovo LOQ 2024 12Th Gen Intel Core I5-12450HX | NVIDIA RTX 2050 4GB (12GB RAM/512GB SSD/15.6\" (39.6Cm)/Windows 11/Office Home 2024/100% Srgb/3 Mon. Game Pass/Grey/2.4Kg), 83GS00LJIN Gaming Laptop`,
      image: `https://m.media-amazon.com/images/I/81b4LYOyFVL._AC_UY218_.jpg`,
      price: `₹63,990`,
      rating: `N/A`,
      count: ``,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MjE3NTQxMzQzODM3NjE4OjE3NTE4ODMyMjE6c3BfYXRmX25leHQ6MzAwNTc4MzExOTMzNzMyOjowOjo&url=%2FLenovo-I5-12450HX-NVIDIA-Windows-83GS00LJIN%2Fdp%2FB0DPQJBMVK%2Fref%3Dsr_1_18_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.74iU4IFkr14wypO0hA2myTQVosQC-1XdYnI8ZWZ0a4nGjHj071QN20LucGBJIEps.y6_jNvoW_3ZCO3nAYOqx_IZaRyQKV8i4vRhnfOKxKO0%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883221%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-18-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGZfbmV4dA%26psc%3D1&cr=DUB`
    },
    {
      title: `Lenovo V15 G4 AMD Ryzen 5 7520U 15.6 inch FHD Thin & Lite Laptop, AMD Graphics, 16GB DDR5 5500Mhz Ram, 512GB SSD NVMe, Windows 11, Dolby Audio, Arctic Grey, 1 Year Onsite Brand Warranty`,
      image: `https://m.media-amazon.com/images/I/51bfKFtNSQL._AC_UY218_.jpg`,
      price: `₹34,750`,
      rating: `4.0`,
      count: `(74)`,
      link: `https://www.amazon.in/Lenovo-Graphics-5500Mhz-Windows-Warranty/dp/B0F29HNJL1/ref=sr_1_19?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.74iU4IFkr14wypO0hA2myTQVosQC-1XdYnI8ZWZ0a4nGjHj071QN20LucGBJIEps.y6_jNvoW_3ZCO3nAYOqx_IZaRyQKV8i4vRhnfOKxKO0&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-19&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Dell Inspiron 3535, AMD Ryzen 5-7530U, 16 GB RAM, 512 GB SSD, FHD IPS 15.6\"/39.62 cm, 120Hz, Windows 11, MS Office 2024, Platinum Silver, 1.67 kg, Thin & Light Laptop`,
      image: `https://m.media-amazon.com/images/I/61zegicE0CL._AC_UY218_.jpg`,
      price: `₹42,840`,
      rating: `4.1`,
      count: `(10)`,
      link: `https://www.amazon.in/Dell-Inspiron-5-7530U-Windows-Platinum/dp/B0DSFRQTGB/ref=sr_1_20?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.74iU4IFkr14wypO0hA2myTQVosQC-1XdYnI8ZWZ0a4nGjHj071QN20LucGBJIEps.y6_jNvoW_3ZCO3nAYOqx_IZaRyQKV8i4vRhnfOKxKO0&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-20&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Lenovo Smartchoice Ideapad Slim 3 13Th Gen Intel Core I7-13620H 15.3 Inch(38.8Cm) WUXGA IPS Laptop(16GB RAM/512GB SSD/Windows 11/Office Home 2024/Backlit Keyboard/1Yr ADP Free/Grey/1.6Kg),83K100CJIN`,
      image: `https://m.media-amazon.com/images/I/71HMPbAf-iL._AC_UY218_.jpg`,
      price: `₹65,990`,
      rating: `4.0`,
      count: `(38)`,
      link: `https://www.amazon.in/Lenovo-Smartchoice-I7-13620H-Keyboard-83K100CJIN/dp/B0F2162VGQ/ref=sr_1_21?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.74iU4IFkr14wypO0hA2myTQVosQC-1XdYnI8ZWZ0a4nGjHj071QN20LucGBJIEps.y6_jNvoW_3ZCO3nAYOqx_IZaRyQKV8i4vRhnfOKxKO0&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-21&xpid=6G9gll5HrzPUY`
    },
    {
      title: `STRIFF Adjustable Laptop Tabletop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand (Black)`,
      image: `https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_UY218_.jpg`,
      price: `₹249`,
      rating: `4.3`,
      count: `(39.7K)`,
      link: `https://www.amazon.in/STRIFF-Adjustable-Patented-Ventilated-Compatible/dp/B07XCM6T4N/ref=sr_1_17?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-17&xpid=6G9gll5HrzPUY`
    },
    {
      title: `HP 15, AMD Ryzen 5 7520U (8GB LPDDR5, 512GB SSD) Anti-Glare, FHD,15.6-inch (39.6 cm) Win 11, Office 21, FHD Camera with Privacy Shutter,15s-fc0155AU`,
      image: `https://m.media-amazon.com/images/I/71hox+BTuKL._AC_UY218_.jpg`,
      price: `₹35,990`,
      rating: `3.9`,
      count: `(19)`,
      link: `https://www.amazon.in/HP-RyzenTM-15-6-inch-Speakers-15s-fc0155AU/dp/B0CY2R1G3G/ref=sr_1_18?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-18&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Lenovo V15 AMD Ryzen 3 7320U 15.6\" (39.62cm) FHD 250 Nits Antiglare Thin and Light Laptop (8GB/512GB SSD/Windows 11 Home/Arctic Grey/1.63 Kg), 83CQ000XIN`,
      image: `https://m.media-amazon.com/images/I/41kIqmz4S3L._AC_UY218_.jpg`,
      price: `₹26,990`,
      rating: `3.7`,
      count: `(69)`,
      link: `https://www.amazon.in/Lenovo-39-62cm-Antiglare-Windows-83CQ000XIN/dp/B0DVGQPW13/ref=sr_1_19?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-19&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Portronics My Buddy K Portable Laptop Stand with Adjustable Height, Foldable, OverHeating Protection for Laptops & MacBooks (Grey)`,
      image: `https://m.media-amazon.com/images/I/51mN-RUnn5L._AC_UY218_.jpg`,
      price: `₹399`,
      rating: `4.2`,
      count: `(6.2K)`,
      link: `https://www.amazon.in/Portronics-My-Buddy-Adjustable-OverHeating/dp/B00EU6TXC6/ref=sr_1_20?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-20&xpid=6G9gll5HrzPUY`
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
            <span className="text-blue-400 font-semibold mr-2">Page 5</span>
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
                  p === 5 
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