import React from 'react'
import { storiesOf } from '@storybook/react'
import AnimatedBackgroundTransition from './index'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    scroll-snap-type: y mandatory;
  }
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`

const StyledSection = styled.section`
  min-height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
`

storiesOf('Animated/Animated Background Transition', module).add(
  'default',
  () => {
    return (
      <StyledMain>
        <GlobalStyle />
        <AnimatedBackgroundTransition />
        <StyledSection>3</StyledSection>
      </StyledMain>
    )
  },
)
