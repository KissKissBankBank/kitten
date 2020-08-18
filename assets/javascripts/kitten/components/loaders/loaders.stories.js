import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { Loader } from './loader'
import { LoaderWithParagraph } from './loader-with-paragraph'

export default {
  title: 'Loaders',
  component: Loader,
}

export const Default = () => {
  return <Loader color={text('Color', 'black')} />
}

export const WithParagraph = () => {
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
