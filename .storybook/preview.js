import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './stylesheets/app-kitten.scss'
import React from 'react'
import GridDecorator from './decorators/grid'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { themes } from '@storybook/theming';

export const parameters = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme: themes.karl,
  },
  options: {
    storySort: {
      order: ['Documentation', ['Introduction', 'Usage', 'Design'], 'Helpers'],
      method: 'alphabetical',
    },
  },
  controls: {
    presetColors:[
      { color: '#ff4785', title: 'Coral' },
      'rgba(0, 159, 183, 1)',
      '#fe4a49',
    ]
  },
}

export const decorators = [
  Story => (
    <GridDecorator>
      <Story />
    </GridDecorator>
  ),
]
