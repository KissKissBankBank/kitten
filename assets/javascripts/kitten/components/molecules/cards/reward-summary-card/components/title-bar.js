import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Text } from '../../../../../components/atoms/typography/text'
import { StyledRewardSummaryTitles } from '../styles'

export const TitleBar = ({ className, values, size, id }) => {
  const { image, title, amount, contributions, availability } = values

  return (
    <StyledRewardSummaryTitles className={classNames('k-RewardSummaryCard-TitleBar', className, `k-RewardSummaryCard-Wrapper--${size}`)}>
    <div className="k-RewardSummaryCard-Wrapper__imageWrapper">
      <Text
        size="micro"
        weight="regular"
        className="k-RewardSummaryCard-TitleBar__image"
        id={`${id}-image`}
      >
        {image}
      </Text>
    </div>
    <div className="k-RewardSummaryCard-Wrapper__gridWrapper">
      <Text
        size="micro"
        weight="regular"
        className="k-RewardSummaryCard-TitleBar__title"
        id={`${id}-title`}
      >
        {title}
      </Text>
      <Text
        size="micro"
        weight="regular"
        className="k-RewardSummaryCard-TitleBar__amount"
        id={`${id}-amount`}
      >
        {amount}
      </Text>
      <Text
        size="micro"
        weight="regular"
        className="k-RewardSummaryCard-TitleBar__contributions"
        id={`${id}-contributions`}
      >
        {contributions}
      </Text>
      <Text
        size="micro"
        weight="regular"
        className="k-RewardSummaryCard-TitleBar__availability"
        id={`${id}-availability`}
      >
        {availability}
      </Text>
    </div>
    </StyledRewardSummaryTitles>
  )
}

TitleBar.defaultProps = {
  size: 'large',
}

TitleBar.propTypes = {
  id: PropTypes.string.isRequired,
  values: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.string,
    contributions: PropTypes.string,
    availability: PropTypes.string,
  }),
  size: PropTypes.oneOf(['large', 'medium', 'small', 'mobile']),
}
