import React from 'react'

export const Marger = ({ top, bottom, ...props }) => {
  const gutter = 10
  const styles = {
    marginTop: `${ top * gutter }px`,
    marginBottom: `${ bottom * gutter }px`,
  }

  return (
    <div style={ styles } { ...props } />
  )
}

Marger.defaultProps = {
  top: 0,
  bottom: 0,
}
