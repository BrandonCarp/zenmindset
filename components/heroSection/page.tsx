'use client';
import { useState, useEffect } from 'react';
import { newQuote, NewQuotePayload } from "@/app/api/quotes/quote";
import Image from 'next/image';

const images = [
  '/images/one.jpg',
  '/images/two.jpg',
  '/images/three.webp',
  '/images/four.webp',
  '/images/five.webp',
  '/images/six.jpg',
  '/images/seven.jpg',
  '/images/eight.jpg',
];

export default function HeroSection() {
  const [quote, setQuote] = useState<NewQuotePayload | null>(null);
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const result = await newQuote();
        console.log("Fetched Quote:", result);
        setQuote(result);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    }
    fetchQuote();

    const interval = setInterval(() => {
      fetchQuote();
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-10">
      <div>
        <h1 className="text-[2rem]">Zen Mindset</h1>
        <h2 className="text-[1.5rem] text-indigo-500">Embrace challenge, grow stronger</h2>
      </div>

      <div className="flex flex-col items-center justify-center mt-[5rem]  space-x-8">
        <div className="relative w-[75vw] h-[20vh] rounded-lg overflow-hidden">
          <Image
            src={images[imageIndex]}
            alt={`Image ${imageIndex}`}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="flex flex-col items-center max-w-[600px] mt-5">
          <h1 className="">{quote ? quote.text : 'Loading...'}</h1>
          <p className=" relative">
            {quote?.author}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 animate-border-left-right"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
