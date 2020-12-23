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
    tiny={boolean('Tiny', false)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    modifier={select('Modifier', modifierOptions, 'hydrogen')}
    selected={boolean('Select', false)}
    variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
  >
    {(text, ('Text', 'MyTag'))}
  </TagButton>
)

export const WithIcon = () => (
  <TagButton
    tiny={boolean('Tiny', false)}
    big={boolean('Big', false)}
    huge={boolean('Huge', false)}
    selected={boolean('Select', false)}
    icon={boolean('Icon', false)}
  >
    <VisaIcon />
  </TagButton>
)
