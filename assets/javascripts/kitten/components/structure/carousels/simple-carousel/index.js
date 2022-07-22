import React, { Children, useRef, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from '../../../../constants/colors-config'
import { mq } from '../../../../constants/screen-config'
import { createRangeFromZeroTo } from '../../../../helpers/utils/range'
import { pxToRem } from '../../../../helpers/utils/typography'
import { VisuallyHidden } from '../../../accessibility/visually-hidden'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(40)};

  @media ${mq.tabletAndDesktop} {
    gap: ${pxToRem(20)};
  }

  .k-SimpleCarousel__container {
    display: grid;
    gap: 0;

    > div {
      grid-column: 1;
      grid-row: 1;
      visibility: visible;
      opacity: 1;
      transition: all calc(var(--transition-timing) * 3) var(--transition-timing-function);

      &[aria-hidden] {
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
      }
    }
  }

  .k-SimpleCarousel__pagination {
    display: flex;
    justify-content: var(--simple-carousel-paginationAlign);
    gap:${pxToRem(8)};

    li {
      list-style-type: none;
    }
  }

  .k-SimpleCarousel__button {
    position: relative;
    display: block;
    width: ${pxToRem(8)};
    height: ${pxToRem(8)};
    border-radius: var(--border-radius-rounded);
    transition: background var(--transition);
    background: var(--simple-carousel-paginationColor);
    outline-offset: ${pxToRem(2)};

    &::after {
      content: '';
      position: absolute;
      top: ${pxToRem(-4)};
      left: ${pxToRem(-4)};
      right: ${pxToRem(-4)};
      bottom: ${pxToRem(-4)};
    }

    &:hover,
    &[aria-selected='true'] {
      background: var(--simple-carousel-activePaginationColor);
    }
  }

`

export const SimpleCarousel = ({
  className,
  children,
  containerStyle,
  activePaginationColor,
  paginationColor,
  paginationAlign,
  paginationStyle,
  bulletStyle,
  id,
  ...props
}) => {
  const paginationRef = useRef(null)
  const [currentPageNumber, setCurrentPageNumber] = useState(0)
  const [totalPagesCount,] = useState(Children.toArray(children).length)

  const handlePageClick = numPage => () => {
    setCurrentPageNumber(numPage)
  }

  const handleKeyDown = event => {
    if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
      const tabs = paginationRef.current.querySelectorAll('button')
      tabs[currentPageNumber].setAttribute('tabindex', -1)

      // default: ArrowLeft
      let pageNumber = currentPageNumber - 1
      if (pageNumber < 0) {
        pageNumber = totalPagesCount - 1
      }

      // change in case of ArrowRight
      if (event.key === 'ArrowRight') {
        pageNumber = currentPageNumber + 1
        if (pageNumber >= totalPagesCount) {
          pageNumber = 0
        }
      }

      setCurrentPageNumber(pageNumber)
      tabs[pageNumber].setAttribute('tabindex', 0)
      tabs[pageNumber].focus()
    }
  }

  const rangePage = createRangeFromZeroTo(totalPagesCount)

  return (
    <StyledWrapper
      className={classNames('k-SimpleCarousel', className)}
      style={{
        '--simple-carousel-paginationAlign': paginationAlign,
        '--simple-carousel-paginationColor': paginationColor,
        '--simple-carousel-activePaginationColor': activePaginationColor,
      }}
      {...props}
    >
      <div
        style={containerStyle}
        className="k-SimpleCarousel__container"
      >
        {Children.map(children, (item, index) => {
          return (
            <div
              key={item.key}
              aria-hidden={index !== currentPageNumber || null}
              id={`${id}_carouselItem_${index}`}
              aria-labelledby={`${id}_carouselTab_${index}`}
              role="tabpanel"
            >
              {item}
            </div>
          )
        })}
      </div>

      {totalPagesCount > 1 && (
        <div
          className="k-SimpleCarousel__pagination"
          style={paginationStyle}
          role="tablist"
          onKeyDown={handleKeyDown}
          ref={paginationRef}
        >
          {rangePage.map(numPage => {
            return (
              <button
                key={numPage}
                className="k-SimpleCarousel__button k-u-reset-button"
                id={`${id}_carouselTab_${numPage}`}
                type="button"
                aria-controls={`${id}_carouselItem_${numPage}`}
                role="tab"
                aria-selected={numPage === currentPageNumber}
                style={bulletStyle}
                onClick={handlePageClick(numPage)}
              >
                <VisuallyHidden>{`Page ${numPage + 1}`}</VisuallyHidden>
              </button>
            )
          })}
        </div>
      )}
    </StyledWrapper>
  )
}

SimpleCarousel.propTypes = {
  id: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,
  activePaginationColor: PropTypes.string,
  paginationColor: PropTypes.string,
  paginationAlign: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'space-between',
    'space-around',
  ]),
  paginationStyle: PropTypes.object,
  bulletStyle: PropTypes.object,
}

SimpleCarousel.defaultProps = {
  containerStyle: {},
  activePaginationColor: COLORS.font1,
  paginationColor: COLORS.line2,
  paginationAlign: 'start',
  paginationStyle: {},
  bulletStyle: {},
}

