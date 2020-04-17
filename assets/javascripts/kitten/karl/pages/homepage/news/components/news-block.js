import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { pxToRem, stepToRem } from '../../../../../helpers/utils/typography'
import COLORS from '../../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../../constants/typography-config'
import { ScreenConfig } from '../../../../../constants/screen-config'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
} from '../../../../../constants/grid-config'

const gridGapThin = pxToRem(10)
const gridGapMedium = pxToRem(20)
const gridGapLarge = pxToRem(40)

const fourColumns = 'calc(1 / 3 * 100%)'
const sixColumns = '50%'
const sevenColumns = 'calc(7 / 12 * 100%)'
const twelveColumns = '100%'
const portraitImageRatio = 4 / 3
const landscapeImageRatio = 1 / 2

const mobileCardWidth = `(50vw - ${pxToRem(
  CONTAINER_PADDING_THIN,
)} - (${gridGapThin} / 2))`

const tabletCardWidth = `(50vw - ${pxToRem(
  CONTAINER_PADDING,
)} - (${gridGapMedium} / 2))`

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

  .newsBlock__NewsCard__link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  .newsBlock__NewsCard__picture {
    max-width: ${twelveColumns};
    position: relative;
    overflow: hidden;

    @media (orientation: portrait) {
      padding-top: calc(${twelveColumns} * ${portraitImageRatio});
    }
    @media (orientation: landscape) {
      padding-top: calc(${twelveColumns} * ${landscapeImageRatio});
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform .4s ease;
    }
  }

  .newsBlock__NewsCard__text {
    color: ${COLORS.font1};
    margin-top: ${pxToRem(15)};

    .newsBlock__NewsCard__title {
      margin: 0;
      font-size: ${stepToRem(0)};
      line-height: normal;
      line-height: 1.2;
      ${TYPOGRAPHY.fontStyles.bold}
      transition: color .4s ease;
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

  &.NewsBlock--1cols {
    .newsBlock__NewsCard__picture {
      padding-top: calc(${twelveColumns} * ${landscapeImageRatio});
    }
    .newsBlock__NewsCard__text {
      margin-top: ${pxToRem(20)};
    }
  }

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

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    &.NewsBlock--3cols,
    &.NewsBlock--4cols {
      overflow-y: scroll;
      margin: 0 ${pxToRem(-CONTAINER_PADDING)};
    }
    &.NewsBlock--3cols .NewsBlockContent {
      grid-gap: ${gridGapMedium};
      padding: 0 ${pxToRem(CONTAINER_PADDING)};
      width: calc((3 * ${tabletCardWidth}) + (2 * ${gridGapMedium}));
    }
    &.NewsBlock--4cols .NewsBlockContent {
      grid-gap: ${gridGapMedium};
      padding: 0 ${pxToRem(CONTAINER_PADDING)};
      width: calc((4 * ${tabletCardWidth}) + (3 * ${gridGapMedium}));
    }

    .newsBlock__NewsCard__text {
      margin-top: ${pxToRem(20)};

      .newsBlock__NewsCard__title {
        font-size: ${stepToRem(1)};
      }
    }

    &.NewsBlock--1cols .newsBlock__NewsCard__text .newsBlock__NewsCard__title {
      font-size: ${stepToRem(2)};
    }
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    && {
      overflow-y: auto;
      margin: 0;

      .NewsBlockContent {
        grid-gap: ${gridGapLarge};
        padding: 0;
        width: auto;
      }

      .newsBlock__NewsCard__text .newsBlock__NewsCard__title {
        font-size: ${stepToRem(2)};
      }

      .newsBlock__NewsCard.NewsCard--horizontal {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .newsBlock__NewsCard__text {
          flex: 0 1 calc(${sixColumns} - ${pxToRem(15)});
          margin-top: 0;
        }

        .newsBlock__NewsCard__picture {
          flex: 0 1 calc(${sixColumns} - ${pxToRem(15)});

          @media (orientation: landscape) {
            padding-top: calc(${sixColumns} * ${landscapeImageRatio});
          }
        }
      }

      .newsBlock__NewsCard.NewsCard--vertical .newsBlock__NewsCard__text {
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
          width: ${sevenColumns};

          @media (orientation: portrait) {
            padding-top: calc(${sevenColumns} * ${portraitImageRatio});
          }
          @media (orientation: landscape) {
            padding-top: calc(${sevenColumns} * ${landscapeImageRatio});
          }
        }

        .newsBlock__NewsCard__text {
          margin-top: 0;
          margin-left: ${pxToRem(40)};
          width: ${fourColumns};
        }
      }
    }

    .newsBlock__NewsCard__link:hover,
    .newsBlock__NewsCard__link:focus,
    .newsBlock__NewsCard__link:active {
      .newsBlock__NewsCard__picture img {
        transform: scale(1.07);
      }
      .newsBlock__NewsCard__title {
        color: ${COLORS.primary2}
      }

    }

  }
`

export const NewsCard = ({ contents, horizontal = false, alone = false }) => (
  <article
    className={classNames('newsBlock__NewsCard', {
      'NewsCard--horizontal': horizontal,
      'NewsCard--vertical': !horizontal,
    })}
  >
    <a href={contents.url} className="newsBlock__NewsCard__link">
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
  </article>
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
