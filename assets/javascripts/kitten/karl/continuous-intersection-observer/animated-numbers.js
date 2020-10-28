import React from 'react'
import styled, { css } from 'styled-components'
import { pxToRem, stepToRem } from '../../helpers/utils/typography'
import COLORS from '../../constants/colors-config'

const NUMBER_ANIM_DELAY = 0.05
const MAX_DIGITS = 11
const NUMBER_FONT_SIZE = stepToRem(16)

const StyledContainer = styled.section`
  position: relative;
  min-height: 110vh;
  box-sizing: border-box;
  background: ${COLORS.font1};
  color: ${COLORS.background1};
  scroll-snap-align: center;

  padding: ${pxToRem(60)} 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const AnimatedBox = styled.div`
  padding: 0 5vw;
`

const NumberBox = styled.div`
  height: ${NUMBER_FONT_SIZE};
  overflow-y: hidden;
  white-space: nowrap;
`
const NumberSpan = styled.span`
  font-size: ${NUMBER_FONT_SIZE};
  line-height: 1;
  display: inline-block;
  transition: transform 0.3s ease;

  transform: translateY(
    ${({ visibleElement }) => {
      if (visibleElement === 'target') {
        return '0'
      }

      if (visibleElement === 'after') {
        return '-100%'
      }

      return '100%'
    }}
  );

  ${({ transitionDelay, visibleElement }) => {
    if (visibleElement === 'target') {
      const delay = transitionDelay || 0
      let rules = ''
      for (let i = 0; i < MAX_DIGITS; i++) {
        rules += `&:nth-child(${i + 1}) {
            transition-delay: ${delay + i * NUMBER_ANIM_DELAY}s;
          }`
      }
      return css`
        ${rules}
      `
    }
  }}
`

const LegendBox = styled.span`
  display: block;
  transition: transform .3s ease-in-out, opacity .3s ease;
  ${({ transitionDelay, visibleElement }) => {
    if (transitionDelay && visibleElement === 'target') {
      return css`
        transition-delay: ${transitionDelay}s, ${transitionDelay}s;
      `
    }
  }}

  transform: translateX(
    ${({ visibleElement }) => {
      if (visibleElement === 'target') {
        return '0'
      }
      if (visibleElement === 'after') {
        return pxToRem(-100)
      }
      return pxToRem(100)
    }});

  opacity:
    ${({ visibleElement }) => {
      if (visibleElement === 'target') return 1
      return 0
    }};
`

const AnimatedNumberItem = ({
  number,
  legend,
  transitionDelay,
  visibleElement,
  ...props
}) => (
  <AnimatedBox {...props}>
    <NumberBox>
      {Array.from(number.toString(10)).map(num => (
        <NumberSpan
          visibleElement={visibleElement}
          transitionDelay={transitionDelay}
        >
          {num}
        </NumberSpan>
      ))}
    </NumberBox>
    <LegendBox
      visibleElement={visibleElement}
      transitionDelay={transitionDelay}
    >
      {legend}
    </LegendBox>
  </AnimatedBox>
)

const AnimatedNumbers = ({ visibleElement }) => {
  return (
    <StyledContainer>
      <AnimatedNumberItem
        number={345}
        legend="Legend 1"
        transitionDelay={0}
        visibleElement={visibleElement}
      />
      <AnimatedNumberItem
        number={45}
        legend="Legend 2"
        transitionDelay={0.4}
        visibleElement={visibleElement}
      />
      <AnimatedNumberItem
        number="344&nbsp;558&nbsp;022"
        legend="Legend 3"
        transitionDelay={0.8}
        visibleElement={visibleElement}
      />
    </StyledContainer>
  )
}

export default AnimatedNumbers
