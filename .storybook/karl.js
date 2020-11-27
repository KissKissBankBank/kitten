// Karl.js

import { create } from '@storybook/theming/create'
import COLORS from '../assets/javascripts/kitten/constants/colors-config'

export default create({
  base: 'light',

  colorPrimary: COLORS.primary1,
  colorSecondary: COLORS.primary3,

  // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Maax, "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: COLORS.font1,
  textInverseColor: COLORS.background1,

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  inputBg: COLORS.background1,
  inputBorder: COLORS.line1,
  inputTextColor: COLORS.font1,
  inputBorderRadius: 4,

  brandTitle: 'Kitten, by KissKissBankBank & Co.',
  brandUrl: 'https://kitten.vercel.com',
  brandImage: '/logo-kisskissandco.svg',
})
