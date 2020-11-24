import React from 'react'
import { Text } from '../../../../components/typography/text'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const RewardCardInfo = ({
  label,
  value,
  withMarginBottom,
  disabled,
}) => (
  <Text
    size="micro"
    color="font1"
    weight="regular"
    className={classNames('k-RewardCard__infos', {
      'k-RewardCard__infos--hasBottomMargin': withMarginBottom,
      'k-RewardCard__infos--disabled': disabled,
    })}
  >
    {`${label} `}
    <Text weight="light">{value}</Text>
  </Text>
)

RewardCardInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  withMarginBottom: PropTypes.bool,
  disabled: PropTypes.bool,
}

RewardCardInfo.defaultProps = {
  value: null,
  withMarginBottom: true,
  disabled: false,
}
