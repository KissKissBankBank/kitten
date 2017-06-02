import React from 'react'
import classNames from 'classnames'

export const ResponsiveVideoIframeContainer =
  ({ ratio, className, ...props }) => {
    const componentClassName = classNames(
      'k-ResponsiveVideoIframeContainer',
      className
    )

    return (
      <div className={ componentClassName }
           style={ { paddingBottom: `${ratio}%` } }
           { ...props } />
    )
  }

ResponsiveVideoIframeContainer.defaultProps = {
  ratio: '67.5',
  children: <iframe />,
}
