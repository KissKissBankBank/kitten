import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import {
  Button,
  mq,
  Paragraph,
  pxToRem,
  StatusIconNext,
  Tag,
  Text,
  Title,
  Container,
} from 'kitten'

const PricingWrapper = styled.section`
  background-color: var(--color-grey-100);
  padding: 0 ${pxToRem(20)} ${pxToRem(50)};
  position: relative;

  > * {
    position: relative;
    z-index: 2;
  }

  &::after {
    content: '';
    background-color: var(--color-primary-500);
    height: 50%;
    width: 100%;
    left: 0;
    bottom: 0;
    position: absolute;
    clip-path: polygon(
      0 75px,
      33% 0,
      33% 100px,
      100% 0,
      100% calc(100% + 1px),
      0 calc(100% + 1px)
    );
  }

  @media ${mq.tablet} {
    padding: 0 ${pxToRem(100)} ${pxToRem(70)};
  }
  @media ${mq.desktop} {
    padding: 0 ${pxToRem(120)} ${pxToRem(70)};
  }

  .kiss-Homepage__pricing__paragraph {
    text-align: center;
    margin: ${pxToRem(20)} auto ${pxToRem(50)} auto;
    max-width: ${pxToRem(570)};
  }

  .kiss-Homepage__pricing__cards {
    display: grid;
    gap: ${pxToRem(20)};
    grid-template-columns: 1fr;

    @media ${mq.desktop} {
      gap: ${pxToRem(30)};
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .kiss-Homepage__pricing__container {
    padding: 0;
  }

  /* CARD COMPONENT */
  .kiss-Homepage__pricing__card {
    background-color: var(--color-grey-000);
    border-radius: var(--border-radius-m);
    padding: ${pxToRem(30)};
    display: flex;
    gap: ${pxToRem(20)};
    flex-direction: column;
    box-shadow: var(--box-shadow-m);

    &.kiss-Homepage__pricing__card--main {
      border: ${pxToRem(2)} solid var(--color-primary-500);
      padding: ${pxToRem(36 - 2 * 2)};
    }

    .kiss-Homepage__pricing__card__name {
      margin: 0;
      font: var(--font-weight-700) var(--font-size-5) / 1
        var(--font-family-maax);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .kiss-Homepage__pricing__card__sticker {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      height: ${pxToRem(22)};
      box-sizing: border-box;
      top: ${pxToRem(-11)};
      left: 46%;
      max-width: calc(100% - ${pxToRem(2 * (10 + 15))});

      line-height: ${pxToRem(22)};
      background-color: var(--color-primary-500);
      border-radius: var(--border-radius-rounded);
      padding: ${pxToRem(0)} ${pxToRem(10)};

      font: var(--font-weight-500) var(--font-size-2) / 1
        var(--font-family-maax);
      color: var(--color-grey-000);
    }

    .kiss-Homepage__pricing__card__rate {
      margin: ${pxToRem(10)} 0 0;
      font: var(--font-weight-700) var(--font-size-10) / 1
        var(--font-family-maax);
      color: var(--color-primary-500);
      letter-spacing: -0.02em;
    }
    .kiss-Homepage__pricing__card__rateComplement {
      font: var(--font-weight-400) var(--font-size-6) / 1
        var(--font-family-maax);
      letter-spacing: -0.01em;
    }
    .kiss-Homepage__New__card__rateComplement__bis {
      font: var(--font-weight-400) var(--font-size-2) / 1
        var(--font-family-maax);
      color: var(--color-grey-900);
    }
    .kiss-Homepage__pricing__card__description {
      margin: 0;
    }
    .kiss-Homepage__pricing__card__list {
      flex-grow: 1;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: ${pxToRem(10)};
    }
    .kiss-Homepage__pricing__card__list__item {
      margin: 0;
      padding: 0;
      display: flex;
      gap: ${pxToRem(15)};
      line-height: ${pxToRem(18)};
      align-items: center;
    }
    .kiss-Homepage__pricing__card__link {
      display: block;
      text-align: center;
      padding: ${pxToRem(10)};
      margin-bottom: ${pxToRem(-10)};
    }
  }
`

