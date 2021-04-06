import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { TagButton } from './index'
import { VisaIcon } from '../../icons/visa-icon'

const modifierOptions = {
  Hydrogen: 'hydrogen',
  Carbon: 'carbon',
  Helium: 'helium',
}

export const Default = () => (
  <TagButton
    modifier={select('Modifier', modifierOptions, 'hydrogen')}
    size={select('Size', ['tiny', 'regular', 'big', 'huge'], 'regular')}
    selected={boolean('Select', false)}
    variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
  >
    {(text, ('Text', 'MyTag'))}
  </TagButton>
)

export const WithIcon = () => (
  <TagButton
    size={select('Size', ['tiny', 'regular', 'big', 'huge'], 'regular')}
    selected={boolean('Select', false)}
    icon={boolean('Icon', false)}
  >
    <VisaIcon />
  </TagButton>
)

export default {
  component: TagButton,
  title: 'Buttons/TagButton',
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--thin">
        <Story />
      </div>
    ),
  ],
}
