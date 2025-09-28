// pages/_app.tsx
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import Layout from "../components/Layout";
import { Toaster } from "react-hot-toast";
import { RegionProvider } from "../contexts/RegionContext";
import { LoadingProvider } from "../contexts/LoadingContext";
import GlobalLoader from "../components/GlobalLoader";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [userChecked, setUserChecked] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const isLoginPage = router.pathname === "/login";
  const isSignupPage = router.pathname === "/signup";

  useEffect(() => {
    // Set a timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      if (!userChecked) {
        console.log("Firebase auth timeout - proceeding without auth");
        setUserChecked(true);
        setIsAuth(false);
        setIsInitialLoad(false);
      }
    }, 5000); // 5 second timeout

    const unsubscribe = auth.onAuthStateChanged((user) => {
      clearTimeout(timeout);
      setIsAuth(!!user);
      setUserChecked(true);
      setIsInitialLoad(false);

      if (user && (isLoginPage || isSignupPage)) {
        router.push("/");
      }
    }, (error) => {
      console.error("Firebase auth error:", error);
      clearTimeout(timeout);
      setUserChecked(true);
      setIsAuth(false);
      setIsInitialLoad(false);
    });
    
    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }, [router.pathname]);

  // Handle navigation loading
  useEffect(() => {
    const handleStart = (url: string) => {
      console.log('Route change starting to:', url);
      setIsNavigating(true);
    };
    const handleComplete = (url: string) => {
      console.log('Route change complete to:', url);
      // Add small delay to ensure smooth transition
      setTimeout(() => setIsNavigating(false), 100);
    };
    const handleError = (err: any, url: string) => {
      console.log('Route change error:', err, url);
      setTimeout(() => setIsNavigating(false), 100);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleError);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleError);
    };
  }, [router]);

  if (!userChecked || isInitialLoad) {
    return (
      <GlobalLoader 
        isLoading={true} 
        loadingText="Loading Vibrics Deals..." 
        size="lg"
      />
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
      <Head>
        <style jsx global>{`
          #__next {
            min-height: 100vh;
          }
          /* Immediate loading screen to prevent blank flash */
          .initial-loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            color: white;
          }
          .initial-loading .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid #f97316;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Immediate loading screen to prevent blank flash
              if (document.readyState === 'loading') {
                document.body.innerHTML = \`
                  <div class="initial-loading">
                    <div class="spinner"></div>
                  </div>
                \`;
              }
            `,
          }}
        />
      </Head>
      <RegionProvider>
        <LoadingProvider>
          <Toaster position="top-right" />
          <GlobalLoader 
            isLoading={isNavigating} 
            loadingText="Loading page..." 
            size="lg"
          >
            {isLoginPage || isSignupPage ? (
              <Component {...pageProps} />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </GlobalLoader>
          {/* Immediate loading overlay for Sentry/compilation delays */}
          {isInitialLoad && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-2xl">
                <div className="flex flex-col items-center space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Loading Vibrics Deals...</p>
                </div>
              </div>
            </div>
          )}
        </LoadingProvider>
      </RegionProvider>
    </>
  );
}

export default MyApp;
