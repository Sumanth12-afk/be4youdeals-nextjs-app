// pages/contact.tsx
export default function Contact() {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Let’s chat</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded-md" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded-md" />
          <textarea placeholder="Your message..." rows={4} className="w-full p-2 border rounded-md" />
          <button type="submit" className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
