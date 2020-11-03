import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Title } from '../../../../components/typography/title'

export const RewardCardTitle = ({
  children,
  tagName,
  disabled,
  className,
  ...props
}) => (
  <Title
    {...props}
    italic
    tag={tagName}
    modifier="senary"
    className={classNames('k-RewardCard__title', className, 
      {'k-RewardCard__title--disabled': disabled},
      'k-u-color-font1',
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
  disabled: PropTypes.bool,
}

RewardCardTitle.defaultProps = {
  children: '',
  tagName: 'h6',
  disabled: false,
}
