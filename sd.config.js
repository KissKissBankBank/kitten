const StyleDictionary = require('style-dictionary')

// Helpers
const pxToRem = sizeInPx => {
  if (sizeInPx === 0) return 0
  return parseFloat(sizeInPx / 16) + 'rem'
}

const getInt = value => parseInt(value.toString())

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
  matcher: token => {
    return (token.type === 'typography')
  },
  transformer: (token) => {
    const {value} = token
    return `${value.fontWeight.value} ${value.fontSize.value}/${value.lineHeight.value} ${value.fontFamily.value}`
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
    if (token.value.spread !== "0" || token.value.spread > 0) {
      valueArray.push(pxToRem(getInt(token.value.spread)))
    }

    valueArray.push(token.value.color)

    return valueArray.join(' ')
  },
})

module.exports = {
  parsers: [{
    pattern: /\.json$/,
    parse: ({ contents }) => {
      return JSON.parse(contents).global;
    }
  }],
  source: ['data/tokens.json'],
  platforms: {
    css: {
      transforms: ['color/hex', 'pxToRem', 'shadow', 'name/cti/kebab', 'typography'],
      transformGroup: 'css',
      buildPath: 'assets/stylesheets/kitten/tokens/',
      files: [
        {
          destination: '_border-radius.scss',
          options: {outputReferences: true},
          format: 'css/variables',
          filter: {
            type: 'borderRadius',
          },
        },
        {
          destination: '_box-shadow.scss',
          options: {outputReferences: true},
          format: 'css/variables',
          filter: {
            type: 'boxShadow',
          },
        },
        {
          destination: '_colors.scss',
          options: {outputReferences: true},
          format: 'css/variables',
          filter: {
            type: 'color',
          },
        },
        {
          destination: '_spacing.scss',
          options: {outputReferences: true},
          format: 'css/variables',
          filter: {
            type: 'spacing',
          },
        },
        {
          destination: '_typography.scss',
          options: {outputReferences: true},
          format: 'css/variables',
          filter: (obj) => {
            return [
              'typography',
              'fontSizes',
              'fontWeights',
              'fontFamilies',
              'lineHeights'
            ].includes(obj.type)
          },
        },
      ],
    },
  },
}
