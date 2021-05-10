import React, { Component } from 'react'
import styled from 'styled-components'

import { pxToRem } from '../../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../../constants/screen-config'
import COLORS from '../../../../../constants/colors-config'

import { GridCol } from '../../../../../components/structure/grid'
import { Marger } from '../../../../../components/structure/marger'

import { Text } from '../../../../../components/atoms/typography/text'

const FlexTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: ${ScreenConfig.XXS.max}px) {
    flex-direction: column;
  }
`

const PageTitle = styled.h1`
  line-height: ${pxToRem(43)};
  font-size: ${pxToRem(36)};
  font-weight: bold;
  color: ${COLORS.text1};

  @media screen and (max-width: ${ScreenConfig.XXS.max}px) {
    text-align: center;
    line-height: ${pxToRem(29)};
    font-size: ${pxToRem(24)};
  }
`

const PageIntroText = styled(Text)`
  font-size: ${pxToRem(14)};
  @media screen and (min-width: ${ScreenConfig.XS.min}px) {
    font-size: ${pxToRem(16)};
  }
`

const RocketIllustration = () => (
  /* Utiliser le composant KissKiss:
    import { LiftOff } from 'kiss/common/components/images/lift-off'
  */
  <svg
    width="95"
    height="95"
    viewBox="0 0 95 95"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="47.5" cy="47.5" r="47.5" fill="#83dafc" />
  </svg>
)

export class ThanksHeader extends Component {
  render() {
    return (
      <GridCol offset-xs="0" col-m="9" offset-m="1" col-l="6" offset-l="3">
        <FlexTitleContainer>
          <RocketIllustration />
          <PageTitle
            className="
            k-u-margin-top-double
            k-u-margin-top-none@m-up
            k-u-margin-left-none
            k-u-margin-left-quadruple@m-up
          "
          >
            Bravo, grâce à vous
            <br />
            la collecte progresse&nbsp;!
          </PageTitle>
        </FlexTitleContainer>
        <Marger top="3" bottom="4">
          <PageIntroText>
            Vos contreparties seront délivrées par le créateur quand la collecte
            sera réussie.
            <br />
            Vous pourrez également lui demander un reçu de don.
          </PageIntroText>
        </Marger>
      </GridCol>
    )
  }
}
