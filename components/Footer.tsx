export default function Footer() {
  return (
    <footer className="bg-yellow-50 text-center text-sm text-gray-600 py-6 mt-10">
      {/* Amazon Associates Affiliate Disclosure - CRITICAL FOR COMPLIANCE */}
      <div className="bg-yellow-100 border-t border-b border-yellow-300 py-4 mb-4">
        <p className="text-sm font-semibold text-gray-800 max-w-4xl mx-auto px-4">
          <span className="text-yellow-700">📢 Affiliate Disclosure:</span>{' '}
          As an Amazon Associate we earn from qualifying purchases. When you click on our Amazon links and make a purchase, 
          we may receive a small commission at no extra cost to you.
        </p>
      </div>
      
      <p>© {new Date().getFullYear()} Vibrics Deals. All rights reserved.</p>
      <p>Follow us on social media — coming soon!</p>
      <p>Contact: <a href="mailto:support@vibricsdeals.com" className="text-yellow-600">support@vibricsdeals.com</a></p>
    </footer>
  );
}
