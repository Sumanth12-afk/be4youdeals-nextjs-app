import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lime-200 via-yellow-100 to-lime-100 py-20 px-6">
        <div className="absolute inset-0 opacity-10 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-green-800">
              Discover Deals <br /> on What Matters Most
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Explore top offers on tech and home essentials — only at{" "}
              <span className="font-semibold">be4youdeals</span>.
            </p>
            <Link href="/deals">
              <button className="mt-6 bg-black text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-800 transition">
                Shop Now
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[50%]"
          >
            <img
              src="/hero-tech-glow.png"
              alt="Hero Tech Layout"
              width={600}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Explore Categories */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-indigo-700"
        >
          Explore Categories
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {[
            {
              title: "Headphones",
              image: "/headphones.png",
              link: "/headphones/page/1",
              desc: "Experience next-gen sound",
            },
            {
              title: "Mobile Phones",
              image: "/mobiles.png",
              link: "/mobiles/page/1",
              desc: "Discover cutting-edge tech",
            },
            {
              title: "Household",
              image: "/household.png",
              link: "/household/page/1",
              desc: "Essentials & smart gadgets",
            },
            {
              title: "Laptops",
              image: "/laptop.png",
              link: "/laptops/page/1",
              desc: "Power & portability combined",
              cta: "View All →",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto mb-4 h-32 object-contain"
              />
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
              <Link
                href={item.link}
                className="text-indigo-600 text-sm font-semibold hover:underline"
              >
                {item.cta || "Shop Now →"}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
