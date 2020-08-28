import React from 'react'
import classNames from 'classnames'
import { TypologyTagIcon } from '../../../components/icons/typology-tag-icon'

export class TagList extends React.Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem(element, index) {
    const TagIcon = this.props.icon

    const { key, item } = element
    const isFirstItem = index == 0
    const isLastItem = index == this.props.items.length - 1

    const itemClassName = classNames(
      'k-TagList__item',
      { 'k-TagList__item--first': isFirstItem },
      { 'k-TagList__item--last': isLastItem },
    )

    const icon = isFirstItem && <TagIcon className="k-TagList__icon" />

    return (
      <li key={key} className={itemClassName}>
        {icon}
        {item}
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
      <ul className={listClassName} {...others}>
        {items.map(this.renderItem)}
      </ul>
    )
  }
}

TagList.defaultProps = {
  icon: TypologyTagIcon,
  className: null,
  tiny: false,
  items: null,
}
