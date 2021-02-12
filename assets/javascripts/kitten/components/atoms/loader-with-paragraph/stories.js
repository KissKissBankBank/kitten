import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { LoaderWithParagraph } from './'

export default {
  title: 'Atoms/LoaderWithParagraph',
  component: LoaderWithParagraph,
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
      {text('Wording', 'Loading')}
    </LoaderWithParagraph>
  )
}
