import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'var(--custom-blue)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'bounce-xy': 'bounce-xy 2s infinite',
        'icon-wobble': 'icon-wobble 0.75s ease-in-out 1',
      },
      keyframes: {
        'bounce-xy': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0) translateX(0)',
          },
          '40%': { transform: 'translateY(2px) translateX(2px)' },
          '60%': { transform: 'translateY(1px) translateX(1px)' },
        },
        'icon-wobble': {
          '25%': { transform: 'translateY(-8px)' },
          '50%, 100%': { transform: 'translateY(0px)' },
          '75%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
