import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { FeaturedProjects } from './index'
import { Container } from '../../../../components/grid/container'
import styled from 'styled-components'
import { stepToRem, pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

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
  decorators: [withKnobs],
  parameters: {
    component: FeaturedProjects,
  },
}

export const DefaultProps = () => (
  <StyledContainer>
    <FeaturedProjects />
  </StyledContainer>
)
