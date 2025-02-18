'use client';
import Image from 'next/image';

export default function BlogPost() {
  return (
    <div className="space-y-3 text-sm">
      <div className="relative w-64 h-40 mx-auto"> {/* Image container */}
        <Image
          src="/images/blogImage/aiml.png"
          alt="aiml"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-gray-500 dark:text-gray-300 text-[12px]">
          Alex Carter * 20 Sept 2025
        </p>
        <h2 className="font-semibold tracking-wide text-lg">
          Big Tech Goes All-In on AI: The Race for Machine Learning Dominance
        </h2>
        <p className="text-[16px] font-semibold text-gray-600 dark:text-gray-300">
          Major tech companies are doubling down on AI and machine learning, investing billions into research, infrastructure, and talent. What does this mean for the future of innovation?
        </p>
        <h1 className=" text-indigo-600 cursor-pointer hover:text-indigo-400 ">
          Read more..
        </h1>
      </div>
    </div>
  )
}