import React from 'react'
import { StyledWrapper } from './styles'
import {
  Tag,
  HorizontalStroke,
  Text,
  StatusIconNext,
  Grid,
  GridCol,
} from 'kitten'
import classNames from 'classnames'

export default {
  title: 'pages/SubscriptionDetails',
}
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

const List = ({
  className,
  subtitleWeight,
  subtitle,
  subtitleSize,
  amount,
  tag,
  typeTag,
  date,
  ...props
}) => (
  <div className="k-SubscriptionDetails__listWrapper" {...props}>
    <Text weight={subtitleWeight} size={subtitleSize} className="k-SubscriptionDetails__subtitle">{subtitle}</Text>
    <Text size="tiny" className="k-SubscriptionDetails__amount">{amount}</Text>
    <Tag type={typeTag} size="small" className="k-SubscriptionDetails__tag">{tag}</Tag>
    <Text size="tiny" className="k-SubscriptionDetails__date">{date}</Text>
  </div>
)

export const ContributorPayment = () => {
  return (
    <Grid>
      <GridCol col-m="8">
        <StyledWrapper>
          <div className="k-SubscriptionDetails__title">
            <div>
              <Text weight="bold">Abonnement</Text>
              <Text
                tag="p"
                size="micro"
                weight="light"
                className="k-u-margin-none"
                cssColor="var(--color-grey-700"
              >
                Souscrit le 22/12/20
              </Text>
            </div>
            <Tag type="success">Actif</Tag>
          </div>
          <Stroke />

          <List
            subtitle="Avril"
            amount="12 €"
            subtitleSize="tiny"
            tag="Validé"
            typeTag="success"
            date="le 01/03/21"
          />
          <List
            subtitle="Mars"
            amount="12 €"
            subtitleSize="tiny"
            tag="Validé"
            typeTag="success"
            date="le 01/03/21"
          />
          <List
            subtitle="Février"
            amount="12 €"
            subtitleSize="tiny"
            tag="Validé"
            typeTag="success"
            date="le 01/03/21"
          />
          <List
            subtitle="Janvier"
            amount="12 €"
            subtitleSize="tiny"
            tag="Validé"
            typeTag="success"
            date="le 01/03/21"
          />

          <Stroke />

          <List
            subtitleWeight="bold"
            subtitle="Petit Plus"
            amount="2 €"
            tag="Validé"
            typeTag="success"
            date="le 01/03/21"
          />
        </StyledWrapper>
      </GridCol>
    </Grid>

  )
}

export const ContributorSubscription = () => {
  return (
    <Grid>
      <GridCol col-m="8">
        <StyledWrapper>
          <div className="k-SubscriptionDetails__gridWrapper">
            <div className="k-SubscriptionDetails__imageWrapper">
              <img
                src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
                alt=""
              />
            </div>
            <div>
              <Text weight="regular" size="tiny">Club des lecteurs</Text>
              <Text size="tiny" weight="light"><br />
                par{' '}
                <Text weight="bold" size="regular">
                  Sick Magazine
                </Text>
              </Text>
              <ul className="k-SubscriptionDetails__list">
                <li className="k-SubscriptionDetails__listItem">
                  <StatusIconNext status="success" color="var(--color-primary-500)" />
                  <Text size="tiny">Le nouveau numéro</Text>
                </li>
                <li className="k-SubscriptionDetails__listItem">
                  <StatusIconNext status="success" color="var(--color-primary-500)" />
                  <Text size="tiny">Les coulisses de l'édition</Text>
                </li>
                <li className="k-SubscriptionDetails__listItem">
                  <StatusIconNext status="success" color="var(--color-primary-500)" />
                  <Text size="tiny">Un poster édition limitée</Text>
                </li>
                <li className="k-SubscriptionDetails__listItem">
                  <StatusIconNext status="success" color="var(--color-primary-500)" />
                  <Text size="tiny">Une surprise collector</Text>
                </li>
              </ul>
            </div>

          </div>

          <Stroke />
          <div className="k-SubscriptionDetails__details">
            <div>
              <Text size="tiny">Fréquence</Text>
              <Text
                tag="p"
                weight="bold"
                size="tiny"
                className="k-u-margin-none"
              >
                Mensuel
              </Text>
            </div>
            <div>
              <Text size="tiny">Mode de livraison</Text>
              <Text
                tag="p"
                weight="bold"
                size="tiny"
                className="k-u-margin-none"
              >
                Livraison
              </Text>
            </div>
          </div>
        
          <Stroke />
          <div className="k-SubscriptionDetails__option">
            <Text size="tiny">Option</Text>
            <Text
              tag="p"
              weight="bold"
              size="tiny"
              className="k-u-margin-none"
            >
              Végétarien
            </Text>
          </div>
        </StyledWrapper>
  
      </GridCol>
    </Grid>
  )
}
