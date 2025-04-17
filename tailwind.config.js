/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base ingredients
        'base': '#3B82F6', // blue
        // Variables
        'variable': '#FBBF24', // yellow
        // Measurements
        'measurement': '#10B981', // green
        // Microbes
        'microbe': '#EF4444', // red
        // Brewing processes
        'process': '#8B5CF6', // purple
        // Flavor agents
        'flavor': '#1F2937', // gray-800
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 