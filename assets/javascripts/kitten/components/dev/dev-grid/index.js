import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import {
  NUM_COLUMNS,
  CONTAINER_MAX_WIDTH,
  GUTTER,
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'
import { domElementHelper } from '../../../helpers/dom/element-helper'

const StyledDev = styled.div`
  .k-DevGrid {
    position: fixed;
    top: 0;
    z-index: calc(var(--DevGrid-z-index) - 1);
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .k-DevGrid__container {
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    max-width: ${pxToRem(CONTAINER_MAX_WIDTH)};
    padding-left: ${pxToRem(CONTAINER_PADDING_THIN)};
    padding-right: ${pxToRem(CONTAINER_PADDING_THIN)};
    height: 100%;
    outline: ${pxToRem(1)} dotted rgba(0, 0, 0, 0.2);

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-left: ${pxToRem(CONTAINER_PADDING)};
      padding-right: ${pxToRem(CONTAINER_PADDING)};
    }

    .k-DevGrid__row {
      height: 100%;
      box-sizing: border-box;
      display: flex;
      margin-right: ${pxToRem(-GUTTER / 2)};
      margin-left: ${pxToRem(-GUTTER / 2)};
    }

    .k-DevGrid__col {
      height: 100%;
      box-sizing: border-box;
      flex: 0 0 auto;
      padding-right: ${pxToRem(GUTTER / 2)};
      padding-left: ${pxToRem(GUTTER / 2)};
      flex-basis: calc(100% / ${NUM_COLUMNS});
      max-width: calc(100% / ${NUM_COLUMNS});
    }

    .k-DevGrid__inner {
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .k-DevBreakpoint {
    pointer-events: none;

    &:before {
      position: fixed;
      top: 0;
      left: 0;
      z-index: var(--DevGrid-z-index);
      width: 2em;
      height: 1.25em;
      padding: 0.25em;
      background: rgba(0, 0, 0, 0.1);
      border-bottom-right-radius: 0.25rem;
      text-align: center;
      text-transform: uppercase;
      font-size: ${stepToRem(-2)};
      line-height: 1.25;
      color: rgba(0, 0, 0, 0.75);
      content: 'xxs';

      @media (min-width: ${pxToRem(ScreenConfig.XS.min)}) {
        content: 'xs';
      }
      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        content: 's';
      }
      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        content: 'm';
      }
      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        content: 'l';
      }
      @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
        content: 'xl';
      }
    }
  }
`

// Grid over all elements that is toggled when calling Ctrl+G.
export const DevGrid = ({ visible, storageKey, zIndex }) => {
  const [isVisible, setVisibility] = useState(visible)

  useEffect(() => {
    domElementHelper.canUseDom() &&
      window.addEventListener('keydown', handleKeyDown)

    if (
      domElementHelper.canUseDom() &&
      window.sessionStorage.getItem(storageKey)
    ) {
      setVisibility(true)
    }

    return () =>
      domElementHelper.canUseDom() &&
      window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (isVisible) {
      domElementHelper.canUseDom() &&
        window.sessionStorage.setItem(storageKey, 'on')
    } else {
      domElementHelper.canUseDom() &&
        window.sessionStorage.removeItem(storageKey)
    }
  }, [isVisible])

  const handleKeyDown = e => {
    if (!e.ctrlKey || e.key !== 'g') return

    e.preventDefault()

    setVisibility(current => !current)
  }

  if (!isVisible) return null

  return (
    <StyledDev className="k-Dev" style={{ '--DevGrid-z-index': zIndex }}>
      <div className="k-DevBreakpoint" />
      <div className="k-DevGrid">
        <div className="k-DevGrid__container">
          <div className="k-DevGrid__row">
            {[...Array(NUM_COLUMNS).keys()].map(item => (
              <div className="k-DevGrid__col" key={`DevGrid_${item + 1}`}>
                <div className="k-DevGrid__inner" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledDev>
  )
}

DevGrid.defaultProps = {
  storageKey: 'k-devgrid',
  zIndex: 9999,
  visible: false,
}

DevGrid.propTypes = {
  storageKey: PropTypes.string,
  zIndex: PropTypes.number,
  visible: PropTypes.bool,
}
