import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../../../helpers/utils/typography'
import { Title } from '../../../../../components/typography/title'
import { Text } from '../../../../../components/typography/text'
import { ScreenConfig } from '../../../../../constants/screen-config'
import { GridCol } from '../../../../../components/grid/grid'
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

const CardBase = ({
  imageProps,
  title,
  text,
  horizontalCard,
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
}

CardBase.defaultProps = {
  horizontalCard: false,
}

export const Card = mediaQueries(CardBase, {
  viewportIsXSOrLess: true,
})
