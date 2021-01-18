import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { TitleWithStroke } from '../../../../components/typography/title-with-stroke'
import { Paragraph } from '../../../../components/typography/paragraph'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import {
  CONTAINER_MAX_WIDTH,
  GUTTER,
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../../constants/grid-config'
import { Button } from '../../../../components/buttons/button'
import { cssPropertyDistributor } from '../../../../helpers/dom/css-property-distributor'
import domElementHelper from '../../../../helpers/dom/element-helper'

const paddingPlusGutters = 2 * CONTAINER_PADDING + 11 * GUTTER
const oneGridCol = `calc((100vw - ${pxToRem(paddingPlusGutters)}) / 12)`
const oneGridColXl = `${pxToRem(
  (CONTAINER_MAX_WIDTH - paddingPlusGutters) / 12,
)}`

const StyledDialogWithPictureBorder = styled.div`
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

  .DialogWithPictureBorder__card {
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
  }

  .DialogWithPictureBorder__content {
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
  }

  .DialogWithPictureBorder__paragraph {
    margin-bottom: ${pxToRem(40)};

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      margin-bottom: ${pxToRem(30)};
      font-size: ${stepToRem(-2)};
    }
  }

  .DialogWithPictureBorder__buttonContainer {
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
  }

  .DialogWithPictureBorder__buttonWidthSetter {
    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      width: 100% !important;
    }
  }
`

export const DialogWithPictureBorder = () => {
  const button_1 = useRef(null)
  const button_2 = useRef(null)

  useEffect(() => {
    if (domElementHelper.canUseDom() && typeof document !== 'undefined') {
      document.fonts.ready.then(() =>
        cssPropertyDistributor({
          elements: [button_1.current, button_2.current],
          property: 'width',
          direction: 'max',
        }),
      )
    }
  }, [])

  return (
    <StyledDialogWithPictureBorder className="DialogWithPictureBorder">
      <div className="DialogWithPictureBorder__card">
        <div className="DialogWithPictureBorder__content">
          <TitleWithStroke modifier="quaternary" tag="h2" align="center">
            L’idée, c’est de se lancer !
          </TitleWithStroke>
          <Paragraph
            className="DialogWithPictureBorder__paragraph k-u-margin-none"
            modifier="quaternary"
          >
            Citoyenneté, optimiste et indépendance. Créé en 2009,
            KissKissBankBank, pionnier du financement participatif en France,
            reste fidèle à ses trois valeurs fondamentales. Notre ambition ?
            Permettre à toutes et tous de financer ses projets créatifs,
            associatifs et entrepreneuriaux. Depuis 10 ans, la force du
            collectif libère la créativité et le crowdfunding est devenu une
            fabrique à optimisme.
          </Paragraph>
          <div className="DialogWithPictureBorder__buttonContainer">
            <span
              className="DialogWithPictureBorder__buttonWidthSetter"
              ref={button_1}
            >
              <Button modifier="hydrogen" big fluid>
                Lancez votre projet
              </Button>
            </span>
            <span
              className="DialogWithPictureBorder__buttonWidthSetter"
              ref={button_2}
            >
              <Button modifier="helium" big fluid>
                Découvrez nos valeurs
              </Button>
            </span>
          </div>
        </div>
      </div>
    </StyledDialogWithPictureBorder>
  )
}
