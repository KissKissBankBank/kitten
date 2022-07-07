const StyleDictionary = require('style-dictionary')

const { fileHeader, createPropertyFormatter } = StyleDictionary.formatHelpers

// Consts

const ITEM_TYPES = {
  'typography': 'font',
  'color': 'color',
  'fontFamilies': 'font-family',
  'borderRadius': 'border-radius',
  'fontSizes': 'font-size',
  'boxShadow': 'box-shadow',
  'lineHeights': 'line-height',
  'fontWeights': 'font-weight',
}

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

// Utils
const formattedVariables = ({ dictionary, outputReferences }) => {
    const formatProperty = createPropertyFormatter({
      outputReferences,
      dictionary,
      format: 'css'
    });
    return dictionary.allTokens.map(formatProperty).join('\n');
}

const formattedClasses = ({ dictionary }) => {
    const formatProperty = (item) => {
      return `  .k-u-${item.name} { ${ITEM_TYPES[item.type]}: var(--${item.name}) !important; }`
    }
    return dictionary.allTokens.map(formatProperty).join('\n');
}

// Formats
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

StyleDictionary.registerFormat({
  name: 'customCssUtilities',
  formatter: function({dictionary, options={}, file}) {
    return fileHeader({file}) +
      '@mixin k-token {\n' +
      formattedClasses({ dictionary }) +
      `}\n`;
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
    cssUtilityClass: {
      transforms: ['name/cti/kebab'],
      buildPath: 'assets/stylesheets/kitten/utilities/',
      files: [
        {
          destination: '_token.scss',
          format: 'customCssUtilities',
          filter: (obj) => {
            return [
              'borderRadius',
              'boxShadow',
              'color',
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
