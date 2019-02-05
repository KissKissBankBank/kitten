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
      <ScrollableContainer>
        <div
          style={{
            height: '100px',
            backgroundColor: COLORS.line1,
          }}
        >
          OIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOI
        </div>
      </ScrollableContainer>
    </Container>
  )),
)
