"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        // ✅ Redirect to Thank You page
        window.location.href = "/thank-you";
      } else {
        setStatus("❌ Failed to send.");
      }
    } catch (err) {
      setStatus("❌ Network error.");
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 min-h-[120px]"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>

      {status && (
        <p
          className={`mt-4 text-center font-medium ${
            status.startsWith("✅")
              ? "text-green-600"
              : status.startsWith("❌")
              ? "text-red-600"
              : "text-gray-600"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
}