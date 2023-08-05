/** @type {import('tailwindcss').Config} */
import flowbits from 'flowbite/plugin'; 

export default {
  
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}','./node_modules/flowbite/**/*.js'],
  theme: {
    
    colors:{
      primary:{
        400:"#1e2139",
        white: "#FFF",
       
      },
    },
    extend: {
      
    },
  },
  plugins: [  
    flowbits
   ],
   
};

