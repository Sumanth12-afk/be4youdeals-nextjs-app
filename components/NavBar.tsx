import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-yellow-500 text-white p-4 shadow flex justify-between items-center flex-wrap">
      <Link href="/" className="font-bold text-xl">be4youdeals</Link>
      <div className="flex gap-4 mt-2 sm:mt-0">
        <Link href="/">Home</Link>
        <Link href="/laptops">Laptops</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/disclosure">Disclosure</Link>
      </div>
    </nav>
  );
}
