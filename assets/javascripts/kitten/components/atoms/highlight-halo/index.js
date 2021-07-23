import React, { Component } from 'react'
import styled, { css, keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const bubbleAnimationKeyframes = () =>
  keyframes`
    0% {
      transform: scale(0);
      opacity: 0;
    }
    33.33% {
      transform: scale(1.1);
      opacity: 0.2;
    }
    50% {
      transform: scale(0.8);
    }
    66.66% {
      transform: scale(1.05);
    }
    83.33% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
      opacity: 0.2;
    }
`

const breathingAnimationKeyframes = () =>
  keyframes`
    0% {
      transform: scale(1);
      opacity: 0.2;
    }
    50% {
      transform: scale(.84);
    }
    100% {
      transform: scale(1);
      opacity: 0.2;
    }
`

const endingAnimationKeyframes = () =>
  keyframes`
    from {
      transform: scale(1);
      opacity: 0.2;
    }
    to {
      transform: scale(0);
      opacity: 0;
    }
`

const StyledHighlightHalo = styled.div`
  position: relative;

  height: ${({ haloSize }) => pxToRem(haloSize)};
  width: ${({ haloSize }) => pxToRem(haloSize)};

  transform: translate(-50%, -50%);

  > div {
    position: absolute;
    left: 0;
    top: 0;

    opacity: 0;
    border-radius: 50%;
    background-color: ${({ haloColor }) => haloColor};

    transform: scale(0);

    ${({ highlightHaloAnimation }) => highlightHaloAnimation};
  }

  > div:nth-of-type(1) {
    top: 33.33%;
    left: 33.33%;

    width: 33.33%;
    height: 33.33%;

    ${({ animationDelay, getAnimationDelay }) => css`
      animation-delay: ${animationDelay}s, ${animationDelay + 0.5}s,
        ${animationDelay + 0.5 + getAnimationDelay}s;
    `}
  }

  > div:nth-of-type(2) {
    top: 16.66%;
    left: 16.66%;

    width: 66.66%;
    height: 66.66%;

    ${({ animationDelay, getAnimationDelay }) => css`
      animation-delay: ${animationDelay + 0.1}s, ${animationDelay + 0.1 + 0.5}s,
        ${animationDelay + 0.1 + 0.5 + getAnimationDelay}s;
    `}
  }
  > div:nth-of-type(3) {
    width: 100%;
    height: 100%;

    ${({ animationDelay, getAnimationDelay }) => css`
      animation-delay: ${animationDelay + 0.2}s, ${animationDelay + 0.2 + 0.5}s,
        ${animationDelay + 0.2 + 0.5 + getAnimationDelay}s;
    `}
  }
`

export class HighlightHalo extends Component {
  highlightHaloAnimation = () => {
    var animationEasing = 'ease-in-out'

    if (
      typeof this.props.animationCycles === 'number' &&
      this.props.animationCycles >= 0
    ) {
      return css`
        animation-name: ${bubbleAnimationKeyframes},
          ${breathingAnimationKeyframes}, ${endingAnimationKeyframes};
        animation-duration: 0.5s, ${this.props.animationCycleDuration}s, 0.1s;
        animation-timing-function: ${animationEasing}, ${animationEasing},
          ${animationEasing};
        animation-iteration-count: 1, ${this.props.animationCycles}, 1;
      `
    }

    return css`
      animation-name: ${bubbleAnimationKeyframes},
        ${breathingAnimationKeyframes};
      animation-duration: 0.5s, ${this.props.animationCycleDuration}s;
      animation-timing-function: ${animationEasing}, ${animationEasing};
      animation-iteration-count: 1, infinite;
    `
  }

  getAnimationDelay = () => {
    const animationCycles = parseInt(this.props.animationCycles, 10)

    if (animationCycles >= 0) {
      return animationCycles * this.props.animationCycleDuration
    }

    return 0
  }

  handleAnimationEnd = event => {
    const animationName = event.animationName
    const lastAnimationName = endingAnimationKeyframes().getName()

    event.persist()

    if (
      animationName !== lastAnimationName ||
      this.lastAnimatedDiv != event.target
    )
      return

    this.props.onHaloAnimationEnd()
  }

  render() {
    const { onHaloAnimationEnd, ...other } = this.props
    return (
      <StyledHighlightHalo
        highlightHaloAnimation={this.highlightHaloAnimation()}
        getAnimationDelay={this.getAnimationDelay()}
        {...other}
        onAnimationEnd={this.handleAnimationEnd}
      >
        <div />
        <div />
        <div ref={ref => (this.lastAnimatedDiv = ref)} />
      </StyledHighlightHalo>
    )
  }
}

HighlightHalo.propTypes = {
  haloColor: PropTypes.string,
  haloSize: PropTypes.number,
  animationCycles: PropTypes.oneOfType([
    PropTypes.oneOf(['infinite']), // `infinite` will cause no shutdown
    PropTypes.number, // number of 'breathing' cycles before shutting down
  ]),
  animationCycleDuration: PropTypes.number, // time in seconds
  animationDelay: PropTypes.number, // time in seconds
  onHaloAnimationEnd: PropTypes.func,
}

HighlightHalo.defaultProps = {
  haloColor: COLORS.primary1,
  haloSize: 120,
  animationCycles: 3,
  animationCycleDuration: 4,
  animationDelay: 0,
  onHaloAnimationEnd: () => {},
}
