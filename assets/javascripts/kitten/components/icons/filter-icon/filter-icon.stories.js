import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { FilterIcon } from './index'

const StoryGrid = ({ children }) => (
  <div className="story-Container">{children}</div>
)

export default {
  title: 'Icons/FilterIcon',
  component: FilterIcon,
}

export const Default = () => {
  return (
    <StoryGrid>
      <FilterIcon animated={boolean('is animated ?', false)} />
    </StoryGrid>
  )
}
