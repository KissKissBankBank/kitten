import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Deprecated } from '../../../helpers/utils/deprecated'
import COLORS from '../../../constants/colors-config'

export const DeprecatedArrowIconSvg = ({
  className,
  direction,
  disabled,
  version,
  title,
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
      {title && <title>{title}</title>}
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

export const ArrowIcon = ({
  version,
  direction,
  disabled,
  color,
  title,
  ...others
}) => {
  if (version === 'deprecated-center-of-gravity') {
    return (
      <DeprecatedArrowIcon
        version={version}
        direction={direction}
        disabled={disabled}
        title={title}
        {...others}
      />
    )
  }

  const transform = {
    right: 'rotate(90)',
    left: 'rotate(-90)',
    bottom: 'rotate(180)',
    top: false,
  }

  return (
    <svg
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8.48 5.64"
      fill={disabled ? COLORS.background1 : color}
      transform={direction && transform[direction]}
    >
      {title && <title>{title}</title>}
      <path d="M0 4.24 L4.24,0 L8.48,4.24 L7.08,5.64 L4.24,2.77 L1.4,5.6 z" />
    </svg>
  )
}

ArrowIcon.propTypes = {
  version: PropTypes.oneOf(['solid', 'deprecated-center-of-gravity']),
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  title: PropTypes.string,
}

ArrowIcon.defaultProps = {
  version: 'deprecated-center-of-gravity',
  direction: 'right',
  disabled: false,
  className: '',
  width: '8.48',
  height: '5.64',
  color: COLORS.font1,
  title: '',
}
