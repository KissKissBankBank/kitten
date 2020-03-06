import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

const borderStyle = css`
  box-shadow: inset 0 0 0 ${pxToRem(3)} ${({ hoverBorder }) => hoverBorder},
    inset 0 0 0 ${pxToRem(6)} ${COLORS.background1};
`

const StyledCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: ${pxToRem(15)};
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-size: contain;
  padding: ${pxToRem(16)};
  text-decoration: none;
  box-shadow: inset 0 0 0 ${pxToRem(6)} ${COLORS.background1};

  ${({ href }) =>
    href &&
    css`
      :hover,
      :active,
      :focus {
        ${borderStyle}
      }
    `}

  ${({ isActive }) => isActive && borderStyle}
`

const StyledText = styled(Text)`
  text-align: center;
  right: ${pxToRem(16)};
  left: ${pxToRem(16)};
  line-height: 1.2;
`

const StyledIcon = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  height: 100%;
`

export const EngagementCard = ({
  icon,
  backgroundColor,
  href,
  children,
  hoverBorder,
  isActive,
  as,
  ...others
}) => {
  return (
    <StyledCard
      {...others}
      as={href ? 'a' : 'div'}
      href={href}
      backgroundColor={backgroundColor}
      hoverBorder={hoverBorder}
      isActive={isActive}
    >
      <StyledIcon>{icon}</StyledIcon>
      <StyledText size="micro" weight="regular" color="font1">
        {children}
      </StyledText>
    </StyledCard>
  )
}

EngagementCard.propTypes = {
  icon: PropTypes.element.isRequired,
  href: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverBorder: PropTypes.string,
  isActive: PropTypes.bool,
}

EngagementCard.defaultProps = {
  href: '',
  backgroundColor: '',
  hoverBorder: '',
  isActive: false,
}
