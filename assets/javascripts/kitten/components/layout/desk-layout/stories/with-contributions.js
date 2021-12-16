import React from 'react'
import {
  FlexWrapper,
  Tag,
  Text,
  DropdownMenu,
  EllipsisIcon,
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
          <SummaryCard.TitleBar
            values={{
              image: 'Visuel de la contrepartie',
              title: 'Titre de la contrepartie',
              amount: 'Montant',
              contributions: 'Contributions',
              availability: 'Disponibilités',
            }}
            className="k-u-hidden@xs-down k-u-margin-bottom-single"
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
              <Text weight="bold" size="tiny">
                Owner Contribution vel augue laoreet rutrum faucibus dolor
                auctor.
              </Text>
              <SummaryCard.TitleTag icon="star" text="Star" />
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="amount"
              aria-describedby="SummaryList-ownerContribution-amount"
            >
              <Text size="tiny">10 000 €</Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell
              name="contribution"
              aria-describedby="SummaryList-ownerContribution-contribution"
            >
              <Text size="tiny">1 452 000</Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="availability"
              aria-describedby="SummaryList-ownerContribution-availability"
            >
              <Text size="tiny">Illimitée</Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell name="last-stretch">
              <DropdownMenu
                menuPosition="left"
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
          <SummaryCard.TitleBar
            values={{
              image: "Visuel de l'abonnement",
              title: "Titre de l'abonnement",
              amount: 'Montant',
              frequency: 'Fréquence',
              subscription: 'Abonnements',
              availability: 'Disponibilités',
            }}
            className="k-u-hidden@xs-down k-u-margin-bottom-single"
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
              <Text weight="bold" size="tiny">
                Owner Subscription lacus vel augue.
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="amount"
              aria-describedby="SummaryList-ownerSubscription-amount"
            >
              <Text size="tiny" className="k-u-hidden@s-down">10 €</Text>
              <Text size="tiny" className="k-u-hidden@m-up">10 € / mois</Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="frequency"
              aria-describedby="SummaryList-ownerSubscription-frequency"
            >
              <Text size="tiny">Trimestriel</Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell
              name="subscription"
              aria-describedby="SummaryList-ownerSubscription-subscription"
            >
              <Text size="tiny" className="k-u-hidden@xs-down">130</Text>
              <Text size="tiny" className="k-u-hidden@s-up">130 abonnements en cours</Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="availability"
              aria-describedby="SummaryList-ownerSubscription-availability"
            >
              <Text size="tiny">1000 / 1000</Text>
            </SummaryCard.Cell>
            <SummaryCard.Cell name="last-stretch">
              <DropdownMenu
                menuPosition="left"
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
            modifier="senary"
            className="k-u-margin-bottom-tripleHalf k-u-margin-top-septuble"
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

          <SummaryCard className="k-u-margin-bottom-single" {...args} size={size} type="contributorSubscription">
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
              <Text weight="bold" size="tiny">
                Contributor Subscription Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor.
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="description"
              aria-describedby="SummaryList-contributorSubscription-description"
            >
              <Text size="tiny">Consectetur Vestibulum</Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="amount"
              aria-describedby="SummaryList-contributorSubscription-amount"
            >
              <Text size="tiny">
                <strong className="k-u-weight-regular">3 €</strong> / mois
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="payment"
              aria-describedby="SummaryList-contributorSubscription-payment"
            >
              <Text size="tiny" className="k-u-block">
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
              <Text weight="regular" size="tiny" className="k-u-block">
                Nov 2021
              </Text>
              <Text size="tiny" className="k-u-block">
                En main propre
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell name="last" className="k-u-align-right">
              <span className="k-u-size-tiny k-u-link k-u-link-primary1">
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
              <Text weight="bold" size="tiny">
                Recto Verso : le point de départ de l'aventure en France
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="description"
              aria-describedby="SummaryList-contributorSubscription-description"
            >
              <Text size="tiny">Don libre</Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="amount"
              aria-describedby="SummaryList-contributorSubscription-amount"
            >
              <Text size="tiny">
                <strong className="k-u-weight-regular">2 €</strong> / mois
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              className="k-u-hidden@xs-down"
              name="payment"
              aria-describedby="SummaryList-contributorSubscription-payment"
            >
              <Text size="tiny" className="k-u-block">
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
              <Text weight="regular" size="tiny" className="k-u-block">
                Nov 2021
              </Text>
              <Text size="tiny" className="k-u-block">
                Pas de livraison
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell name="last" className="k-u-align-right">
              <span className="k-u-size-tiny k-u-link k-u-link-primary1">
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

          <SummaryCard className="k-u-margin-bottom-single" {...args} size={size} type="contributorContribution">
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
              <Text weight="bold" size="tiny">
                Contributor Contribution dolor auctor.
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="description"
              aria-describedby="SummaryList-contributorContribution-description"
            >
              <Text size="tiny">Sollicitudin</Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="amount"
              aria-describedby="SummaryList-contributorContribution-amount"
            >
              <Text weight="regular" size="tiny">
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
              <Text weight="regular" size="tiny" className="k-u-block">
                Nov 2021
              </Text>
              <Text size="tiny" className="k-u-block">
                En main propre
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell name="last" className="k-u-align-right">
              <span className="k-u-size-tiny k-u-link k-u-link-primary1">
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
              <Text weight="bold" size="tiny">
              Dé-mots : imaginer, écrire, rire
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="description"
              aria-describedby="SummaryList-contributorContribution-description"
            >
              <Text size="tiny">Le coffret Dé-mots</Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell
              name="amount"
              aria-describedby="SummaryList-contributorContribution-amount"
            >
              <Text weight="regular" size="tiny">
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
              <Text weight="regular" size="tiny" className="k-u-block">
                Nov 2021
              </Text>
              <Text size="tiny" className="k-u-block">
                En main propre
              </Text>
            </SummaryCard.Cell>

            <SummaryCard.Cell name="last" className="k-u-align-right">
              <span className="k-u-size-tiny k-u-link k-u-link-primary1">
                Détails
              </span>
            </SummaryCard.Cell>
          </SummaryCard>
        </div>

      </FlexWrapper>
    </div>
  )
}
