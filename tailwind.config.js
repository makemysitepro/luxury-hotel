/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--text-primary)',
          dark: '#061220',
          light: '#1a3a5c',
        },
        accent: {
          DEFAULT: '#C9A227',
          light: '#d4b347',
          dark: '#a68820',
        },
        royal: {
          navy: '#0B1F3A',
          gold: '#C9A227',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'royal': '0 10px 40px rgba(11, 31, 58, 0.1)',
        'gold': '0 10px 30px rgba(201, 162, 39, 0.2)',
      },
    },
  },
  plugins: [],
}
