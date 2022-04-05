import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import throttle from 'lodash/throttle'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { Container } from '../../../components/layout/container'

const gradientWidth = 20

export const StyledContainer = styled(Container)`
  position: relative;
  padding-left: 0;
  padding-right: 0;
  width: 100%;

  .k-ScrollableContainer {
    display: flex;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-x: none;

    /* Mandatory to combine scroll with this property on iOS. */
    -webkit-overflow-scrolling: touch;
    /* Hide scrollbar on Chrome and Safari. */
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      pointer-events: none;
      touch-action: none;
      z-index: 5;
      width: ${pxToRem(gradientWidth)};
      opacity: 0;
      transition: opacity var(--transition);
    }

    &::before {
      left: 0;
      background-image: linear-gradient(
        to right,
        var(--scrollableContainer-gradient),
        transparent
      );
    }
    &::after {
      right: 0;
      background-image: linear-gradient(
        to left,
        var(--scrollableContainer-gradient),
        transparent
      );
    }

    &.k-ScrollableContainer--hasLeftGradient::before,
    &.k-ScrollableContainer--hasRightGradient::after {
      opacity: 1;
    }
  }
`

export const ScrollableContainer = ({
  shadowColor = COLORS.background1,
  className,
  children,
  style,
  ...other
}) => {
  const [leftGradientState, setLeftGradientState] = useState(true)
  const [rightGradientState, setRightGradientState] = useState(true)

  const refScrollableContainer = useRef(null)

  const checkRight = element => {
    if (!element) return false
    return (
      element.scrollLeft ===
      element.scrollWidth - element.parentNode.clientWidth
    )
  }

  const onScroll = event => {
    setLeftGradientState(event.target.scrollLeft === 0)
    setRightGradientState(checkRight(event.target))
  }

  useEffect(() => {
    const element = refScrollableContainer.current

    element && element.addEventListener('scroll', throttle(onScroll, 200))
    setRightGradientState(checkRight(element))

    return () =>
      element && element.removeEventListener('scroll', throttle(onScroll, 200))
  })

  return (
    <StyledContainer
      {...other}
      className={classNames('k-ScrollableContainer__wrapper', className)}
    >
      <div
        ref={refScrollableContainer}
        className={classNames('k-ScrollableContainer', {
          'k-ScrollableContainer--hasLeftGradient': !leftGradientState,
          'k-ScrollableContainer--hasRightGradient': !rightGradientState,
        })}
        style={{
          ...style,
          '--scrollableContainer-gradient': shadowColor,
        }}
      >
        {children}
      </div>
    </StyledContainer>
  )
}

ScrollableContainer.propTypes = {
  shadowColor: PropTypes.string,
}
