/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // dark-mode surface ramp: page -> card -> raised, with a visible hairline
        ink: {
          page: '#0f1115',
          card: '#161920',
          raised: '#1c2029',
          line: '#2a2d35',
        },
      },
    },
    screens: {
      'sm': '350px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

