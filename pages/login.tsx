import { useEffect, useState } from "react";
import { firebase, auth } from "../lib/firebase";
import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch(console.error);
    }
  }, []);

  const handleLogin = async () => {
    if (!email || !password) return;
    setIsLoading(true);
    try {
      setError("");
      await auth.signInWithEmailAndPassword(email, password);
      toast.success("Welcome back!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (typeof window === "undefined") return;
    if (isLoading) return; // Prevent multiple calls
    
    setIsLoading(true);
    try {
      setError("");
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('email');
      provider.addScope('profile');
      
      console.log('Attempting Google sign-in...');
      const result = await auth.signInWithPopup(provider);
      console.log('Google sign-in successful:', result.user?.email);
      toast.success("Welcome back!");
      
      // Redirect to home page after successful login
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err: any) {
      console.error('Google sign-in error:', err);
      setError(err.message || "Failed to sign in with Google");
      toast.error("Google login failed");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-2xl"
        />
      </div>

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
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 relative z-10"
      >
        {/* Left Panel - Brand Section */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden lg:flex flex-shrink-0"
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
          <div className="relative z-10 flex flex-col justify-between p-6 lg:p-12 text-white min-h-[40vh] lg:min-h-full">
            {/* Top - Logo and Mobile Welcome */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center gap-3 mb-2 lg:mb-0">
                <Image
                  src="/Vibrics Deals Logo.png?v=2"
                  alt="Vibrics Deals"
                  width={48}
                  height={48}
                  className="object-contain drop-shadow-lg"
                />
                <h1 className="text-3xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Vibrics Deals
                </h1>
              </div>
              {/* Mobile welcome message */}
              <div className="lg:hidden mt-4">
                <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-white/80 text-sm">Discover amazing tech deals</p>
              </div>
              
              {/* Compact illustration for all screens */}
              <div className="mt-6 lg:mt-8 flex justify-center">
                <div className="relative h-40 lg:h-56 w-full max-w-sm mx-auto lg:max-w-lg">
                  {/* Background elements */}
                  <div className="absolute top-3 lg:top-4 left-6 lg:left-8 w-10 lg:w-12 h-5 lg:h-6 bg-cyan-400 rounded transform -rotate-12"></div>
                  <div className="absolute top-0 lg:top-2 right-8 lg:right-12 w-12 lg:w-16 h-10 lg:h-12 bg-white rounded-full opacity-80"></div>
                  <div className="absolute top-6 lg:top-8 right-3 lg:right-4 w-14 lg:w-18 h-14 lg:h-18 bg-cyan-400 rounded-full opacity-90"></div>
                  <div className="absolute bottom-8 lg:bottom-12 left-3 lg:left-4 w-5 lg:w-6 h-5 lg:h-6 bg-cyan-400 rounded-full"></div>
                  
                  {/* Main dashboard card */}
                  <div className="absolute top-12 lg:top-16 left-1/2 transform -translate-x-1/2 w-40 lg:w-52 h-24 lg:h-30 bg-slate-700 rounded-lg shadow-xl">
                    <div className="p-2 lg:p-3 h-full">
                      <div className="w-full h-full bg-slate-600 rounded">
                        {/* Top bar */}
                        <div className="flex items-center gap-1 lg:gap-2 p-1 lg:p-2">
                          <div className="w-1 lg:w-2 h-1 lg:h-2 bg-red-400 rounded-full"></div>
                          <div className="w-1 lg:w-2 h-1 lg:h-2 bg-yellow-400 rounded-full"></div>
                          <div className="w-1 lg:w-2 h-1 lg:h-2 bg-green-400 rounded-full"></div>
                        </div>
                        
                        {/* Dashboard content */}
                        <div className="px-2 lg:px-3 pb-2 lg:pb-3 space-y-1 lg:space-y-2">
                          {/* User profile */}
                          <div className="flex items-center gap-1 lg:gap-2">
                            <div className="w-4 lg:w-5 h-4 lg:h-5 bg-slate-500 rounded-full"></div>
                            <div className="w-12 lg:w-16 h-1 lg:h-2 bg-cyan-400 rounded"></div>
                          </div>
                          
                          {/* Progress bars */}
                          <div className="space-y-0.5 lg:space-y-1">
                            <div className="w-14 lg:w-18 h-1 lg:h-1.5 bg-cyan-400 rounded"></div>
                            <div className="w-12 lg:w-16 h-1 lg:h-1.5 bg-cyan-400 rounded"></div>
                          </div>
                          
                          {/* Login button */}
                          <div className="mt-2 lg:mt-3 flex justify-center">
                            <div className="w-12 lg:w-16 h-4 lg:h-6 bg-cyan-400 rounded text-xs lg:text-sm flex items-center justify-center text-white font-semibold">
                              Log in
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Business person */}
                  <div className="absolute bottom-0 left-8 lg:left-12 w-8 lg:w-10 h-12 lg:h-14">
                    <div className="absolute bottom-0 w-8 lg:w-10 h-9 lg:h-11 bg-slate-700 rounded-t-lg"></div>
                    <div className="absolute bottom-0 w-8 lg:w-10 h-6 lg:h-8 bg-slate-800 rounded-t-lg"></div>
                    <div className="absolute bottom-2 lg:bottom-3 left-1/2 transform -translate-x-1/2 w-1.5 lg:w-2 h-5 lg:h-6 bg-cyan-400"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 lg:w-5 h-4 lg:h-5 bg-orange-300 rounded-full"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 lg:w-5 h-2 lg:h-3 bg-slate-800 rounded-full"></div>
                  </div>
                  
                  {/* Security lock */}
                  <div className="absolute bottom-3 lg:bottom-4 right-3 lg:right-4 w-8 lg:w-10 h-8 lg:h-10 bg-cyan-400 rounded-lg flex items-center justify-center">
                    <div className="w-4 lg:w-5 h-5 lg:h-6 border-2 border-white rounded-sm relative">
                      <div className="absolute -top-1 lg:-top-1.5 left-1/2 transform -translate-x-1/2 w-3 lg:w-4 h-3 lg:h-4 border-2 border-white rounded-full bg-transparent"></div>
                      <div className="absolute bottom-1 lg:bottom-1.5 left-1/2 transform -translate-x-1/2 w-1 lg:w-1.5 h-1 lg:h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Credit card */}
                  <div className="absolute top-3 lg:top-4 right-6 lg:right-8 transform rotate-12 w-12 lg:w-16 h-7 lg:h-10 bg-cyan-500 rounded shadow-lg">
                    <div className="mt-1 lg:mt-1.5 ml-1 lg:ml-1.5 w-2 lg:w-3 h-1.5 lg:h-2 bg-slate-600 rounded-sm"></div>
                    <div className="mt-1 lg:mt-1.5 ml-1 lg:ml-1.5 w-6 lg:w-8 h-1 lg:h-1.5 bg-slate-700 rounded"></div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 lg:top-8 left-0 lg:left-2 w-4 lg:w-5 h-3 lg:h-4 bg-cyan-300 rounded-full transform rotate-45"></div>
                  <div className="absolute bottom-12 lg:bottom-16 right-0 lg:right-2 w-3 lg:w-4 h-2 lg:h-3 bg-cyan-300 rounded-full transform -rotate-12"></div>
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
                Welcome<br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Back
                </span>
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="hidden lg:block text-xl text-white/80 mb-8 leading-relaxed"
              >
                Continue your journey to discover amazing deals on tech essentials. 
                Your saved items and personalized recommendations are waiting.
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
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">1000+</div>
                <div className="text-xs lg:text-sm text-white/60">Products</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50k+</div>
                <div className="text-xs lg:text-sm text-white/60">Happy Users</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-xs lg:text-sm text-white/60">Support</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel - Login Form */}
        <motion.div 
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center justify-center p-6 lg:p-12 bg-white flex-1"
        >
          <div className="w-full max-w-md">
            
            {/* Login Card */}
            <motion.div 
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/30 relative overflow-hidden"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
              }}
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-blue-50/30 pointer-events-none" />
              <div className="relative z-10">
                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-center mb-8"
                >
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">Welcome Back</h2>
                  <p className="text-gray-600">Continue to your dashboard</p>
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
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    required
                    placeholder="Enter your email"
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/70 backdrop-blur-sm hover:bg-white/90"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </motion.div>

                {/* Password Field */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Password
                  </label>
                  <motion.input
                    type="password"
                    required
                    placeholder="Enter your password"
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 text-gray-900 placeholder-gray-400 bg-white/70 backdrop-blur-sm hover:bg-white/90"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </motion.div>

                {/* Login Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading || !email || !password}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Signing in...
                      </div>
                    ) : (
                      "Sign In"
                    )}
                  </div>
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

              {/* Google Sign In Button */}
              <motion.button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="w-full bg-white/90 hover:bg-white text-gray-700 py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.svg 
                  className="w-5 h-5 relative z-10" 
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </motion.svg>
                <span className="relative z-10">
                  {isLoading ? "Signing in..." : "Continue with Google"}
                </span>
              </motion.button>

                {/* Sign Up Link */}
                <motion.p 
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.4 }}
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
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default LoginPage;
