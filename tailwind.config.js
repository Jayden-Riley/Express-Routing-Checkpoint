/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.pug', // Watch all Pug files inside 'views'
    './public/**/*.html', // Watch all HTML files inside 'public' (if any)
    './public/**/*.css', // Watch all CSS files inside 'public' (this includes 'input.css')
    './public/**/*.js', // If you have JS files in public, make sure they're watched too
  ],
  theme: {
                
    extend: {},
  },
  plugins: [],                                                  
};
     