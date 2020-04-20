import React, {useEffect, useRef} from 'react'
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
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Button } from '../../../../components/buttons/button/button'
import { cssPropertyDistributor } from '../../../../helpers/dom/css-property-distributor'
import domElementHelper from '../../../../helpers/dom/element-helper'

const paddingPlusGutters = (2 * CONTAINER_PADDING) + (11 * GUTTER)
const oneGridCol = `calc((100vw - ${pxToRem(paddingPlusGutters)}) / 12)`
const oneGridColXl = `${pxToRem((CONTAINER_MAX_WIDTH - paddingPlusGutters) / 12)}`

const StyledSection = styled.div`
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
    margin: 0 calc(${oneGridCol} + ${pxToRem(GUTTER)});
  }
  @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
    margin: 0 calc(${oneGridColXl} + ${pxToRem(GUTTER)});
  }
`
const StyledContent = styled.div`
  margin: 0 ${pxToRem(30)};

  text-align: center;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    padding: 0 ${pxToRem(GUTTER)};
    margin: 0 ${pxToRem(oneGridCol)};
  }
  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    padding: 0 ${pxToRem(2 * GUTTER)};
    margin: 0 calc(2 * ${oneGridCol});
  }
  @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
    margin: 0 calc(2 * ${oneGridColXl});
  }
`

const StyledHorizontalStroke = styled(HorizontalStroke)`
  width: ${pxToRem(30)};
  height: ${pxToRem(4)};

  margin: ${pxToRem(15)} auto ${pxToRem(30)};
`

const StyledParagraph = styled(Paragraph)`
  margin-bottom: ${pxToRem(40)};

  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    margin-bottom: ${pxToRem(30)};
    font-size: ${stepToRem(-2)};
  }
`

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    flex-direction: column-reverse;
  }

  & > :last-child {
    margin: 0 0 ${pxToRem(GUTTER)} 0;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin: 0 0 0 ${pxToRem(GUTTER)};
    }
  }
`

const StyledButtonWidthSetter = styled.span`
  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    width: 100% !important;
  }
`

const StyledButton = styled(Button)`
  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    width: 100%;
  }
`

export const DialogWithPictureBorder = () => {
  const button_1 = useRef(null)
  const button_2 = useRef(null)

  useEffect(() => {
    if (domElementHelper.canUseDom() && typeof document !== 'undefined') {
      document.fonts.ready.then(() => cssPropertyDistributor({
        elements: [button_1.current, button_2.current],
        property: 'width',
        direction: 'max',
      })
    )}
  }, [])

  return (
    <StyledSection>
      <StyledCard>
        <StyledContent>
          <Title modifier="quaternary" tag="h2" margin={false}>
            L’idée, c’est de se lancer !
          </Title>
          <StyledHorizontalStroke />
          <StyledParagraph className="k-u-margin-none" modifier="quaternary">
            Citoyenneté, optimiste et indépendance. Créé en 2009, KissKissBankBank, pionnier du financement participatif en France, reste fidèle à ses trois valeurs fondamentales. Notre ambition ? Permettre à toutes et tous de financer ses projets créatifs, associatifs et entrepreneuriaux. Depuis 10 ans, la force du collectif libère la créativité et le crowdfunding est devenu une fabrique à optimisme.
          </StyledParagraph>
          <StyledButtonContainer>
            <StyledButtonWidthSetter ref={button_1}>
              <Button modifier="hydrogen" big fluid>
                Lancez votre projet
              </Button></StyledButtonWidthSetter>
            <StyledButtonWidthSetter ref={button_2}>
              <Button modifier="helium" big fluid>
                Découvrez nos valeurs
              </Button></StyledButtonWidthSetter>
          </StyledButtonContainer>
        </StyledContent>
      </StyledCard>
    </StyledSection>
)}
