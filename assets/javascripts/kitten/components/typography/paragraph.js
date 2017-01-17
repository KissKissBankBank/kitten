import React from 'react'
import classNames from 'classnames'

export class Paragraph extends React.Component {
  render() {
    const { className, tag, type, ...other } = this.props

    const paragraphClassNames = classNames(
      'k-Paragraph',
      className,
      `k-Paragraph--${type}`,
    )

    const Tag = tag

    return (
      <Tag className={ paragraphClassNames }
        { ...other } />
    )
  }
}

Paragraph.defaultProps = {
  tag: 'p',
  type: 'primary',
}
