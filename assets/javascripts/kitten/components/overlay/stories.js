import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Overlay } from './index'

storiesOf('Overlay', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <Overlay isActive={boolean('isActive?', false)} />
  })
