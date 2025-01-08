'use client';
import React from 'react';

export default function ZenLinks() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <ul className="flex space-x-2 text-base font-medium">
            <li><h1 className="  text-lg font-semibold">Zen Mindset</h1></li>
            <li className="relative group cursor-pointer">
              Who are we
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group cursor-pointer">
              Our technologies
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group cursor-pointer">
              Our goals
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}