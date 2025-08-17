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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      firebase.auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch(console.error);
    }
  }, []);

  const handleLogin = async () => {
    if (!email || !password) return;
    setIsLoading(true);
    try {
      setError("");
      await firebase.auth().signInWithEmailAndPassword(email, password);
      toast.success("Welcome back!");
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
            toast.success("Welcome back!");
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
        className="min-h-screen grid lg:grid-cols-2"
      >
        {/* Left Panel - Brand Section */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:flex relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between p-12 text-white">
            {/* Top - Logo */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                be4youdeals
              </h1>
            </motion.div>
            
            {/* Center - Main content */}
            <div className="flex-1 flex flex-col justify-center">
              <motion.h2 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl font-bold mb-6 leading-tight"
              >
                Welcome<br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Back
                </span>
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-xl text-white/80 mb-8 leading-relaxed"
              >
                Continue your journey to discover amazing deals on tech essentials. 
                Your saved items and personalized recommendations are waiting.
              </motion.p>
              
              {/* Login Illustration */}
              <div className="relative h-80 w-full max-w-lg mx-auto">
                {/* Background elements */}
                <div className="absolute top-12 left-8 w-16 h-8 bg-cyan-400 rounded transform -rotate-12"></div>
                <div className="absolute top-4 right-12 w-20 h-16 bg-white rounded-full opacity-80"></div>
                <div className="absolute top-8 right-20 w-12 h-10 bg-white rounded-full opacity-60"></div>
                <div className="absolute top-16 right-4 w-24 h-24 bg-cyan-400 rounded-full opacity-90"></div>
                <div className="absolute bottom-12 left-4 w-8 h-8 bg-cyan-400 rounded-full"></div>
                
                {/* Main laptop/dashboard */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 h-44 bg-slate-700 rounded-lg shadow-2xl">
                  {/* Screen */}
                  <div className="p-3 h-full">
                    <div className="w-full h-full bg-slate-600 rounded">
                      {/* Top bar */}
                      <div className="flex items-center gap-2 p-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      
                      {/* Dashboard content */}
                      <div className="px-3 pb-3 space-y-2">
                        {/* User profile section */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-slate-500 rounded-full"></div>
                          <div className="w-16 h-2 bg-cyan-400 rounded"></div>
                        </div>
                        
                        {/* Progress bars */}
                        <div className="space-y-1">
                          <div className="w-20 h-1 bg-cyan-400 rounded"></div>
                          <div className="w-16 h-1 bg-cyan-400 rounded"></div>
                          <div className="w-12 h-1 bg-cyan-400 rounded"></div>
                        </div>
                        
                        {/* Login button */}
                        <div className="mt-4 flex justify-center">
                          <div className="w-20 h-6 bg-cyan-400 rounded text-xs flex items-center justify-center text-white font-semibold">
                            Log in
                          </div>
                        </div>
                        
                        {/* Dots indicator */}
                        <div className="flex justify-center gap-1 mt-2">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Business person */}
                <div className="absolute bottom-0 left-12 w-12 h-20">
                  {/* Body */}
                  <div className="absolute bottom-0 w-12 h-14 bg-slate-700 rounded-t-lg"></div>
                  {/* Shirt */}
                  <div className="absolute bottom-0 w-12 h-10 bg-slate-800 rounded-t-lg"></div>
                  {/* Tie */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-cyan-400"></div>
                  {/* Head */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-300 rounded-full"></div>
                  {/* Hair */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-slate-800 rounded-full"></div>
                </div>
                
                {/* Security elements */}
                <div className="absolute bottom-4 right-8 w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center">
                  {/* Lock icon */}
                  <div className="w-6 h-7 border-2 border-white rounded-sm relative">
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 border-2 border-white rounded-full bg-transparent"></div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Dollar sign */}
                <div className="absolute top-6 right-8 text-3xl text-cyan-400 font-bold">$</div>
                
                {/* Credit card */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 rotate-12 w-16 h-10 bg-cyan-500 rounded shadow-lg">
                  <div className="mt-1 ml-1 w-3 h-2 bg-slate-600 rounded-sm"></div>
                  <div className="mt-1 ml-1 w-8 h-1 bg-slate-700 rounded"></div>
                  <div className="absolute top-2 right-1 flex gap-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Floating leaves */}
                <div className="absolute top-8 left-0 w-6 h-3 bg-cyan-300 rounded-full transform rotate-45"></div>
                <div className="absolute bottom-20 right-0 w-4 h-2 bg-cyan-300 rounded-full transform -rotate-12"></div>
                <div className="absolute bottom-8 left-20 w-3 h-6 bg-cyan-300 rounded-full transform rotate-12"></div>
              </div>
            </div>
            
            {/* Bottom - Stats */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 text-center"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">1000+</div>
                <div className="text-sm text-white/60">Products</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50k+</div>
                <div className="text-sm text-white/60">Happy Users</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-white/60">Support</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel - Login Form */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center justify-center p-6 lg:p-12 bg-white"
        >
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:hidden text-center mb-8"
            >
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                be4youdeals
              </h1>
            </motion.div>
            
            {/* Login Card */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)'
              }}
            >
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-center mb-8"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-500">Continue to your dashboard</p>
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

              <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-6">
                {/* Email Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-gray-50/50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </motion.div>

                {/* Password Field */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-gray-50/50"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </motion.div>

                {/* Login Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading || !email || !password}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </motion.button>
              </form>

              {/* Divider */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="flex items-center my-8"
              >
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <span className="mx-4 text-gray-500 text-sm font-medium bg-white px-2">or continue with</span>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </motion.div>

              {/* Social Login */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="mb-8"
              >
                {showUI ? (
                  <div id="firebaseui-auth-container" className="firebaseui-modern" />
                ) : (
                  <div className="text-center py-6">
                    <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-blue-500 border-t-transparent"></div>
                    <p className="text-gray-500 text-sm mt-2">Loading options...</p>
                  </div>
                )}
              </motion.div>

              {/* Sign Up Link */}
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="text-center text-gray-600 text-sm"
              >
                Don't have an account?{" "}
                <Link 
                  href="/signup" 
                  className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200"
                >
                  Sign up
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
          border-color: #3b82f6 !important;
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

export default LoginPage;
