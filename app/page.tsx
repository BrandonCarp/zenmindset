'use client';
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from '@/components/heroSection/page';
import Footer from "@/components/footer/page";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow ">
        <HeroSection />
      </div>
      <div className="w-full px-10 mt-10">
        <Footer />
      </div>
    </div>
  );
}