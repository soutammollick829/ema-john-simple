/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#b73c69",
        
"secondary": "#0b3de2",
        
"accent": "#d6207b",
        
"neutral": "#25202D",
        
"base-100": "#F8F8FC",
        
"info": "#1B80F3",
        
"success": "#17A68C",
        
"warning": "#EAC510",
        
"error": "#E5806C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
