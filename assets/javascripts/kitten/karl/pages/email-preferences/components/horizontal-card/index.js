import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../../constants/screen-config'
import COLORS from '../../../../../constants/colors-config'

const HorizontalCard = styled.div`
  max-width: 100%;
  display: grid;
  padding: ${pxToRem(30)} 0;

  grid-gap: ${pxToRem(20)} ${pxToRem(40)};

  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;

  grid-template-areas:
    'hc-image hc-action'
    'hc-text  hc-text';

  -ms-grid-columns: auto ${pxToRem(40)} auto;
  -ms-grid-rows: auto ${pxToRem(20)} auto;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    grid-template-columns: repeat(3, auto);
    grid-template-areas: 'hc-image hc-text hc-action';

    -ms-grid-columns: auto ${pxToRem(40)} 1fr ${pxToRem(40)} auto;
    -ms-grid-rows: auto;
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    grid-template-columns: auto minmax(${pxToRem(606)}, 1fr) auto;
  }

  /* IE 11 */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    display: -ms-grid;
  }

  & + & {
    border-top: ${pxToRem(2)} solid ${COLORS.line1};
  }
`

const Image = styled.div`
  grid-area: hc-image;

  -ms-grid-row: 1;
  -ms-grid-column: 1;

  width: ${pxToRem(136)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    width: ${pxToRem(157)};
  }
  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    width: ${pxToRem(200)};
  }
`

const TextContainer = styled.div`
  grid-area: hc-text;

  -ms-grid-row: 3;
  -ms-grid-column: 1;
  -ms-grid-column-span: 3;
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    -ms-grid-row: 1;
    -ms-grid-column: 3;
    -ms-grid-column-span: 1;
  }
`

const Action = styled.div`
  grid-area: hc-action;
  align-self: center;
  justify-self: end;

  -ms-grid-row: 1;
  -ms-grid-column: 3;
  -ms-grid-row-align: center;
  -ms-grid-column-align: end;
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    -ms-grid-column: 5;
  }
`
const TextContent = styled.div`
  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    max-width: ${pxToRem(606)};
  }
`

const Text = props => (
  <TextContainer>
    <TextContent {...props} />
  </TextContainer>
)

HorizontalCard.Image = Image
HorizontalCard.Text = Text
HorizontalCard.Action = Action

export default HorizontalCard
