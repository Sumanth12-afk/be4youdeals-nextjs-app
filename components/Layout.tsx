import Link from "next/link";
import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import toast from "react-hot-toast";

const Layout = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

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
    
    // If we're not on the home page, navigate there first
    if (router.pathname !== '/') {
      router.push('/#categories');
      return;
    }
    
    // If we're on the home page, smooth scroll to categories
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-black text-white hover:text-cyan-400 transition-colors">
              be4youdeals
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-semibold">
                Home
              </Link>
              <button 
                onClick={handleDealsClick}
                className="text-white hover:text-cyan-400 transition-colors font-semibold cursor-pointer"
              >
                Deals
              </button>
              <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-semibold">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors font-semibold">
                Contact
              </Link>
            </nav>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full border border-white/20 text-sm font-medium">
                    {user.email || user.phoneNumber}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full shadow text-sm font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300"
                  >
                    Logout
                  </button>
                </>
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
            <div className="md:hidden">
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

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link 
                  href="/" 
                  className="text-white hover:text-cyan-400 transition-colors font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <button 
                  onClick={(e) => {
                    handleDealsClick(e);
                    setMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold text-left"
                >
                  Deals
                </button>
                <Link 
                  href="/about" 
                  className="text-white hover:text-cyan-400 transition-colors font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-cyan-400 transition-colors font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
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

      <main className="pt-24">{children}</main>

      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-white/10 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link href="/about" className="hover:text-cyan-400 transition-colors font-medium">About</Link>
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors font-medium">Privacy</Link>
            <Link href="/disclosure" className="hover:text-cyan-400 transition-colors font-medium">Disclosure</Link>
          </div>
          <div className="text-center mt-6 text-xs text-gray-500">
            © 2024 be4youdeals. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
