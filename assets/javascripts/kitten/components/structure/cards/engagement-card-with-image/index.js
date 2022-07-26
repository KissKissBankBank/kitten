import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../../typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  :focus-visible {
    border-top-left-radius: var(--border-radius-xl);
    border-top-right-radius: var(--border-radius-xl);
    outline: auto;
  }
`

const StyledCard = styled.div`
  border-radius: var(--border-radius-xl);
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
  href,
  as,
  imageHeight,
  imgProps,
  textProps,
  ...others
}) => {
  return (
    <StyledContainer {...others} as={href ? 'a' : 'div'} href={href}>
      <StyledCard>
        <StyledImage
          src={backgroundImage}
          alt=""
          imageHeight={imageHeight}
          {...imgProps}
        />
      </StyledCard>
      <StyledText
        size="micro"
        weight="500"
        color="font1"
        decoration="none"
        lineHeight="normal"
        {...textProps}
      >
        {children}
      </StyledText>
    </StyledContainer>
  )
}

EngagementCardWithImage.propTypes = {
  href: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  imageHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imgProps: PropTypes.object,
  textProps: PropTypes.object,
}

EngagementCardWithImage.defaultProps = {
  href: '',
  imageHeight: '',
}
