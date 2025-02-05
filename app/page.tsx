'use client';
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from '@/components/heroSection/page';
import Footer from "@/components/footer/page";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar log="Login" />
      <div className="flex-grow ">
        <HeroSection />
      </div>

      <Footer />

    </div>
  );
}