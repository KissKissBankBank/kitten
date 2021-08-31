import React, { useRef } from 'react'
import { StickyContainer } from './index'
import { COLORS, createRangeFromZeroTo } from '../../..'

const storyDecorator = story => (
  <div
    className="story-Container"
    style={{
      minHeight: '1200px',
      backgroundColor: COLORS.line1,
      position: 'relative',
    }}
  >
    {story()}
    <ul>
      {createRangeFromZeroTo(100).map(i => {
        return <li key={i}>🐱</li>
      })}
    </ul>
  </div>
)

export const AlwaysSticky = args => (
  <StickyContainer {...args}>
    <div
      style={{
        fontSize: '40px',
        lineHeight: '40px',
      }}
    >
      🐈
    </div>
  </StickyContainer>
)

export const NeverSticky = args => (
  <StickyContainer {...args}>
    <div
      style={{
        fontSize: '40px',
        lineHeight: '40px',
      }}
    >
      🐈
    </div>
  </StickyContainer>
)

export const StickyTopOnScrollUp = args => {
  const component = useRef(null)

  return (
    <StickyContainer {...args} ref={component}>
      <div
        style={{
          fontSize: '40px',
          lineHeight: '40px',
        }}
      >
        🐈
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
    </StickyContainer>
  )
}

export const StickyBottomOnScrollDown = args => (
  <StickyContainer {...args}>
    <div
      style={{
        fontSize: '40px',
        lineHeight: '40px',
      }}
    >
      🐈
    </div>
  </StickyContainer>
)

const argTypes = {
  top: {
    name: 'top',
    control: { type: 'number' },
  },
  bottom: {
    name: 'bottom',
    control: { type: 'number' },
  },
  isSticky: {
    name: 'isSticky',
    options: ['topOnScrollUp', 'bottomOnScrollDown', 'always', 'never'],
    control: { type: 'select' },
  },
}

const args = {
  top: null,
  bottom: null,
  isSticky: 'never',
}

AlwaysSticky.decorators = [storyDecorator]
AlwaysSticky.argTypes = argTypes
AlwaysSticky.args = { ...args, isSticky: 'always' }

NeverSticky.decorators = [storyDecorator]
NeverSticky.argTypes = argTypes
NeverSticky.args = { ...args, isSticky: 'never' }

StickyTopOnScrollUp.decorators = [storyDecorator]
StickyTopOnScrollUp.argTypes = argTypes
StickyTopOnScrollUp.args = { ...args, isSticky: 'topOnScrollUp', top: 0 }

StickyBottomOnScrollDown.decorators = [storyDecorator]
StickyBottomOnScrollDown.argTypes = argTypes
StickyBottomOnScrollDown.args = {
  ...args,
  isSticky: 'bottomOnScrollDown',
  bottom: 0,
}
