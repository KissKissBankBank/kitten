import React, { Fragment, useRef, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import throttle from 'lodash/throttle'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledStickyContainer = styled.div`
  will-change: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease;

  ${({ stickyContainerStyleProps }) => stickyContainerStyleProps}
`

function useScrollDirection() {
  // Returns an array with booleans:
  //
  //     [true, false] // => user is scrolling to the bottom of the page.
  //     [false, true] // => user is scrolling to the top of the page.
  //     [false, false] // => no scroll change.
  //
  // See also https://www.iwakoscott.com/blog/useRef

  // save the new scroll position in state
  const [scrollPos, setScrollPos] = useState(0)
  // useRef Hook to save the old scroll state.
  const oldScrollPos = useRef(0)

  useEffect(() => {
    function onScroll() {
      setScrollPos(window.pageYOffset)
      // save the old scroll position in the ref
      oldScrollPos.current = window.pageYOffset
    }
    window.addEventListener('scroll', throttle(onScroll, 200))
    return () => window.removeEventListener('scroll', throttle(onScroll, 200))
  }, [])

  // current scroll position minus the old scroll position saved in state.
  const difference = scrollPos - oldScrollPos.current

  return [difference > 0, difference < 0]
}

export const StickyContainer = ({
  children,
  top,
  bottom,
  isSticky,
  ...other
}) => {
  const currentStickyContainer = useRef(null)

  const [stuck, setStuckState] = useState(false)
  const [containerHeight, setContainerHeight] = useState(0)
  const [currentlyUnsticking, setCurrentlyUnstickingState] = useState(false)

  const [scrollDirectionDown, scrollDirectionUp] = useScrollDirection()

  const setSticky = () => {
    setStuckState(true)
  }

  const setUnstickyWithTransition = () => {
    setCurrentlyUnstickingState(true)
    setTimeout(() => {
      setStuckState(false)
      setCurrentlyUnstickingState(false)
    }, 220)
  }

  const setUnsticky = () => {
    setStuckState(false)
  }

  const isOriginalContainerOutOfViewport = () => {
    if (isSticky === 'topOnScrollUp') {
      const distanceToBorder = top || 0
      return window.pageYOffset > containerHeight + distanceToBorder
    }
    if (isSticky === 'bottomOnScrollDown') {
      const distanceToBorder = bottom || 0
      return (
        window.pageYOffset + window.innerHeight <
        document.body.clientHeight - (containerHeight + distanceToBorder)
      )
    }
  }

  const shouldStickContainerOnTop = () => {
    return (
      scrollDirectionUp &&
      isSticky === 'topOnScrollUp' &&
      isOriginalContainerOutOfViewport()
    )
  }

  const shouldStickContainerOnBottom = () => {
    return (
      scrollDirectionDown &&
      isSticky === 'bottomOnScrollDown' &&
      isOriginalContainerOutOfViewport()
    )
  }

  const shouldStickContainer = () => {
    return shouldStickContainerOnTop() || shouldStickContainerOnBottom()
  }

  const shouldUnstickContainer = () => {
    return !isOriginalContainerOutOfViewport()
  }

  const shouldUnstickContainerWithTransition = () => {
    return (
      (scrollDirectionDown && isSticky === 'topOnScrollUp') ||
      (scrollDirectionUp && isSticky === 'bottomOnScrollDown')
    )
  }

  useEffect(() => {
    if (isSticky === 'always') {
      setSticky()
    }
    const currentContainerHeight = currentStickyContainer.current
      ? currentStickyContainer.current.clientHeight
      : 0
    setContainerHeight(currentContainerHeight)
  }, []) // [] makes that Effect fire on Component mount only

  useEffect(() => {
    if (isSticky !== 'always') {
      if (shouldUnstickContainer()) {
        setUnsticky()
      } else if (shouldStickContainer()) {
        setSticky()
      } else if (shouldUnstickContainerWithTransition()) {
        setUnstickyWithTransition()
      }
    }
  }, [scrollDirectionDown, scrollDirectionUp])

  const stickyContainerStyleProps = () => {
    const position = stuck ? 'fixed' : 'static'

    if (isSticky === 'always') {
      return css`
        position: ${position};
        top: ${top};
        bottom: ${bottom};
      `
    }

    const distance = currentlyUnsticking || !stuck ? containerHeight : 0

    const directionToAnimate = isSticky === 'topOnScrollUp' ? 'top' : 'bottom'

    const basis = directionToAnimate === 'top' ? top || 0 : bottom || 0

    const directionDistance = pxToRem(basis - distance)

    return css`
      position: ${position};
      ${directionToAnimate}: ${directionDistance};
      transition-property: ${directionToAnimate};
    `
  }

  return (
    <Fragment>
      {stuck && (
        <div
          style={{
            height: pxToRem(containerHeight),
            flex: '0 0 auto',
          }}
        />
      )}
      <StyledStickyContainer
        ref={currentStickyContainer}
        stickyContainerStyleProps={stickyContainerStyleProps}
        {...other}
      >
        {children}
      </StyledStickyContainer>
    </Fragment>
  )
}

StickyContainer.propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number,
  isSticky: PropTypes.oneOf(['topOnScrollUp', 'bottomOnScrollDown', 'always']),
}
StickyContainer.defaultProps = {
  top: 0,
  bottom: 0,
}
