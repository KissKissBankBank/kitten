import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { keyframes } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'

const Circle = ({ color, ...others }) => {
  const size = 5

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size * 2} ${size * 2}`}
      {...others}
    >
      <circle fill={color} cx={size} cy={size} r={size} />
    </svg>
  )
}

const circleSize = pxToRem(5)
const spacing = pxToRem(2)
const easing = 'cubic-bezier(0.2, 0.68, 0.18, 1.08)'
const duration = '1.75s'

const loaderAnimationKeyframes = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  45% {
    transform: scale(.1);
    opacity: .7;
  }

  80% {
    transform: scale(1);
    opacity: 1;
  }
`

export const Loader = styled(({ tag, className, color, ...others }) => {
  const Tag = tag
  const loaderClassName = classNames('k-Loader', className)
  const circle = <Circle className="k-Loader__circle" color={color} />

  return (
    <Tag className={loaderClassName} {...others}>
      {circle}
      {circle}
      {circle}
    </Tag>
  )
})`
  display: flex;
  height: ${circleSize};
  line-height: 1;

  .k-Loader__circle {
    display: inline-block;
    margin-left: ${spacing};
    width: ${circleSize};
    height: ${circleSize};
    border-radius: ${circleSize};

    animation: ${loaderAnimationKeyframes} ${duration} 0s infinite ${easing};
    animation-fill-mode: both;

    &:nth-child(1) {
      animation-delay: calc(-${duration} / 3);
      margin-left: 0;
    }

    &:nth-child(2) {
      animation-delay: calc(-${duration} / 3 / 2);
    }

    &:nth-child(3) {
      animation-delay: 0s;
    }
  }
`

Loader.PropTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
}

Loader.defaultProps = {
  tag: 'div',
  className: null,
  color: null,
}
