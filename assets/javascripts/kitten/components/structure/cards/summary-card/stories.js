import React from 'react'
import { SummaryCard, useSummaryCardResizeObserver } from './index'
import {
  DropdownMenu,
  EllipsisIcon,
  FlexWrapper,
  Tag,
  Text,
  Title,
} from 'kitten'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

const argTypes = {
  show: {
    name: 'show',
    description: 'If empty return null',
    control: { type: 'boolean' },
  },
  as: {
    name: 'as',
    description: 'HTML element for the Action component',
    control: { type: 'text' },
  },
  actionProps: {
    name: 'actionProps',
    description: 'Properties for the Action component',
    control: { type: 'object' },
  },
  hasImage: {
    name: 'hasImage (story prop)',
    description: 'Show/hide image, for story purposes.',
    control: { type: 'boolean' },
  },
  hasTitleTag: {
    name: 'hasTitleTag (story prop)',
    description: 'Show/hide title tag, for story purposes.',
    control: { type: 'boolean' },
  },
}

const args = {
  show: true,
  actionProps: {
    href: '#',
    as: 'a',
    'aria-label': 'A label for the link',
    onClick: e => {
      e.preventDefault()
      action('Clicked')(e)
    },
  },
  hasImage: true,
  hasTitleTag: true,
}

export default {
  component: SummaryCard,
  title: 'Structure/Cards/SummaryCard',
  parameters: {
    component: SummaryCard,
  },
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'styles.js',
            'components/cell.js',
            'components/image.js',
            'components/index.js',
            'components/title-bar.js',
            'components/title-tag.js',
          ]}
          importString="SummaryCard"
        />
      ),
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  args,
  argTypes,
}

export const WithCells = ({ hasImage, hasTitleTag, ...args }) => {
  const { ref, size } = useSummaryCardResizeObserver()

  return (
    <div ref={ref}>
      <FlexWrapper gap={50}>
        <div>
          <Title
            modifier="septenary"
            noMargin
            className="k-u-margin-bottom-double"
          >
            Owner Contribution
          </Title>
          <SummaryCard.TitleBar
            values={{
              image: 'Visuel de la contrepartie',
              title: 'Titre de la contrepartie',
              amount: 'Montant',
              contributions: 'Contributions',
              availability: 'Disponibilités',
            }}
            className="k-u-hidden@xs-down k-u-margin-bottom-singleHalf"
            id="SummaryList-ownerContribution"
            size={size}
            type="ownerContribution"
          />

          <SummaryCard {...args} size={size} type="ownerContribution">
            <SummaryCard.Image>
              <img
                src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
                alt=""
              />
            </SummaryCard.Image>

            <SummaryCard.Cell
              name="title"
              aria-describedby="SummaryList-ownerContribution-title"
            >
              <Text weight="bold" size="small">
                Owner Contribution vel augue laoreet rutrum faucibus dolor
                auctor.
              </Text>
              <SummaryCard.TitleTag icon="star" text="Star" />
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="amount"
              aria-describedby="SummaryList-ownerContribution-amount"
            >
              <Text size="small">10 000 €</Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell
              name="contribution"
              aria-describedby="SummaryList-ownerContribution-contribution"
            >
              <Text size="small">1 452 000</Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="availability"
              aria-describedby="SummaryList-ownerContribution-availability"
            >
              <Text size="small">Illimitée</Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell name="last-stretch">
              <DropdownMenu
                menuPosition="left"
                positionedButton
                button={({ open }) => (
                  <>
                    <EllipsisIcon color="var(--color-grey-900)" />
                    <span className="k-u-a11y-visuallyHidden">
                      {open ? 'Click to close menu' : 'Click to open menu'}
                    </span>
                  </>
                )}
              >
                <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
                <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
                <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
                <DropdownMenu.Button>Supprimer</DropdownMenu.Button>
              </DropdownMenu>
            </SummaryCard.Cell>
          </SummaryCard>
        </div>

        <div>
          <Title
            modifier="septenary"
            noMargin
            className="k-u-margin-bottom-double"
          >
            Owner Subscription
          </Title>
          <SummaryCard.TitleBar
            values={{
              image: "Visuel de l'abonnement",
              title: "Titre de l'abonnement",
              amount: 'Montant',
              frequency: 'Fréquence',
              subscription: 'Abonnements',
              availability: 'Disponibilités',
            }}
            className="k-u-hidden@xs-down k-u-margin-bottom-singleHalf"
            id="SummaryList-ownerSubscription"
            size={size}
            type="ownerSubscription"
          />

          <SummaryCard {...args} size={size} type="ownerSubscription">
            <SummaryCard.Image>
              <img
                src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
                alt=""
              />
            </SummaryCard.Image>

            <SummaryCard.Cell
              name="title"
              aria-describedby="SummaryList-ownerSubscription-title"
            >
              <Text weight="bold" size="small">
                Owner Subscription lacus vel augue.
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="amount"
              aria-describedby="SummaryList-ownerSubscription-amount"
            >
              <Text size="small" className="k-u-hidden@s-down">
                10 €
              </Text>
              <Text size="small" className="k-u-hidden@m-up">
                10 € / mois
              </Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="frequency"
              aria-describedby="SummaryList-ownerSubscription-frequency"
            >
              <Text size="small">Trimestriel</Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell
              name="subscription"
              aria-describedby="SummaryList-ownerSubscription-subscription"
            >
              <Text size="small" className="k-u-hidden@xs-down">
                130
              </Text>
              <Text size="small" className="k-u-hidden@s-up">
                130 abonnements en cours
              </Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="availability"
              aria-describedby="SummaryList-ownerSubscription-availability"
            >
              <Text size="small">1000 / 1000</Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell name="last-stretch">
              <DropdownMenu
                menuPosition="left"
                positionedButton
                button={({ open }) => (
                  <>
                    <EllipsisIcon color="var(--color-grey-900)" />
                    <span className="k-u-a11y-visuallyHidden">
                      {open ? 'Click to close menu' : 'Click to open menu'}
                    </span>
                  </>
                )}
              >
                <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
                <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
                <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
                <DropdownMenu.Button>Supprimer</DropdownMenu.Button>
              </DropdownMenu>
            </SummaryCard.Cell>
          </SummaryCard>
        </div>

        <div>
          <Title
            modifier="septenary"
            noMargin
            className="k-u-margin-bottom-double"
          >
            Contributor Contribution
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
            className="k-u-hidden@xs-down k-u-margin-bottom-singleHalf"
            id="SummaryList-contributorContribution"
            size={size}
            type="contributorContribution"
          />

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
        </div>

        <div>
          <Title
            modifier="septenary"
            noMargin
            className="k-u-margin-bottom-double"
          >
            Contributor Subscription
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
            className="k-u-hidden@xs-down k-u-margin-bottom-singleHalf"
            id="SummaryList-contributorSubscription"
            size={size}
            type="contributorSubscription"
          />

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
                <strong className="k-u-weight-regular">30 €</strong> par
                trimestre
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
        </div>
      </FlexWrapper>
    </div>
  )
}

export const TitleBar = args => (
  <div {...args}>
    <SummaryCard.TitleBar
      values={{
        image: 'Visuel de la contrepartie',
        title: 'Titre de la contrepartie',
        amount: 'Montant',
        contributions: 'Contributions',
        availability: 'Disponibilités',
      }}
      className="k-u-hidden@xs-down"
      id="SummaryList"
    />
  </div>
)
