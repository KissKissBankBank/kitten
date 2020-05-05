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
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
      },
    },
  ],
}
