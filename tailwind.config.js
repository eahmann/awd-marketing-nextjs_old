const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      "bg-brand-600",
      "bg-primary-600",
      "bg-secondary-600",
      "text-brand-50",
      "text-primary-50",
      "text-secondary-50",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.indigo,
        brand: {
          25: "#ececf8",
          50: "#cfd1ee",
          100: "#b1b3de",
          200: "#9396cf",
          300: "#7478bf",
          400: "#565bb0",
          500: "#383da0",
          600: "#2d317f",
          700: "#21245e",
          800: "#16183d",
          900: "#0a0b1c",
        },
        primary: {
          50: "#d0eecf",
          100: "#b2deb1",
          200: "#95cf93",
          300: "#77bf74",
          400: "#5ab056",
          500: "#3ca038",
          600: "#307f2d",
          700: "#235e21",
          800: "#173d16",
          900: "#0a1c0a",
        },
        secondary: {
          50: "#eecfd0",
          100: "#deb1b2",
          200: "#cf9395",
          300: "#bf7477",
          400: "#b0565a",
          500: "#a0383c",
          600: "#7f2d30",
          700: "#5e2123",
          800: "#3d1617",
          900: "#1c0a0a",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      maxHeight: {
        "45px": "45px",
        "75px": "75px",
      },
      maxWidth: { "8xl": "1440px" },
      height: {
        "45px": "45px",
        "91px": "91px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "lt-sm": { max: "639px" },
      "lt-md": { max: "767px" },
      "lt-lg": { max: "1023px" },
      "lt-xl": { max: "1279px" },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
