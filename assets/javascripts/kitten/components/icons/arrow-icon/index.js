import React from 'react'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Deprecated } from '../../../helpers/utils/deprecated'
import COLORS from '../../../constants/colors-config'

export const DeprecatedArrowIconSvg = ({
  className,
  direction,
  disabled,
  version,
  ...others
}) => {
  const arrowIconClassNames = classNames(
    'k-ArrowIcon',
    {
      [`k-ArrowIcon--${direction}`]: direction,
      'k-ArrowIcon--disabled': disabled,
    },
    className,
  )

  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      className={arrowIconClassNames}
      viewBox="0 0 6 6"
    >
      <title>Arrow</title>
      <path d="M6 0H0v6h2V2h4z" />
    </svg>
  )
}

DeprecatedArrowIconSvg.propTypes = {
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

DeprecatedArrowIconSvg.defaultProps = {
  direction: 'right',
  disabled: false,
  className: '',
}

export const DeprecatedArrowIcon = props => {
  const warningMessage =
    'The previous version of ArrowIcon does not handle ' +
    'correctly the center of gravity of the arrow. Please use now the prop ' +
    '`version` with the value `solid` to display an arrow with the right ' +
    'center of gravity.'

  return (
    <Deprecated warningMessage={warningMessage}>
      <DeprecatedArrowIconSvg {...props} />
    </Deprecated>
  )
}

DeprecatedArrowIcon.propTypes = {
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

DeprecatedArrowIcon.defaultProps = {
  direction: 'right',
  disabled: false,
  className: '',
}

const SvgArrow = styled(({ direction, disabled, ...props }) => (
  <svg {...props} />
))`
  transform: ${({ direction }) => {
    switch (direction) {
      case 'right':
        return 'rotate(90deg)'
      case 'left':
        return 'rotate(-90deg)'
      case 'bottom':
        return 'rotate(180deg)'
      default:
        return 'none'
    }
  }};

  ${({ disabled }) =>
    disabled &&
    css`
      fill: ${COLORS.background1};
    `}
`

export const ArrowIcon = ({ version, direction, disabled, ...others }) => {
  if (version === 'deprecated-center-of-gravity') {
    return (
      <DeprecatedArrowIcon
        version={version}
        direction={direction}
        disabled={disabled}
        {...others}
      />
    )
  }

  return (
    <SvgArrow
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.48 5.64"
      direction={direction}
      disabled={disabled}
    >
      <path d="M0 4.24 L4.24,0 L8.48,4.24 L7.08,5.64 L4.24,2.77 L1.4,5.6 z" />
    </SvgArrow>
  )
}

ArrowIcon.propTypes = {
  version: PropTypes.oneOf(['solid', 'deprecated-center-of-gravity']),
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

ArrowIcon.defaultProps = {
  version: 'deprecated-center-of-gravity',
  direction: 'right',
  disabled: false,
  className: '',
  width: '8.48',
  height: '5.64',
}
