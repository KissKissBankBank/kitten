import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { pxToRem, stepToRem } from '../../../../../helpers/utils/typography'
import { Title } from '../../../../../components/typography/title'
import { Text } from '../../../../../components/typography/text'
import { ScreenConfig } from '../../../../../constants/screen-config'
import { Grid, GridCol } from '../../../../../components/grid/grid'
import { ProgressRing } from '../../../../../components/meters/progress-ring'
import COLORS from '../../../../../constants/colors-config'
import { CheckedCircleIcon } from '../../../../../components/icons/checked-circle-icon'
import { RocketCircleIcon } from '../../../../../components/icons/rocket-circle-icon'

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

const StyledTitle = styled(Title)`
  margin: ${pxToRem(10)} 0;
  font-size: ${stepToRem(1)};
  line-height: 1.2;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    font-size: ${stepToRem(4)};
    margin: ${pxToRem(15)} 0;
  }

  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      margin: ${pxToRem(10)} 0;
      font-size: ${stepToRem(-1)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        font-size: ${stepToRem(2)};
        margin: ${pxToRem(10)} 0;
      }
    `}
`

const StyledText = styled(Text)`
  font-size: ${stepToRem(-1)};
  margin-top: ${pxToRem(10)};
  margin-bottom: ${pxToRem(0)};
  line-height: 1.5;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    font-size: ${stepToRem(0)};
    margin-top: ${pxToRem(15)};
  }

  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        font-size: ${stepToRem(-1)};
        margin-top: ${pxToRem(10)};
      }
    `}
`

const StyledProgress = styled.div`
  display: flex;
`

const StyledProgressText = styled(Text)`
  margin-left: ${pxToRem(10)};
  align-self: center;
`

const StyledImage = styled.img`
  margin-bottom: ${pxToRem(20)};
  display: block;
  width: 100%;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-bottom: ${pxToRem(30)};
  }

  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      margin-bottom: ${pxToRem(0)};
      margin-right: ${pxToRem(30)};

      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        margin-bottom: ${pxToRem(0)};
      }

      :last-child {
        margin-bottom: 0;
      }
    `}
`

const StyledCheckedCircleIcon = styled(CheckedCircleIcon)`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    width: ${pxToRem(24)};
    height: ${pxToRem(24)};
  }
`

const SuccessProgressIcon = () => (
  <StyledCheckedCircleIcon
    aria-hidden
    circleColor={COLORS.valid}
    checkedColor={COLORS.background1}
  />
)

const OvertimeProgressIcon = () => (
  <RocketCircleIcon aria-hidden />
)

const Card = ({
  imageProps,
  title,
  text,
  horizontalCard,
  overtimeProgress,
  successProgress,
  ...props
}) => {
  return (
    <StyledCard horizontalCard={horizontalCard} {...props}>
      <StyledImageContainer col={horizontalCard ? 5 : 0}>
        <StyledImage {...imageProps} horizontalCard={horizontalCard} />
      </StyledImageContainer>
      <StyledDescription
        col={horizontalCard ? 7 : 0}
        horizontalCard={horizontalCard}
      >
      {overtimeProgress && (
        <StyledProgress>
          <OvertimeProgressIcon />
          <StyledProgressText size="micro" color="font1" weight="regular">
            Financé à 135 %
          </StyledProgressText>
        </StyledProgress>
      )}

      {successProgress && (
        <StyledProgress>
          <SuccessProgressIcon />
          <StyledProgressText size="micro" color="font1" weight="regular">
            Projet réussi !
          </StyledProgressText>
        </StyledProgress>
      )}

        {!overtimeProgress && !successProgress && (
          <StyledProgress>
            <ProgressRing
              value={75}
              width={24}
              strokeWidth={4}
              color={COLORS.primary2}
            />
            <StyledProgressText size="micro" color="font1" weight="regular">
              Financé à 50%
            </StyledProgressText>
          </StyledProgress>
        )}

        <StyledTitle
          tag="p"
          modifier="septenary"
          horizontalCard={horizontalCard}
        >
          {title}
        </StyledTitle>

        <StyledText
          tag="p"
          color="font1"
          horizontalCard={horizontalCard}
          className="k-u-hidden@xs-down"
        >
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
  overtimeProgress: PropTypes.bool,
  successProgress: PropTypes.bool,
}

Card.defaultProps = {
  horizontalCard: false,
}

export default Card
