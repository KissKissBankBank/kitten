import React from 'react'
import classNames from 'classnames'

export class TagList extends React.Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(element, index) {
    const TagIcon = this.props.icon

    const { key, item } = element
    const isFirstItem = (index == 0)
    const itemClassName = classNames(
      'k-TagList__item',
      { 'k-TagList__item--first': isFirstItem },
    )

    const children =
      (isFirstItem && [
        <TagIcon
          key={ `tag-icon-${Math.random(1)}` }
          className="k-TagList__icon" />,
        item
      ]) || item

    return (
      <li key={ key } className={ itemClassName }>
        { children }
      </li>
    )
  }

  render() {
    if (!this.props.items) return null

    const { className, tiny, icon, items, ...others } = this.props
    const listClassName = classNames(
      'k-TagList',
      { 'k-TagList--tiny': tiny },
      className,
    )

    return (
      <ul key={ `tag-${Math.random(1)}` } className={ listClassName } { ...others }>
        { items.map(this.renderItem) }
      </ul>
    )
  }
}

TagList.defaultProps = {
  className: null,
  tiny: false,
  items: null,
}
