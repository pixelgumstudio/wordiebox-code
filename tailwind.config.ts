import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'comic': ['"Comic Sans MS"', 'san'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'overlay': 'var(--Overlay-color, linear-gradient(180deg, rgba(1, 26, 39, 0.28) 4.69%, rgba(1, 26, 39, 0.25) 56.25%, rgba(1, 26, 39, 0.37) 100%))'
      },
      colors: {
        red: {
          500: '#E03C00', // Use your preferred shade of orange
        },
      },
      spacing: {
        '25': '100px',
        '15': '60px',
      },
      boxShadow: {
        'darkbox': '2px 2px 0px 0px #000',
        'numberButton': '1.44px 1.44px 0px 0px #000;',
        'tap-shadow': '2px 2px 0px 0px #000;',

      }
    },
    fontSize: {
      '10': ['10px', {
        lineHeight: '12px'
      }],
      '12': ['12px', {
        lineHeight: '16px'
      }],
      '14': ['14px', {
        lineHeight: '18px'
      }],
      '16': ['16px', {
        lineHeight: '22px'
      }],
      '20': ['20px', {
        lineHeight: '28px',
        letterSpacing: '-0.8px'
      }],
      '24': ['24px', {
        lineHeight: '32px',
        letterSpacing: '-0.96px'
      }],
      '32': ['32px', {
        lineHeight: '39px',
        letterSpacing: '-1px'
      }],
      '48': ['48px', {
        lineHeight: '57.6px',
        letterSpacing: '-1px'
      }],

    },

    screens: {
      'tablet': '576px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [],
};
export default config;
