import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Text } from '../../../../components/typography/text'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import COLORS from '../../../../constants/colors-config'

export const RewardCardTitle = ({
  children,
  tagName,
  disabled,
  className,
  ...props
}) => (
  <>
    <Text
      {...props}
      fontStyle="italic"
      weight="bold"
      tag={tagName}
      color="font1"
      className={classNames('k-RewardCard__title', className, {
        'k-RewardCard__title--disabled': disabled,
      })}
    >
      {children}
    </Text>
    <HorizontalStroke
      size="default"
      className="k-u-margin-bottom-triple"
      color={disabled ? COLORS.font2 : null}
    />
  </>
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
