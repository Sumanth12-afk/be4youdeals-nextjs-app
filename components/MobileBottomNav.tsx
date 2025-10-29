// components/MobileBottomNav.tsx - Mobile-friendly bottom navigation
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface NavItemProps {
  icon: string;
  label: string;
  href: string;
  active: boolean;
  badge?: number;
}

const NavItem = ({ icon, label, href, active, badge }: NavItemProps) => {
  return (
    <Link href={href}>
      <motion.a
        className={`relative flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all cursor-pointer ${
          active
            ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400'
            : 'text-gray-400 hover:text-gray-300'
        }`}
        whileTap={{ scale: 0.95 }}
        animate={active ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Icon with badge */}
        <div className="relative">
          <motion.span
            className="text-2xl"
            animate={active ? { y: [0, -5, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.span>
          
          {/* Badge */}
          {badge && badge > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
            >
              {badge > 9 ? '9+' : badge}
            </motion.span>
          )}
        </div>

        {/* Label */}
        <motion.span
          className={`text-xs font-semibold ${active ? 'text-cyan-400' : 'text-gray-400'}`}
          animate={active ? { opacity: 1 } : { opacity: 0.7 }}
        >
          {label}
        </motion.span>

        {/* Active indicator */}
        {active && (
          <motion.div
            layoutId="activeTab"
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
            initial={false}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
      </motion.a>
    </Link>
  );
};

export const MobileBottomNav = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Only render on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load wishlist count
  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setWishlistCount(wishlist.length);
    };
    
    updateWishlistCount();
    
    // Listen for storage changes
    window.addEventListener('storage', updateWishlistCount);
    
    // Custom event for wishlist updates
    window.addEventListener('wishlistUpdated', updateWishlistCount);
    
    return () => {
      window.removeEventListener('storage', updateWishlistCount);
      window.removeEventListener('wishlistUpdated', updateWishlistCount);
    };
  }, []);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { icon: '🏠', label: 'Home', href: '/' },
    { icon: '🔥', label: 'Deals', href: '/deals' },
    { icon: '❤️', label: 'Wishlist', href: '/wishlist', badge: wishlistCount },
    { icon: '👤', label: 'Account', href: '/login' },
  ];

  // Don't render on server-side
  if (!mounted) {
    return <div className="md:hidden h-20" />;
  }

  return (
    <>
      {/* Mobile Bottom Navigation - Only show on small screens */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe ${
          theme === 'light'
            ? 'bg-white/95 border-gray-200'
            : 'bg-gray-900/95 border-white/10'
        } backdrop-blur-xl border-t shadow-2xl`}
      >
        {/* Decorative top gradient */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
        
        <div className="flex justify-around items-center px-2 py-3">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              {...item}
              active={router.pathname === item.href}
            />
          ))}
        </div>

        {/* Safe area spacing for devices with notch */}
        <div className="h-safe-bottom" />
      </motion.div>

      {/* Spacer to prevent content from being hidden behind the nav */}
      <div className="md:hidden h-20" />
    </>
  );
};

export default MobileBottomNav;

