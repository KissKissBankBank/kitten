import React from 'react'
import classNames from 'classnames'

export class Title extends React.Component {
  render() {
    const { className, type, tag, ...other } = this.props

    const titleClassNames = classNames(
      'k-Title',
      className,
      `k-Title--${type}`
    )

    const Tag = tag

    return (
      <Tag className={ titleClassNames } { ...other } />
    )
  }
}

Title.defaultProps = {
  tag: 'h1',
  type: 'primary',
  children: 'Felis…',
}
