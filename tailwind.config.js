/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '240px',
        'md': '640px',
        'lg': '800px',
        'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1680px',
      },
      colors: {
        'text': {
          50: '#050415',
          100: '#0a082b',
          200: '#151056',
          300: '#1f1881',
          400: '#2a21ab',
          500: '#3429d6',
          600: '#5d54de',
          700: '#857ee7',
          800: '#aea9ef',
          900: '#d6d4f7',
          950: '#ebeafb',
        },
        'background': {
          50: '#050514',
          100: '#0a0a29',
          200: '#141452',
          300: '#1f1f7a',
          400: '#2929a3',
          500: '#3333cc',
          600: '#5c5cd6',
          700: '#8585e0',
          800: '#adadeb',
          900: '#d6d6f5',
          950: '#ebebfa',
        },
        'primary': {
          50: '#040515',
          100: '#090a2a',
          200: '#121454',
          300: '#1b1e7e',
          400: '#2428a8',
          500: '#2d32d2',
          600: '#575bdb',
          700: '#8184e4',
          800: '#abaded',
          900: '#d5d6f6',
          950: '#eaebfb',
        },
        'secondary': {
          50: '#100515',
          100: '#20092a',
          200: '#411353',
          300: '#611c7d',
          400: '#8226a6',
          500: '#a22fd0',
          600: '#b559d9',
          700: '#c782e3',
          800: '#daacec',
          900: '#ecd5f6',
          950: '#f6eafa',
        },
        'accent': {
          50: '#030218',
          100: '#07042f',
          200: '#0d085e',
          300: '#140b8e',
          400: '#1b0fbd',
          500: '#2213ec',
          600: '#4e42f0',
          700: '#7a71f4',
          800: '#a6a1f7',
          900: '#d3d0fb',
          950: '#e9e7fd',
        },
      },
    },
  },
  plugins: [],
}
