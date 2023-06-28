module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  daisyui: {
    themes: [
      {
        BNATheme: {
          'primary': '#00263E',
          'secondary': '#fcfaf6',
          'accent': '#8B8A8D',
          'neutral': '#4D4D4F',
          'base-100': '#2A303C',
          'info': '#009EDB',
          'success': '#F5FBFF',
          'warning': '#FBBD23',
          'error': '#D71920'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
};

// --fonts-body: Montserrat, "Open Sans", Helvetica, Arial, sans-serif;
// /* Headline fonts */
// --fonts-headlines: "Dharma Gothic E";
// /* Primary theme color */
// --primary-color: #00263E;
// /* Primary theme text color */
// --primary-text-color: #8B8A8D;
// /* Primary theme link color */
// --primary-link-color: #009EDB;
// /* Secondary color: the background body color */
// --secondary-color: #fcfaf6;
// --secondary-text-color: #4D4D4F;
// /* Highlight text color of table of content */
// --toc-highlight-text-color: #D71920;
