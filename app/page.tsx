import Link from "next/link";
import Image from "next/image";
import DarkModeButton from "@/components/ui/DarkModeButton";
import SignUpForm from "@/components/ui/SignUpForm";
import Navbar from "@/components/ui/Navbar";

export default function Home() {



  return (
    <div className="">
      <Navbar />
      <h1>Temp Links</h1>
      <div className=" space-x-5">
        <Link href="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
        <Link href="/login" className="text-indigo-600 hover:underline">Sign In</Link>
      </div>

      {/* <SignUpForm /> */}
    </div>
  )
}

// ayo dont download my naked lilia picture