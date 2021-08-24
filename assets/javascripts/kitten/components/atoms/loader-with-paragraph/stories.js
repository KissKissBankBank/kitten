import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { LoaderWithParagraph } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Atoms/LoaderWithParagraph',
  component: LoaderWithParagraph,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="LoaderWithParagraph" />
      ),
    },
  },
}

export const Default = () => {
  return (
    <LoaderWithParagraph
      loaderPosition={select(
        'loaderPosition',
        ['left', 'top', 'right', 'bottom'],
        'left',
      )}
    >
      {text('children', 'Loading')}
    </LoaderWithParagraph>
  )
}
