import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/fp/debounce'
import { Grid, GridCol } from '../../../../components/structure/grid'
import { VerticalStroke } from '../../../../components/atoms/vertical-stroke'
import { ScreenConfig } from '../../../../constants/screen-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import styled from 'styled-components'

const strokeHeight = 80
const marginStroke = 2
const tabletGutter = 50 / 2
const desktopGutter = 40 / 2

const StyledTriptych = styled(({ secondElementMarginTop, ...props }) => (
  <Grid {...props} />
))`
  .k-Triptych__verticalStroke {
    display: block;
    height: ${pxToRem(strokeHeight)};
    margin: 0 auto ${pxToRem(20)};

    @media (max-width: ${ScreenConfig.S.max}px) {
      height: ${pxToRem(50)};
    }
  }

  .k-Triptych__contentColumn.k-Triptych__contentColumn--odd {
    @media (min-width: ${ScreenConfig.L.min}px) {
      margin-top: -${pxToRem((strokeHeight * 2) / 3 + marginStroke * 10)};
    }
  }

  .k-Triptych__contentColumn:nth-last-child(3) {
    margin-bottom: ${pxToRem(50)};

    @media (min-width: ${pxToRem(
        ScreenConfig.M.min,
      )}) and (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      padding-left: ${pxToRem(tabletGutter)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      margin-bottom: 0;
      padding-right: ${pxToRem(desktopGutter)};
    }
  }
  .k-Triptych__contentColumn:nth-last-child(2) {
    margin-bottom: ${pxToRem(50)};

    @media (min-width: ${pxToRem(
        ScreenConfig.M.min,
      )}) and (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      transition: margin-top 500 ease;
      margin-top: ${({ secondElementMarginTop }) =>
        pxToRem(-secondElementMarginTop)};
      padding-right: ${pxToRem(tabletGutter)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      margin-bottom: 0;
      padding-right: ${pxToRem(desktopGutter)};
      padding-left: ${pxToRem(desktopGutter)};
    }
  }
  .k-Triptych__contentColumn:nth-last-child(1) {
    @media (min-width: ${pxToRem(
        ScreenConfig.M.min,
      )}) and (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      padding-left: ${pxToRem(tabletGutter)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      padding-left: ${pxToRem(desktopGutter)};
    }
  }
`

export const Triptych = ({ title, item1, item2, item3 }) => {
  const [secondElementMarginTop, setsecondElementMarginTop] = useState(0)
  const titleElement = useRef(null)
  const firstElement = useRef(null)

  const updateSecondCardMargin = () => {
    const titleHeight = titleElement.current.clientHeight
    const firstHeight = firstElement.current.clientHeight
    setsecondElementMarginTop(firstHeight - titleHeight)
  }

  const debounceUpdateMargin = () => debounce(200)(updateSecondCardMargin)

  useEffect(() => {
    debounceUpdateMargin()
    window.addEventListener('resize', debounceUpdateMargin)
    window.addEventListener('load', debounceUpdateMargin)
    return () => {
      window.removeEventListener('resize', debounceUpdateMargin)
      window.removeEventListener('load', debounceUpdateMargin)
    }
  }, [])

  return (
    <StyledTriptych
      className="k-Triptych k-u-align-center"
      secondElementMarginTop={secondElementMarginTop}
    >
      <GridCol col-l="10" offset-l="1" col-m="6" offset-m="0">
        <div ref={titleElement}>
          <div className="k-u-margin-bottom-double">{title}</div>

          <VerticalStroke
            size="huge"
            className="k-Triptych__verticalStroke k-u-margin-bottom-double"
          />
        </div>
      </GridCol>

      <GridCol
        col-l="4"
        col-m="6"
        className="k-Triptych__contentColumn k-Triptych__contentColumn--odd"
      >
        <div ref={firstElement}>{item1}</div>
      </GridCol>

      <GridCol col-l="4" col-m="6" className="k-Triptych__contentColumn">
        {item2}
      </GridCol>

      <GridCol
        col-l="4"
        col-m="6"
        className="k-Triptych__contentColumn k-Triptych__contentColumn--odd"
      >
        {item3}
      </GridCol>
    </StyledTriptych>
  )
}

Triptych.propTypes = {
  title: PropTypes.node.isRequired,
  item1: PropTypes.node.isRequired,
  item2: PropTypes.node.isRequired,
  item3: PropTypes.node.isRequired,
}
