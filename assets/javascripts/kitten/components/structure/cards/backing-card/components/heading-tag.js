import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Tag } from '../../../../information/tag'
import { DiamondIcon } from '../../../../graphics/icons/diamond-icon'
import { StarIconNext } from '../../../../graphics/icons-next/star-icon-next'

export const HeadingTag = ({ text, icon, className, ...props }) => {
  const iconDisplay = (() => {
    switch (icon) {
      case 'diamond':
        return <DiamondIcon width="18" height="20" />
      case 'star':
        return <StarIconNext width="14" height="13" />
      default:
        return null
    }
  })()

  return (
    <Tag
      variant="dark"
      className={classNames('k-BackingCard__headingTag', className)}
      {...props}
    >
      {iconDisplay}
      {text}
    </Tag>
  )
}

HeadingTag.propTypes = {
  icon: PropTypes.oneOf([null, 'star', 'diamond']),
  text: PropTypes.node,
}
HeadingTag.defaultProps = {
  icon: null,
  text: null,
}
