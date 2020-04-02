import React from 'react'
import { storiesOf } from '@storybook/react'
import HomepageNews from './index'

storiesOf('Pages/Homepage', module).add('News', () => {
  return <HomepageNews />
})
