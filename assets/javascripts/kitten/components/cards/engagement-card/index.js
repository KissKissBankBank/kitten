import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledCard = styled.div`
  border: solid transparent;
  border-radius: ${pxToRem(15)};
  position: relative;
  overflow: hidden;
  width: ${pxToRem(100)};
  height: ${pxToRem(130)};
  background-image: url(${({ imageSrc }) => imageSrc});
  padding: ${pxToRem(10)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    width: ${pxToRem(110)};
    height: ${pxToRem(150)};
  }
`

const StyledText = styled(Text)`
  position: absolute;
  text-align: center;
  bottom: 5%;
  line-height: 1.2;
`

export const EngagementCard = ({ imageSrc, children, href, ...others }) => {
  return (
    <StyledCard
      {...others}
      as={href ? 'a' : 'div'}
      href={href}
      imageSrc={imageSrc}
    >
      <StyledText size="micro" weight="regular" color="font1">
        {children}
      </StyledText>
    </StyledCard>
  )
}

EngagementCard.propTypes = {
  children: PropTypes.string,
  imageSrc: PropTypes.string,
  href: PropTypes.string,
}

EngagementCard.defaultProps = {
  children: 'Autoproduction culturelle',
  imageSrc: '',
  href: '',
}
