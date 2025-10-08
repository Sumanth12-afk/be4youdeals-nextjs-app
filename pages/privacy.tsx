// pages/privacy.tsx
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-yellow-400">Privacy Policy</h1>

        <p className="mb-6 text-lg text-center">
          This privacy policy explains how we handle your data at <strong className="text-yellow-400">Vibrics Deals</strong>.
        </p>

        <ul className="list-disc space-y-4 pl-6 text-md mb-10">
          <li>
            <strong>What information we collect and how we use it:</strong> We may collect your name, email, and browsing behavior to improve your experience and send relevant updates or deals.
          </li>
          <li>
            <strong>Affiliate Links & Third-Party Tracking:</strong> We participate in the Amazon Associates Program. When you click on Amazon affiliate links on our website, Amazon may use cookies and tracking technologies to monitor your interactions and purchases. We may earn commissions from qualifying purchases made through our affiliate links. <strong>Amazon's privacy policy applies to all data collected through these affiliate links.</strong> The data collected by Amazon is subject to their privacy practices, not ours. We do not have access to or control over Amazon's cookies or tracking mechanisms.
          </li>
          <li>
            <strong>Your control over your data:</strong> You may opt out of email communication at any time and request access, correction, or deletion of your personal data. For data collected by Amazon through affiliate links, please refer to Amazon's privacy policy and cookie settings.
          </li>
          <li>
            <strong>How we protect your information:</strong> We implement security measures to safeguard your information using modern encryption and restricted access protocols.
          </li>
          <li>
            <strong>Cookies and Tracking:</strong> Our website and our affiliate partners (including Amazon) may use cookies to track your browsing behavior and improve your experience. You can control cookie settings through your browser preferences.
          </li>
          <li>
            <strong>Contacting us to correct or remove your data:</strong> If you'd like to update or delete your data, please reach out at <a href="mailto:support@vibricsdeals.com" className="text-yellow-400 hover:underline">support@vibricsdeals.com</a>.
          </li>
        </ul>

        <div className="w-full aspect-video bg-gray-800/50 flex items-center justify-center rounded-lg overflow-hidden border border-gray-700">
          <img
            src="/privacy-banner.png"
            alt="Privacy Policy Banner"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
