import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { FilterIcon } from './index'
import { Marger, Container } from '../../../..'

const StoryGrid = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

export default {
  title: 'Graphics/Icons/FilterIcon',
  component: FilterIcon,
}

export const Default = () => {
  return (
    <StoryGrid>
      <FilterIcon animated={boolean('is animated ?', false)} />
    </StoryGrid>
  )
}
