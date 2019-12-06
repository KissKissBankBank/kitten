import React from 'react'
import PropTypes from 'prop-types'
import { IconBadge } from '../../../components/notifications/icon-badge'
import { DiamondIcon } from '../../../components/icons/diamond-icon'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import styled, { css } from 'styled-components'

const StyledBase = styled.div`
  display: flex;
  line-height: 1rem;
  align-items: center;
  margin-bottom: ${pxToRem(20)};

  & > * + * {
    margin-left: ${pxToRem(10)};
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      color: ${COLORS.font2};
      cursor: not-allowed;
    `}
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledDiamondIcon = styled(DiamondIcon)`
  height: ${pxToRem(22)};
  width: ${pxToRem(18)};
`

export const RewardCardDiamondBadge = ({ children, disabled }) => {
  return (
    <StyledBase isDisabled={disabled}>
      <IconBadge big disabled={disabled}>
        <StyledDiamondIcon className="k-IconBadge__svg" aria-hidden />
      </IconBadge>
      <StyledContent>{children}</StyledContent>
    </StyledBase>
  )
}

RewardCardDiamondBadge.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
}

RewardCardDiamondBadge.defaultProps = {
  disabled: false,
  children: null,
}
