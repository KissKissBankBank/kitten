import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { pxToRem, stepToRem } from '../../../../../helpers/utils/typography'
import COLORS from '../../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../../constants/typography-config'
import { ScreenConfig } from '../../../../../constants/screen-config'
import { CONTAINER_PADDING_THIN } from '../../../../../constants/grid-config'

const gridGapThin = pxToRem(10)
const mobileCardWidth = `(50vw - ${pxToRem(
  CONTAINER_PADDING_THIN,
)} - (${gridGapThin} / 2))`

const StyledNewsBlock = styled.div`
  .NewsBlockContent {
    display: grid;
    grid-gap: ${gridGapThin};
    width: 100%;
  }

  &.NewsBlock--2cols .NewsBlockContent {
    grid-template-columns: repeat(2, 1fr);
  }
  &.NewsBlock--3cols .NewsBlockContent {
    grid-template-columns: repeat(3, 1fr);
  }
  &.NewsBlock--4cols .NewsBlockContent {
    grid-template-columns: repeat(4, 1fr);
  }

  .newsBlock__NewsCard {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  .newsBlock__NewsCard__picture {
    max-width: 100%;
    position: relative;

    @media (orientation: portrait) {
      padding-top: calc(100% * 4 / 3);
    }
    @media (orientation: landscape) {
      padding-top: calc(100% * 1 / 2);
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .newsBlock__NewsCard__text {
    color: ${COLORS.font1};

    .newsBlock__NewsCard__title {
      margin: 0;
      font-size: ${stepToRem(0)};
      line-height: normal;
      line-height: 1.2;
      ${TYPOGRAPHY.fontStyles.bold}
    }
    .newsBlock__NewsCard__excerpt {
      margin: ${pxToRem(10)} 0 0;
      font-size: ${stepToRem(-2)};
      line-height: ${stepToRem(2)};
      ${TYPOGRAPHY.fontStyles.light}
    }

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      .newsBlock__NewsCard__title {
        font-size: ${stepToRem(2)};
      }
      .newsBlock__NewsCard__excerpt {
        font-size: ${stepToRem(-1)};
        line-height: ${stepToRem(3)};
      }
    }
  }

  .newsBlock__NewsCard__text {
    margin-top: ${pxToRem(10)};
  }

  &.NewsBlock--1cols {
    .newsBlock__NewsCard__picture {
      padding-top: calc(100% * 1 / 2);
    }
    .newsBlock__NewsCard__text {
      margin-top: ${pxToRem(20)};
    }
  }

  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    &.NewsBlock--3cols,
    &.NewsBlock--4cols {
      overflow-y: scroll;
      margin: 0 ${pxToRem(-CONTAINER_PADDING_THIN)};
    }
    &.NewsBlock--3cols .NewsBlockContent {
      padding: 0 ${pxToRem(CONTAINER_PADDING_THIN)};
      width: calc((3 * ${mobileCardWidth}) + (2 * ${gridGapThin}));
    }
    &.NewsBlock--4cols .NewsBlockContent {
      padding: 0 ${pxToRem(CONTAINER_PADDING_THIN)};
      width: calc((4 * ${mobileCardWidth}) + (3 * ${gridGapThin}));
    }
  }

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin: 0;

    .NewsBlockContent {
      grid-gap: ${pxToRem(40)};
    }

    .newsBlock__NewsCard.NewsCard--horizontal {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .newsBlock__NewsCard__text {
        flex: 0 1 calc(50% - ${pxToRem(15)});
        margin-top: 0;
      }

      .newsBlock__NewsCard__picture {
        flex: 0 1 calc(50% - ${pxToRem(15)});

        @media (orientation: landscape) {
          padding-top: calc(50% * 1 / 2);
        }
      }
    }

    .NewsCard--vertical .newsBlock__NewsCard__text {
      margin-top: ${pxToRem(30)};
    }

    &.NewsBlock--2cols .NewsCard--vertical,
    &.NewsBlock--1cols {
      .newsBlock__NewsCard__title {
        font-size: ${stepToRem(3)};
      }
      .newsBlock__NewsCard__excerpt {
        margin-top: ${pxToRem(15)};
        font-size: ${stepToRem(0)};
        line-height: ${stepToRem(4)};
      }
    }

    .newsBlock__NewsCard:first-child:last-child {
      flex-direction: row;
      align-items: center;

      .newsBlock__NewsCard__picture {
        width: calc(7 / 12 * 100%);

        @media (orientation: portrait) {
          padding-top: calc(7 / 12 * 100% * 4 / 3);
        }
        @media (orientation: landscape) {
          padding-top: calc(7 / 12 * 100% * 1 / 2);
        }
      }

      .newsBlock__NewsCard__text {
        margin-top: 0;
        margin-left: ${pxToRem(40)};
        width: calc(1 / 3 * 100%);
      }
    }
  }
`

export const NewsCard = ({ contents, horizontal = false, alone = false }) => (
  <a
    href="#"
    className={classNames('newsBlock__NewsCard', {
      'NewsCard--horizontal': horizontal,
      'NewsCard--vertical': !horizontal,
    })}
  >
    <picture className="newsBlock__NewsCard__picture">
      {!alone && (
        <>
          <source
            media="(orientation: portrait)"
            srcSet={contents.imageUrlPortrait}
          />
          <source
            media="(orientation: landscape)"
            srcSet={contents.imageUrlLandscape}
          />
        </>
      )}
      <img src={contents.imageUrlLandscape} alt="" />
    </picture>
    <div className="newsBlock__NewsCard__text">
      <h3 className="newsBlock__NewsCard__title">{contents.title}</h3>
      <p className="newsBlock__NewsCard__excerpt">{contents.excerpt}</p>
    </div>
  </a>
)

export const NewsBlock = ({ contents, horizontal = false }) => {
  return (
    <StyledNewsBlock className={`NewsBlock--${contents.length}cols`}>
      <div className="NewsBlockContent">
        {contents.map((card, index) => (
          <NewsCard
            contents={card}
            key={index}
            horizontal={horizontal}
            alone={contents.length === 1}
          />
        ))}
      </div>
    </StyledNewsBlock>
  )
}
