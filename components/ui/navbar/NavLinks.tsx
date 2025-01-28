'use client';
import Link from 'next/link';
import React from 'react';
import DarkModeButton from "../DarkModeButton";

export default function NavLinks() {
  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <ul className="flex text-[13px] space-x-2 md:text-[1rem]">
            {/* <li className="relative group cursor-pointer">
              Calendar
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </li> */}
            <li className="relative group cursor-pointer">
              Blogs
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full "></span>
            </li>
            <li className="relative group cursor-pointer">
              <Link href="/login">Sign in</Link>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className='pl-1'>
              <DarkModeButton />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}