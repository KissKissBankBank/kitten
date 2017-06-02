import React from 'react'

export const ResponsiveVideoIframeContainer = ({ ratio, ...props }) => {
  return (
    <div className='k-ResponsiveVideoIframeContainer'
         style={ { paddingBottom: `${ratio}%` } }
         { ...props } />
  )
}

ResponsiveVideoIframeContainer.defaultProps = {
  ratio: '67.5',
  children: <iframe />,
}
