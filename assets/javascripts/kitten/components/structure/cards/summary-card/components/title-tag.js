import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Tag } from '../../../../information/tag'
import { LockIcon } from '../../../../graphics/icons/lock-icon'
import { StarIcon } from '../../../../graphics/icons/star-icon'

export const TitleTag = ({ text, icon, className, ...props }) => {
  const iconDisplay = (() => {
    switch (icon) {
      case 'lock':
        return <LockIcon width="14" height="14" />
      case 'star':
      default:
        return <StarIcon width="14" height="13" />
    }
  })()

  return (
    <Tag
      className={classNames(
        'k-SummaryCard__titleTag',
        className,
        'k-u-margin-top-single',
      )}
      {...props}
    >
      {iconDisplay}
      <span>{text}</span>
    </Tag>
  )
}

TitleTag.propTypes = {
  icon: PropTypes.oneOf(['star', 'lock']),
  text: PropTypes.node,
}
TitleTag.defaultProps = {
  icon: 'star',
  text: null,
}
