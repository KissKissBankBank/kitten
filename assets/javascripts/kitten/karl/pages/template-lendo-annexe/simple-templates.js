import React from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Button } from '../../../components/buttons/button'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { Title } from '../../../components/typography/title'
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke'
import { parseHtml } from '../../../helpers/utils/parser'
import { titleModifiers } from '../../../components/typography/common/title-modifier-styles'

const buttonMargin = 10

const StyledSimpleTemplate = styled.div`
  .k-page-SimpleTemplate__header {
    background-image: url(${({ headerImage }) => headerImage && headerImage});
    background-size: cover;
    margin-bottom: ${pxToRem(50)};
    padding-top: ${pxToRem(200)};
    padding-bottom: ${pxToRem(200)};

    @media (min-width: ${pxToRem(
        ScreenConfig.S.min,
      )}) and (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      padding-top: ${pxToRem(230)};
      padding-bottom: ${pxToRem(230)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-bottom: ${pxToRem(80)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      margin-bottom: ${pxToRem(100)};
    }
  }

  .k-page-SimpleTemplate__header__title {
    color: ${COLORS.background1};
    font-size: ${stepToRem(titleModifiers[2].fontStepOnMobile)};
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(titleModifiers[2].fontStepOnDesktop)};
    }
  }

  .k-page-SimpleTemplate__centerBlock {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }

  .k-page-SimpleTemplate__horizontalStroke {
    width: ${pxToRem(50)};
    margin-top: ${pxToRem(20)};
    background: ${COLORS.background1};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      width: ${pxToRem(80)};
    }
  }

  .k-page-SimpleTemplate__buttonContainer {
    display: flex;
    margin-top: ${pxToRem(40 - buttonMargin)};
    margin-bottom: ${pxToRem(50 - buttonMargin)};
    margin-left: ${pxToRem(-buttonMargin)};
    margin-right: ${pxToRem(-buttonMargin)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-top: ${pxToRem(50 - buttonMargin)};
      margin-bottom: ${pxToRem(80 - buttonMargin)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      flex-direction: column;
      margin-left: 0;
      margin-right: 0;
    }
  }

  .k-page-SimpleTemplate__button {
    margin: ${pxToRem(buttonMargin)};

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      margin-left: 0;
      margin-right: 0;
    }
  }
`

export const SimpleTemplate = ({ header, children }) => (
  <StyledSimpleTemplate headerImage={header && header.background}>
    <header className="k-page-SimpleTemplate__header">
      <Container>
        <Grid>
          <GridCol
            col-l="6"
            offset-l="3"
            col-s="10"
            offset-s="1"
            className="k-page-SimpleTemplate__centerBlock"
          >
            <Title
              tag="h1"
              margin={false}
              className="k-page-SimpleTemplate__header__title"
            >
              {parseHtml(header.title)}
            </Title>
            <HorizontalStroke
              className="k-page-SimpleTemplate__horizontalStroke"
              size="huge"
            />
          </GridCol>
        </Grid>
      </Container>
    </header>

    <Container>
      <Grid>
        <GridCol col-l="6" offset-l="3" col-s="10" offset-s="1">
          {children}
          <div className="k-page-SimpleTemplate__buttonContainer">
            <Button
              tag="a"
              size="big"
              modifier="hydrogen"
              href="#"
              className="k-page-SimpleTemplate__button"
            >
              Comment emprunter
            </Button>

            <Button
              tag="a"
              size="big"
              modifier="helium"
              href="#"
              className="k-page-SimpleTemplate__button"
            >
              Je dépose ma demande
            </Button>
          </div>
        </GridCol>
      </Grid>
    </Container>
  </StyledSimpleTemplate>
)
