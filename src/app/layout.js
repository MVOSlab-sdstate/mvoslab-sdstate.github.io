import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import siteConfig from "../data/site-config.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Machine Vision and Optical Sensor Lab - SDSU",
  description: "The Machine Vision and Optical Sensor (MVOS) Lab at South Dakota State University focuses on advancing precision agriculture by harnessing cutting-edge technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar config={siteConfig} />
        {children}
        <Footer config={siteConfig} />
      </body>
    </html>
  );
}
