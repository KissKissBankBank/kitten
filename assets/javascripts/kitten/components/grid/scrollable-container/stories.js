import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ScrollableContainer } from './index'
import { Container } from '../../../components/grid/container'
import COLORS from '../../../constants/colors-config'

storiesOf('Grid/ScrollableContainer', module).add(
  'default',
  withInfo('common info')(() => (
    <Container>
      <ScrollableContainer
        backgroundColor={COLORS.line1}
        style={{ backgroundColor: COLORS.line1 }}
      >
        <div style={{ height: '100px', lineHeight: '100px' }}>
          {'🚗 '.repeat(100)}
        </div>
      </ScrollableContainer>
    </Container>
  )),
)
