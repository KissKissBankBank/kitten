import React from 'react'
import { storiesOf } from '@storybook/react'
import AnimatedNumberSection from './index'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    scroll-snap-type: y mandatory;
  }
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  & > * {
    scroll-snap-align: center;
  }
`

const StyledSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

storiesOf('Animated/Number in Box', module).add('default', () => {
  return (
    <StyledMain>
      <GlobalStyle />
      <StyledSection>1</StyledSection>
      <AnimatedNumberSection
        beforeComponentProps={{ style: { scrollSnapAlign: 'none' } }}
        afterComponentProps={{ style: { scrollSnapAlign: 'none' } }}
      />
      <StyledSection>3</StyledSection>
    </StyledMain>
  )
})
