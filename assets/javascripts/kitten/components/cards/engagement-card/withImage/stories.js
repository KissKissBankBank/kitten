import React from 'react'
import styled from 'styled-components'
import { text, number } from '@storybook/addon-knobs'
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
        imageHeight={number('image height', 120)}
      >
        {text('Categorie', 'Autoproduction culturelle')}
      </StyledEngagementCardWithImage>
    </Marger>
  </Container>
)
