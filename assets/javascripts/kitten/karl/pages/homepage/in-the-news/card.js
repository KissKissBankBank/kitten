import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import { ScreenConfig } from '../../../../constants/screen-config'
import { Grid, GridCol } from '../../../../components/grid/grid'

const StyledCard = styled.div`
  margin-bottom: ${pxToRem(30)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    margin-bottom: ${pxToRem(40)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    margin-bottom: 0;
  }

  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      display: flex;
      margin-bottom: ${pxToRem(20)};

      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        margin-bottom: ${pxToRem(30)};
      }

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        margin-bottom: ${pxToRem(50)};
      }

      :last-child {
        margin-bottom: 0;
      }
    `}
`

const StyledImageContainer = styled(GridCol)`
  padding: 0;
`

const StyledDescription = styled(GridCol)`
  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      display: block;
      align-self: center;
      padding-right: 0;
      padding-left: ${pxToRem(15)};

      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        padding-left: ${pxToRem(20)};
      }

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        padding-left: ${pxToRem(30)};
      }
    `}
`

const StyledTitle = styled(Text)`
  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(15)};
  font-size: ${stepToRem(2)};
  line-height: 1.2;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    font-size: ${stepToRem(4)};
  }

  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      margin: ${pxToRem(10)} 0;
      font-size: ${stepToRem(-1)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        font-size: ${stepToRem(2)};
      }
    `}
`

const StyledText = styled(Text)`
  font-size: ${stepToRem(0)};
  margin-top: ${pxToRem(15)};
  margin-bottom: ${pxToRem(0)};
  line-height: 1.5;

  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      margin-top: ${pxToRem(10)};
      font-size: ${stepToRem(-1)};

      @media (max-width: ${pxToRem(ScreenConfig.S.max)}) {
        display: none;
      }
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
      <StyledDescription
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
      </StyledDescription>
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
