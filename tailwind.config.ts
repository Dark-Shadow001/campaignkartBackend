import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        brand_secondary: "#2563eb",
        brand_darkgray :"#3E3E3E",
        brand_gray :"#898989",
        brand_lightgray :"#E8E8E8",
        brand_text:"#808080",
        brand_bg:"#EDEDED",
        brand_bggray:"#DFDFDF",
        brand_headings:"#1063FF",
        brand_black:"#212429",
      },
      screens: {
        '3xl': '1950px',
      }
    },
  },
  plugins: [],
}
export default config
