import React from 'react'
import { Text } from '../../../../components/typography/text'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const RewardCardInfo = ({
  label,
  value,
  withMarginBottom,
}) => (
  <Text
    size="tiny"
    color="font1"
    weight="regular"
    className={classNames('k-RewardCard__infos', {
      'k-RewardCard__infos--hasBottomMargin': withMarginBottom,
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
}

RewardCardInfo.defaultProps = {
  value: null,
  withMarginBottom: true,
}
