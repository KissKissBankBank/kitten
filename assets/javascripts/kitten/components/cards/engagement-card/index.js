import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

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
  padding: ${pxToRem(5)};
  text-decoration: none;
  border-color: ${COLORS.background1};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    padding: ${pxToRem(10)};
  }
`

const StyledText = styled(Text)`
  text-align: center;
  right: ${pxToRem(10)};
  left: ${pxToRem(10)};
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
