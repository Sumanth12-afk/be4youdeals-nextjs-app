// pages/about.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Our Mission</h1>

        <img
          src="/about-banner.png"
          alt="Our Team"
          className="rounded-lg mx-auto w-full max-w-2xl shadow-md"
        />
      </div>
    </div>
  );
}
