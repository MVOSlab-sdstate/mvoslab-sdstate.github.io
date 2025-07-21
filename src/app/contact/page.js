"use client";
import piContent from "../../data/pi-content.json";

export default function Contact() {
  const { profile } = piContent;
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-4xl font-bold text-[#0033a0] mb-4 text-center">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-8 text-center">Interested in collaborating, joining the lab, or have a question? Reach out to us below!</p>
          <div className="bg-gray-50 rounded-2xl shadow p-8 mb-8">
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="rounded border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#0033a0]" required />
              <input type="email" placeholder="Your Email" className="rounded border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#0033a0]" required />
              <textarea placeholder="Your Message" rows={5} className="rounded border border-gray-300 px-4 py-2 focus:outline-none focus:border-[#0033a0]" required />
              <button type="submit" className="bg-[#0033a0] text-white font-semibold rounded px-6 py-2 mt-2 hover:bg-[#002266] transition-colors">Send Message</button>
            </form>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 text-center">
            <h2 className="text-xl font-bold text-[#0033a0] mb-2">Lab Contact Information</h2>
            <div className="text-gray-700"><strong>Email:</strong> {profile.contact.email}</div>
            <div className="text-gray-700"><strong>Office:</strong> {profile.contact.office}</div>
            <div className="text-gray-700"><strong>Address:</strong> {profile.contact.address}</div>
            <div className="text-gray-700"><strong>Phone:</strong> {profile.contact.phone}</div>
          </div>
        </div>
      </section>
    </main>
  );
} 