import React from 'react'
import styled from 'styled-components'
import { text, number } from '@storybook/addon-knobs'
import { EngagementCardWithImage } from './index'
import { Marger, Container, pxToRem } from '../../../..'
import { DocsPage } from 'storybook/docs-page'

const StyledEngagementCardWithImage = styled(EngagementCardWithImage)`
  width: ${pxToRem(200)};
`

export default {
  component: EngagementCardWithImage,
  title: 'Molecules/Cards/EngagementCardWithImage',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          importString="EngagementCardWithImage"
        />
      ),
    },
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
