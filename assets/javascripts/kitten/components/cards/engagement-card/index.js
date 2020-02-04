import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { Text } from '../../../components/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledCard = styled.div`
  border: solid transparent;
  border-radius: ${pxToRem(15)};
  position: relative;
  overflow: hidden;
  width: ${pxToRem(102)};
  height: ${pxToRem(130)};
  background-image: url(${({ imageSrc }) => imageSrc});
  background-repeat: no-repeat;
  cursor: pointer;

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    width: ${pxToRem(111)};
    height: ${pxToRem(150)};
  }
`

const StyledText = styled(Text)`
  position: absolute;
  text-align: center;
  bottom 5%;
  line-height: 1.2;
`

export const EngagementCard = ({
  title,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  categorie,
  colorText,
  ...others
}) => {
  return (
    <StyledCard imageSrc={imageSrc} {...others}>
      <StyledText size="micro" weight="normal" color={colorText}>
        {categorie}
      </StyledText>
    </StyledCard>
  )
}

EngagementCard.propTypes = {
  categorie: PropTypes.string,
  colorText: PropTypes.oneOf(['font1', 'background1']),
  imageSrc: PropTypes.string,
}

EngagementCard.defaultProps = {
  categorie: 'Autoproduction culturelle',
  colorText: 'font1',
  imageSrc: 'https://via.placeholder.com/150',
}
