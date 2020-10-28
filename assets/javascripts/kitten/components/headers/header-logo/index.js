import React from 'react'
import classNames from 'classnames'

export class HeaderLogo extends React.Component {
  render() {
    const {
      className,
      src,
      alt,
      width,
      height,
      lightOnM,
      lightOnXxs,
      ...other
    } = this.props
    const imgProps = { src, alt, width, height }
    const linkClassName = classNames('k-Header__logo', className, {
      'k-Header__logo--lightOnM': lightOnM,
      'k-Header__logo--lightOnXxs': lightOnXxs,
    })

    return (
      <a className={linkClassName} {...other}>
        <img {...imgProps} />
      </a>
    )
  }
}

HeaderLogo.defaultProps = {
  href: '#',
  src: '#',
  alt: null,
  width: null,
  height: null,
  lightOnM: false,
  lightOnXxs: false,
}
