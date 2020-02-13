import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import NewsList from './index'

storiesOf('Pages/Actus', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => <NewsList />),
  )
