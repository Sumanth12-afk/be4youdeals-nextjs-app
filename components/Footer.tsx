export default function Footer() {
  return (
    <footer className="bg-yellow-50 text-center text-sm text-gray-600 py-6 mt-10">
      <p>© {new Date().getFullYear()} be4youdeals. All rights reserved.</p>
      <p>Follow us on social media — coming soon!</p>
      <p>Contact: <a href="mailto:support@be4youdeals.com" className="text-yellow-600">support@be4youdeals.com</a></p>
    </footer>
  );
}
