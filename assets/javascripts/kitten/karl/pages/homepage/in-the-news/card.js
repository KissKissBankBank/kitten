import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import { ScreenConfig } from '../../../../constants/screen-config'
import { Grid, GridCol } from '../../../../components/grid/grid'

const StyledCard = styled.div`
  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      display: flex;
      margin-bottom: ${pxToRem(50)};

      :last-child {
        margin-bottom: 0;
      }
    `}
`

const StyledImageContainer = styled(GridCol)`
  paddin-right: 0;
  padding-left: 0;
`

const StyledParagraph = styled(GridCol)`
  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      display: block;
      align-self: center;
    `}
`

const StyledTitle = styled(Text)`
  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(15)};
  font-size: ${stepToRem(4)};

  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      margin: ${pxToRem(10)} 0;
      font-size: ${stepToRem(2)};
    `}
`

const StyledText = styled(Text)`
  font-size: ${stepToRem(0)};
  margin-top: ${pxToRem(15)};

  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      margin-top: ${pxToRem(10)};
      font-size: ${stepToRem(-1)};
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

  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      margin-bottom: ${pxToRem(0)};
      margin-right: ${pxToRem(30)};

      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        margin-bottom: ${pxToRem(0)};
      }
    `}
`

const Card = ({ imageProps, title, text, horizontalCard, ...props }) => {
  return (
    <StyledCard horizontalCard={horizontalCard} {...props}>
      <StyledImageContainer col={horizontalCard ? 5 : 0}>
        <StyledImage {...imageProps} horizontalCard={horizontalCard} />
      </StyledImageContainer>
      <StyledParagraph
        col={horizontalCard ? 7 : 0}
        horizontalCard={horizontalCard}
      >
        <StyledTitle
          tag="p"
          color="font1"
          weight="bold"
          horizontalCard={horizontalCard}
        >
          {title}
        </StyledTitle>
        <StyledText tag="p" color="font1" horizontalCard={horizontalCard}>
          {text}
        </StyledText>
      </StyledParagraph>
    </StyledCard>
  )
}

Card.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  horizontalCard: PropTypes.bool,
}

Card.defaultProps = {
  horizontalCard: false,
}

export default Card
