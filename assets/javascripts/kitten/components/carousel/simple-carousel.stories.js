import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { KarlSimpleCarousel } from '../../karl/carousel/simple-carousel'

storiesOf('Carousel/SimpleCarousel', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => <KarlSimpleCarousel />),
  )
