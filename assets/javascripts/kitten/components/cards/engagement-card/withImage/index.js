import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden'

const StyledCard = styled.div`
  border-radius: ${pxToRem(15)};
  cursor: pointer;
  overflow: hidden;
`

const StyledImage = styled.div`
  background-repeat: no-repeat;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: contain;
  transition: transform 0.3s ease;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`

const StyledText = styled(Text)`
  margin-top: ${pxToRem(10)};
  display: flex;
  justify-content: center;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-top: ${pxToRem(15)};
  }
`

export const EngagementCardWithImage = ({
  backgroundImage,
  children,
  isActive,
  href,
  accessibilityLabel,
  as,
  ...others
}) => {
  return (
    <>
      <StyledCard>
        <StyledImage
          {...others}
          as={href ? 'a' : 'div'}
          href={href}
          isActive={isActive}
          backgroundImage={backgroundImage}
        />
      </StyledCard>
      <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
      <StyledText size="micro" weight="regular" color="font1">
          {children}
      </StyledText>
    </>
  )
}

EngagementCardWithImage.propTypes = {
  href: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  /**
    Accessibility.
  */
  accessibilityLabel: PropTypes.string,
}

EngagementCardWithImage.defaultProps = {
  href: '',
  isActive: false,
  accessibilityLabel: '',
}
