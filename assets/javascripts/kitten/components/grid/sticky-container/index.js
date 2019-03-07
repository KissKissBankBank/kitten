import React, { Component, Fragment } from 'react'
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

const isStickyTopOnScrollUp = isSticky => isSticky === 'topOnScrollUp'

const isStickyBottomOnScrollDown = isSticky => isSticky === 'bottomOnScrollDown'

const isStickyAlways = isSticky => isSticky === 'always'

const getStickyStyleProps = ({
  stuck,
  containerHeight,
  top,
  bottom,
  unstickingInTransition,
  isSticky,
}) => {
  const position = stuck ? 'fixed' : 'static'

  if (isStickyAlways(isSticky)) {
    return css`
      position: ${position};
      top: ${top};
      bottom: ${bottom};
    `
  }

  const distance = unstickingInTransition || !stuck ? containerHeight : 0

  const direction = isStickyTopOnScrollUp(isSticky) ? 'top' : 'bottom'

  const basis = direction === 'top' ? top : bottom
  const directionDistance = pxToRem(basis - distance)

  return css`
    position: ${position};
    ${direction}: ${directionDistance};
    transition-property: ${direction};
  `
}

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
    top: null,
    bottom: null,
  }

  constructor(props) {
    super(props)

    this.currentStickyContainer = React.createRef()

    this.state = {
      stuck: false,
      prevScrollPos: 0,
      containerHeight: 0,
      unstickingInTransition: false,
    }
  }

  setSticky = () => {
    this.setState({ stuck: true })
  }

  setUnstickyWithTransition = () => {
    this.setState({ unstickingInTransition: true }, () => {
      setTimeout(() => {
        this.setState({
          stuck: false,
          unstickingInTransition: false,
        })
      }, 220)
    })
  }

  setUnsticky = () => {
    this.setState({ stuck: false })
  }

  hasScrolledDown = currentScrollPos =>
    this.state.prevScrollPos < currentScrollPos
  hasScrolledUp = currentScrollPos =>
    this.state.prevScrollPos > currentScrollPos

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

    this.setState({ prevScrollPos: currentScrollPos })
  }

  componentDidMount() {
    isStickyAlways(this.props.isSticky) && this.setSticky()

    const containerHeight = this.currentStickyContainer.current
      ? this.currentStickyContainer.current.clientHeight
      : 0
    this.setState({ containerHeight })

    if (domElementHelper.canUseDom() && !isStickyAlways(this.props.isSticky)) {
      window.addEventListener('scroll', throttle(this.updateStickyState, 200))
    }
  }

  componentWillUnmount() {
    if (domElementHelper.canUseDom() && !isStickyAlways(this.props.isSticky)) {
      window.removeEventListener(
        'scroll',
        throttle(this.updateStickyState, 200),
      )
    }
  }

  render() {
    const { children, top, bottom, isSticky, ...other } = this.props
    const { stuck, containerHeight, unstickingInTransition } = this.state

    const stickyContainerStyleProps = getStickyStyleProps({
      stuck,
      containerHeight,
      top,
      bottom,
      unstickingInTransition,
      isSticky,
    })

    return (
      <Fragment>
        {stuck && <div style={{ height: pxToRem(containerHeight) }} />}
        <StyledStickyContainer
          ref={this.currentStickyContainer}
          stickyContainerStyleProps={stickyContainerStyleProps}
          {...other}
        >
          {children}
        </StyledStickyContainer>
      </Fragment>
    )
  }
}
