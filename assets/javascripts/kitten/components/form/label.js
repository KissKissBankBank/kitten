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
    const { tag, className, children, focusId } = this.props
    const Tag = tag

    return (
      <Tag className={ classNames("k-Label", className) }
           htmlFor={ focusId }
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
}
