import React, { useRef } from 'react'
import { StickyContainer } from './index'
import { COLORS, createRangeFromZeroTo } from 'kitten'

export default {
  component: StickyContainer,
  title: 'Layout/StickyContainer',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="StickyContainer" />,
    },
  },
  decorators: [
    story => (
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
    ),
  ],

  argTypes: {
    top: {
      name: 'top',
      control: 'number',
    },
    bottom: {
      name: 'bottom',
      control: 'number',
    },
    isSticky: {
      name: 'isSticky',
      options: ['topOnScrollUp', 'bottomOnScrollDown', 'always', 'never'],
      control: 'select',
    },
  },
  
  args: {
    top: null,
    bottom: null,
    isSticky: 'never',
  },
}

export const Default = args => <StickyContainer {...args} />

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

AlwaysSticky.decorators = Default.decorators
AlwaysSticky.argTypes = Default.argTypes
AlwaysSticky.args = { ...Default.args, isSticky: 'always' }

NeverSticky.decorators = Default.decorators
NeverSticky.argTypes = Default.argTypes
NeverSticky.args = { ...Default.args, isSticky: 'never' }

StickyTopOnScrollUp.decorators = Default.decorators
StickyTopOnScrollUp.argTypes = Default.argTypes
StickyTopOnScrollUp.args = { ...Default.args, isSticky: 'topOnScrollUp', top: 0 }

StickyBottomOnScrollDown.decorators = Default.decorators
StickyBottomOnScrollDown.argTypes = Default.argTypes
StickyBottomOnScrollDown.args = {
  ...Default.args,
  isSticky: 'bottomOnScrollDown',
  bottom: 0,
}
