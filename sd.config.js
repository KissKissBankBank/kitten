const StyleDictionary = require('style-dictionary')

const pxToRem = sizeInPx => {
  if (sizeInPx === 0) return 0
  return parseFloat(sizeInPx / 16) + 'rem'
}

const getHeader = (tokenName, tokenPresenter, dictionary) => {
  return (
    `:root {\n` +
    `  /*!\n` +
    `  * @tokens ${tokenName}\n` +
    `  * @presenter ${tokenPresenter}\n` +
    `  * Automatically generated, do not edit\n` +
    `  */\n\n` +
    dictionary.allTokens
      .map(token => {
        return (
          `  --${token.name}: ${token.value};` +
          ` /* ${token.description || token.original.value} */`
        )
      })
      .join(`\n`) +
    `\n}\n`
  )
}

// Formats
StyleDictionary.registerFormat({
  name: 'colorCss',
  formatter: ({ dictionary }) => {
    return getHeader('Colors', 'Color', dictionary)
  },
})

StyleDictionary.registerFormat({
  name: 'borderRadius',
  formatter: ({ dictionary }) => {
    return getHeader('BorderRadius', 'BorderRadius', dictionary)
  },
})

StyleDictionary.registerFormat({
  name: 'fontSize',
  formatter: ({ dictionary }) => {
    return getHeader('FontSize', 'FontSize', dictionary)
  },
})

StyleDictionary.registerFormat({
  name: 'spacing',
  formatter: ({ dictionary }) => {
    return getHeader('Spacing', 'Spacing', dictionary)
  },
})

// Transforms
StyleDictionary.registerTransform({
  type: 'value',
  name: 'pxToRem',
  matcher: token => token.value.toString().endsWith('px'),
  transformer: token => pxToRem(parseInt(token.value.toString())),
})

module.exports = {
  source: ['data/output.json'],
  platforms: {
    css: {
      transforms: ['color/hex', 'pxToRem', 'name/cti/kebab'],
      transformGroup: 'css',
      buildPath: 'assets/stylesheets/kitten/tokens/',
      files: [
        {
          destination: '_colors.scss',
          format: 'colorCss',
          filter: {
            type: 'color',
          },
        },
        {
          destination: '_border-radius.scss',
          format: 'borderRadius',
          filter: {
            type: 'borderRadius',
          },
        },
        {
          destination: '_font-size.scss',
          format: 'fontSize',
          filter: {
            type: 'fontSizes',
          },
        },
        {
          destination: '_spacing.scss',
          format: 'spacing',
          filter: {
            type: 'spacing',
          },
        },
      ],
    },
  },
}
