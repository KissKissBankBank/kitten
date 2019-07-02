const colorList = {
  black: () => '#000',
  greyDarker: () => '#222',
  greyDark: () => '#b8b8b8',
  grey: () => '#d8d8d8',
  greyLight: () => '#eee',

  whiteTer: () => '#f6f6f6',
  whiteBis: () => '#fbfbfb',
  white: () => '#fff',

  blueDarker: () => '#0496cc',
  blueDark: () => '#05a8e6',
  blue: () => '#19b4fa',
  blueLight: () => '#bae8fd',
  blueLighter: () => '#e8f7fe',
  blueLightest: () => '#f3fbff',

  redDarker: () => '#e10028',
  redDark: () => '#f00037',
  red: () => '#ff0046',
  redLight: () => '#ffe5ec',
  redLighter: () => '#ffb2c7',
  redLightest: () => '#fff2f6',

  greenDarker: () => '#25943d',
  greenDark: () => '#43b25b',
  green: () => '#61d079',
  greenLight: () => '#cff0d6',
  greenLighter: () => '#effaf1',
  greenLightest: () => '#f7fcf8',

  // MDC colors
  blueLightBis: () => '#caf4fe',
  redBis: () => '#ff0000',
  redLightBis: () => '#ffebe0',
}

export const colorAliases = {
  warning: () => colorList.red(),
  warningBackground: () => colorList.redLight(),
  success: () => colorList.green(),
  successBackground: () => colorList.greenLighter(),

  text: () => colorList.greyDarker(),
  background: () => colorList.white(),

  light: () => colorList.greyLight(),
  dark: () => colorList.greyDarker(),

  primaryDarker: () => colorList.blueDarker(),
  primaryDark: () => colorList.blueDark(),
  primary: () => colorList.blue(),
  primaryLight: () => colorList.blueLight(),
  primaryLighter: () => colorList.blueLighter(),
  primaryLightest: () => colorList.blueLightest(),

  mdcBlue: () => colorList.blueLightBis(),
  mdcRed: () => colorList.redBis(),
  mdcRedLight: () => colorList.redLightBis(),
}

const deprecatedColorNames = {
  // Deprecated color names
  font1: () => {
    deprecatedWarning('font1')
    return colorList.greyDarker()
  },
  font2: () => {
    deprecatedWarning('font2')
    return colorList.greyDark()
  },
  line1: () => {
    deprecatedWarning('line1')
    return colorList.greyLight()
  },
  line2: () => {
    deprecatedWarning('line2')
    return colorList.grey()
  },
  background3: () => {
    deprecatedWarning('background3')
    return colorList.whiteTer()
  },
  background2: () => {
    deprecatedWarning('background2')
    return colorList.whiteBis()
  },
  background1: () => {
    deprecatedWarning('background1')
    return colorList.white()
  },
  lightRed: () => {
    deprecatedWarning('lightRed')
    return colorList.redLightBis()
  },
  primary1: () => {
    deprecatedWarning('primary1')
    return colorList.blue()
  },
  primary2: () => {
    deprecatedWarning('primary2')
    return colorList.blueDark()
  },
  primary3: () => {
    deprecatedWarning('primary3')
    return colorList.blueDarker()
  },
  primary4: () => {
    deprecatedWarning('primary4')
    return colorList.blueLight()
  },
  primary5: () => {
    deprecatedWarning('primary5')
    return colorList.blueLighter()
  },
  primary6: () => {
    deprecatedWarning('primary6')
    return colorList.blueLightest()
  },
  tertiary1: () => {
    deprecatedWarning('tertiary1')
    return colorList.greenLighter()
  },
  tertiary2: () => {
    deprecatedWarning('tertiary2')
    return colorList.greenLight()
  },
  valid: () => {
    deprecatedWarning('valid')
    return colorList.green()
  },
  error: () => {
    deprecatedWarning('error')
    return colorList.red()
  },
  error2: () => {
    deprecatedWarning('error2')
    return colorList.redLight()
  },
  error3: () => {
    deprecatedWarning('error3')
    return colorList.redLighter()
  },
}

const deprecatedWarning = colorName => {
  console.warn(
    `Color deprecation warning: please use non-deprecated color names instead of '${colorName}'`,
  )
}

export default { ...colorList, ...colorAliases, ...deprecatedColorNames }
