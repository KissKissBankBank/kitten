import React from 'react'
import { boolean, text, number, select } from '@storybook/addon-knobs'
import { TextInputWithUnit } from './index'

export const Default = () => (
  <div className="story-Container story-Grid story-Grid--large">
    <TextInputWithUnit
      valid={boolean('Valid', false)}
      disabled={boolean('Disabled', false)}
      tiny={boolean('Tiny', false)}
      big={boolean('Big', false)}
      huge={boolean('Huge', false)}
      giant={boolean('Giant', false)}
      center={boolean('Center', false)}
      error={boolean('Error', false)}
      unit={text('Unit', '€')}
      unitWord={text('UnitWord', null)}
      digits={number('Digits', null)}
      variant={select('Variant', ['andromeda', 'orion'], 'andromeda')}
    />
  </div>
)
