import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The .tech "Industrial" Palette
        "background": "var(--background)", // Deep pitch black
        "foreground": "var(--foreground)",
        "system-green": "var(--system-green)", // Neon green for highlights and accents
        "system-gray": "var(--system-gray)",  // Card backgrounds
        "system-border": "var(--system-border)", // Thin, sharp grid lines
      },
      fontFamily: {
        // High-signal technical fonts
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        // Subtle grid pattern to mimic blueprints
        "grid-pattern": "linear-gradient(to right, #121212 1px, transparent 1px), linear-gradient(to bottom, #121212 1px, transparent 1px)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;