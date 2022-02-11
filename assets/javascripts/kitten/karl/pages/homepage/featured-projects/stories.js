import React from 'react'
import { FeaturedProjects } from './index'
import {
  Container,
  stepToRem,
  pxToRem,
  ScreenConfig
} from 'kitten'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
  margin-top: 1rem;

  .Homepage__section__title {
    font-size: ${stepToRem(-1)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(0)};
    }
  }
`

export default {
  component: FeaturedProjects,
  title: 'pages/homepage/FeaturedProjects',
  parameters: {
    component: FeaturedProjects,
  },
}

export const DefaultProps = () => (
  <StyledContainer>
    <FeaturedProjects />
  </StyledContainer>
)
