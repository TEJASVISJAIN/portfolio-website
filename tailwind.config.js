/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic': ['Bangers', 'cursive'],
        'speech': ['Comic Neue', 'Comic Sans MS', 'cursive'],
        'handwriting': ['Permanent Marker', 'cursive'],
      },
      colors: {
        'comic-yellow': '#FFE135',
        'comic-red': '#FF0040',
        'comic-blue': '#00BFFF',
        'comic-green': '#00FF41',
        'comic-purple': '#DA00FF',
        'comic-orange': '#FF8C00',
        'comic-pink': '#FF1493',
        'comic-dark': '#1a1a2e',
        'comic-paper': '#FFF8DC',
      },
      boxShadow: {
        'comic': '6px 6px 0px 0px rgba(0,0,0,0.9)',
        'comic-lg': '10px 10px 0px 0px rgba(0,0,0,0.9)',
        'comic-xl': '15px 15px 0px 0px rgba(0,0,0,0.9)',
        'comic-inset': 'inset 4px 4px 0px 0px rgba(0,0,0,0.3)',
      },
      animation: {
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'zoom-in': 'zoomIn 0.5s ease-out',
        'zoom-out': 'zoomOut 0.5s ease-out',
        'shake': 'shake 0.5s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1.2)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px) rotate(-2deg)' },
          '75%': { transform: 'translateX(5px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}
