import React from 'react'
import classNames from 'classnames'

export class BulletList extends React.Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItems() {
    return this.props.items.map(this.renderItem)
  }

  renderItem(element) {
    const { key, item } = element
    const itemClassName = classNames(
      'k-BulletList__item',
      { 'k-BulletList__item--large': this.props.large },
      { 'k-BulletList__item--big': this.props.big },
      { 'k-BulletList__item--huge': this.props.huge },
    )

    return (
      <li key={key} className={itemClassName}>
        {item}
      </li>
    )
  }

  render() {
    const { className, large, big, huge, items, ...others } = this.props
    const listClassName = classNames('k-BulletList', className)

    return (
      <ul className={listClassName} {...others}>
        {this.renderItems()}
      </ul>
    )
  }
}

BulletList.defaultProps = {
  className: null,
  large: false,
  big: false,
  huge: false,
  items: [], // Eg: [{ key: …, item: … }]
}
