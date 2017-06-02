import React from 'react'
import classNames from 'classnames'

export const ResponsiveVideoIframeContainer =
  ({ ratio, styles, className, ...props }) => {
    const componentClassName = classNames(
      'k-ResponsiveVideoIframeContainer',
      className
    )

    const style = {
      paddingBottom: `${ratio}%`,
      ...styles
    }

    return (
      <div className={ componentClassName }
           style={ style }
           { ...props } />
    )
  }

ResponsiveVideoIframeContainer.defaultProps = {
  ratio: '67.5',
  children: <iframe />,
}
