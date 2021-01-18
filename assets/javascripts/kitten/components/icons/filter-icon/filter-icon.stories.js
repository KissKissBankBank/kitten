import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { FilterIcon } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

const StoryGrid = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
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
