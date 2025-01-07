'use client';
import Link from "next/link";
import Navbar from "@/app/ui/navbar/Navbar";
import HeroSection from '@/components/heroSection/page';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <h1>Temp Links</h1>
      <div className="space-x-5">
        <Link href="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
        <Link href="/login" className="text-indigo-600 hover:underline">Sign In</Link>
      </div>
      <div className="flex items-center justify-center mt-[5%]">
        <HeroSection />
      </div>
    </div>
  );
}
