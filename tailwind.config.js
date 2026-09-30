/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: 'var(--cyber-primary, #39FF14)',
          50: 'rgba(var(--cyber-rgb, 57, 255, 20), 0.08)',
          100: 'rgba(var(--cyber-rgb, 57, 255, 20), 0.15)',
          200: 'rgba(var(--cyber-rgb, 57, 255, 20), 0.25)',
          300: 'rgba(var(--cyber-rgb, 57, 255, 20), 0.4)',
          400: 'rgba(var(--cyber-rgb, 57, 255, 20), 0.65)',
          500: 'var(--cyber-primary, #39FF14)',
          600: 'var(--cyber-primary, #39FF14)',
          700: 'var(--cyber-secondary, #22c55e)',
          800: 'var(--cyber-secondary, #22c55e)',
          900: 'var(--cyber-secondary, #22c55e)',
          glow: 'rgba(var(--cyber-rgb, 57, 255, 20), 0.4)',
        },
        dark: {
          bg: '#050505',
          card: '#0D0D0D',
          cardHover: '#121212',
          border: '#1E1E22',
          borderActive: 'rgba(var(--cyber-rgb, 57, 255, 20), 0.3)',
          muted: '#80808A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-glow': '0 0 25px -5px rgba(var(--cyber-rgb, 57, 255, 20), 0.35)',
        'neon-glow-lg': '0 0 50px -10px rgba(var(--cyber-rgb, 57, 255, 20), 0.45)',
        'neon-subtle': '0 0 15px 0px rgba(var(--cyber-rgb, 57, 255, 20), 0.15)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'grid-float': 'gridFloat 20s linear infinite',
        'radar-scan': 'radarScan 4s linear infinite',
        'subtle-bounce': 'subtleBounce 2s infinite ease-in-out',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 8px rgba(57, 255, 20, 0.5))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 20px rgba(57, 255, 20, 0.8))' },
        },
        gridFloat: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
        radarScan: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        subtleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
