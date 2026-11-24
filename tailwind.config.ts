import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        surface: '#0a0a0b',
        panel: '#111113',
        line: '#232326',
        ash: {
          100: '#e9e9ea',
          300: '#a3a3a8',
          500: '#6f6f76',
          700: '#4a4a50',
        },
        signal: {
          DEFAULT: '#3d8bfd',
          dim: '#2a5fb0',
          glow: '#7db1ff',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        dots: 'radial-gradient(circle, #2a2a2e 1px, transparent 1px)',
      },
      backgroundSize: {
        dots: '22px 22px',
      },
      boxShadow: {
        signal: '0 0 0 1px rgba(61,139,253,0.35), 0 0 24px rgba(61,139,253,0.25)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
