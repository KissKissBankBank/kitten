import React from 'react'
import Radium from 'radium'

const MargerBase = ({ top, bottom, style, ...props }) => {
  const gutter = 10/16 // Transform 10 to .625 for have rem unit.
  const styles = {
    ...style,
    marginTop: top ? `${ top * gutter }rem` : null,
    marginBottom: bottom ? `${ bottom * gutter }rem` : null,
  }

  return (
    <div style={ styles } { ...props } />
  )
}

MargerBase.defaultProps = {
  top: 0,
  bottom: 0,
}

export const Marger = Radium(MargerBase)
