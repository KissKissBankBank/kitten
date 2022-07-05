const StyleDictionary = require('style-dictionary')

// Helpers
const pxToRem = sizeInPx => {
  if (sizeInPx === 0) return 0
  return parseFloat(sizeInPx / 16) + 'rem'
}

const getInt = value => parseInt(value.toString())

const longHexToRgba = value => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
  return result ? `rgba(${[
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16),
      (parseInt(result[4], 16) / 256).toFixed(2),
    ].join(', ')})` : null;
}

// Header formatter
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
  name: 'boxShadow',
  formatter: ({ dictionary }) => {
    return getHeader('BoxShadow', 'Shadow', dictionary)
  },
})

StyleDictionary.registerFormat({
  name: 'fontSize',
  formatter: ({ dictionary }) => {
    return getHeader('FontSize', 'FontSize', dictionary)
  },
})

StyleDictionary.registerFormat({
  name: 'fontWeight',
  formatter: ({ dictionary }) => {
    return getHeader('FontWeight', 'FontWeight', dictionary)
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
  transformer: token => pxToRem(getInt(token.value)),
})

StyleDictionary.registerTransform({
  type: 'value',
  name: 'typography',
  transitive: true,
  matcher: token => token.type === 'typography',
  transformer: (token) => {
    const {value} = token
    return `${value.fontWeight} ${value.fontSize}/${value.lineHeight} ${value.fontFamily}`
  }
})

StyleDictionary.registerTransform({
  type: 'value',
  name: 'shadow',
  transitive: true,
  matcher: token => token.type === 'boxShadow',
  transformer: token => {
    const valueArray = [
      pxToRem(getInt(token.value.x)),
      pxToRem(getInt(token.value.y)),
      pxToRem(getInt(token.value.blur)),
    ]
    if (!!token.value.spread) {
      valueArray.push(pxToRem(getInt(token.value.spread)))
    }

    valueArray.push(longHexToRgba(token.value.color))

    return valueArray.join(' ')
  },
})

module.exports = {
  source: ['data/output.json'],
  platforms: {
    css: {
      transforms: ['color/hex', 'pxToRem', 'shadow', 'name/cti/kebab'],
      transformGroup: 'css',
      buildPath: 'assets/stylesheets/kitten/tokens/',
      files: [
        {
          destination: '_border-radius.scss',
          format: 'borderRadius',
          filter: {
            type: 'borderRadius',
          },
        },
        {
          destination: '_box-shadow.scss',
          format: 'boxShadow',
          filter: {
            type: 'boxShadow',
          },
        },
        {
          destination: '_colors.scss',
          format: 'colorCss',
          filter: {
            type: 'color',
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
          destination: '_font-weight.scss',
          format: 'fontWeight',
          filter: {
            type: 'fontWeights',
          },
        },
        {
          destination: '_spacing.scss',
          format: 'spacing',
          filter: {
            type: 'spacing',
          },
        },
        {
          destination: '_typography.scss',
          format: 'typography',
          filter: {
            type: 'typography',
          },
        },
      ],
    },
  },
}
