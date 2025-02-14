import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import {
  pxToRem,
  stepToRem,
  COLORS,
  TYPOGRAPHY,
  ScreenConfig,
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
} from 'kitten'

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

  .NewsBlock__newsCard__link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  .NewsBlock__newsCard__picture {
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
      transition: transform 0.4s ease;
    }
  }

  .NewsBlock__newsCard__text {
    color: ${COLORS.font1};
    margin-top: ${pxToRem(15)};

    .NewsBlock__newsCard__title {
      margin: 0;
      font-size: ${stepToRem(0)};
      line-height: normal;
      line-height: 1.2;
      ${TYPOGRAPHY.fontStyles['700']}
      transition: color .4s ease;
    }
    .NewsBlock__newsCard__excerpt {
      margin: ${pxToRem(10)} 0 0;
      font-size: ${stepToRem(-2)};
      line-height: ${stepToRem(2)};
      ${TYPOGRAPHY.fontStyles['400']}
    }

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      .NewsBlock__newsCard__title {
        font-size: ${stepToRem(2)};
      }
      .NewsBlock__newsCard__excerpt {
        font-size: ${stepToRem(-1)};
        line-height: ${stepToRem(3)};
      }
    }
  }

  &.NewsBlock--1cols {
    .NewsBlock__newsCard__picture {
      padding-top: calc(${twelveColumns} * ${landscapeImageRatio});
    }
    .NewsBlock__newsCard__text {
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

    .NewsBlock__newsCard__text {
      margin-top: ${pxToRem(20)};

      .NewsBlock__newsCard__title {
        font-size: ${stepToRem(1)};
      }
    }

    &.NewsBlock--1cols .NewsBlock__newsCard__text .NewsBlock__newsCard__title {
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

      .NewsBlock__newsCard__text .NewsBlock__newsCard__title {
        font-size: ${stepToRem(2)};
      }

      .NewsBlock__newsCard.NewsCard--horizontal .NewsBlock__newsCard__link {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .NewsBlock__newsCard__text {
          flex: 0 1 calc(${sixColumns} - ${pxToRem(15)});
          margin-top: 0;
        }

        .NewsBlock__newsCard__picture {
          flex: 0 1 calc(${sixColumns} - ${pxToRem(15)});

          @media (orientation: landscape) {
            padding-top: calc(${sixColumns} * ${landscapeImageRatio});
          }
        }
      }

      .NewsBlock__newsCard.NewsCard--vertical .NewsBlock__newsCard__text {
        margin-top: ${pxToRem(30)};
      }

      &.NewsBlock--2cols .NewsCard--vertical,
      &.NewsBlock--1cols {
        .NewsBlock__newsCard__title {
          font-size: ${stepToRem(3)};
        }
        .NewsBlock__newsCard__excerpt {
          margin-top: ${pxToRem(15)};
          font-size: ${stepToRem(0)};
          line-height: ${stepToRem(4)};
        }
      }

      .NewsBlock__newsCard:first-child:last-child .NewsBlock__newsCard__link {
        flex-direction: row;
        align-items: center;

        .NewsBlock__newsCard__picture {
          width: ${sevenColumns};

          @media (orientation: portrait) {
            padding-top: calc(${sevenColumns} * ${portraitImageRatio});
          }
          @media (orientation: landscape) {
            padding-top: calc(${sevenColumns} * ${landscapeImageRatio});
          }
        }

        .NewsBlock__newsCard__text {
          margin-top: 0;
          margin-left: ${pxToRem(40)};
          width: ${fourColumns};
        }
      }
    }

    .NewsBlock__newsCard__link:hover,
    .NewsBlock__newsCard__link:focus,
    .NewsBlock__newsCard__link:active {
      .NewsBlock__newsCard__picture img {
        transform: scale(1.07);
      }
      .NewsBlock__newsCard__title {
        color: ${COLORS.primary2};
      }
    }
  }
`

export const NewsCard = ({ contents, horizontal = false, alone = false }) => (
  <article
    className={classNames('NewsBlock__newsCard', {
      'NewsCard--horizontal': horizontal,
      'NewsCard--vertical': !horizontal,
    })}
  >
    <a href={contents.url} className="NewsBlock__newsCard__link">
      <picture className="NewsBlock__newsCard__picture">
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
      <div className="NewsBlock__newsCard__text">
        <h3 className="NewsBlock__newsCard__title">{contents.title}</h3>
        <p className="NewsBlock__newsCard__excerpt">{contents.excerpt}</p>
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
