import React from 'react'

export const StatusIcon = props => (
  <div className="k-StatusIcon"
      { ...props } />
)

export const Status = ({ backgroundColor, borderColor, children, style, ...props }) => {
  const statusStyles = {
    backgroundColor: backgroundColor,
    borderColor: borderColor ? borderColor : backgroundColor
  }

  return (
    <div className="k-Status" { ...props }>
      <StatusIcon style={ statusStyles } />
      <div className="k-StatusText">{ children }</div>
    </div>
  )
}

Status.defaultProps = {
  backgroundColor: '#0d9ddb',
  borderColor: null,
  children: null,
}
