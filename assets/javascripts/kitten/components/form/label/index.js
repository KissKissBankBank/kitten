import React, { Component } from 'react'
import classNames from 'classnames'
import domElementHelper from '../../../helpers/dom/element-helper'

export class Label extends Component {
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
    const {
      tag,
      className,
      children,
      focusId,
      size,
      withoutPointerEvents,
      ...other
    } = this.props

    const Tag = tag

    const labelClassName = classNames('k-Label', className, {
      [`k-Label--${size}`]: size,
      'k-Label--withoutPointerEvents': withoutPointerEvents,
    })
    const htmlFor = tag == 'label' && focusId ? focusId : null

    return (
      <Tag
        className={labelClassName}
        htmlFor={htmlFor}
        onClick={this.handleClick}
        {...other}
      >
        {children}
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
  withoutPointerEvents: false,
}
