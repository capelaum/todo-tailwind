module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      // bg-img-todos
      backgroundImage: (theme) => ({
        'img-todos': "url('/images/background.png')"
      })
    }
  },

  plugins: []
}
