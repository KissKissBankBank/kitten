import React from 'react'
import classNames from 'classnames'

export class Title extends React.Component {
  render() {
    const { className, modifier, tag, margin, weight, ...other } = this.props

    const titleClassNames = classNames(
      'k-Title',
      className,
      `k-Title--${modifier}`,
      `k-Title--${weight}`,
      {
        'k-Title--withoutMargin': !margin,
      }
    )

    const Tag = tag

    return (
      <Tag className={ titleClassNames } { ...other } />
    )
  }
}

Title.defaultProps = {
  tag: 'h1',
  modifier: 'primary',
  weight: 'bold',
  children: 'Lorem ipsum dolor sit amet…',
  margin: true,
}
