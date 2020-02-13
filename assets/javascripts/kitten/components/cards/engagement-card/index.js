import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

const borderStyle = css`
  box-shadow: 0 0 0 ${pxToRem(3)} ${COLORS.background1},
    0 0 0 ${pxToRem(6)} ${({ hoverBorder }) => hoverBorder};
`

const StyledCard = styled.div`
  border-radius: ${pxToRem(15)};
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-image: url(${({ imageSrc }) => imageSrc});
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-size: contain;
  padding: ${pxToRem(10)};

  ${({ as }) =>
    (as === 'a' || as === 'button') &&
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
  position: absolute;
  text-align: center;
  bottom: 5%;
  right: ${pxToRem(10)};
  left: ${pxToRem(10)};
  line-height: 1.2;
`

export const EngagementCard = ({
  imageSrc,
  backgroundColor,
  href,
  children,
  hoverBorder,
  isActive,
  ...others
}) => {
  return (
    <StyledCard
      {...others}
      as={href ? 'a' : 'div'}
      href={href}
      imageSrc={imageSrc}
      backgroundColor={backgroundColor}
      hoverBorder={hoverBorder}
      isActive={isActive}
    >
      <StyledText size="micro" weight="regular" color="font1">
        {children}
      </StyledText>
    </StyledCard>
  )
}

EngagementCard.propTypes = {
  imageSrc: PropTypes.string,
  href: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverBorder: PropTypes.string,
  isActive: PropTypes.bool,
}

EngagementCard.defaultProps = {
  imageSrc: '',
  href: '',
  backgroundColor: '',
  hoverBorder: '',
  isActive: false,
}
