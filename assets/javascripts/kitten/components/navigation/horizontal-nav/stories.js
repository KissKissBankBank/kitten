import React from 'react'
import styled from 'styled-components'
import { ScreenConfig } from '../../../constants/screen-config'
import { HorizontalNav } from './index'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow-x: scroll;

  ul {
    align-items: center;
  }

  @media (min-width: ${ScreenConfig.L.min}px) {
    flex-direction: row;
  }
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

const items = Array.from(Array(18).keys()).map(index => {
  return {
    key: `item-${index}`,
    text: `Nav link ${index}`,
    href: '#',
    selected: index === 10,
  }
})

export default {
  title: 'Navigation/HorizontalNav',
  component: HorizontalNav,
}

export const Default = () => (
  <Container>
    <StyledContainer>
      <HorizontalNav items={items} center />
    </StyledContainer>
  </Container>
)
