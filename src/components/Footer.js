import React from "react";
import Image from "next/image";

export default function Footer({ config }) {
  return (
    <footer className="bg-[#0033a0] text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>{config.copyright}</p>
          <p>{config.university}</p>
        </div>
        {config.logo && (
          <div className="flex items-center space-x-4">
            <Image src={config.logo} alt="Department Logo" width={200} height={200} className="object-contain" />
          </div>
        )}
      </div>
    </footer>
  );
} 