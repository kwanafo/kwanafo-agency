export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50">
      {/* Hero */}
      <section className="flex flex-col items-center text-center py-24 px-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Welcome to <span className="text-blue-600">Kwanafo Agency</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          AI-powered voice solutions to help your business communicate smarter,
          faster, and better.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#features"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Smart Automation</h3>
            <p className="mt-2 text-gray-600">
              Automate client interactions with AI-driven voice responses.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Seamless Integration</h3>
            <p className="mt-2 text-gray-600">
              Connect directly with your favorite tools and CRMs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">24/7 Availability</h3>
            <p className="mt-2 text-gray-600">
              Provide customer support around the clock without extra cost.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section id="contact" className="w-full bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold">Ready to transform your business?</h2>
        <p className="mt-4 text-lg">Contact Kwanafo Agency today and let’s get started.</p>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Kwanafo Agency. All rights reserved.
      </footer>
    </main>
  );
}