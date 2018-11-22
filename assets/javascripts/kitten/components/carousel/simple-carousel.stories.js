import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'
import { KarlSimpleCarousel } from 'kitten/karl/carousel/simple-carousel'

storiesOf('Carousel/SimpleCarousel', module)
  .addDecorator(withKnobs)
  .add('default', withInfo('common info')(() => <KarlSimpleCarousel />))
