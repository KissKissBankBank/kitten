import React from 'react'
import classNames from 'classnames'
import { HeaderItem } from 'kitten/components/headers/header'

export class HeaderTitles extends React.Component {
  renderSubtitle() {
    if (!this.props.subtitle)
      return

    return (
      <p className="k-Header__subtitle">{ this.props.subtitle }</p>
    )
  }

  render() {
    const { title, subtitle, className, ...other } = this.props

    return (
      <HeaderItem { ...other }
                  className={ classNames('k-Header__titles', className) }>
        <p className="k-Header__title">{ title }</p>
        { this.renderSubtitle() }
      </HeaderItem>
    )
  }
}

HeaderTitles.defaultProps = {
  title: 'You forgot the title!',
  subtitle: null,
}
