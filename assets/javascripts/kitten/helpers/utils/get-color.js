const colorList = {
  black: { colorValue: '#000' },
  greyDarker: { colorValue: '#222' },
  greyDark: { colorValue: '#b8b8b8' },
  grey: { colorValue: '#d8d8d8' },
  greyLight: { colorValue: '#eee' },

  whiteTer: { colorValue: '#f6f6f6' },
  whiteBis: { colorValue: '#fbfbfb' },
  white: { colorValue: '#fff' },

  blueDarker: { colorValue: '#0496cc' },
  blueDark: { colorValue: '#05a8e6' },
  blue: { colorValue: '#19b4fa' },
  blueLight: { colorValue: '#bae8fd' },
  blueLighter: { colorValue: '#e8f7fe' },
  blueLightest: { colorValue: '#f3fbff' },

  redDarker: { colorValue: '#e10028' },
  redDark: { colorValue: '#f00037' },
  red: { colorValue: '#ff0046' },
  redLight: { colorValue: '#ffe5ec' },
  redLighter: { colorValue: '#ffb2c7' },
  redLightest: { colorValue: '#fff2f6' },

  greenDarker: { colorValue: '#25943d' },
  greenDark: { colorValue: '#43b25b' },
  green: { colorValue: '#61d079' },
  greenLight: { colorValue: '#cff0d6' },
  greenLighter: { colorValue: '#effaf1' },
  greenLightest: { colorValue: '#f7fcf8' },

  // MDC colors
  blueLightBis: { colorValue: '#caf4fe' },
  redBis: { colorValue: '#ff0000' },
  redLightBis: { colorValue: '#ffebe0' },
}

export const colorAliases = {
  warning: colorList.red,
  warningBackground: colorList.redLight,
  success: colorList.green,
  successBackground: colorList.greenLighter,

  text: colorList.greyDarker,
  background: colorList.white,
  invertedText: colorList.white,
  invertedBackground: colorList.greyDarker,

  light: colorList.greyLight,
  dark: colorList.greyDarker,

  primaryDarker: colorList.blueDarker,
  primaryDark: colorList.blueDark,
  primary: colorList.blue,
  primaryLight: colorList.blueLight,
  primaryLighter: colorList.blueLighter,
  primaryLightest: colorList.blueLightest,

  mdcBlue: colorList.blueLightBis,
  mdcRed: colorList.redBis,
  mdcRedLight: colorList.redLightBis,
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

// Old way to get a color
export const getColor = color => {
  if (deprecatedColorNames[color]) {
    console.warn(
      `getColor() deprecation warning: please use non-deprecated color names instead of '${color}'`,
    )
    return deprecatedColorNames[color].colorValue
  }

  // Prefered way to get a color
  if (colorAliases[color]) {
    return colorAliases[color].colorValue
  }

  // Last resort if your color has no alias
  if (colorList[color]) {
    return colorList[color].colorValue
  }

  throw 'getColor() exception: provided color argument doesn’t exist'
}
