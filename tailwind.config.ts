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
        background: "#050505", // Deep pitch black
        foreground: "#FFFFFF",
        "system-green": "#00FF41", // Matrix/Terminal Green
        "system-gray": "#121212",  // Card backgrounds
        "system-border": "#262626", // Thin, sharp grid lines
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
  plugins: [],
};
export default config;