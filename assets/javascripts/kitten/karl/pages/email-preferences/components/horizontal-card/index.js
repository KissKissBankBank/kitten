import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../../constants/screen-config'
import COLORS from '../../../../../constants/colors-config'

const HorizontalCard = styled.div`
  max-width: 100%;
  display: grid;
  padding: ${pxToRem(30)} 0;

  grid-gap: ${pxToRem(20)} ${pxToRem(40)};

  grid-template-columns: ${pxToRem(136)} auto;
  grid-template-rows: auto;

  grid-template-areas:
    'hc-image hc-action'
    'hc-text  hc-text';

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    grid-template-columns: ${pxToRem(157)} repeat(2, auto);
    grid-template-areas: 'hc-image hc-text hc-action';
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    grid-template-columns: ${pxToRem(200)} 1fr auto;
  }

  & + & {
    border-top: ${pxToRem(2)} solid ${COLORS.line1};
  }
`

const Image = styled.div`
  grid-area: hc-image;
`

const Action = styled.div`
  grid-area: hc-action;
  align-self: center;
  justify-self: end;
`

const TextContent = styled.div`
  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    max-width: ${pxToRem(606)};
  }
`

const Text = props => (
  <div>
    <TextContent {...props} />
  </div>
)

HorizontalCard.Image = Image
HorizontalCard.Text = Text
HorizontalCard.Action = Action

export default HorizontalCard
