"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Netlify will handle the form submission (no API needed)
    setStatus("Submitting...");
  }

  return (
    <main className="p-10 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      {/* Netlify Forms: IMPORTANT attributes below */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/contact?success=true"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Required hidden input for Netlify Forms */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot field (spam protection) */}
        <p className="hidden">
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label className="block mb-1">Name</label>
          <input
            name="name"
            required
            className="w-full border rounded p-2"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full border rounded p-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            required
            className="w-full border rounded p-2"
            rows={5}
            placeholder="Write your message..."
          />
        </div>

        <button type="submit" className="px-4 py-2 rounded border">
          Send
        </button>

        {status && <p className="mt-4">{status}</p>}
      </form>
    </main>
  );
}
