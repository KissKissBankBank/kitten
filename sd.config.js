const StyleDictionary = require('style-dictionary');

StyleDictionary.registerFormat({
  name: 'colorCss',
  formatter: ({dictionary}) => {
    return `:root {\n` +
      `  /*!\n` +
      `  * @tokens Colors\n` +
      `  * @presenter Color\n` +
      `  */\n\n` +
      dictionary.allTokens.map(token => {
        return `  --${token.name}: ${token.value}; /* ${token.description} */`
      }).join(`\n`) +
      `\n}\n`;
  },
})

module.exports = {
  source: ['data/output.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'assets/stylesheets/kitten/tokens/',
      files: [{
        destination: '_colors.scss',
        format: 'colorCss',
        filter: (token) => {
          return token.attributes.category === 'color';
        }
      }],
    },
  }
}
