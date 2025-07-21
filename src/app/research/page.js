"use client";
import researchContent from "../../data/research-content.json";
import Image from "next/image";

export default function Research() {
  const { hero, researchAreas, currentProjects, sponsors } = researchContent;
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[260px] flex items-center justify-center overflow-hidden">
        <Image
          src={hero.backgroundImage}
          alt={hero.title}
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

      {/* Research Areas */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-[#0033a0] mb-8 text-center">Our Research Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl shadow flex flex-col hover:shadow-lg transition-shadow border-t-4 border-[#0033a0]">
                {area.images && area.images.length > 0 && (
                  <div className="flex gap-2 overflow-x-auto p-2 pb-0 hide-scrollbar">
                    {area.images.map((img, i) => (
                      <Image
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        width={120}
                        height={80}
                        className="object-cover rounded-xl w-[120px] h-[80px] flex-shrink-0"
                      />
                    ))}
                  </div>
                )}
                <div className="flex-1 flex flex-col p-6 pt-2">
                  <h3 className="text-xl font-bold text-[#0033a0] mb-2 text-center">{area.title}</h3>
                  <p className="text-gray-700 text-base mb-2 text-center">{area.description}</p>
                  <ul className="list-disc list-inside text-gray-700 text-sm mt-2">
                    {area.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-12 bg-[#0033a0]">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Current Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((proj, idx) => (
              <div key={idx} className="bg-[#0033a0] border border-blue-200 rounded-2xl shadow p-6 flex flex-col hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#ffc72c] mb-2">{proj.title}</h3>
                <p className="text-white text-base leading-relaxed">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-[#0033a0] mb-6 text-center">Sponsors, Collaborators and Supporters</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sponsors.map((s, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow flex flex-col items-center p-6 hover:shadow-lg transition-shadow border-t-4 border-[#0033a0]">
                <Image
                  src={s.logo}
                  alt={s.name}
                  width={120}
                  height={120}
                  className="object-contain mb-2 mx-auto transition-transform duration-200 hover:scale-110"
                />
                <span className="text-sm text-gray-700 text-center font-semibold mt-2">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 