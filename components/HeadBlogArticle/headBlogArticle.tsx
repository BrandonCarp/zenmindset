'use client';
import Image from 'next/image';

export default function HeadBlogArticle() {
  return (
    <div className="mt-10 px-5 w-full max-w-[800px] text-center">
      <h1 className="font-bold text-[1rem] md:text-[1.5rem]">Recent blog posts</h1>

      <div className="mt-4 flex flex-col items-center space-y-10">
        {/* Main Blog Article */}
        <div className="space-y-3 text-sm">
          <div className="relative w-64 h-40 mx-auto"> {/* Image container */}
            <Image
              src="/images/blogImage/aiml.png"
              alt="aiml"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-gray-500 dark:text-gray-300 text-[12px]">
              Alex Carter * 20 Sept 2025
            </p>
            <h2 className="font-semibold tracking-wide text-lg">
              Big Tech Goes All-In on AI: The Race for Machine Learning Dominance
            </h2>
            <p className="text-[16px] font-semibold text-gray-600 dark:text-gray-200">
              Major tech companies are doubling down on AI and machine learning, investing billions into research, infrastructure, and talent. What does this mean for the future of innovation?
            </p>
          </div>
        </div>

        {/* Secondary Blog Article */}
        <div className="space-y-3 text-sm">
          <div className="relative w-64 h-40 mx-auto">
            <Image
              src="/images/blogImage/tofugu.jpg"
              alt="tofugu"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-gray-500 dark:text-gray-300 text-[12px]">
              Emily Nakamura * 02 June 2025
            </p>
            <h2 className="font-semibold tracking-wide text-lg">
              Getting Started with Japanese: A Beginner’s Guide Inspired by Tofugu
            </h2>
            <p className="text-[16px] font-semibold text-gray-600 dark:text-gray-200">
              Learning Japanese can feel overwhelming, but Tofugu's approach makes it structured and fun. Here’s how to get started the right way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
