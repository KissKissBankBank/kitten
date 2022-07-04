import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './stylesheets/app-kitten.scss'
import React from 'react'
import { DevGridDecorator } from './decorators/dev-grid'
import { DocsPage, DocsContainer } from '@storybook/addon-docs'
import { themes } from '@storybook/theming';

const tokenContext = require.context(
  '!!raw-loader!../assets/stylesheets',
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
        ['Introduction', 'Usage', 'Design'],
        'Helpers',
        'Accessibility',
        'Layout',
        'Graphics',
        'Typography',
        'Action',
        'Form',
        'Embed',
        'Structure',
        'Information',
        'Overlay',
        'Interaction',
        'Feedback',
        'Navigation',
        'Layer',
        'Pages',
        'PoCs',
      ],
      method: 'alphabetical',
    },
  },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
  },
}

export const decorators = [
  story => (
    <main>
      {story()}
      <DevGridDecorator />
    </main>
  ),
]
