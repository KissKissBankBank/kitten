const colorList = {
  black: '#000',
  greyDarker: '#222',
  greyDark: '#b8b8b8',
  grey: '#d8d8d8',
  greyLight: '#eee',

  whiteTer: '#f6f6f6',
  whiteBis: '#fbfbfb',
  white: '#fff',

  blueDarker: '#0496cc',
  blueDark: '#05a8e6',
  blue: '#19b4fa',
  blueLight: '#bae8fd',
  blueLighter: '#e8f7fe',
  blueLightest: '#f3fbff',

  redDarker: '#e10028',
  redDark: '#f00037',
  red: '#ff0046',
  redLight: '#ffe5ec',
  redLighter: '#ffb2c7',
  redLightest: '#fff2f6',

  greenDarker: '#25943d',
  greenDark: '#43b25b',
  green: '#61d079',
  greenLight: '#cff0d6',
  greenLighter: '#effaf1',
  greenLightest: '#f7fcf8',

  blueLightBis: '#caf4fe',
  redBis: '#ff0000',
  redLightBis: '#ffebe0',
}

export const colorAliases = {
  warning: colorList.red,
  warningBackground: colorList.redLight,
  success: colorList.green,
  successBackground: colorList.greenLighter,

  text: colorList.greyDarker,
  background: colorList.white,

  light: colorList.greyLight,
  dark: colorList.greyDarker,

  primaryDarker: colorList.blueDarker,
  primaryDark: colorList.blueDark,
  primary: colorList.blue,
  primaryLight: colorList.blueLight,
  primaryLighter: colorList.blueLighter,
  primaryLightest: colorList.blueLightest,

  defaultImageBackground: colorList.blueLightBis,
}

const deprecatedColorNames = {
  // Deprecated color names
  font1: colorList.greyDarker,
  font2: colorList.greyDark,
  line1: colorList.greyLight,
  line2: colorList.grey,
  background3: colorList.whiteTer,
  background2: colorList.whiteBis,
  background1: colorList.white,
  lightRed: colorList.redLightBis,
  primary1: colorList.blue,
  primary2: colorList.blueDark,
  primary3: colorList.blueDarker,
  primary4: colorList.blueLight,
  primary5: colorList.blueLighter,
  primary6: colorList.blueLightest,
  tertiary1: colorList.greenLighter,
  tertiary2: colorList.greenLight,
  valid: colorList.green,
  error: colorList.red,
  error2: colorList.redLight,
  error3: colorList.redLighter,
}

export default { ...colorList, ...colorAliases, ...deprecatedColorNames }
