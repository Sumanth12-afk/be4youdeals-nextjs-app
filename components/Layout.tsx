// components/Layout.tsx
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div>
      <header className="bg-yellow-500 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">be4youdeals</h1>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/laptops/page/1" className="hover:underline">Laptops</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/disclosure" className="hover:underline">Disclosure</Link>

            {/* Show Logout and User */}
            {user && (
              <>
                <span className="text-sm text-black bg-white px-3 py-1 rounded-full">
                  {user.email || user.phoneNumber}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-gray-100 p-6">{children}</main>
    </div>
  );
};

export default Layout;
