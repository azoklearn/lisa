/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette gourmande et raffinée
        cream: '#FDF6E3',
        'warm-cream': '#F5E6D3',
        gold: '#D4AF37',
        'light-gold': '#F4E4BC',
        chocolate: '#8B4513',
        'dark-chocolate': '#5D2F0A',
        raspberry: '#E30B5C',
        'soft-raspberry': '#F8BBD9',
        rose: '#F7E7CE',
        'warm-beige': '#E8DCC6',
        'soft-brown': '#C8A882',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      boxShadow: {
        'elegant': '0 10px 30px rgba(139, 69, 19, 0.1)',
        'soft': '0 5px 15px rgba(0, 0, 0, 0.08)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
