import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Title } from '../../../../components/typography/title'

export const RewardCardTitle = ({
  children,
  tagName,
  className,
  ...props
}) => (
  <Title
    {...props}
    italic
    color="font1"
    tag={tagName}
    modifier="senary"
    className={classNames('k-RewardCard__title', className,
      'k-u-margin-bottom-double',
      'k-u-margin-top-none',
    )}
  >
    {children}
  </Title>
)

RewardCardTitle.propTypes = {
  children: PropTypes.string,
  tagName: PropTypes.string,
}

RewardCardTitle.defaultProps = {
  children: '',
  tagName: 'h6',
}
