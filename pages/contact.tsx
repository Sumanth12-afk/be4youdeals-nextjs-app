import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl floating-3d"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full opacity-15 blur-3xl floating-3d" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500 rounded-full opacity-8 blur-3xl floating-3d" style={{animationDelay: '4s'}}></div>
        
        {/* Message Icons Floating */}
        <div className="absolute top-20 right-20 text-4xl text-cyan-400 opacity-20 floating-3d">💬</div>
        <div className="absolute bottom-40 left-20 text-3xl text-indigo-400 opacity-30 floating-3d" style={{animationDelay: '1s'}}>📧</div>
        <div className="absolute top-1/2 right-1/3 text-2xl text-purple-400 opacity-25 floating-3d" style={{animationDelay: '3s'}}>✨</div>
      </div>

      <div className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 neon-glow">Let's Chat</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have a question about a deal? Want to suggest a product? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                className="bg-white/10 backdrop-blur-xl shadow-2xl rounded-3xl px-8 py-10 border border-white/20"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label htmlFor="name" className="block text-white font-semibold mb-3 text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label htmlFor="email" className="block text-white font-semibold mb-3 text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label htmlFor="message" className="block text-white font-semibold mb-3 text-sm">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your question, suggestion, or feedback..."
                      className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 backdrop-blur-sm resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -3,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                          </svg>
            Send Message
                        </span>
                      )}
                    </motion.button>
                  </motion.div>

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="bg-green-500/20 border border-green-400/30 text-green-300 rounded-2xl p-4 text-center"
                    >
                      <svg className="w-6 h-6 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Message sent successfully! We'll get back to you soon.
                    </motion.div>
                  )}
        </form>
              </motion.div>
            </motion.div>

            {/* Contact Information & 3D Elements */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="space-y-8"
            >
              {/* Floating 3D Message Bubble */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative mb-12"
              >
                <div className="bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl">
                  <div className="text-6xl text-center mb-4">💌</div>
                  <h3 className="text-2xl font-bold text-white text-center mb-2">We're Here to Help</h3>
                  <p className="text-gray-300 text-center">
                    Whether you need deal assistance, have feedback, or want to partner with us, we're just a message away.
                  </p>
                </div>
              </motion.div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {[
                  {
                    icon: "📧",
                    title: "Email Us",
                    desc: "Get a response within 24 hours",
                    contact: "hello@be4youdeals.com",
                    color: "from-blue-500/20 to-cyan-500/20"
                  },
                  {
                    icon: "💬",
                    title: "Live Chat",
                    desc: "Available Monday-Friday, 9AM-6PM EST",
                    contact: "Start a conversation",
                    color: "from-green-500/20 to-emerald-500/20"
                  },
                  {
                    icon: "📱",
                    title: "Social Media",
                    desc: "Follow us for the latest deals",
                    contact: "@be4youdeals",
                    color: "from-purple-500/20 to-pink-500/20"
                  }
                ].map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className={`bg-gradient-to-r ${method.color} rounded-2xl p-6 backdrop-blur-sm border border-white/10`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{method.icon}</div>
                      <div>
                        <h4 className="text-white font-bold mb-1">{method.title}</h4>
                        <p className="text-gray-300 text-sm mb-2">{method.desc}</p>
                        <p className="text-cyan-400 font-semibold">{method.contact}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h4 className="text-white font-bold mb-4">Quick Links</h4>
                <div className="space-y-3">
                  {[
                    { text: "Browse All Deals", href: "/" },
                    { text: "About Our Mission", href: "/about" },
                    { text: "Privacy Policy", href: "/privacy" },
                    { text: "Terms & Conditions", href: "/disclosure" }
                  ].map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.text}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}