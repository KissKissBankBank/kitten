import React from 'react'
import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { containerStyles, titleStyles } from './styles'
import {
  AdaptableGrid as Grid,
  AdaptableGridCol as GridCol,
} from '../../../../components/grid/adaptable-grid'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledTitle = styled.h2`
  ${titleStyles}
`
const StyledContainer = styled.div`
  ${containerStyles}
`

const StyledLastName = styled.span`
  ${TYPOGRAPHY.fontStyles.regular}
  text-transform: uppercase;
`
const StyledLink = styled.a`
  ${TYPOGRAPHY.fontStyles.regular}
  display: inline-block;
  text-decoration: none;
  color: ${COLORS.primary1};
  margin-top: ${pxToRem(6)};

  &:hover {
    color: ${COLORS.primary3};
  }

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    margin-top: ${pxToRem(10)};
  }
`

export const Contributor = ({
  firstName,
  lastName,
  email,
  address,
  hasMultipleContributions,
}) => {
  return (
    <section>
      <StyledTitle>Contributeur</StyledTitle>

      <StyledContainer>
        <Grid colNumber={2}>
          <GridCol col={2} col-m={1}>
            {firstName}
            <br />
            <StyledLastName>{lastName}</StyledLastName>
            <br />
            <StyledLink href={`mailto:${email}`}>{email}</StyledLink>
          </GridCol>
          <GridCol col={2} col-m={1}>
            <strong>Adresse</strong>
            <br />
            {address}
          </GridCol>
        </Grid>
      </StyledContainer>
    </section>
  )
}
