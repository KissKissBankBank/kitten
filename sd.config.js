const StyleDictionary = require('style-dictionary')

const { fileHeader, createPropertyFormatter } = StyleDictionary.formatHelpers

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

const formattedVariables = ({ dictionary, outputReferences }) => {
    const formatProperty = createPropertyFormatter({
      outputReferences,
      dictionary,
      format: 'css'
    });
    return dictionary.allTokens.map(formatProperty).join('\n');
}

StyleDictionary.registerFormat({
  name: 'orderedCssVariables',
  formatter: function({dictionary, options={}, file}) {
    const selector = options.selector ? options.selector : `:root`;
    const { outputReferences } = options;
    return fileHeader({file}) +
      `${selector} {\n` +
      formattedVariables({dictionary, outputReferences}) +
      `\n}\n`;
  },
});

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
      transforms: ['color/hex', 'name/cti/kebab', 'pxToRem', 'shadow', 'typography'],
      buildPath: 'assets/stylesheets/kitten/tokens/',
      files: [
        {
          destination: '_border-radius.scss',
          options: {outputReferences: true},
          format: 'orderedCssVariables',
          filter: {
            type: 'borderRadius',
          },
        },
        {
          destination: '_box-shadow.scss',
          options: {outputReferences: true},
          format: 'orderedCssVariables',
          filter: {
            type: 'boxShadow',
          },
        },
        {
          destination: '_colors.scss',
          options: {outputReferences: true},
          format: 'orderedCssVariables',
          filter: {
            type: 'color',
          },
        },
        {
          destination: '_spacing.scss',
          options: {outputReferences: true},
          format: 'orderedCssVariables',
          filter: {
            type: 'spacing',
          },
        },
        {
          destination: '_typography.scss',
          options: {outputReferences: true},
          format: 'orderedCssVariables',
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
