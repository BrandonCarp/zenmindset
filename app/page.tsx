'use client';
import Link from "next/link";
import Navbar from "@/components/ui/navbar/Navbar";
import HeroSection from '@/components/heroSection/page';

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className=" mt-[5%]">
        <HeroSection />
      </div>
    </div>
  );
}
