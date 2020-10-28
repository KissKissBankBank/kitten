import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

const StyledCard = styled.div`
  border-radius: ${pxToRem(15)};
  overflow: hidden;
`

const StyledImage = styled.img`
  height: ${({ imageHeight }) => pxToRem(imageHeight)};
  display: block;
  transition: transform 0.4s ease;
  object-fit: cover;
  width: 100%;

  :hover,
  :focus {
    transform: scale(1.05);
  }
`

const StyledText = styled(Text)`
  margin-top: ${pxToRem(10)};
  text-align: center;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-top: ${pxToRem(15)};
  }
`

export const EngagementCardWithImage = ({
  backgroundImage,
  children,
  isActive,
  href,
  as,
  imageHeight,
  ...others
}) => {
  return (
    <StyledContainer
        {...others}
        as={href ? 'a' : 'div'}
        href={href}
        isActive={isActive}
      >
      <StyledCard>
        <StyledImage
          src={backgroundImage}
          alt=""
          imageHeight={imageHeight}
        />
      </StyledCard>
      <StyledText
        size="micro"
        weight="regular"
        color="font1"
        decoration="none"
        lineHeight="normal"
      >
        {children}
      </StyledText>
    </StyledContainer>
  )
}

EngagementCardWithImage.propTypes = {
  href: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  imageHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

EngagementCardWithImage.defaultProps = {
  href: '',
  isActive: false,
  imageHeight: '',
}
