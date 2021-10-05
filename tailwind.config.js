/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',

  purge: {
    content: ['./src/**/*.ts', './src/**/*.tsx'],
    options: {
      keyframes: true,
    },
  },

  darkMode: false,

  theme: {
    colors: {
      transparent: 'transparent',

      primaryBg: '#000000',
      secondaryBg: '#15181c',
      tertiaryBg: '#202327',
      primaryText: '#d9d9d9',
      secondaryText: '#6e767d',
      border: '#2f3336',
      accent: '#794bc4',

      pink: '#f91880',
      green: '#00ba7c',
      blue: '#1d9bf0',
    },

    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.border'),
    }),

    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
