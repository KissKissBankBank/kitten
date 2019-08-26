import React, { Component, Fragment, useRef, useEffect } from 'react'
import { Badge } from '../../../components/notifications/badge'
import classNames from 'classnames'
import Markdown from 'react-markdown'

export const HorizontalNav = ({
  center,
  className,
  elementClassName,
  height,
  id,
  items,
  markdown,
  ...others
}) => {
  const selectedItem = useRef(null)
  const defaultItem = useRef(null)

  useEffect(() => {
    center &&
      selectedItem.current &&
      selectedItem.current.scrollIntoView({
        inline: 'center',
        behavior: 'smooth',
      })
  }, [])

  const navClassNames = classNames('k-HorizontalNav', className, {
    'k-HorizontalNav--center': center,
  })

  const renderItems = () => {
    return items.map(item => renderItem(item))
  }

  const renderItem = ({
    className,
    selected,
    text,
    badge,
    key,
    href,
    ...others
  }) => {
    const itemClassName = classNames('k-HorizontalNav__item', className, {
      'is-selected': selected,
    })

    const renderBadge = (
      <Fragment>
        {text}
        <Badge className="k-HorizontalNav__badge">{badge}</Badge>
      </Fragment>
    )

    const renderMarkdown = markdown ? (
      <Markdown softBreak="br" source={text} />
    ) : (
      text
    )

    const renderText = badge ? renderBadge : renderMarkdown

    return (
      <li
        className={classNames('k-HorizontalNav__element', elementClassName)}
        key={key}
        ref={selected ? selectedItem : defaultItem}
        role="menuitem"
        {...others}
      >
        <a href={href} className={itemClassName} style={{ height }}>
          {renderText}
        </a>
      </li>
    )
  }

  return (
    <ul role="menubar" id={id} className={navClassNames}>
      {renderItems()}
    </ul>
  )
}

HorizontalNav.defaultProps = {
  id: null,
  className: null,
  height: 'auto',
  center: false,
  elementClassName: null,
  items: [], // Eg: [{ key: …, text: …, href: …, selected: …, badge: … }]
  markdown: true,
}
