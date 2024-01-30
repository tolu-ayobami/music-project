

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../images/image1.png')",
      },
    },
    
    screens: {
      sm: "640px", // Small screens (e.g., smartphones)
      md: "868px", // Medium screens (e.g., tablets)
      lg: "1400px", // Large screens (e.g., laptops)
      // xl: "1280px", // Extra-large screens (e.g., desktops)
      "2xl": "1536px", // 2x extra-large screens (e.g., large desktops)
    },
  },
  plugins: [],
}