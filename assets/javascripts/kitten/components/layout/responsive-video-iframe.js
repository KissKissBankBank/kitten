import React from 'react'

export const ResponsiveVideoIframe = ({ ratio, ...props }) => {
  return (
    <div className='k-ResponsiveVideoIframe'
         style={ { paddingBottom: `${ratio}%` } }
         { ...props } />
  )
}

ResponsiveVideoIframe.defaultProps = {
  ratio: '67.5',
  children: <iframe />,
}
