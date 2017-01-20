import React from 'react'
import classNames from 'classnames'

export class ButtonTag extends React.Component {
  render() {
    const { className,
            tag,
            modifier,
            children,
            isSelected,
            ...others } = this.props

    const buttonTagClassNames = classNames(
      'k-ButtonTag',
      className,
      `k-ButtonTag--${modifier}`,
      { 'is-selected': isSelected },
    )

    const Tag = tag

    return (
      <Tag className={ buttonTagClassNames } { ...others }>
        { children }
      </Tag>
    )
  }
}

ButtonTag.defaultProps = {
  tag: 'button',
  modifier: 'hydrogen',
  children: 'Tag',
  isSelected: false,
}
