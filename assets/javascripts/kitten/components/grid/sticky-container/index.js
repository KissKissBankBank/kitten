import React, { Fragment, useRef, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../helpers/utils/typography'
import ColorsConfig from '../../../constants/colors-config'
import { throttle } from '../../../helpers/utils/throttle'
import { domElementHelper } from '../../../helpers/dom/element-helper'

const StyledStickyContainer = styled.div`
  will-change: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease;

  ${({ stickyContainerStyleProps }) => stickyContainerStyleProps}
`

function useScrollDirection() {
  /*
    https://www.iwakoscott.com/blog/useRef
    return value:
      true => user is scrolling to the bottom of the page.
      false => user is scrolling to the top of the page.
  */

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

const StickyContainer = ({ children, top, bottom, isSticky, ...other }) => {
  const currentStickyContainer = useRef(null)

  const [stuck, setStuckState] = useState(false)
  const [containerHeight, setContainerHeight] = useState(0)
  const [currentlyUnsticking, setCurrentlyUnstickingState] = useState(false)

  const [scrollDirectionDown, scrollDirectionUp] = useScrollDirection()

  const isStickyTopOnScrollUp = () => isSticky === 'topOnScrollUp'

  const isStickyBottomOnScrollDown = () => isSticky === 'bottomOnScrollDown'

  const isStickyAlways = () => isSticky === 'always'

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
    if (isStickyTopOnScrollUp()) {
      let distanceToBorder = top || 0
      return window.pageYOffset > containerHeight + distanceToBorder
    }
    if (isStickyBottomOnScrollDown()) {
      let distanceToBorder = bottom || 0
      return (
        window.pageYOffset + window.innerHeight <
        document.body.clientHeight - (containerHeight + distanceToBorder)
      )
    }
  }

  const shouldStickContainerOnTop = () => {
    return (
      scrollDirectionUp &&
      isStickyTopOnScrollUp() &&
      isOriginalContainerOutOfViewport()
    )
  }

  const shouldStickContainerOnBottom = () => {
    return (
      scrollDirectionDown &&
      isStickyBottomOnScrollDown() &&
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
      (scrollDirectionDown && isStickyTopOnScrollUp()) ||
      (scrollDirectionUp && isStickyBottomOnScrollDown())
    )
  }

  useEffect(() => {
    if (isStickyAlways()) {
      setSticky()
    } else {
      const currentContainerHeight = currentStickyContainer.current
        ? currentStickyContainer.current.clientHeight
        : 0
      setContainerHeight(currentContainerHeight)
    }
  }, []) // se déclenche au montage du composant

  useEffect(() => {
    if (shouldUnstickContainer()) {
      setUnsticky()
    } else if (shouldStickContainer()) {
      setSticky()
    } else if (shouldUnstickContainerWithTransition()) {
      setUnstickyWithTransition()
    }
  }, [scrollDirectionDown, scrollDirectionUp])

  const stickyContainerStyleProps = () => {
    const position = stuck ? 'fixed' : 'static'

    if (isStickyAlways()) {
      return css`
        position: ${position};
        top: ${top};
        bottom: ${bottom};
      `
    }

    const distance = currentlyUnsticking || !stuck ? containerHeight : 0

    const directionToAnimate = isStickyTopOnScrollUp() ? 'top' : 'bottom'

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
      {stuck && <div style={{ height: pxToRem(containerHeight) }} />}
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

export default StickyContainer
