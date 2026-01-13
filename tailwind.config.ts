import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Forest Green - The iconic Foxy John's exterior
        forest: {
          50: '#f0f7f2',
          100: '#dcede1',
          200: '#bbdac5',
          300: '#8fc1a0',
          400: '#5fa377',
          500: '#3d8559',
          600: '#2d6a46',
          700: '#1a4d2e', // Primary - deep pub green
          800: '#1a4028',
          900: '#163522',
          950: '#0b1d12',
        },
        // Mustard Yellow - 1950s interior gloss
        mustard: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#d4a72c', // Secondary - hardware store warmth
          500: '#c49520',
          600: '#a47817',
          700: '#835b13',
          800: '#6d4917',
          900: '#5c3d19',
          950: '#351f0a',
        },
        // Brick Red - The famous red door
        brick: {
          50: '#fdf3f3',
          100: '#fce4e4',
          200: '#fbcdcd',
          300: '#f6a8a8',
          400: '#ee7676',
          500: '#e24b4b',
          600: '#8b3a3a', // Accent - door red, warm not bright
          700: '#742929',
          800: '#612626',
          900: '#532626',
          950: '#2c0f0f',
        },
        // Warm cream backgrounds
        cream: {
          50: '#fefdfb',
          100: '#f5f1e6', // Primary background
          200: '#ebe4d4',
          300: '#ddd3bc',
          400: '#c9b99a',
        },
        // Rich ink for text
        ink: {
          DEFAULT: '#1a1814',
          light: '#2d2826',
          muted: '#5c5452',
          faint: '#8a8483',
        },
      },
      fontFamily: {
        // Bitter - slab serif, practical hardware store feel
        display: ['var(--font-display)', 'Georgia', 'serif'],
        // Source Sans - clean, readable body
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
