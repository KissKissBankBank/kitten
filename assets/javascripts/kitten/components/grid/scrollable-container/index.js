import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { StyledContainer, StyledScrollableContainer } from './styled'
import COLORS from '../../../constants/colors-config'
import throttle from 'lodash/throttle'

export const ScrollableContainer = ({
  shadowColor = COLORS.background1,
  children,
  ...other
}) => {
  const [leftGradientState, setLeftGradientState] = useState(true)
  const [rightGradientState, setRightGradientState] = useState(false)

  const refScrollableContainer = useRef(null)

  useEffect(() => {
    const element = refScrollableContainer.current

    function onScroll(event) {
      setLeftGradientState(event.target.scrollLeft === 0)
      setRightGradientState(
        event.target.scrollLeft ===
          event.target.scrollWidth - event.target.parentNode.clientWidth,
      )
    }
    element.addEventListener('scroll', throttle(onScroll, 200))
    return () => element.removeEventListener('scroll', throttle(onScroll, 200))
  }, [])

  return (
    <StyledContainer {...other}>
      <StyledScrollableContainer
        shadowColor={shadowColor}
        ref={refScrollableContainer}
        displayLeftGradient={!leftGradientState}
        displayRightGradient={!rightGradientState}
      >
        {children}
      </StyledScrollableContainer>
    </StyledContainer>
  )
}

ScrollableContainer.propTypes = {
  shadowColor: PropTypes.string,
}
