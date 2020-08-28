import React from 'react'
import classNames from 'classnames'
import { HeaderItem } from '../../../components/headers/header'

export class HeaderTitles extends React.Component {
  renderSubtitle() {
    if (!this.props.subtitle) return

    return (
      <p
        className={classNames(
          'k-Header__subtitle',
          this.props.subtitleClassName,
        )}
      >
        {this.props.subtitle}
      </p>
    )
  }

  render() {
    const {
      title,
      subtitle,
      className,
      titleClassName,
      subtitleClassName,
      ...headerItemProps
    } = this.props

    return (
      <HeaderItem
        className={classNames('k-Header__titles', className)}
        {...headerItemProps}
      >
        <p className={classNames('k-Header__title', titleClassName)}>{title}</p>
        {this.renderSubtitle()}
      </HeaderItem>
    )
  }
}

HeaderTitles.defaultProps = {
  title: 'You forgot the title!',
  subtitle: null,
  className: null,
  titleClassName: null,
  subtitleClassName: null,
}