const PricingCard = ({
  name,
  sticker,
  rate,
  rateComplement,
  rateComplementBis,
  rateDescription,
  description,
  actionButtonProps = {},
  listItems = [],
  learnMoreLinkProps = {},
  className,
  main = false,
}) => (
  <div
    className={classNames('kiss-Homepage__pricing__card', className, {
      'kiss-Homepage__pricing__card--main': main,
    })}
  >
    <div>
      {sticker && (
        <div className="kiss-Homepage__pricing__card__sticker k-u-ellipsis">
          {sticker}
        </div>
      )}
      <h2 className="kiss-Homepage__pricing__card__name">{name}</h2>
      <p className="kiss-Homepage__pricing__card__rate">
        {rate}{' '}
        <small className="kiss-Homepage__pricing__card__rateComplement">
          {rateComplement}{' '}
          <span className="kiss-Homepage__New__card__rateComplement__bis">
            {rateComplementBis}
          </span>
        </small>
      </p>
      <Text
        size="micro"
        className="kiss-Homepage__pricing__card-rateDescription"
      >
        {rateDescription}
      </Text>
    </div>
    <Paragraph
      modifier="tertiary"
      className="kiss-Homepage__pricing__card__description"
    >
      {description}
    </Paragraph>
    <Button
      {...actionButtonProps}
      modifier="helium"
      fit="fluid"
      className={classNames(
        'kiss-Homepage__pricing__card__button',
        actionButtonProps.className,
      )}
    >
      Créer mon projet
    </Button>
    <ul className="kiss-Homepage__pricing__card__list">
      {listItems.map((item, index) => (
        <li key={index} className="kiss-Homepage__pricing__card__list__item">
          <StatusIconNext
            status="success"
            width="12"
            height="12"
            color="var(--color-primary-500)"
          />
          <Text size="small" weight="500">
            {item}
          </Text>
        </li>
      ))}
    </ul>
    <Text
      tag="a"
      size="small"
      weight="500"
      {...learnMoreLinkProps}
      className={classNames(
        'kiss-Homepage__pricing__card__link',
        'k-u-link',
        'k-u-link-primary1',
        learnMoreLinkProps.className,
      )}
    >
      En savoir plus
    </Text>
  </div>
)

const Pricing = () => {
  return (
    <PricingWrapper>
      <Title
        tag="h2"
        modifier="tertiary"
        noMargin
        className="k-u-align-center k-u-margin-bottom-double"
      >
        Choisissez parmi nos 3 offres d’accompagnement
      </Title>
      <Paragraph
        modifier="secondary"
        className="kiss-Homepage__pricing__paragraph"
      >
        Nous sommes la seule plateforme à permettre de lancer une campagne sans
        commission et à proposer des offres adaptées à votre besoin.
      </Paragraph>
      <Container className="kiss-Homepage__pricing__container">
        <div className="kiss-Homepage__pricing__cards">
          <PricingCard
            name="Starter"
            rate="Gratuit"
            description="Idéal si vous débutez et cherchez surtout à récolter des dons pour financer votre projet jusqu’à plusieurs milliers d’euros auprès de vos amis et amis d’amis."
            actionButtonProps={{
              as: 'a',
              href: '#button',
            }}
            listItems={[
              'Campagne avec objectif',
              'Centre d’aide et tutoriels en ligne',
              '2 contreparties maximum',
              'Personnalisation de la page projet et FAQ',
              'Statistiques basiques',
              'Publications publiques sur le projet',
              'Messagerie standard',
            ]}
            learnMoreLinkProps={{
              href: '#link',
            }}
          />

          <PricingCard
            main
            sticker="Recommandé"
            name="Pro"
            rate="5%"
            rateComplement="HT"
            rateComplementBis="SOIT 6% TTC"
            rateDescription="du montant collecté sur KissKissBankBank"
            description="Idéal si vous avez déjà une solide communauté existante et cherchez à récolter plusieurs dizaines de milliers d’euros ou des précommandes."
            actionButtonProps={{
              as: 'a',
              href: '#button',
            }}
            listItems={[
              'Coaching illimité',
              'Paliers d’objectifs',
              'Prolongation de campagne',
              'Projet permanent (don récurrent)',
              'Contreparties illimitées avec options',
              'Personnalisation de la couleur de page projet',
              'Statistiques avancées',
              'Publications ciblées aux contributeurs',
              'Compte multi-utilisateurs',
            ]}
            learnMoreLinkProps={{
              href: '#link',
            }}
          />

          <PricingCard
            name="Expert"
            rate="10%"
            rateComplement="HT"
            rateComplementBis="SOIT 6% TTC"
            rateDescription="du montant collecté sur KissKissBankBank"
            description="Idéal si vous connaissez parfaitement les mécaniques de communauté et de financement participatif et souhaitez des fonctionnalités avancées pour optimiser votre campagne en continu."
            actionButtonProps={{
              as: 'a',
              href: '#button',
            }}
            listItems={[
              'Coaching stratégique',
              'Service client prioritaire',
              <>
                Page dédiée par contrepartie <Tag>Bientôt</Tag>
              </>,
              <>
                Export des données statistiques <Tag>Bientôt</Tag>
              </>,
              <>
                Sondages <Tag>Bientôt</Tag>
              </>,
            ]}
            learnMoreLinkProps={{
              href: '#link',
            }}
          />
        </div>
      </Container>
    </PricingWrapper>
  )
}

export default Pricing
