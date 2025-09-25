export default function ThankYou() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-green-600 mb-4">✅ Thank You!</h1>
      <p className="text-gray-700 text-lg mb-6">
        Your message has been received. Our team will get back to you shortly.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </a>
    </main>
  );
}