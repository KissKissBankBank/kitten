import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'
import { strokeModifierStylesWithoutMargin } from './common/stroke-modifier-styles'

export const MICRO = css`
  width: ${pxToRem(15)};
  height: ${pxToRem(2)};
`

export const SMALL = css`
  width: ${pxToRem(20)};
  height: ${pxToRem(2)};
`

export const MEDIUM = css`
  width: ${pxToRem(30)};
  height: ${pxToRem(4)};
`

export const LARGE = css`
  width: ${pxToRem(50)};
  height: ${pxToRem(4)};
`

export const HUGE = css`
  width: ${pxToRem(100)};
  height: ${pxToRem(6)};
`

export const StyledHorizontalStroke = styled.div`
  border: none;
  background: ${({ color }) => color || COLORS.font1};

  &.k-HorizontalStroke--size--micro {
    ${MICRO}
  }

  &.k-HorizontalStroke--size--small {
    ${SMALL}
  }

  &.k-HorizontalStroke--size--medium {
    ${MEDIUM}
  }

  &.k-HorizontalStroke--size--large {
    ${LARGE}
  }

  &.k-HorizontalStroke--size--huge {
    ${HUGE}
  }

  ${strokeModifierStylesWithoutMargin('&.k-HorizontalStroke--modifier')}
`

export const HorizontalStroke = ({
  className,
  style,
  size,
  modifier,
  customSize,
  color,
  ...props
}) => {
  const modifierClassName = () => {
    if (!modifier) return `k-HorizontalStroke--size--${size}`

    return `k-HorizontalStroke--modifier--${modifier}`
  }

  const customStyles = () => {
    if (!customSize) return
    return {
      height: customSize && customSize.height,
      width: customSize && customSize.width,
    }
  }

  return (
    <StyledHorizontalStroke
      {...props}
      className={classNames(
        'k-HorizontalStroke',
        className,
        modifierClassName(),
      )}
      style={{ ...customStyles(), ...style }}
      color={color}
    />
  )
}

HorizontalStroke.propTypes = {
  size: PropTypes.oneOf(['micro', 'small', 'medium', 'large', 'huge']),
  modifier: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'quinary',
    'senary',
    'septenary',
  ]),
  customSize: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  color: PropTypes.string,
}

HorizontalStroke.defaultProps = {
  size: 'medium',
  customSize: {
    width: null,
    height: null,
  },
  color: COLORS.font1,
}
