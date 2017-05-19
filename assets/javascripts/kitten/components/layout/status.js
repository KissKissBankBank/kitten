import React from 'react'

export const StatusIcon = () => (
  <div className="k-StatusIcon" />
)

export const Status = ({ backgroundColor, borderColor, children, style, ...props }) => {
  const styles = {
    ...style,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
  }

  return (
    <div className="k-Status">
      <StatusIcon style= { styles } { ...props } />
      <div className="k-StatusText">{ children }</div>
    </div>
  )
}

Status.defaultProps = {
  backgroundColor: '#0d9ddb',
  borderColor: '#68ffa0',
  children: 'Démarré',
}
