import React from 'react'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import PropTypes from 'prop-types'

const Container = styled.div`
  position: relative;
  padding: ${({ padding }) => pxToRem(padding)};
  background-color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => pxToRem(borderRadius)};
  box-sizing: border-box;
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0 ${pxToRem(10)} ${pxToRem(20)} 0 rgba(0, 0, 0, 0.2);
    `}
  border:
    ${({ borderWidth }) => borderWidth}px
    solid
    ${({ borderColor }) => borderColor};
  z-index: 1;
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

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    z-index: -1;

    ${({ position, size, borderColor, borderWidth }) => {
      if (borderWidth > 0) {
        const rawDistanceValue = Math.sqrt(Math.pow(borderWidth, 2) * 2)
        const distanceValue =
          borderWidth % 2 === 0
            ? Math.floor(rawDistanceValue)
            : Math.ceil(rawDistanceValue)

        const borderSize = distanceValue + size

        if (position === 'top') {
          return css`
            top: -${pxToRem(size + distanceValue)};
            left: -${pxToRem(borderSize)};
            border: ${pxToRem(borderSize)} solid transparent;
            border-bottom-color: ${borderColor};
          `
        }

        if (position === 'bottom') {
          return css`
            bottom: -${pxToRem(size + distanceValue)};
            left: -${pxToRem(borderSize)};
            border: ${pxToRem(borderSize)} solid transparent;
            border-top-color: ${borderColor};
          `
        }

        if (position === 'right') {
          return css`
            right: -${pxToRem(size + distanceValue)};
            top: -${pxToRem(borderSize)};
            border: ${pxToRem(borderSize)} solid transparent;
            border-left-color: ${borderColor};
          `
        }

        return css`
          top: -${pxToRem(borderSize)};
          left: -${pxToRem(distanceValue + borderSize)};

          border: ${pxToRem(borderSize)} solid transparent;
          border-right-color: ${borderColor};
        `
      }
    }}
  }
`

export const ArrowContainer = ({
  children,
  color,
  size,
  distance,
  position,
  centered,
  padding,
  shadow,
  borderRadius,
  borderColor,
  borderWidth,
  ...props
}) => (
  <Container
    color={color}
    padding={padding}
    shadow={shadow}
    borderRadius={borderRadius}
    borderColor={borderColor}
    borderWidth={borderWidth}
    {...props}
  >
    {children}
    <Arrow
      color={color}
      size={size}
      distance={distance}
      position={position}
      centered={centered}
      borderColor={borderColor}
      borderWidth={borderWidth}
    />
  </Container>
)

ArrowContainer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  position: PropTypes.string,
  distance: PropTypes.number,
  centered: PropTypes.bool,
  padding: PropTypes.number,
  shadow: PropTypes.bool,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
}

ArrowContainer.defaultProps = {
  color: COLORS.background3,
  size: 10,
  position: 'left',
  distance: 20,
  padding: 20,
  centered: false,
  shadow: false,
  borderRadius: 0,
  borderColor: COLORS.line1,
  borderWidth: 0,
}
