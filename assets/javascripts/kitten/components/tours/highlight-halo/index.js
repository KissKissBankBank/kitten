import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const highlightHaloKeyframes = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  /* calculer le pourcentage en secondes absolues :
    animationDuration * pourcentage / 15
  */
  2% {
    transform: scale(1.1);
    opacity: 0.2;
  }
  3% {
    transform: scale(0.8);
  }
  4% {
    transform: scale(1.05);
  }
  5% {
    transform: scale(0.9);
  }
  6% {
    transform: scale(1);
  }

  16.66% {
    transform: scale(.84);
    opacity: 0.2;
  }
  33.33% {
    transform: scale(1);
  }
  50% {
    transform: scale(.84);
  }
  66.66% {
    transform: scale(1);
  }
  83.33% {
    transform: scale(.84);
    opacity: 0.2;
  }

  98.5% {
    transform: scale(1);
    opacity: 0.2;
  }
  100% {
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

    animation: ${highlightHaloKeyframes}
      ${({ animationDuration }) => animationDuration}s ease-in-out 1;
  }

  > div:nth-of-type(1) {
    width: 100%;
    height: 100%;

    animation-delay: 1.15s;
  }
  > div:nth-of-type(2) {
    top: 16.66%;
    left: 16.66%;

    width: 66.66%;
    height: 66.66%;

    animation-delay: 1.075s;
  }
  > div:nth-of-type(3) {
    top: 33.33%;
    left: 33.33%;

    width: 33.33%;
    height: 33.33%;

    animation-delay: 1s;
  }
`

export class HighlightHalo extends Component {
  constructor(props) {
    super(props)
  }

  absoluteDuration(duration) {
    const { animationDuration } = props

    return (duration * animationDuration) / 15
  }

  render() {
    const { haloSize, haloColor, animationDuration, ...other } = this.props

    return (
      <StyledHighlightHalo
        haloSize={haloSize}
        haloColor={haloColor}
        animationDuration={animationDuration}
        {...other}
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
  animationDuration: PropTypes.string,
}

HighlightHalo.defaultProps = {
  haloColor: COLORS.primary1,
  haloSize: 120,
  animationDuration: 10,
}
