import React from 'react'
import classNames from 'classnames'
import { stringUtils } from 'kitten/helpers/utils/string'

export class SideGrid extends React.Component {
  render() {
    const { className, containerClassName } = this.props
    let { asidePosition, asideSize } = this.props

    asidePosition = stringUtils.upcaseFirst(asidePosition)
    asideSize = stringUtils.upcaseFirst(asideSize)

    const sideGridClassName = classNames(
      'k-SideGrid',
      this.props.className,
      `k-SideGrid--aside${asidePosition}`,
      `k-SideGrid--aside${asideSize}`,
    )

    return (
      <div className={ sideGridClassName }>
        <div className={ classNames('k-SideGrid__container',
                                    this.props.containerClassName) }>
          <div className="k-SideGrid__row">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export class SideGridContent extends React.Component {
  render() {
    return (
      <div className={ classNames('k-SideGrid__content',
                                  this.props.className) }>
        { this.props.children }
      </div>
    )
  }
}

export class SideGridAside extends React.Component {
  render() {
    return (
      <div className={ classNames('k-SideGrid__aside', this.props.className) }>
        <div className={ classNames('k-SideGrid__asideContent',
                                    this.props.contentClassName) }>
          { this.props.children }
        </div>
      </div>
    )
  }
}

SideGrid.defaultProps = {
  className: null,
  containerClassName: null,
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
