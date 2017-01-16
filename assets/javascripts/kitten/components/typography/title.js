import React from 'react'
import classNames from 'classnames'

export class Title extends React.Component {
  render() {
    const { className, text, name, tag } = this.props

    let titleClassNames = classNames(
      'k-Title',
      className,
      {
        [`k-Title--${name}`]: name
      },
    )

    const Tag = tag

    return (
      <Tag className={ titleClassNames }>
        { text }
      </Tag>
    )
  }
}

Title.defaultProps = {
  tag: 'h1',
  name: 'primary',
  text: 'Felis ...',
}
