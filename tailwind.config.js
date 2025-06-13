/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {      fontFamily: {
        'body': ['Playfair Display', 'serif'],
        'title': ['Playfair Display SC', 'serif'],
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      colors: {
    
        'light-green': 'rgba(228, 220, 197, 0.4)',
        'white': '#FFFFFF',
        'black': '#000000',
        'dark-brown': '#6A3500',
        'gold': '#D4A373',
        'light-gold': 'rgba(212, 163, 115, 0.84)',
        'border-gold': '#AE7032',
        'shadow-gold': 'rgba(212, 163, 115, 0.63)',
        'sage-green': '#E4DCC5',
      }
    },
  },
  plugins: [],
}
