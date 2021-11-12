import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './stylesheets/app-kitten.scss'
import React from 'react'
import { DevGridDecorator } from './decorators/dev-grid'
import { DocsPage, DocsContainer } from '@storybook/addon-docs'
import { themes } from '@storybook/theming';

const tokenContext = require.context(
  '!!raw-loader!../src',
  true,
  /.\.(css|less|scss|svg)$/
);

const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default };
});

export const parameters = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme: themes.karl,
  },
  options: {
    storySort: {
      order: [
        'Documentation',
        ['Introduction', 'Usage', 'Design', 'Design Token'],
        'Helpers',
        'Accessibility',
        'Graphics',
        'Layout',
        'Atoms',
        'Form',
        'Molecules',
        'Organisms',
        'Pages',
      ],
      method: 'alphabetical',
    },
  },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
  },
  designToken: {
    defaultTab: 'Colors',
    files: tokenFiles
  },
}

export const decorators = [
  story => (
    <DevGridDecorator>
      {story()}
    </DevGridDecorator>
  ),
]
