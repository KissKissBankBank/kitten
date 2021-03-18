import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const BULLET_SIZE = 5

const StyledLoader = styled.div`
  display: flex;
  height: ${pxToRem(BULLET_SIZE)};
  line-height: 1;

  .k-Loader__circle {
    width: ${pxToRem(BULLET_SIZE)};
    height: ${pxToRem(BULLET_SIZE)};
    border-radius: ${pxToRem(BULLET_SIZE)};

    animation: k-Loader-animation-scale 1.75s 0s infinite
      cubic-bezier(0.2, 0.68, 0.18, 1.08);
    animation-fill-mode: both;

    &:nth-child(1) {
      animation-delay: calc(-1.75s / 3);
    }

    &:nth-child(2) {
      animation-delay: calc(-1.75s / 3 / 2);
    }

    &:nth-child(3) {
      animation-delay: 0s;
    }

    &:not(:last-child) {
      margin-right: ${pxToRem(2)};
    }
  }

  @keyframes k-Loader-animation-scale {
    0% {
      transform: scale(1);
    }

    45% {
      transform: scale(0.1);
      fill: transparent;
    }

    80% {
      transform: scale(1);
    }
  }
`

const Circle = ({ color, ...others }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${BULLET_SIZE} ${BULLET_SIZE}`}
    fill={color}
    {...others}
  >
    <circle cx={BULLET_SIZE / 2} cy={BULLET_SIZE / 2} r={BULLET_SIZE} />
  </svg>
)

export const Loader = ({ tag, className, color, ...others }) => {
  return (
    <StyledLoader
      as={tag}
      className={classNames('k-Loader', className)}
      {...others}
    >
      <Circle className="k-Loader__circle" color={color} />
      <Circle className="k-Loader__circle" color={color} />
      <Circle className="k-Loader__circle" color={color} />
    </StyledLoader>
  )
}

Loader.defaultProps = {
  tag: 'div',
  color: COLORS.font1,
}

Loader.propTypes = {
  tag: PropTypes.string,
  color: PropTypes.string,
}
