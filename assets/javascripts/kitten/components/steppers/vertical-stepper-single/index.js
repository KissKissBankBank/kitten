import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import Title from './components/title'
import COLORS from '../../../constants/colors-config'

const StyledNav = styled.nav`
  position: relative;
  padding: ${pxToRem(1)} 0;

  .k-VerticalStepperSingle {
    margin: 0;
    padding: 0;
  
    list-style: none;
  
    :before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: ${pxToRem(14)};
      z-index: -1;
  
      content: '';
      border-left: 2px dashed ${COLORS.line1};
    }
  }
`

export const VerticalStepperSingle = ({ children }) => {
  return (
    <StyledNav>
      <ul className="k-VerticalStepperSingle" role="tablist">
        <li>
          <Title>Etape 1
            <span>Décrivez-nous votre projet</span>
          </Title>
        </li>
      </ul>
    </StyledNav>
  )
}
