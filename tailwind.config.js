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

      fontSize:{
        sm: '15px',
        ssm: '13.3333px',
        sssm: '12px',
        ssssm: '10.6667px',
        m: '32px'
      },

      padding:{
        tlb:'0px 0px 0px',
        // lr:'0px 16px'
        ft:'20px 0px 10px',
      },

      screens:{
        smaller:"350px"
      },

      borderWidth:{
        bord: '1px',
      },

      colors: {
        DEFAULT: '#6B7280',
        gray: '#eee',
        graytext: '#666',
        red: '#880000',
        blackish: '#555555',
        grayer: '#666',
        grayest: '#888888',
        600: '#383C43',
        700: '#1E2024',
        800: '#050506',
        900: '#000000',
        950: '#000000'
      },
      fontFamily: {
        sanscinzel: ['Cinzel', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Courier Prime', 'monospace'],
      },

    },
  },
  plugins: [],
}
