module.exports = () => ({
  plugins: [
    require('tailwindcss'),
    require('postcss-responsive-type'),
    require('postcss-nested'),
    require('autoprefixer')
  ]
});
