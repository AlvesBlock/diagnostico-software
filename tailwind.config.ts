import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f7f2',
          100: '#dfe9d9',
          200: '#c3d6b8',
          300: '#9fbb8e',
          400: '#7e9f67',
          500: '#5f8248',
          600: '#4b6738',
          700: '#3d532f',
          800: '#324328',
          900: '#2a3723',
        },
        ink: '#17201b',
        sand: '#f6f1e8',
        clay: '#d7c4a7',
        accent: '#b86432',
      },
      boxShadow: {
        soft: '0 24px 60px rgba(23, 32, 27, 0.10)',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [forms],
} satisfies Config;
