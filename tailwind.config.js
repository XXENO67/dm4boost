/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // WoW/Epic Gold & Black Theme
        'wow': {
          'black': '#0a0a0a',
          'dark': '#121212',
          'graphite': '#1a1a1a',
          'medium': '#2a2a2a',
          'light': '#a0a0a0',
          'white': '#ffffff',
          'gold': '#D4AF37',
          'gold-light': '#F4D03F',
          'gold-dark': '#B8860B',
          'bronze': '#CD7F32',
          'copper': '#B87333',
          'red': '#8B0000',
          'purple': '#6B238E',
          'blue': '#1E90FF',
        },
        // Legacy GTA colors mapped to WoW theme
        'gta': {
          'black': '#0a0a0a',
          'graphite': '#1a1a1a',
          'dark': '#121212',
          'medium': '#2a2a2a',
          'light': '#a0a0a0',
          'white': '#ffffff',
          'green': '#D4AF37', // Mapped to gold
          'gold': '#D4AF37',
          'blue': '#1E90FF',
          'salmon': '#CD7F32',
          'purple': '#6B238E',
          'olive': '#B8860B',
        },
        // Neon colors remapped
        'neon': {
          'cyan': '#D4AF37',
          'magenta': '#CD7F32',
        },
        'electric': {
          'blue': '#F4D03F',
        }
      },
      fontFamily: {
        'pricedown': ['Cinzel', 'Times New Roman', 'serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'cinzel': ['Cinzel', 'serif'],
        'gaming': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'progress': 'progress 2s ease-out',
        'float-smooth': 'floatSmooth 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
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
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        floatSmooth: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
      },
      backgroundImage: {
        'wow-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #B8860B 100%)',
        'loading-gradient': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent)',
        'gta-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      },
      boxShadow: {
        'wow': '0 4px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.1)',
        'wow-hover': '0 8px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.2)',
        'wow-gold': '0 0 30px rgba(212, 175, 55, 0.4)',
        'gta': '0 4px 30px rgba(0, 0, 0, 0.5)',
        'gta-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
        'card': '0 2px 20px rgba(0, 0, 0, 0.3), 0 0 10px rgba(212, 175, 55, 0.05)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(212, 175, 55, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
