import React from 'react'
import styled from 'styled-components'
import { Title } from '../../../../components/typography/title'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { CONTAINER_PADDING } from '../../../../constants/grid-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'

const portraitImageRatio = 50 / 67
const bulletSize = 4

const StyledTextWithSideImage = styled(Grid)`
  align-items: stretch;

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    min-height: ${pxToRem(900)};
  }

  .TextWithSideImage__image{
    display: block;
    position: relative;

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      padding-top: calc(100% * ${portraitImageRatio});
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      height: 100%;
      margin-right: ${pxToRem(-CONTAINER_PADDING)};
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .TextWithSideImage__horizontalStroke{
    width: ${pxToRem(30)};
    height: ${pxToRem(4)};
    margin: ${pxToRem(15)} 0 ${pxToRem(30)};
  }

  .TextWithSideImage__list{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .TextWithSideImage__item {
    margin-left: ${pxToRem(5 + bulletSize)};
    position: relative;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-left: ${pxToRem(10 + bulletSize)};
    }

    &::before {
      position: absolute;
      content: "";
      display: block;
      width: ${pxToRem(bulletSize)};
      height: ${pxToRem(bulletSize)};
      border-radius: 100%;
      top: calc(.8 * ${stepToRem(0)});
      left: ${pxToRem(-5 - bulletSize)};
      background-color: ${COLORS.font1};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        top: calc(.8 * ${stepToRem(1)});
        left: ${pxToRem(-10 - bulletSize)};
      }
      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        top: calc(.8 * ${stepToRem(2)});
      }
    }

    & + .TextWithSideImage__item {
      margin-top: ${pxToRem(20)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        margin-top: ${pxToRem(30)};
      }
    }
  }

  .TextWithSideImage__textCol{
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: 2;
    padding-top: ${pxToRem(30)};
    padding-bottom: ${pxToRem(30)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-top: ${pxToRem(40)};
      padding-bottom: ${pxToRem(40)};
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      order: 1;
      padding-top: ${pxToRem(100)};
      padding-bottom: ${pxToRem(100)};
    }
  }

  .TextWithSideImage__imageCol{
    order: 1;

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      order: 2;
    }
  }

  .TextWithSideImage__itemTitle{
    ${TYPOGRAPHY.fontStyles.bold}
    font-size: ${stepToRem(0)};
    margin: 0 0 ${pxToRem(5)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(1)};
    }
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      margin: 0 0 ${pxToRem(10)};
      font-size: ${stepToRem(2)};
    }
  }

  .TextWithSideImage__itemParagraph{
    margin: 0;
    line-height: 1.6;
    font-size: ${stepToRem(-2)};

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      font-size: ${stepToRem(-1)};
    }
  }
`

export const TextWithSideImage = () => (
  <StyledTextWithSideImage>
    <GridCol className="TextWithSideImage__imageCol" col-l={5} offset-l={1}>
      <picture className="TextWithSideImage__image">
        <source
          media={`(min-width: ${pxToRem(ScreenConfig.L.min)})`}
          srcSet="https://source.unsplash.com/random/600x1200?kitten"
        />
        <source
          media={`(min-width: ${pxToRem(ScreenConfig.S.min)})`}
          srcSet="https://source.unsplash.com/random/800x600?kitten"
        />
        <img src="https://source.unsplash.com/random/800x600?kitten" alt="" />
      </picture>
    </GridCol>
    <GridCol
      className="TextWithSideImage__textCol"
      col-s={10}
      offset-s={1}
      col-l={5}
    >
      <Title tag="h2" modifier="quaternary" margin={false}>
        C’est quoi
        <br /> KissKissBankBank ?
      </Title>
      <HorizontalStroke className="TextWithSideImage__horizontalStroke" />
      <ul className="TextWithSideImage__list">
        <li className="TextWithSideImage__item">
          <p className="TextWithSideImage__itemTitle">
            22 000 initiatives positives ont vu le jour grâce au crowdfunding.
          </p>
          <p className="TextWithSideImage__itemParagraph">
            Vous avez un projet créatif, associatif ou entrepreneurial ? Toute
            notre équipe vous accompagne vers la réussite de votre campagne de
            financement participatif et au-delà : préparation, communication,
            événementiel... Déjà 22 000 projets impactants déjà financés sur
            KissKissBankBank.
          </p>
        </li>
        <li className="TextWithSideImage__item">
          <p className="TextWithSideImage__itemTitle">
            Des dizaines de partenaires soutiennent les projets des causes qui
            leur sont chères.
          </p>
          <p className="TextWithSideImage__itemParagraph">
            Vous êtes une marque ou un acteur engagé ? Nous vous proposons de
            porter haut les couleurs de votre engagement. Ensemble, imaginons
            des dispositifs pour faire rayonner vos valeurs et propulser les
            talents de demain.
          </p>
        </li>
        <li className="TextWithSideImage__item">
          <p className="TextWithSideImage__itemTitle">
            Une communauté composée de 1&nbsp;829&nbsp;120 citoyens positifs.
          </p>
          <p className="TextWithSideImage__itemParagraph">
            Nous pensons que financer ensemble des projets a un impact positif
            sur notre vie et celle des autres. Aujourd’hui, vous êtes déjà 1 829
            120 citoyens engagés à partager cet avis. Chaque jour, vous soutenez
            les porteurs de projet qui partagent vos valeurs et les causes qui
            vous tiennent à coeur.
          </p>
        </li>
      </ul>
    </GridCol>
  </StyledTextWithSideImage>
)
