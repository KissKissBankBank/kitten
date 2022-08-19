import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import {
  Title,
  Paragraph,
  Text,
  Button,
  Tag,
  mq,
  pxToRem,
  AirplaneIconNext,
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

  @media ${mq.tabletAndDesktop} {
    padding: 0 ${pxToRem(120)} ${pxToRem(70)};
  }

  .kiss-Homepage__pricing__cards {
    @media ${mq.tabletAndDesktop} {
      display: grid;
      gap: 0 ${pxToRem(30)};
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr auto 1fr;
    }

    .kiss-Homepage__pricing__card {
      grid-row: 2 / span 1;
    }
    .kiss-Homepage__pricing__card--main {
      grid-row: 1 / span 3;
    }
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
  rate,
  rateComplement = 'HT',
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
      <h2 className="kiss-Homepage__pricing__card__name">{name}</h2>
      <p className="kiss-Homepage__pricing__card__rate">
        {rate}{' '}
        <small className="kiss-Homepage__pricing__card__rateComplement">
          {rateComplement}
        </small>
      </p>
    </div>
    <Paragraph
      modifier="quinary"
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
      {listItems.map(item => (
        <li className="kiss-Homepage__pricing__card__list__item">
          <AirplaneIconNext
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
        modifier="tertiary"
        noMargin
        className="k-u-align-center k-u-margin-bottom-double"
      >
        Choisissez le forfait qui vous correspond et donnez vie à votre projet
      </Title>
      <Paragraph
        modifier="secondary"
        className="k-u-align-center k-u-margin-top-double k-u-margin-bottom-quintuple"
      >
        Rejoignez des milliers de créateurs et créatrices qui utilisent
        KissKissBankBank pour financer leur projet et faire grandir leurs
        communautés.
      </Paragraph>

      <div className="kiss-Homepage__pricing__cards">
        <PricingCard
          name="Starter"
          rate="0%"
          rateComplement="HT soit x% TTC"
          description="Petit texte descriptif Petit texte descriptif Petit texte descriptif Petit texte descriptif Petit texte descriptif "
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
          name="Pro"
          rate="5%"
          rateComplement="HT"
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
          description="Idéal si vous connaissez parfaitement les mécaniques de communauté et de financement participatif et souhaitez des fonctionnalités avancées pour optimiser "
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
    </PricingWrapper>
  )
}

export default Pricing
