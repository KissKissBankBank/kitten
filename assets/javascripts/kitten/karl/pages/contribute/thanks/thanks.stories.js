import React from 'react'
import { storiesOf } from '@storybook/react'
import { Marger } from '../../../../components/layout/marger'

import { ThanksPage } from './thanks'

storiesOf('Pages/Contribute', module).add('Thanks', () => {
  return (
    <Marger top="10" bottom="10">
      <ThanksPage />
    </Marger>
  )
})
