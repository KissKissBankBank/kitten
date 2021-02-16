import React, { useRef } from 'react'
import { StickyContainer } from './index'
import COLORS from '../../../constants/colors-config'
import { createRangeFromZeroTo } from '../../../helpers/utils/range'

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

export const AlwaysSticky = () => (
  <div className="story-Container">
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
  </div>
)

export const StickyTopOnScrollUp = () => {
  const component = useRef(null)

  return (
    <div className="story-Container">
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
    </div>
  )
}

export const StickyBottomOnScrollDown = () => (
  <div className="story-Container">
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
  </div>
)
