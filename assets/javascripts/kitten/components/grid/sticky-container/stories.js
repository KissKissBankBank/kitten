import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { StickyContainer } from './index'
import { Container } from '../../../components/grid/container'
import { Marger } from '../../../components/layout/marger'
import COLORS from '../../../constants/colors-config'
import { createRangeFromZeroTo } from '../../../helpers/utils/range'

const info = {
  text: `
    # StickyContainer
    &nbsp;

    ## Import

    ~~~js
    import { StickyContainer } from '@kisskissbankbank/kitten/src/components/grid/sticky-container'
    ~~~

    ## Usage
    &nbsp;

    The component can be used as always sticky, and only sticky on scroll up or down.


    ### isStickyOnScroll

    When scrolling up, top prop is necessary (defaults to 0), when scrolling down, bottom prop is necessary (defaults to 0).

    ~~~js
      <StickyContainer isStickyOnScroll="up">
        …
      </StickyContainer>
    ~~~

    ### sticky

    ~~~js
      <StickyContainer sticky>
        …
      </StickyContainer>
    ~~~
  `,
  header: false,
  propTables: false,
}

const BlockContent = () => {
  let lines = createRangeFromZeroTo(100)

  return (
    <ul>
      {lines.map(i => {
        return <li key={i}>🐱</li>
      })}
    </ul>
  )
}

storiesOf('Grid/StickyContainer', module).add(
  'default',
  withInfo(info)(() => (
    <Container>
      <Marger top={3}>
        <div
          style={{
            minHeight: '1200px',
            backgroundColor: COLORS.line1,
          }}
        >
          <StickyContainer isStickyOnScroll="up">
            <div
              style={{
                fontSize: '40px',
                lineHeight: '40px',
              }}
            >
              🐈
            </div>
          </StickyContainer>
          <BlockContent />
        </div>
      </Marger>
    </Container>
  )),
)
