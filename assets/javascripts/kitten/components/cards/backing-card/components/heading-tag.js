import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Tag } from '../../../../components/atoms/tag'
import { DiamondIcon } from '../../../../components/icons/diamond-icon'
import { StarIcon } from '../../../../components/icons/star-icon'

export const HeadingTag = ({ text, icon, className, ...props }) => {
  const iconDisplay = (() => {
    switch (icon) {
      case 'diamond':
        return <DiamondIcon width="18" height="20" />
      case 'star':
      default:
        return <StarIcon width="14" height="13" />
    }
  })()

  return (
    <Tag
      className={classNames(
        'k-BackingCard__headingTag',
        'k-BackingCard__drawer',
        className,
      )}
      {...props}
    >
      {iconDisplay}
      {text}
    </Tag>
  )
}

HeadingTag.propTypes = {
  icon: PropTypes.oneOf(['star', 'diamond']),
  text: PropTypes.node,
}
HeadingTag.defaultProps = {
  icon: 'star',
  text: null,
}
