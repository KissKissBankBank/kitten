import React from 'react'
import classNames from 'classnames'

export const ResponsiveVideoIframeContainer =
  ({ ratio, style, className, ...props }) => {
    const componentClassName = classNames(
      'k-ResponsiveVideoIframeContainer',
      className
    )

    const styles = {
      paddingBottom: `${ratio}%`,
      ...style
    }

    return (
      <div className={ componentClassName }
           style={ styles }
           { ...props } />
    )
  }

ResponsiveVideoIframeContainer.defaultProps = {
  ratio: '67.5',
  children: <iframe />,
}
