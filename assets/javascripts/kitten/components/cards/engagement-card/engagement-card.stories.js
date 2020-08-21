import React from 'react'
import styled from 'styled-components'
import { text, color } from '@storybook/addon-knobs'
import { EngagementCard } from './index'
import { Container } from '../../grid/container'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import { Marger } from '../../layout/marger'
import { KissKissBankBankIcon } from '../../../components/icons/kisskissbankbank-icon'
import { PhoneIllustration } from '../../../components/illustrations/phone-illustration'

const StyledEngagementCard = styled(EngagementCard)`
  display: flex;
  height: ${pxToRem(130)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    height: ${pxToRem(140)};
  }
`

const StyledContainer = styled(Container)`
  margin-top: ${pxToRem(20)};
  box-sizing: border-box;
`

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  overflow: hidden;

  li {
    position: relative;
  }

  :hover li,
  :active li {
    opacity: 0.5;
  }

  li:hover,
  li:active {
    opacity: 1;
  }
`

export const Default = () => (
  <StyledContainer>
    <Marger top="3">
      <StyledList>
        <li>
          <StyledEngagementCard
            isActive
            href="#"
            icon={<PhoneIllustration />}
            backgroundColor={(color, ('backgroundColor', '#caf4fe'))}
            hoverBorder={(color, ('hoverBorder', '#caf4fe'))}
          >
            {text('Categorie', 'Fabrication française')}
          </StyledEngagementCard>
        </li>
        <li>
          <StyledEngagementCard
            className="k-u-hidden@s-down--important"
            href="#"
            icon={<KissKissBankBankIcon height="25" />}
            backgroundColor={(color, ('backgroundColor', '#caf4fe'))}
            hoverBorder={(color, ('hoverBorder', '#caf4fe'))}
          >
            {text('Categorie 2', 'Education')}
          </StyledEngagementCard>
        </li>
        <li>
          <StyledEngagementCard
            className="k-u-hidden@s-down--important"
            href="#"
            icon={<KissKissBankBankIcon height="25" />}
            backgroundColor={(color, ('backgroundColor', '#caf4fe'))}
            hoverBorder={(color, ('hoverBorder', '#caf4fe'))}
          >
            {text('Categorie 3', 'Bio')}
          </StyledEngagementCard>
        </li>
      </StyledList>
    </Marger>
  </StyledContainer>
)
