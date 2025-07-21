import piContent from "../../data/pi-content.json";
import Image from "next/image";

export default function PI() {
  const { hero, profile } = piContent;
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

      {/* Profile Card */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src={profile.image}
              alt={profile.name}
              width={180}
              height={180}
              className="rounded-2xl shadow-xl object-cover border-4 border-white"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#0033a0] mb-2">{profile.name}</h2>
            <div className="text-lg text-gray-700 mb-2">{profile.title}</div>
            <div className="text-md text-gray-500 mb-2">{profile.department}</div>
            <p className="text-gray-700 mb-4">{profile.description}</p>
            <div className="flex flex-wrap gap-3 mb-2">
              {profile.socialLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                  <Image src={link.icon} alt={link.name} width={28} height={28} className="inline-block" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience, Education, Research Interests, Contact */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#0033a0] mb-2">Experience</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {profile.experience.map((exp, idx) => (
                <li key={idx}><strong>{exp.position}</strong>, {exp.institution} <span className="text-gray-500">({exp.period})</span></li>
              ))}
            </ul>
            <h3 className="text-xl font-bold text-[#0033a0] mb-2">Education</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {profile.education.map((edu, idx) => (
                <li key={idx}><strong>{edu.degree}</strong>, {edu.institution} <span className="text-gray-500">({edu.year})</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0033a0] mb-2">Research Interests</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {profile.researchInterests.map((interest, idx) => (
                <li key={idx}>{interest}</li>
              ))}
            </ul>
            <h3 className="text-xl font-bold text-[#0033a0] mb-2">Contact</h3>
            <div className="text-gray-700 mb-2"><strong>Email:</strong> {profile.contact.email}</div>
            <div className="text-gray-700 mb-2"><strong>Office:</strong> {profile.contact.office}</div>
            <div className="text-gray-700 mb-2"><strong>Address:</strong> {profile.contact.address}</div>
            <div className="text-gray-700 mb-2"><strong>Phone:</strong> {profile.contact.phone}</div>
          </div>
        </div>
      </section>
    </main>
  );
} 