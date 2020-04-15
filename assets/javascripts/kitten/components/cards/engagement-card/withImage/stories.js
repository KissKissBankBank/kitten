import React from 'react'
import styled from 'styled-components'
import { withKnobs, text } from '@storybook/addon-knobs'
import { EngagementCardWithImage } from './index'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import { Grid, GridCol } from '../../../../components/grid/grid'

const StyledContainer = styled(Container)`
  box-sizing: border-box;
  overflow: hidden;
`

const StyledEngagementCardWithImage = styled(EngagementCardWithImage)`
  display: flex;
  height: ${pxToRem(120)};
  width: ${pxToRem(200)};
`

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;


  li {
    position: relative;
  }

  :hover li,
  :active li {
    opacity: 0.5;
  }

  li:hover,
  li:active {
    opacity: 1;
  }
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
  <StyledContainer>
    <Marger top={4}>
      <StyledList>
        <li>
          <StyledEngagementCardWithImage
            href="#"
            backgroundImage="https://source.unsplash.com/WLUHO9A_xik/200x120"
          >
            {text('Categorie', 'Autoproduction culturelle')}
          </StyledEngagementCardWithImage>
        </li>
      </StyledList>
    </Marger>
  </StyledContainer>
)
