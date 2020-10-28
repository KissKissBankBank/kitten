import React from 'react'
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

export default {
  title: 'IntersectionObserver/ContinuousIntersectionObserver',
  component: ContinuousIntersectionObserver,
}

export const WithRenderProps = () => {
  return (
    <StyledMain>
      <GlobalStyle />
      <StyledSection>1</StyledSection>
      <ContinuousIntersectionObserver
        beforeComponentProps={{ style: { scrollSnapAlign: 'none' } }}
        afterComponentProps={{ style: { scrollSnapAlign: 'none' } }}
      >
        {({ visibleElement }) => (
          <AnimatedNumbers visibleElement={visibleElement} />
        )}
      </ContinuousIntersectionObserver>
      <StyledSection>3</StyledSection>
    </StyledMain>
  )
}
