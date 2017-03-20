import React from 'react'
import classNames from 'classnames'

export class IconBadge extends React.Component {
  render() {
    const { className, children, ...others } = this.props
    const iconBadgeClassName = classNames(
      'k-IconBadge',
      className,
    )

    return (
      <span className={ iconBadgeClassName } { ...others }>
        <span className='k-IconBadge__content'>
          { children }
        </span>
      </span>
    )
  }
}

IconBadge.defaultProps = {
  className: null,
}
