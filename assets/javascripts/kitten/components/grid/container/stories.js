import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Container } from './index'

storiesOf('Grid/Container', module).add(
  'default',
  withInfo('common info')(() => <Container />),
)
