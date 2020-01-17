import React from 'react'
import { storiesOf } from '@storybook/react'
import AnimatedNumberSection from './index'
import styled from 'styled-components'

const StyledSection = styled.section`
  min-height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

storiesOf('Animated/Number in Box', module).add('default', () => {
  return (
    <>
      <StyledSection>1</StyledSection>
      <AnimatedNumberSection />
      <StyledSection>3</StyledSection>
    </>
  )
})
