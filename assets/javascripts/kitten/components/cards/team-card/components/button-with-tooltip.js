import React from 'react'
import PropTypes from 'prop-types'
import { ButtonIcon } from '../../../buttons/button-icon'
import { PhoneIcon } from '../../../icons/phone-icon'
import COLORS from '../../../../constants/colors-config'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'

const StyledTeamCardButtonWithTooltip = styled.a`
  position: relative;
  display: inline-block;

  .k-TeamCardButtonWithTooltip__tooltip {
    position: absolute;
    top: ${pxToRem(55)};
    padding: ${pxToRem(15)};
    margin-left: ${pxToRem(-50)};
    font-size: ${stepToRem(-1)};
    line-height: normal;
    font-weight: regular;
    color: ${COLORS.background1};
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s, visibility 0.2s;

    background-color: ${({ tooltipColor }) => tooltipColor};
    border: ${pxToRem(2)} solid ${({ tooltipColor }) => tooltipColor};
  }

  &:hover .k-TeamCardButtonWithTooltip__tooltip,
  &:focus .k-TeamCardButtonWithTooltip__tooltip {
    visibility: visible;
    opacity: 1;
  }

  .k-TeamCardButtonWithTooltip__tooltipArrow {
    position: absolute;
    left: 50%;
    bottom: 102%;
    height: 0;
    width: 0;
    margin-left: ${pxToRem(-8)};
    border-width: ${pxToRem(10)};
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: ${({ tooltipColor }) => tooltipColor};
    border-style: solid;
    pointer-events: none;
  }
`

export const TeamCardButtonWithTooltip = ({
  phoneNumber,
  tooltipColor,
  ...props
}) => (
  <StyledTeamCardButtonWithTooltip
    href={`tel:${phoneNumber}`}
    tooltipColor={tooltipColor}
    {...props}
  >
    <span className="k-TeamCardButtonWithTooltip__tooltip">
      {phoneNumber}
      <span className="k-TeamCardButtonWithTooltip__tooltipArrow" />
    </span>

    <ButtonIcon modifier="hydrogen" className="k-ButtonIcon--phone">
      <PhoneIcon className="k-ButtonIcon__svg" />
    </ButtonIcon>
  </StyledTeamCardButtonWithTooltip>
)

TeamCardButtonWithTooltip.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
}
