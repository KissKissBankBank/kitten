import React, { Component, Fragment } from 'react'
import styled, { css, keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const bubbleAnimationKeyframes = props =>
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
const breathingAnimationKeyframes = props =>
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
const endingAnimationKeyframes = props =>
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
    width: 100%;
    height: 100%;

    animation-delay: ${({ animationDelay }) => animationDelay + 0.2}s,
      ${({ animationDelay }) => animationDelay + 0.2 + 0.5}s,
      ${({ animationDelay, getAnimationDelay }) =>
        animationDelay + 0.2 + 0.5 + getAnimationDelay}s;
  }
  > div:nth-of-type(2) {
    top: 16.66%;
    left: 16.66%;

    width: 66.66%;
    height: 66.66%;

    animation-delay: ${({ animationDelay }) => animationDelay + 0.1}s,
      ${({ animationDelay }) => animationDelay + 0.1 + 0.5}s,
      ${({ animationDelay, getAnimationDelay }) =>
        animationDelay + 0.1 + 0.5 + getAnimationDelay}s;
  }
  > div:nth-of-type(3) {
    top: 33.33%;
    left: 33.33%;

    width: 33.33%;
    height: 33.33%;

    animation-delay: ${({ animationDelay }) => animationDelay}s,
      ${({ animationDelay }) => animationDelay + 0.5}s,
      ${({ animationDelay, getAnimationDelay }) =>
        animationDelay + 0.5 + getAnimationDelay}s;
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
    if (
      typeof this.props.animationCycles == 'number' &&
      this.props.animationCycles >= 0
    ) {
      return this.props.animationCycles * this.props.animationCycleDuration
    } else {
      return 0
    }
  }

  render() {
    return (
      <StyledHighlightHalo
        highlightHaloAnimation={this.highlightHaloAnimation()}
        getAnimationDelay={this.getAnimationDelay()}
        {...this.props}
      >
        <div />
        <div />
        <div />
      </StyledHighlightHalo>
    )
  }
}

HighlightHalo.propTypes = {
  haloColor: PropTypes.string,
  haloSize: PropTypes.number,
  animationCycles: PropTypes.oneOfType([
    PropTypes.string, // any string arg will cause no shutdown
    PropTypes.number, // number of 'breathing' cycles before shutting down
  ]),
  animationCycleDuration: PropTypes.number,
  animationDelay: PropTypes.number,
}

HighlightHalo.defaultProps = {
  haloColor: COLORS.primary1,
  haloSize: 120,
  animationCycles: 3,
  animationCycleDuration: 4,
  animationDelay: 0,
}
