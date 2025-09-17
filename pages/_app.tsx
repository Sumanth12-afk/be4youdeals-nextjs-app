// pages/_app.tsx
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import Layout from "../components/Layout";
import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [userChecked, setUserChecked] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const isLoginPage = router.pathname === "/login";
  const isSignupPage = router.pathname === "/signup";

  useEffect(() => {
    // Set a timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      if (!userChecked) {
        console.log("Firebase auth timeout - proceeding without auth");
        setUserChecked(true);
        setIsAuth(false);
      }
    }, 5000); // 5 second timeout

    const unsubscribe = auth.onAuthStateChanged((user) => {
      clearTimeout(timeout);
      setIsAuth(!!user);
      setUserChecked(true);

      if (user && (isLoginPage || isSignupPage)) {
        router.push("/");
      }
    }, (error) => {
      console.error("Firebase auth error:", error);
      clearTimeout(timeout);
      setUserChecked(true);
      setIsAuth(false);
    });
    
    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }, [router.pathname]);

  if (!userChecked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-white">Checking login status...</p>
        </div>
      </div>
    );
  }

  // Allow public access to landing page
  const isPublicPage = router.pathname === "/" || isLoginPage || isSignupPage;
  
  if (!isAuth && !isPublicPage) {
    router.push("/login");
    return null;
  }

  return (
    <>
      <Toaster position="top-right" />
      {isLoginPage || isSignupPage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
