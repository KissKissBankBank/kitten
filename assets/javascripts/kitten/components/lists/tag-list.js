import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import { TypologyTagIcon } from 'kitten/components/icons/typology-tag-icon'
import { InstrumentTagIcon } from 'kitten/components/icons/instrument-tag-icon'

export class TagList extends React.Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  renderItems(props) {
    return props.map(this.renderItem)
  }

  renderItem(element, index) {
    const TagIcon = this.convertToClass((this.props.tags || {}).icon)

    const { key, item } = element
    const isFirstItem = index == 0
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

  convertToClass(stringName) {
    switch (stringName) {
      case 'InstrumentTagIcon':
        return InstrumentTagIcon
      default:
        return TypologyTagIcon
    }
  }

  render() {
    if (!this.props.tags && !this.props.items) return
    const { className, tiny, tags, items, ...others } = this.props
    const propsToRender = tags ? tags.items : items
    const listClassName = classNames(
      'k-TagList',
      { 'k-TagList--tiny': tiny },
      className,
    )

    return (
      <ul key={ `tag-${Math.random(1)}` } className={ listClassName } { ...others }>
        { this.renderItems(propsToRender) }
      </ul>
    )
  }
}

TagList.defaultProps = {
  className: null,
  tiny: false,
  tags: null, // Eg: [{ icon: 'TypologyIconTag', items: {key: …, item: … }}]
}

TagList.propTypes = {
  items: deprecated(PropTypes.array, 'Use `tags` prop instead')
}
