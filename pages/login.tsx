import { useEffect, useState } from "react";
import { firebase } from "../lib/firebase";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 font-sans">
      <Toaster position="top-right" />
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
        {/* Left Side */}
        <div className="bg-blue-700 text-white p-10 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">WELCOME</h2>
          <p className="text-sm">
            Access the best deals on laptops, headphones, and more!
          </p>
        </div>

        {/* Right Side */}
        <div className="p-10 md:w-1/2 bg-white">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Sign in</h3>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <input
            type="email"
            placeholder="User Name"
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
            onClick={handleLogin}
            className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700"
          >
            Sign in
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-2 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {showUI ? (
            <div id="firebaseui-auth-container" />
          ) : (
            <p className="text-center text-sm text-gray-500">Loading...</p>
          )}

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 underline hover:text-blue-800">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
