import React from 'react'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import PropTypes from 'prop-types'

const Container = styled.div`
  position: relative;
  padding: ${pxToRem(20)};
  background-color: ${({ color }) => color};
`

const Arrow = styled.span`
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border: ${({ size }) => pxToRem(size)} solid transparent;

  ${({ position, size, distance, color, centered }) => {
    const distanceValue = centered
      ? `calc(50% - ${pxToRem(size)})`
      : pxToRem(distance)

    if (position === 'top') {
      return css`
        top: -${pxToRem(size * 2)};
        left: ${distanceValue};
        border-bottom-color: ${color};
      `
    }

    if (position === 'bottom') {
      return css`
        bottom: -${pxToRem(size * 2)};
        left: ${distanceValue};
        border-top-color: ${color};
      `
    }

    if (position === 'right') {
      return css`
        right: -${pxToRem(size * 2)};
        top: ${distanceValue};
        border-left-color: ${color};
      `
    }

    return css`
      top: ${distanceValue};
      left: -${pxToRem(size * 2)};
      border-right-color: ${color};
    `
  }}
`

export const ArrowContainer = ({
  children,
  color,
  size,
  distance,
  position,
  centered,
  ...props
}) => (
  <Container color={color} {...props}>
    {children}
    <Arrow
      color={color}
      size={size}
      distance={distance}
      position={position}
      centered={centered}
    />
  </Container>
)

ArrowContainer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  position: PropTypes.string,
  distance: PropTypes.number,
  centered: PropTypes.bool,
}

ArrowContainer.defaultProps = {
  color: COLORS.background3,
  size: 10,
  position: 'left',
  distance: 20,
  centered: false,
}
