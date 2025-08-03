import { useEffect, useState } from "react";
import { firebase } from "../lib/firebase";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showUI, setShowUI] = useState(false);

  // Set persistence only in browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      firebase.auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch(console.error);
    }
  }, []);

  const handleLogin = async () => {
    try {
      setError("");
      await firebase.auth().signInWithEmailAndPassword(email, password);
      toast.success("Logged in successfully!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    setShowUI(true);
  }, []);

  useEffect(() => {
    if (!showUI) return;

    const loadUI = async () => {
      const firebaseui = await import("firebaseui");
      await import("firebaseui/dist/firebaseui.css");

      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth());

      ui.start("#firebaseui-auth-container", {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            defaultCountry: "IN",
            recaptchaParameters: {
              type: "image",
              size: "normal",
              badge: "bottomleft"
            }
          }
        ],
        callbacks: {
          signInSuccessWithAuthResult: () => {
            toast.success("Logged in successfully!");
            setTimeout(() => {
              window.location.href = "/";
            }, 800);
            return false;
          }
        }
      });
    };

    loadUI();
  }, [showUI]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Toaster position="top-right" />
      
      {/* Twilight Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 twilight-gradient"></div>
        <div className="absolute inset-0 twilight-radial"></div>
        <div className="absolute inset-0 twilight-texture"></div>
        
        {/* Soft floating orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full opacity-20 blur-3xl soft-float"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-indigo-400 rounded-full opacity-15 blur-3xl soft-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-violet-400 rounded-full opacity-10 blur-3xl soft-float" style={{animationDelay: '4s'}}></div>
        </div>

      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
        {/* Left Panel - Category Cards Scene */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center p-8 lg:p-16 relative"
        >
          <div className="text-center max-w-lg relative z-10">
            {/* Main Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h1 className="text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">
                Your Gateway to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  Curated Everyday Deals
                </span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-200 font-semibold"
              >
                Shop smarter. Save better.
              </motion.p>
            </motion.div>

            {/* Floating Category Cards */}
            <div className="relative">
              {/* Gadgets Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-8 -left-16 w-24 h-32 twilight-card rounded-2xl p-4 text-center category-float-1 drop-shadow-xl"
              >
                <div className="text-3xl mb-2">📱</div>
                <p className="text-sm font-semibold text-white">Gadgets</p>
                {/* Discount Tag */}
                <div className="absolute -top-2 -right-2 neon-badge text-white text-xs font-bold px-2 py-1 rounded-full">
                  50%
                </div>
              </motion.div>

              {/* Fashion Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-12 right-8 w-24 h-32 twilight-card rounded-2xl p-4 text-center category-float-2 drop-shadow-xl"
              >
                <div className="text-3xl mb-2">👗</div>
                <p className="text-sm font-semibold text-white">Fashion</p>
                <div className="absolute -top-2 -right-2 neon-badge text-white text-xs font-bold px-2 py-1 rounded-full">
                  70%
                </div>
              </motion.div>

              {/* Central Home Card (Larger) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                className="w-32 h-40 twilight-card rounded-2xl p-6 text-center mx-auto category-float-3 relative drop-shadow-xl"
              >
                <div className="text-4xl mb-3">🛋️</div>
                <p className="text-base font-bold text-white">Home</p>
                <div className="absolute -top-3 -right-3 neon-badge text-white text-xs font-bold px-2 py-1 rounded-full">
                  SALE
                </div>
              </motion.div>

              {/* Self-care Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-8 -left-12 w-24 h-32 twilight-card rounded-2xl p-4 text-center category-float-4 drop-shadow-xl"
              >
                <div className="text-3xl mb-2">🧴</div>
                <p className="text-sm font-semibold text-white">Self-care</p>
                <div className="absolute -top-2 -right-2 neon-badge text-white text-xs font-bold px-2 py-1 rounded-full">
                  30%
                </div>
              </motion.div>

              {/* Stationery Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-12 right-4 w-24 h-32 twilight-card rounded-2xl p-4 text-center category-float-5 drop-shadow-xl"
              >
                <div className="text-3xl mb-2">✏️</div>
                <p className="text-sm font-semibold text-white">Stationery</p>
                <div className="absolute -top-2 -right-2 neon-badge text-white text-xs font-bold px-2 py-1 rounded-full">
                  25%
                </div>
              </motion.div>

              {/* Additional floating discount badges */}
              <motion.div 
                className="absolute -bottom-4 left-8 neon-badge text-white text-xs font-bold px-3 py-1 rounded-full discount-tag"
                style={{animationDelay: '2s'}}
              >
                💰 Best Deals
              </motion.div>
              
              <motion.div 
                className="absolute bottom-8 -right-8 neon-badge text-white text-xs font-bold px-3 py-1 rounded-full discount-tag"
                style={{animationDelay: '4s'}}
              >
                🔥 Hot Offers
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Panel - Login Form */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center p-8 lg:p-16 relative"
        >
          <div className="w-full max-w-md">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-black text-white mb-2 twilight-glow">
                be4youdeals
              </h2>
              <p className="text-gray-200 font-semibold">Sign in to Unlock Exclusive Deals</p>
            </motion.div>

            {/* Login Container */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
                            {/* Glassmorphism Container */}
              <div className="twilight-login-box rounded-3xl p-8 twilight-glow">
                <AnimatePresence>
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      className="bg-red-500 bg-opacity-20 border border-red-400 text-red-200 rounded-2xl p-4 mb-6 text-sm flex items-center gap-3"
                    >
                      <svg className="w-5 h-5 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Email Input */}
                <div className="mb-6">
                  <label className="block text-white text-sm font-semibold mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-30 transition-all duration-300 backdrop-blur-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password Input */}
                <div className="mb-8">
                  <label className="block text-white text-sm font-semibold mb-3">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-5 py-4 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-30 transition-all duration-300 backdrop-blur-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* Sign In Button */}
                <motion.button
                  onClick={handleLogin}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full twilight-button text-white py-4 px-6 rounded-2xl font-bold shadow-2xl mb-6"
                >
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                    Access Deals
                  </span>
                </motion.button>

                                {/* Divider */}
                <div className="flex items-center my-8">
                  <div className="flex-grow h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                  <span className="mx-6 text-white text-sm font-semibold bg-white bg-opacity-10 px-4 py-1 rounded-full border border-white border-opacity-30 backdrop-blur-sm">
                    or
                  </span>
                  <div className="flex-grow h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                </div>

                {/* Firebase UI Container */}
                <div className="mb-8">
                  {showUI ? (
                    <div id="firebaseui-auth-container" className="firebaseui-custom" />
                  ) : (
                    <div className="text-center py-6">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-orange-400 border-t-transparent"></div>
                      <p className="text-gray-200 text-sm mt-3">Loading sign-in options...</p>
                    </div>
                  )}
                </div>

                {/* Sign Up Link */}
                <div className="text-center pt-4 border-t border-white border-opacity-20">
                  <p className="text-gray-200 text-sm">
                    New here?{" "}
                    <Link 
                      href="/signup" 
                      className="text-orange-400 font-semibold hover:text-yellow-400 transition-colors duration-300 hover:underline"
                    >
                      Create an account
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
