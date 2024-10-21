'use client';
import { useEffect, useState } from "react";


export default function DarkModeButton() {


  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <>

      {/* <button onClick={toggleTheme} className="flex justify-center items-center m-auto text-lg w-fit dark:bg-sky-500/50 bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-10 rounded-lg text-gray-50 font-semibold py-[10px] px-4">Dark Mode</button> */}

      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full p-2 transition-all duration-300 ease-in-out"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          // Moon Icon (Dark Mode)
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-500">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.79 9.79z"></path>
          </svg>

        ) : (
          // Sun Icon (Light Mode)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-yellow-500 transition-transform duration-300 transform rotate-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3.75v-.75m0 18v-.75M4.22 4.22l-.53-.53m15.56 15.56l-.53-.53M3.75 12h-.75m18 0h-.75M4.22 19.78l-.53.53m15.56-15.56l-.53.53M12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5z"
            />
          </svg>
        )}
      </button>


    </>
  )
}

