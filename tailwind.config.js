/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1240px",
        }
      },
      backgroundImage: {
        'hero': "url('./assets/images/webp/hero-image.webp')",
      },
      colors: {
        'violet-blue': "#4C57FF",
        'charcoal': "#0E1122",
        'eggshell': "#EFECE6",
        'rich-black': "#0E1122",
        'night-skyblue': "#61A0FF",
        'charcol': "#474747",
        'midnight-blue': "#010026",
        'night-blue': "#000A18",
      },

      fontSize: {
        'custom-sm': "28px",
        'custom-lg': "39px",
        'custom-xxl': "62px",
        'custom-xl': "50px",
        'custom-2xl': "85px",
        'custom-3xl': "90px",

      },
      lineHeight: {
        'custom-lg': "45px",
        'custom-xxl': "66px",
        'custom-xl': "68px",
        'custom-2xl': "85px",
        'custom-3xl': "90px",
      },
      fontFamily: {
        'abril': "Abril Display, sans- serif",
        'poppins': "Poppins, sans-serif",
      },
  },
},
  plugins: [],
}