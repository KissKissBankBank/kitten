import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { COLORS } from '../../..'

export const CircleIcon = ({
  color,
  bgColor,
  strokeColor,
  strokeWidth,
  children,
  title,
  className,
  ...props
}) => {
  return (
    <svg
      className={classNames('k-ColorSvg', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
    >
      {title && <title>{title}</title>}
      <circle
        fill={bgColor}
        cx="10"
        cy="10"
        r="10"
        stroke={strokeColor}
        stroke-width={strokeWidth}
      />
      {children}
    </svg>
  )
}

CircleIcon.defaultProps = {
  strokeColor: COLORS.font1,
  strokeWidth: '2px',
  bgColor: COLORS.error1,
  title: '',
}

CircleIcon.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  strokeColor: PropTypes.string,
  children: PropTypes.node.isRequired,
}