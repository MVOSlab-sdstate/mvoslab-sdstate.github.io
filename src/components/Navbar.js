"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar({ config }) {
  const navLinks = config.navigation || [];
  const pathname = usePathname();

  return (
    <header className="w-full">
      {/* Top Yellow Line */}
      <div className="w-full h-2 bg-[#ffc72c]" />
      {/* Top Bar */}
      <div className="bg-[#0033a0] w-full">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Left: Site name and university */}
          <div className="flex flex-col justify-center">
            <span className="font-bold text-lg md:text-xl text-white leading-tight">
              {config.siteName}
            </span>
            <span className="text-xs md:text-sm text-white opacity-80">
              {config.university}
            </span>
          </div>
          {/* Right: Department logo */}
          {config.logo && (
            <div className="flex items-center">
              <Image
                src={config.logo}
                alt="Department Logo"
                width={200}
                height={60}
                className="object-contain h-16 md:h-20 w-auto"
                priority
              />
            </div>
          )}
        </div>
      </div>
      {/* Navigation Bar with container-width separator */}
      <nav className="bg-[#0033a0] w-full">
        <div className="container mx-auto px-4 border-t border-blue-600">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 py-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`font-semibold text-white hover:text-[#ffc72c] transition-colors px-2 md:px-3 py-1 rounded ${isActive ? "text-[#ffc72c]" : ""}`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
} 