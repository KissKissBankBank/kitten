import React, { useRef, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import withContinuousIntersectionObserver from '../../../hoc/with-continuous-intersection-observer'

const NUMBER_ANIM_DELAY = 0.05
const MAX_DIGITS = 11
const NUMBER_FONT_SIZE = stepToRem(16)

const StyledContainer = styled.section`
  height: 110vh;
  background: black;
  color: white;
`

const FixedBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

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
    ${({ isCompletelyVisible, visibleElement }) => {
      if (isCompletelyVisible) {
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
    ${({ isCompletelyVisible, visibleElement }) => {
      if (isCompletelyVisible) {
        return '0'
      }
      if (visibleElement === 'after') {
        return pxToRem(-100)
      }
      return pxToRem(100)
    }});

  opacity:
    ${({ isCompletelyVisible }) => {
      if (isCompletelyVisible) return 1
      return 0
    }};
`

const AnimatedNumberItem = ({
  number,
  legend,
  transitionDelay,
  isCompletelyVisible,
  visibleElement,
  ...props
}) => (
  <AnimatedBox {...props}>
    <NumberBox>
      {Array.from(number.toString(10)).map(num => (
        <NumberSpan
          isCompletelyVisible={isCompletelyVisible}
          visibleElement={visibleElement}
          transitionDelay={transitionDelay}
        >
          {num}
        </NumberSpan>
      ))}
    </NumberBox>
    <LegendBox
      isCompletelyVisible={isCompletelyVisible}
      visibleElement={visibleElement}
      transitionDelay={transitionDelay}
    >
      {legend}
    </LegendBox>
  </AnimatedBox>
)

const AnimatedNumberSection = ({
  isCompletelyVisible,
  isPartlyVisible,
  visibleElement,
}) => {
  return (
    <StyledContainer>
      {isPartlyVisible && (
        <FixedBox>
          <AnimatedNumberItem
            number={345}
            legend="Legend 1"
            transitionDelay={0}
            isCompletelyVisible={isCompletelyVisible}
            visibleElement={visibleElement}
          />
          <AnimatedNumberItem
            number={45}
            legend="Legend 2"
            transitionDelay={0.4}
            isCompletelyVisible={isCompletelyVisible}
            visibleElement={visibleElement}
          />
          <AnimatedNumberItem
            number="344&nbsp;558&nbsp;022"
            legend="Legend 3"
            transitionDelay={0.8}
            isCompletelyVisible={isCompletelyVisible}
            visibleElement={visibleElement}
          />
        </FixedBox>
      )}
    </StyledContainer>
  )
}

export default withContinuousIntersectionObserver(AnimatedNumberSection)
