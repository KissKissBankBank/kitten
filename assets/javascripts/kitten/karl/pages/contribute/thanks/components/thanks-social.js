import React from 'react'
import styled from 'styled-components'

import {
  pxToRem,
  ScreenConfig,
  GridCol,
  Marger,
  Text,
  Button,
  FacebookIconWithBackground,
  TwitterIcon,
  EmailIcon,
} from '../../../../..'

const FlexButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  a {
    display: block;
  }

  @media screen and (min-width: ${ScreenConfig.XS.min}px) {
    max-width: ${pxToRem(325)};
  }

  .k-Button__icon.noPadding {
    padding-left: 0;
  }
`

const PageSubTitles = styled(Text)`
  font-size: ${pxToRem(20)};
  margin: 0;
`

export const ThanksSocial = () => (
  <GridCol offset-xs="0" col-m="9" offset-m="1" col-l="5" offset-l="3">
    <Marger bottom="8">
      <Marger bottom="3">
        <PageSubTitles tag="h2" weight="bold">
          Faites connaître le projet
        </PageSubTitles>
      </Marger>
      <FlexButtonsContainer>
        <Marger bottom="2">
          <Button fit="icon" modifier="facebook" tag="a" iconWithMinWidth={true}>
            <FacebookIconWithBackground className="noPadding k-Button__icon k-Button__icon--facebook" />
            Partager sur Facebook
          </Button>
        </Marger>

        <Marger bottom="2">
          <Button
            fit="icon"
            size="big"
            modifier="twitter"
            tag="a"
            iconWithMinWidth={true}
          >
            <TwitterIcon className="noPadding k-Button__icon" />
            Partager sur Twitter
          </Button>
        </Marger>

        <Marger bottom="2">
          <Button
            fit="icon"
            modifier="lithium"
            size="big"
            tag="a"
            iconWithMinWidth={true}
          >
            <EmailIcon className="noPadding k-Button__icon" />
            Partager par email
          </Button>
        </Marger>
      </FlexButtonsContainer>
    </Marger>
  </GridCol>
)
