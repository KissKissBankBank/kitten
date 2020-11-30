import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './stylesheets/app-kitten.scss'
import React from 'react'
import { addDecorator } from '@storybook/react'
import GridDecorator from './decorators/grid'
import { addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import anysort from 'anysort'
import { themes } from '@storybook/theming';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme: themes.karl,
  },
  options: {
    /**
     * https://github.com/storybookjs/storybook/issues/6327#issuecomment-664900197
     * display the top-level grouping as a "root" in the sidebar
     * @type {Boolean}
     */
    storySort: (previous, next) => {
      const [previousStory, previousMeta] = previous
      const [nextStory, nextMeta] = next

      return anysort(previousMeta.kind, nextMeta.kind, [
        'Documentation/Introduction',
        'Documentation/Usage/Using Kitten',
        'Documentation/Usage/**',
        'Documentation/**',
        'Helpers/**',
        '**',
      ])
    }
  },
})

addDecorator(GridDecorator)
