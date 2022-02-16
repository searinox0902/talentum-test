module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-orange': {
          DEFAULT: '#FF9000',
          '50': '#FFE0B8',
          '100': '#FFD7A3',
          '200': '#FFC57A',
          '300': '#FFB452',
          '400': '#FFA229',
          '500': '#FF9000',
          '600': '#C77000',
          '700': '#8F5100',
          '800': '#573100',
          '900': '#1F1100'
        },
        'do-custom-orange': '#FF9000',
        'custom-gray' : '#f1f4f8',
        'custom-dark-gray' : '#8a8a89',
        'custom-placeholder-gray' : '#b6b6b6'
       
      },
    },
    container: {
      center : true
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
