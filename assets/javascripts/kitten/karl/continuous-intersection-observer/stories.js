import React from 'react'
import { storiesOf } from '@storybook/react'
import AnimatedNumbersHoc from './hoc-demo'
import styled, { createGlobalStyle } from 'styled-components'
import ContinuousIntersectionObserver from '../../helpers/utils/continuous-intersection-observer'
import AnimatedNumbers from './animated-numbers'

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

storiesOf('IntersectionObserver/ContinuousIntersectionObserver', module)
  .add('HOC: Animated numbers on scroll w/ scroll direction', () => {
    return (
      <StyledMain>
        <GlobalStyle />
        <StyledSection>1</StyledSection>
        <AnimatedNumbersHoc
          beforeComponentProps={{ style: { scrollSnapAlign: 'none' } }}
          afterComponentProps={{ style: { scrollSnapAlign: 'none' } }}
        />
        <StyledSection>3</StyledSection>
      </StyledMain>
    )
  })
  .add('ContinuousIntersectionObserver with Render Props', () => {
    return (
      <StyledMain>
        <GlobalStyle />
        <StyledSection>1</StyledSection>
        <ContinuousIntersectionObserver
          beforeComponentProps={{ style: { scrollSnapAlign: 'none' } }}
          afterComponentProps={{ style: { scrollSnapAlign: 'none' } }}
          render={({
            isPartlyVisible,
            isCompletelyVisible,
            visibleElement,
          }) => (
            <AnimatedNumbers
              isPartlyVisible={isPartlyVisible}
              isCompletelyVisible={isCompletelyVisible}
              visibleElement={visibleElement}
            />
          )}
        />
        <StyledSection>3</StyledSection>
      </StyledMain>
    )
  })
