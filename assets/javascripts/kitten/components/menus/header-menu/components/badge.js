import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden'
import COLORS from '../../../../constants/colors-config'

export const Badge = ({
  children,
  className,
  backgroundColor,
  a11yText,
  ...props
}) => {
  const badgeClassNames = classNames(
    'k-Badge',
    'k-Badge--spaced',
    'k-Badge--no-border',
    className,
  )

  return (
    <span
      {...props}
      className={badgeClassNames}
      aria-hidden="true"
      style={{ backgroundColor }}
    >
      {children}
      <VisuallyHidden>{`${children.toString()} ${a11yText}`}</VisuallyHidden>
    </span>
  )
}

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  a11yText: PropTypes.string,
}

Badge.defaultProps = {
  backgroundColor: COLORS.primary1,
  a11yText: 'Notification(s)',
}
