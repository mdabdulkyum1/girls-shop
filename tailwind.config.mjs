/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ff69b4", // Hot pink for primary accents
        secondary: "#ffb6c1", // Soft pink for secondary accents
        border: "#ffc0cb", // Light pink for borders
        darkBackground: "#1f1a24", // Dark purple for dark mode
        darkForeground: "#e8dff4", // Lavender for text in dark mode
        darkSecondary: "#b03060", // Deep pink for dark mode accents
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"], // Default font stack
      },
      spacing: {
        18: "4.5rem", // Custom spacing for unique layout needs
        26: "6.5rem",
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        girlsShopLight: {
          primary: "#ff69b4",
          secondary: "#ffb6c1",
          accent: "#ffc0cb",
          neutral: "#4a4a4a",
          "base-100": "#fff5f7",
          info: "#7dd3fc",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
        girlsShopDark: {
          primary: "#ff69b4",
          secondary: "#b03060",
          accent: "#e75480",
          neutral: "#e8dff4",
          "base-100": "#1f1a24",
          info: "#3abff8",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
  },
};
