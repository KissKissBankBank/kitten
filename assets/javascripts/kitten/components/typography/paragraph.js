import React from 'react'
import classNames from 'classnames'

export class Paragraph extends React.Component {

  renderLink() {
    if (this.props.link) { return this.props.href }
    return null
  }

  render() {
    const { className, tag, type, link, isExternal, href, ...other } = this.props

    const paragraphClassNames = classNames(
      'k-Paragraph',
      className,
      [`k-Paragraph--${type}`]: type,
      [`k-Paragraph__${link}`]: link,
    )

    const target = isExternal ? { target: '_blank' } : {}

    const Tag = tag

    return (
      <Tag className={ paragraphClassNames }
        { this.renderLink() }
        { ...other } />
        }
    )
  }
}

Paragraph.defaultProps = {
  tag: 'p',
  type: 'primary',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum nunc a sem ornare malesuada. Nulla semper varius neque vitae finibus. Sed ac quam pretium, cursus nisl ac, dignissim ipsum. Pellentesque vehicula…',
  href: '#',
  isExternal: false,
}
