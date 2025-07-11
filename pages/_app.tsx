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
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuth(!!user);
      setUserChecked(true);

      if (user && (isLoginPage || isSignupPage)) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router.pathname]);

  if (!userChecked) {
    return <p className="text-center p-10">Checking login status...</p>;
  }

  if (!isAuth && !isLoginPage && !isSignupPage) {
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
