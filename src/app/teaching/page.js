"use client";
import teachingContent from "../../data/teaching-content.json";
import { BookOpenIcon, LightBulbIcon, AcademicCapIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const icons = [
  BookOpenIcon,
  LightBulbIcon,
  AcademicCapIcon,
  Cog6ToothIcon
];

export default function Teaching() {
  const { hero, courses, philosophy } = teachingContent;
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[260px] flex items-center justify-center overflow-hidden">
        <img
          src={hero.backgroundImage}
          alt={hero.title}
          className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-110"
          style={{ zIndex: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0033a0]/60 to-[#4a90e2]/30 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">{hero.title}</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-lg font-medium">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#0033a0] mb-8 text-center">Courses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col gap-2 border-t-4 border-[#0033a0] hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#0033a0] font-bold text-lg">{course.code}</span>
                  <span className="bg-[#ffc72c] text-[#0033a0] text-xs font-semibold px-3 py-1 rounded-full ml-auto">{course.semester}</span>
                </div>
                <div className="font-bold text-[#0033a0] text-lg mb-1">{course.title}</div>
                <p className="text-gray-700 text-base leading-relaxed">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-[#0033a0] mb-6 text-center">{philosophy.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {philosophy.principles.map((p, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div key={idx} className="bg-white rounded-xl shadow p-6 flex gap-4 items-start border-l-4 border-[#0033a0]">
                  <Icon className="w-8 h-8 text-[#ffc72c] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#0033a0] mb-1 text-lg">{p.title}</h4>
                    <p className="text-gray-700 text-base leading-relaxed">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
} 