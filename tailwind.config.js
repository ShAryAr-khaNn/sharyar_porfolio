/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        paper: '#faf8f5',
        ink: {
          DEFAULT: '#1d2433',
          soft: '#4a5263',
          muted: '#7a8191',
        },
        line: '#e7e2da',
        accent: {
          DEFAULT: '#2e4a7d',
          dark: '#22385f',
          tint: '#eef1f7',
        },
      },
      maxWidth: {
        page: '68rem',
      },
    },
  },
  plugins: [],
}
