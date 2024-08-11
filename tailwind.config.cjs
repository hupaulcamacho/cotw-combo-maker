/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Roboto Flex Variable",
          {
            fontVariationSettings: '"wght" 1000 , "wdth" 151',
          },
          ...defaultTheme.fontFamily.sans,
        ],
        custom: [
          "Roboto Flex Variable",
          {
            fontVariationSettings: '"wght" 400, "wdth" 151',
          },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
