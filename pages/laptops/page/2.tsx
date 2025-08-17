import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function LaptopPage2() {
  const laptops = [
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/71Ie8YsWrFL._AC_UL320_.jpg`,
      price: `₹69,990`,
      rating: `5.0`,
      count: `(2)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDM0MTE5Mzk3MjEyNDQ0OjE3NTE4ODI4Mzc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDYxNjM0NjgxODMzMjo6Mzo6&url=%2FMSI-i7-12650H-Windows-GeForce-B12UC-2239IN%2Fdp%2FB0DQPTMBKM%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%253Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0DQPTMBKM%26pd_rd_r%3D13822b75-47c0-427b-962f-4fe60861d6d7%26pd_rd_w%3DlgIrt%26pd_rd_wg%3DcxdKi%26pf_rd_p%3D739e670d-dfb3-4be0-9815-d8c5c0372e07%26pf_rd_r%3DT4DDDDA1RMAK8P0YS5Q5%26qid%3D1751882837%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-3-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UL320_.jpg`,
      price: `₹70,990`,
      rating: `4.0`,
      count: `(605)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDM0MTE5Mzk3MjEyNDQ0OjE3NTE4ODI4Mzc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjEyMTE0NjMzMjo6NDo6&url=%2FLenovo-Smartchoice-i5-12450HX-Graphics-83GS003UIN%2Fdp%2FB0CX8XPKWJ%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%253Aamzn1.sym.739e670d-dfb3-4be0-9815-d8c5c0372e07%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CX8XPKWJ%26pd_rd_r%3D13822b75-47c0-427b-962f-4fe60861d6d7%26pd_rd_w%3DlgIrt%26pd_rd_wg%3DcxdKi%26pf_rd_p%3D739e670d-dfb3-4be0-9815-d8c5c0372e07%26pf_rd_r%3DT4DDDDA1RMAK8P0YS5Q5%26qid%3D1751882837%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-4-66673dcf-083f-43ba-b782-d4a436cc5cfb-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `HEROZ Hacker 50 litres Large Size Nylon Travel Laptop Backpack Water Resistant Slim Durable Computer Book Bag Tracking Fits Up to 17.3-inch Laptop (058- ALL) (Navy Blue)`,
      image: `https://m.media-amazon.com/images/I/81JphHgfc8L._AC_UL640_QL65_.jpg https://m.media-amazon.com/images/I/81JphHgfc8L._AC_UL640_QL65_.jpg`,
      price: `₹1,650`,
      rating: `4.1`,
      count: `(4.3K)`,
      link: ``
    },
    {
      title: `HEROZ Hacker 50 litres Large Size Nylon Travel Laptop Backpack Water Resistant Slim Durable Computer Book Bag Tracking Fits Up to 17.3-inch Laptop (058- ALL) (Navy Blue)`,
      image: `https://m.media-amazon.com/images/I/81JphHgfc8L._AC_UL640_QL65_.jpg https://m.media-amazon.com/images/I/81JphHgfc8L._AC_UL640_QL65_.jpg`,
      price: `₹1,650`,
      rating: `4.1`,
      count: `(4.3K)`,
      link: ``
    },
    {
      title: `HP 15, AMD Ryzen 3 7320U (8GB LPDDR5, 512GB SSD) FHD, Anti-Glare, Micro-Edge, 15.6\"/39.6cm, Win 11, Office 21, Silver, 1.59kg, fc0154AU, AMD Radeon Graphics, 1080p FHD Camera Laptop`,
      image: `https://m.media-amazon.com/images/I/719OMbh40jL._AC_UY218_.jpg`,
      price: `₹30,690`,
      rating: `4.0`,
      count: `(1.6K)`,
      link: `https://www.amazon.in/HP-Laptop-15-6-inch-Graphics-fc0154AU/dp/B0D3HG5CMG/ref=sr_1_6?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-6`
    },
    {
      title: `Lenovo V15 Intel Celeron N4500 15.6\" (39.62 cm) FHD (1920x1080) Antiglare 250 Nits Thin and Light Laptop (8GB RAM/256GB SSD/Windows 11 Home/Black/1Y Onsite/1.7 kg), 82QYA00MIN`,
      image: `https://m.media-amazon.com/images/I/516btukUorL._AC_UY218_.jpg`,
      price: `₹20,290`,
      rating: `3.9`,
      count: `(519)`,
      link: `https://www.amazon.in/Lenovo-Celeron-1920x1080-Antiglare-82QYA00MIN/dp/B0C28FKJXG/ref=sr_1_7?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-7`
    },
    {
      title: `Lenovo IdeaPad Slim 3, Intel Core i5-12450H, 12th Gen, 16GB RAM, 512GB SSD, FHD, 14\"/35.5cm, Windows 11, MS Office Home 2024, Grey, 1.37Kg, 83EQ0072IN, Alexa Built-in, 3 mon. Game Pass Laptop`,
      image: `https://m.media-amazon.com/images/I/81Tj8G57-WL._AC_UY218_.jpg`,
      price: `₹48,990`,
      rating: `3.9`,
      count: `(604)`,
      link: `https://www.amazon.in/Lenovo-IdeaPad-i5-12450H-Windows-83EQ0072IN/dp/B0DP7BZ8FD/ref=sr_1_8?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-8`
    },
    {
      title: `HP 255 G10 ‎‎Laptop (AMD Athlon Silver 7120U/ 8GB RAM / 256GB SSD/Windows 11/15.6 INCH ASH Silver`,
      image: `https://m.media-amazon.com/images/I/71rw7cd14mL._AC_UY218_.jpg`,
      price: `₹22,399`,
      rating: `3.9`,
      count: `(26)`,
      link: `https://www.amazon.in/HP-%E2%80%8E%E2%80%8ELaptop-Athlon-Silver-Windows/dp/B0DV984J97/ref=sr_1_9?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Go3x0Lm7fOW24YmXrgcerw9S_neIZ54NQ3dDnUm3ppPQUK7vbn_T_AqK15Z5S4TbgrFdDMTUNMbMQsAnIDQBRRhXQkbHsIcS7jeBBu89u2v8O8HdSsNGQNUhyIFyVEqFhkIT5XU4RGkz4yKUSzJ_mVeOjGLCARLyvSso_9tSJSnNj8de7Ri4gv6-IJ6BFYyKYBJryJHKLavTx05A4hIo5Xf_7kT9yH4CuDvC9C3H7Ww.pPeKs1ZS8k9xTLINExq8SnRn6wMr1dnGSXHTowOmqqk&dib_tag=se&keywords=laptops&qid=1751882837&sprefix=laptops%2Caps%2C214&sr=8-9`
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
            <span className="text-blue-400 font-semibold mr-2">Page 2</span>
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
                  p === 2 
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