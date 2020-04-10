import React from 'react'
import styled from 'styled-components'
import { Title } from '../../../../components/typography/title'
import { Paragraph } from '../../../../components/typography/paragraph'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import {
  CONTAINER_MAX_WIDTH,
  GUTTER,
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../../constants/grid-config'

const oneGridCol = `calc((100vw - (2 * ${pxToRem(CONTAINER_PADDING)})) / 12)`
const oneGridColThin = `calc((100vw - (2 * ${pxToRem(CONTAINER_PADDING_THIN)})) / 12)`
const oneGridColXl = `${pxToRem(CONTAINER_MAX_WIDTH / 12)}`

const StyledSection = styled.section`
  background-color: #ffebe0;
  padding-top: ${pxToRem(50)};
  padding-bottom: ${pxToRem(50)};

  max-width: ${pxToRem(CONTAINER_MAX_WIDTH - 2 * CONTAINER_PADDING)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    padding-top: ${pxToRem(100)};
    padding-bottom: ${pxToRem(100)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    margin: 0 ${pxToRem(CONTAINER_PADDING)};
  }
  @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
    margin: 0 auto;
  }
`

const StyledCard = styled.div`
  background-color: white;
  padding-top: ${pxToRem(50)};
  padding-bottom: ${pxToRem(50)};

  margin: 0 ${pxToRem(CONTAINER_PADDING_THIN)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    padding-top: ${pxToRem(80)};
    padding-bottom: ${pxToRem(80)};

    margin: 0 ${pxToRem(CONTAINER_PADDING)};
  }
  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    margin: 0 ${oneGridCol};
  }
  @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
    margin: 0 ${oneGridColXl};
  }
`
const StyledContent = styled.div`
  padding: 0 ${pxToRem(GUTTER / 2)};
  margin: 0 ${oneGridColThin};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin: 0 ${pxToRem(oneGridCol)};
  }
  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    margin: 0 calc(2 * ${oneGridCol});
  }
  @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
    margin: 0 calc(2 * ${oneGridColXl});
  }

`


const DialogWithPictureBorder = () => (
  <StyledSection>
    <StyledCard>
      <StyledContent>
        <Title>L’idée, c’est de se lancer !</Title>
        <Paragraph>
          Citoyenneté, optimiste et indépendance. Créé en 2009, KissKissBankBank, pionnier du financement participatif en France, reste fidèle à ses trois valeurs fondamentales. Notre ambition ? Permettre à toutes et tous de financer ses projets créatifs, associatifs et entrepreneuriaux. Depuis 10 ans, la force du collectif libère la créativité et le crowdfunding est devenu une fabrique à optimisme.
        </Paragraph>
      </StyledContent>
    </StyledCard>
  </StyledSection>
)

export default DialogWithPictureBorder
