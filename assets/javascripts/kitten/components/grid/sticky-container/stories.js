import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { StickyContainer } from './index'
import { Container } from '../../../components/grid/container'
import { Marger } from '../../../components/layout/marger'
import COLORS from '../../../constants/colors-config'
import { createRangeFromZeroTo } from '../../../helpers/utils/range'

const BlockContent = () => {
  let lines = createRangeFromZeroTo(100)

  return (
    <ul>
      {lines.map(i => {
        return <li key={i}>🥕 🐇</li>
      })}
    </ul>
  )
}

storiesOf('Grid/StickyContainer', module).add(
  'default',
  withInfo('common info')(() => (
    <Container>
      <Marger top={3}>
        <div
          style={{
            minHeight: '1200px',
            backgroundColor: COLORS.line1,
          }}
        >
          <StickyContainer isStickyOnScroll="up">
            <span
              style={{
                fontSize: '40px',
                lineHeight: '40px',
              }}
            >
              🦊
            </span>
          </StickyContainer>
          <BlockContent />
        </div>
      </Marger>
    </Container>
  )),
)
