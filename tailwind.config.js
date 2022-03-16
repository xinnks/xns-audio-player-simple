module.exports = {
  prefix: 'tw-',
  content: ["./src/*.{vue,js}"],
  theme: {
    container: {
      center: true,
    },
    height: {
      cover: '430px',
      coverx: '320px',
    },
    backgroundColors: {
      'pctrl': 'rgba(51,51,51,.85)'
    },
    maxHeight: {
      'simplePlyrmaxheight': '100px',
      'simplePlyrmaxheightsm': '80px',
      'simplePlyrminheight': '50px',
      cover: '430px',
      coverx: '320px',
    },
    extend:{
      colors: {
        'primary-green': '#21FB92'
      },
    }
  },
  variants: {},
  plugins: []
}
