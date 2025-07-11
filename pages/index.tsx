// pages/index.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export default function Home() {
  const featuredProducts = [
    {
      title: "Sony WH-1000XM5",
      description: "Industry-leading noise-canceling headphones.",
      image: "https://m.media-amazon.com/images/I/41lArSiD5hL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      link: "/headphones/page/1",
    },
    {
      title: "HP Victus Gaming Laptop",
      description: "Affordable performance for gaming & creation.",
      image: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      link: "/laptops/page/1",
    },
    {
      title: "Apple AirPods Pro",
      description: "Now with Adaptive Audio and H2 chip.",
      image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg",
      link: "/headphones/page/1",
    },
  ];

  return (
    <main className="min-h-screen bg-blue-50 text-gray-800 p-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700 mb-2">Welcome to be4youdeals</h1>
        <p className="text-gray-600 mb-6">
          Explore the best deals on Laptops, Headphones & More.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-xl shadow-xl"
        >
          {featuredProducts.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item.link}>
                <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer">
                  <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Category Grid Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Browse Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "🏠 Home", link: "/", desc: "Back to homepage" },
            { title: "💻 Laptops", link: "/laptops/page/1", desc: "Shop top laptops" },
            { title: "🎧 Headphones", link: "/headphones/page/1", desc: "Noise-canceling & more" },
            { title: "📱 Mobiles", link: "/mobiles/page/1", desc: "Latest smartphones" },
            { title: "🏠 Household", link: "/household/page/1", desc: "Essentials & gadgets" },
            { title: "📞 Contact", link: "/contact", desc: "Get in touch with us" },
          ].map((card, i) => (
            <Link key={i} href={card.link}>
              <div className="bg-white shadow-md hover:shadow-lg transition p-6 rounded-lg cursor-pointer hover:bg-blue-100">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
