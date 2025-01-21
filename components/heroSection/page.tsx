// 'use client';
// import { useState, useEffect } from 'react';
// import { newQuote, NewQuotePayload } from "@/app/api/quotes/quote";
// import Image from 'next/image';

// const images = [
//   '/images/one.jpg',
//   '/images/two.jpg',
//   '/images/three.webp',
//   '/images/four.webp',
//   '/images/five.webp',
//   '/images/six.jpg',
//   '/images/seven.jpg',
//   '/images/eight.jpg',
// ];

// export default function HeroSection() {
//   const [quote, setQuote] = useState<NewQuotePayload | null>(null);
//   const [imageIndex, setImageIndex] = useState<number>(0);

//   useEffect(() => {
//     async function fetchQuote() {
//       try {
//         const result = await newQuote();
//         console.log("Fetched Quote:", result);
//         setQuote(result);
//       } catch (error) {
//         console.error("Error fetching quote:", error);
//       }
//     }
//     fetchQuote();

//     const interval = setInterval(() => {
//       fetchQuote();
//       setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="text-center mt-10">
//       <div>
//         <h1 className="text-[2rem] ss:text-[2.5rem] lg:text-[3rem]">Zen Mindset</h1>
//         <h2 className="text-[1.5rem] text-indigo-500">Embrace challenge, grow stronger</h2>
//       </div>

//       <div className="flex flex-col items-center justify-center mt-[5rem] mx-5 sm:flex-row sm:gap-10">

//         <div className="relative w-[80vw] aspect-[16/9] rounded-lg overflow-hidden xs:aspect-[4/3] ss:w-[75vw] sm:w-[50vw]  md:w-[45vw] lg:w-[40vw] lgsm:w-[40vw] lgmd:w-[35vw]">
//           <Image
//             src={images[imageIndex]}
//             alt={`Image ${imageIndex}`}
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             quality={100}
//           />
//         </div>

//         {/* Quote Container */}
//         <div className="flex flex-col items-center max-w-[600px] mt-5 ss:text-[20px] sm:text-[25px] px-8 sm:px-0 sm:w-[40vw] sm:mt-0">
//           <h1 className="">{quote ? quote.text : 'Loading...'}</h1>
//           <p className="relative">
//             {quote?.author}
//             <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 animate-border-left-right"></span>
//           </p>
//         </div>
//       </div>
//     </div>

//   );
// }


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
  const [fading, setFading] = useState<boolean>(false);

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
      setFading(true);

      setTimeout(() => {
        fetchQuote();
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFading(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-10">
      <div>
        <h1 className="text-[2rem] ss:text-[2.5rem] lg:text-[3rem]">Zen Mindset</h1>
        <h2 className="text-[1.5rem] text-indigo-500">Embrace challenge, grow stronger</h2>
      </div>

      <div className="flex flex-col items-center justify-center mt-[5rem] mx-5 sm:flex-row sm:gap-10">


        <div
          className={`relative w-[80vw] aspect-[16/9] rounded-lg overflow-hidden xs:aspect-[4/3] ss:w-[75vw] sm:w-[50vw] md:w-[45vw] lg:w-[40vw] lgsm:w-[40vw] lgmd:w-[35vw] ${fading ? 'opacity-0 transition-opacity duration-1000' : 'opacity-100 transition-opacity duration-1000'
            }`}
        >
          <Image
            src={images[imageIndex]}
            alt={`Image ${imageIndex}`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
          />
        </div>


        <div
          className={`flex flex-col items-center max-w-[600px] mt-5 ss:text-[20px] sm:text-[25px] px-8 sm:px-0 sm:w-[40vw] sm:mt-0 ${fading ? 'opacity-0 transition-opacity duration-1000' : 'opacity-100 transition-opacity duration-1000'
            }`}
        >
          <h1>{quote ? quote.text : 'Loading...'}</h1>
          <p className="relative">
            {quote?.author}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 animate-border-left-right"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
