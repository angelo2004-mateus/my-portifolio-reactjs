/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        clamp: "clamp(1rem, 5vw, 3rem)",
      },

      backgroundImage: {
        'anim' : "url('3D_Animation_Style_A_browncolored_neon_programmer_with_straigh_0.jpg')"
      },

      fontFamily: {
        'teko' : ['Teko', 'sans-serif']
      },

      colors: {
        '#007cf0' : '#007cf0',
        '#00dfd8' : '#00dfd8',
        '#DFDDDE' : '#DFDDDE'
      },

      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        '3xl': '0 0 150px 1px #db2777',
        '4xl': '0 0 20px 1px #db2777',
      },
      width: {
        '128': '40rem',
        '150': '50rem',
        '18': '18rem'
      },
      spacing: {
        '128': '28rem',
      }
    },
  },
  plugins: [],
}

