"use client";
import newsContent from "../../data/news-content.json";
import Image from "next/image";
import React, { useState } from "react";

function groupByYear(items) {
  const years = {};
  items.forEach((item) => {
    if (!years[item.year]) years[item.year] = [];
    years[item.year].push(item);
  });
  // Sort years descending
  return Object.entries(years).sort((a, b) => b[0] - a[0]);
}

export default function News() {
  const { hero, newsItems, mediaCoverage } = newsContent;
  const [tab, setTab] = useState("publications");

  // Split newsItems into publications, conferences, and awards
  const publications = [];
  const conferences = [];
  const awards = [];
  newsItems.forEach((item) => {
    if (item.category.toLowerCase().includes("publication")) publications.push(item);
    else if (item.category.toLowerCase().includes("conference")) conferences.push(item);
    else if (item.category.toLowerCase().includes("award") || item.category.toLowerCase().includes("achievement")) awards.push(item);
  });
  const groupedPublications = groupByYear(publications);
  const groupedConferences = groupByYear(conferences);
  const groupedAwards = groupByYear(awards);

  // Get all years present in any section
  const allYears = Array.from(new Set([
    ...groupedPublications.map(([y]) => y),
    ...groupedConferences.map(([y]) => y),
    ...groupedAwards.map(([y]) => y),
  ])).sort((a, b) => b - a);
  const [yearTab, setYearTab] = useState(allYears[0] || "");

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

      {/* Tabs */}
      <section className="bg-white pt-8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex gap-4 mb-8 border-b">
            <button
              className={`px-4 py-2 font-semibold text-lg border-b-2 transition-colors ${tab === "publications" ? "border-[#0033a0] text-[#0033a0]" : "border-transparent text-gray-500 hover:text-[#0033a0]"}`}
              onClick={() => setTab("publications")}
            >
              Publications
            </button>
            <button
              className={`px-4 py-2 font-semibold text-lg border-b-2 transition-colors ${tab === "awards" ? "border-[#0033a0] text-[#0033a0]" : "border-transparent text-gray-500 hover:text-[#0033a0]"}`}
              onClick={() => setTab("awards")}
            >
              Awards & Achievements
            </button>
            <button
              className={`px-4 py-2 font-semibold text-lg border-b-2 transition-colors ${tab === "media" ? "border-[#0033a0] text-[#0033a0]" : "border-transparent text-gray-500 hover:text-[#0033a0]"}`}
              onClick={() => setTab("media")}
            >
              Media Coverage
            </button>
          </div>

          {/* Publications Tab */}
          {tab === "publications" && (
            <div>
              {/* Year Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {allYears.map((y) => (
                  <button
                    key={y}
                    className={`px-4 py-1 rounded-t font-semibold border-b-2 transition-colors ${yearTab === y ? "border-[#0033a0] text-[#0033a0] bg-gray-50" : "border-transparent text-gray-500 hover:text-[#0033a0] bg-white"}`}
                    onClick={() => setYearTab(y)}
                  >
                    {y}
                  </button>
                ))}
              </div>

              {/* Research Publications for selected year */}
              <h2 className="text-2xl font-bold text-[#0033a0] mb-4">Research Publications</h2>
              {groupedPublications.filter(([y]) => y === yearTab).map(([year, items]) => (
                <div key={year} className="mb-8">
                  <div className="flex flex-col gap-4">
                    {items.map((item, idx) =>
                      item.publications?.map((pub, i) => (
                        <a
                          key={i}
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-50 rounded-xl shadow p-4 flex gap-4 items-center hover:shadow-lg transition-shadow"
                        >
                          <Image src={pub.image} alt={pub.title} width={60} height={80} className="rounded object-contain bg-white border border-gray-200" />
                          <div className="flex-1">
                            <div className="font-bold text-[#0033a0] text-base mb-1 line-clamp-2">{pub.title}</div>
                            <div className="text-xs text-gray-600 mb-1 line-clamp-2">{pub.authors}</div>
                            <div className="text-xs text-blue-700 underline">View Paper</div>
                          </div>
                        </a>
                      ))
                    )}
                  </div>
                </div>
              ))}

              {/* Conference Presentations for selected year */}
              <h2 className="text-2xl font-bold text-[#0033a0] mb-4 mt-10">Conference Presentations</h2>
              {groupedConferences.filter(([y]) => y === yearTab).map(([year, items]) => (
                <div key={year} className="mb-8">
                  <div className="flex flex-col gap-4">
                    {items.map((item, idx) =>
                      item.publications?.map((pub, i) => (
                        <a
                          key={i}
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-50 rounded-xl shadow p-4 flex gap-4 items-center hover:shadow-lg transition-shadow"
                        >
                          <Image src={pub.image} alt={pub.title} width={60} height={80} className="rounded object-contain bg-white border border-gray-200" />
                          <div className="flex-1">
                            <div className="font-bold text-[#0033a0] text-base mb-1 line-clamp-2">{pub.title}</div>
                            <div className="text-xs text-gray-600 mb-1 line-clamp-2">{pub.authors}</div>
                            <div className="text-xs text-blue-700 underline">View Paper</div>
                          </div>
                        </a>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Awards Tab */}
          {tab === "awards" && (
            <div>
              {/* Year Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {allYears.map((y) => (
                  <button
                    key={y}
                    className={`px-4 py-1 rounded-t font-semibold border-b-2 transition-colors ${yearTab === y ? "border-[#0033a0] text-[#0033a0] bg-gray-50" : "border-transparent text-gray-500 hover:text-[#0033a0] bg-white"}`}
                    onClick={() => setYearTab(y)}
                  >
                    {y}
                  </button>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-[#0033a0] mb-4">Awards & Achievements</h2>
              {groupedAwards.filter(([y]) => y === yearTab).length > 0 ? (
                groupedAwards.filter(([y]) => y === yearTab).map(([year, items]) => (
                  <div key={year} className="mb-8">
                    <ul className="list-disc list-inside text-gray-700">
                      {items.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          {item.description}
                          {item.url && (
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline ml-2">Read more</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <div className="text-gray-500">No awards for this year.</div>
              )}
            </div>
          )}

          {/* Media Coverage Tab */}
          {tab === "media" && (
            <div>
              <h2 className="text-2xl font-bold text-[#0033a0] mb-6">Media Coverage</h2>
              <p className="text-gray-700 mb-4 text-center">{mediaCoverage.description}</p>
              <ul className="flex flex-col gap-4 max-w-2xl mx-auto">
                {mediaCoverage.articles.map((article, idx) => (
                  <li key={idx} className="bg-gray-50 rounded-xl shadow p-4 flex flex-col md:flex-row items-center gap-2">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-[#0033a0] underline hover:text-[#ffc72c] font-medium text-base text-center md:text-left">
                      {article.title}
                    </a>
                    <span className="text-xs text-gray-500">{article.source}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 