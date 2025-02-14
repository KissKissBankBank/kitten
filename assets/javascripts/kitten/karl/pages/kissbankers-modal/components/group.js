import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem, TYPOGRAPHY, ScreenConfig } from 'kitten'
import { containerStyles, titleStyles } from './styles'
import {
  AdaptableGrid as Grid,
  AdaptableGridCol as GridCol,
} from '../../../../components/layout/adaptable-grid'

const StyledContainer = styled.article`
  ${containerStyles}
`
const Title = styled.h2`
  ${titleStyles}
`

const StyledCardDescription = styled.h3`
  margin: 0;
  ${TYPOGRAPHY.fontStyles['400']}
  font-size: 1.125em;
`

const StyledStrong = styled.strong`
  display: inline-block;
  margin-top: ${pxToRem(15)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    margin-top: ${pxToRem(20)};
  }
`

const Card = ({ description, option, deliveryDate, quantity, price }) => {
  return (
    <StyledContainer>
      <StyledCardDescription>{description}</StyledCardDescription>

      {option && (
        <>
          <StyledStrong>Option</StyledStrong>
          <br />
          {option}
        </>
      )}

      <Grid colNumber={6}>
        <GridCol col={6} col-m={2}>
          <StyledStrong>Date de livraison</StyledStrong>
          <br />
          {deliveryDate ? (
            <>
              {deliveryDate.getDate()}/{deliveryDate.getMonth()}/
              {deliveryDate.getFullYear()}
            </>
          ) : (
            <>-</>
          )}
        </GridCol>
        <GridCol col={2} col-m={1}>
          <StyledStrong>Quantité</StyledStrong>
          <br />
          {quantity}
        </GridCol>
        <GridCol col={4} col-m={3}>
          <StyledStrong>Prix</StyledStrong>
          <br />
          {price}&nbsp;€
        </GridCol>
      </Grid>
    </StyledContainer>
  )
}

export class ContributionGroup extends PureComponent {
  static Title = Title
  static Card = Card

  render() {
    return <section {...this.props} />
  }
}

Card.defaultProps = {
  description: '',
  quantity: 0,
  price: 0,
}
Card.propTypes = {
  description: PropTypes.string,
  option: PropTypes.string,
  deliveryDate: PropTypes.instanceOf(Date),
  quantity: PropTypes.number,
  price: PropTypes.number,
}
