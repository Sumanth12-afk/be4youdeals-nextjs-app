// pages/signup.tsx
import { useEffect, useState } from "react";
import { firebase } from "../lib/firebase";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 font-sans">
      <Toaster position="top-right" />
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
        {/* Left */}
        <div className="bg-blue-700 text-white p-10 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Join be4youdeals</h2>
          <p className="text-sm">
            Sign up to access exclusive deals on laptops, headphones, and more!
          </p>
        </div>

        {/* Right */}
        <div className="p-10 md:w-1/2 bg-white">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Sign Up</h3>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md text-sm mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md text-sm mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleSignup}
            className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-2 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {showUI ? (
            <div id="firebaseui-auth-container" />
          ) : (
            <p className="text-sm text-center text-gray-400">Loading...</p>
          )}

          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 underline hover:text-blue-800">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
