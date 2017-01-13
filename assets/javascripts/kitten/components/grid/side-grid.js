import React from 'react'
import classNames from 'classnames'

export class SideGrid extends React.Component {
  render() {
    const { className,
            containerClassName,
            asidePosition,
            asideSize } = this.props
    const sideGridClassName = classNames(
      'k-SideGrid',
      this.props.className,
      { [`k-SideGrid--aside${asidePosition}`]: asidePosition },
      { [`k-SideGrid--aside${asideSize}`]: asideSize },
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
  asidePosition: 'End', // 'Start' or 'End'
  asideSize: 'Default', // 'Default', 'Small' or 'Large'
}

SideGridContent.defaultProps = {
  className: null,
}

SideGridAside.defaultProps = {
  className: null,
  contentClassName: null,
}
