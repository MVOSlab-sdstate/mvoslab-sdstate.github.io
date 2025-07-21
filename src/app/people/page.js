"use client";
import peopleContent from "../../data/people-content.json";
import Image from "next/image";
import React, { useState } from "react";

function groupMembers(members) {
  const groups = {};
  members.forEach((m) => {
    const group = m.group || "Other";
    if (!groups[group]) groups[group] = [];
    groups[group].push(m);
  });
  return groups;
}

const groupOrder = ["Graduate", "Undergraduate", "Other"];
const groupLabels = {
  Graduate: "Graduate Students",
  Undergraduate: "Undergraduate Students",
  Other: "Other Members"
};

export default function People() {
  const { hero, teamMembers, alumni } = peopleContent;
  const grouped = groupMembers(teamMembers);
  const [modalMember, setModalMember] = useState(null);
  const [modalAlum, setModalAlum] = useState(null);

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

      {/* Team Members by Group */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          {groupOrder.map((group) =>
            grouped[group] && grouped[group].length > 0 ? (
              <div key={group} className="mb-12">
                <h2 className="text-2xl font-bold text-[#0033a0] mb-6 border-b-2 border-[#ffc72c] inline-block px-2">
                  {groupLabels[group]}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
                  {grouped[group].map((member, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-lg flex flex-col items-center hover:shadow-2xl transition-shadow border-t-4 border-[#0033a0] relative p-0 max-w-xs mx-auto">
                      <div className="w-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={320}
                          height={200}
                          className="object-cover w-full h-[200px] rounded-t-2xl"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-center w-full px-2 py-4">
                        <h3 className="text-xl font-bold text-[#0033a0] mb-1 text-center break-words leading-tight max-w-full">
                          {member.name}
                        </h3>
                        <div className="flex gap-2 mt-1 mb-3">
                          {member.socialLinks && member.socialLinks.map((link, i) => (
                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name} className="hover:scale-110 transition-transform">
                              <Image src={link.icon} alt={link.name} width={24} height={24} className="inline-block" />
                            </a>
                          ))}
                        </div>
                        <button
                          className="mt-auto px-4 py-1 rounded bg-[#0033a0] text-white font-semibold hover:bg-[#002266] transition-colors text-sm"
                          onClick={() => setModalMember(member)}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>

      {/* Modal for Member Details */}
      {modalMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-[#0033a0] font-bold"
              onClick={() => setModalMember(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col items-center mb-4 w-full">
              <div className="w-full">
                <Image
                  src={modalMember.image}
                  alt={modalMember.name}
                  width={320}
                  height={200}
                  className="object-cover w-full h-[200px] rounded-t-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0033a0] mb-1 text-center break-words leading-tight max-w-full">{modalMember.name}</h3>
              <div className="flex gap-2 mt-1 mb-2">
                {modalMember.socialLinks && modalMember.socialLinks.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name} className="hover:scale-110 transition-transform">
                    <Image src={link.icon} alt={link.name} width={24} height={24} className="inline-block" />
                  </a>
                ))}
              </div>
            </div>
            <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line mb-2 text-center">
              {modalMember.description}
            </div>
          </div>
        </div>
      )}

      {/* Alumni */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl font-bold text-[#0033a0] mb-8 text-center">Alumni</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {alumni.map((alum, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow flex flex-col items-center max-w-xs mx-auto p-0">
                <div className="w-full">
                  <Image
                    src={alum.image}
                    alt={alum.name}
                    width={320}
                    height={200}
                    className="object-cover w-full h-[200px] rounded-t-2xl"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center w-full px-2 py-4">
                  <h3 className="text-lg font-bold text-[#0033a0] mb-1 mt-0 text-center break-words leading-tight max-w-full">
                    {alum.name}
                  </h3>
                  <button
                    className="mt-2 px-4 py-1 rounded bg-[#0033a0] text-white font-semibold hover:bg-[#002266] transition-colors text-sm"
                    onClick={() => setModalAlum(alum)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalAlum && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-[#0033a0] font-bold"
              onClick={() => setModalAlum(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col items-center mb-4 w-full">
              <div className="w-full">
                <Image
                  src={modalAlum.image}
                  alt={modalAlum.name}
                  width={320}
                  height={200}
                  className="object-cover w-full h-[200px] rounded-t-2xl"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0033a0] mb-1 text-center break-words leading-tight max-w-full">{modalAlum.name}</h3>
            </div>
            <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line mb-2 text-center">
              {modalAlum.description}
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 