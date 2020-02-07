import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledCard = styled.div`
  border: solid transparent;
  border-radius: ${pxToRem(15)};
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-image: url(${({ imageSrc }) => imageSrc});
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-size: contain;
  padding: ${pxToRem(10)};

  ${({ as, onClick }) =>
    (as === 'a' || onClick) &&
    css`
      cursor: pointer;

      :hover {
        box-shadow:
          0 0 0 3px white,
          0 0 0 6px ${({ borderHover }) => borderHover};
    `}
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
  borderHover,
  ...others
}) => {
  return (
    <StyledCard
      {...others}
      as={href ? 'a' : 'div'}
      href={href}
      imageSrc={imageSrc}
      backgroundColor={backgroundColor}
      borderHover={borderHover}
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
  borderHover: PropTypes.string,
}

EngagementCard.defaultProps = {
  imageSrc: '',
  href: '',
  backgroundColor: '',
  borderHover: '',
}
