import type { Config } from "tailwindcss"
import { withTV } from "tailwind-variants/transformer"
import ta from "tailwindcss-animate"
import tt from "@tailwindcss/typography"
import trac from "tailwindcss-react-aria-components"

/** @type {import('tailwindcss').Config} */
const config = withTV({
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"]
      },
      colors: {
        primary: {
          "50": "#D4E5FF",
          "100": "#B7D4FF",
          "200": "#93BEFF",
          "400": "#4B93FF",
          "300": "#6FA9FF",
          "500": "#277EFF",
          "600": "#2169D4",
          "700": "#1A54AA",
          "800": "#143F80",
          "900": "#0D2A55",
          "950": "#081933"
        }
      },
      outlineColor: {
        primary: "rgba(39, 126, 255, 0.2)"
      },
      outlineWidth: {
        "3": "3px"
      }
    }
  },
  plugins: [ta, tt, trac]
}) satisfies Config

export default config
