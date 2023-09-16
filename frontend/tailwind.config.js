/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#2a4812",
        secondaryColor: "#F3CA53",
        bgColor: "#F6F6F6",
        sTextColor: "#5E5E5E",
      },
    },
  },
  plugins: ["...", require("flowbite/plugin")],
};
