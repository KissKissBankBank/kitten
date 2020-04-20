const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

module.exports = {
  stories: [
    '../assets/javascripts/kitten/**/stories.(js|mdx)',
    '../assets/javascripts/kitten/**/*.stories.(js|mdx)',
    '../doc/**/*.stories.(js|mdx)',
  ],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs/register',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /stories.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    })
    return config
  },
}
