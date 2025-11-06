import React from "react";
import Image from "next/image";

export default function Footer({ config }) {
  return (
    <footer className="bg-[#0033a0] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>{config.copyright}</p>
            <p>{config.university}</p>
          </div>
        </div>
        <div className="text-center text-sm text-white opacity-80 mt-4 px-4">
          <p>This website is not an official website of South Dakota State University. The views and opinions expressed on this site are solely those of the author(s) and do not represent the official positions, policies, or views of South Dakota State University.</p>
        </div>
      </div>
    </footer>
  );
}   