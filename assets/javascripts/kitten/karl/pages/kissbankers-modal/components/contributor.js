import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS, pxToRem, TYPOGRAPHY, ScreenConfig } from 'kitten'
import { containerStyles, titleStyles } from './styles'
import {
  AdaptableGrid as Grid,
  AdaptableGridCol as GridCol,
} from '../../../../components/layout/adaptable-grid'

const StyledTitle = styled.h2`
  ${titleStyles}
`
const StyledContainer = styled.div`
  ${containerStyles}
`

const StyledLastName = styled.span`
  ${TYPOGRAPHY.fontStyles['500']}
  text-transform: uppercase;
`
const StyledLink = styled.a`
  ${TYPOGRAPHY.fontStyles['500']}
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

const StyledStrong = styled.strong`
  display: inline-block;
  @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
    margin-top: ${pxToRem(15)};
  }
`

export const Contributor = ({ firstName, lastName, email, address }) => {
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
            <StyledStrong>Adresse</StyledStrong>
            <br />
            {address}
          </GridCol>
        </Grid>
      </StyledContainer>
    </section>
  )
}

Contributor.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
}
