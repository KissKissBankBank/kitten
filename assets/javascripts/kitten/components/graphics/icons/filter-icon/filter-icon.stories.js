import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { FilterIcon } from './index'
import { Marger, Container } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

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
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="FilterIcon" />,
    },
  },
}

export const Default = () => {
  return (
    <StoryGrid>
      <FilterIcon animated={boolean('is animated ?', false)} />
    </StoryGrid>
  )
}
