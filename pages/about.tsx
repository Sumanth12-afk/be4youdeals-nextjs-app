// pages/about.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
        <p className="text-lg mb-6">
          At <strong>be4youdeals</strong>, our mission is to elevate your lifestyle
          through thoughtfully curated deals on laptops, headphones, and essentials.
        </p>
        <img
          src="/about-banner.jpg"
          alt="Our Team"
          className="rounded-lg mx-auto w-full max-w-2xl shadow-md"
        />
        <p className="mt-6 text-md">
          We strive to deliver a shopping experience that’s both rewarding and effortless.
          We believe quality should be accessible, and we're here to help you find it.
        </p>
      </div>
    </div>
  );
}
