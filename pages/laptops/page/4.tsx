import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function LaptopPage4() {
  const laptops = [
    {
      title: `Lenovo V14 G3, 12th Gen Intel Core i7-1255U Upto 4.70Ghz (16GB RAM/512GB SSD/Windows 11) 14.0\" FHD Display Thin and Light Laptop/Iron Grey /1.70 kg 1 Year Onsite Brand Warranty`,
      image: `https://m.media-amazon.com/images/I/519RoeX1P4L._AC_UY218_.jpg`,
      price: `₹45,990`,
      rating: `4.0`,
      count: `(55)`,
      link: `https://www.amazon.in/Lenovo-i7-1255U-4-70Ghz-Windows-Warranty/dp/B0F32ZBDNJ/ref=sr_1_18?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-18`
    },
    {
      title: `Acer Aspire 3 Laptop Intel Core Celeron N4500 Processor Laptop (8 GB LPDDR4X SDRAM/256 GB SSD/Win11 Home/38 WHR/HD Webcam) A324-45 with 35.56 cm (14\") HD Display, Pure Silver, 1.3 KG`,
      image: `https://m.media-amazon.com/images/I/61Y8j1QN5YL._AC_UY218_.jpg`,
      price: `₹21,490`,
      rating: `3.4`,
      count: `(397)`,
      link: `https://www.amazon.in/Acer-Celeron-Processor-LPDDR4X-A324-45/dp/B0D7PSYS6B/ref=sr_1_19?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-19`
    },
    {
      title: `JioBook 11 with Lifetime Office/Android 4G Laptop Mediatek 8788 (JioOS) / Octa-core/ 4GB RAM / 64 eMMC Storage/Thin and Light Laptop (11.6 inch, 990 Grams)/ Dual Band WiFi + SIM/Blue`,
      image: `https://m.media-amazon.com/images/I/61IDcxw27+L._AC_UY218_.jpg`,
      price: `₹12,990`,
      rating: `3.0`,
      count: `(400)`,
      link: `https://www.amazon.in/JioBook-Octa-Core-LPDDR4-JioOS-Expandable/dp/B0CKX9PY1H/ref=sr_1_20?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-20`
    },
    {
      title: `HP Victus, 12th Gen Intel Core i7-12650H,NVIDIA RTX 3050, 16GB DDR4, 512GB SSD (Win11, Office21, Blue,2.3kg) 144Hz, 9MS, IPS, 15.6-inch(39.6cm), Flicker-Free Gaming Laptop, Enhanced Cooling, fa1382TX`,
      image: `https://m.media-amazon.com/images/I/718zbAOG7HL._AC_UY218_.jpg`,
      price: `₹69,490`,
      rating: `3.5`,
      count: `(29)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0ODExNTcwMzIzNzQ3NjY2OjE3NTE4ODI4Mzc6c3BfYnRmOjMwMDUzMzUxNjE0MTMzMjo6MDo6&url=%2FHP-i7-12650H-15-6-inch-Response-fa1382TX%2Fdp%2FB0D81CWDSX%2Fref%3Dsr_1_21_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751882837%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-21-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&cr=DUB`
    },
    {
      title: `HP Smartchoice Victus, AMD Ryzen 5 8645HS, 6GB RTX 3050 AI Gaming Laptop, 31 TOPS Upgradable (Upto 32GB) 16GB DDR5, 512GB SSD, 144Hz,IPS, 15.6\"/39.6cm, FHD, Win11, M365* Office24,Blue, 2.3kg, fb3009AX`,
      image: `https://m.media-amazon.com/images/I/71rqzBi-2CL._AC_UY218_.jpg`,
      price: `₹67,990`,
      rating: `3.3`,
      count: `(17)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0ODExNTcwMzIzNzQ3NjY2OjE3NTE4ODI4Mzc6c3BfYnRmOjMwMDU4OTI0MzQ0NTEzMjo6MDo6&url=%2FHP-Smartchoice-Upgradable-Office24-fb3009AX%2Fdp%2FB0DTYX4VMP%2Fref%3Dsr_1_22_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751882837%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1&cr=DUB`
    },
    {
      title: `ShineXPro Microfiber Cloth For Car - Puremagic 1100 Gsm Twisted Loop Super Absorbent Towel - Edgeless Design With Plush Pile, Lint Free Cloth For Drying & Detailing, Transparent`,
      image: `https://m.media-amazon.com/images/I/71tPu1JwI8L._AC_UL640_QL65_.jpg https://m.media-amazon.com/images/I/71tPu1JwI8L._AC_UL640_QL65_.jpg`,
      price: `₹599`,
      rating: `4.4`,
      count: `(8.3K)`,
      link: ``
    },
    {
      title: `ShineXPro Microfiber Cloth For Car - Puremagic 1100 Gsm Twisted Loop Super Absorbent Towel - Edgeless Design With Plush Pile, Lint Free Cloth For Drying & Detailing, Transparent`,
      image: `https://m.media-amazon.com/images/I/71tPu1JwI8L._AC_UL640_QL65_.jpg https://m.media-amazon.com/images/I/71tPu1JwI8L._AC_UL640_QL65_.jpg`,
      price: `₹599`,
      rating: `4.4`,
      count: `(8.3K)`,
      link: ``
    },
    {
      title: `HP 15, 13th Gen Intel Core i5-1335U (16GB DDR4, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6''/39.6cm, Win11, M365 Basic(1yr)* Office24, Silver,1.59kg, fd0577TU, Iris Xe, FHD Camera w/Shutter Laptop`,
      image: `https://m.media-amazon.com/images/I/71bagLp2sXL._AC_UY218_.jpg`,
      price: `₹55,990`,
      rating: `3.6`,
      count: `(20)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MjE3NTQxMzQzODM3NjE4OjE3NTE4ODMyMjE6c3BfYXRmX25leHQ6MzAwNTU5NjYxMTA1ODMyOjowOjo&url=%2FHP-i5-1335U-Anti-Glare-Micro-Edge-fd0577TU%2Fdp%2FB0F4R6H3NB%2Fref%3Dsr_1_17_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.74iU4IFkr14wypO0hA2myTQVosQC-1XdYnI8ZWZ0a4nGjHj071QN20LucGBJIEps.y6_jNvoW_3ZCO3nAYOqx_IZaRyQKV8i4vRhnfOKxKO0%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883221%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-17-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGZfbmV4dA%26psc%3D1&cr=DUB`
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
            <span className="text-blue-400 font-semibold mr-2">Page 4</span>
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
                  p === 4 
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
