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
import { withMediaQueries } from '../../hoc/media-queries'

const StyledContainer = styled.div`
  flex: 1;
  background-color: ${COLORS.font1};
  padding: ${pxToRem(40)};
  color: ${COLORS.background1};
  font-size: ${stepToRem(-1)};
  ${TYPOGRAPHY.fontStyles.regular};
  text-align: center;

  display: none;
  grid-template-columns: 2% 15% 15% 10% 10% 10% 25% 12%;
  grid-template-rows: 100% auto;

  @media (min-width: ${ScreenConfig.S.min}px) {
    display: grid;
  }
`

const StyledCheckbox = styled(Checkbox)`
  display: block;
  margin: 0;
`

const List = styled.div`
  display: block;
`

const HeaderBoard = props => (
  <Container>
    <StyledContainer role="rowgroup">
      <StyledCheckbox id="checkbox" />
      <div role="columnheader">Countribution</div>
      <div role="columnheader">Contributeur</div>
      <div role="columnheader">Message(s)</div>
      <div role="columnheader">Montant</div>
      <div role="columnheader">Statut de paiement</div>
      <div role="columnheader">Mode de livraison</div>
      <div role="columnheader">Statut de livraison</div>
    </StyledContainer>

    {viewportIsSOrLess && (
      <StyledContainer role="rowgroup">
        <StyledCheckbox id="checkbox" children="" />
        <List role="rowgroup">Countribution</List>
        <List role="rowgroup">Contributeur</List>
        <List role="rowgroup">Message(s)</List>
        <List role="rowgroup">Montant</List>
        <List role="rowgroup">Statut de paiement</List>
        <List role="rowgroup">Mode de livraison</List>
        <List role="rowgroup">Statut de livraison</List>
      </StyledContainer>
    )}
  </Container>
)

export default HeaderBoard
