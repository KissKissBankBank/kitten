import React from 'react'
import classNames from 'classnames'
import { TagIcon } from 'kitten/components/icons/tag-icon'

export class TagList extends React.Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItems() {
    return this.props.items.map(this.renderItem)
  }

  renderItem(item, index) {
    const isFirstItem = index == 0
    const itemClassName = classNames(
      'k-TagList__item',
      { 'k-TagList__item--first': isFirstItem },
    )

    const children = isFirstItem
      ? [<TagIcon key='tag-icon' className='k-TagList__icon' />, item]
      : item

    return (
      <li key={ index } className={ itemClassName }>
        { children }
      </li>
    )
  }

  render() {
    const { className, items, ...others } = this.props

    return (
      <ul className={ classNames('k-TagList', className) } { ...others }>
        { this.renderItems() }
      </ul>
    )
  }
}

TagList.defaultProps = {
  className: null,
  items: [],
}
