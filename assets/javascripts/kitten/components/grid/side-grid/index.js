import React, { Component } from 'react'
import classNames from 'classnames'
import { stringUtils } from '../../../helpers/utils/string'

export class SideGrid extends Component {
  render() {
    const { className, containerClassName, rowClassName } = this.props
    let { asidePosition, asideSize } = this.props

    asidePosition = stringUtils.upcaseFirst(asidePosition)
    asideSize = stringUtils.upcaseFirst(asideSize)

    const sideGridClassName = classNames(
      'k-SideGrid',
      className,
      `k-SideGrid--aside${asidePosition}`,
      `k-SideGrid--aside${asideSize}`,
    )

    return (
      <div className={sideGridClassName}>
        <div
          className={classNames('k-SideGrid__container', containerClassName)}
        >
          <div className={classNames('k-SideGrid__row', rowClassName)}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export class SideGridContent extends Component {
  render() {
    return (
      <div className={classNames('k-SideGrid__content', this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}

export class SideGridAside extends Component {
  render() {
    return (
      <div className={classNames('k-SideGrid__aside', this.props.className)}>
        <div
          className={classNames(
            'k-SideGrid__asideContent',
            this.props.contentClassName,
          )}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

SideGrid.defaultProps = {
  className: null,
  containerClassName: null,
  rowClassName: null,
  asidePosition: 'end', // 'start' or 'end'
  asideSize: 'default', // 'default', 'small' or 'large'
}

SideGridContent.defaultProps = {
  className: null,
}

SideGridAside.defaultProps = {
  className: null,
  contentClassName: null,
}
