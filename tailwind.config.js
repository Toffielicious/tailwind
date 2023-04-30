/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js"
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

      fontSize: {
        sm: '15px',
        ssm: '13.3333px',
        sssm: '12px',
        ssssm: '10.6667px',
        m: '32px'
      },

      padding: {
        tlb: '0px 0px 0px',
        // lr:'0px 16px'
        ft: '20px 0px 10px',
        sldr: '',
      },

      paddingTop:{
        sdlr: '400px'
      },

      screens: {
        smallest: "200px"
      },

      borderWidth: {
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
        fb: '#337ab7',
        tt: '#63cdf1',
        yt: '#cc3300',
        li: '#90cadd',
        wf: '#f25b00',
        sf: '#1db854',
        l: '#F0F0F0',
        mb:'#111',

      },
      fontFamily: {
        sanscinzel: ['Cinzel', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Courier Prime', 'monospace'],
        noto: ['noto sans', 'sans-serif']
      },

    },
  },


  plugins: [
    require('flowbite/plugin')
  ],
}
