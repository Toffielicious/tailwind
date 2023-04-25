/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

      },

      line: {
        height: '1px',
        backgroundImage: '-webkit - linear - gradient(left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0))',
      },

      text:{
        textsize: '16px'
      },

      colors: {
        DEFAULT: '#6B7280',
        gray: '#eee',
        graytext: '#666',
        red: '#880000',
        blackish: '#555555',
        400: '#6B7280',
        500: '#515761',
        600: '#383C43',
        700: '#1E2024',
        800: '#050506',
        900: '#000000',
        950: '#000000'
      },


      line2: {

      }

    },
  },
  plugins: [],
}
