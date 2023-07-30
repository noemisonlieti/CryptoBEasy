/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Montserrat' , 'sans-serif' ]
    },
    colors: {
      'white' : '#FBFBFE',
    },
    extend: {
      backgroundImage: {
        CardBgGlas: "linear-gradient(180deg, rgba(120, 192, 224, 0.35), rgba(68, 157, 209, 0.35))",
        CardBgGlasDark: "linear-gradient(to bottom, rgba(120, 192, 224, 0.55), rgba(68, 157, 209, 0.55), rgba(3, 71, 155, 0.3))",
        BgGlassMovements: "linear-gradient(182.42deg, rgba(120, 192, 224, 0.35), rgba(68, 157, 209, 0.35))",
      },

      colors : {

        DeepBlue: "#07074C",
        MiddleBlue: "#03479B",
        accent: "#00D2FB",
        Purple: "#261863",
        Wallet: "#3EA0FE",
        Azure : {
          light: '#78c0e0',
          dark: '#449DD1',
        }
      },

      dropShadow : {

        DrsCustom:"0 12px 34px rgba(7, 7, 76, 0.5)",

      
      },



    },
  },
  plugins: [],
}

