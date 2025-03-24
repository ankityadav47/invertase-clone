/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-8': '#2D303A',
        'gray-20': '#474A57',
        'gray-30': '#474A57',
        'gray-40': '#5D606F',
        'gray-50': '#707280',
        'gray-60': '#8A8C99',
        'gray-70': '#A3A6B2',
        'gray-80': '#C7C9D1',
        'gray-94': '#EEEEF1',
        'primary-1': '#DF8553',
        'secondary-3': '#F6A16B',
      },
      backgroundImage: {
        'btn-glowing': 'radial-gradient(79.83% 79.83% at 32.26% 60.07%, rgba(234, 175, 105, 0.8) 0%, rgba(234, 175, 105, 0) 100%)',
        'btn-glowing-inset': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
        'btn-glowing-inset-hover': 'linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      fontFamily: {
        title: ['var(--font-title)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      fontSize: {
        '10': ['0.625rem', { lineHeight: '1' }], // 10px
        '11': ['0.6875rem', { lineHeight: '1' }], // 11px
        '12': ['0.75rem', { lineHeight: '1' }], // 12px
        '13': ['0.8125rem', { lineHeight: '1' }], // 13px
        '14': ['0.875rem', { lineHeight: '1.5' }], // 14px
        '15': ['0.9375rem', { lineHeight: '1.5' }], // 15px
        '16': ['1rem', { lineHeight: '1.5' }], // 16px
        '18': ['1.125rem', { lineHeight: '1.5' }], // 18px
        '20': ['1.25rem', { lineHeight: '1.5' }], // 20px
        '24': ['1.5rem', { lineHeight: '1.3' }], // 24px
        '32': ['2rem', { lineHeight: '1.3' }], // 32px
        '36': ['2.25rem', { lineHeight: '1.3' }], // 36px
        '40': ['2.5rem', { lineHeight: '1.2' }], // 40px
        '48': ['3rem', { lineHeight: '1.2' }], // 48px
        '56': ['3.5rem', { lineHeight: '1.1' }], // 56px
        '64': ['4rem', { lineHeight: '1.1' }], // 64px
      },
      screens: {
        '2xs': '360px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '1.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
}