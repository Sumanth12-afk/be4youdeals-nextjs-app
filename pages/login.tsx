import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { firebase, auth } from "../lib/firebase";
import toast, { Toaster } from "react-hot-toast";
import { AuthUI } from "../components/auth-fuse";
import GlobalLoader from "../components/GlobalLoader";
import { useLoading } from "../contexts/LoadingContext";

const LoginPage = () => {
  const router = useRouter();
  const { showLoader, hideLoader } = useLoading();

  useEffect(() => {
    if (typeof window !== "undefined") {
      auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .catch(console.error);
    }
  }, []);

  const handleAuthSuccess = () => {
    // Redirect to home page after successful authentication
    router.push('/');
  };

  const handleSignIn = async (email: string, password: string) => {
    showLoader('Signing you in...');
    try {
      await auth.signInWithEmailAndPassword(email, password);
      toast.success('🎉 Welcome back! You\'re signed in successfully.');
      handleAuthSuccess();
    } catch (error: any) {
      console.error('Sign in error:', error);
      toast.error(error.message || 'Failed to sign in. Please try again.');
    } finally {
      hideLoader();
    }
  };

  const handleSignUp = async (name: string, email: string, password: string) => {
    showLoader('Creating your account...');
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      await userCredential.user?.updateProfile({ displayName: name });
      toast.success('🎉 Account created successfully! Welcome to Vibrics Deals!');
      handleAuthSuccess();
    } catch (error: any) {
      console.error('Sign up error:', error);
      toast.error(error.message || 'Failed to create account. Please try again.');
    } finally {
      hideLoader();
    }
  };

  const handleGoogleSignIn = async () => {
    showLoader('Signing in with Google...');
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      toast.success('🎉 Welcome! You\'re signed in with Google.');
      handleAuthSuccess();
    } catch (error: any) {
      console.error('Google sign in error:', error);
      toast.error(error.message || 'Failed to sign in with Google. Please try again.');
    } finally {
      hideLoader();
    }
  };


  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <AuthUI 
        signInContent={{
          image: {
            src: "https://i.ibb.co/XrkdGrrv/original-ccdd6d6195fff2386a31b684b7abdd2e-removebg-preview.png",
            alt: "Welcome back to amazing deals"
          },
          quote: {
            text: "Welcome Back! Your favorite deals await.",
            author: "Vibrics Deals"
          }
        }}
        signUpContent={{
          image: {
            src: "https://i.ibb.co/HTZ6DPsS/original-33b8479c324a5448d6145b3cad7c51e7-removebg-preview.png",
            alt: "Join us for exclusive deals"
          },
          quote: {
            text: "Join the Deal Hunters! Exclusive savings await.",
            author: "Vibrics Deals"
          }
        }}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        onGoogleSignIn={handleGoogleSignIn}
      />
    </>
  );
};

export default LoginPage;
