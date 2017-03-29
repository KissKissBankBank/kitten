import React from 'react'

export const Marger = ({ top, bottom, style, ...props }) => {
  const gutter = 10
  const styles = {
    ...style,
    marginTop: top ? `${ top * gutter }px` : null,
    marginBottom: bottom ? `${ bottom * gutter }px` : null,
  }

  return (
    <div style={ styles } { ...props } />
  )
}

Marger.defaultProps = {
  top: 0,
  bottom: 0,
}
