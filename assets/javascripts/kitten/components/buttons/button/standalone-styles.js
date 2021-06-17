import styled, { css } from 'styled-components'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

export const FLUID = css`
  min-width: initial;
  width: 100%;
`

export const ROUNDED = css`
  border-radius: 50%;
`

export const DEFAULT = css`
  min-width: ${pxToRem(200)};
  min-height: ${pxToRem(50)};
  padding: ${pxToRem(10)} ${pxToRem(30)};
  font-size: ${stepToRem(-1)};
`

export const NANO = css`
  min-width: ${pxToRem(100)};
  min-height: ${pxToRem(20)};
  padding: 0 ${pxToRem(6)};
  font-size: ${stepToRem(-2)};
`

export const MICRO = css`
  min-width: ${pxToRem(130)};
  min-height: ${pxToRem(30)};
  padding: ${pxToRem(5)} ${pxToRem(10)};
  font-size: ${stepToRem(-2)};
`

export const TINY = css`
  min-width: ${pxToRem(160)};
  min-height: ${pxToRem(40)};
  padding: ${pxToRem(7)} ${pxToRem(20)};
  font-size: ${stepToRem(-1)};
`

export const BIG = css`
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    min-width: ${pxToRem(220)};
    min-height: ${pxToRem(70)};
    padding: ${pxToRem(10)} ${pxToRem(40)};
    font-size: ${stepToRem(0)};
  }
`

export const HUGE = css`
  min-height: ${pxToRem(70)};
  font-size: ${stepToRem(-1)};
  padding: ${pxToRem(10)} ${pxToRem(10)};

  @media (min-width: ${ScreenConfig.M.min}px) {
    min-width: ${pxToRem(220)};
    min-height: ${pxToRem(80)};
    font-size: ${stepToRem(0)};
    padding: ${pxToRem(10)} ${pxToRem(40)};
  }
`

export const GIANT = css`
  min-height: ${pxToRem(70)};
  font-size: ${stepToRem(-1)};
  padding: ${pxToRem(10)} ${pxToRem(10)};

  @media (min-width: ${ScreenConfig.M.min}px) {
    min-width: ${pxToRem(220)};
    min-height: ${pxToRem(90)};
    font-size: ${stepToRem(0)};
    padding: ${pxToRem(10)} ${pxToRem(40)};
  }
`

export const ICON = css`
  min-width: initial;
  min-height: initial;
  width: ${pxToRem(50)};
  height: ${pxToRem(50)};
  padding: 0;
`

export const ICON_NANO = css`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
`

export const ICON_MICRO = css`
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
`

export const ICON_TINY = css`
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
`

export const ICON_BIG = css`
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    min-width: 0;
    min-height: 0;
    padding: 0;
    width: ${pxToRem(70)};
    height: ${pxToRem(70)};
  }
`

export const ICON_HUGE = css`
  min-width: initial;
  width: ${pxToRem(70)};
  height: ${pxToRem(70)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    min-width: initial;
    width: ${pxToRem(80)};
    height: ${pxToRem(80)};
  }
`

export const ICON_GIANT = css`
  min-width: initial;
  width: ${pxToRem(70)};
  height: ${pxToRem(70)};

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    min-width: initial;
    width: ${pxToRem(90)};
    height: ${pxToRem(90)};
  }
`
