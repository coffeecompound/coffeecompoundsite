/** Design tokens copied verbatim from the approved homepage design. */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#E6392D",
        "primary-container": "#E6392D",
        "on-primary": "#FFFFFF",
        "on-primary-container": "#FFFFFF",
        "secondary": "#5C2D91",
        "secondary-dark": "#45194D",
        "secondary-container": "#EDE2FA",
        "on-secondary": "#FFFFFF",
        "on-secondary-container": "#2A0053",
        "tertiary": "#F4B02A",
        "tertiary-container": "#FEF5E3",
        "on-tertiary": "#2B1414",
        "surface": "#FFF7F2",
        "surface-container-low": "#FAF1EB",
        "surface-container": "#F5E7DF",
        "surface-container-high": "#ECDCD2",
        "surface-container-lowest": "#FFFFFF",
        "on-surface": "#2B1414",
        "on-surface-variant": "#634746",
        "outline": "#9E7B7A",
        "outline-variant": "#E4CBC7",
        "cream-bg": "#FFF7F2",
        "parchment-surface": "#F5E7DF",
        "espresso-dark": "#2B1414",
        "rustic-red": "#E6392D",
        "plum-border": "#5C2D91",
        "banner-gold": "#F4B02A",
        "error": "#BA1A1A",
        "error-container": "#FFDAD6",
        "on-error-container": "#93000A"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: {
        "space-xs": "0.25rem", "space-sm": "0.5rem", "space-md": "1rem", "space-lg": "1.5rem",
        "space-xl": "2.5rem", "margin": "1rem", "margin-md": "2rem", "margin-lg": "3.5rem",
        "gutter": "1rem", "gutter-lg": "1.5rem"
      },
      fontFamily: {
        "display-lg": ["var(--font-domine)", "Domine", "serif"], "display-md": ["var(--font-domine)", "Domine", "serif"],
        "headline-lg": ["var(--font-domine)", "Domine", "serif"], "headline-md": ["var(--font-domine)", "Domine", "serif"], "headline-sm": ["var(--font-domine)", "Domine", "serif"],
        "title-md": ["var(--font-dm-sans)", "DM Sans", "sans-serif"], "body-lg": ["var(--font-dm-sans)", "DM Sans", "sans-serif"], "body-md": ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        "body-sm": ["var(--font-dm-sans)", "DM Sans", "sans-serif"], "label-lg": ["var(--font-dm-sans)", "DM Sans", "sans-serif"], "label-md": ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        "label-sm": ["var(--font-dm-sans)", "DM Sans", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "title-md": ["18px", { lineHeight: "26px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-lg": ["15px", { lineHeight: "20px", letterSpacing: "0.02em", fontWeight: "600" }],
        "label-md": ["13px", { lineHeight: "18px", letterSpacing: "0.03em", fontWeight: "600" }],
        "label-sm": ["11px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "700" }]
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")]
};
