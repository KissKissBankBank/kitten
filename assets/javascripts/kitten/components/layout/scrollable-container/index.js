import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { StyledContainer, StyledScrollableContainer } from './styled'
import COLORS from '../../../constants/colors-config'
import throttle from 'lodash/throttle'

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
      <StyledScrollableContainer
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
      </StyledScrollableContainer>
    </StyledContainer>
  )
}

ScrollableContainer.propTypes = {
  shadowColor: PropTypes.string,
}
