import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
// import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  // const [scrollProgress, setScrollProgress] = useState(0);
  // const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Back to top button
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>About Us - Vibrics Deals</title>
        <meta name="description" content="Learn about Vibrics Deals - your trusted destination for the best deals on tech and home essentials." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Vibrics Deals Logo.png" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden pt-24">
      {/* Enhanced Background with Gradient and Patterns */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-cyan-900/20 animate-gradient"></div>
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`
        }}></div>
      </motion.div>

      {/* Floating Particles - Optimized */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl floating-3d"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full opacity-15 blur-3xl floating-3d" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500 rounded-full opacity-8 blur-3xl floating-3d" style={{animationDelay: '4s'}}></div>
        
        {/* Geometric Elements */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-cyan-400 rotate-45 opacity-30 floating-3d"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-indigo-400 rounded-full opacity-40 floating-3d" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 border-2 border-purple-400 opacity-25 floating-3d" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 neon-glow">Vibrics Deals</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the story behind your trusted destination for curated everyday deals
            </p>
          </motion.div>

          {/* Our Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <motion.h2 
                className="text-4xl md:text-5xl font-black text-white mb-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="neon-text">Our Mission</span>
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-gray-200 leading-relaxed mb-6">
                    At Vibrics Deals, we're your dedicated deal hunting partner, committed to finding you the most incredible savings on tech, fashion, and lifestyle essentials. Our mission is to transform how you shop by bringing you expertly curated deals that deliver maximum value.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed mb-6">
                    We leverage advanced deal tracking technology and our extensive network of retail partnerships to uncover exclusive discounts and limited-time offers. Every product we feature is carefully vetted for quality, authenticity, and genuine savings potential.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center text-cyan-400 font-semibold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Your deal hunting partner for life
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-3xl font-black text-cyan-400 mb-2">50K+</div>
                        <div className="text-sm text-gray-300">Happy Customers</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-3xl font-black text-indigo-400 mb-2">1000+</div>
                        <div className="text-sm text-gray-300">Deals Curated</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-3xl font-black text-purple-400 mb-2">95%</div>
                        <div className="text-sm text-gray-300">Satisfaction Rate</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-3xl font-black text-cyan-400 mb-2">24/7</div>
                        <div className="text-sm text-gray-300">Deal Updates</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Our Team Section */}
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <motion.h2 
                className="text-4xl md:text-5xl font-black text-white mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="neon-text">Our Team</span>
              </motion.h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-2xl">
        <img
          src="/about-banner.png"
                      alt="Vibrics Deals Team"
                      className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                        <h3 className="text-xl font-bold text-white mb-2">Deal Hunters United</h3>
                        <p className="text-gray-200 text-sm">Passionate about finding you the best deals</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-gray-200 leading-relaxed mb-6">
                    Our diverse team of deal hunters, tech enthusiasts, and customer advocates work around the clock to ensure you never miss out on an incredible deal.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed mb-8">
                    From our headquarters, we monitor thousands of retailers, negotiate exclusive partnerships, and use cutting-edge technology to spot the best discounts before anyone else.
                  </p>
                  
                  {/* Team Values */}
                  <div className="space-y-4">
                    {[
                      { icon: "🎯", title: "Customer First", desc: "Every decision we make puts our customers' needs first" },
                      { icon: "🔍", title: "Quality Curation", desc: "We personally vet every deal for quality and value" },
                      { icon: "⚡", title: "Speed & Reliability", desc: "Lightning-fast updates on the hottest deals" },
                      { icon: "💡", title: "Innovation", desc: "Using technology to revolutionize deal discovery" }
                    ].map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-4 bg-white/5 rounded-xl p-4"
                      >
                        <div className="text-2xl">{value.icon}</div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                          <p className="text-gray-300 text-sm">{value.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-3xl font-black text-white mb-4">Ready to Start Saving?</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Join thousands of smart shoppers who trust Vibrics Deals to find the best deals across all categories.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button-gradient text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl"
                onClick={() => window.location.href = '/'}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                  Explore Deals Now
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50"
        initial={{ scaleX: 0 }}
        style={{ scaleX: scrollYProgress }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-400 to-cyan-400 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
      </div>
    </>
  );
}
