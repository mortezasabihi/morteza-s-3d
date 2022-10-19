/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'heading-1': ['64px', '96px'],
        'heading-2': ['48px', '72px'],
        'heading-3': ['40px', '60px'],
        'heading-4': ['36px', '54px'],
        'heading-5': ['32px', '48px'],
        'heading-6': ['24px', '36px'],
        'heading-7': ['20px', '30px'],
        'heading-8': ['18px', '27px'],
        'subtitle-1': ['18px', '27px'],
        'subtitle-2': ['16px', '24px'],
        'subtitle-3': ['14px', '21px'],
        'subtitle-4': ['12px', '18px'],
        'body-1': ['16px', '24px'],
        'body-2': ['14px', '21px'],
        'body-3': ['12px', '18px'],
        'overline-1': ['10px', '15x'],
        'overline-2': ['9px', '13.5px'],
      },
      colors: {
        blue: {
          100: '#F8FAFE',
          200: '#F0F4FC',
          300: '#E1E9F9',
          400: '#C3D2F3',
          500: '#87A5E7',
          600: '#4B78DB',
          700: '#2D62D5',
          800: '#1E57D2',
          900: '#0F4BCF',
        },
        neutral: {
          100: '#E5E9F0',
          200: '#D1D6E0',
          300: '#A9B0BE',
          400: '#949DAD',
          500: '#878F9E',
          600: '#636B7D',
          700: '#3F475B',
          800: '#262F44',
          900: '#071129',
        },
        green: {
          100: '#F0F7EC',
          200: '#E1EED9',
          300: '#C2DDB2',
          400: '#B3D59F',
          500: '#A4CC8B',
          600: '#95C478',
          700: '#85BB64',
          800: '#72A752',
          900: '#5E9240',
        },
        red: {
          100: '#FFF8FA',
          200: '#FEF1F5',
          300: '#FCE3EB',
          400: '#F8C7D6',
          500: '#F08EAC',
          600: '#E95682',
          700: '#E53A6D',
          800: '#E32C63',
          900: '#E11D58',
        },
      },
      animation: {
        dash: 'dash 1.5s ease-in-out infinite',
        rotate: 'rotate 2s linear infinite',
      },
      keyframes: {
        rotate: {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        dash: {
          '0%': {
            'stroke-dasharray': '1, 150',
            'stroke-dashoffset': 0,
          },
          '50%': {
            'stroke-dasharray': '90, 150',
            'stroke-dashoffset': -35,
          },
          '100%': {
            'stroke-dasharray': '90, 150',
            'stroke-dashoffset': -124,
          },
        },
      },
    },
  },
  plugins: [],
};
