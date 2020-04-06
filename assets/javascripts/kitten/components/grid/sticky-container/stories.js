import React, { useRef } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { StickyContainer } from './index'
import { Container } from '../../../components/grid/container'
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

    The component can be used as always sticky, and only sticky on scroll up
    or down.

    Props:

      - 'isSticky' accepts 'topOnScrollUp' or 'bottomOnScrollDown' or 'always',
        so the component is only sticky when scrolling in that direction, or always.
      - 'top' or 'bottom' help with the component’s position.


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
  const lines = createRangeFromZeroTo(100)

  return (
    <ul>
      {lines.map(i => {
        return <li key={i}>🐱</li>
      })}
    </ul>
  )
}

const MainComponent = () => {
  const component = useRef(null)

  return (
    <Container>
      <div
        style={{
          minHeight: '1200px',
          backgroundColor: COLORS.line1,
          position: 'relative',
        }}
      >
        <StickyContainer isSticky="topOnScrollUp" top="0" ref={component}>
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
        <button
          onClick={() => {
            component.current.setSticky()
          }}
        >
          Stik me!
        </button>
        <button
          onClick={() => {
            component.current.setUnsticky()
          }}
        >
          Unstik me!
        </button>
      </div>
    </Container>
  )
}

storiesOf('Grid/StickyContainer', module)
  .add(
    'isSticky="always"',
    withInfo(info)(() => (
      <Container>
        <div
          style={{
            minHeight: '1200px',
            backgroundColor: COLORS.line1,
            position: 'relative',
          }}
        >
          <StickyContainer isSticky="always">
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
      </Container>
    )),
  )
  .add(
    'isSticky="topOnScrollUp"',
    withInfo(info)(() => <MainComponent />),
  )
  .add(
    'isSticky="bottomOnScrollDown"',
    withInfo(info)(() => (
      <Container>
        <div
          style={{
            minHeight: '1200px',
            backgroundColor: COLORS.line1,
            position: 'relative',
          }}
        >
          <StickyContainer isSticky="bottomOnScrollDown" bottom="0">
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
      </Container>
    )),
  )
