/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aref: ['var(--font-aref-ruqaa)'],
        amiri: ['var(--font-amiri)'],
        almarai: ['var(--font-almarai)'],
      },
      backgroundColor: {
        primary: '#161616',
        secondary: '#346751',
        danger: '#B25068',
        accent: '#ECDBBA'
      },
      colors: {
        primary: '#4C3A51',
        secondary: '#774360',
        danger: '#C84B31',
        accent: '#E7AB79'
      }
    },
  },
  plugins: [
    "@tailwindcss/forms",
  ],
}

