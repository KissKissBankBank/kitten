const colorList = {
  black: { colorValue: '#000', invertedColorValue: '#fff' },
  greyDarker: { colorValue: '#222', invertedColorValue: '#fff' },
  greyDark: { colorValue: '#b8b8b8', invertedColorValue: '#000' },
  grey: { colorValue: '#d8d8d8', invertedColorValue: '#000' },
  greyLight: { colorValue: '#eee', invertedColorValue: '#000' },

  whiteTer: { colorValue: '#f6f6f6', invertedColorValue: '#000' },
  whiteBis: { colorValue: '#fbfbfb', invertedColorValue: '#000' },
  white: { colorValue: '#fff', invertedColorValue: '#000' },

  blueDarker: { colorValue: '#0496cc', invertedColorValue: '#fff' },
  blueDark: { colorValue: '#05a8e6', invertedColorValue: '#fff' },
  blue: { colorValue: '#19b4fa', invertedColorValue: '#fff' },
  blueLight: { colorValue: '#bae8fd', invertedColorValue: '#000' },
  blueLighter: { colorValue: '#e8f7fe', invertedColorValue: '#000' },
  blueLightest: { colorValue: '#f3fbff', invertedColorValue: '#000' },

  redDarker: { colorValue: '#e10028', invertedColorValue: '#fff' },
  redDark: { colorValue: '#f00037', invertedColorValue: '#fff' },
  red: { colorValue: '#ff0046', invertedColorValue: '#fff' },
  redLight: { colorValue: '#ffe5ec', invertedColorValue: '#000' },
  redLighter: { colorValue: '#ffb2c7', invertedColorValue: '#000' },
  redLightest: { colorValue: '#fff2f6', invertedColorValue: '#000' },

  greenDarker: { colorValue: '#25943d', invertedColorValue: '#fff' },
  greenDark: { colorValue: '#43b25b', invertedColorValue: '#fff' },
  green: { colorValue: '#61d079', invertedColorValue: '#000' },
  greenLight: { colorValue: '#cff0d6', invertedColorValue: '#000' },
  greenLighter: { colorValue: '#effaf1', invertedColorValue: '#000' },
  greenLightest: { colorValue: '#f7fcf8', invertedColorValue: '#000' },

  // MDC colors
  blueLightBis: { colorValue: '#caf4fe', invertedColorValue: '#000' },
  redBis: { colorValue: '#ff0000', invertedColorValue: '#fff' },
  redLightBis: { colorValue: '#ffebe0', invertedColorValue: '#000' },
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

export const getColor = (color, options) => {
  // Old way to get a color
  if (deprecatedColorNames[color]) {
    console.warn(
      `getColor() deprecation warning: please use non-deprecated color names instead of '${color}'`,
    )
    return deprecatedColorNames[color].colorValue
  }

  // Prefered way to get a color
  if (colorAliases[color]) {
    if (options && options.invert) {
      return colorAliases[color].invertedColorValue
    }
    return colorAliases[color].colorValue
  }

  // Last resort if your color has no alias
  if (colorList[color]) {
    if (options && options.invert) {
      return colorList[color].invertedColorValue
    }
    return colorList[color].colorValue
  }

  throw 'getColor() exception: provided color argument doesn’t exist'
}
