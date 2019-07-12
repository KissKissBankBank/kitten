import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'
import { Text } from '../../../../components/typography/text'
import { Checkbox } from '../../../../components/form/checkbox'
import COLORS from '../../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledContainer = styled.div`
  flex: 1;
  background-color: ${COLORS.font1};
  padding: ${pxToRem(35)};
  color: ${COLORS.background1};
  font-size: ${stepToRem(-1)};
  ${TYPOGRAPHY.fontStyles.regular};

  display: none;
  grid-template-columns: repeat(auto-fill, 100%);
  grid-template-rows: 100% auto;

  &:nth-child(1) {
    grid-template-columns: repeat(auto-fill, 10%);
  }
  &:nth-child(2) {
    grid-template-columns: repeat(auto-fill, 10%);
  }
  &:nth-child(3) {
    grid-template-columns: repeat(auto-fill, 10%);
  }
  &:nth-child(4) {
    grid-template-columns: repeat(auto-fill, 10%);
  }
  &:nth-child(5) {
    grid-template-columns: repeat(auto-fill, 10%);
  }
  &:nth-child(6) {
    grid-template-columns: repeat(auto-fill, 10%);
  }
  &:nth-child(7) {
    grid-template-columns: repeat(auto-fill, 20%);
  }
  &:nth-child(8) {
    grid-template-columns: repeat(auto-fill, 20%);
  }

  @media (min-width: ${ScreenConfig.S.min}px) {
    display: grid;
  }
`

const StyledCheckbox = styled(Checkbox)`
  margin: 0;
`

const HeaderBoard = props => (
  <Container>
    <StyledContainer role="rowgroup">
      <StyledCheckbox id="checkbox" children="" />
      <div role="columnheader">Countribution</div>
      <div role="columnheader">Contributeur</div>
      <div role="columnheader">Message(s)</div>
      <div role="columnheader">Montant</div>
      <div role="columnheader">Statut de paiement</div>
      <div role="columnheader">Mode de livraison</div>
      <div role="columnheader">Statut de livraison</div>
    </StyledContainer>
  </Container>
)

export default HeaderBoard
