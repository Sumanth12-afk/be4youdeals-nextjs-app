import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function LaptopPage6() {
  const laptops = [
    {
      title: `HP Professional 15, 12th Gen Intel Core Celeron-N4500 Turbo Boost, 8GB DDR4, 256GB SSD, (Win 11 Pro, MSO 21Pro, Gray, 1.59kg), 15.6 inch, UHD Graphics, Numeric KB, Business Laptop`,
      image: `https://m.media-amazon.com/images/I/61Qh9Vy+LwL._AC_UY218_.jpg`,
      price: `₹22,230`,
      rating: `4.6`,
      count: `(7)`,
      link: `https://www.amazon.in/HP-Professional-Celeron-N4500-Graphics-Business/dp/B0FCD9LKLZ/ref=sr_1_21?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-21&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Lenovo LOQ 2024, Intel Core i5-13450HX, 13th Gen, NVIDIA RTX 4050-6GB, 16GB RAM, 512GB SSD, FHD 144Hz, 15.6"/39.6cm, Windows 11, MS Office 21, Grey, 2.4Kg, 83DV007GIN, 1Yr ADP Free Gaming Laptop`,
      image: `https://m.media-amazon.com/images/I/815ZvsHky7L._AC_UY218_.jpg`,
      price: `₹86,990`,
      rating: `4.1`,
      count: `(231)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MjE3NTQxMzQzODM3NjE4OjE3NTE4ODMyMjE6c3BfbXRmOjMwMDQ1NjEyMTE0NjYzMjo6MDo6&url=%2FLenovo-i5-13450HX-300Nits-Graphics-83DV007GIN%2Fdp%2FB0D49W5KZP%2Fref%3Dsr_1_22_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883221%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-22-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&cr=DUB`
    },
    {
      title: `Dell G-series-15-5530-laptop - 15.6-inch FHD, Intel Core i5-13450HX, 16GB DDR5 RAM, 1TB SSD, NVIDIA GeForce RTX 3050, Orange Backlit Keyboard & G-Key, Windows 11 Home, Dark Shadow Gray, 2.65 Kg`,
      image: `https://m.media-amazon.com/images/I/61LOOMpEgxL._AC_UY218_.jpg`,
      price: `₹76,962`,
      rating: `4.0`,
      count: `(1.1K)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo0MjE3NTQxMzQzODM3NjE4OjE3NTE4ODMyMjE6c3BfbXRmOjMwMDQ1NjEyMTE0NDYzMjo6MDo6&url=%2FDell-Smartchoice-G15-5530-Gaming-i5-13450HX%2Fdp%2FB0CRKXDX83%2Fref%3Dsr_1_23_sspa%3Fcrid%3D102YFPKZ8SCP8%26dib%3DeyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc%26dib_tag%3Dse%26keywords%3Dlaptops%26qid%3D1751883221%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D8-23-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1&cr=DUB`
    },
    {
      title: `Primebook 4G, 2025(New, WiFi+4G) Android Based MediaTek MT8788 - (PrimeOS) 4G SIM Slot, Thin and Light Laptop (11.6 Inch, 1.065 Kg, Type C, USB, HDMI, MicroSD) (4GB/64GB eMMC Storage, Black)`,
      image: `https://m.media-amazon.com/images/I/71M+5cFJViL._AC_UY218_.jpg`,
      price: `₹15,990`,
      rating: `4.5`,
      count: `(621)`,
      link: `https://www.amazon.in/Primebook-Android-Based-MediaTek-MT8788/dp/B0D1Y3MVGL/ref=sr_1_24?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-24&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Dyazo Water Resistant Laptop Sleeve/Laptop case/laptop cover with Handle Compatible for 15 Inch to 15.6" Inches laptops & Notebooks - Grey`,
      image: `https://m.media-amazon.com/images/I/81s4wKEliIL._AC_UY218_.jpg`,
      price: `₹299`,
      rating: `4.3`,
      count: `(14.6K)`,
      link: `https://www.amazon.in/Dyazo-Resistant-Compatible-laptops-Notebooks/dp/B09BFV96TS/ref=sr_1_25?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-25&xpid=6G9gll5HrzPUY`
    },
    {
      title: `Primebook S 4G, 2025(New, WiFi+4G) Android Based MediaTek MT8788 - (PrimeOS) 4G SIM Slot, Thin and Light Laptop (11.6 Inch, 1.065 Kg, Type C, USB, HDMI, MicroSD) (4GB/128GB eMMC Storage, Black)`,
      image: `https://m.media-amazon.com/images/I/71M+5cFJViL._AC_UY218_.jpg`,
      price: `₹16,990`,
      rating: `4.5`,
      count: `(621)`,
      link: `https://www.amazon.in/Primebook-4G-Android-MediaTek-MT8788/dp/B0D1Y359QD/ref=sr_1_26?crid=102YFPKZ8SCP8&dib=eyJ2IjoiMSJ9.Df9DXYw7bdu7K-16DTL82L-gX6MPpo8SmBLOkhEyVjd6kHFky4PbBK7FmZf_B_vB7BrUDvf0IrVZGzQ_zfH71FXd9Rv5OM7beWHVoyfGOKneXb3gdEo6FxhUmgsqmv4a4hZO3YHVFJ_M2b-tHlE1gZsf9meYD8nCnW8tdDdkGGZW3GgO7jmoyXNsXeBx631a.IW0awvYQCxh7WJGkuNQ2W9mtvSTJW17cOVJU5RWmKHc&dib_tag=se&keywords=laptops&qid=1751883221&sprefix=laptops%2Caps%2C214&sr=8-26&xpid=6G9gll5HrzPUY`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UL320_.jpg https://m.media-amazon.com/images/I/61LOOMpEgxL._AC_UL320_.jpg https://m.media-amazon.com/images/I/71+gQ9gOTuL._AC_UL320_.jpg https://m.media-amazon.com/images/I/81+SKGgJ9yL._AC_UL320_.jpg`,
      price: `₹70,990 ₹76,962 ₹33,990 ₹36,190`,
      rating: `4.0 4.0 4.0 4.0`,
      count: `(605) (1.1K) (1.4K) (493)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjEyMTE0NjMzMjo6MTo6&url=%2FLenovo-Smartchoice-i5-12450HX-Graphics-83GS003UIN%2Fdp%2FB0CX8XPKWJ%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CX8XPKWJ%26pd_rd_r%3D16827163-391a-47e9-827f-b4ee7d6e2224%26pd_rd_w%3DPDjIL%26pd_rd_wg%3D4kjDO%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DS62AVGAKA0YXV5C425P4%26qid%3D1751883221%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-17-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
    },
    {
      title: `nan`,
      image: `https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UL320_.jpg`,
      price: `₹70,990`,
      rating: `4.0`,
      count: `(605)`,
      link: `https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo2NDkzMDgwODExMzkxODA5OjE3NTE4ODMyMjc6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDQ1NjEyMTE0NjMzMjo6MTo6&url=%2FLenovo-Smartchoice-i5-12450HX-Graphics-83GS003UIN%2Fdp%2FB0CX8XPKWJ%2Fref%3Dsxin_15_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%253Aamzn1.sym.24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26crid%3D102YFPKZ8SCP8%26cv_ct_cx%3Dlaptops%26keywords%3Dlaptops%26pd_rd_i%3DB0CX8XPKWJ%26pd_rd_r%3D16827163-391a-47e9-827f-b4ee7d6e2224%26pd_rd_w%3DPDjIL%26pd_rd_wg%3D4kjDO%26pf_rd_p%3D24e1f0fb-6b39-49f5-b34a-4ebef8eaef82%26pf_rd_r%3DS62AVGAKA0YXV5C425P4%26qid%3D1751883221%26sbo%3DRZvfv%252F%252FHxDF%252BO5021pAnSA%253D%253D%26sprefix%3Dlaptops%252Caps%252C214%26sr%3D1-17-2ec22325-1003-449d-8aaf-c0bcc24717ae-spons%26xpid%3D6G9gll5HrzPUY%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1&cr=DUB`
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
            <span className="text-blue-400 font-semibold mr-2">Page 6</span>
            <span className="text-gray-400">•</span>
            <span className="text-white ml-2">{laptops.length} Products</span>
          </div>
        </motion.div>

        <div className="w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                  p === 6
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
