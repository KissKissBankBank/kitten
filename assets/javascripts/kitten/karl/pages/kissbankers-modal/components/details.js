import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { containerStyles, titleStyles } from './styles'
import TYPOGRAPHY from '../../../../constants/typography-config'

const StyledTitle = styled.h2`
  ${titleStyles}
`
const StyledContainer = styled.div`
  ${containerStyles}
`

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & li {
    display: flex;
    justify-content: space-between;
    margin-top: ${pxToRem(10)};

    & span,
    & strong {
      flex: 0 0 auto;
    }
  }

  & li:first-child {
    font-size: ${stepToRem(0)};
    margin: 0 0 ${pxToRem(20)};
  }
`

export const ContributionDetails = ({
  overallTotal,
  rewardsTotal,
  donation,
  petitPlus,
  fdp,
}) => {
  return (
    <section>
      <StyledTitle>Détails contribution</StyledTitle>

      <StyledContainer>
        <StyledList>
          <li>
            <strong>Contreparties</strong>{' '}
            <strong>{overallTotal}&nbsp;€</strong>
          </li>
          <li>
            <span>Total</span> <span>{rewardsTotal}&nbsp;€</span>
          </li>
          <li>
            <span>Don sans contrepartie</span> <span>{donation}&nbsp;€</span>
          </li>
          <li>
            <span>Petit plus</span> <span>{petitPlus}&nbsp;€</span>
          </li>
          <li>
            <span>Frais de port</span> <span>{fdp}&nbsp;€</span>
          </li>
        </StyledList>
      </StyledContainer>
    </section>
  )
}

ContributionDetails.defaultProps = {
  overallTotal: 0,
  rewardsTotal: 0,
  donation: 0,
  petitPlus: 0,
  fdp: 0,
}
ContributionDetails.propTypes = {
  overallTotal: PropTypes.number,
  rewardsTotal: PropTypes.number,
  donation: PropTypes.number,
  petitPlus: PropTypes.number,
  fdp: PropTypes.number,
}
