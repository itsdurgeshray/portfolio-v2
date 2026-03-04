/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Manrope"', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
        'reading': ['"Cormorant Garamond"', 'serif'], // From poetry pages
      },
      colors: {
        'bg': '#020617',
        'surface': '#0f172a',
        'border': 'rgba(130, 157, 241, 0.15)',
        'muted': '#94a3b8',
        'link': '#829DF1',
      },
      animation: {
        'scroll': 'scroll 45s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    }
  },
  plugins: [],
}
