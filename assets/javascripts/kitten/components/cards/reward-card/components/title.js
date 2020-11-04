import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Title } from '../../../../components/typography/title'
import COLORS from '../../../../constants/colors-config'

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
    cssColor={disabled ? COLORS.font2 : COLORS.font1}
    tag={tagName}
    modifier="quinary"
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
  disabled: PropTypes.bool,
}

RewardCardTitle.defaultProps = {
  children: '',
  tagName: 'h6',
  disabled: false,
}
