import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Container } from './index'
import COLORS from '../../../constants/colors-config'

storiesOf('Grid/Container', module)
  .add(
    'default',
    withInfo('common info')(() => (
      <Container>
        <div
          style={{
            height: '100px',
            backgroundColor: COLORS.line1,
          }}
        />
      </Container>
    )),
  )
  .add(
    'with Custom Styles',
    withInfo('common info')(() => (
      <Container
        style={{
          position: 'relative',

          [`@media (max-width: 1337px)`]: {
            paddingBottom: 80,
          },
        }}
      >
        <div
          style={{
            height: '100px',
            backgroundColor: COLORS.line1,
          }}
        />
      </Container>
    )),
  )
