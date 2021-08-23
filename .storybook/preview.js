import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './stylesheets/app-kitten.scss'
import React from 'react'
import GridDecorator from './decorators/grid'
import { DocsPage, DocsContainer } from '@storybook/addon-docs'
import { themes } from '@storybook/theming';

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
}

export const decorators = [
  Story => (
    <GridDecorator>
      <Story />
    </GridDecorator>
  ),
]
