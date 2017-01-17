import React from 'react'
import classNames from 'classnames'

export class Paragraph extends React.Component {

  // renderLink() {
  //   if (this.props.link) { retun this.props.href }
  //   return null
  // }

  render() {
    const { className, tag, type, isExternal, ...other } = this.props

    const paragraphClassNames = classNames(
      `k-Paragraph`,
      className,
      `k-Paragraph--${type}`
//      `k-Paragraph--${link}`
    )

    //const target = isExternal ? { target: '_blank' } : {}

    const Tag = tag

    return (
      <Tag className={ paragraphClassNames }
           { ...other } />
    )
  }
}

Paragraph.defaultProps = {
  tag: 'p',
  type: 'primary',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum nunc a sem ornare malesuada. Nulla semper varius neque vitae finibus. Sed ac quam pretium, cursus nisl ac, dignissim ipsum. Pellentesque vehicula…',
  // href: '#',
  // isExternal: false,
}
