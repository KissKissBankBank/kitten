import React from 'react'
import classNames from 'classnames'
import { TypologyTagIcon } from 'kitten/components/icons/typology-tag-icon'
import { InstrumentTagIcon } from 'kitten/components/icons/instrument-tag-icon'

export class TagList extends React.Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItems() {
    return this.props.tags.items.map(this.renderItem)
  }

  renderItem(element, index) {
    const TagIcon = this.convertToClass(this.props.tags.icon)
    const { key, item } = element
    const isFirstItem = index == 0
    const itemClassName = classNames(
      'k-TagList__item',
      { 'k-TagList__item--first': isFirstItem },
    )

    const children = isFirstItem
      ? [<TagIcon key="tag-icon" className="k-TagList__icon" />, item]
      : item

    return (
      <li key={ key } className={ itemClassName }>
        { children }
      </li>
    )
  }

  convertToClass(stringName) {
    switch (stringName) {
      case 'InstrumentTagIcon':
        return InstrumentTagIcon
      default:
        return TypologyTagIcon
    }
  }

  render() {
    const { className, tiny, tags, ...others } = this.props
    const listClassName = classNames(
      'k-TagList',
      { 'k-TagList--tiny': tiny },
      className,
    )

    return (
      <ul key={ Math.random(1) } className={ listClassName } { ...others }>
        { this.renderItems() }
      </ul>
    )
  }
}

TagList.defaultProps = {
  className: null,
  tiny: false,
  tags: [], // Eg: [{ key: …, item: … }]
}
