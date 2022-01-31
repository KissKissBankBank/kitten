import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Text } from '../../../../typography/text'

export const Title = ({ largeTitle, ...props }) => {
  return (
    <Text
      color="font1"
      weight="bold"
      {...props}
      className={classNames('k-ContributionCard__title', props.className, {
        'k-ContributionCard__title--large': largeTitle,
      })}
    />
  )
}

Title.defaultProps = {
  largeTitle: false,
}

Title.propTypes = {
  largeTitle: PropTypes.bool,
}
