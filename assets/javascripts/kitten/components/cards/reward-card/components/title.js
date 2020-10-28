import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { TitleWithStroke } from '../../../../components/typography/title-with-stroke'

export const RewardCardTitle = ({
  children,
  tagName,
  disabled,
  className,
  ...props
}) => (
  <TitleWithStroke
    {...props}
    italic
    margin={false}
    tag={tagName}
    modifier="senary"
    className={classNames('k-RewardCard__title', className, 
      {'k-RewardCard__title--disabled': disabled},
      'k-u-color-font1',
    )}
  >
    {children}
  </TitleWithStroke>
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
