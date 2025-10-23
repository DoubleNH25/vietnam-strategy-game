import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        // Military colors
        'military-bg': '#0a0805',
        'military-panel': '#141210',
        'military-border': '#2a2218',
        'military-accent': '#a8d261',
        'military-accent-light': '#c4e87f',
        'military-accent-dark': '#7a9a3f',
        'military-warning': '#d4a574',
        'military-danger': '#d85a54',
        'military-text': '#e8e3d8',
        'military-text-muted': '#7a7570',
        'military-grid': '#2a2218',
        'military-highlight': '#f4d03f',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['"Courier New"', '"Courier"', 'monospace'],
        mono: ['"Courier New"', '"Courier"', 'monospace'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'tactical-pulse': {
          '0%, 100%': {
            'text-shadow': '0 0 8px rgba(168, 210, 97, 0.3), 0 0 16px rgba(168, 210, 97, 0.1)',
          },
          '50%': {
            'text-shadow': '0 0 16px rgba(168, 210, 97, 0.6), 0 0 24px rgba(168, 210, 97, 0.3)',
          },
        },
        'scanlines': {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(10px)',
          },
        },
        'border-glow': {
          '0%, 100%': {
            'border-color': 'rgba(168, 210, 97, 0.25)',
            'box-shadow': '0 0 8px rgba(168, 210, 97, 0.1), inset 0 0 8px rgba(168, 210, 97, 0.05)',
          },
          '50%': {
            'border-color': 'rgba(168, 210, 97, 0.5)',
            'box-shadow': '0 0 16px rgba(168, 210, 97, 0.25), inset 0 0 12px rgba(168, 210, 97, 0.1)',
          },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.95)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            'box-shadow': '0 0 10px rgba(168, 210, 97, 0.2)',
          },
          '50%': {
            'box-shadow': '0 0 20px rgba(168, 210, 97, 0.4)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'tactical-pulse': 'tactical-pulse 2s ease-in-out infinite',
        'scanlines': 'scanlines 8s linear infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tw-animate-css'),
  ],
}

export default config