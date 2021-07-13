import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const QuickAccessLink = ({
  text,
  href,
  zIndex,
  style,
  className,
  ...props
}) => (
  <a
    {...props}
    href={href}
    className={classNames('k-HeaderNav__QuickAccessLink', className)}
    style={{
      ...style,
      '--HeaderNav_quickAccessLink_zIndex': zIndex,
    }}
  >
    {text}
  </a>
)

QuickAccessLink.propTypes = {
  text: PropTypes.node,
  href: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

QuickAccessLink.defaultProps = {
  text: 'Aller au contenu',
  href: '#main',
  zIndex: 2,
}
