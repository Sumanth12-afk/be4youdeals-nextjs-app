// pages/signup.tsx
import { useEffect, useState } from "react";
import { firebase } from "../lib/firebase";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showUI, setShowUI] = useState(true);

  // 🔐 Set persistence on client only
  useEffect(() => {
    if (typeof window !== "undefined") {
      firebase.auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch(console.error);
    }
  }, []);

  const handleSignup = async () => {
    try {
      setError("");
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      toast.success("Account created successfully!");
    } catch (err: any) {
      setError(err.message);
    }
  };

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
            toast.success("Signed in successfully!");
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
      
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-32 right-20 w-72 h-72 bg-green-400 rounded-full opacity-20 blur-3xl floating"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-blue-400 rounded-full opacity-15 blur-3xl floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl floating" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left Panel - 3D Illustration */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12"
        >
          <div className="text-center text-white max-w-lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl font-black mb-4">
                Join <span className="neon-text">be4youdeals!</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Sign up to access exclusive deals on <span className="text-green-400">laptops</span>, 
                <span className="text-blue-400"> headphones</span>, and more
              </p>
            </motion.div>

            {/* 3D Floating Elements */}
            <div className="relative">
              <motion.div 
                className="glass-effect rounded-2xl p-8 transform -rotate-6 mb-8"
                animate={{ 
                  y: [0, -15, 0],
                  rotateZ: [-6, -4, -6]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -top-6 -left-8 glass-dark rounded-xl p-4"
                animate={{ 
                  y: [0, 12, 0],
                  x: [0, -8, 0]
                }}
                transition={{ 
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -right-6 glass-effect rounded-full p-4"
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Panel - Signup Form */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12"
        >
          <div className="w-full max-w-md">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-black text-white mb-2">
                <span className="neon-text">be4youdeals</span>
              </h2>
              <p className="text-gray-300">Create your account</p>
            </motion.div>

            {/* Form Container */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-dark rounded-2xl p-8 backdrop-blur-lg border border-gray-700"
            >
              {error && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-red-500 bg-opacity-20 border border-red-500 text-red-300 rounded-xl p-3 mb-6 text-sm"
                >
                  {error}
                </motion.div>
              )}

              {/* Email Input */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all duration-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Sign Up Button */}
              <motion.button
                onClick={handleSignup}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 pulse-neon mb-6"
              >
                Create Account
              </motion.button>

              {/* Divider */}
              <div className="flex items-center mb-6">
                <div className="flex-grow h-px bg-gray-600"></div>
                <span className="mx-4 text-gray-400 text-sm font-medium">or</span>
                <div className="flex-grow h-px bg-gray-600"></div>
              </div>

              {/* Firebase UI Container */}
              <div className="mb-6">
                {showUI ? (
                  <div id="firebaseui-auth-container" className="firebaseui-custom" />
                ) : (
                  <div className="text-center py-4">
                    <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-green-400"></div>
                    <p className="text-gray-400 text-sm mt-2">Loading authentication options...</p>
                  </div>
                )}
              </div>

              {/* Sign In Link */}
              <p className="text-center text-gray-300 text-sm">
                Already have an account?{" "}
                <Link 
                  href="/login" 
                  className="text-green-400 font-semibold hover:text-green-300 hover:underline transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  Sign in
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
