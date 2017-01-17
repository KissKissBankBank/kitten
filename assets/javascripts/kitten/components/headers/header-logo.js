import React from 'react'
import classNames from 'classnames'

export class HeaderLogo extends React.Component {
  render() {
    const { className, href, src, alt, width, height, ...other } = this.props
    const linkclassName = classNames('k-Header__logo', className)

    return (
      <a className={ linkclassName } href={ href } { ...other }>
        <img src={ src } alt={ alt } width={ width } height={ height } />
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
}
