import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../components/buttons/button/button'
import styled, { css } from 'styled-components'
import { checkedCircleIconAsString } from '../../icons/checked-circle-icon'
import { encodeSvgString } from '../../../helpers/utils/encode-svg'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const checkedCircleIconStyle = size => css`
  width: ${pxToRem(size)};
  height: ${pxToRem(size)};
  bottom: -${pxToRem(size / 2 + 1)};
`

const getCircleIcon = color =>
  encodeSvgString(
    checkedCircleIconAsString({
      circleColor: color,
      checkedColor: COLORS.background1,
    }),
  )

const StyledCheckableButton = styled(Button)`
  &::after {
    content: '';
    position: absolute;

    ${({ tiny, big }) => {
      if (tiny === true) return checkedCircleIconStyle(15)
      if (big === true) return checkedCircleIconStyle(24)
      return checkedCircleIconStyle(20)
    }}

    ${({ modifier, disabled }) => {
      let color = COLORS.primary1
      if (modifier === 'copper') {
        color = COLORS.error
      }
      if (disabled) {
        color = COLORS.line2
      }

      return css`
        background-image: url(${getCircleIcon(color)});
      `
    }}
    background-repeat: no-repeat;
    background-position: 50% 50%;

    opacity: 0;
    transform-origin: 50% 50%;
    transition: opacity 0.2s ease,
      transform 0.2s cubic-bezier(0.3, -0.5, 0.8, 1);
    transform: scale(0);
  }

  &[aria-checked='true']::after {
    opacity: 1;
    transform: scale(1);
    transition-timing-function: ease, cubic-bezier(0.2, 2, 0.7, 1);
  }

  ${({ modifier, disabled }) =>
    modifier !== 'copper' &&
    !disabled &&
    css`
      :hover,
      :focus {
        border-color: ${COLORS.primary4};
        background-color: ${COLORS.background1};
        color: ${COLORS.primary1};
      }

      :active {
        border-color: ${COLORS.primary2};
        background-color: ${COLORS.background1};
        color: ${COLORS.primary2};
      }
    `}
`

export const CheckableButton = ({ isChecked, children, error, ...props }) => {
  const checkedModifier = (() => {
    switch (true) {
      case error:
        return 'copper'
      case isChecked:
        return 'lithium'
      default:
        return 'hydrogen'
    }
  })()

  return (
    <StyledCheckableButton
      {...props}
      aria-checked={isChecked}
      modifier={checkedModifier}
    >
      {children}
    </StyledCheckableButton>
  )
}

CheckableButton.propTypes = {
  big: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  isChecked: PropTypes.bool,
  tiny: PropTypes.bool,
}

CheckableButton.defaultProps = {
  big: false,
  disabled: false,
  error: false,
  isChecked: false,
  tiny: false,
}
