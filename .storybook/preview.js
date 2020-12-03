import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './stylesheets/app-kitten.scss'
import React from 'react'
import { addDecorator } from '@storybook/react'
import GridDecorator from './decorators/grid'
import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { themes } from '@storybook/theming';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme: themes.karl,
  },
  options: {
    storySort: {
      order: ['Documentation', ['Introduction', 'Usage'], 'Helpers'],
      method: 'alphabetical',
    }
  },
})

addDecorator(GridDecorator)
