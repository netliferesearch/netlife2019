module.exports = () => ({
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-responsive-type'),
    require('postcss-nested'),
    require('autoprefixer')
  ]
});
