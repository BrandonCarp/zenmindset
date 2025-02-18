'use client';
import Image from 'next/image';
import BlogPost from './blogPost';


export default function HeadBlogArticle() {
  return (
    <div className="mt-10 px-5 w-full max-w-[800px] text-center">
      <h1 className="font-bold text-[1rem] md:text-[1.5rem] ">Featured Recent Blog Posts</h1>

      <div className="mt-4 flex flex-col items-center space-y-10">
        {/* Main Blog Article */}
        <BlogPost />

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
          <div className="space-y-1">
            <p className="font-semibold text-gray-500 dark:text-gray-300 text-[12px]">
              Emily Nakamura * 02 June 2025
            </p>
            <h2 className="font-semibold tracking-wide text-lg">
              Getting Started with Japanese: A Beginner’s Guide Inspired by Tofugu
            </h2>
            <p className="text-[16px] font-semibold text-gray-600 dark:text-gray-300">
              Learning Japanese can feel overwhelming, but Tofugu's approach makes it structured and fun. Here’s how to get started the right way.
            </p>
            <h1 className=" text-indigo-600 cursor-pointer hover:text-indigo-400 ">
              Read more..
            </h1>
          </div>

        </div>
      </div>
    </div>
  );
}

// {/* <div className="space-y-3 text-sm">
//           <div className="relative w-64 h-40 mx-auto"> {/* Image container */}
//             <Image
//               src="/images/blogImage/aiml.png"
//               alt="aiml"
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//           <div className="space-y-2">
//             <p className="font-semibold text-gray-500 dark:text-gray-300 text-[12px]">
//               Alex Carter * 20 Sept 2025
//             </p>
//             <h2 className="font-semibold tracking-wide text-lg">
//               Big Tech Goes All-In on AI: The Race for Machine Learning Dominance
//             </h2>
//             <p className="text-[16px] font-semibold text-gray-600 dark:text-gray-300">
//               Major tech companies are doubling down on AI and machine learning, investing billions into research, infrastructure, and talent. What does this mean for the future of innovation?
//             </p>
//           </div>
//         </div> */}