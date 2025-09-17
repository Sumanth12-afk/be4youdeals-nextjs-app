import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistCount, setWishlistCount] = useState(0);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'deal', message: 'New laptop deals available!', time: '2m ago', unread: true },
    { id: 2, type: 'price', message: 'Price dropped on JBL Headphones', time: '1h ago', unread: true },
    { id: 3, type: 'stock', message: 'Limited stock: HP Laptop', time: '3h ago', unread: false }
  ]);
  
  // Search suggestions data with redirects
  const searchSuggestions = [
    { 
      category: 'Categories', 
      items: [
        { name: 'Laptops', redirect: '/laptops', available: true },
        { name: 'Headphones', redirect: '/headphones', available: true },
        { name: 'Mobiles', redirect: null, available: false },
        { name: 'Home Essentials', redirect: null, available: false }
      ]
    },
    { 
      category: 'Products', 
      items: [
        { name: 'MacBook Air', redirect: '/laptops', available: true },
        { name: 'JBL Headphones', redirect: '/headphones', available: true },
        { name: 'iPhone 15 Pro', redirect: null, available: false },
        { name: 'Gaming Mouse', redirect: null, available: false }
      ]
    },
    { 
      category: 'Popular', 
      items: [
        { name: 'Best Deals', redirect: '/deals', available: true },
        { name: 'Under $100', redirect: null, available: false },
        { name: 'New Arrivals', redirect: null, available: false }
      ]
    }
  ];
  
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    
    // Load wishlist count from localStorage
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlistCount(JSON.parse(savedWishlist).length);
    }
    
    // Close search dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (showSearch && !target.closest('.search-container')) {
        setShowSearch(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      unsubscribe();
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch]);

  const handleLogout = async () => {
    toast("Logging out...", {
      icon: "👋",
      duration: 1500,
      style: {
        background: "#1f2937",
        color: "#fff"
      },
    });
    setTimeout(async () => {
      await auth.signOut();
      window.location.href = "/login";
    }, 1500);
  };

  const handleDealsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/deals');
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <Image 
                  src="/Vibrics Deals Logo.png?v=2" 
                  alt="Vibrics Deals" 
                  width={80}
                  height={80}
                  className="object-contain drop-shadow-lg"
                />
                <span className="text-2xl font-black text-white">
                  Vibrics Deals
                </span>
              </Link>
            </div>

            {/* Center - Navigation & Search */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Home
                </Link>
                <button 
                  onClick={handleDealsClick}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold cursor-pointer flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z" clipRule="evenodd" />
                  </svg>
                  Deals
                </button>
                <button 
                  onClick={() => {
                    // Scroll to categories section on homepage
                    if (router.pathname === '/') {
                      document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      // Navigate to homepage and then scroll
                      router.push('/#categories');
                    }
                  }}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold cursor-pointer flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 15a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" />
                  </svg>
                  Categories
                </button>
                <Link href="/wishlist" className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Wishlist
                </Link>
                <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  About
                </Link>
                <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact
                </Link>
              </nav>

              {/* Search */}
              <div className="relative search-container">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search deals, products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSearch(true)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        if (searchQuery.trim()) {
                          const query = searchQuery.toLowerCase();
                          if (query.includes('laptop')) {
                            router.push('/laptops');
                            setShowSearch(false);
                            setSearchQuery('');
                          } else if (query.includes('headphone')) {
                            router.push('/headphones');
                            setShowSearch(false);
                            setSearchQuery('');
                          } else {
                            toast(`🔍 Searching for "${searchQuery}"...`, {
                              icon: '⚡',
                              style: {
                                background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                                color: 'white',
                                borderRadius: '16px',
                                padding: '12px 20px',
                                fontSize: '14px',
                                fontWeight: '600',
                                boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)'
                              },
                              duration: 3000,
                              position: 'bottom-center'
                            });
                            setShowSearch(false);
                            setSearchQuery('');
                          }
                        }
                      }
                    }}
                    className="w-72 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                  />
                  <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {searchQuery && (
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setShowSearch(false);
                      }}
                      className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Search Dropdown */}
                <AnimatePresence>
                  {showSearch && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl z-50 overflow-hidden"
                    >
                      {/* Quick Filters */}
                      <div className="p-4 border-b border-white/10">
                        <div className="flex flex-wrap gap-2">
                          {[
                            { name: 'All', redirect: '/deals', available: true },
                            { name: 'Laptops', redirect: '/laptops', available: true },
                            { name: 'Headphones', redirect: '/headphones', available: true },
                            { name: 'Mobiles', redirect: null, available: false },
                            { name: 'Under $100', redirect: null, available: false }
                          ].map((filter) => (
                            <button
                              key={filter.name}
                              onClick={() => {
                                if (filter.available && filter.redirect) {
                                  router.push(filter.redirect);
                                  setShowSearch(false);
                                  setSearchQuery('');
                                } else if (!filter.available) {
                                  toast('🚧 Coming Soon!', {
                                    icon: '🔜',
                                    style: {
                                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                      color: 'white',
                                      borderRadius: '16px',
                                      padding: '12px 20px',
                                      fontSize: '14px',
                                      fontWeight: '600',
                                      boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)'
                                    },
                                    duration: 3000,
                                    position: 'bottom-center'
                                  });
                                  setShowSearch(false);
                                } else {
                                  toast(`🔍 Filtering by "${filter.name}"...`, {
                                    icon: '📂',
                                    style: {
                                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                      color: 'white',
                                      borderRadius: '16px',
                                      padding: '12px 20px',
                                      fontSize: '14px',
                                      fontWeight: '600',
                                      boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
                                    },
                                    duration: 3000,
                                    position: 'bottom-center'
                                  });
                                  setShowSearch(false);
                                  setSearchQuery('');
                                }
                              }}
                              className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 ${
                                filter.available 
                                  ? 'bg-white/10 hover:bg-white/20 text-white border-white/20' 
                                  : 'bg-gray-600/30 text-gray-400 border-gray-500/30 cursor-not-allowed'
                              }`}
                            >
                              {filter.name}
                              {!filter.available && (
                                <span className="ml-1 text-xs">🔒</span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Search Suggestions */}
                      <div className="max-h-64 overflow-y-auto">
                        {searchSuggestions.map((section, i) => (
                          <div key={i} className="p-4 border-b border-white/5 last:border-b-0">
                            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                              {section.category}
                            </h4>
                            <div className="space-y-1">
                              {section.items
                                .filter(item => 
                                  searchQuery === '' || 
                                  item.name.toLowerCase().includes(searchQuery.toLowerCase())
                                )
                                .map((item, j) => (
                                <motion.button
                                  key={j}
                                  whileHover={{ scale: 1.02, x: 4 }}
                                  className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                                    item.available 
                                      ? 'text-white hover:bg-white/10' 
                                      : 'text-gray-500 hover:bg-white/5 cursor-not-allowed'
                                  }`}
                                  onClick={() => {
                                    if (item.available && item.redirect) {
                                      router.push(item.redirect);
                                      setShowSearch(false);
                                      setSearchQuery('');
                                    } else if (!item.available) {
                                      toast('🚧 Coming Soon!', {
                                        icon: '🔜',
                                        style: {
                                          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                          color: 'white',
                                          borderRadius: '16px',
                                          padding: '12px 20px',
                                          fontSize: '14px',
                                          fontWeight: '600',
                                          boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)'
                                        },
                                        duration: 3000,
                                        position: 'bottom-center'
                                      });
                                      setShowSearch(false);
                                      setSearchQuery('');
                                    } else {
                                      toast(`🔍 Searching for "${item.name}"...`, {
                                        icon: '⚡',
                                        style: {
                                          background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                                          color: 'white',
                                          borderRadius: '16px',
                                          padding: '12px 20px',
                                          fontSize: '14px',
                                          fontWeight: '600',
                                          boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)'
                                        },
                                        duration: 3000,
                                        position: 'bottom-center'
                                      });
                                      setShowSearch(false);
                                      setSearchQuery('');
                                    }
                                  }}
                                >
                                  <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span className="text-sm">{item.name}</span>
                                    {item.available && item.redirect && (
                                      <svg className="w-3 h-3 text-green-400 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>
                                    )}
                                    {!item.available && (
                                      <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded-full ml-auto">Soon</span>
                                    )}
                                  </div>
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Search Footer */}
                      <div className="p-3 bg-slate-800/50">
                        <button 
                          className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white py-2 rounded-lg text-sm font-semibold hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300"
                          onClick={() => {
                            if (searchQuery.trim()) {
                              const query = searchQuery.toLowerCase();
                              if (query.includes('laptop')) {
                                router.push('/laptops');
                                setShowSearch(false);
                                setSearchQuery('');
                              } else if (query.includes('headphone')) {
                                router.push('/headphones');
                                setShowSearch(false);
                                setSearchQuery('');
                              } else {
                                toast(`🔍 Searching for "${searchQuery}"...`, {
                                  icon: '⚡',
                                  style: {
                                    background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                                    color: 'white',
                                    borderRadius: '16px',
                                    padding: '12px 20px',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)'
                                  },
                                  duration: 3000,
                                  position: 'bottom-center'
                                });
                                setShowSearch(false);
                                setSearchQuery('');
                              }
                            } else {
                              toast('🔍 Advanced Search Coming Soon!', {
                                icon: '🚀',
                                style: {
                                  background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                                  color: 'white',
                                  borderRadius: '16px',
                                  padding: '12px 20px',
                                  fontSize: '14px',
                                  fontWeight: '600'
                                },
                                duration: 3000,
                                position: 'bottom-center'
                              });
                              setShowSearch(false);
                            }
                          }}
                        >
                          Search for "{searchQuery || 'all deals'}"
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right - Auth */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full border border-white/20 text-sm font-medium">
                    {user.email || user.phoneNumber}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full shadow text-sm font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link 
                  href="/login" 
                  className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 shadow-lg"
                >
                  Login
                </Link>
              )}
            </div>



            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Mobile Search Icon */}
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {showSearch && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="pt-4">
                <input
                  type="text"
                  placeholder="Search deals, products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      if (searchQuery.trim()) {
                        const query = searchQuery.toLowerCase();
                        if (query.includes('laptop')) {
                          router.push('/laptops');
                          setShowSearch(false);
                          setSearchQuery('');
                        } else if (query.includes('headphone')) {
                          router.push('/headphones');
                          setShowSearch(false);
                          setSearchQuery('');
                        } else {
                          toast(`🔍 Searching for "${searchQuery}"...`, {
                            icon: '⚡',
                            style: {
                              background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                              color: 'white',
                              borderRadius: '16px',
                              padding: '12px 20px',
                              fontSize: '14px',
                              fontWeight: '600',
                              boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)'
                            },
                            duration: 3000,
                            position: 'bottom-center'
                          });
                          setShowSearch(false);
                          setSearchQuery('');
                        }
                      }
                    }
                  }}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>
            </div>
          )}

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link 
                  href="/" 
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Home
                </Link>
                <button 
                  onClick={(e) => {
                    handleDealsClick(e);
                    setMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold text-left flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z" clipRule="evenodd" />
                  </svg>
                  Deals
                </button>
                <button 
                  onClick={() => {
                    // Scroll to categories section on homepage
                    if (router.pathname === '/') {
                      document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      // Navigate to homepage and then scroll
                      router.push('/#categories');
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold text-left flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zM2 15a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z" />
                  </svg>
                  Categories
                </button>
                <Link 
                  href="/wishlist" 
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Wishlist
                </Link>
                <Link 
                  href="/about" 
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact
                </Link>
                
                {/* Mobile Auth */}
                <div className="pt-4 border-t border-white/10">
                  {user ? (
                    <div className="space-y-3">
                      <div className="bg-white/10 text-white px-3 py-2 rounded-full border border-white/20 text-sm font-medium text-center">
                        {user.email || user.phoneNumber}
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full shadow text-sm font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <Link 
                      href="/login" 
                      className="block w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 shadow-lg text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                  )}
                </div>
          </nav>
            </div>
          )}
        </div>
      </header>

      <main className="pt-24">
        {children}
        
        {/* Floating Action Button */}
        <FloatingActionButton 
          wishlistCount={wishlistCount}
          notifications={notifications}
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
          user={user}
        />
      </main>

      <footer className="glass-dark border-t border-white/10 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-4">
            {/* Brand Info */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Image 
                  src="/Vibrics Deals Logo.png?v=2" 
                  alt="Vibrics Deals" 
                  width={64}
                  height={64}
                  className="object-contain drop-shadow-md"
                />
                <h3 className="text-xl font-bold text-white">Vibrics Deals</h3>
              </div>
              <p className="text-sm text-gray-400 max-w-md">
                Your trusted destination for the best deals on tech and home essentials. 
                Discover quality products at unbeatable prices.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/about" className="hover:text-cyan-400 transition-colors font-medium">About Us</Link>
              <Link href="/contact" className="hover:text-cyan-400 transition-colors font-medium">Contact</Link>
              <span className="text-gray-500">•</span>
              <span className="text-cyan-400 font-medium">🔥 Daily Deals</span>
              <span className="text-gray-500">•</span>
              <span className="text-green-400 font-medium">✓ Verified Products</span>
            </div>
            
            {/* Copyright */}
            <div className="text-center text-xs text-gray-500 pt-2 border-t border-white/10 w-full">
              © 2024 Vibrics Deals. All rights reserved. | Made with ❤️ for deal hunters
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Floating Action Button Component
function FloatingActionButton({ 
  wishlistCount, 
  notifications, 
  showNotifications, 
  setShowNotifications, 
  user 
}: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  
  const unreadCount = notifications.filter((n: any) => n.unread).length;
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Notification Panel */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/20 p-4 shadow-2xl"
          >
            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
              <span>🔔</span>
              Notifications ({unreadCount} new)
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {notifications.map((notification: any) => (
                <motion.div
                  key={notification.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-3 rounded-xl border ${
                    notification.unread 
                      ? 'bg-blue-500/20 border-blue-400/30' 
                      : 'bg-white/5 border-white/10'
                  } cursor-pointer`}
                >
                  <p className="text-white text-sm font-medium">{notification.message}</p>
                  <p className="text-gray-400 text-xs mt-1">{notification.time}</p>
                </motion.div>
              ))}
            </div>
            <button 
              onClick={() => setShowNotifications(false)}
              className="w-full mt-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white py-2 rounded-xl text-sm font-semibold"
            >
              Mark All Read
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mb-4 flex flex-col gap-3 items-end"
          >
            {/* Wishlist Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                router.push('/wishlist');
              }}
              className="relative bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-full shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </motion.button>

            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                toast('🔍 Smart Search Coming Soon!', {
                  icon: '⚡',
                  style: {
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                    color: 'white',
                    borderRadius: '16px',
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)'
                  },
                  duration: 3000,
                  position: 'bottom-center'
                });
              }}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-full shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </motion.button>

            {/* Comparison Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                toast('📊 Comparison Tool Coming Soon!', {
                  icon: '🛠️',
                  style: {
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    borderRadius: '16px',
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontWeight: '600',
                    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
                  },
                  duration: 3000,
                  position: 'bottom-center'
                });
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-full shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative bg-gradient-to-r from-indigo-600 to-cyan-600 text-white p-5 rounded-full shadow-2xl"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isExpanded ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )}
        </motion.div>
        
        {/* Notification Badge */}
        {unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
          >
            {unreadCount}
          </motion.span>
        )}
      </motion.button>

      {/* Notification Bell */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowNotifications(!showNotifications)}
        className="mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-3 rounded-full shadow-lg"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </motion.button>
    </div>
  );
}

export default Layout;
