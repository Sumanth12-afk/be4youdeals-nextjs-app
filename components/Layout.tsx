import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useRegion } from "../contexts/RegionContext";
import RegionSelector from "./RegionSelector";
import RegionChangePopup from "./RegionChangePopup";
import { Region, getRegionPath } from "../lib/locationUtils";

const Layout = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistCount, setWishlistCount] = useState(0);
  const [showRegionPopup, setShowRegionPopup] = useState(false);
  const [showRegionNotification, setShowRegionNotification] = useState(false);
  
  // Region context
  const { region, setRegion } = useRegion();
  const router = useRouter();
  
  const [notifications] = useState([
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
        { name: 'Mobiles', redirect: '/mobiles', available: true },
        { name: 'Home Essentials', redirect: '/home-essentials', available: true },
        { name: 'Self-Care', redirect: '/self-care', available: true },
        { name: 'Fashion', redirect: '/fashion', available: true },
        { name: 'Stationery', redirect: '/stationery', available: true },
        { name: 'Gadgets', redirect: '/gadgets', available: true }
      ]
    },
    { 
      category: 'Products', 
      items: [
        { name: 'MacBook Air', redirect: '/laptops', available: true },
        { name: 'JBL Headphones', redirect: '/headphones', available: true },
        { name: 'iPhone 15 Pro', redirect: '/mobiles', available: true },
        { name: 'Samsung Galaxy S25', redirect: '/mobiles', available: true },
        { name: 'Skincare Set', redirect: '/self-care', available: true },
        { name: 'Fashion Accessories', redirect: '/fashion', available: true }
      ]
    },
    { 
      category: 'Popular', 
      items: [
        { name: 'Best Deals', redirect: region === 'IN' ? '/in/deals' : '/deals', available: true },
        { name: 'Under $100', redirect: null, available: false },
        { name: 'New Arrivals', redirect: null, available: false }
      ]
    }
  ];
  
  // Centralized navigation helper for all search-related navigation
  const handleSearchNavigate = (path: string) => {
    // Add region prefix if needed
    let finalPath = path;
    if (region === 'IN') {
      // For India region, add /in/ prefix to all pages except main pages
      if (path === '/' || path.startsWith('/deals') || path.startsWith('/about') || path.startsWith('/contact') || path.startsWith('/wishlist') || path.startsWith('/login') || path.startsWith('/signup')) {
        // Main pages stay as is (they handle region internally)
        finalPath = path;
      } else {
        // Category pages get /in/ prefix
        finalPath = `/in${path}`;
      }
    } else {
      // For US region, use clean path without any prefix
      finalPath = path;
    }
    
    router.push(finalPath);
    setShowSearch(false);
    setSearchQuery("");
  };

  // Handle region change
  const handleRegionChange = (newRegion: Region) => {
    setRegion(newRegion);
    
    // Get current path and determine the correct new path
    const currentPath = router.asPath;
    let newPath = currentPath;
    
    // Remove any existing region prefixes first
    const cleanPath = currentPath.replace(/^\/(us|in)\//, '/');
    
    if (newRegion === 'IN') {
      // Switch to India pages
      if (cleanPath === '/' || cleanPath.startsWith('/deals') || cleanPath.startsWith('/about') || cleanPath.startsWith('/contact') || cleanPath.startsWith('/wishlist') || cleanPath.startsWith('/login') || cleanPath.startsWith('/signup')) {
        // For main pages, stay on same page (they handle region internally)
        newPath = cleanPath;
      } else {
        // For category pages, add /in/ prefix
        newPath = `/in${cleanPath}`;
      }
    } else {
      // Switch to US pages - just use clean path without any prefix
      newPath = cleanPath;
    }
    
    router.push(newPath);
    
    toast.success(`Switched to ${newRegion === 'IN' ? 'India' : 'US'} region`, {
      duration: 2000,
      style: {
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: 'white',
        borderRadius: '12px',
        padding: '12px 20px',
        fontSize: '14px',
        fontWeight: '600'
      }
    });
  };

  const handleShowRegionPopup = () => {
    if (user) {
      setShowRegionPopup(true);
    } else {
      toast.error('Please log in to change your region', {
        duration: 3000,
        style: {
          background: '#dc2626',
          color: '#fff',
          border: '1px solid #b91c1c'
        }
      });
    }
  };

  // Auto-focus search input when it opens
  useEffect(() => {
    if (showSearch) {
      const searchInput = document.querySelector('input[placeholder="Search deals, products..."]') as HTMLInputElement;
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 100);
      }
    }
  }, [showSearch]);

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

  // Show region notification when user logs in
  useEffect(() => {
    if (!user || !region || region === 'UNKNOWN') return;

    const hasSeen = sessionStorage.getItem('hasSeenRegionNotification');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setShowRegionNotification(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [user, region]);

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
    const dealsPath = region === 'IN' ? '/in/deals' : '/deals';
    handleSearchNavigate(dealsPath);
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Image 
                  src="/Vibrics Deals Logo.png?v=2" 
                  alt="Vibrics Deals" 
                  width={48}
                  height={48}
                  className="object-contain drop-shadow-lg"
                  priority
                />
                <span className="text-lg font-bold text-white hidden sm:block">
                  Vibrics Deals
                </span>
              </Link>
            </div>

            {/* Center - Navigation & Search */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                <button 
                  onClick={() => handleSearchNavigate('/')}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Home
                </button>
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
                <button 
                  onClick={() => handleSearchNavigate('/wishlist')}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Wishlist
                </button>
                <button 
                  onClick={() => handleSearchNavigate('/about')}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  About
                </button>
                <button 
                  onClick={() => handleSearchNavigate('/contact')}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact
                </button>
              </nav>

              {/* Search */}
              <div className="relative search-container">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search laptops, phones, fashion, home essentials..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSearch(true)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        if (searchQuery.trim()) {
                          const query = searchQuery.toLowerCase();
                          if (query.includes('laptop')) {
                            handleSearchNavigate('/laptops');
                          } else if (query.includes('headphone')) {
                            handleSearchNavigate('/headphones');
                          } else if (query.includes('mobile') || query.includes('phone') || query.includes('smartphone')) {
                            handleSearchNavigate('/mobiles');
                          } else if (query.includes('home') || query.includes('essential') || query.includes('household')) {
                            handleSearchNavigate('/home-essentials');
                          } else if (query.includes('self') || query.includes('care') || query.includes('skincare') || query.includes('beauty')) {
                            handleSearchNavigate('/self-care');
                          } else if (query.includes('fashion') || query.includes('clothing') || query.includes('apparel') || query.includes('wear')) {
                            handleSearchNavigate('/fashion');
                          } else if (query.includes('stationery') || query.includes('office') || query.includes('pen') || query.includes('notebook')) {
                            handleSearchNavigate('/stationery');
                          } else if (query.includes('gadget') || query.includes('tech') || query.includes('accessory') || query.includes('kitchen')) {
                            handleSearchNavigate('/gadgets');
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
                            { name: 'Mobiles', redirect: '/mobiles', available: true },
                            { name: 'Home Essentials', redirect: '/home-essentials', available: true },
                            { name: 'Self-Care', redirect: '/self-care', available: true },
                            { name: 'Fashion', redirect: '/fashion', available: true },
                            { name: 'Stationery', redirect: '/stationery', available: true },
                            { name: 'Gadgets', redirect: '/gadgets', available: true }
                          ].map((filter) => (
                            <button
                              key={filter.name}
                              onClick={() => {
                                if (filter.available && filter.redirect) {
                                  handleSearchNavigate(filter.redirect);
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
                          <div key={`section-${i}`} className="p-4 border-b border-white/5 last:border-b-0">
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
                                  key={`item-${i}-${j}`}
                                  whileHover={{ scale: 1.02, x: 4 }}
                                  className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                                    item.available 
                                      ? 'text-white hover:bg-white/10' 
                                      : 'text-gray-500 hover:bg-white/5 cursor-not-allowed'
                                  }`}
                                  onClick={() => {
                                    if (item.available && item.redirect) {
                                      handleSearchNavigate(item.redirect);
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
                                handleSearchNavigate('/laptops');
                              } else if (query.includes('headphone')) {
                                handleSearchNavigate('/headphones');
                              } else if (query.includes('mobile') || query.includes('phone') || query.includes('smartphone')) {
                                handleSearchNavigate('/mobiles');
                              } else if (query.includes('home') || query.includes('essential') || query.includes('household')) {
                                handleSearchNavigate('/home-essentials');
                              } else if (query.includes('self') || query.includes('care') || query.includes('skincare') || query.includes('beauty')) {
                                handleSearchNavigate('/self-care');
                              } else if (query.includes('fashion') || query.includes('clothing') || query.includes('apparel') || query.includes('wear')) {
                                handleSearchNavigate('/fashion');
                              } else if (query.includes('stationery') || query.includes('office') || query.includes('pen') || query.includes('notebook')) {
                                handleSearchNavigate('/stationery');
                              } else if (query.includes('gadget') || query.includes('tech') || query.includes('accessory') || query.includes('kitchen')) {
                                handleSearchNavigate('/gadgets');
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

            {/* Right - Region Selector & Auth */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Region Selector */}
              <div className="flex items-center gap-2">
                <RegionSelector 
                  currentRegion={region} 
                  onRegionChange={handleRegionChange}
                  className="mr-2"
                />
                {user && (
                  <button
                    onClick={handleShowRegionPopup}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/20"
                    title="Change Region"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                )}
              </div>
              
              {user ? (
                <div className="flex items-center space-x-3">
                  <span 
                    className="bg-white/10 text-white px-2 py-1 rounded-full border border-white/20 text-xs font-medium max-w-24 md:max-w-32 lg:max-w-48 xl:max-w-56 truncate"
                    title={user.email || user.phoneNumber}
                  >
                    {user.email || user.phoneNumber}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full shadow text-xs font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
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
                aria-label="Toggle search"
                role="button"
                tabIndex={0}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-cyan-400 transition-colors"
                aria-label="Toggle mobile menu"
                role="button"
                tabIndex={0}
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
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 relative z-[60]">
              <div className="pt-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 relative min-w-0">
                <input
                  type="text"
                      placeholder="Search laptops, phones, fashion, home essentials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Search Enter pressed, query:', searchQuery);
                          
                      if (searchQuery.trim()) {
                        const query = searchQuery.toLowerCase();
                            console.log('Processed query:', query);
                            
                        if (query.includes('laptop')) {
                              console.log('Navigating to laptops page');
                              handleSearchNavigate('/laptops');
                        } else if (query.includes('headphone')) {
                              console.log('Navigating to headphones page');
                              handleSearchNavigate('/headphones');
                            } else if (query.includes('mobile') || query.includes('phone') || query.includes('smartphone')) {
                              console.log('Navigating to mobiles page');
                              handleSearchNavigate('/mobiles');
                            } else if (query.includes('home') || query.includes('essential') || query.includes('household')) {
                              console.log('Navigating to home essentials page');
                              handleSearchNavigate('/home-essentials');
                            } else if (query.includes('self') || query.includes('care') || query.includes('skincare') || query.includes('beauty')) {
                              console.log('Navigating to self-care page');
                              handleSearchNavigate('/self-care');
                            } else if (query.includes('fashion') || query.includes('clothing') || query.includes('apparel') || query.includes('wear')) {
                              console.log('Navigating to fashion page');
                              handleSearchNavigate('/fashion');
                            } else if (query.includes('stationery') || query.includes('office') || query.includes('pen') || query.includes('notebook')) {
                              console.log('Navigating to stationery page');
                              handleSearchNavigate('/stationery');
                            } else if (query.includes('gadget') || query.includes('tech') || query.includes('accessory') || query.includes('kitchen')) {
                              console.log('Navigating to gadgets page');
                              handleSearchNavigate('/gadgets');
                        } else {
                              console.log('Showing search toast for:', searchQuery);
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
                        }
                      }
                    }
                  }}
                      autoFocus
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-sm sm:text-base"
                    />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <button
                    onClick={() => {
                      setShowSearch(false);
                      setSearchQuery('');
                    }}
                    className="text-white hover:text-cyan-400 transition-colors p-2 flex-shrink-0"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Quick Filters */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleSearchNavigate('/deals')}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 active:bg-white/30"
                      style={{ touchAction: 'manipulation' }}
                    >
                      All
                    </button>
                    <button
                      onClick={() => handleSearchNavigate('/laptops')}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 active:bg-white/30"
                      style={{ touchAction: 'manipulation' }}
                    >
                      Laptops
                    </button>
                    <button
                      onClick={() => handleSearchNavigate('/headphones')}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 active:bg-white/30"
                      style={{ touchAction: 'manipulation' }}
                    >
                      Headphones
                    </button>
                    <button
                      onClick={() => handleSearchNavigate('/mobiles')}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 active:bg-white/30"
                      style={{ touchAction: 'manipulation' }}
                    >
                      Mobiles
                    </button>
                    <button
                      onClick={() => handleSearchNavigate('/home-essentials')}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 active:bg-white/30"
                      style={{ touchAction: 'manipulation' }}
                    >
                      Home Essentials
                    </button>
                    <button
                      onClick={() => handleSearchNavigate('/self-care')}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 active:bg-white/30"
                      style={{ touchAction: 'manipulation' }}
                    >
                      Self-Care
                    </button>
                    <button
                      onClick={() => handleSearchNavigate('/fashion')}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 active:bg-white/30"
                      style={{ touchAction: 'manipulation' }}
                    >
                      Fashion
                    </button>
                    <button
                      onClick={() => handleSearchNavigate('/stationery')}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 active:bg-white/30"
                      style={{ touchAction: 'manipulation' }}
                    >
                      Stationery
                    </button>
                    <button
                      onClick={() => handleSearchNavigate('/gadgets')}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-95 active:bg-white/30"
                      style={{ touchAction: 'manipulation' }}
                    >
                      Gadgets
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-4">
                  <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">CATEGORIES</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleSearchNavigate('/laptops')}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-white font-medium">Laptops</span>
                      </div>
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleSearchNavigate('/headphones')}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-white font-medium">Headphones</span>
                      </div>
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
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
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-white font-medium">Mobiles</span>
                      </div>
                      <span className="text-gray-500 text-xs bg-gray-700/50 px-2 py-1 rounded-full">Soon</span>
                    </button>
                    <button
                      onClick={() => {
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
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-white font-medium">Home Essentials</span>
                      </div>
                      <span className="text-gray-500 text-xs bg-gray-700/50 px-2 py-1 rounded-full">Soon</span>
                    </button>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Search button clicked, query:', searchQuery);
                    
                    if (searchQuery.trim()) {
                      const query = searchQuery.toLowerCase();
                      console.log('Processed query:', query);
                      
                      if (query.includes('laptop')) {
                        console.log('Navigating to laptops page');
                        handleSearchNavigate('/laptops');
                      } else if (query.includes('headphone')) {
                        console.log('Navigating to headphones page');
                        handleSearchNavigate('/headphones');
                      } else if (query.includes('mobile') || query.includes('phone') || query.includes('smartphone')) {
                        console.log('Navigating to mobiles page');
                        handleSearchNavigate('/mobiles');
                      } else if (query.includes('home') || query.includes('essential') || query.includes('household')) {
                        console.log('Navigating to home essentials page');
                        handleSearchNavigate('/home-essentials');
                      } else if (query.includes('self') || query.includes('care') || query.includes('skincare') || query.includes('beauty')) {
                        console.log('Navigating to self-care page');
                        handleSearchNavigate('/self-care');
                      } else if (query.includes('fashion') || query.includes('clothing') || query.includes('apparel') || query.includes('wear')) {
                        console.log('Navigating to fashion page');
                        handleSearchNavigate('/fashion');
                      } else if (query.includes('stationery') || query.includes('office') || query.includes('pen') || query.includes('notebook')) {
                        console.log('Navigating to stationery page');
                        handleSearchNavigate('/stationery');
                      } else if (query.includes('gadget') || query.includes('tech') || query.includes('accessory') || query.includes('kitchen')) {
                        console.log('Navigating to gadgets page');
                        handleSearchNavigate('/gadgets');
                      } else {
                        console.log('Showing search toast for:', searchQuery);
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
                      }
                    }
                  }}
                  className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 shadow-lg"
                >
                  Search for '{searchQuery || 'all deals'}'
                </button>
              </div>
            </div>
          )}

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <>
              {/* Overlay */}
              <div 
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <div className="md:hidden mt-4 pb-4 border-t border-white/10 relative z-50">
              <nav className="flex flex-col space-y-4 pt-4">
                {/* Mobile Region Selector */}
                <div className="px-4 pb-2">
                  <div className="flex items-center gap-2">
                    <RegionSelector 
                      currentRegion={region} 
                      onRegionChange={handleRegionChange}
                      className="flex-1"
                    />
                    {user && (
                      <button
                        onClick={() => {
                          handleShowRegionPopup();
                          setMobileMenuOpen(false);
                        }}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 border border-white/20"
                        title="Change Region"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => {
                    handleSearchNavigate('/');
                    setMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Home
                </button>
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
                <button 
                  onClick={() => {
                    handleSearchNavigate('/wishlist');
                    setMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Wishlist
                </button>
                <button 
                  onClick={() => {
                    handleSearchNavigate('/about');
                    setMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  About
                </button>
                <button 
                  onClick={() => {
                    handleSearchNavigate('/contact');
                    setMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact
                </button>
                
                {/* Mobile Auth */}
                <div className="pt-4 border-t border-white/10">
                  {user ? (
                    <div className="space-y-3">
                      <div 
                        className="bg-white/10 text-white px-3 py-2 rounded-full border border-white/20 text-sm font-medium text-center max-w-full truncate"
                        title={user.email || user.phoneNumber}
                      >
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
            </>
          )}
        </div>
      </header>

      <main className="pt-24">
        {children}
        
        {/* Floating Action Buttons */}
        <FloatingActionButtons 
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
                  priority
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

      {/* Region Change Popup */}
      <RegionChangePopup
        isOpen={showRegionPopup}
        onClose={() => setShowRegionPopup(false)}
        currentRegion={region}
        onRegionChange={handleRegionChange}
      />


        {/* Region Notification */}
        <AnimatePresence>
          {showRegionNotification && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-4 right-4 z-50 max-w-sm"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 backdrop-blur-sm border border-blue-200 rounded-xl p-4 shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 font-semibold text-sm mb-1">
                      {region === 'IN' ? 'Missing Out on USA Deals?' : '🇮🇳 Missing Out on India Deals?'}
                    </h3>
                    <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                      {region === 'IN' 
                        ? '🔥 Hot US deals with massive savings! Switch now to unlock exclusive offers!' 
                        : '💰 Amazing India deals with unbeatable prices! Switch now to discover incredible savings!'
                      }
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setShowRegionNotification(false);
                          sessionStorage.setItem('hasSeenRegionNotification', 'true');
                          handleRegionChange(region === 'IN' ? 'US' : 'IN');
                        }}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors duration-200"
                      >
                        {region === 'IN' ? '🚀 Get USA Deals' : '🚀 Get India Deals'}
                      </button>
                      <button
                        onClick={() => {
                          setShowRegionNotification(false);
                          sessionStorage.setItem('hasSeenRegionNotification', 'true');
                        }}
                        className="px-3 py-1.5 text-gray-600 hover:text-gray-800 text-xs font-medium transition-colors duration-200"
                      >
                        Later
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setShowRegionNotification(false);
                      sessionStorage.setItem('hasSeenRegionNotification', 'true');
                    }}
                    className="flex-shrink-0 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
};

// Separated Floating Action Buttons Component
function FloatingActionButtons({ 
  wishlistCount, 
  notifications, 
  showNotifications, 
  setShowNotifications, 
  user 
}: any) {
  const router = useRouter();
  const unreadCount = notifications.filter((n: any) => n.unread).length;
  
  return (
    <>
      {/* Notification Panel */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed top-20 right-6 z-50 w-80 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/20 p-4 shadow-2xl"
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

      {/* Wishlist Button - Bottom Left */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
        onClick={() => router.push('/wishlist')}
        className="fixed bottom-6 left-6 z-50 relative bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-full shadow-2xl"
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

      {/* Search Button - Bottom Right (Higher) */}
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
        className="fixed bottom-20 right-6 z-50 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-3 rounded-full shadow-2xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </motion.button>

      {/* Notification Bell - Top Right */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowNotifications(!showNotifications)}
        className="fixed top-20 right-6 z-50 relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-3 rounded-full shadow-2xl"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs">
            {unreadCount}
          </span>
        )}
      </motion.button>
    </>
  );
}

export default Layout;
