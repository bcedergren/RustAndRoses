import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1a1a1a",
          light: "#2a2a2a",
          dark: "#111111",
        },
        cream: {
          DEFAULT: "#f5f0e8",
          dark: "#e0d8cc",
        },
        rose: {
          DEFAULT: "#9b1b30",
          light: "#c4243b",
          dark: "#6e1322",
          glow: "rgba(155, 27, 48, 0.3)",
        },
        steel: {
          DEFAULT: "#8a8a8a",
          light: "#b0b0b0",
          dark: "#5a5a5a",
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Oswald"', 'sans-serif'],
        body: ['"Inter"', '"Helvetica Neue"', 'sans-serif'],
      },
      backgroundImage: {
        "noise": "url('/noise.png')",
        "hero-gradient":
          "radial-gradient(ellipse at center bottom, rgba(155,27,48,0.15) 0%, transparent 60%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
