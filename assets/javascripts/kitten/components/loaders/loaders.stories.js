import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { Loader } from './loader'
import { LoaderWithParagraph } from './loader-with-paragraph'

storiesOf('Loaders', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Loader color={text('Color', 'black')} />
  })
  .add('with paragraph', () => {
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
  })
