import React from 'react'
import styled from 'styled-components'
import { Label } from './index'

export default {
  title: 'Form/Label',
  decorators: [story => <div className="story-Container">{story()}</div>],
  argTypes: {
    focusId: {
      name: 'focusId',
      control: { type: 'text' },
    },
    size: {
      name: 'size',
      options: [null, undefined, 'normal', 'tiny', 'micro'],
      control: { type: 'select' },
    },
    withoutPointerEvents: {
      name: 'withoutPointerEvents',
      control: { type: 'boolean' },
    },
  },
  args: {
    children: 'Label',
    focusId: null,
    size: 'normal',
    withoutPointerEvents: false,
  },
}

const FocusableComponent = styled.div`
  margin-top: 1.25rem;

  .focused {
    display: none;
  }

  &:focus {
    .focused {
      display: inline;
    }

    .not-focused {
      display: none;
    }
  }
`

export const Default = args => <Label {...args} />

Default.storyName = 'Label'

export const WithFocusId = args => (
  <>
    <Label {...args} focusId="focusable-component" />
    <FocusableComponent id="focusable-component" tabIndex="0">
      <span className="k-u-color-primary1 k-u-weight-bold k-u-background-color-primary5 focused">
        😸 Focused
      </span>
      <span className="k-u-color-font2 k-u-weight-regular not-focused">
        😿 Not focused
      </span>
    </FocusableComponent>
  </>
)

WithFocusId.storyName = 'with focusId prop'
