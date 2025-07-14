import Link from "next/link";
import { useEffect, useState, ReactNode } from "react";
import { auth } from "../lib/firebase";
import toast from "react-hot-toast";

const Layout = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    toast("Logging out...", {
      icon: "👋",
      duration: 1500,
      style: {
        background: "#facc15",
        color: "#000"
      },
    });
    setTimeout(async () => {
      await auth.signOut();
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <div>
      <header className="bg-yellow-500 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">be4youdeals</h1>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/deals" className="hover:underline">Deals</Link> {/* ✅ NEW */}
            <Link href="/laptops/page/1" className="hover:underline">Laptops</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/disclosure" className="hover:underline">Disclosure</Link>

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

      <footer className="bg-yellow-500 text-white py-4 mt-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-sm">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/disclosure" className="hover:underline">Disclosure</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
