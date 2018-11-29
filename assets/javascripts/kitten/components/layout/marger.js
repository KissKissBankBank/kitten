import React from 'react'
import TYPOGRAPHY from '../../constants/typography-config'

export const Marger = ({ top, bottom, style, ...props }) => {
  const gutter = 10 / TYPOGRAPHY.root // Transform 10 to .625 for have rem unit.
  const styles = {
    ...style,
    marginTop: top ? `${top * gutter}rem` : null,
    marginBottom: bottom ? `${bottom * gutter}rem` : null,
  }

  return <div style={styles} {...props} />
}

Marger.defaultProps = {
  top: 0,
  bottom: 0,
}
