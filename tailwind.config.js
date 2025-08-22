/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
    extend: {
      colors: {
        primary: '#372F2D',
        secondary: '#D9D9D9',
        white: '#FFFFFF',
        text: '#434343',
        destroy: '#a33323',
        destroylight: '#f3bdb3',
        openstatus: '#04a0ff',
        openstatuslight: '#c5e9ff',
        inprogress: '#d39303',
        inprogresslight: '#feec7e',
        success: '#029E00',
        successlight: '#beffc7',
        black: '#000000',
        disabled: '#5b5f60',
      },
    },
  },
  plugins: [],
}