/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Playfair Display', 'serif'],
        'serif': ['Playfair Display', 'serif'],
        'display': ['Playfair Display SC', 'serif'],
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
        'black': '#000000',        'dark-brown': '#6A3500',
        'light-brown': '#A65E2E',
        'gold': '#D4A373',
        'divider-gold': '#D19254',
        'light-gold': 'rgba(212, 163, 115, 0.84)',
        'border-gold': '#AE7032',
        'shadow-gold': 'rgba(212, 163, 115, 0.63)',
        'sage-green': '#E4DCC5',
        'light-sage-green': '#E7E0CF',
      },      dropShadow: {
        'gold-glow': [
          '0 0 19px rgba(212, 163, 115, 0.63)',
          '0 16px 20px rgba(212, 163, 115, 0.5)',
          '0 0 30px rgba(212, 163, 115, 0.3)'
        ],
      },      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        'scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
