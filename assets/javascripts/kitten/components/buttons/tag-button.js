import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export class TagButton extends Component {
  render() {
    const {
      className,
      tag,
      children,
      modifier,
      selected,
      tiny,
      big,
      icon,
      ...others,
    } = this.props

    const tagButtonClassNames = classNames(
      'k-TagButton',
      className,
      {
        [`k-TagButton--${modifier}`]: modifier,
        'is-selected': selected,
        'k-TagButton--tiny': tiny,
        'k-TagButton--big': big,
        'k-TagButton--icon': icon,
      },
    )

    const Tag = tag

    return (
      <Tag
        className={ tagButtonClassNames }
        { ...others }
      >
        { children }
      </Tag>
    )
  }
}

TagButton.propTypes = {
  modifier: PropTypes.oneOf(['helium', 'carbon']),
}

TagButton.defaultProps = {
  tag: 'button',
  children: 'Tag',
  modifier: 'helium',
  icon: false,
  tiny: false,
  big: false,
  selected: false,
}
