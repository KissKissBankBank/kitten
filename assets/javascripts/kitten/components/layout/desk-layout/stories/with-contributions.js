import React from 'react'
import {
  FlexWrapper,
  Tag,
  Text,
  SummaryCard,
  Title,
  useSummaryCardResizeObserver,
} from 'kitten'

export const WithContributions = ({ hasImage, hasTitleTag, ...args }) => {
  const { ref, size } = useSummaryCardResizeObserver()

  return (
    <div ref={ref}>
      <FlexWrapper gap={50}>
        <div>
          <Title
            modifier="senary"
            className="k-u-margin-bottom-tripleHalf"
            noMargin
          >
            Abonnements et dons récurrents
          </Title>
          <SummaryCard.TitleBar
            values={{
              image: '',
              title: 'Projet',
              description: 'Abonnement',
              amount: 'Montant',
              payment: 'Dernière échéance',
              status: 'Statut',
              shipping: 'Livraison',
              action: '',
            }}
            className="k-u-hidden@xs-down k-u-margin-bottom-single"
            id="SummaryList-contributorSubscription"
            size={size}
            type="contributorSubscription"
          />

          <SummaryCard
            className="k-u-margin-bottom-single"
            {...args}
            size={size}
            type="contributorSubscription"
          >
            <SummaryCard.Image className="k-u-hidden@xs-down">
              <img
                src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
                alt=""
              />
            </SummaryCard.Image>

            <SummaryCard.Cell
              name="title"
              aria-describedby="SummaryList-contributorSubscription-title"
            >
              <Text weight="bold" size="small">
                Contributor Subscription Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor.
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="description"
              aria-describedby="SummaryList-contributorSubscription-description"
            >
              <Text size="small">Consectetur Vestibulum</Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="amount"
              aria-describedby="SummaryList-contributorSubscription-amount"
            >
              <Text size="small">
                <strong className="k-u-weight-regular">3 €</strong> / mois
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="payment"
              aria-describedby="SummaryList-contributorSubscription-payment"
            >
              <Text size="small" className="k-u-block">
                Déc 2021
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="status"
              aria-describedby="SummaryList-contributorSubscription-status"
            >
              <Tag type="warning">En pause</Tag>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="shipping"
              aria-describedby="SummaryList-contributorSubscription-shipping"
            >
              <Text weight="regular" size="small" className="k-u-block">
                Nov 2021
              </Text>
              <Text size="small" className="k-u-block">
                En main propre
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell name="last" className="k-u-align-right">
              <span className="k-u-size-small k-u-link k-u-link-primary1">
                Gérer
              </span>
            </SummaryCard.Cell>
          </SummaryCard>
          <SummaryCard {...args} size={size} type="contributorSubscription">
            <SummaryCard.Image className="k-u-hidden@xs-down">
              <img
                src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
                alt=""
              />
            </SummaryCard.Image>

            <SummaryCard.Cell
              name="title"
              aria-describedby="SummaryList-contributorSubscription-title"
            >
              <Text weight="bold" size="small">
                Recto Verso : le point de départ de l'aventure en France
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="description"
              aria-describedby="SummaryList-contributorSubscription-description"
            >
              <Text size="small">Don libre</Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="amount"
              aria-describedby="SummaryList-contributorSubscription-amount"
            >
              <Text size="small">
                <strong className="k-u-weight-regular">2 €</strong> / mois
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="payment"
              aria-describedby="SummaryList-contributorSubscription-payment"
            >
              <Text size="small" className="k-u-block">
                Jan 2025
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="status"
              aria-describedby="SummaryList-contributorSubscription-status"
            >
              <Tag type="success">Actif</Tag>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="shipping"
              aria-describedby="SummaryList-contributorSubscription-shipping"
            >
              <Text weight="regular" size="small" className="k-u-block">
                Nov 2021
              </Text>
              <Text size="small" className="k-u-block">
                Pas de livraison
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell name="last" className="k-u-align-right">
              <span className="k-u-size-small k-u-link k-u-link-primary1">
                Gérer
              </span>
            </SummaryCard.Cell>
          </SummaryCard>
        </div>

        <div>
          <Title
            modifier="senary"
            className="k-u-margin-bottom-tripleHalf k-u-margin-top-septuble"
            noMargin
          >
            Contributions à des campagnes
          </Title>
          <SummaryCard.TitleBar
            values={{
              image: '',
              title: 'Projet',
              description: 'Description',
              amount: 'Montant',
              payment: 'Paiement',
              shipping: 'Livraison',
              action: '',
            }}
            className="k-u-hidden@xs-down k-u-margin-bottom-single"
            id="SummaryList-contributorContribution"
            size={size}
            type="contributorContribution"
          />

          <SummaryCard
            className="k-u-margin-bottom-single"
            {...args}
            size={size}
            type="contributorContribution"
          >
            <SummaryCard.Image className="k-u-hidden@xs-down">
              <img
                src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
                alt=""
              />
            </SummaryCard.Image>

            <SummaryCard.Cell
              name="title"
              aria-describedby="SummaryList-contributorContribution-title"
            >
              <Text weight="bold" size="small">
                Contributor Contribution dolor auctor.
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="description"
              aria-describedby="SummaryList-contributorContribution-description"
            >
              <Text size="small">Sollicitudin</Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="amount"
              aria-describedby="SummaryList-contributorContribution-amount"
            >
              <Text weight="regular" size="small">
                10 000 €
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="payment"
              aria-describedby="SummaryList-contributorContribution-payment"
            >
              <Tag type="success">Validé</Tag>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="shipping"
              aria-describedby="SummaryList-contributorContribution-shipping"
            >
              <Text weight="regular" size="small" className="k-u-block">
                Nov 2021
              </Text>
              <Text size="small" className="k-u-block">
                En main propre
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell name="last" className="k-u-align-right">
              <span className="k-u-size-small k-u-link k-u-link-primary1">
                Détails
              </span>
            </SummaryCard.Cell>
          </SummaryCard>

          <SummaryCard {...args} size={size} type="contributorContribution">
            <SummaryCard.Image className="k-u-hidden@xs-down">
              <img
                src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
                alt=""
              />
            </SummaryCard.Image>

            <SummaryCard.Cell
              name="title"
              aria-describedby="SummaryList-contributorContribution-title"
            >
              <Text weight="bold" size="small">
                Dé-mots : imaginer, écrire, rire
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="description"
              aria-describedby="SummaryList-contributorContribution-description"
            >
              <Text size="small">Le coffret Dé-mots</Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="amount"
              aria-describedby="SummaryList-contributorContribution-amount"
            >
              <Text weight="regular" size="small">
                16 €
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="payment"
              aria-describedby="SummaryList-contributorContribution-payment"
            >
              <Tag type="success">Validé</Tag>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="shipping"
              aria-describedby="SummaryList-contributorContribution-shipping"
            >
              <Text weight="regular" size="small" className="k-u-block">
                Nov 2021
              </Text>
              <Text size="small" className="k-u-block">
                En main propre
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell name="last" className="k-u-align-right">
              <span className="k-u-size-small k-u-link k-u-link-primary1">
                Détails
              </span>
            </SummaryCard.Cell>
          </SummaryCard>
        </div>
      </FlexWrapper>
    </div>
  )
}
