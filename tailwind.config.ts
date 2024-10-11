import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  // Includes everything under the 'app' directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // If you're using any pages directory
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f5", // Example background color for the login page
        foreground: "#333",    // Example foreground color
        primary: "#ff5678",    // Primary button color
        secondary: "#4b6ef5",  // Secondary button color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example font family
      },
    },
  },
  plugins: [],
};

export default config;

