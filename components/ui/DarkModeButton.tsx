"use client";
import { useEffect, useState } from "react";

export default function DarkModeSlider() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div
      className="flex items-center justify-center m-auto"
      aria-label="Toggle Dark Mode"
    >
      <div
        onClick={toggleTheme}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out ${darkMode ? "bg-gray-800" : "bg-gray-200"
          }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${darkMode ? "translate-x-6" : "translate-x-0"
            }`}
        ></div>
      </div>
    </div>
  );
}