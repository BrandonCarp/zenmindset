'use client';
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from '@/components/heroSection/HeroSection';
import Footer from "@/components/Footer/Footer";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar log="Login" />
      <div className="flex-grow mb-10 sm:mb-0">
        <HeroSection />
      </div>

      <Footer />

    </div>
  );
}