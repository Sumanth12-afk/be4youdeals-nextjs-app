// pages/signup.tsx
import { useEffect, useState } from "react";
import { firebase } from "../lib/firebase";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showUI, setShowUI] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 🔐 Set persistence on client only
  useEffect(() => {
    if (typeof window !== "undefined") {
      firebase.auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch(console.error);
    }
  }, []);

  const handleSignup = async () => {
    if (!email || !password) return;
    setIsLoading(true);
    try {
      setError("");
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      toast.success("Account created successfully!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
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
            toast.success("Account created successfully!");
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex flex-col lg:grid lg:grid-cols-2"
      >
        {/* Left Panel - Brand Section */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden lg:flex flex-shrink-0"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between p-6 lg:p-12 text-white min-h-[40vh] lg:min-h-full">
            {/* Top - Logo and Mobile Welcome */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 lg:mb-0">
                be4youdeals
              </h1>
              {/* Mobile welcome message */}
              <div className="lg:hidden mt-4">
                <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
                <p className="text-white/80 text-sm">Join the community today</p>
              </div>
              
              {/* Compact illustration for all screens */}
              <div className="mt-6 lg:mt-8 flex justify-center">
                <div className="relative h-40 lg:h-56 w-full max-w-sm mx-auto lg:max-w-lg">
                  {/* Background elements */}
                  <div className="absolute top-3 lg:top-4 left-6 lg:left-8 w-10 lg:w-12 h-5 lg:h-6 bg-pink-400 rounded transform -rotate-12"></div>
                  <div className="absolute top-0 lg:top-2 right-8 lg:right-12 w-12 lg:w-16 h-10 lg:h-12 bg-white rounded-full opacity-80"></div>
                  <div className="absolute top-6 lg:top-8 right-3 lg:right-4 w-14 lg:w-18 h-14 lg:h-18 bg-pink-400 rounded-full opacity-90"></div>
                  <div className="absolute bottom-8 lg:bottom-12 left-3 lg:left-4 w-5 lg:w-6 h-5 lg:h-6 bg-pink-400 rounded-full"></div>
                  
                  {/* Main signup card */}
                  <div className="absolute top-12 lg:top-16 left-1/2 transform -translate-x-1/2 w-40 lg:w-52 h-24 lg:h-30 bg-slate-700 rounded-lg shadow-xl">
                    <div className="p-2 lg:p-3 h-full">
                      <div className="w-full h-full bg-slate-600 rounded">
                        {/* Top bar */}
                        <div className="flex items-center gap-1 lg:gap-2 p-1 lg:p-2">
                          <div className="w-1 lg:w-2 h-1 lg:h-2 bg-red-400 rounded-full"></div>
                          <div className="w-1 lg:w-2 h-1 lg:h-2 bg-yellow-400 rounded-full"></div>
                          <div className="w-1 lg:w-2 h-1 lg:h-2 bg-green-400 rounded-full"></div>
                        </div>
                        
                        {/* Form content */}
                        <div className="px-2 lg:px-3 pb-2 lg:pb-3 space-y-1 lg:space-y-2">
                          <div className="w-16 lg:w-20 h-1 lg:h-2 bg-pink-400 rounded"></div>
                          <div className="w-12 lg:w-16 h-1 lg:h-2 bg-pink-400 rounded"></div>
                          
                          {/* Sign up button */}
                          <div className="mt-2 lg:mt-3 flex justify-center">
                            <div className="w-12 lg:w-16 h-4 lg:h-6 bg-pink-400 rounded text-xs lg:text-sm flex items-center justify-center text-white font-semibold">
                              Join
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* User icons */}
                  <div className="absolute bottom-0 left-8 lg:left-12 w-8 lg:w-10 h-12 lg:h-14">
                    <div className="absolute bottom-0 w-8 lg:w-10 h-9 lg:h-11 bg-slate-700 rounded-t-lg"></div>
                    <div className="absolute bottom-0 w-8 lg:w-10 h-6 lg:h-8 bg-slate-800 rounded-t-lg"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 lg:w-5 h-4 lg:h-5 bg-orange-300 rounded-full"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 lg:w-5 h-2 lg:h-3 bg-slate-800 rounded-full"></div>
                  </div>
                  
                  <div className="absolute bottom-0 right-8 lg:right-12 w-8 lg:w-10 h-12 lg:h-14">
                    <div className="absolute bottom-0 w-8 lg:w-10 h-9 lg:h-11 bg-slate-700 rounded-t-lg"></div>
                    <div className="absolute bottom-0 w-8 lg:w-10 h-6 lg:h-8 bg-slate-800 rounded-t-lg"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 lg:w-5 h-4 lg:h-5 bg-orange-300 rounded-full"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 lg:w-5 h-2 lg:h-3 bg-slate-800 rounded-full"></div>
                  </div>
                  
                  {/* Community icon */}
                  <div className="absolute bottom-3 lg:bottom-4 right-3 lg:right-4 w-8 lg:w-10 h-8 lg:h-10 bg-pink-400 rounded-lg flex items-center justify-center">
                    <div className="w-4 lg:w-5 h-4 lg:h-5 border-2 border-white rounded-full bg-transparent"></div>
                    <div className="absolute top-1.5 lg:top-2 left-1.5 lg:left-2 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white rounded-full"></div>
                    <div className="absolute top-1.5 lg:top-2 right-1.5 lg:right-2 w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 lg:top-8 left-0 lg:left-2 w-4 lg:w-5 h-3 lg:h-4 bg-pink-300 rounded-full transform rotate-45"></div>
                  <div className="absolute bottom-12 lg:bottom-16 right-0 lg:right-2 w-3 lg:w-4 h-2 lg:h-3 bg-pink-300 rounded-full transform -rotate-12"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Center - Main content */}
            <div className="flex-1 flex flex-col justify-center">
              <motion.h2 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="hidden lg:block text-5xl font-bold mb-6 leading-tight"
              >
                Join the<br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Community
                </span>
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="hidden lg:block text-xl text-white/80 mb-8 leading-relaxed"
              >
                Create your account to discover exclusive deals, save your favorites, 
                and get personalized recommendations on the latest tech.
              </motion.p>
            </div>
            
            {/* Bottom - Stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 lg:gap-8 text-center"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">1000+</div>
                <div className="text-xs lg:text-sm text-white/60">Products</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">50k+</div>
                <div className="text-xs lg:text-sm text-white/60">Members</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-xs lg:text-sm text-white/60">Support</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel - Signup Form */}
        <motion.div 
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center justify-center p-6 lg:p-12 bg-white flex-1"
        >
          <div className="w-full max-w-md">
            
            {/* Signup Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-center mb-8"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h2>
                <p className="text-gray-500">Join the community today</p>
              </motion.div>

              <AnimatePresence>
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 text-sm"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }} className="space-y-6">
                {/* Email Field */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-gray-50/50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </motion.div>

                {/* Password Field */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Create a strong password"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-gray-50/50"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </motion.div>

                {/* Sign Up Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading || !email || !password}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Creating account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </motion.button>
              </form>

              {/* Divider */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="flex items-center my-8"
              >
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <span className="mx-4 text-gray-500 text-sm font-medium bg-white px-2">or continue with</span>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </motion.div>

              {/* Social Login */}
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="mb-8"
              >
                {showUI ? (
                  <div id="firebaseui-auth-container" className="firebaseui-modern" />
                ) : (
                  <div className="text-center py-6">
                    <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-purple-500 border-t-transparent"></div>
                    <p className="text-gray-500 text-sm mt-2">Loading options...</p>
                  </div>
                )}
              </motion.div>

              {/* Sign In Link */}
              <motion.p 
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.4 }}
                className="text-center text-gray-600 text-sm"
              >
                Already have an account?{" "}
                <Link 
                  href="/login" 
                  className="text-purple-600 font-semibold hover:text-pink-600 transition-colors duration-200"
                >
                  Sign in
                </Link>
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .firebaseui-modern .firebaseui-idp-button {
          border-radius: 12px !important;
          background: rgba(255, 255, 255, 0.9) !important;
          border: 2px solid #e5e7eb !important;
          color: #374151 !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
          padding: 12px 16px !important;
          backdrop-filter: blur(10px) !important;
        }
        .firebaseui-modern .firebaseui-idp-button:hover {
          background: rgba(255, 255, 255, 1) !important;
          border-color: #9333ea !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1) !important;
        }
        .firebaseui-modern .firebaseui-idp-text {
          color: #374151 !important;
          font-weight: 600 !important;
        }
        .firebaseui-modern .firebaseui-idp-icon {
          filter: brightness(1.1) !important;
        }
      `}</style>
    </div>
  );
};

export default SignupPage;
