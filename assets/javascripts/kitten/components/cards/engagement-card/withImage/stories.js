import React from 'react'
import styled from 'styled-components'
import { withKnobs, text } from '@storybook/addon-knobs'
import { EngagementCardWithImage } from './index'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledEngagementCardWithImage = styled(EngagementCardWithImage)`
  width: ${pxToRem(200)};
`

export default {
  component: EngagementCardWithImage,
  title: 'Cards/EngagementCardWithImage',
  decorators: [withKnobs],
  parameters: {
    component: EngagementCardWithImage,
  },
}

export const DefaultProps = () => (
  <Container>
    <Marger top={4}>
      <StyledEngagementCardWithImage
        href="#"
        backgroundImage="https://source.unsplash.com/WLUHO9A_xik/200x120"
      >
        {text('Categorie', 'Autoproduction culturelle')}
      </StyledEngagementCardWithImage>
    </Marger>
  </Container>
)
