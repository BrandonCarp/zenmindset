import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customGray: {
          dark: "#0d0d0d",
        },
      },
      screens: {
        xs: "375px",
        ss: "575px",
        sm: "680px",
        md: "860px",
        lg: "1200px",
        lgsm: "1300px",
        lgmd: "1400px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};

export default config;
