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
import { mediaQueries } from '../../../../../hoc/media-queries'

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
        margin-bottom: ${pxToRem(40)};
      }

      :last-child {
        margin-bottom: 0;

        @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
          margin-bottom: ${pxToRem(10)};
        }

        @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
          margin-bottom: ${pxToRem(20)};
        }
    `}
`

const StyledImageContainer = styled(GridCol)`
  padding: 0;

  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      padding-right: ${pxToRem(7.5)};

      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        padding-right: ${pxToRem(10)};
      }

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        padding-right: ${pxToRem(15)};
      }
    `}
`

const StyledDescription = styled(GridCol)`
  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      align-self: center;
      padding-right: 0;
      padding-left: ${pxToRem(7.5)};

      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        padding-left: ${pxToRem(10)};
      }

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        padding-left: ${pxToRem(15)};
      }
    `}
`

const StyledTitle = styled(Title)`
  margin: ${pxToRem(10)} 0;
  font-size: ${stepToRem(1)};
  line-height: 1.2;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    font-size: ${stepToRem(2)};
    margin: ${pxToRem(15)} 0;
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    font-size: ${stepToRem(4)};
  }

  ${({ horizontalCard }) =>
    horizontalCard &&
    css`
      margin: ${pxToRem(10)} 0;
      font-size: ${stepToRem(-1)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        font-size: ${stepToRem(1)};
        margin: ${pxToRem(10)} 0;
      }

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        font-size: ${stepToRem(2)};
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
      display: none;

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        font-size: ${stepToRem(-1)};
        margin-top: ${pxToRem(10)};
        display: block;
      }
    `}
`

const StyledProgress = styled.div`
  display: flex;
`
const StyledProgressRing = styled.div`
  display: flex;
  margin-left: ${pxToRem(-2)};
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

const CardBase = ({
  imageProps,
  title,
  text,
  horizontalCard,
  overtimeProgress,
  successProgress,
  viewportIsXSOrLess,
  ...props
}) => {
  return (
    <StyledCard horizontalCard={horizontalCard} {...props}>
      <StyledImageContainer
        col={horizontalCard ? 6 : 0}
        horizontalCard={horizontalCard}
      >
        <StyledImage {...imageProps} horizontalCard={horizontalCard} />
      </StyledImageContainer>
      <StyledDescription
        col={horizontalCard ? 6 : 0}
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
          <StyledProgressRing>
            <ProgressRing
              value={75}
              width={viewportIsXSOrLess ? 24 : 28}
              strokeWidth={4}
              color={COLORS.primary1}
            />
            <StyledProgressText size="micro" color="font1" weight="regular">
              Financé à 50%
            </StyledProgressText>
          </StyledProgressRing>
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
        >
          {text}
        </StyledText>

      </StyledDescription>
    </StyledCard>
  )
}

CardBase.propTypes = {
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

CardBase.defaultProps = {
  horizontalCard: false,
}

export const Card = mediaQueries(CardBase, {
  viewportIsXSOrLess: true,
})
