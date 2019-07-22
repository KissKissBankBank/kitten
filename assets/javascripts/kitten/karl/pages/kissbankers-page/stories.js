import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import KissbankersPage from './index'

storiesOf('Pages/KissbankersPage', module).add('Kissbankers-page', () => {
  return <KissbankersPage />
})
