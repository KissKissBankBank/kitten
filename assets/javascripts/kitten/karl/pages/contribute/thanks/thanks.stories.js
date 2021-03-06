import React from 'react'
import { Marger } from '../../../../components/layout/marger'

import { ThanksPage } from './thanks'

export default {
  title: 'pages/Contribute/ThanksPage',
  component: ThanksPage,
}

export const Default = () => {
  return (
    <Marger top="10" bottom="10">
      <ThanksPage />
    </Marger>
  )
}
