import React from 'react'
import styled from 'styled-components'
import { CheckedCircleIcon } from '../../../../components/icons/checked-circle-icon'
import { WarningCircleIcon } from '../../../../components/icons/warning-circle-icon'
import { CrossCircleIcon } from '../../../../components/icons/cross-circle-icon'
import { FlashCircleIcon } from '../../../../components/icons/flash-circle-icon'
import { LockIcon } from '../../../../components/icons/lock-icon'
import COLORS from '../../../../constants/colors-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'

const StateContainer = styled.span`
  display: flex;
  align-items: center;
  color: ${COLORS.background1};
  font-size: ${stepToRem(-2)};
  font-weight: 500;

  svg {
    margin-right: ${pxToRem(10)};
  }
`

const DefaultedState = () => (
  <StateContainer>
    <WarningCircleIcon
      circleColor={COLORS.error}
      warningColor={COLORS.background1}
    />
    Défaut de paiement
  </StateContainer>
)

const EligibleState = () => (
  <StateContainer>
    <FlashCircleIcon
      circleColor={COLORS.primary1}
      flashColor={COLORS.background1}
    />
    Éligible
  </StateContainer>
)

const FailedState = () => (
  <StateContainer>
    <CrossCircleIcon
      circleColor={COLORS.font2}
      crossColor={COLORS.background1}
    />
    Projet échoué
  </StateContainer>
)

const FraudulentState = () => (
  <StateContainer>
    <WarningCircleIcon
      circleColor={COLORS.error}
      warningColor={COLORS.background1}
    />
    Projet Frauduleux
  </StateContainer>
)

const InvestedState = () => (
  <StateContainer>
    <CheckedCircleIcon
      circleColor={COLORS.primary1}
      checkedColor={COLORS.background1}
    />
    500&nbsp;€ investis
  </StateContainer>
)

const InvestedReimbursingState = () => (
  <StateContainer>
    <CheckedCircleIcon
      circleColor={COLORS.valid}
      checkedColor={COLORS.background1}
    />
    500&nbsp;€ investis
  </StateContainer>
)

const PostponedState = () => (
  <StateContainer>
    <WarningCircleIcon
      circleColor={COLORS.orange}
      warningColor={COLORS.background1}
    />
    Retard de paiement
  </StateContainer>
)

const ReimbursedState = () => (
  <StateContainer>
    <CheckedCircleIcon
      circleColor={COLORS.valid}
      checkedColor={COLORS.background1}
    />
    Remboursé
  </StateContainer>
)

const RestrictedState = () => (
  <StateContainer>
    <LockIcon />
    Réservé
  </StateContainer>
)

export const STATE_CHOICES = {
  None: null,
  Defaulted: <DefaultedState />,
  Eligible: <EligibleState />,
  Failed: <FailedState />,
  Fraudulent: <FraudulentState />,
  Invested: <InvestedState />,
  InvestedReimbursing: <InvestedReimbursingState />,
  Postponed: <PostponedState />,
  Reimbursed: <ReimbursedState />,
  Restricted: <RestrictedState />,
}
