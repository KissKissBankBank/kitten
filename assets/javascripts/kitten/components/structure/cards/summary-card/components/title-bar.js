import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Text } from '../../../../typography/text'
import { StyledSummaryTitles } from '../styles'

export const TitleBar = ({ className, values, size, id, type }) => {
  const { image, ...valuesRest } = values

  return (
    <StyledSummaryTitles
      className={classNames(
        'k-SummaryCard-TitleBar',
        className,
        `k-SummaryCard-Wrapper--${size}`,
      )}
      type={type}
    >
      {image != null && (
        <div className="k-SummaryCard-Wrapper__imageWrapper">
          <Text
            size="micro"
            weight="regular"
            cssColor="var(--color-grey-700)"
            className="k-SummaryCard-TitleBar__image"
            id={`${id}-image`}
          >
            {image}
          </Text>
        </div>
      )}
      <div className="k-SummaryCard-Wrapper__gridWrapper">
        {Object.keys(valuesRest).map(item => (
          <Text
            key={`${id}-${item}`}
            id={`${id}-${item}`}
            size="micro"
            weight="regular"
            cssColor="var(--color-grey-700)"
            className={`k-SummaryCard-TitleBar__${item}`}
            style={{ '--summaryCardCell-name': item }}
          >
            {valuesRest[item]}
          </Text>
        ))}
      </div>
    </StyledSummaryTitles>
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
    frequency: PropTypes.string,
    subscription: PropTypes.string,
    contributions: PropTypes.string,
    availability: PropTypes.string,
  }),
  size: PropTypes.oneOf([
    'xlarge',
    'large',
    'medium',
    'tablet',
    'small',
    'mobile',
  ]),
}
