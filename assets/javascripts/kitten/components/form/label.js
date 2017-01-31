import React from 'react'
import classNames from 'classnames'
import domElementHelper from 'kitten/helpers/dom/element-helper'

export class Label extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    if (domElementHelper.canUseDom() && this.props.focusId) {
      e.preventDefault()

      document.getElementById(this.props.focusId).focus()
    }
  }

  render() {
    const { tag, className, children, focusId, size } = this.props
    const Tag = tag
    const labelClassName = classNames(
      "k-Label",
      className,
      { [`k-Label--${size}`]: size },
    )

    return (
      <Tag className={ labelClassName }
           htmlFor={ tag == 'label' ? focusId : null }
           onClick={ this.handleClick }>
        { children }
      </Tag>
    )
  }
}

Label.defaultProps = {
  tag: 'label',
  className: null,
  children: 'Label',
  focusId: null,
  size: null, // `tiny`
}
