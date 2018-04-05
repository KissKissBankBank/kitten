import React from 'react'
import classNames from 'classnames'

export const ResponsiveIframeContainer = ({
  ratio,
  style,
  className,
  ...props
}) => {
  const componentClassName = classNames(
    'k-ResponsiveIframeContainer',
    className,
  )

  const styles = {
    ...style,
    paddingBottom: `${ratio}%`,
  }

  return <div className={componentClassName} style={styles} {...props} />
}

ResponsiveIframeContainer.defaultProps = {
  ratio: '67.5',
  children: <iframe />,
}
