"use client";
import aboutContent from "../../data/about-content.json";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const { hero, mission, facilities, impact, opportunities } = aboutContent;
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[260px] flex items-center justify-center overflow-hidden">
        <Image
          src={hero.backgroundImage}
          alt={hero.subtitle}
          fill
          className="object-cover brightness-90 contrast-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0033a0]/60 to-[#4a90e2]/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">{hero.title}</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-lg font-medium">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0033a0] mb-6 text-center">{mission.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">{mission.content}</p>
        </div>
      </section>

      {/* Facilities Section as Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0033a0] mb-8 text-center">Facilities & Equipment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col border-t-4 border-[#0033a0]">
              <h3 className="text-xl font-bold text-[#0033a0] mb-4">{facilities.laboratory.title}</h3>
              <ul className="space-y-2 text-gray-700 text-base">
                {facilities.laboratory.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col border-t-4 border-[#0033a0]">
              <h3 className="text-xl font-bold text-[#0033a0] mb-4">{facilities.field.title}</h3>
              <ul className="space-y-2 text-gray-700 text-base">
                {facilities.field.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Opportunities as Colored Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-8">
          <div className="bg-[#0033a0] text-white p-8 rounded-2xl shadow flex flex-col border-t-4 border-[#ffc72c]">
            <h3 className="text-2xl font-bold mb-4">{impact.title}</h3>
            <ul className="space-y-3 text-base">
              {impact.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.title}:</strong> {item.description}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow flex flex-col border-t-4 border-[#0033a0]">
            <h3 className="text-2xl font-bold text-[#0033a0] mb-4">{opportunities.title}</h3>
            <ul className="space-y-3 text-gray-700 text-base">
              {opportunities.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.title}:</strong> {item.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Us Call-to-Action */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="bg-[#0033a0] rounded-2xl shadow p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-2">Interested in working with us?</h2>
            <p className="text-white mb-4">Contact us to learn more about our research, collaboration opportunities, or joining the MVOS Lab.</p>
            <Link href="/contact" className="bg-[#ffc72c] text-[#0033a0] font-bold px-6 py-2 rounded shadow hover:bg-[#ffe066] transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
} 