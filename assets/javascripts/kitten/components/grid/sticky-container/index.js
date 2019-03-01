import React, { Component, Fragment } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../helpers/utils/typography'
import ColorsConfig from '../../../constants/colors-config'
import { throttle } from '../../../helpers/utils/throttle'

const StyledStickyContainer = styled.div`
  will-change: transform;

  ${({
    sticky,
    isStickyOnScroll,
    containerHeight,
    top,
    bottom,
    removeSticky,
  }) =>
    !sticky
      ? css`
          position: static;
          ${isStickyOnScroll &&
            css`
              ${isStickyOnScroll == 'up'
                ? css`
                    top: ${pxToRem(top - containerHeight)};
                    transition: top 0.2s ease;
                  `
                : css`
                    bottom: ${pxToRem(bottom - containerHeight)};
                    transition: bottom 0.2s ease;
                  `}
            `}
        `
      : css`
          position: sticky;

          ${isStickyOnScroll
            ? css`
                ${isStickyOnScroll == 'up'
                  ? css`
                      top: ${removeSticky
                        ? pxToRem(top - containerHeight)
                        : pxToRem(top)};
                      transition: top 0.2s ease;
                    `
                  : css`
                      bottom: ${removeSticky
                        ? pxToRem(bottom - containerHeight)
                        : pxToRem(bottom)};
                      transition: bottom 0.2s ease;
                    `}
              `
            : css`
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

export class StickyContainer extends Component {
  static propTypes = {
    isSticky: PropTypes.bool,
    isStickyOnScroll: PropTypes.oneOf(['up', 'down']),
    top: PropTypes.number,
    bottom: PropTypes.number,
  }

  static defaultProps = {
    isSticky: false,
    top: 0,
    bottom: 0,
  }

  constructor(props) {
    super(props)

    this.currentStickyContainer = React.createRef()

    this.state = {
      sticky: props.isSticky,
      prevScrollpos: window.pageYOffset,
      containerHeight: 0,
      removeSticky: false,
    }
  }

  setSticky = () => {
    this.setState({ sticky: true })
  }

  setUnsticky = () => {
    this.setState({ removeSticky: true })
    setTimeout(() => {
      this.setState({
        sticky: false,
        removeSticky: false,
      })
    }, 220)
  }

  updateStickyState = () => {
    let currentScrollPos = window.pageYOffset
    if (this.state.prevScrollpos > currentScrollPos) {
      if (this.props.isStickyOnScroll == 'up') {
        this.setSticky()
      } else if (this.props.isStickyOnScroll == 'down') {
        this.setUnsticky()
      }
    } else {
      if (this.props.isStickyOnScroll == 'down') {
        this.setSticky()
      } else if (this.props.isStickyOnScroll == 'up') {
        this.setUnsticky()
      }
    }
    this.setState({ prevScrollpos: currentScrollPos })
  }

  componentDidMount() {
    let containerHeight = this.currentStickyContainer.current.clientHeight
    this.setState({ containerHeight: containerHeight })

    if (
      typeof this.props.isStickyOnScroll != 'undefined' &&
      ['up', 'down'].includes(this.props.isStickyOnScroll)
    ) {
      window.onscroll = throttle(this.updateStickyState, 200)
    }
  }

  render() {
    const { children, top, bottom, isStickyOnScroll, ...other } = this.props
    const { sticky, containerHeight, removeSticky } = this.state

    return (
      <StyledStickyContainer
        ref={this.currentStickyContainer}
        top={top}
        bottom={bottom}
        sticky={sticky}
        containerHeight={containerHeight}
        isStickyOnScroll={isStickyOnScroll}
        removeSticky={removeSticky}
        {...other}
      >
        {children}
      </StyledStickyContainer>
    )
  }
}
