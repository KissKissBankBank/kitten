import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { FilterIcon } from './index'

export default {
  title: 'Icons/FilterIcon',
  component: FilterIcon,
  decorators: [
    Story => (
      <div className="story-Container">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  return <FilterIcon animated={boolean('is animated ?', false)} />
}
