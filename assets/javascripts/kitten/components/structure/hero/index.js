import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container } from '../../layout/container'
import { Grid, GridCol } from '../../layout/grid'
import { mq } from '../../../constants/screen-config'
import {
  NUM_COLUMNS,
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
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

    @media ${mq.mobileAndTablet} {
      padding: ${pxToRem(100)} ${pxToRem(85)};
    }
    @media ${mq.mobile} {
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

    @media ${mq.mobileAndTablet} {
      width: calc(100% + ${pxToRem(CONTAINER_PADDING * 2)});
      height: 100vw;
      margin-left: ${pxToRem(-CONTAINER_PADDING)};
    }

    @media ${mq.mobile} {
      width: calc(100% + ${pxToRem(CONTAINER_PADDING_THIN * 2)});
      margin-left: ${pxToRem(-CONTAINER_PADDING_THIN)};
    }
  }

  &.k-Hero--direction-left {
    .k-Hero__contentGridCol {
      @media ${mq.mobileAndTablet} {
        padding-top: ${(8 / NUM_COLUMNS) * 100 + 'vw'};
        margin-left: 0;
      }
    }

    .k-Hero__content {
      @media ${mq.mobile} {
        margin-left: ${pxToRem(-CONTAINER_PADDING_THIN)};
      }
    }

    .k-Hero__imageGridCol {
      @media ${mq.mobileAndTablet} {
        margin-left: -${(10 / NUM_COLUMNS) * 100 + '%'};
        padding-bottom: 0;
      }
      @media ${mq.mobile} {
        margin-left: -100%;
      }
    }
  }

  &.k-Hero--direction-right {
    .k-Hero__contentGridCol {
      margin-left: ${(5 / NUM_COLUMNS) * 100 + '%'};

      @media ${mq.mobileAndTablet} {
        padding-top: ${(8 / NUM_COLUMNS) * 100 + 'vw'};
        margin-left: ${(2 / NUM_COLUMNS) * 100 + '%'};
      }
      @media ${mq.mobile} {
        margin-left: 0;
      }
    }

    .k-Hero__content {
      @media ${mq.mobile} {
        margin-right: ${pxToRem(-CONTAINER_PADDING_THIN)};
      }
    }

    .k-Hero__imageGridCol {
      margin-left: -${(11 / NUM_COLUMNS) * 100 + '%'};

      @media ${mq.mobileAndTablet} {
        margin-left: -${(12 / NUM_COLUMNS) * 100 + '%'};
      }
      @media ${mq.mobile} {
        margin-left: -100%;
      }
    }

    .k-Hero__image {
      margin-left: ${pxToRem(-CONTAINER_PADDING / 2)};
    }
  }

  &.k-Hero--small {
    @media ${mq.desktop} {
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
  small,
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
      { 'k-Hero--small': small },
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
  small: PropTypes.bool,
  imageSrc: PropTypes.string,
  contentBackgroundColor: PropTypes.string,
  contentColor: PropTypes.string,
}

Hero.defaultProps = {
  direction: 'left',
  small: false,
  imageSrc: '',
  contentBackgroundColor: COLORS.font1,
  contentColor: COLORS.background1,
}
