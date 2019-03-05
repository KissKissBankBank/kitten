import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../helpers/utils/typography'
import ColorsConfig from '../../../constants/colors-config'
import { throttle } from '../../../helpers/utils/throttle'
import { domElementHelper } from '../../../helpers/dom/element-helper'

const StyledStickyContainer = styled.div`
  will-change: transform;

  ${({
    stuck,
    containerHeight,
    top,
    bottom,
    unstickingInTransition,
    isSticky,
  }) =>
    !stuck
      ? css`
          position: static;
          ${isSticky === 'topOnScrollUp' &&
            css`
              top: ${pxToRem(top - containerHeight)};
              transition: top 0.2s ease;
            `}
          ${isSticky === 'bottomOnScrollDown' &&
            css`
              bottom: ${pxToRem(bottom - containerHeight)};
              transition: bottom 0.2s ease;
            `}
        `
      : css`
      position: fixed;
      ${isSticky === 'topOnScrollUp' &&
        css`
          top: ${unstickingInTransition
            ? pxToRem(top - containerHeight)
            : pxToRem(top)};
          transition: top 0.2s ease;
        `}
      ${isSticky === 'bottomOnScrollDown' &&
        css`
          bottom: ${unstickingInTransition
            ? pxToRem(bottom - containerHeight)
            : pxToRem(bottom)};
          transition: bottom 0.2s ease;
        `}
      ${isSticky === 'always' &&
        css`
          ${top != 0 &&
            css`
              top: ${top};
            `}
          ${bottom != 0 &&
            css`
              bottom: ${bottom};
            `}
        `}
    `}
`

const StyledEmptyContainer = styled.div`
  height: ${({ containerHeight }) => pxToRem(containerHeight)};
`

export class StickyContainer extends Component {
  static propTypes = {
    isSticky: PropTypes.oneOf([
      'always',
      'topOnScrollUp',
      'bottomOnScrollDown',
      'never',
    ]),
    top: PropTypes.number,
    bottom: PropTypes.number,
  }

  static defaultProps = {
    isSticky: 'always',
    top: 0,
    bottom: 0,
  }

  constructor(props) {
    super(props)

    this.currentStickyContainer = React.createRef()

    this.state = {
      stuck: false,
      prevScrollpos: 0,
      containerHeight: 0,
      unstickingInTransition: false,
    }
  }

  setSticky = () => {
    this.setState({ stuck: true })
  }

  setUnstickyWithTransition = () => {
    this.setState({ unstickingInTransition: true })
    setTimeout(() => {
      this.setState({
        stuck: false,
        unstickingInTransition: false,
      })
    }, 220)
  }

  setUnsticky = () => {
    this.setState({ stuck: false })
  }

  hasScrolledDown = currentScrollPos =>
    this.state.prevScrollpos < currentScrollPos
  hasScrolledUp = currentScrollPos =>
    this.state.prevScrollpos > currentScrollPos

  isOriginalContainerOutOfViewport = () => {
    if (this.props.isSticky === 'topOnScrollUp') {
      return window.pageYOffset > this.state.containerHeight + this.props.top
    }
    if (this.props.isSticky === 'bottomOnScrollDown') {
      return (
        window.pageYOffset + window.innerHeight <
        document.body.clientHeight -
          (this.state.containerHeight + this.props.bottom)
      )
    }
  }

  shouldStickContainerOnTop = hasScrolledUp => {
    return (
      hasScrolledUp &&
      this.props.isSticky === 'topOnScrollUp' &&
      this.isOriginalContainerOutOfViewport()
    )
  }

  shouldStickContainerOnBottom = hasScrolledDown => {
    return (
      hasScrolledDown &&
      this.props.isSticky === 'bottomOnScrollDown' &&
      this.isOriginalContainerOutOfViewport()
    )
  }

  shouldStickContainer = (hasScrolledDown, hasScrolledUp) => {
    return (
      this.shouldStickContainerOnTop(hasScrolledUp) ||
      this.shouldStickContainerOnBottom(hasScrolledDown)
    )
  }

  shouldUnstickContainer = () => {
    return !this.isOriginalContainerOutOfViewport()
  }

  shouldUnstickContainerWithTransition = (hasScrolledDown, hasScrolledUp) => {
    return (
      (hasScrolledDown && this.props.isSticky === 'topOnScrollUp') ||
      (hasScrolledUp && this.props.isSticky === 'bottomOnScrollDown')
    )
  }

  updateStickyState = () => {
    const currentScrollPos = window.pageYOffset

    const hasScrolledDown = this.hasScrolledDown(currentScrollPos)
    const hasScrolledUp = this.hasScrolledUp(currentScrollPos)

    if (this.shouldUnstickContainer()) {
      this.setUnsticky()
    } else if (this.shouldStickContainer(hasScrolledDown, hasScrolledUp)) {
      this.setSticky()
    } else if (
      this.shouldUnstickContainerWithTransition(hasScrolledDown, hasScrolledUp)
    ) {
      this.setUnstickyWithTransition()
    }

    this.setState({ prevScrollpos: currentScrollPos })
  }

  componentDidMount() {
    let containerHeight = this.currentStickyContainer.current
      ? this.currentStickyContainer.current.clientHeight
      : 0
    this.setState({ containerHeight: containerHeight })

    if (domElementHelper.canUseDom()) {
      window.addEventListener('scroll', throttle(this.updateStickyState, 200))
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.updateStickyState, 200))
  }

  render() {
    const { children, top, bottom, isSticky, ...other } = this.props
    const { stuck, containerHeight, unstickingInTransition } = this.state

    return (
      <Fragment>
        {stuck && <StyledEmptyContainer containerHeight={containerHeight} />}
        <StyledStickyContainer
          ref={this.currentStickyContainer}
          top={top}
          bottom={bottom}
          stuck={stuck}
          containerHeight={containerHeight}
          isSticky={isSticky}
          unstickingInTransition={unstickingInTransition}
          {...other}
        >
          {children}
        </StyledStickyContainer>
      </Fragment>
    )
  }
}
