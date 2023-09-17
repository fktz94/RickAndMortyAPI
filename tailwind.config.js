/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blackColor: '#3d373c',
        greenColor: '#2f9331',
        blueColor: '#477385',
        brownColor: '#926f44',
        lemonColor: '#8bcf21',
        lightBrownColor: '#c19978',
        lightBlueColor: '#83d2e4',
        creamColor: '#e5d29f',
        whiteColor: '#e7e0db'
      }
    }
  },
  plugins: []
};
