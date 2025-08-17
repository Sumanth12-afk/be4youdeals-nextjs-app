import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function LaptopPage7() {
  const laptops = [
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/61LOOMpEgxL._AC_UL320_.jpg`,
      price: `₹76,962`,
      rating: `4.0`,
      count: `(1.1K)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjEyMTE0NDYzMjo6Mjo6&url=%2FDell-Smartchoice-G15-5530-Gaming-i5-13450HX%2Fdp%2FB0CRKXDX83%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82...`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/71+gQ9gOTuL._AC_UL320_.jpg`,
      price: `₹33,990`,
      rating: `4.0`,
      count: `(1.4K)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDUzMzM5NTg2OTAzMjo6Mzo6&url=%2FHP-i3-1215U-Anti-Glare-15-6inch-Graphics%2Fdp%2FB0CJBL2QWY...`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/81+SKGgJ9yL._AC_UL320_.jpg`,
      price: `₹36,190`,
      rating: `4.0`,
      count: `(493)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjIxNjE0MDUzMjo6NDo6&url=%2FLenovo-IdeaPad-39-62cm-Warranty-82RK006DIN%2Fdp%2FB0B4JPC8GT...`
    },
    {
      title: `HP 15 AMD Ryzen 3 7320U (8GB Ram/512GB SSD/Fhd/15.6" (39.6 Cm)/Backlit Keyboard/Windows 11/Ms Office 21/1.59Kg/Silver) Fc0026Au Laptop`,
      image: `https://m.media-amazon.com/images/I/61Ja6Xa4QaL._AC_UY218_.jpg`,
      price: `₹30,500`,
      rating: `4.1`,
      count: `(1.3K)`,
      link: `https://www.amazon.in/HP-Backlit-Keyboard-Windows-Fc0026Au/dp/B0C3RCR4K7/ref=sr_1_27?...`
    },
    {
      title: `Lenovo V14 G3 14" FHD Laptop, Intel Core i5-1235U, 16GB DDR4 RAM, 512GB SSD, Intel Iris Xe Graphics, Windows 11, Ms-Office Lifetime Validity, Iron Grey,1.6kg, 1 Year Onsite Brand Warranty`,
      image: `https://m.media-amazon.com/images/I/51bHvUvWrnL._AC_UY218_.jpg`,
      price: `₹41,732`,
      rating: `3.0`,
      count: `(13)`,
      link: `https://www.amazon.in/Lenovo-V14-G3-i5-1235U-Ms-Office/dp/B0F4XH5MVJ/ref=sr_1_28?...`
    },
    {
      title: `Sounce Mouse Pad Speed Type Mouse Pad with Antifray Stitched Embroidery Edges, Non-Slip Rubber Base Mousepad for Laptop PC (260mm x 210mm x 2mm) (Black)`,
      image: `https://m.media-amazon.com/images/I/512kJc9mROL._AC_UY218_.jpg`,
      price: `₹99`,
      rating: `4.4`,
      count: `(1.2K)`,
      link: `https://www.amazon.in/Sounce-Antifray-Stitched-Embroidery-Non-Slip/dp/B0BSR2N5W9/ref=sr_1_29?...`
    },
    {
      title: `DELL 14 (2025) Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Intel UHD Graphics/Windows 11 Home) Thin and Light Business Laptop/14.0" HD Display/Grey/1.5 kg/MS Office 2021`,
      image: `https://m.media-amazon.com/images/I/710pC9glKFL._AC_UY218_.jpg`,
      price: `₹30,500`,
      rating: `2.6`,
      count: `(6)`,
      link: `https://www.amazon.in/DELL-Intel-Core-12th-1215U/dp/B08QW6WMSF/ref=sr_1_30?...`
    },
    {
      title: `HP 15, AMD Ryzen 5 7520U, 16GB DDR5, 512GB SSD, (Win 11, Office 21, Silver, 1.59kg), Anti-Glare, Micro-Edge, 15.6-inch(39.6cm), FHD Laptop, AMD Radeon Graphics, 1080p FHD Camera, Backlit KB, fc0156AU`,
      image: `https://m.media-amazon.com/images/I/710mh0SzbHL._AC_UY218_.jpg`,
      price: `₹40,980`,
      rating: `3.4`,
      count: `(71)`,
      link: `https://www.amazon.in/HP-RyzenTM-15-6-inch-Speakers-15s-fc0156AU/dp/B0CY2PLQ8N/ref=sr_1_31?...`
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
            <span className="text-blue-400 font-semibold mr-2">Page 7</span>
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
                  p === 7
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
