import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function LaptopPage9() {
  const laptops = [
    {
      title: `Amazon Basics Laptop Bag Sleeve Case Cover Pouch for Men & Women | 15.6 Inch Laptop/MacBook, Office/College Laptop Bag | Side Handle | Multiple Pockets | Water Repellent | Shock Absorber (Black)`,
      image: `https://m.media-amazon.com/images/I/814V5+Ve3VL._AC_UY218_.jpg`,
      price: `₹259`,
      rating: `4.2`,
      count: `(678)`,
      link: `https://www.amazon.in/MacBook-College-Multiple-Repellent-Absorber/dp/B0CPJ7TKSB/ref=sr_1_37?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.p028LiN5zkji4vWL4SfgIq3WucsLQrhJXoZqkvB1DIjGjHj071QN20LucGBJIEps.gzHr6x_iYkplpnoQ6M17iy4e8kw98bKDCILRQQPZieo&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-37&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Dyazo 6 Angle Foldable & Portable Laptop Riser Stand Made with Aluminum Alloy | Compatible for Dell, MacBook Air/Pro, Lenovo Acer Hp Asus & Other Laptop from 11.6 inch to 15.6 Inches - Black`,
      image: `https://m.media-amazon.com/images/I/61MSSzgvXOL._AC_UY218_.jpg`,
      price: `₹379`,
      rating: `4.3`,
      count: `(14.8K)`,
      link: `https://www.amazon.in/Dyazo-Foldable-Portable-Aluminum-Compatible/dp/B099ZXYCWP/ref=sr_1_33?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-33&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Lenovo IdeaPad Slim 3, Intel Core i3, 12th Gen, 8GB RAM, 512GB SSD, FHD, 15.6"/39.62cm, Windows 11, Office Home 2024, Arctic Grey, 1.63Kg, 82RK01ABIN`,
      image: `https://m.media-amazon.com/images/I/81+SKGgJ9yL._AC_UY218_.jpg`,
      price: `₹36,190`,
      rating: `4.0`,
      count: `(493)`,
      link: `https://www.amazon.in/Lenovo-IdeaPad-39-62cm-Warranty-82RK006DIN/dp/B0B4JPC8GT/ref=sr_1_34?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-34&xpid=6G9gll5HrzPUY`
    },
    {
      title: `EDNITA Mini Laptop Stand for Desk | Portable Metal PC Desk Stand, Aluminium Cooling Pad Mini Clip Compatible with MacBook, Lenovo, Dell, HP, Acer & Other Laptops Pack of-2 (Silver)`,
      image: `https://m.media-amazon.com/images/I/61ZejdSL77L._AC_UY218_.jpg`,
      price: `₹198`,
      rating: `4.3`,
      count: `(354)`,
      link: `https://www.amazon.in/EDNITA-Portable-Aluminium-Cooling-Compatible/dp/B0D7Z944C7/ref=sr_1_35?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-35&xpid=6G9gll5HrzPUY`
    },
    {
      title: `LS LAPSTER Quality Assured Universal Silicone 15.6" Keyboard Protector Skin | Keyboard Dust Cover | Keyguard`,
      image: `https://m.media-amazon.com/images/I/61VI+sDx5KL._AC_UY218_.jpg`,
      price: `₹99`,
      rating: `3.4`,
      count: `(10K)`,
      link: `https://www.amazon.in/Universal-Silicone-Keyboard-Protector-Keyguard/dp/B0994GP1CX/ref=sr_1_36?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-36&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Zebronics NC5500D Powerful Laptop Cooler with Dual 125mm Fans, Silent Operation, Adjustable Fan Speed, USB, 5 Step Retractable Stand and Mobile Holder`,
      image: `https://m.media-amazon.com/images/I/81RSzw0VAeL._AC_UY218_.jpg`,
      price: `₹799`,
      rating: `3.8`,
      count: `(1.7K)`,
      link: `https://www.amazon.in/Zebronics-Powerful-Operation-Adjustable-Retractable/dp/B0C663VVP1/ref=sr_1_37?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-37&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Lenovo IdeaPad Slim 3 13th Gen Intel Core i5-13420H 15.3"(38.8cm) WUXGA IPS Laptop (16GB RAM/512GB SSD/Win 11/Office 2024/Backlit/IR Camera/Grey/1.6Kg)`,
      image: `https://m.media-amazon.com/images/I/71D9HSayVSL._AC_UY218_.jpg`,
      price: `₹60,990`,
      rating: `4.0`,
      count: `(38)`,
      link: `https://www.amazon.in/Lenovo-IdeaPad-i5-13420H-Backlit-83K100CGIN/dp/B0F637DPFW/ref=sr_1_38_sspa?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-38-spons&xpid=6G9gll5HrzPUY`
    },
    {
      title: `HP Victus, 13th Gen Intel Core i5-13420H, 6 GB RTX 3050 Gaming Laptop, (Upgradable 16GB DDR4, 512GB SSD) 144Hz, IPS, 15.6" FHD, Win 11, M365* Office24, Mica Silver`,
      image: `https://m.media-amazon.com/images/I/71UDN7Akd9L._AC_UY218_.jpg`,
      price: `₹70,990`,
      rating: `2.5`,
      count: `(4)`,
      link: `https://www.amazon.in/HP-i5-13420H-Upgradable-15-6inch-fa2700TX/dp/B0DTYZ2CG8/ref=sr_1_39_sspa?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.bgfInI0cZ5NFRk_GtJaXsmUK6i_0xnS2j1z5t21akvI0GhaJGr7Hd8lhHBuYK8IRUjFAP7ySD0TkTLNvpPRj_D7izezotTFLyZItebMmheQ5OjiuM0S9l8tVg49jZ6Kr7VMO1oRXLCVJk_uaqoqMCGdvWzgPP8_UjzCkvSzcg09mag8cB9jlV0L15aFpj-pT.yeeqjiJolTaCbf_zVf99MT9EwCqMOvbPvQkjqS92fNs&dib_tag=se&keywords=laptops&qid=1751883242&sprefix=laptops%2Caps%2C214&sr=8-39-spons&xpid=6G9gll5HrzPUY`
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
            <span className="text-blue-400 font-semibold mr-2">Page 9</span>
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
                  p === 9
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
