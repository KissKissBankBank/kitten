import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../../constants/screen-config'
import COLORS from '../../../../../constants/colors-config'

const StyledContainer = styled.div`
  max-width: 100%;
  display: grid;
  padding: ${pxToRem(30)} 0;

  grid-gap: ${pxToRem(20)} ${pxToRem(40)};

  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;

  grid-template-areas:
    'hc-image hc-action'
    'hc-text  hc-text';

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    grid-template-columns: repeat(3, auto);
    grid-template-areas: 'hc-image hc-text hc-action';
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    grid-template-columns: auto minmax(${pxToRem(606)}, 1fr) auto;
  }

  & + & {
    border-top: ${pxToRem(2)} solid ${COLORS.line1};
  }
`

const Image = styled.div`
  grid-area: hc-image;

  width: ${pxToRem(136)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    width: ${pxToRem(157)};
  }
  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    width: ${pxToRem(200)};
  }
`
const Text = styled.div`
  grid-area: hc-text;

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    max-width: ${pxToRem(606)};
  }
`
const Action = styled.div`
  grid-area: hc-action;
  align-self: center;
  justify-self: end;
`

export default class HorizontalCard extends PureComponent {
  static Image = Image
  static Text = Text
  static Action = Action

  render() {
    return <StyledContainer {...this.props} />
  }
}
