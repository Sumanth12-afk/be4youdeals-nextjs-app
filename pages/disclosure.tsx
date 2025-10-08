// pages/disclosure.tsx
export default function Disclosure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 text-gray-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-yellow-400">Affiliate Disclosure</h1>
        
        {/* Amazon Associates Disclosure - CRITICAL COMPLIANCE REQUIREMENT */}
        <div className="bg-yellow-900/30 border-2 border-yellow-500/50 rounded-lg p-6 mb-6">
          <p className="text-xl font-bold text-center text-yellow-400 mb-2">
            📢 Important Notice
          </p>
          <p className="text-lg font-semibold text-center text-gray-100">
            As an Amazon Associate we earn from qualifying purchases.
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur rounded-lg shadow-lg p-8 space-y-6 border border-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">Amazon Associates Program</h2>
            <p className="mb-4 leading-relaxed">
              Vibrics Deals is a participant in the <strong>Amazon Associates Program</strong>, an affiliate advertising 
              program designed to provide a means for sites to earn advertising fees by advertising and linking to 
              <strong> Amazon.in</strong> and <strong>Amazon.com</strong>.
            </p>
            <p className="mb-4 leading-relaxed">
              When you click on our Amazon affiliate links and make a purchase, we may receive a small commission 
              <strong> at no additional cost to you</strong>. This helps us maintain and improve our website while 
              continuing to provide you with the best deals and savings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">How It Works</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You click on a product link on our website</li>
              <li>You are redirected to Amazon.in or Amazon.com with our affiliate tag</li>
              <li>If you make a purchase, Amazon pays us a small commission</li>
              <li><strong>You pay the same price</strong> - there is no markup or extra cost</li>
              <li>The commission comes from Amazon's advertising budget, not from you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">Our Commitment to You</h2>
            <p className="mb-4 leading-relaxed">
              All product recommendations on this website are based on honest reviews, research, and our genuine mission 
              to help you save money while shopping smarter. We only feature products we believe offer real value and 
              substantial savings.
            </p>
            <p className="mb-4 leading-relaxed">
              Whether we earn a commission or not, our goal remains the same: to curate the best deals and help you 
              make informed purchasing decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">Pricing & Availability</h2>
            <p className="mb-4 leading-relaxed">
              Product prices and availability displayed on our website are subject to change. While we strive to keep 
              information accurate and up-to-date, prices may differ from those shown on Amazon at the time of your purchase. 
              Always verify the current price on Amazon before completing your purchase.
            </p>
            <p className="mb-4 leading-relaxed">
              <strong>Note:</strong> The final price you pay is determined by Amazon, not by us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-yellow-400">Questions?</h2>
            <p className="mb-4 leading-relaxed">
              If you have any questions about our affiliate relationships or how we earn commissions, please feel free to 
              <a href="/contact" className="text-yellow-400 underline font-semibold hover:text-yellow-300"> contact us</a>.
            </p>
          </section>

          <div className="border-t-2 border-gray-600 pt-6 mt-6">
            <p className="text-sm text-gray-400 italic text-center">
              Last updated: October 2025 | Vibrics Deals - Your Deal Hunting Partner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
