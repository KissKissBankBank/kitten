import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import { Progress } from '../../../feedback/progress'
import { Text } from '../../../typography/text'

const StyledCard = styled.a`
  border: var(--border-width) solid transparent;
  background-color: ${COLORS.background1};
  box-sizing: border-box;
  height: ${pxToRem(70)};
  width: 100%;
  padding: ${pxToRem(4)};

  display: grid;
  gap: ${pxToRem(5)} ${pxToRem(10)};
  grid-template-columns: ${pxToRem(100)} ${pxToRem(110)} 1fr;
  grid-template-rows: auto repeat(2, 1fr);

  text-decoration: none;
  color: ${COLORS.font1};
  /* Border Radius should Image border radius (4) plus padding plus border. */
  border-radius: calc(${pxToRem(4 + 4)} + var(--border-width));

  transition: background-color 0.2s ease, border-color 0.2s ease;

  &[href]:hover {
    border-color: var(--color-grey-400);
    background-color: ${COLORS.background2};
  }

  &[href]:active {
    border-color: var(--color-grey-500);
    background-color: ${COLORS.background3};
  }

  &[href]:focus-visible {
    outline: auto;
  }

  .k-HorizontalProjectCard__imageWrapper {
    grid-column: 1 / span 1;
    grid-row: 1 / span 3;

    img {
      width: ${pxToRem(100)};
      height: ${pxToRem(60)};
      object-fit: cover;
      object-position: center;
      border-radius: var(--border-radius-xs);
    }
  }
  .k-HorizontalProjectCard__title {
    grid-column: 2 / span 2;
    grid-row: 1 / 2;
    margin: 0;
    line-height: 1.2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .k-HorizontalProjectCard__description {
    grid-column: 2 / span 2;
    grid-row: 2 / 3;
    margin: 0;
    line-height: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .k-HorizontalProjectCard__info {
    grid-column: 2 / span 1;
    grid-row: 3 / 4;
  }
  .k-HorizontalProjectCard__progress {
    grid-column: 3 / span 1;
    grid-row: 3 / 4;
    place-self: center stretch;

    display: flex;
    gap: ${pxToRem(5)};
    align-items: center;

    .k-HorizontalProjectCard__progress__ramp {
      flex: 1 0 calc(100% - ${pxToRem(5 + 46)});
    }
    .k-HorizontalProjectCard__progress__value {
      flex: 0 0 ${pxToRem(46)};
      width: ${pxToRem(46)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.XXS.max)}) {
      display: none;
    }
  }

  &.k-HorizontalProjectCard--noBottomLine {
    grid-template-rows: repeat(2, 1fr);

    .k-HorizontalProjectCard__imageWrapper {
      grid-row: 1 / span 2;
    }

    .k-HorizontalProjectCard__title {
      align-self: end;
    }
  }

  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    &.k-HorizontalProjectCard--noProgressOnMobile {
      .k-HorizontalProjectCard__progress {
        display: none;
      }
      .k-HorizontalProjectCard__info {
        grid-column: 2 / span 2;
      }
    }
  }
`

export const HorizontalProjectCard = ({
  href = '#',
  imageProps = {
    src: '',
    alt: '',
  },
  title = '',
  titleTag = 'h3',
  description = '',
  info = null,
  progress = 0,
  progressColor = COLORS.primary1,
  className,
  noProgressOnMobile = false,
  noProgress = false,
  progressLabel = 'progression',
  ...props
}) => {
  return (
    <StyledCard
      href={href}
      className={classNames('k-HorizontalProjectCard', className, {
        'k-HorizontalProjectCard--noProgressOnMobile': noProgressOnMobile,
        'k-HorizontalProjectCard--noBottomLine': !info && noProgress,
      })}
      {...props}
    >
      <div className="k-HorizontalProjectCard__imageWrapper">
        <img {...imageProps} alt={imageProps.alt || ''} />
      </div>
      <Text
        weight="500"
        size="small"
        as={titleTag}
        className="k-HorizontalProjectCard__title"
      >
        {title}
      </Text>
      <Text
        as="p"
        weight="400"
        size="micro"
        className="k-HorizontalProjectCard__description"
      >
        {description}
      </Text>
      {!!info && <div className="k-HorizontalProjectCard__info">{info}</div>}
      {!noProgress && (
        <div className="k-HorizontalProjectCard__progress">
          <Progress
            aria-label={progressLabel}
            value={progress}
            color={progressColor}
            rampProps={{ style: { height: 4 } }}
            className="k-HorizontalProjectCard__progress__ramp"
          />
          <Text
            weight="400"
            size="micro"
            className="k-HorizontalProjectCard__progress__value"
          >
            {progress}&nbsp;%
          </Text>
        </div>
      )}
    </StyledCard>
  )
}

HorizontalProjectCard.propTypes = {
  href: PropTypes.string,
  imageProps: PropTypes.object,
  title: PropTypes.string,
  titleTag: PropTypes.string,
  description: PropTypes.string,
  info: PropTypes.node,
  progress: PropTypes.number,
  progressColor: PropTypes.string,
  progressLabel: PropTypes.string,
  noProgress: PropTypes.bool,
  noProgressOnMobile: PropTypes.bool,
}
