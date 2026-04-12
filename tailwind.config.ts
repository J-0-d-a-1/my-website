import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0e0e0e",
          2: "#161616",
          3: "#1e1e1e",
        },
        accent: {
          gold: "#c8a96e",
          teal: "#7eb8a0",
        },
        muted: "#888888",
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "serif"],
        mono: ['"DM Mono"', "monospace"],
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
