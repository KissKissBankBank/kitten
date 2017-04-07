import React from 'react'
import classNames from 'classnames'

export class Card extends React.Component {
  render() {
    const { className,
            size,
            outline,
            ...others } = this.props

    const cardClassName = classNames(
      'k-Card',
      className,
      {
        [`k-Card--outline`]: outline,
        [`k-Card--${size}`]: size,
      },
    )

    return (
      <div className={ cardClassName } { ...others } />
    )
  }
}

Card.defaultProps = {
  size: null,
  outline: false,
}
