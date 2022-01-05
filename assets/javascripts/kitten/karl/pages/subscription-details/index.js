import React from 'react'
import { StyledWrapper } from './styles'
import { Tag, HorizontalStroke, Text } from 'kitten'
import classNames from 'classnames'

const Stroke = ({ className, ...props }) => (
  <HorizontalStroke
    {...props}
    color="var(--color-grey-400)"
    className={classNames(
      'k-u-margin-bottom-singleHalf',
      'k-u-margin-top-singleHalf',
    )}
    customSize={{ width: '100%', height: 1 }}
  />
)

const SubscriptionDetails = () => {
  return (

    // Contributeur - paiement
    <StyledWrapper>
      <div className="k-SubscriptionDetails__title">
        <div>
          <Text lineHeight="" weight="bold">Abonnement</Text>
          <Text
            tag="p"
            size="micro"
            weight="light"
            className="k-u-margin-none"
          >
            Souscrit le 22/12/20
          </Text>
        </div>
        <Tag type="success">Actif</Tag>
      </div>
      <Stroke />
    </StyledWrapper>
  )
}

export default SubscriptionDetails
