import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { KissbankersBoard } from './kissbankers-board'
import { Marger } from '../../../../components/layout/marger'

storiesOf('Pages/Kissbankers-board', module)
  .addDecorator(withKnobs)
  .add('KissbankersBoard', () => {
    return (
      <Marger top="10" bottom="10">
        <KissbankersBoard />
      </Marger>
    )
  })
