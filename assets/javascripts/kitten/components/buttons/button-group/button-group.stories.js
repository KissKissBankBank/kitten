import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { ButtonGroup } from './index'

export const Default = () => (
  <ButtonGroup aria-label="Button label">
    <ButtonGroup.Button>Button1</ButtonGroup.Button>
    <ButtonGroup.Button
      modifier={boolean('active', false) ? 'helium' : 'hydrogen'}
      active={boolean('active', false)}
    >
      Button2
    </ButtonGroup.Button>
    <ButtonGroup.Button>Button3</ButtonGroup.Button>
  </ButtonGroup>
)

Default.decorators = [
  Story => (
    <div className="story-Container">
      <Story />
    </div>
  ),
]
