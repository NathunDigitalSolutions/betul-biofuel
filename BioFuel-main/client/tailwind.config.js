/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '		#00796B',
        secondary: '#FBC02D',
        accent: '	#80CBC4',
        dark: '#263238',
        background: '#F1F8E9',
        border: '#BDBDBD',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        bubble: 'bubble 10s ease-in-out infinite',
      },
      keyframes: {
        bubble: {
          '0%': { transform: 'translateY(0)', opacity: '0.2' },
          '50%': { transform: 'translateY(-100vh)', opacity: '0.1' },
          '100%': { transform: 'translateY(0)', opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
};
