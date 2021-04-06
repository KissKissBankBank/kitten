import React from 'react'
import styled from 'styled-components'
import { text, select } from '@storybook/addon-knobs'
import { Label } from './index'

export default {
  title: 'Form/Label',
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

export const Default = () => (
  <div className="k-u-margin-quadruple">
    <Label size={select('size', ['normal', 'tiny', 'micro'], 'normal')}>
      {text('children', 'Label')}
    </Label>
  </div>
)

Default.storyName = 'Label'

export const WithFocusId = () => (
  <div className="k-u-margin-quadruple">
    <Label
      size={select('size', ['normal', 'tiny', 'micro'], 'normal')}
      focusId="focusable-component"
    >
      {text('children', 'Label')}
    </Label>
    <FocusableComponent id="focusable-component" tabIndex="0">
      <span className="k-u-color-primary1 k-u-weight-bold k-u-background-color-primary5 focused">
        😸 Focused
      </span>
      <span className="k-u-color-font2 k-u-weight-regular not-focused">
        😿 Not focused
      </span>
    </FocusableComponent>
  </div>
)

WithFocusId.storyName = 'with focusId prop'
