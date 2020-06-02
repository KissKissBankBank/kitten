import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import { ScreenConfig } from '../../../constants/screen-config'
import {
  NUM_COLUMNS,
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from '../../../constants/grid-config'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import classNames from 'classnames'

const StyledHero = styled(
  ({ backgroundColor, color, backgroundImage, ...props }) => (
    <Container {...props} />
  ),
)`
  .k-Hero__contentGridCol {
    position: relative;
    z-index: 1;
    padding-top: ${(1 / NUM_COLUMNS) * 100 + 'vw'};
    margin-left: ${(1 / NUM_COLUMNS) * 100 + '%'};
  }

  .k-Hero__content {
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    padding: ${pxToRem(100)} ${pxToRem(115)};

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      padding: ${pxToRem(100)} ${pxToRem(85)};
    }
    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      padding: ${pxToRem(50)} ${pxToRem(20)};
    }
  }

  .k-Hero__imageGridCol {
    margin-left: -${(2 / NUM_COLUMNS) * 100 + '%'};
    padding-bottom: ${(1 / 2 / NUM_COLUMNS) * 100 + 'vw'};
  }

  .k-Hero__image {
    width: calc(100% + ${pxToRem(CONTAINER_PADDING)});
    height: 100%;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-color: ${({ backgroundColor }) => backgroundColor};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      width: calc(100% + ${pxToRem(CONTAINER_PADDING * 2)});
      height: 100vw;
      margin-left: ${pxToRem(-CONTAINER_PADDING)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      width: calc(100% + ${pxToRem(CONTAINER_PADDING_MOBILE * 2)});
      margin-left: ${pxToRem(-CONTAINER_PADDING_MOBILE)};
    }
  }

  &.k-Hero--direction-left {
    .k-Hero__contentGridCol {
      @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
        padding-top: ${(8 / NUM_COLUMNS) * 100 + 'vw'};
        margin-left: 0;
      }
    }

    .k-Hero__content {
      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        margin-left: ${pxToRem(-CONTAINER_PADDING_MOBILE)};
      }
    }

    .k-Hero__imageGridCol {
      @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
        margin-left: -${(10 / NUM_COLUMNS) * 100 + '%'};
        padding-bottom: 0;
      }
      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        margin-left: -100%;
      }
    }
  }

  &.k-Hero--direction-right {
    .k-Hero__contentGridCol {
      margin-left: ${(5 / NUM_COLUMNS) * 100 + '%'};

      @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
        padding-top: ${(8 / NUM_COLUMNS) * 100 + 'vw'};
        margin-left: ${(2 / NUM_COLUMNS) * 100 + '%'};
      }
      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        margin-left: 0;
      }
    }

    .k-Hero__content {
      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        margin-right: ${pxToRem(-CONTAINER_PADDING_MOBILE)};
      }
    }

    .k-Hero__imageGridCol {
      margin-left: -${(11 / NUM_COLUMNS) * 100 + '%'};

      @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
        margin-left: -${(12 / NUM_COLUMNS) * 100 + '%'};
      }
      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        margin-left: -100%;
      }
    }

    .k-Hero__image {
      margin-left: ${pxToRem(-CONTAINER_PADDING / 2)};
    }
  }

  &.k-Hero--tiny {
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      .k-Hero__contentGridCol {
        padding-bottom: ${(1 / 2 / NUM_COLUMNS) * 100 + 'vw'};
      }

      .k-Hero__imageGridCol {
        padding-bottom: 0;
      }
    }
  }
`

export const Hero = ({
  direction,
  tiny,
  imageSrc,
  contentBackgroundColor,
  contentColor,
  children,
  ...props
}) => (
  <StyledHero
    {...props}
    className={classNames(
      'k-Hero',
      props.className,
      `k-Hero--direction-${direction}`,
      {
        'k-Hero--tiny': tiny,
      },
    )}
    backgroundColor={contentBackgroundColor}
    color={contentColor}
    backgroundImage={imageSrc}
  >
    <Grid>
      <GridCol col="12" col-s="10" col-l="6" className="k-Hero__contentGridCol">
        <div className="k-Hero__content">{children}</div>
      </GridCol>

      <GridCol col="12" col-l="7" className="k-Hero__imageGridCol">
        <div className="k-Hero__image" />
      </GridCol>
    </Grid>
  </StyledHero>
)

Hero.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  tiny: PropTypes.bool,
  imageSrc: PropTypes.string,
  contentBackgroundColor: PropTypes.string,
  contentColor: PropTypes.string,
}

Hero.defaultProps = {
  direction: 'left',
  tiny: false,
  imageSrc: '',
  contentBackgroundColor: COLORS.font1,
  contentColor: COLORS.background1,
}
