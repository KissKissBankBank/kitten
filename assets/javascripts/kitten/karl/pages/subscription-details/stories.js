import React from 'react'
import { StyledWrapper } from './styles'
import {
  Tag,
  Separator,
  Text,
  StatusIconNext,
  Grid,
  GridCol,
  List,
} from 'kitten'

export default {
  title: 'pages/SubscriptionDetails',
}

const PaymentList = ({
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
    <Text
      weight={subtitleWeight}
      size={subtitleSize}
      className="k-SubscriptionDetails__subtitle"
    >
      {subtitle}
    </Text>
    <Text size="tiny" className="k-SubscriptionDetails__amount">{amount}</Text>
    <Tag
      type={typeTag}
      size="small"
      className="k-SubscriptionDetails__tag"
    >
      {tag}
    </Tag>
    <Text size="tiny" className="k-SubscriptionDetails__date">{date}</Text>
  </div>
)

export const ContributorPayment = () => {
  return (
    <Grid>
      <GridCol col-m="6">
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
          <Separator className="k-u-margin-top-singleHalf k-u-margin-bottom-singleHalf" />

          <PaymentList
            subtitle="Avril"
            amount="12 €"
            subtitleSize="tiny"
            tag="Validé"
            typeTag="success"
            date="le 01/03/21"
          />
          <PaymentList
            subtitle="Mars"
            amount="12 €"
            subtitleSize="tiny"
            tag="Validé"
            typeTag="success"
            date="le 01/03/21"
          />
          <PaymentList
            subtitle="Février"
            amount="12 €"
            subtitleSize="tiny"
            tag="Validé"
            typeTag="success"
            date="le 01/03/21"
          />
          <PaymentList
            subtitle="Janvier"
            amount="12 €"
            subtitleSize="tiny"
            tag="Validé"
            typeTag="success"
            date="le 01/03/21"
          />

          <Separator className="k-u-margin-top-singleHalf k-u-margin-bottom-singleHalf" />

          <PaymentList
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
          <List markerElement={<StatusIconNext status="success" color="var(--color-primary-500)" />}>
            <Text size="tiny">Le nouveau numéro</Text>
            <Text size="tiny">Les coulisses de l'édition</Text>
            <Text size="tiny">Un poster édition limitée</Text>
            <Text size="tiny">Une surprise collector</Text>
          </List>
        </div>
        
      </div>

      <Separator className="k-u-margin-top-singleHalf k-u-margin-bottom-singleHalf" />
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
    
      <Separator className="k-u-margin-top-singleHalf k-u-margin-bottom-singleHalf" />
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
  )
}

export const ContributorReward = () => {
  return (
    <Grid>
      <GridCol col-m="6">
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
              
              <Text
                tag="p"
                size="tiny"
                className="k-u-margin-top-single k-u-margin-bottom-none"
              >
                Édition Barkley.
              </Text>
              <ul className="k-SubscriptionDetails__list">
                <li className="k-SubscriptionDetails__listItem">
                  <Text size="tiny">{' '}Le livre Les Finisseurs (signé par les auteurs).</Text>
                </li>
                <li className="k-SubscriptionDetails__listItem">
                  <Text size="tiny">{' '}Le coffret édition limitée.</Text>
                </li>
                <li className="k-SubscriptionDetails__listItem">
                  <Text size="tiny">{' '}Un tirage 20 x 30 cm (signé par Alexis Berg).</Text>
                </li>
                <li className="k-SubscriptionDetails__listItem">
                  <Text size="tiny">{' '}Le DVD du film Les Finisseurs</Text>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="k-u-margin-top-singleHalf k-u-margin-bottom-singleHalf" />
          <div className="k-SubscriptionDetails__details">
            <div>
              <Text size="tiny">Option</Text>
              <Text
                tag="p"
                weight="bold"
                size="tiny"
                className="k-u-margin-none"
              >
                Végétarien, bleu
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
        </StyledWrapper>
  
      </GridCol>
    </Grid>
  )
}
