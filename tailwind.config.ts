import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fff8eb',
          '100': '#ffebc6',
          '200': '#ffd488',
          '300': '#ffb647',
          '400': '#ff9d20',
          '500': '#f97807',
          '600': '#dd5302',
          '700': '#b73606',
          '800': '#94290c',
          '900': '#7a230d',
          '950': '#460f02',
      },
    },
  },
  plugins: [],
} satisfies Config;
