"use client";
import Image from "next/image";
import homeContent from "../data/home-content.json";
import React, { useRef, useEffect } from "react";

export default function Home() {
  const { hero, welcome, carousel } = homeContent;
  const carouselRef = useRef(null);

  // Smooth, continuous auto-scroll for carousel
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    let frame;
    let speed = 0.5; // px per frame
    let isHovered = false;
    
    setTimeout(() => {
      const startPos = container.scrollWidth / 2 - container.clientWidth;
      container.scrollLeft = startPos;
      scroll = startPos;
    }, 50);
    
    let scroll = 0;

    const onMouseEnter = () => { isHovered = true; };
    const onMouseLeave = () => { isHovered = false; };
    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    function animate() {
      if (!isHovered && container.scrollWidth > 0) {
        scroll += speed;
        if (scroll >= container.scrollWidth - container.clientWidth) {
          scroll = container.scrollWidth / 2 - container.clientWidth;
        }
        container.scrollLeft = scroll;
      } else {
        scroll = container.scrollLeft;
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src={hero.backgroundImage}
          alt={hero.subtitle}
          fill
          className="object-cover brightness-90 contrast-110"
          priority
          style={{ objectPosition: "50% 35%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0033a0]/60 to-[#4a90e2]/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">{hero.title}</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-lg font-medium">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Welcome Section - Clean, Equal Height Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0033a0] mb-10 text-center">
            {welcome.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto items-stretch">
            {/* Left Image */}
            <div className="flex items-stretch">
              <Image
                src={welcome.leftImage}
                alt={welcome.leftImageAlt}
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full h-full min-h-[350px]"
              />
            </div>
            {/* Center Card */}
            <div className="flex items-stretch">
              <div className="bg-white rounded-2xl shadow-2xl border-t-4 border-[#0033a0] px-8 py-10 text-gray-700 text-lg leading-relaxed flex flex-col justify-center w-full">
                <p className="text-center md:text-left">{welcome.content}</p>
              </div>
            </div>
            {/* Right Image */}
            <div className="flex items-stretch">
              <Image
                src={welcome.rightImage}
                alt={welcome.rightImageAlt}
                width={500}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full h-full min-h-[350px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section - Smooth Auto-Scroll */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 pb-2 hide-scrollbar"
            style={{ scrollBehavior: "auto" }}
          >
            {/* Duplicate images for seamless infinite scroll */}
            {[...carousel.images, ...carousel.images].map((img, idx) => (
              <div
                key={idx}
                className="min-w-[160px] md:min-w-[200px] h-32 md:h-36 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white flex items-center justify-center"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={192}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

