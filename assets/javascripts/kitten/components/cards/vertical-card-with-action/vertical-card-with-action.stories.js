import React from 'react'
import { text, object, select } from '@storybook/addon-knobs'
import { VerticalCardWithAction } from './index'

const buttonModifierOptions = {
  Hydrogen: 'hydrogen',
  Helium: 'helium',
  Lithium: 'lithium',
  Beryllium: 'beryllium',
  Carbon: 'carbon',
  Oxygen: 'oxygen',
  Checked: 'checked',
  Copper: 'copper',
}

export const Default = () => (
  <div className="story-Container story-Grid">
    <VerticalCardWithAction
      imageProps={object('Src/Alt', {
        src: 'https://via.placeholder.com/410x230/caf4fe/caf4fe',
        alt: 'Image alt',
      })}
      title={text('Title', 'Custom title')}
      description={text(
        'Description',
        'Lorem ipsum dolor sit amet, consectetur adipisicing ' +
          'elit, sed do eiusmod tempor incididunt ut labore et ' +
          'dolore magna aliqua. Ut enim ad minim veniam, quis ' +
          'nostrud exercitation ullamco laboris nisi ut aliquip.',
      )}
      button={text('Button', 'Custom button text')}
      buttonModifier={select('ButtonModifier', buttonModifierOptions, 'helium')}
      buttonProps={object('ButtonProps', {
        href: 'https://via.placeholder.com/410x230/caf4fe/caf4fe',
      })}
    />
  </div>
)
