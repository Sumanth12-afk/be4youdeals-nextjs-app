// pages/privacy.tsx
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">Privacy Policy</h1>

        <p className="mb-6 text-lg text-center">
          This privacy policy explains how we handle your data at <strong className="text-indigo-600">be4youdeals</strong>.
        </p>

        <ul className="list-disc space-y-4 pl-6 text-md mb-10">
          <li>
            <strong>What information we collect and how we use it:</strong> We may collect your name, email, and browsing behavior to improve your experience and send relevant updates or deals.
          </li>
          <li>
            <strong>Your control over your data:</strong> You may opt out of email communication at any time and request access, correction, or deletion of your personal data.
          </li>
          <li>
            <strong>How we protect your information:</strong> We implement security measures to safeguard your information using modern encryption and restricted access protocols.
          </li>
          <li>
            <strong>Contacting us to correct or remove your data:</strong> If you'd like to update or delete your data, please reach out at <a href="mailto:support@be4youdeals.com" className="text-blue-600 hover:underline">support@be4youdeals.com</a>.
          </li>
        </ul>

        <div className="w-full aspect-video bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
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
