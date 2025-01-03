'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import DarkModeButton from "@/app/ui/DarkModeButton";
import SignUpForm from "@/app/ui/SignUpForm";
import Navbar from "@/app/ui/navbar/Navbar";
import { Button } from "@mui/material";
import { newQuote, NewQuotePayload } from "./api/quotes/quote";



export default function Home() {
  const [quote, setQuote] = useState<NewQuotePayload | null>(null);

  useEffect(() => {
    async function fetchQuote() {
      const result = await newQuote();
      setQuote(result);
    }

    // Fetch the initial quote
    fetchQuote();

    // Set up an interval to fetch a new quote every 5 seconds
    const interval = setInterval(fetchQuote, 100000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="">
      <Navbar />
      <h1>Temp Links</h1>
      <div className=" space-x-5">
        <Link href="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
        <Link href="/login" className="text-indigo-600 hover:underline">Sign In</Link>
      </div>
      <h1>{quote ? quote.text : 'Loading...'}</h1>
      <p>{quote?.author}</p>
      <button onClick={newQuote}>Fetch Information</button>
      {/* <SignUpForm /> */}
    </div>
  )
}

// ayo dont download my naked lilia picture