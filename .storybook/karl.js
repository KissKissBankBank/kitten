// Karl.js

import { create } from '@storybook/theming/create'

export default create({
  base: 'light',

  colorPrimary: '#19b4fa',
  colorSecondary: '#0496cc',

  // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Maax, "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#222',
  textInverseColor: '#fff',

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  inputBg: '#fff',
  inputBorder: '#eee',
  inputTextColor: '#222',
  inputBorderRadius: 4,

  brandTitle: 'Kitten, by KissKissBankBank & Co.',
  brandUrl: 'https://kitten.vercel.app',
  brandImage: '/logo-kisskissandco.svg',
})
