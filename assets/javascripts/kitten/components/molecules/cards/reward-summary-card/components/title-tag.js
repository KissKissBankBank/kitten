import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Tag } from '../../../../../components/atoms/tag'
import { DiamondIcon } from '../../../../../components/graphics/icons/diamond-icon'
import { StarIcon } from '../../../../../components/graphics/icons/star-icon'

export const TitleTag = ({ text, icon, className, ...props }) => {
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
      className={classNames('k-RewardSummaryCard__titleTag', className, 'k-u-margin-top-single')}
      {...props}
    >
      {iconDisplay}
      {text}
    </Tag>
  )
}

TitleTag.propTypes = {
  icon: PropTypes.oneOf(['star', 'diamond']),
  text: PropTypes.node,
}
TitleTag.defaultProps = {
  icon: 'star',
  text: null,
}
