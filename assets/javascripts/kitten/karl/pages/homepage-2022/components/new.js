import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import {
  Title,
  Paragraph,
  Text,
  Button,
  mq,
  pxToRem,
} from 'kitten'

const NewWrapper = styled.section`
  max-width: ${pxToRem(1440)};
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  padding: 0 ${pxToRem(20)};

  > * {
    position: relative;
    z-index: 2;
  }

  @media ${mq.tabletAndDesktop} {
    padding: ${pxToRem(70)} ${pxToRem(120)} ${pxToRem(70)};
  }

  .kiss-Homepage__new__cards {
    display: flex;
    gap: ${pxToRem(20)};
    flex-direction: column;

    @media ${mq.desktop} {
      display: grid;
      gap: 0 ${pxToRem(30)};
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr auto 1fr;
    }

    .kiss-Homepage__new__card {
      grid-row: 2 / span 1;
    }
    .kiss-Homepage__new__card--main {
      grid-row: 1 / span 3;
    }
  }

  /* CARD COMPONENT */
  .kiss-Homepage__new__card {
    box-sizing: border-box;
    background-color: var(--color-grey-000);
    border-radius: var(--border-radius-m);
    padding: ${pxToRem(30)};
    display: flex;
    gap: ${pxToRem(20)};
    flex-direction: column;
    box-shadow: var(--box-shadow-m);

    &.kiss-Homepage__new__card--main {
      border: ${pxToRem(2)} solid var(--color-primary-500);
      padding: ${pxToRem(36 - 2 * 2)};
    }

    .kiss-Homepage__new__card__name {
      margin: 0;
      font: var(--font-weight-700) var(--font-size-5) / 1
        var(--font-family-maax);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .kiss-Homepage__new__card__sticker {
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

    .kiss-Homepage__new__card__rate {
      margin: ${pxToRem(10)} 0 0;
      font: var(--font-weight-700) var(--font-size-10) / 1
        var(--font-family-maax);
      color: var(--color-primary-500);
      letter-spacing: -0.02em;
    }
    .kiss-Homepage__new__card__rateComplement {
      font: var(--font-weight-700) var(--font-size-6) / 1
        var(--font-family-maax);
      letter-spacing: -0.01em;
    }
    .kiss-Homepage__new__card__rateComplement__bis {
      font: var(--font-weight-400) var(--font-size-2) / 1
        var(--font-family-maax);
      color: var(--color-grey-900);
    }
    .kiss-Homepage__new__card__description {
      margin: 0;
    }
    .kiss-Homepage__new__card__list {
      flex-grow: 1;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: ${pxToRem(10)};
    }
    .kiss-Homepage__new__card__list__item {
      margin: 0;
      padding: 0;
      display: flex;
      gap: ${pxToRem(15)};
      line-height: ${pxToRem(18)};
      align-items: center;
    }
    .kiss-Homepage__new__card__link {
      display: block;
      text-align: center;
      padding: ${pxToRem(10)};
      margin-bottom: ${pxToRem(-10)};
    }
  }
`

const NewCard = ({
  name,
  sticker,
  rate,
  rateComplement,
  rateComplementBis,
  rateDescription,
  description,
  className,
  main = false,
}) => (
  <div
    className={classNames('kiss-Homepage__new__card', className, {
      'kiss-Homepage__new__card--main': main,
    })}
  >
    <div>
    {sticker && (
      <div className="kiss-Homepage__new__card__sticker k-u-ellipsis k-u-hidden@m-down">
        {sticker}
      </div>
    )}
      <h2 className="kiss-Homepage__new__card__name">{name}</h2>
      <p className="kiss-Homepage__new__card__rate">
        {rate}{' '}
        <small className="kiss-Homepage__new__card__rateComplement">
          {rateComplement}{' '} 
          <span className="kiss-Homepage__new__card__rateComplement__bis">
            {rateComplementBis}
          </span>
        </small>
      </p>
      <Text size="micro" className="kiss-Homepage__new__card-rateDescription">
        {rateDescription}
      </Text>
    </div>
    <Paragraph
      modifier="quinary"
      className="kiss-Homepage__new__card__description"
    >
      {description}
    </Paragraph>
  </div>
)

const New = () => {
  return (
    <NewWrapper>
      <Title
        modifier="tertiary"
        noMargin
        tag="h2"
        className="k-u-align-center k-u-margin-bottom-tripleHalf"
      >
        Nouveau : choisissez parmi nos <br /> 3 offres d’accompagnement
      </Title>

      <div className="kiss-Homepage__new__cards">
        <NewCard
          name="Starter"
          rate="Gratuit"
          description="Idéal si vous débutez et cherchez surtout à récolter des dons pour financer votre projet jusqu’à plusieurs milliers d’euros auprès de vos amis et amis d’amis."
        />

        <NewCard
          main
          sticker="Recommandé"
          name="Pro"
          rate="5%"
          rateComplement="HT"
          rateComplementBis="SOIT 6% TTC"
          rateDescription="du montant collecté sur KissKissBankBank"
          description="Idéal si vous avez déjà une solide communauté existante et cherchez à récolter plusieurs dizaines de milliers d’euros ou des précommandes."
        />

        <NewCard
          name="Expert"
          rate="10%"
          rateComplement="HT"
          rateComplementBis="SOIT 6% TTC"
          rateDescription="du montant collecté sur KissKissBankBank"
          description="Idéal si vous connaissez parfaitement les mécaniques de communauté et de financement participatif et souhaitez des fonctionnalités avancées pour optimiser "
        />
      </div>
      <div className="k-u-align-center k-u-margin-triple">
          <Button modifier="helium">En savoir plus</Button>
        </div>
    </NewWrapper>
  )
}

export default New
