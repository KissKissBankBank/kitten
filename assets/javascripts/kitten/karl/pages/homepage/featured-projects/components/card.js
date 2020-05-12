import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../../helpers/utils/typography'
import { Title } from '../../../../../components/typography/title'
import { Text } from '../../../../../components/typography/text'
import { ScreenConfig } from '../../../../../constants/screen-config'
import { GridCol } from '../../../../../components/grid/grid'
import { ProgressRing } from '../../../../../components/meters/progress-ring'
import COLORS from '../../../../../constants/colors-config'
import { CheckedIcon } from '../../../../../components/icons/checked-icon'
import { RocketCircleIcon } from '../../../../../components/icons/rocket-circle-icon'
import { mediaQueries } from '../../../../../hoc/media-queries'
import classNames from 'classnames'

const StyledCard = styled.div`
  margin-bottom: ${pxToRem(30)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    margin-bottom: ${pxToRem(40)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    margin-bottom: 0;
  }

  .FeaturedProjects__card__imageCol {
    padding: 0;
  }

  .FeaturedProjects__card__image {
    margin-bottom: ${pxToRem(20)};
    display: block;
    width: 100%;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-bottom: ${pxToRem(30)};
    }
  }

  .FeaturedProjects__card__title {
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
  }

  .FeaturedProjects__card__text {
    font-size: ${stepToRem(-1)};
    margin-top: ${pxToRem(10)};
    margin-bottom: ${pxToRem(0)};
    line-height: 1.5;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      font-size: ${stepToRem(0)};
      margin-top: ${pxToRem(15)};
    }
  }

  .FeaturedProjects__card__progress {
    display: flex;
    align-items: center;
  }

  .FeaturedProjects__card__progressRing {
    margin-left: ${pxToRem(-2)};
  }

  .FeaturedProjects__card__checkedCircleIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    border-radius: 100%;
    background-color: ${COLORS.valid};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      width: ${pxToRem(24)};
      height: ${pxToRem(24)};
    }
  }

  /* if Card isHorizontal */

  &.FeaturedProjects__card--isHorizontal {
    display: flex;
    align-items: center;
    margin-bottom: ${pxToRem(20)};

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      margin-bottom: ${pxToRem(30)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      margin-bottom: ${pxToRem(40)};
    }

    &:last-child {
      margin-bottom: 0;

      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        margin-bottom: ${pxToRem(10)};
      }

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        margin-bottom: ${pxToRem(20)};
      }
    }

    .FeaturedProjects__card__imageCol {
      padding-right: ${pxToRem(7.5)};

      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        padding-right: ${pxToRem(10)};
      }

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        padding-right: ${pxToRem(15)};
      }
    }

    .FeaturedProjects__card__image {
      margin-bottom: ${pxToRem(0)};
      margin-right: ${pxToRem(30)};

      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        margin-bottom: ${pxToRem(0)};
      }

      :last-child {
        margin-bottom: 0;
      }
    }

    .FeaturedProjects__card__descriptionCol {
      padding-right: 0;
      padding-left: ${pxToRem(7.5)};

      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        padding-left: ${pxToRem(10)};
      }

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        padding-left: ${pxToRem(15)};
      }
    }

    .FeaturedProjects__card__title {
      font-size: ${stepToRem(-1)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        font-size: ${stepToRem(1)};
        margin: ${pxToRem(10)} 0;
      }

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        font-size: ${stepToRem(2)};
      }
    }

    .FeaturedProjects__card__text {
      display: none;

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        font-size: ${stepToRem(-1)};
        margin-top: ${pxToRem(10)};
        display: block;
      }
    }
  }
`

const SuccessProgressIcon = () => (
  <div className="FeaturedProjects__card__checkedCircleIcon" aria-hidden>
    <CheckedIcon />
  </div>
)

const OvertimeProgressIcon = () => (
  <RocketCircleIcon aria-hidden style={{ alignSelf: 'center' }} />
)

const CardBase = ({
  imageProps,
  title,
  text,
  horizontalCard,
  overtimeProgress,
  successProgress,
  viewportIsXSOrLess,
  className,
  ...props
}) => {
  return (
    <StyledCard
      className={classNames('FeaturedProjects__card', className, {
        'FeaturedProjects__card--isHorizontal': horizontalCard,
      })}
      {...props}
    >
      <GridCol
        className="FeaturedProjects__card__imageCol"
        col={horizontalCard ? 6 : 0}
        col-s={horizontalCard ? 5 : 0}
        col-l={horizontalCard ? 6 : 0}
      >
        <img
          alt=""
          {...imageProps}
          className={classNames(
            'FeaturedProjects__card__image',
            imageProps.className,
          )}
        />
      </GridCol>
      <GridCol
        className="FeaturedProjects__card__descriptionCol"
        col={horizontalCard ? 6 : 0}
        col-s={horizontalCard ? 7 : 0}
        col-l={horizontalCard ? 6 : 0}
      >
        {overtimeProgress && (
          <div className="FeaturedProjects__card__progress">
            <OvertimeProgressIcon />
            <Text
              className="k-u-align-center k-u-margin-left-single"
              size="micro"
              color="font1"
              weight="regular"
            >
              Financé à 135 %
            </Text>
          </div>
        )}

        {successProgress && (
          <div className="FeaturedProjects__card__progress">
            <SuccessProgressIcon />
            <Text
              className="k-u-align-center k-u-margin-left-single"
              size="micro"
              color="font1"
              weight="regular"
            >
              Projet réussi !
            </Text>
          </div>
        )}

        {!overtimeProgress && !successProgress && (
          <div className="FeaturedProjects__card__progress FeaturedProjects__card__progressRing">
            <ProgressRing
              value={75}
              width={viewportIsXSOrLess ? 24 : 28}
              strokeWidth={4}
              color={COLORS.primary1}
              style={{ alignSelf: 'center' }}
            />
            <Text
              className="k-u-align-center k-u-margin-left-single"
              size="micro"
              color="font1"
              weight="regular"
            >
              Financé à 50%
            </Text>
          </div>
        )}

        <Title
          margin={0}
          className="FeaturedProjects__card__title"
          tag="h4"
          modifier="septenary"
        >
          {title}
        </Title>

        <Text className="FeaturedProjects__card__text" tag="p" color="font1">
          {text}
        </Text>
      </GridCol>
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
