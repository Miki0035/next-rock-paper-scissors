import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        scissorsGradient: "hsl(39, 89%, 49%) to hsl(40, 84%, 53%)",
        paperGradient: "hsl(230, 89%, 62%) to hsl(230, 89%, 65%)",
        rockGradient: "hsl(349, 71%, 52%) to hsl(349, 70%, 56%)",
        lizardGradient: "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",
        radialGradient: "hsl(214, 47%, 23%) to hsl(237, 49%, 15%)",
        cyan: "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)",
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        regular: ["barlow", "sans-serif"],
        semibold: ["barlowsemibold", "sans-serif"],
        bold: ["barlowbold", "barlowsemibold", "sans-serif"],
        sans: ["regular", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
