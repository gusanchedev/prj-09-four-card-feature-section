module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body':['Poppins'],
      },
      fontSize: {
        'prj9':'.9375rem',
      },
      colors: {
        prj9Red: 'hsl(0, 78%, 62%)',
        prj9Cyan: 'hsl(180, 62%, 55%)',
        prj9Orange: 'hsl(34, 97%, 64%)',
        prj9Blue: 'hsl(212, 86%, 64%)',
        VeryDarkBlue: 'hsl(234, 12%, 34%)',
        GrayishBlue: 'hsl(229, 6%, 66%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
