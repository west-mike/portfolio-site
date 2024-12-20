import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'title': ['Orbitron'],
      'body': ['Play', 'sans-serif'],
    },
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        background: 'black',

      },
    },
  },
  plugins: [],
} satisfies Config;
