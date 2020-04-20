import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../../components/grid/container'
import { Title } from '../../../../components/typography/title'
import { Paragraph } from '../../../../components/typography/paragraph'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { CONTAINER_PADDING } from '../../../../constants/grid-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'
 import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'

const portraitImageRatio = 50 / 67
const bulletSize = 4

const StyledGrid = styled(Grid)`
  align-items: stretch;

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    min-height: ${pxToRem(900)};
  }
`

const StyledImage = styled.picture`
  display: block;
  position: relative;

  @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
    padding-top: calc(100% * ${portraitImageRatio});
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    height: 100%;
    margin-right: ${pxToRem(- CONTAINER_PADDING)};
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const StyledHorizontalStroke = styled(HorizontalStroke)`
  width: ${pxToRem(30)};
  height: ${pxToRem(4)};
  margin: ${pxToRem(15)} 0 ${pxToRem(30)};
`

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const StyledItem = styled.li`
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

  & + & {
    margin-top: ${pxToRem(20)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-top: ${pxToRem(30)};
    }
  }
`

const StyledTextCol = styled(GridCol)`
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
`
const StyledImageCol = styled(GridCol)`
  order: 1;

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    order: 2;
  }
`

const StyledItemTitle = styled.p`
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
`
const StyledItemParagraph = styled.p`
  margin: 0;
  line-height: 1.6;
  font-size: ${stepToRem(-2)};

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    font-size: ${stepToRem(-1)};
  }
`

const TextWithSideImage = () => (
  <Container as="section">
    <StyledGrid>
      <StyledImageCol col-l={5} offset-l={1}>
        <StyledImage>
          <source
            media={`(min-width: ${pxToRem(ScreenConfig.L.min)})`}
            srcSet="https://source.unsplash.com/random/600x1200?kitten"
          />
          <source
            media={`(min-width: ${pxToRem(ScreenConfig.S.min)})`}
            srcSet="https://source.unsplash.com/random/800x600?kitten"
          />
          <img src="https://source.unsplash.com/random/800x600?kitten" alt="" />
        </StyledImage>
      </StyledImageCol>
      <StyledTextCol col-s={10} offset-s={1} col-l={5}>
        <Title tag="h2" modifier="quaternary" margin={false}>
          C’est quoi<br /> KissKissBankBank ?
        </Title>
        <StyledHorizontalStroke />
        <StyledList>
          <StyledItem>
            <StyledItemTitle>
              22 000 initiatives positives ont vu le jour grâce au crowdfunding.
            </StyledItemTitle>
            <StyledItemParagraph>
              Vous avez un projet créatif, associatif ou entrepreneurial ? Toute notre équipe vous accompagne vers la réussite de votre campagne de financement participatif et au-delà : préparation, communication, événementiel... Déjà 22 000 projets impactants déjà financés sur KissKissBankBank.
            </StyledItemParagraph>
          </StyledItem>
          <StyledItem>
            <StyledItemTitle>
              Des dizaines de partenaires soutiennent les projets des causes qui leur sont chères.
            </StyledItemTitle>
            <StyledItemParagraph>
              Vous êtes une marque ou un acteur engagé ? Nous vous proposons de porter haut les couleurs de votre engagement. Ensemble, imaginons des dispositifs pour faire rayonner vos valeurs et propulser les talents de demain.
            </StyledItemParagraph>
          </StyledItem>
          <StyledItem>
            <StyledItemTitle>
              Une communauté composée de 1&nbsp;829&nbsp;120 citoyens positifs.
            </StyledItemTitle>
            <StyledItemParagraph>
              Nous pensons que financer ensemble des projets a un impact positif sur notre vie et celle des autres. Aujourd’hui, vous êtes déjà 1 829 120 citoyens engagés à partager cet avis. Chaque jour, vous soutenez les porteurs de projet qui partagent vos valeurs et les causes qui vous tiennent à coeur.
            </StyledItemParagraph>
          </StyledItem>
        </StyledList>
      </StyledTextCol>
    </StyledGrid>
  </Container>
)

export default TextWithSideImage
