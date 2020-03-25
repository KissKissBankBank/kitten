import React from 'react'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledCard = styled.div`
  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      display: flex;
    `}
`

const StyledImage = styled.img`
  margin-bottom: ${pxToRem(20)};
  display: block;
  width: 100%;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-bottom: ${pxToRem(30)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    margin-bottom: ${pxToRem(35)};
  }
`

const Card = ({ imgSrc, title, text, horizontalCard, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledImage alt="" src={imgSrc} />
      <Title modifier="senary" color="font1" margin={false}>
        {title}
      </Title>
      <Text tag="p" size="default" color="font1">
        {text}
      </Text>
    </StyledCard>
  )
}

export default Card
